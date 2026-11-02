# -*- coding: utf-8 -*-
"""preview.html JS 补丁：applyTheme() + setCharSet 挂钩 + 启动时应用"""
import sys
sys.stdout.reconfigure(errors="replace")

HTML = r"C:/Users/15804/Documents/love-invite/preview.html"
src = open(HTML, encoding="utf-8").read()

APPLY = """
function applyTheme(t) {
  if (!t) return;
  const map = {
    '--fv-page': t.page, '--fv-bg1': t.bg1, '--fv-bg2': t.bg2, '--fv-bg3': t.bg3,
    '--fv-accent': t.accent, '--fv-accent2': t.accent2, '--fv-accent-deep': t.accentDeep,
    '--fv-mid': t.mid, '--fv-border': t.border, '--fv-border-soft': t.borderSoft,
    '--fv-tint': t.tint, '--fv-tint2': t.tint2, '--fv-opt1': t.opt1, '--fv-opt2': t.opt2,
    '--fv-shadow': t.shadow, '--fv-shadow2': t.shadow2, '--fv-frame-bg': t.frameBg
  };
  const root = document.documentElement;
  Object.keys(map).forEach(function (k) { if (map[k]) root.style.setProperty(k, map[k]); });
}
function setCharSet(key) {"""

if "function applyTheme" not in src:
    assert "function setCharSet(key) {" in src
    src = src.replace("function setCharSet(key) {", APPLY, 1)

# setCharSet 里挂 applyTheme
old_hook = "  curSet = key;\n  try { localStorage.setItem('love_char_set', key); } catch (e) {}"
new_hook = old_hook + "\n  applyTheme(CHAR_SETS[key].theme);"
assert old_hook in src
src = src.replace(old_hook, new_hook, 1)

# 启动时应用当前角色的主题（curSet 兜底行之后）
old_init = "if (!CHAR_SETS[curSet]) curSet = 'girl';"
new_init = old_init + "\napplyTheme(CHAR_SETS[curSet].theme);"
assert old_init in src
src = src.replace(old_init, new_init, 1)

open(HTML, "w", encoding="utf-8").write(src)
print("JS 主题钩子已注入")
