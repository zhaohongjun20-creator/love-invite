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

module.exports = { currentKey, setCurrent, getCharacter, options, SETS };
