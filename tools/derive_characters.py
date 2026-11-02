# -*- coding: utf-8 -*-
"""
调色板置换：从小桃(粉)/小川(蓝) 衍生 4 个新角色（男女各 2），每人 5 个表情。
原理：HSV 色相带旋转 —— 只旋转「主色带」（粉色系/蓝色系），肤色带(8~50°)不受影响，
脸型/表情/构图 100% 保留，得到同一画风不同配色的新角色。
"""
import os, sys
from PIL import Image

sys.stdout.reconfigure(errors="replace")
PROJ = r"C:/Users/15804/Documents/love-invite"
MOODS = ["normal", "shy", "happy", "excited", "love"]

# (源目录, 输出目录, 色相带低/高(度), 色相偏移(度), 饱和度倍率, 亮度倍率, 角色)
VARIANTS = [
    ("assets/char",      "assets/char/girl2", 275, 360, -70,  1.05, 1.00, "星柠:粉→蓝紫"),
    ("assets/char",      "assets/char/girl3", 275, 360, +55,  1.10, 1.02, "柚茶:粉→橘金"),
    ("assets/char/male", "assets/char/male2", 185, 255, -60,  0.90, 0.86, "墨白:蓝→墨绿"),
    ("assets/char/male", "assets/char/male3", 185, 255, +140, 1.15, 1.00, "炎阳:蓝→红"),
]

def shift_hue(img, lo, hi, shift, sat_mul, val_mul):
    """HSV 色相带旋转：H∈[lo,hi] 的像素旋转 shift 度，饱和度/亮度按倍率调整"""
    hsv = img.convert("RGB").convert("HSV")
    h, s, v = hsv.split()
    # H 通道 0-255 对应 0-360 度
    d_lo = int(lo / 360 * 256)
    d_hi = int(hi / 360 * 256)
    d_shift = round(shift / 360 * 256)
    # 色相查找表：带内旋转，带外不动
    hue_table = [((i + d_shift) % 256) if (d_lo <= i <= d_hi) else i for i in range(256)]
    h = h.point(hue_table)
    # 饱和度/亮度：全图调整（肤色带不受色相旋转影响，饱和度微调不会显脏）
    s = s.point(lambda i: max(0, min(255, round(i * sat_mul))))
    v = v.point(lambda i: max(0, min(255, round(i * val_mul))))
    out = Image.merge("HSV", (h, s, v)).convert("RGB")
    return out

def main():
    total = 0
    for src_dir, dst_dir, lo, hi, shift, sat_mul, val_mul, name in VARIANTS:
        os.makedirs(os.path.join(PROJ, dst_dir), exist_ok=True)
        for m in MOODS:
            src = os.path.join(PROJ, src_dir, m + ".jpg")
            dst = os.path.join(PROJ, dst_dir, m + ".jpg")
            im = Image.open(src)
            out = shift_hue(im, lo, hi, shift, sat_mul, val_mul)
            out.save(dst, "JPEG", quality=86, optimize=True)
            kb = os.path.getsize(dst) / 1024
            total += 1
            print(f"[{name}] {m}.jpg  {kb:.0f}KB")
    print(f"\n完成：{total} 张新角色图")

if __name__ == "__main__":
    main()
