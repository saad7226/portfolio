import os
import glob
import subprocess
import imageio_ffmpeg

PUBLIC_DIR = "public"
ffmpeg_exe = imageio_ffmpeg.get_ffmpeg_exe()
mp4_files = glob.glob(os.path.join(PUBLIC_DIR, "*.mp4"))

for mp4 in mp4_files:
    size_mb = os.path.getsize(mp4) / (1024 * 1024)
    print(f"Compressing {mp4} ({size_mb:.1f} MB)...")
    temp_output = mp4 + ".tmp.mp4"
    # scale: keep width proportional, cap height at 720p
    vf_scale = "scale=-2:min(720\\,ih)"
    cmd = [
        ffmpeg_exe, "-y",
        "-i", mp4,
        "-vcodec", "libx264",
        "-crf", "28",
        "-preset", "veryfast",
        "-vf", vf_scale,
        "-movflags", "+faststart",
        "-acodec", "aac",
        temp_output,
    ]
    result = subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    if result.returncode == 0:
        new_size = os.path.getsize(temp_output) / (1024 * 1024)
        os.replace(temp_output, mp4)
        print(f"  Done! {size_mb:.1f} MB -> {new_size:.1f} MB  (saved {size_mb - new_size:.1f} MB)")
    else:
        print(f"  ERROR compressing {mp4}")
        if os.path.exists(temp_output):
            os.remove(temp_output)

print("\nAll videos compressed!")
