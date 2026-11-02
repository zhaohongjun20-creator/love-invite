# -*- coding: utf-8 -*-
"""preview.html 主题化补丁：写死的粉色 → CSS 变量（:root 默认粉色，JS 按角色切换变量值）"""
import sys
sys.stdout.reconfigure(errors="replace")

HTML = r"C:/Users/15804/Documents/love-invite/preview.html"

ROOT_VARS = """
:root {
  --fv-page: #f3edf0;
  --fv-bg1: #ffeaf1; --fv-bg2: #ffd6e4; --fv-bg3: #ffe0cf;
  --fv-accent: #e8556e; --fv-accent2: #ff8fb0; --fv-accent-deep: #c2185b;
  --fv-mid: #b0395c;
  --fv-border: #ffc9d4; --fv-border-soft: #ffd6e2;
  --fv-tint: #ffe3ec; --fv-tint2: #ffb0c6;
  --fv-opt1: #fff3f6; --fv-opt2: #ffe6ee;
  --fv-shadow: 232,85,110; --fv-shadow2: 238,107,122;
  --fv-frame-bg: #ffe9ef;
}
"""

REPL = [
    # body
    ("background:#f3edf0; color:#6d4c5b;", "background:var(--fv-page); color:#6d4c5b;"),
    # phone 渐变
    ("background:linear-gradient(165deg,#ffeaf1 0%,#ffd6e4 48%,#ffe0cf 100%);",
     "background:linear-gradient(165deg,var(--fv-bg1) 0%,var(--fv-bg2) 48%,var(--fv-bg3) 100%);"),
    # badge
    ("border:1px solid #ffc9d4; color:#e8556e;", "border:1px solid var(--fv-border); color:var(--fv-accent);"),
    ("box-shadow:0 6px 16px rgba(232,85,110,.18);", "box-shadow:0 6px 16px rgba(var(--fv-shadow),.18);"),
    # card 阴影
    ("box-shadow:0 20px 50px rgba(238,107,122,.22);", "box-shadow:0 20px 50px rgba(var(--fv-shadow2),.22);"),
    ("box-shadow:0 20px 50px rgba(238,107,122,.22) !important;", "box-shadow:0 20px 50px rgba(var(--fv-shadow2),.22) !important;"),
    # .h2
    (".h2 { font-size:42px; font-weight:700; color:#e8556e; }",
     ".h2 { font-size:42px; font-weight:700; color:var(--fv-accent); }"),
    # btn-main
    ("background:linear-gradient(135deg,#ff8fb0,#e8556e); color:#fff;\n  font-size:34px;",
     "background:linear-gradient(135deg,var(--fv-accent2),var(--fv-accent)); color:#fff;\n  font-size:34px;"),
    ("box-shadow:0 14px 32px rgba(232,85,110,.32); width:100%;",
     "box-shadow:0 14px 32px rgba(var(--fv-shadow),.32); width:100%;"),
    # btn-ghost
    ("background:rgba(255,255,255,.9); color:#e8556e; font-size:30px;\n  border:2px solid #ffc9d4; border-radius:999px; padding:22px 0;\n  cursor:pointer; box-shadow:0 10px 24px rgba(232,85,110,.14);",
     "background:rgba(255,255,255,.9); color:var(--fv-accent); font-size:30px;\n  border:2px solid var(--fv-border); border-radius:999px; padding:22px 0;\n  cursor:pointer; box-shadow:0 10px 24px rgba(var(--fv-shadow),.14);"),
    (".btn-ghost:active { transform:scale(.97); background:#fff0f4; }",
     ".btn-ghost:active { transform:scale(.97); background:var(--fv-opt1); }"),
    # bubble
    ("position:relative; background:#fff; border:2px solid #ffd6e2; border-radius:28px;\n  padding:24px 30px; font-size:30px; line-height:1.6; color:#7a5a68;\n  box-shadow:0 10px 26px rgba(232,85,110,.12);",
     "position:relative; background:#fff; border:2px solid var(--fv-border-soft); border-radius:28px;\n  padding:24px 30px; font-size:30px; line-height:1.6; color:#7a5a68;\n  box-shadow:0 10px 26px rgba(var(--fv-shadow),.12);"),
    ("border-left:14px solid transparent; border-right:14px solid transparent; border-top:18px solid #ffd6e2;",
     "border-left:14px solid transparent; border-right:14px solid transparent; border-top:18px solid var(--fv-border-soft);"),
    # frame
    ("overflow:hidden; background:#ffe9ef;\n  border:6px solid rgba(255,255,255,.94);\n  box-shadow:0 18px 44px rgba(232,85,110,.26), 0 0 0 2px rgba(255,201,212,.85);",
     "overflow:hidden; background:var(--fv-frame-bg);\n  border:6px solid rgba(255,255,255,.94);\n  box-shadow:0 18px 44px rgba(var(--fv-shadow),.26), 0 0 0 2px var(--fv-border);"),
    # char-switch / cs-item（6 人布局收紧）
    (".char-switch { display:flex; margin-top:22px; background:rgba(255,255,255,.72); border:2px solid #ffd6e2; border-radius:999px; padding:6px; }",
     ".char-switch { display:flex; flex-wrap:wrap; justify-content:center; margin-top:22px; background:rgba(255,255,255,.72); border:2px solid var(--fv-border-soft); border-radius:36px; padding:6px; }"),
    (".cs-item { padding:12px 32px; border-radius:999px; font-size:26px; color:#b0395c; cursor:pointer; }",
     ".cs-item { padding:12px 22px; border-radius:999px; font-size:25px; color:var(--fv-mid); cursor:pointer; }"),
    (".cs-item.on { background:linear-gradient(135deg,#ff8fb0,#e8556e); color:#fff; box-shadow:0 6px 16px rgba(232,85,110,.28); }",
     ".cs-item.on { background:linear-gradient(135deg,var(--fv-accent2),var(--fv-accent)); color:#fff; box-shadow:0 6px 16px rgba(var(--fv-shadow),.28); }"),
    # cover title / last-title / countdown
    ("text-shadow:0 6px 16px rgba(232,85,110,.18);", "text-shadow:0 6px 16px rgba(var(--fv-shadow),.18);"),
    (".cover .title { margin-top:44px; font-size:58px; font-weight:700; color:#e8556e; letter-spacing:6px;",
     ".cover .title { margin-top:44px; font-size:58px; font-weight:700; color:var(--fv-accent); letter-spacing:6px;"),
    (".last-title { font-size:30px; font-weight:600; color:#e8556e; }",
     ".last-title { font-size:30px; font-weight:600; color:var(--fv-accent); }"),
    ("background:linear-gradient(135deg,#ff8fb0,#e8556e); border-radius:999px; padding:6px 18px; }",
     "background:linear-gradient(135deg,var(--fv-accent2),var(--fv-accent)); border-radius:999px; padding:6px 18px; }"),
    # steps
    (".dot { width:46px; height:46px; border-radius:50%; background:#ffe3ec; color:#d2a5b4; font-size:24px;",
     ".dot { width:46px; height:46px; border-radius:50%; background:var(--fv-tint); color:#d2a5b4; font-size:24px;"),
    (".dot.on { background:linear-gradient(135deg,#ff8fb0,#e8556e); color:#fff; box-shadow:0 8px 18px rgba(232,85,110,.3); }",
     ".dot.on { background:linear-gradient(135deg,var(--fv-accent2),var(--fv-accent)); color:#fff; box-shadow:0 8px 18px rgba(var(--fv-shadow),.3); }"),
    (".dot-label.on { color:#e8556e; font-weight:600; }", ".dot-label.on { color:var(--fv-accent); font-weight:600; }"),
    (".step-line { width:88px; height:4px; background:#ffe3ec; border-radius:4px; margin-top:22px; }",
     ".step-line { width:88px; height:4px; background:var(--fv-tint); border-radius:4px; margin-top:22px; }"),
    (".step-line.on { background:#ffb0c6; }", ".step-line.on { background:var(--fv-tint2); }"),
    # opt
    (".opt { display:flex; align-items:center; background:linear-gradient(135deg,#fff3f6,#ffe6ee); border:2px solid #ffc9d4;",
     ".opt { display:flex; align-items:center; background:linear-gradient(135deg,var(--fv-opt1),var(--fv-opt2)); border:2px solid var(--fv-border);"),
    (".opt:active { transform:scale(1.02); background:#ffd9e4; }", ".opt:active { transform:scale(1.02); background:var(--fv-opt2); }"),
    (".opt .txt { flex:1; font-size:29px; color:#b0395c; line-height:1.4; }",
     ".opt .txt { flex:1; font-size:29px; color:var(--fv-mid); line-height:1.4; }"),
    (".ipt { flex:1; font-size:28px; color:#c2185b;", ".ipt { flex:1; font-size:28px; color:var(--fv-accent-deep);"),
    (".mini { background:linear-gradient(135deg,#ff8fb0,#e8556e);", ".mini { background:linear-gradient(135deg,var(--fv-accent2),var(--fv-accent));"),
    (".pk { background:#fff6f9; border:2px dashed #f8b3c3;", ".pk { background:var(--fv-opt1); border:2px dashed var(--fv-tint2);"),
    (".pk-text { font-size:26px; color:#c2185b; }", ".pk-text { font-size:26px; color:var(--fv-accent-deep); }"),
    ("color:#c2185b; outline:none; width:190px; }", "color:var(--fv-accent-deep); outline:none; width:190px; }"),
    (".back:active { color:#e8556e; }", ".back:active { color:var(--fv-accent); }"),
    # 清单卡片
    ("padding:16px 0; border-bottom:2px dashed #ffe0ea; }", "padding:16px 0; border-bottom:2px dashed var(--fv-border-soft); }"),
    (".v { margin-top:8px; font-size:31px; color:#c2185b;", ".v { margin-top:8px; font-size:31px; color:var(--fv-accent-deep);"),
    ("background:linear-gradient(135deg,#ff8fb0,#e8556e); border-radius:999px; padding:14px 0; }",
     "background:linear-gradient(135deg,var(--fv-accent2),var(--fv-accent)); border-radius:999px; padding:14px 0; }"),
    ("border-radius:30px; box-shadow:0 18px 44px rgba(232,85,110,.24); }",
     "border-radius:30px; box-shadow:0 18px 44px rgba(var(--fv-shadow),.24); }"),
    # music-btn
    ("background:rgba(255,255,255,.92); border:2px solid #ffc9d4; display:flex; align-items:center; justify-content:center;\n  font-size:40px; cursor:pointer; box-shadow:0 10px 26px rgba(232,85,110,.2); }",
     "background:rgba(255,255,255,.92); border:2px solid var(--fv-border); display:flex; align-items:center; justify-content:center;\n  font-size:40px; cursor:pointer; box-shadow:0 10px 26px rgba(var(--fv-shadow),.2); }"),
]

def main():
    with open(HTML, encoding="utf-8") as f:
        src = f.read()
    misses = []
    for old, new in REPL:
        if old not in src:
            misses.append(old[:60])
            continue
        src = src.replace(old, new, 1)
    # 插入 :root 变量块（紧跟 <style> 之后）
    anchor = "<style>"
    assert anchor in src and ":root {" not in src.split("</style>")[0][:200] or True
    if "—fv" not in src and "--fv-page" not in src:
        src = src.replace(anchor, anchor + "\n" + ROOT_VARS, 1)
    with open(HTML, "w", encoding="utf-8") as f:
        f.write(src)
    print(f"替换 {len(REPL) - len(misses)}/{len(REPL)} 处")
    if misses:
        print("未命中（需人工检查）：")
        for m in misses:
            print("  -", m)

if __name__ == "__main__":
    main()
