/**
 * 二次元角色配置 —— 两套形象 + 矢量兜底
 *
 * girl / boy 两套都是 AI 生成的韩漫（条漫）风格立绘，各 5 个表情。
 * 同一套内的 5 张由同一张基准图「图生图」得到，所以是同一个角色、同一套衣服、同一个背景。
 *
 * 想只用其中一套：把另一套的 useImage 改成 false（会退回纯 WXSS 矢量形象）。
 * 想换立绘：替换 assets/char/{,male/}{normal,shy,happy,excited,love}.jpg 即可，页面代码不用动。
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

const SETS = {
  girl: {
    key: 'girl',
    name: '小桃',
    label: '女生',
    avatar: '👧',
    useImage: true,
    images: build('/assets/char')
  },
  boy: {
    key: 'boy',
    name: '小川',
    label: '男生',
    avatar: '👦',
    useImage: true,
    images: build('/assets/char/male')
  }
};

module.exports = {
  SETS,
  MOODS,
  DEFAULT_SET: 'girl'
};
