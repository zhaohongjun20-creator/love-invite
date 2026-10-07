// components/anime-girl/index.js
// 二次元形象：默认渲染 AI 立绘（girl / boy 两套可选），也可退回纯 WXSS 矢量形象
const { getCharacter } = require('../../utils/character.js');

Component({
  properties: {
    // 表情：normal | shy | happy | excited | love
    mood: { type: String, value: 'normal' },
    // 尺寸：sm | md | lg
    size: { type: String, value: 'md' },
    // 角色套装：girl | boy；留空则用用户当前选中的
    set: { type: String, value: '' },
    // 说话中（气泡旁的小点点动画）
    talking: { type: Boolean, value: false }
  },

  data: {
    useImage: false,
    imgSrc: ''
  },

  observers: {
    'set, mood': function (setKey, mood) {
      this.applyCharacter(setKey, mood);
    }
  },

  lifetimes: {
    attached() {
      this.applyCharacter(this.data.set, this.data.mood);
    }
  },

  methods: {
    applyCharacter(setKey, mood) {
      const character = getCharacter(setKey);
      const useImage = !!character.useImage;
      const images = character.images || {};
      this.setData({
        useImage,
        imgSrc: useImage ? (images[mood] || images.normal || '') : ''
      });
    }
  }
});
