# -*- coding: utf-8 -*-
"""收工三连：1) 裁水印 2) 重建 preview.html 六角色 CHAR_SETS（含主题）3) 输出体积报告"""
import os, sys, io, re, base64
from PIL import Image

sys.stdout.reconfigure(errors="replace")
PROJ = r"C:/Users/15804/Documents/love-invite"
HTML = os.path.join(PROJ, "preview.html")
MOODS = ["normal", "shy", "happy", "excited", "love"]

# ---------- 1. 裁水印（右下角 AI生成，按比例微裁） ----------
def crop_watermark(path):
    im = Image.open(path).convert("RGB")
    w, h = im.size          # 720x1021
    box = (25, 0, 695, 940)          # 去掉底部水印区，保持 ~0.705 比例
    im = im.crop(box).resize((720, 1021), Image.LANCZOS)
    im.save(path, "JPEG", quality=86, optimize=True)

new_dirs = ["assets/char", "assets/char/girl2", "assets/char/girl3", "assets/char/male", "assets/char/male2", "assets/char/male3"]
n = 0
for d in new_dirs:
    for m in MOODS:
        p = os.path.join(PROJ, d, m + ".jpg")
        if os.path.exists(p):
            crop_watermark(p)
            n += 1
print(f"1) 水印处理: {n} 张")

# ---------- 2. 重建 CHAR_SETS（六角色 + 主题 + base64 内联） ----------
# 主题值与 config/character.js THEMES 一致
THEMES = {
  "peach":  dict(page="#f3edf0", bg1="#ffeaf1", bg2="#ffd6e4", bg3="#ffe0cf", accent="#e8556e", accent2="#ff8fb0", accentDeep="#c2185b", mid="#b0395c", border="#ffc9d4", borderSoft="#ffd6e2", tint="#ffe3ec", tint2="#ffb0c6", opt1="#fff3f6", opt2="#ffe6ee", shadow="232,85,110", shadow2="238,107,122", frameBg="#ffe9ef"),
  "lemon":  dict(page="#eef0f8", bg1="#edf1ff", bg2="#dfe3ff", bg3="#e4ecff", accent="#5b6ee8", accent2="#93a5ff", accentDeep="#3b4bc0", mid="#4b559c", border="#c9d2ff", borderSoft="#dde3ff", tint="#e0e5ff", tint2="#a9b6ff", opt1="#f2f4ff", opt2="#e2e8ff", shadow="91,110,232", shadow2="98,116,230", frameBg="#e8ecff"),
  "pomelo": dict(page="#faf1e6", bg1="#fff3e2", bg2="#ffe0bb", bg3="#ffe8cd", accent="#e8933e", accent2="#ffbe6b", accentDeep="#b05f14", mid="#a8702e", border="#ffd9a8", borderSoft="#ffe3bd", tint="#ffedd2", tint2="#ffc97e", opt1="#fff8ee", opt2="#ffefd6", shadow="232,147,62", shadow2="235,150,70", frameBg="#fff0d8"),
  "stream": dict(page="#eef2f5", bg1="#edf4f9", bg2="#d8e6f0", bg3="#e3edf4", accent="#4a7fa8", accent2="#7fb3d8", accentDeep="#2d5a80", mid="#3f6a8c", border="#bcd6e8", borderSoft="#d5e5f0", tint="#ddebf5", tint2="#9dc4e0", opt1="#f2f8fb", opt2="#e0edf6", shadow="74,127,168", shadow2="84,136,176", frameBg="#e8f1f7"),
  "ink":    dict(page="#eff2ec", bg1="#eef4e9", bg2="#dce9d4", bg3="#e6eedd", accent="#3e7c5b", accent2="#6fae8c", accentDeep="#26543e", mid="#3d6b52", border="#bcd8c7", borderSoft="#d5e8dc", tint="#dfe9e1", tint2="#94c4a8", opt1="#f3f8f4", opt2="#e3f0e7", shadow="62,124,91", shadow2="72,133,99", frameBg="#ecf3ee"),
  "flame":  dict(page="#f9ebe6", bg1="#ffeee7", bg2="#ffc2ac", bg3="#ffd0bd", accent="#e8452e", accent2="#ff7a5c", accentDeep="#b02a18", mid="#a83c2c", border="#ffc4b8", borderSoft="#ffd6cb", tint="#ffe0d8", tint2="#ff9d84", opt1="#fff5f2", opt2="#ffe4db", shadow="232,69,46", shadow2="236,80,58", frameBg="#ffefe9"),
}

SETS = [
    ("girl",  "小桃", "女生", "👧", "assets/char",        "peach"),
    ("girl2", "星柠", "星夜", "🌟", "assets/char/girl2",  "lemon"),
    ("girl3", "柚茶", "元气", "🍊", "assets/char/girl3",  "pomelo"),
    ("boy",   "小川", "男生", "👦", "assets/char/male",   "stream"),
    ("boy2",  "墨白", "文艺", "🍃", "assets/char/male2",  "ink"),
    ("boy3",  "炎阳", "热血", "🔥", "assets/char/male3",  "flame"),
]

def img_b64(path):
    im = Image.open(path).convert("RGB")
    w, h = im.size
    nw = 440
    im = im.resize((nw, round(h * nw / w)), Image.LANCZOS)
    buf = io.BytesIO()
    im.save(buf, "JPEG", quality=80, optimize=True, progressive=True)
    return "data:image/jpeg;base64," + base64.b64encode(buf.getvalue()).decode("ascii")

def theme_js(t):
    pairs = ", ".join(f"{k}: '{v}'" for k, v in t.items())
    return "theme: { " + pairs + " }"

blocks = []
for key, name, label, avatar, d, theme_key in SETS:
    entries = []
    for m in MOODS:
        p = os.path.join(PROJ, d, m + ".jpg")
        if not os.path.exists(p):          # 炎阳缺的表情 → 用 normal 兜底
            p = os.path.join(PROJ, d, "normal.jpg")
        entries.append(f"    {m}:  '{img_b64(p)}'")
    images = ",\n".join(entries)
    blocks.append(
        f"  {key}: {{\n    name: '{name}', label: '{label}', avatar: '{avatar}',\n"
        f"    {theme_js(THEMES[theme_key])},\n    images: {{\n{images}\n    }}\n  }}"
    )

new_block = "const CHAR_SETS = {\n" + ",\n".join(blocks) + "\n};"

src = open(HTML, encoding="utf-8").read()
new, cnt = re.subn(r"const CHAR_SETS = \{.*?\n\};", lambda m: new_block, src, count=1, flags=re.S)
assert cnt == 1, "CHAR_SETS 块没匹配上"
open(HTML, "w", encoding="utf-8").write(new)
print(f"2) preview.html 重建完成: {os.path.getsize(HTML)/1024/1024:.2f} MB, 6 角色内联")
