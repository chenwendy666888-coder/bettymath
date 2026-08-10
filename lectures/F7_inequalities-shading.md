# F7 · 一元一次不等式组与阴影（初版）

> 一元一次不等式组 → 解集(数轴取交集·四种情况口诀) → 整数解 → 平面区域与阴影(满足侧) → 阴影面积。先英后中，例题分低中高。


## 00 What this covers / 这一章要学什么

**Key terms**：inequality system 不等式组 = 几个不等式同时成立；solution set 解集 = 公共部分(交集)；region 区域 = 不等式在平面上的一片；shade 阴影 = 把满足的一侧涂上

**EN:** After single inequalities (F2) come systems: several inequalities that must hold at the same time, so the answer is the overlap of their solution sets. You'll read that overlap off a number line, list integer solutions, and then step up to the plane: a line splits it into two sides, and you shade the side that satisfies the inequality. Finally, some exam shaded-area problems.


学完单个不等式（F2），接着是不等式组：几个不等式必须同时成立，所以答案是它们解集的公共部分（交集）。你会在数轴上读出这个交集、列出整数解，再上升到平面：一条直线把平面分成两侧，你把满足不等式的一侧涂上阴影。最后是一些考试里的阴影面积题。


## 01 Systems & the overlap / 不等式组与解集

**Key terms**：system 不等式组 = 用大括号联立；solve each 先各自解 = 再取公共部分；intersection 交集 = 同时满足的 x；number line 数轴 = 上下画、取重叠

**EN:** To solve a system, solve each inequality separately, then take the overlap (the x that satisfy all of them). Drawing each solution on the same number line and reading where they overlap is the safest method. A handy rhyme for two simple ones: 「同大取大、同小取小、大小小大取中间、大大小小无解」.


解不等式组：先分别解每个不等式，再取公共部分（同时满足所有不等式的 x）。把每个解画在同一条数轴上、看它们的重叠处最稳。两个简单情形的口诀：同大取大、同小取小、大小小大取中间、大大小小无解。


- 🟢低: x &gt; 1 且 x &gt; 3 的公共部分？ → x &gt; 3（同大取大）
- 🟡中: x &lt; 5 且 x &gt; 2？ → 2 &lt; x &lt; 5（取中间）
- 🔴高: 解不等式组：2x − 1 &gt; 3 且 5 − x ≥ 1，并求所有整数解。
   - 第 1 步 · 分别解：2x−1&gt;3 → 2x&gt;4 → x&gt;2；5−x≥1 → −x≥−4 → x≤4（除以负数变号）。
   - 第 2 步 · 取交集：x&gt;2 且 x≤4 → 2 &lt; x ≤ 4。
   - 第 3 步 · 整数解：x = 3, 4。
   - ✅ 解集 2 &lt; x ≤ 4；整数解 3、4。分别解→数轴取重叠→数整数点。注意第二个不等式除以负数要变号。

## 02 Regions in the plane / 平面区域与阴影

**Key terms**：boundary line 边界线 = 把 ≤ 换成 = 得到；above / below 上方/下方 = y&gt;… 在上、y&lt;… 在下；test point 取点验证 = 代一个点看是否满足；shade 涂阴影 = 满足的一侧

**EN:** A linear inequality like y &gt; kx + b describes a half-plane. Draw the boundary line (replace the sign with =), then decide which side to shade: y &gt; … is above the line, y &lt; … is below. Unsure? Test a point (often the origin) — if it satisfies the inequality, shade its side.


像 y &gt; kx + b 这样的线性不等式表示一个半平面。先画边界线（把符号换成 =），再决定涂哪一侧阴影：y &gt; … 在直线上方，y &lt; … 在下方。拿不准？取一个点验证（常取原点）——满足就涂它那一侧。


- 🟢低: y &gt; x 的图象在直线 y=x 的哪一侧？ → 上方
- 🟡中: 用原点验证 y &lt; x + 1：代 (0,0) 成立吗？ → 0 &lt; 1 成立 → 原点这一侧是解

## 03 Shaded-area problems / 阴影面积

**Key terms**：composite 组合图形 = 大块减小块；subtract 相减 = 阴影 = 整体 − 空白；split 拆分 = 拆成会算的图形；units 单位 = 别忘平方单位

**EN:** Exam shaded-area figures are solved by splitting or subtracting: express the shaded part as a whole shape minus the blank pieces, or cut it into triangles/rectangles/sectors you can already area. There's no new formula — just careful bookkeeping.


考试里的阴影面积图，靠拆分或相减：把阴影写成整块减去空白块，或拆成你会算的三角形/矩形/扇形。没有新公式——只需仔细算账。


- 🟢低: 直角三角形两直角边 6、4，面积 = ? → ½·6·4 = 12
- 🟡中: 边长 6 的正方形里挖去边长 2 的小正方形，阴影 = ? → 36 − 4 = 32
- 🔴高: 边长为 4 的正方形，以一个顶点为圆心、4 为半径作四分之一圆弧，求正方形内、四分之一圆外的阴影面积。
   - 第 1 步 · 阴影 = 整体 − 扇形：阴影 = 正方形面积 − 四分之一圆面积。
   - 第 2 步 · 分别算：正方形 = 4² = 16；四分之一圆 = ¼·π·4² = 4π。
   - 第 3 步 · 相减：阴影 = 16 − 4π。
   - ✅ 阴影 = 16 − 4π。阴影面积＝「整块 − 空白块」，把每块套已知公式即可。

## 练习 Practice（只做题）


### 基础 Basic
1. 解并在数轴上表示：x−2&gt;0 且 x&lt;5。 / solve & draw.
2. 口诀练习：x&gt;3 且 x&gt;7 的解集？x&lt;2 且 x&lt;6 呢？ / rhyme.
3. y&gt;2x−1 在直线的上方还是下方？ / side.
4. 正方形边长 5 挖去半径… 边长 3 的正方形，求阴影。 / area.

### 进阶 Intermediate
1. 解不等式组 3x+1≥4 且 2−x&gt;−1，并求整数解。 / integer solutions.
2. x−1&gt;0 且 x−4&lt;0，求整数解之和。 / sum of integer solutions.
3. 【阴影】半径 2 的圆内接于边长 4 的正方形，求正方形内圆外的阴影。 / square minus circle.
4. 用原点判断 3x−2y&lt;6 该涂哪一侧。 / test point.

### 挑战 Challenge
1. 【挑战】不等式组 {x&gt;a, x&lt;2a−3} 有解，求 a 的范围。 / has solution.
2. 【挑战·整数】{2x−1&gt;x+1, x≤5} 的整数解有几个？ / count.
3. 【挑战·阴影】边长 6 的正方形，两条对角线把它分成 4 块，阴影为其中相对的 2 块，求阴影面积。 / diagonals.
4. 【挑战·扇形阴影】半径 6、圆心角 90° 的扇形中挖去一个以半径为斜边的等腰直角三角形，求阴影。 / sector minus triangle.

## 我会了吗 Self-check

- [ ] 不等式组：先分别解、再数轴取交集 / systems → overlap
- [ ] 四种情况口诀 我会用 / rhyme
- [ ] 我会从解集里数出整数解 / integer solutions
- [ ] y&gt;… 在上方、y&lt;… 在下方，会取点验证并涂阴影 / half-plane
- [ ] 阴影面积＝整块−空白块，会拆分求解 / shaded area
