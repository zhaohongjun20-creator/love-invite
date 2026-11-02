# -*- coding: utf-8 -*-
"""
CogView-4 批量生成 4 个新角色 × 5 表情（女2男2），接入 love-invite。
每个角色锁定同一个 seed + 同一段角色描述，只有表情子句变化，尽量保持组内一致。
生成 → 下载 → 裁成 720x1021（与现有立绘同规格）→ 压缩保存。
"""
import os, sys, json, time, io, urllib.request
from PIL import Image

sys.stdout.reconfigure(errors="replace")
KEY = "5372aafb55364019a29890ebc07a28eb.CyNVSDHiRaCeinxG"
API = "https://open.bigmodel.cn/api/paas/v4/images/generations"
PROJ = r"C:/Users/15804/Documents/love-invite"
TARGET = (720, 1021)   # 与现有立绘同规格

STYLE = "韩漫风格二次元立绘插画，上半身像（腰部以上），人物面向观众微微侧身，柔和渐变纯色背景，柔和光线，精致高质量数字插画，无文字无水印。"

CHARACTERS = [
    {
        "dir": "assets/char/girl2", "name": "星柠", "seed": 20261,
        "desc": "一位蓝紫色长直发的少女，深蓝色眼眸，白色衬衫外搭深蓝色针织开衫，胸前系深蓝色丝带，气质冷淡优雅文静，蓝紫色渐变背景",
        "moods": {
            "normal":  "表情平静温柔，嘴角带着浅浅微笑，安静地看向观众",
            "shy":     "害羞脸红，微微低头，眼睛看向旁边，一只手轻碰脸颊",
            "happy":   "开心地笑，眼睛弯成月牙，脸颊微红，元气满满",
            "excited": "惊喜激动，睁大眼睛，嘴巴微张，微微前倾",
            "love":    "心动陶醉，脸颊绯红，眼神温柔迷离，双手捧脸",
        },
    },
    {
        "dir": "assets/char/girl3", "name": "柚茶", "seed": 20262,
        "desc": "一位橘棕色短发的元气少女，琥珀色大眼睛，穿着奶黄色连帽卫衣，活泼开朗的运动风，暖橘色渐变背景",
        "moods": {
            "normal":  "表情明朗平和，嘴角微笑，充满活力地看向观众",
            "shy":     "害羞脸红，挠头傻笑，眼睛看向旁边",
            "happy":   "哈哈大笑，眼睛弯成月牙，张开嘴灿烂地笑",
            "excited": "兴奋地跳起来，睁大眼睛握拳加油的动作",
            "love":    "心动脸红，眼睛水汪汪，双手捂脸偷笑",
        },
    },
    {
        "dir": "assets/char/male2", "name": "墨白", "seed": 20263,
        "desc": "一位穿深墨绿色高领毛衣的文艺男生，黑色微卷短发，白皙皮肤，温和书卷气，米色渐变背景",
        "moods": {
            "normal":  "表情温和安静，淡淡的微笑，看向观众",
            "shy":     "不好意思地挠头，耳朵微红，眼神躲闪",
            "happy":   "温柔地笑出声，眼睛弯弯，阳光和煦",
            "excited": "惊讶地睁大眼睛，手上的书差点掉下来",
            "love":    "心动脸红，眼神温柔而认真，微微低头浅笑",
        },
    },
    {
        "dir": "assets/char/male3", "name": "炎阳", "seed": 20264,
        "desc": "一位穿红色运动夹克内搭黑色T恤的运动少年，黑色利落短发，小麦色皮肤，热血开朗，红黑渐变背景",
        "moods": {
            "normal":  "表情自信爽朗，露齿笑，看向观众",
            "shy":     "罕见地害羞，摸后脑勺，脸有点红",
            "happy":   "开怀大笑，高举拳头庆祝，充满活力",
            "excited": "热血沸腾地呐喊，眼睛发亮，斗志昂扬",
            "love":    "心跳加速脸爆红，手足无措，眼神慌乱又温柔",
        },
    },
]

def gen_one(prompt, seed, retries=3):
    body = json.dumps({"model": "cogview-4", "prompt": prompt, "size": "864x1152", "seed": seed}).encode()
    for i in range(retries):
        try:
            req = urllib.request.Request(API, data=body, headers={
                "Content-Type": "application/json",
                "Authorization": "Bearer " + KEY,
            })
            with urllib.request.urlopen(req, timeout=90) as r:
                url = json.loads(r.read())["data"][0]["url"]
            with urllib.request.urlopen(url, timeout=60) as r:
                return r.read()
        except Exception as e:
            print(f"    重试{i+1}: {e}")
            time.sleep(3)
    return None

def process(png_bytes, dst):
    im = Image.open(io.BytesIO(png_bytes)).convert("RGB")
    w, h = im.size                      # 864x1152 (0.75) → 裁到 0.705 → 812x1152 → resize 720x1021
    target_ratio = TARGET[0] / TARGET[1]
    if w / h > target_ratio:
        nw = round(h * target_ratio)
        im = im.crop(((w - nw) // 2, 0, (w + nw) // 2, h))
    else:
        nh = round(w / target_ratio)
        im = im.crop((0, (h - nh) // 2, w, (h + nh) // 2))
    im = im.resize(TARGET, Image.LANCZOS)
    im.save(dst, "JPEG", quality=88, optimize=True)
    return os.path.getsize(dst) / 1024

def main():
    only = sys.argv[1] if len(sys.argv) > 1 else None
    for ch in CHARACTERS:
        if only and ch["dir"] != only:
            continue
        os.makedirs(os.path.join(PROJ, ch["dir"]), exist_ok=True)
        print(f"\n=== {ch['name']} ({ch['dir']}) seed={ch['seed']} ===")
        for mood, expr in ch["moods"].items():
            dst = os.path.join(PROJ, ch["dir"], mood + ".jpg")
            if os.path.exists(dst):
                print(f"  {mood}: 已存在，跳过")
                continue
            prompt = STYLE + "角色：" + ch["desc"] + "。表情姿态：" + expr + "。"
            data = gen_one(prompt, ch["seed"])
            if data is None:
                print(f"  {mood}: 生成失败！")
                continue
            kb = process(data, dst)
            print(f"  {mood}: OK {kb:.0f}KB")
            time.sleep(2)
    print("\n全部完成")

if __name__ == "__main__":
    main()
