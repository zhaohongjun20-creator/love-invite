/**
 * utils/music.js —— 八音盒风格背景音乐（现场合成，零版权、零音频文件）
 *
 * 原理：Am - F - C - G 四和弦循环，每个和弦 2 秒，琶音 + 高音旋律点缀。
 * 使用小程序 WebAudioContext（基础库 2.19.0+）；不支持则静默降级，不影响功能。
 */
const N = {
  C3: 130.81, D3: 146.83, E3: 164.81, F3: 174.61, G3: 196.00, A3: 220.00, B3: 246.94,
  C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23, G4: 392.00, A4: 440.00, B4: 493.88,
  C5: 523.25, D5: 587.33, E5: 659.25, G5: 783.99, A5: 880.00
};

const PROG = [
  { arp: [N.A3, N.E4, N.A4, N.C5], mel: N.E5 },  // Am
  { arp: [N.F3, N.C4, N.F4, N.A4], mel: N.C5 },  // F
  { arp: [N.C4, N.G4, N.C5, N.E5], mel: N.G5 },  // C
  { arp: [N.G3, N.D4, N.G4, N.B4], mel: N.D5 }   // G
];

let ctx = null;
let master = null;
let timer = null;
let barIndex = 0;
let muted = false;
let started = false;
let baseVolume = 0.5;

function setParam(param, value, when) {
  if (!param) return;
  try {
    if (typeof param.setValueAtTime === 'function') param.setValueAtTime(value, when);
    else param.value = value;
  } catch (e) {
    try { param.value = value; } catch (e2) {}
  }
}

function ramp(param, value, when) {
  if (!param) return;
  try {
    if (typeof param.linearRampToValueAtTime === 'function') {
      param.linearRampToValueAtTime(value, when);
      return;
    }
  } catch (e) {}
  try { param.value = value; } catch (e2) {}
}

function decay(param, value, when) {
  if (!param) return;
  try {
    if (typeof param.exponentialRampToValueAtTime === 'function') {
      param.exponentialRampToValueAtTime(value, when);
      return;
    }
  } catch (e) {}
  try { param.value = value; } catch (e2) {}
}

/** 八音盒单音：正弦主体 + 三倍频泛音提亮，快攻慢衰 */
function tone(freq, when, dur, vol) {
  if (!ctx || !master) return;
  try {
    const osc = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain = ctx.createGain();
    const gain2 = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.value = freq;
    osc2.type = 'sine';
    osc2.frequency.value = freq * 3;
    try { gain2.gain.value = 0.16; } catch (e) {}

    osc.connect(gain);
    osc2.connect(gain2);
    gain2.connect(gain);
    gain.connect(master);

    setParam(gain.gain, 0, when);
    ramp(gain.gain, vol, when + 0.012);
    decay(gain.gain, 0.0001, when + dur);

    osc.start(when);
    osc2.start(when);
    osc.stop(when + dur + 0.06);
    osc2.stop(when + dur + 0.06);
  } catch (e) {}
}

function scheduleBar() {
  if (!ctx) return;
  const step = 0.5;
  const t0 = ctx.currentTime + 0.1;
  const chord = PROG[barIndex % PROG.length];
  chord.arp.forEach((f, i) => tone(f, t0 + i * step, 1.6, 0.20));
  tone(chord.mel, t0, 1.9, 0.09);
  barIndex += 1;
}

const music = {
  get muted() { return muted; },
  get supported() { return !!ctx; },

  /** 首次用户交互后调用；返回是否启动成功 */
  start() {
    if (started) return true;
    started = true;
    try {
      if (typeof wx.createWebAudioContext !== 'function') return false;
      ctx = wx.createWebAudioContext();
      master = ctx.createGain();
      try { master.gain.value = muted ? 0 : baseVolume; } catch (e) {}
      master.connect(ctx.destination);
      if (typeof ctx.resume === 'function') ctx.resume();
      scheduleBar();
      if (timer) clearInterval(timer);
      timer = setInterval(() => { if (!muted) scheduleBar(); }, 2000);
      return true;
    } catch (e) {
      ctx = null; master = null; timer = null;
      return false;
    }
  },

  /** 切换静音，返回切换后的状态 */
  toggle() {
    muted = !muted;
    try { if (master) master.gain.value = muted ? 0 : baseVolume; } catch (e) {}
    if (!muted && !started) this.start();
    return muted;
  },

  stop() {
    if (timer) { clearInterval(timer); timer = null; }
    try { if (ctx && ctx.close) ctx.close(); } catch (e) {}
    ctx = null; master = null; started = false; barIndex = 0;
  }
};

module.exports = music;
