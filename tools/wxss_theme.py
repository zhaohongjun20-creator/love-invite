# -*- coding: utf-8 -*-
"""小程序 WXSS 主题化：写死粉色 → var(--fv-*)，默认值定义在 app.wxss 的 page{}"""
import sys, os
sys.stdout.reconfigure(errors="replace")
PROJ = r"C:/Users/15804/Documents/love-invite"

FILES = [
    "app.wxss",
    "pages/index/index.wxss",
    "pages/invite/invite.wxss",
    "pages/invitecode/invitecode.wxss",
    "pages/reply/reply.wxss",
    "pages/mine/mine.wxss",
    "pages/lovecard/lovecard.wxss",
    "components/anime-girl/index.wxss",
]

# (旧, 新) — 出现几次替换几次
REPL = [
    ("#e8556e", "var(--fv-accent)"),
    ("#ff8fb0", "var(--fv-accent2)"),
    ("#c2185b", "var(--fv-accent-deep)"),
    ("#b0395c", "var(--fv-mid)"),
    ("#ffc9d4", "var(--fv-border)"),
    ("#ffd6e2", "var(--fv-border-soft)"),
    ("#ffe0ea", "var(--fv-border-soft)"),
    ("#ffdce8", "var(--fv-border-soft)"),
    ("#ffe3ec", "var(--fv-tint)"),
    ("#ffd9e4", "var(--fv-tint2)"),
    ("#ffb0c6", "var(--fv-tint2)"),
    ("#fff6f9", "var(--fv-opt1)"),
    ("#fff5f8", "var(--fv-opt1)"),
    ("#fff0f4", "var(--fv-opt1)"),
    ("#fff3f6", "var(--fv-opt1)"),
    ("#ffe6ee", "var(--fv-opt2)"),
    ("#d1495b", "var(--fv-accent)"),
    ("#f48fb1", "var(--fv-accent2)"),
    ("#f06292", "var(--fv-accent)"),
    ("rgba(232, 85, 110,", "rgba(var(--fv-shadow),"),
    ("rgba(232,85,110,", "rgba(var(--fv-shadow),"),
    ("rgba(238, 107, 122,", "rgba(var(--fv-shadow2),"),
    ("rgba(240, 98, 146,", "rgba(var(--fv-shadow),"),
    ("#ffe9ef", "var(--fv-frame-bg)"),
]

PAGE_DEFAULTS = """page {
  /* 主题变量默认值（樱花粉），页面根节点用内联 style 按角色覆盖 */
  --fv-page: #f3edf0;
  --fv-bg1: #ffeaf1; --fv-bg2: #ffd6e4; --fv-bg3: #ffe0cf;
  --fv-accent: #e8556e; --fv-accent2: #ff8fb0; --fv-accent-deep: #c2185b; --fv-mid: #b0395c;
  --fv-border: #ffc9d4; --fv-border-soft: #ffd6e2; --fv-tint: #ffe3ec; --fv-tint2: #ffb0c6;
  --fv-opt1: #fff3f6; --fv-opt2: #ffe6ee;
  --fv-shadow: 232,85,110; --fv-shadow2: 238,107,122;
  --fv-frame-bg: #ffe9ef;
  background: linear-gradient(165deg, var(--fv-bg1) 0%, var(--fv-bg2) 48%, var(--fv-bg3) 100%);
"""

THEME_ROOT_CSS = """
/* 主题根容器：页面最外层 view 挂 theme-root + 内联变量，实现按角色换肤 */
.theme-root {
  min-height: 100vh;
  box-sizing: border-box;
  background: linear-gradient(165deg, var(--fv-bg1) 0%, var(--fv-bg2) 48%, var(--fv-bg3) 100%);
}
"""

def main():
    for f in FILES:
        p = os.path.join(PROJ, f)
        src = open(p, encoding="utf-8").read()
        n = 0
        for old, new in REPL:
            c = src.count(old)
            if c:
                src = src.replace(old, new)
                n += c
        open(p, "w", encoding="utf-8").write(src)
        print(f"{f}: {n} 处替换")

    # app.wxss: page{} 注入默认变量 + 主题根样式
    p = os.path.join(PROJ, "app.wxss")
    src = open(p, encoding="utf-8").read()
    if "--fv-accent" not in src:
        src = src.replace("page {", PAGE_DEFAULTS, 1)
        src += THEME_ROOT_CSS
        open(p, "w", encoding="utf-8").write(src)
        print("app.wxss: 默认变量 + theme-root 已注入")

if __name__ == "__main__":
    main()
