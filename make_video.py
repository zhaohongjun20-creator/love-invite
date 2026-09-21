"""合成八音盒 BGM wav（与页面同款 Am-F-C-G 琶音）并合成演示视频。"""
import math, struct, wave, subprocess, os
import numpy as np
import imageio_ffmpeg

SR = 44100
N = {"C3":130.81,"F3":174.61,"G3":196.00,"A3":220.00,"B3":246.94,
     "C4":261.63,"D4":293.66,"E4":329.63,"F4":349.23,"G4":392.00,"A4":440.00,"B4":493.88,
     "C5":523.25,"D5":587.33,"E5":659.25,"G5":783.99}
PROG = [ (["A3","E4","A4","C5"], "E5"),
         (["F3","C4","F4","A4"], "C5"),
         (["C4","G4","C5","E5"], "G5"),
         (["G3","D4","G4","B4"], "D5") ]

def note(freq, dur, vol):
    n = int(SR * (dur + 0.05))
    t = np.arange(n) / SR
    sig = np.sin(2*np.pi*freq*t) + 0.18*np.sin(2*np.pi*freq*3*t)
    env = np.minimum(t/0.012, 1.0) * np.exp(-t/0.55)
    return sig * env * vol

total_bars = 6                     # 6 小节 × 2s = 12s ≥ 视频时长
buf = np.zeros(int(SR * (total_bars*2 + 1)))
for bar in range(total_bars):
    arp, mel = PROG[bar % 4]
    base = int(SR * bar * 2)
    for i, name in enumerate(arp):
        s = note(N[name], 1.6, 0.30)
        pos = base + int(SR * i * 0.5)
        end = min(pos + len(s), len(buf))
        buf[pos:end] += s[:end - pos]
    m = note(N[mel], 1.9, 0.14)
    end = min(base + len(m), len(buf))
    buf[base:end] += m[:end - base]

buf = buf[:int(SR * 11.6)] * 0.55
buf = np.tanh(buf) * 0.85          # 轻限幅防爆音
pcm = (buf * 32767).astype(np.int16).tobytes()
with wave.open("bgm_demo.wav", "wb") as w:
    w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR)
    w.writeframes(pcm)
print("wav ok:", round(len(buf)/SR, 1), "s")

# 合成视频：帧序列 + wav
ffmpeg = imageio_ffmpeg.get_ffmpeg_exe()
r = subprocess.run([
    ffmpeg, "-y",
    "-framerate", "10", "-i", "video_frames/f%04d.png",
    "-i", "bgm_demo.wav",
    "-c:v", "libx264", "-preset", "veryfast", "-crf", "21",
    "-pix_fmt", "yuv420p", "-vf", "scale=780:1688",
    "-c:a", "aac", "-b:a", "160k", "-shortest",
    "love_invite_demo.mp4",
], capture_output=True, text=True, timeout=600)
print("video exit:", r.returncode, r.stderr[-200:] if r.returncode else "")
print("size MB:", round(os.path.getsize("love_invite_demo.mp4")/1e6, 1))
