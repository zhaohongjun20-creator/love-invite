"""合成拒绝按钮主角片：头卡 + 主体帧 + 尾卡 + 八音盒BGM。"""
import math, subprocess, os, shutil
from pathlib import Path
import numpy as np
import wave
import imageio_ffmpeg

FRAMES = Path("btn_frames")
TMP = Path("_seq")
TMP.mkdir(exist_ok=True)
for old in TMP.glob("*.png"):
    old.unlink()

# 拼帧序：开卡×15 → 主体 → 尾卡×15
files = sorted(FRAMES.glob("f*.png"))
n = 0
def put(p, times):
    global n
    for _ in range(times):
        shutil.copy(p, TMP / f"s{n:04d}.png")
        n += 1
put(FRAMES / "card_open.png", 15)
for f in files:
    put(f, 1)
put(FRAMES / "card_end.png", 15)
total = n / 10
print("seq frames:", n, "duration:", round(total, 1), "s")

# 八音盒 BGM（与页面同款旋律，音量稍活泼）
SR = 44100
Nf = {"C3":130.81,"F3":174.61,"G3":196.00,"A3":220.00,"B3":246.94,
      "C4":261.63,"D4":293.66,"E4":329.63,"F4":349.23,"G4":392.00,"A4":440.00,"B4":493.88,
      "C5":523.25,"D5":587.33,"E5":659.25,"G5":783.99}
PROG = [(["A3","E4","A4","C5"], "E5"), (["F3","C4","F4","A4"], "C5"),
        (["C4","G4","C5","E5"], "G5"), (["G3","D4","G4","B4"], "D5")]

def note(freq, dur, vol):
    k = int(SR * (dur + 0.05))
    t = np.arange(k) / SR
    sig = np.sin(2*np.pi*freq*t) + 0.18*np.sin(2*np.pi*freq*3*t)
    env = np.minimum(t/0.012, 1.0) * np.exp(-t/0.55)
    return sig * env * vol

buf = np.zeros(int(SR * (total + 1.5)))
bars = int(total // 2) + 2
for bar in range(bars):
    arp, mel = PROG[bar % 4]
    base = int(SR * bar * 2)
    if base >= len(buf):
        break
    for i, name in enumerate(arp):
        s = note(Nf[name], 1.6, 0.30)
        pos = base + int(SR * i * 0.5)
        end = min(pos + len(s), len(buf))
        if pos < len(buf):
            buf[pos:end] += s[:end-pos]
    m = note(Nf[mel], 1.9, 0.14)
    end = min(base + len(m), len(buf)); buf[base:end] += m[:end-base]

buf = buf[:int(SR * total)] * 0.55
buf = np.tanh(buf) * 0.85
with wave.open("_btn_bgm.wav", "wb") as w:
    w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR)
    w.writeframes((buf * 32767).astype(np.int16).tobytes())

r = subprocess.run([
    imageio_ffmpeg.get_ffmpeg_exe(), "-y",
    "-framerate", "10", "-i", str(TMP / "s%04d.png"),
    "-i", "_btn_bgm.wav",
    "-c:v", "libx264", "-preset", "veryfast", "-crf", "21",
    "-pix_fmt", "yuv420p", "-vf", "scale=780:1688",
    "-c:a", "aac", "-b:a", "160k", "-shortest",
    "button_demo.mp4",
], capture_output=True, text=True, timeout=600)
print("exit:", r.returncode, r.stderr[-150:] if r.returncode else "")
print("size MB:", round(os.path.getsize("button_demo.mp4")/1e6, 1))
shutil.rmtree(TMP, ignore_errors=True)
os.remove("_btn_bgm.wav")
