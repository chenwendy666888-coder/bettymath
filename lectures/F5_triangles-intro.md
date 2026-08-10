# F5 · 三角形初步

> 三角形与分类·三边关系 → 内角和180°与外角 → 高·中线·角平分线 → 全等判定(SSS/SAS/ASA/AAS/HL)。先英后中，例题分低中高。


## 00 What this covers / 这一章要学什么

**Key terms**：triangle 三角形 = 三条线段首尾相连；side / angle 边/角 = 3 sides, 3 angles；congruent 全等 = 形状大小完全相同 ≌

**EN:** The triangle is the most important shape in geometry — every polygon splits into triangles. You'll learn how to classify them, the rule about their three sides, the fixed angle sum 180°, the handy exterior-angle fact, three special lines inside, and how to prove two triangles congruent.


三角形是几何里最重要的图形——任何多边形都能拆成三角形。你将学会给它们分类、三边之间的规则、恒定的内角和 180°、好用的外角结论、内部三条特殊线段，以及怎样证明两个三角形全等。


## 01 Types & the side rule / 分类与三边关系

**Key terms**：by sides 按边 = 等边/等腰/不等边；by angles 按角 = 锐角/直角/钝角；triangle inequality 三边关系 = 任意两边之和 > 第三边；range 第三边范围 = |a−b| &lt; c &lt; a+b

**EN:** Classify by sides (equilateral 等边 / isosceles 等腰 / scalene 不等边) or by angles (acute / right / obtuse). The key rule: any two sides add to more than the third (and their difference is less than the third). So the third side of a triangle with sides 3 and 7 must satisfy 4 &lt; x &lt; 10.


按边分：等边 / 等腰 / 不等边；按角分：锐角 / 直角 / 钝角。关键规则：任意两边之和大于第三边（两边之差小于第三边）。所以两边为 3、7 的三角形，第三边 x 必须满足 4 &lt; x &lt; 10。


- 🟢低: 3、4、8 能组成三角形吗？ → 不能（3+4 = 7 &lt; 8）
- 🟡中: 3、4、6 能吗？ → 能（任意两边和都大于第三边）
- 🔴高: 三角形两边长为 3 和 7，第三边 x 是整数，求 x 的所有可能值。
   - 第 1 步 · 写三边关系：第三边要 &lt; 两边之和、&gt; 两边之差：7−3 &lt; x &lt; 7+3。
   - 第 2 步 · 得范围：4 &lt; x &lt; 10。
   - 第 3 步 · 取整数：x = 5, 6, 7, 8, 9。
   - ✅ x ∈ {5,6,7,8,9}。第三边永远夹在「两边之差」与「两边之和」之间。

## 02 Angle sum & exterior angle / 内角和与外角

**Key terms**：angle sum 内角和 = 三内角和 = 180°；exterior angle 外角 = 一边延长与邻边所成角；remote interior 不相邻内角 = 外角 = 两个不相邻内角之和

**EN:** The three interior angles of any triangle always add to 180°. An exterior angle (formed by extending one side) equals the sum of the two remote interior angles — and so is bigger than either of them. These two facts crack most angle-chasing problems.


任何三角形的三个内角和恒为 180°。一个外角（把一条边延长形成）等于两个不相邻内角之和——因此比它们各自都大。这两条搞定大多数「追角」问题。


- 🟢低: 两内角 50°、60°，第三个 = ? → 180 − 50 − 60 = 70°
- 🟡中: 外角 = 两不相邻内角和；若两内角 40°、60°，此外角 = ? → 100°
- 🔴高: 三角形三内角之比为 2 : 3 : 4，求各角，并求最大角对应的外角。
   - 第 1 步 · 设份数：设三角为 2k、3k、4k，和 = 180°。
   - 第 2 步 · 解：9k = 180 → k = 20 → 三角为 40°、60°、80°。
   - 第 3 步 · 最大角的外角：最大内角 80°，其外角 = 180 − 80 = 100°（也 = 另两内角和 40+60）。
   - ✅ 三角为 40°、60°、80°；最大角的外角 100°。比例题设「份数 k」，用内角和列方程最省事。

## 03 Altitude, median, bisector / 三条重要线段

**Key terms**：altitude 高 = 顶点到对边的垂线段；median 中线 = 顶点到对边中点；angle bisector 角平分线 = 平分一个内角；from each vertex 每个顶点各一条 = 

