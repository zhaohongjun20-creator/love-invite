/**
 * 二次元角色配置 —— 六套形象 + 矢量兜底
 *
 * 全部为 AI 生成的韩漫（条漫）风格立绘，各 5 个表情。
 * girl/girl2/girl3 由 CogView-4 生成，boy/boy2/boy3 同理；同一角色共用一个 seed 保证组内氛围一致。
 *
 * theme: 每个角色一套界面主题（CSS 变量值），页面切换角色时整体换肤。
 *   page 页面外底色 / bg1-3 页面渐变 / accent 主色 / accent2 渐变副色 / accent-deep 深色文字
 *   mid 中等文字 / border 描边 / border-soft 气泡描边 / tint 浅填充 / tint2 实填充
 *   opt1-opt2 选项渐变 / shadow 阴影 RGB / shadow2 卡片阴影 RGB / frame-bg 立绘相框底
 *   shadowA/shadowA2: 阴影透明度基准（小程序内联样式用）
 *
 * 表情取值：normal（平常）shy（害羞）happy（开心）excited（激动）love（心动）
 */

const MOODS = ['normal', 'shy', 'happy', 'excited', 'love'];

function build(dir) {
  return MOODS.reduce((acc, m) => {
    acc[m] = dir + '/' + m + '.jpg';
    return acc;
  }, {});
}

const THEMES = {
  peach: {   // 小桃 · 樱花粉
    page: '#f3edf0', bg1: '#ffeaf1', bg2: '#ffd6e4', bg3: '#ffe0cf',
    accent: '#e8556e', accent2: '#ff8fb0', accentDeep: '#c2185b', mid: '#b0395c',
    border: '#ffc9d4', borderSoft: '#ffd6e2', tint: '#ffe3ec', tint2: '#ffb0c6',
    opt1: '#fff3f6', opt2: '#ffe6ee', shadow: '232,85,110', shadow2: '238,107,122',
    frameBg: '#ffe9ef'
  },
  lemon: {   // 星柠 · 星夜蓝紫
    page: '#eef0f8', bg1: '#edf1ff', bg2: '#dfe3ff', bg3: '#e4ecff',
    accent: '#5b6ee8', accent2: '#93a5ff', accentDeep: '#3b4bc0', mid: '#4b559c',
    border: '#c9d2ff', borderSoft: '#dde3ff', tint: '#e0e5ff', tint2: '#a9b6ff',
    opt1: '#f2f4ff', opt2: '#e2e8ff', shadow: '91,110,232', shadow2: '98,116,230',
    frameBg: '#e8ecff'
  },
  pomelo: {  // 柚茶 · 暖橘
    page: '#faf1e6', bg1: '#fff3e2', bg2: '#ffe0bb', bg3: '#ffe8cd',
    accent: '#e8933e', accent2: '#ffbe6b', accentDeep: '#b05f14', mid: '#a8702e',
    border: '#ffd9a8', borderSoft: '#ffe3bd', tint: '#ffedd2', tint2: '#ffc97e',
    opt1: '#fff8ee', opt2: '#ffefd6', shadow: '232,147,62', shadow2: '235,150,70',
    frameBg: '#fff0d8'
  },
  stream: {  // 小川 · 青蓝
    page: '#eef2f5', bg1: '#edf4f9', bg2: '#d8e6f0', bg3: '#e3edf4',
    accent: '#4a7fa8', accent2: '#7fb3d8', accentDeep: '#2d5a80', mid: '#3f6a8c',
    border: '#bcd6e8', borderSoft: '#d5e5f0', tint: '#ddebf5', tint2: '#9dc4e0',
    opt1: '#f2f8fb', opt2: '#e0edf6', shadow: '74,127,168', shadow2: '84,136,176',
    frameBg: '#e8f1f7'
  },
  ink: {     // 墨白 · 墨绿
    page: '#eff2ec', bg1: '#eef4e9', bg2: '#dce9d4', bg3: '#e6eedd',
    accent: '#3e7c5b', accent2: '#6fae8c', accentDeep: '#26543e', mid: '#3d6b52',
    border: '#bcd8c7', borderSoft: '#d5e8dc', tint: '#dfe9e1', tint2: '#94c4a8',
    opt1: '#f3f8f4', opt2: '#e3f0e7', shadow: '62,124,91', shadow2: '72,133,99',
    frameBg: '#ecf3ee'
  },
  flame: {   // 炎阳 · 红黑
    page: '#f9ebe6', bg1: '#ffeee7', bg2: '#ffc2ac', bg3: '#ffd0bd',
    accent: '#e8452e', accent2: '#ff7a5c', accentDeep: '#b02a18', mid: '#a83c2c',
    border: '#ffc4b8', borderSoft: '#ffd6cb', tint: '#ffe0d8', tint2: '#ff9d84',
    opt1: '#fff5f2', opt2: '#ffe4db', shadow: '232,69,46', shadow2: '236,80,58',
    frameBg: '#ffefe9'
  }
};

const SETS = {
  girl: {
    key: 'girl', name: '小桃', label: '女生', avatar: '👧',
    useImage: true, theme: THEMES.peach,
    images: build('/assets/char')
  },
  girl2: {
    key: 'girl2', name: '星柠', label: '星夜', avatar: '🌟',
    useImage: true, theme: THEMES.lemon,
    images: build('/assets/char/girl2')
  },
  girl3: {
    key: 'girl3', name: '柚茶', label: '元气', avatar: '🍊',
    useImage: true, theme: THEMES.pomelo,
    images: build('/assets/char/girl3')
  },
  boy: {
    key: 'boy', name: '小川', label: '男生', avatar: '👦',
    useImage: true, theme: THEMES.stream,
    images: build('/assets/char/male')
  },
  boy2: {
    key: 'boy2', name: '墨白', label: '文艺', avatar: '🍃',
    useImage: true, theme: THEMES.ink,
    images: build('/assets/char/male2')
  },
  boy3: {
    key: 'boy3', name: '炎阳', label: '热血', avatar: '🔥',
    useImage: true, theme: THEMES.flame,
    images: build('/assets/char/male3')
  }
};

module.exports = {
  SETS,
  MOODS,
  THEMES,
  DEFAULT_SET: 'girl'
};
