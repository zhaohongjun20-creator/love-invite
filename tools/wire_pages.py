# -*- coding: utf-8 -*-
"""小程序 6 页面接线：根节点挂 theme-root + 内联变量，JS 注入 themeStyle"""
import sys, os, re
sys.stdout.reconfigure(errors="replace")
PROJ = r"C:/Users/15804/Documents/love-invite"
PAGES = ["index", "invite", "invitecode", "reply", "mine", "lovecard"]

# 1. utils/character.js 加 themeStyle 助手
p = os.path.join(PROJ, "utils", "character.js")
src = open(p, encoding="utf-8").read()
if "themeStyle" not in src:
    helper = """
/** 页面根节点内联主题变量（按角色换肤） */
function themeStyle(ch) {
  const t = (ch && ch.theme) || {};
  const order = ['page','bg1','bg2','bg3','accent','accent2','accentDeep','mid','border','borderSoft','tint','tint2','opt1','opt2','shadow','shadow2','frameBg'];
  return order.filter(k => t[k])
    .map(k => '--fv-' + k.replace(/([A-Z])/g, '-$1').toLowerCase() + ':' + t[k])
    .join(';');
}

module.exports = { currentKey, setCurrent, getCharacter, options, themeStyle, SETS };"""
    src = re.sub(r"module\.exports = \{[^}]*\};", helper.strip(), src, count=1)
    open(p, "w", encoding="utf-8").write(src)
    print("character.js: themeStyle 助手已加")
else:
    print("character.js: 已有 themeStyle，跳过")

for page in PAGES:
    # --- wxml 根节点 ---
    wp = os.path.join(PROJ, "pages", page, page + ".wxml")
    src = open(wp, encoding="utf-8").read()
    m = re.match(r'<view class="([a-z\-]+)[ ]*([a-z\-]*)"', src)
    if m and "theme-root" not in src:
        cls = ("theme-root " + (m.group(1) + " " + m.group(2)).strip()).strip()
        src = src.replace(m.group(0), f'<view class="{cls}" style="{{{{themeStyle}}}}"', 1)
        open(wp, "w", encoding="utf-8").write(src)
        print(f"{page}.wxml: 根节点已挂 theme-root")
    elif "theme-root" in src:
        print(f"{page}.wxml: 已接，跳过")

    # --- js 注入 ---
    jp = os.path.join(PROJ, "pages", page, page + ".js")
    src = open(jp, encoding="utf-8").read()
    changed = False
    if "utils/character.js" not in src:
        # 在第一个 require 前面加
        first_req = re.search(r"(const .+ = require\()", src)
        assert first_req, page + " 没找到 require"
        src = src.replace(first_req.group(1), "const character = require('../../utils/character.js');\n" + first_req.group(1), 1)
        changed = True
    if "themeStyle" not in src:
        # 注入到 onShow 或 onLoad 的开头
        hook = None
        for fn in ("onShow(", "onLoad("):
            i = src.find(fn)
            if i != -1:
                hook = (fn, i)
                break
        assert hook, page + " 没找到 onShow/onLoad"
        insert_at = src.index("{", hook[1]) + 1
        src = src[:insert_at] + "\n    this.setData({ themeStyle: character.themeStyle(character.getCharacter()) });" + src[insert_at:]
        changed = True
    if changed:
        open(jp, "w", encoding="utf-8").write(src)
        print(f"{page}.js: 已注入")

print("\n全部页面接线完成")
