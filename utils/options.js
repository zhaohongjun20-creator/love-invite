// utils/options.js —— 约会选项库 & 角色台词库

const TIME_OPTIONS = [
  { icon: '🌷', text: '本周六下午，阳光正好',     value: '本周六下午' },
  { icon: '🌙', text: '本周六晚上，夜色刚好',     value: '本周六晚上' },
  { icon: '☀️', text: '本周日全天，都听你的',     value: '本周日全天' },
  { icon: '🌆', text: '下周五晚上，下了班就来',   value: '下周五晚上' },
  { icon: '🎆', text: '遇到假期就出发，说走就走', value: '假期出发' },
  { icon: '🏳️', text: '你说了算，我随时有空',     value: '时间你定' }
];

const PLACE_OPTIONS = [
  { icon: '📚', text: '图书馆，安安静静待一下午', value: '图书馆' },
  { icon: '🎡', text: '电影院那边，热闹',         value: '电影院附近' },
  { icon: '🎢', text: '游乐园！我想坐旋转木马',   value: '游乐园' },
  { icon: '🏞️', text: '江边走走，吹吹风',         value: '江边/湖边' },
  { icon: '🎓', text: '大学校园，回忆杀走一波',   value: '大学校园' },
  { icon: '🏙️', text: '市中心，逛到哪算哪',       value: '市中心' },
  { icon: '🌳', text: '公园，闻闻青草味',         value: '公园' },
  { icon: '🏖️', text: '海边！踩水那种',           value: '海边' },
  { icon: '🏛️', text: '博物馆附近，有格调',       value: '博物馆附近' },
  { icon: '🏠', text: '你家楼下，我等你下来',     value: '你家楼下' },
  { icon: '📍', text: '你挑的地方都好',           value: '你挑的地方' }
];

const ACT_OPTIONS = [
  { icon: '🍿', text: '看场电影，爆米花我请',       value: '看电影' },
  { icon: '🎠', text: '游乐园，棉花糖那种',         value: '游乐园一日游' },
  { icon: '🌙', text: '散散步，聊到月亮出来',       value: '散步聊天' },
  { icon: '🍽️', text: '吃顿好的，甜品必须有',       value: '吃一顿好吃的' },
  { icon: '🍢', text: '小吃街！从头吃到尾',         value: '小吃街扫街' },
  { icon: '🧁', text: '一起做饭，黑暗料理也行',     value: '一起做饭' },
  { icon: '☕', text: '咖啡馆坐着，一起发呆',       value: '咖啡馆发呆' },
  { icon: '🎤', text: 'KTV，我唱歌你负责鼓掌',      value: 'KTV' },
  { icon: '🔓', text: '密室逃脱，害怕就抓住我',     value: '密室逃脱' },
  { icon: '🖼️', text: '看个展览，文艺一把',         value: '看展览' },
  { icon: '🧺', text: '公园野餐，三明治我包了',     value: '公园野餐' },
  { icon: '🌅', text: '去看日出/日落，浪漫限定',    value: '看日出日落' },
  { icon: '🛍️', text: '逛街，你试穿我拎包',         value: '逛街' },
  { icon: '🐈', text: '猫咖撸猫，猫猫第一',         value: '猫咖撸猫' },
  { icon: '📖', text: '图书馆，一人一本书不说话',   value: '图书馆看书' },
  { icon: '🎮', text: '电玩城，娃娃我帮你抓',       value: '电玩城' },
  { icon: '📸', text: '拍一组照片，记录这一天',     value: '拍照记录' },
  { icon: '🍵', text: '茶馆坐坐，唠一下午嗑',       value: '喝茶聊天' },
  { icon: '⭐', text: '看星星，许愿那种',           value: '看星星' }
];

// 角色台词：按步骤 + 随机点缀
const LINES = {
  cover: [
    '那个…有件小事想问你 👉👈',
    '我准备了好久，才敢开口…',
    '点进来，就是答应了一半啦～'
  ],
  step1: [
    '先挑个时间嘛，我都可以的 🌷',
    '你什么时候有空呀？我随时都在～',
    '选一个吧，我已经开始期待了 ✨'
  ],
  step2: [
    '那…去哪里呀？🗺️',
    '地方你定就好，跟你去哪都开心～',
    '有没有那种，很想去又没人陪的地方？'
  ],
  step3: [
    '我们干什么呀？选一个嘛 🥰',
    '只要和你一起，做什么都行～',
    '偷偷说，我比较期待最后一个选项 😳'
  ],
  step4: [
    '就这么说定啦，不许反悔哦 🥺',
    '我记下来了！谁都不许迟到！',
    '嘿嘿…那我去准备啦 💘'
  ],
  reject: [
    '诶——你怎么点这个呀 😢',
    '这个按钮是坏的！不管用！😤',
    '好吧…那我再问一次 🥺',
    '有本事你再点一次呀 👀',
    '其实你心里已经答应了对吧 😏'
  ]
};

function pickRandom(list) {
  if (!list || !list.length) return '';
  return list[Math.floor(Math.random() * list.length)];
}

// 根据已选内容，随机生成一句告白文案
const SWEET_WORDS = [
  '我要见到你，谁都不许迟到！',
  '这一次，请把这天留给我 💌',
  '已经想好要穿什么了，就等你点头～',
  '答应的事，反悔要请我喝奶茶哦 🧋',
  '倒计时开始，我在心里数着呢 💓'
];

module.exports = {
  TIME_OPTIONS,
  PLACE_OPTIONS,
  ACT_OPTIONS,
  LINES,
  SWEET_WORDS,
  pickRandom
};
