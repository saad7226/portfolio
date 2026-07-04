import os
import glob
from PIL import Image
import imageio_ffmpeg
import subprocess

PUBLIC_DIR = "public"

def optimize_images():
    print("Optimizing images...")
    png_files = glob.glob(os.path.join(PUBLIC_DIR, "*.png"))
    for png in png_files:
        try:
            webp_path = png.rsplit('.', 1)[0] + '.webp'
            with Image.open(png) as img:
                # Keep colors intact, just convert to webp format
                if img.mode in ("RGBA", "P"):
                    img = img.convert("RGBA")
                else:
                    img = img.convert("RGB")
                img.save(webp_path, "WEBP", quality=80)
            os.remove(png)
            print(f"Converted and removed: {png} -> {webp_path}")
        except Exception as e:
            print(f"Error processing {png}: {e}")

def optimize_videos():
    print("Optimizing videos...")
    mp4_files = glob.glob(os.path.join(PUBLIC_DIR, "*.mp4"))
    ffmpeg_exe = imageio_ffmpeg.get_ffmpeg_exe()
    
    for mp4 in mp4_files:
        try:
            # Skip if already optimized in a previous run (we replace the file though)
            temp_output = mp4.rsplit('.', 1)[0] + '_opt.mp4'
            print(f"Compressing {mp4}...")
            
            # Using veryfast preset to save time, crf 28 for good compression, 720p max height
            # +faststart is crucial for web videos to start playing immediately
            cmd = [
                ffmpeg_exe,
                "-y", # overwrite
                "-i", mp4,
                "-vcodec", "libx264",
                "-crf", "28",
                "-preset", "veryfast",
                "-vf", "scale=-2:720", # max 720p height, proportional width
                "-movflags", "+faststart",
                "-acodec", "aac",
                temp_output
            ]
            
            # We don't want stdout to pollute our logs too much, but stderr shows progress
            subprocess.run(cmd, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
            
            # Replace old file with new file
            os.replace(temp_output, mp4)
            print(f"Successfully compressed: {mp4}")
            
        except Exception as e:
            print(f"Error processing {mp4}: {e}")

if __name__ == "__main__":
    optimize_images()
    optimize_videos()
