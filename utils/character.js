// utils/character.js —— 当前用哪套角色（记住用户的选择）
const { SETS, DEFAULT_SET } = require('../config/character.js');

const KEY = 'love_char_set';

/** 当前选中的套装 key，非法或没选过则回落到默认 */
function currentKey() {
  try {
    const k = wx.getStorageSync(KEY);
    if (k && SETS[k]) return k;
  } catch (e) {}
  return DEFAULT_SET;
}

function setCurrent(k) {
  if (!SETS[k]) return;
  try { wx.setStorageSync(KEY, k); } catch (e) {}
}

/** 取某一套角色的配置；不传 key 就取当前选中的 */
function getCharacter(k) {
  const key = (k && SETS[k]) ? k : currentKey();
  return SETS[key];
}

/** 切换用：给 UI 渲染的选项列表 */
function options() {
  return Object.keys(SETS).map((k) => ({
    key: k,
    name: SETS[k].name,
    label: SETS[k].label,
    avatar: SETS[k].avatar
  }));
}

/** 页面根节点内联主题变量（按角色换肤） */
function themeStyle(ch) {
  const t = (ch && ch.theme) || {};
  const order = ['page','bg1','bg2','bg3','accent','accent2','accentDeep','mid','border','borderSoft','tint','tint2','opt1','opt2','shadow','shadow2','frameBg'];
  return order.filter(k => t[k])
    .map(k => '--fv-' + k.replace(/([A-Z])/g, '-$1').toLowerCase() + ':' + t[k])
    .join(';');
}

module.exports = { currentKey, setCurrent, getCharacter, options, themeStyle, SETS };
