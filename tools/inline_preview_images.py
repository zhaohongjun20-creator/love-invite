"""把 preview.html 里的 IMG 路径换成内联 base64，做成单文件自包含预览。

- 预览显示宽度只有 220pt（相框 440rpx × 0.5），按 2x 屏取 440px 宽足够
- 顺带解决 file:// 下 canvas 被污染无法 toDataURL 的问题（data URL 不算跨源）
- 换立绘后重跑本脚本即可
"""
import base64, io, os, re
from PIL import Image

PROJ = r"C:\Users\15804\ZCodeProject\love-date-miniprogram"
HTML = os.path.join(PROJ, "preview.html")
CHAR = os.path.join(PROJ, "assets", "char")
MOODS = ["normal", "shy", "happy", "excited", "love"]
WIDTH = 440

entries = []
for m in MOODS:
    im = Image.open(os.path.join(CHAR, m + ".jpg")).convert("RGB")
    im = im.resize((WIDTH, round(im.height * WIDTH / im.width)), Image.LANCZOS)
    buf = io.BytesIO()
    im.save(buf, "JPEG", quality=84, optimize=True, progressive=True)
    b64 = base64.b64encode(buf.getvalue()).decode("ascii")
    entries.append("  %-8s 'data:image/jpeg;base64,%s'" % (m + ":", b64))
    print(f"{m:8s} {im.size}  {len(b64)/1024:.0f} KB(base64)")

block = "const IMG = {\n" + ",\n".join(entries) + "\n};"

with open(HTML, encoding="utf-8") as f:
    src = f.read()

new, n = re.subn(r"const IMG = \{.*?\n\};", block, src, count=1, flags=re.S)
assert n == 1, "IMG 块没匹配上"
with open(HTML, "w", encoding="utf-8") as f:
    f.write(new)
print("preview.html ->", round(os.path.getsize(HTML) / 1024), "KB")
