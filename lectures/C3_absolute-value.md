# C3 · 绝对值与分类讨论（初版）

> 绝对值意义(距离) → 绝对值方程(分类) → 绝对值不等式 → 加料：零点分段法与 |x−a|+|x−b| 几何意义。先英后中，例题分低中高。


## 00 What this covers / 这一章要学什么

**Key terms**：absolute value 绝对值 = |a|=到0距离；≥0 非负 = ；cases 分类讨论 = ；number line 数轴 = 

**EN:** |a| is the distance from a to 0: always ≥0, and |a|=a if a≥0, =−a if a&lt;0. This forces casework. You'll solve absolute-value equations and inequalities, and use the zero-point method and the distance meaning of |x−a|+|x−b|.


|a| 是 a 到 0 的距离：恒≥0，|a|=a(a≥0)、=−a(a&lt;0)。这逼出分类讨论。你会解绝对值方程/不等式，用零点分段法和 |x−a|+|x−b| 的距离意义。


## 01 Meaning / 意义（距离）

**Key terms**：|a| 定义 = a≥0取a，a<0取−a；distance 距离 = ；|x−a| 意义 = x到a的距离；≥0 非负 = 

**EN:** |a| strips the sign: |−5|=5. Read as distance: |a| is a's distance from 0, and |x−a| is the distance between x and a.


|a| 去符号：|−5|=5。读成距离：|a| 是 a 到 0 的距离，|x−a| 是 x 与 a 的距离。


- 🟢低: |−7|=? → 7
- 🟡中: |x|=5 → x=? → x=5 或 −5

## 02 Equations / 绝对值方程（分类）

**Key terms**：|x|=b(b≥0) = x=±b；|f|=b = f=b 或 −b；|f|=g 需 g≥0 = 并验回；cases 分类 = 

**EN:** |x|=b (b≥0) → x=±b. |f(x)|=g(x) → split f=g or f=−g, need g≥0, so check each root.


|x|=b(b≥0)→x=±b。|f|=g→拆 f=g 或 f=−g，需 g≥0，每解代回检验。


- 🟢低: 解 |x−3|=2 → x=5 或 1
- 🟡中: 解 |2x|=6 → x=3 或 −3
- 🔴高: 解 |2x − 1| = x + 4。
   - 第 1 步 · 右边非负：需 x+4≥0，即 x≥−4。
   - 第 2 步 · 分两类：① 2x−1=x+4→x=5；② 2x−1=−(x+4)→3x=−3→x=−1。
   - 第 3 步 · 验回：x=5:|9|=9✓；x=−1:|−3|=3✓。
   - ✅ x=5 或 −1。拆两类后必须回代（g≥0 且成立）。

## 03 Inequalities / 绝对值不等式

**Key terms**：|x|<a = −a<x<a；|x|>a = xa；a>0 = ；distance 距离 = 

**EN:** For a&gt;0: |x|&lt;a → −a&lt;x&lt;a (middle interval); |x|&gt;a → x&lt;−a or x&gt;a (two ends).


a&gt;0：|x|&lt;a → −a&lt;x&lt;a（中间一段）；|x|&gt;a → x&lt;−a 或 x&gt;a（两头）。


- 🟢低: 解 |x|<3 → −3<x<3
- 🟡中: 解 |x|≥2 → x≤−2 或 x≥2
- 🔴高: 解 |2x − 1| < 5。
   - 第 1 步 · 用模式：−5<2x−1<5。
   - 第 2 步 · 加1：−4<2x<6。
   - 第 3 步 · 除2：−2<x<3。
   - ✅ −2<x<3。|f|<a 变 −a<f<a 双边解。

## 04 Zero-point & distance / 加料：零点分段与几何意义

**Key terms**：zero point 零点 = 使某绝对值内为0的x；split 分段 = ；|x−a|+|x−b| 距离和 = ；min=|a−b| 最小值 = 

**EN:** For |x−1|+|x+2| find zero points (x=1,−2), split the line, remove bars per sign in each piece, solve. Geometrically |x−a|+|x−b| is the total distance to a and b; its minimum is |a−b|, when x is between them.


对 |x−1|+|x+2| 找零点(x=1,−2)、把数轴分段，每段按正负去绝对值号再解。几何上 |x−a|+|x−b| 是到 a、b 的距离和，最小值 |a−b|（x 在两者之间时取到）。


- 🟢低: |x−1|+|x−5| 最小值？ → 4（x∈[1,5]取到）
- 🟡中: |x+2|+|x−3| 最小值？ → 5
- 🔴高: 解方程 |x − 1| + |x + 2| = 5。
   - 第 1 步 · 零点分段：零点 1、−2 → 分 x1 三段。
   - 第 2 步 · x≥1 段：(x−1)+(x+2)=5→2x+1=5→x=2 ✓。
   - 第 3 步 · x≤−2 段：−(x−1)−(x+2)=5→−2x−1=5→x=−3 ✓。
   - 第 4 步 · 中间段：(1−x)+(x+2)=3≠5 → 无解。
   - ✅ x=2 或 −3。分段→去绝对值→解→查是否落在本段。

## 练习 Practice（只做题）


### 基础 Basic
1. 求 |−9|、|0|、|3−7|。
2. 解 |x|=8。
3. 解 |x−2|=5。
4. 解 |x|<4。

### 进阶 Intermediate
1. 解 |3x−6|=9。
2. 解 |x+1|≥3。
3. 求 |x−2|+|x−6| 的最小值及取到的 x 范围。
4. 解 |2x+1|<7。

### 挑战 Challenge
1. 【挑战·分类】解 |x−1|=2x。
2. 【挑战·零点分段】解 |x|+|x−3|=5。
3. 【挑战·几何】|x−1|+|x−4| 最小值？若=5 求 x。
4. 【挑战】解 |x−2|+|x+1|≤5。

## 我会了吗 Self-check

- [ ] |a| 是到0距离、|a|=a或−a、非负
- [ ] |x|=b→x=±b；|f|=g 拆两类验回
- [ ] |x|a→两头
- [ ] |x−a|+|x−b| 是距离和、最小 |a−b|
- [ ] 零点分段法：分段→去绝对值→解→查段内
