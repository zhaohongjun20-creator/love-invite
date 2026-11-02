# -*- coding: utf-8 -*-
"""
韩漫条漫风格男角色重做（参考用户提供的韩漫截图锚点）：
  boy2 墨白 = 黑发冷面系（ref-male-cold-black）
  boy3 炎阳 = 棕发西装坏笑系（ref-male-suit-smirk）
风格核心：韩系写实条漫、锐利五官、光泽发丝、成熟气质。同人同 seed 锁组内一致。
"""
import os, sys, json, time, io, urllib.request
from PIL import Image

sys.stdout.reconfigure(errors="replace")
KEY = "5372aafb55364019a29890ebc07a28eb.CyNVSDHiRaCeinxG"
API = "https://open.bigmodel.cn/api/paas/v4/images/generations"
PROJ = r"C:/Users/15804/Documents/love-invite"
TARGET = (720, 1021)

STYLE = "高质量韩国漫画风格条漫原画插画，写实精致韩系画风，锐利精致的五官，细腻有光泽的头发渲染，柔和专业光效，构图干净，无对话框无文字无水印。"

CHARACTERS = [
    {
        "dir": "assets/char/male2", "name": "墨白", "seed": 20265,
        "desc": "一位黑色短发的帅气年轻男生，刘海微微遮住眉毛，灰蓝色狭长眼眸，眼神冷淡锐利，皮肤白皙，五官立体精致，穿黑色休闲夹克外套白色衬衫，冷灰色渐变背景",
        "moods": {
            "normal":  "平静冷淡地直视观众，面无表情，气场清冷",
            "shy":     "耳根泛红，微微别过头避开视线，眉头轻皱想掩饰害羞",
            "happy":   "嘴角勾起浅浅的弧度，眼神柔和下来，罕见地微笑",
            "excited": "睁大眼睛，罕见地露出惊讶又认真的表情，微微前倾",
            "love":    "眼神变得温柔，脸颊微微泛红，若有所思地注视观众",
        },
    },
    {
        "dir": "assets/char/male3", "name": "炎阳", "seed": 20266,
        "desc": "一位深棕色偏分短发的成熟帅气男生，狭长上挑的眼睛，眼神自信带点玩味，五官深邃，穿深色西装白色衬衫配深色领带，暖灰色渐变背景",
        "moods": {
            "normal":  "自信地微笑，眼神玩味地看向观众，从容不迫",
            "shy":     "轻咳一声掩饰，微微移开视线，耳根泛红",
            "happy":   "开怀大笑，眉眼舒展，露出牙齿，阳光帅气",
            "excited": "挑眉睁大眼睛，笑意加深，饶有兴致地看向观众",
            "love":    "玩味的笑容变得温柔认真，眼神炽热，脸颊微微泛红",
        },
    },
]

def gen_one(prompt, seed, retries=3):
    body = json.dumps({"model": "cogview-4", "prompt": prompt, "size": "864x1152", "seed": seed}).encode()
    for i in range(retries):
        try:
            req = urllib.request.Request(API, data=body, headers={
                "Content-Type": "application/json", "Authorization": "Bearer " + KEY})
            with urllib.request.urlopen(req, timeout=90) as r:
                url = json.loads(r.read())["data"][0]["url"]
            with urllib.request.urlopen(url, timeout=60) as r:
                return r.read()
        except Exception as e:
            print(f"    重试{i+1}: {e}")
            time.sleep(5)
    return None

def process(png_bytes, dst):
    im = Image.open(io.BytesIO(png_bytes)).convert("RGB")
    w, h = im.size
    tr = TARGET[0] / TARGET[1]
    if w / h > tr:
        nw = round(h * tr); im = im.crop(((w - nw)//2, 0, (w + nw)//2, h))
    else:
        nh = round(w / tr); im = im.crop((0, (h - nh)//2, w, (h + nh)//2))
    im = im.resize(TARGET, Image.LANCZOS)
    # 裁右下角水印：裁掉底部 8% 与右侧 2%，再回目标尺寸（等比微调不变形）
    im = im.crop((0, 0, TARGET[0], round(TARGET[1] * 0.925)))
    base = Image.new("RGB", TARGET, (255, 255, 255))
    im2 = im.resize((TARGET[0], round(TARGET[1] * 0.925)), Image.LANCZOS)
    base.paste(im2, (0, TARGET[1] - im2.height))
    base.save(dst, "JPEG", quality=88, optimize=True)
    return os.path.getsize(dst) / 1024

def main():
    only = sys.argv[1] if len(sys.argv) > 1 else None
    for ch in CHARACTERS:
        if only and not ch["dir"].endswith(only):
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
            time.sleep(3)
    print("\n完成")

if __name__ == "__main__":
    main()
