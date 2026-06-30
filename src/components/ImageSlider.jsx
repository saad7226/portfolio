import { useState, useEffect, useRef } from 'react';

/**
 * A media slider that auto-advances through images and videos
 * @param {Array} media - Array of { type: 'image'|'video', src: string, alt?: string }
 * @param {number} interval - Auto-advance interval in ms (default 4000)
 */
export default function ImageSlider({ media = [], interval = 4000, name = '' }) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);
  const videoRefs = useRef({});

  const total = media.length;

  const next = (e) => {
    if (e) e.stopPropagation();
    if (total > 1) setCurrent((c) => (c + 1) % total);
  };

  const prev = (e) => {
    if (e) e.stopPropagation();
    if (total > 1) setCurrent((c) => (c - 1 + total) % total);
  };

  const goTo = (idx) => {
    if (total > 1) setCurrent(idx);
  };

  useEffect(() => {
    if (total <= 1) return;

    clearInterval(timerRef.current);
    const currentMedia = media[current];
    
    // Auto-advance with timer ONLY if it's an image
    // Videos will advance via onEnded event
    if (currentMedia?.type !== 'video') {
      timerRef.current = setInterval(next, interval);
    }

    return () => clearInterval(timerRef.current);
  }, [current, total, interval, media]);

  useEffect(() => {
    // Pause all videos
    Object.values(videoRefs.current).forEach((v) => {
      if (v) v.pause();
    });
    
    const currentMedia = media[current];
    if (currentMedia?.type === 'video') {
      const vid = videoRefs.current[current];
      if (vid) {
        vid.currentTime = 0;
        vid.play().catch(() => {
          // Fallback to normal timer if browser blocks autoplay
          if (total > 1) {
            clearInterval(timerRef.current);
            timerRef.current = setInterval(next, interval);
          }
        });
      }
    }
  }, [current, media, total, interval]);

  if (!total) return (
    <div className="slider-container slider-empty">
      <div className="slider-no-media">
        <span className="slider-no-media-name">{name}</span>
      </div>
    </div>
  );

  const currentItem = media[current];

  return (
    <div className="slider-container">
      {media.map((item, i) => (
        <div key={i} className={`slider-slide ${i === current ? 'active' : ''}`}>
          {item.type === 'video' ? (
            <video
              ref={(el) => (videoRefs.current[i] = el)}
              className="slider-video"
              src={item.src}
              muted
              playsInline
              preload="none"
              onEnded={next}
            />
          ) : (
            <img
              className="slider-image"
              src={item.src}
              alt={item.alt || `Screenshot ${i + 1}`}
              loading="lazy"
            />
          )}
        </div>
      ))}

      {/* Video indicator */}
      {currentItem?.type === 'video' && (
        <div className="video-indicator">
          <div className="video-dot" />
          VIDEO DEMO
        </div>
      )}

      {/* Counter */}
      {total > 1 && (
        <div className="slider-counter">{current + 1} / {total}</div>
      )}

      {/* Arrow controls */}
      {total > 1 && (
        <div className="slider-arrows">
          <button className="slider-arrow" onClick={prev} aria-label="Previous">‹</button>
          <button className="slider-arrow" onClick={next} aria-label="Next">›</button>
        </div>
      )}

      {/* Dot controls */}
      {total > 1 && (
        <div className="slider-controls">
          {media.map((_, i) => (
            <button
              key={i}
              className={`slider-dot ${i === current ? 'active' : ''}`}
              onClick={(e) => { e.stopPropagation(); goTo(i); }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
