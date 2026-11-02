# -*- coding: utf-8 -*-
"""审核意见修复：1)爱心改主题色 2)躲猫猫按钮避开切换器 3)火焰主题背景加深"""
import sys, os
sys.stdout.reconfigure(errors="replace")
PROJ = r"C:/Users/15804/Documents/love-invite"

def patch(path, pairs, must=True):
    p = os.path.join(PROJ, path)
    src = open(p, encoding="utf-8").read()
    for old, new in pairs:
        if old not in src:
            if must:
                print(f"  [警告] {path} 未找到: {old[:50]}")
            continue
        src = src.replace(old, new)
    open(p, "w", encoding="utf-8").write(src)
    print(f"OK {path}")

# ---- 1. 爱心 → 主题色（♥ 字符 + var 着色） ----
patch("pages/index/index.js", [
    ("const chars = ['💖', '💗', '💓', '💘', '💕', '🌸'];", "const chars = ['♥', '♡'];"),
])
patch("pages/index/index.wxss", [
    (".bg-heart {", ".bg-heart {\n  color: var(--fv-accent);"),
])
patch("preview.html", [
    ("const chars=['💖','💗','💓','💘','💕','🌸'];", "const chars=['♥'];"),
    (".bg-heart { position:absolute; top:-60px; font-size:30px; opacity:.55;",
     ".bg-heart { position:absolute; top:-60px; font-size:30px; opacity:.4; color:var(--fv-accent);"),
])

# ---- 2. 躲猫猫按钮：初始位与游走范围避开角色切换器 ----
patch("utils/dodge.js", [
    ("return { noText: TEXTS[0], noLeft: 210, noTop: 600, noScale: 1 };",
     "return { noText: TEXTS[0], noLeft: 210, noTop: 900, noScale: 1 };"),
    ("  const top = 150 + Math.random() * Math.max(10, h - bh - 300);",
     "  const top = 430 + Math.random() * Math.max(10, h - bh - 560);"),
])
patch("pages/index/index.js", [
    ("    noLeft: 210,\n    noTop: 600,", "    noLeft: 210,\n    noTop: 900,"),
])
patch("preview.html", [
    ("const top=Math.max(700, 150+Math.random()*Math.max(10,h-120-260));",
     "const top=Math.max(880, 880+Math.random()*Math.max(10,h-120-430));"),
    ('<div class="no-btn" id="noBtn" style="left:210px; top:900px;">再想想…</div>',
     '<div class="no-btn" id="noBtn" style="left:210px; top:1180px;">再想想…</div>'),
])

# ---- 3. 火焰主题背景加深（红调更重，不再像粉色） ----
FLAME_OLD = dict(page="#f8efed", bg1="#fff0ec", bg2="#ffd6cb", bg3="#ffe0d6")
FLAME_NEW = dict(page="#f9ebe6", bg1="#ffeee7", bg2="#ffc2ac", bg3="#ffd0bd")
for f in ["config/character.js", "tools/finalize_ship.py", "preview.html"]:
    p = os.path.join(PROJ, f)
    src = open(p, encoding="utf-8").read()
    n = 0
    for k, v in FLAME_OLD.items():
        tgt = f"{k}: '{v}'" if "'" in src[max(0, src.find(k)-2):src.find(k)] else None
        # 直接做值替换（带引号形式统一处理）
        for fmt in (f"{k}: '{v}'", f'"{k}": "{v}"'):
            if fmt in src:
                nk = k
                nv = FLAME_NEW[k]
                src = src.replace(fmt, f"{nk}: '{nv}'" if "'" == fmt[len(k)+2] else f'"{nk}": "{nv}"')
                n += 1
    open(p, "w", encoding="utf-8").write(src)
    print(f"OK {f}: 火焰背景 {n} 处加深")
