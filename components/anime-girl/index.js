// components/anime-girl/index.js
// 二次元少女形象：默认纯 WXSS 手绘；配置开启 useImage 后自动切换为 AI 立绘 <image>
const characterConfig = require('../../config/character.js');

Component({
  properties: {
    // 表情：normal | shy | happy | excited | love
    mood: { type: String, value: 'normal' },
    // 尺寸：sm | md | lg
    size: { type: String, value: 'md' },
    // 说话中（气泡旁的小点点动画）
    talking: { type: Boolean, value: false }
  },

  data: {
    useImage: characterConfig.useImage,
    imgSrc: ''
  },

  observers: {
    mood(mood) {
      if (!characterConfig.useImage) return;
      this.setData({
        imgSrc: characterConfig.images[mood] || characterConfig.images.normal
      });
    }
  },

  lifetimes: {
    attached() {
      if (characterConfig.useImage) {
        this.setData({
          imgSrc: characterConfig.images[this.data.mood] || characterConfig.images.normal
        });
      }
    }
  }
});