**EN:** From each vertex you can draw three special segments: the altitude (perpendicular to the opposite side — the triangle's height), the median (to the midpoint of the opposite side), and the angle bisector (splitting that angle in two). Don't confuse them: altitude uses a right angle, median uses a midpoint, bisector splits an angle.


从每个顶点可作三条特殊线段：高（垂直于对边——三角形的高）、中线（连到对边中点）、角平分线（把该内角平分）。别混：高看直角、中线看中点、角平分线看分角。


## 04 Congruent triangles / 全等三角形的判定

**Key terms**：congruent ≌ 全等 = 完全重合，对应边角相等；SSS 边边边 = ；SAS 边角边 = 夹角；ASA / AAS 角边角/角角边 = ；HL 斜边直角边 = 仅直角三角形

**EN:** Two triangles are congruent (≌) if they match exactly — then corresponding sides and angles are equal. You can prove it with any one of: SSS, SAS (the angle must be between the two sides), ASA, AAS; and for right triangles also HL (hypotenuse–leg). Note SSA is not a valid rule.


两个三角形全等（≌）就是能完全重合——此时对应边、对应角都相等。可用下列任一条证明：SSS、SAS（角必须是两边的夹角）、ASA、AAS；直角三角形还可用 HL（斜边–直角边）。注意 SSA 不是判定条件。


- 🟢低: 两边及其夹角分别相等，用哪条判定？ → SAS（边角边）
- 🟡中: 两角及一边（角对边）分别相等？ → AAS（角角边）
- 🔴高: 已知 △ABC ≌ △DEF，AB = 7、∠B = 50°、BC = 9。求 DE、∠E、EF；若 DF = 2x + 1 且 AC = 11，求 x。
   - 第 1 步 · 对应关系：A↔D、B↔E、C↔F，对应边角相等。
   - 第 2 步 · 直接对应：DE = AB = 7；∠E = ∠B = 50°；EF = BC = 9。
   - 第 3 步 · DF 对应 AC：DF = AC → 2x + 1 = 11 → x = 5。
   - ✅ DE=7、∠E=50°、EF=9、x=5。全等的用法就是「对应边角相等」，写对应关系是第一步。

## 练习 Practice（只做题）


### 基础 Basic
1. 下列能否组成三角形：① 2,3,4　② 2,3,6　③ 5,5,8。 / can they form a triangle?
2. 三角形两内角 45°、75°，求第三角。 / third angle.
3. 三角形两边 5、9，第三边整数，求所有可能值。 / integer third side.
4. 两边及夹角相等，是哪条全等判定？ / which criterion?

### 进阶 Intermediate
1. 三内角之比 3:4:5，求各角。 / ratio 3:4:5.
2. 一个外角 120°，与它不相邻的一个内角 70°，求另一不相邻内角。 / exterior angle.
3. 等腰三角形一边 4、另一边 9，求周长（注意分类）。 / isosceles perimeter (cases).
4. △ABC≌△DEF，∠A=40°、∠B=60°，求 ∠F。 / find ∠F.

### 挑战 Challenge
1. 【挑战·分类】等腰三角形一个角是 40°，求另两个角（讨论）。 / cases.
2. 【挑战】三角形三边为连续整数，周长小于 20，求所有可能的三边。 / consecutive integers.
3. 【挑战·全等】证明思路：两三角形有两角和一边对应相等，能否全等？举例说明 ASA 与 AAS 的区别。 / ASA vs AAS.
4. 【挑战·外角】三角形一个外角等于与它相邻内角的 2 倍，求相邻内角。 / exterior = 2×adjacent interior.

## 我会了吗 Self-check

- [ ] 我会按边、按角给三角形分类 / classify
- [ ] 我会用三边关系判断能否成三角形、求第三边范围 / triangle inequality
- [ ] 三内角和 = 180°，我会用它求角 / angle sum
- [ ] 外角 = 两不相邻内角和，我会用 / exterior angle
- [ ] 我分得清 高/中线/角平分线 / three cevians
- [ ] 我会用 SSS/SAS/ASA/AAS/HL 判定全等，并知道 SSA 不行 / congruence
- [ ] 全等后我会写对应边角相等求未知量 / use congruence
