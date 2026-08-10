# G5 · 翻折·平移·旋转（初版）

> 轴对称与翻折(折叠+勾股) → 平移 → 旋转(90°坐标变换·周期) → 中心对称。先英后中，例题分低中高。


## 00 What this covers / 这一章要学什么

**Key terms**：transformation 变换 = 把图形搬动/翻转；reflection 翻折/轴对称 = ；translation 平移 / rotation 旋转 = ；invariant 不变量 = 形状大小不变

**EN:** Transformations move a shape without changing its size: reflection (flip over a line), translation (slide), rotation (turn about a point), and point symmetry. In the exam these come as folding problems (reflection + Pythagoras) and coordinate rules — especially repeated 90° rotations that create a period.


变换把图形搬动而不改变大小：翻折（轴对称）、平移、旋转（绕点转）、中心对称。考试里常以折叠问题（翻折 + 勾股）和坐标规律出现——尤其是反复 90° 旋转产生的周期。


## 01 Reflection & folding / 翻折（轴对称）

**Key terms**：reflect over x 轴 = (x,y)→(x,−y)；reflect over y 轴 = (x,y)→(−x,y)；fold 折叠 = 重合部分全等；Pythagoras 勾股 = 折叠后用勾股求长

**EN:** Reflecting over the x-axis sends (x,y)→(x,−y); over the y-axis sends (x,y)→(−x,y). In folding problems, the folded part is congruent to the original, so equal sides/angles appear — then a right triangle + Pythagoras usually finishes it.


关于 x 轴翻折：(x,y)→(x,−y)；关于 y 轴翻折：(x,y)→(−x,y)。折叠问题里，折过去的部分与原来全等，于是出现相等的边/角——再用直角三角形 + 勾股往往就能求解。


- 🟢低: (3,2) 关于 x 轴翻折得？ → (3,−2)
- 🟡中: (3,2) 关于 y 轴翻折得？ → (−3,2)
- 🔴高: 矩形纸片 ABCD 中 AB=8、BC=6，把 B 折到对角线交点处… 简化版：将 (5, 3) 先关于 y 轴翻折，再关于 x 轴翻折，求最终坐标。
   - 第 1 步 · 关于 y 轴：(5,3) → (−5, 3)。
   - 第 2 步 · 关于 x 轴：(−5,3) → (−5, −3)。
   - ✅ (−5, −3)。先 y 轴 (x→−x) 再 x 轴 (y→−y)，相当于中心对称。折叠问题记「折后全等 + 勾股」。

## 02 Translation / 平移

**Key terms**：translate 平移 = (x,y)→(x+a, y+b)；right/up 右/上 = a>0 右、b>0 上；shape fixed 形状不变 = ；vector 平移量 = 

**EN:** A translation slides every point the same way: (x,y) → (x+a, y+b), moving a to the right and b up (negative = left/down). Size and shape are unchanged; only position moves.


平移把每个点按相同方式滑动：(x,y) → (x+a, y+b)，向右 a、向上 b（负号即左/下）。大小形状不变，只改变位置。


- 🟢低: (1,1) 向右 3 向上 2 → → (4,3)
- 🟡中: (2,5) 按 (x−1, y−4) 平移 → → (1,1)

## 03 Rotation & period / 旋转（90°坐标·周期）

**Key terms**：rotate 90° CCW 逆时针 = (x,y)→(−y, x)；rotate 90° CW 顺时针 = (x,y)→(y, −x)；period 4 周期 = 转4次回到原位；mod 取余 = 看第几次落哪

**EN:** Rotating a point 90° counter-clockwise about the origin sends (x,y)→(−y, x); clockwise sends (x,y)→(y, −x). Four 90°-turns return to the start, so repeated rotations have period 4: to find the position after n turns, use n mod 4.


把点绕原点逆时针旋转 90°：(x,y)→(−y, x)；顺时针：(x,y)→(y, −x)。四次 90° 转回原位，所以反复旋转有周期 4：求转 n 次后的位置，用 n mod 4。


- 🟢低: (2,1) 逆时针转 90° → → (−1, 2)
- 🟡中: (2,1) 顺时针转 90° → → (1, −2)
- 🔴高: 【同型·华二】点 P(3, 1) 绕原点每次逆时针旋转 90°，求旋转 2023 次后的坐标。
   - 第 1 步 · 写出一个周期：(3,1)→(−1,3)→(−3,−1)→(1,−3)→(3,1)，周期为 4。
   - 第 2 步 · 取余定位置：2023 ÷ 4 = 505 余 3 → 相当于转 3 次。
   - 第 3 步 · 读第 3 次：转 3 次后是 (1, −3)。
   - ✅ (1, −3)。反复旋转看周期：先列一个周期（4 步），再用 2023 mod 4 = 3 定位。

## 04 Point symmetry / 中心对称

**Key terms**：about origin 关于原点 = (x,y)→(−x,−y)；= rotate 180° 等于转180° = ；midpoint is centre 中心是中点 = ；symmetric 对称点 = 

**EN:** Point (central) symmetry about the origin sends (x,y)→(−x, −y) — the same as a 180° rotation. The centre of symmetry is the midpoint of a point and its image. A figure with this symmetry looks the same after a half-turn.


关于原点的中心对称把 (x,y)→(−x, −y)——等同于旋转 180°。对称中心是「一个点与它的对称点」的中点。具有这种对称的图形转半圈后不变。


- 🟢低: (4,−3) 关于原点的对称点？ → (−4, 3)
- 🟡中: 中心对称等于旋转多少度？ → 180°

## 练习 Practice（只做题）


### 基础 Basic
1. (5,−2) 关于 x 轴、y 轴翻折各得什么？
2. (1,3) 向左 4 向下 2 平移到哪？
3. (1,0) 绕原点逆时针转 90° 到哪？
4. (6,−5) 关于原点的对称点？

### 进阶 Intermediate
1. (−2,3) 先关于 x 轴翻折再关于 y 轴翻折，结果？
2. (3,4) 绕原点顺时针转 90° 到哪？
3. 点 A(2,1) 平移后到 (5,−2)，求平移量 (a,b)。
4. (2,3) 绕原点转 180° 到哪？

### 挑战 Challenge
1. 【挑战·周期】P(1,2) 绕原点每次逆时针转 90°，求转 2024 次后的坐标。
2. 【挑战·折叠】边长为 6 的正方形纸，将一角沿对角线折叠，求重叠部分是什么图形。
3. 【挑战】把抛物线 y=x² 向右平移 2、向下平移 3，求新解析式。
4. 【挑战·综合】A(1,0) 先绕原点转 90°(逆) 再关于 x 轴翻折，求最终坐标。

## 我会了吗 Self-check

- [ ] 翻折：x轴(x,−y)、y轴(−x,y)，折叠部分全等
- [ ] 平移 (x,y)→(x+a,y+b)，会求平移量
- [ ] 旋转90°逆(−y,x)、顺(y,−x)，会用周期4+取余
- [ ] 中心对称 (x,y)→(−x,−y)＝转180°
- [ ] 会把折叠问题化为「全等 + 勾股」求长
