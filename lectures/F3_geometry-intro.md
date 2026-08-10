# F3 · 几何入门（点·线·角）

> 从零认识几何语言：点线面体 → 直线·射线·线段 → 线段长短与中点 → 角与度量(度分秒) → 角的比较与角平分线 → 余角与补角。先英后中，例题分低中高。


## 00 What this covers / 这一章要学什么

**Key terms**：geometry 几何 = study of shapes & space；point 点 = 位置，无大小；line 线 / plane 面 = one/two dimensional；notation 记法 = 如何用字母表示图形

**EN:** Geometry is a language for shapes and space. Before any proofs, you need its basic vocabulary: the point, line, ray and segment, how to name and draw them, how to compare and add lengths and angles, and the special angle pairs complementary (sum 90°) and supplementary (sum 180°). Get this vocabulary solid and every later geometry chapter reads easily.


几何是描述图形与空间的语言。在做任何证明之前，先要掌握它的基本词汇：点、直线、射线、线段，怎样命名和画它们，怎样比较与相加长度和角，以及两组特殊的角——互余（和为 90°）与互补（和为 180°）。把这些词汇打牢，后面每一章几何都会读得很轻松。


## 01 Point, line, plane, solid / 点·线·面·体

**Key terms**：point 点 = 仅表示位置，无大小；line 线 = 点动成线；plane 面 = 线动成面；solid 体 (out of scope) = 面动成体（本课程不深入立体）

**EN:** A point marks a position and has no size. Moving a point traces a line; moving a line sweeps a plane (surface); moving a surface fills a solid. We work almost entirely in the plane (flat, 2-D). We label points with capital letters: A, B, C…


点只表示位置，没有大小。点动成线，线动成面，面动成体。我们几乎只在平面（平的、二维）里研究。点用大写字母标记：A、B、C……


## 02 Line, ray, segment / 直线·射线·线段

**Key terms**：line 直线 = 两端无限延伸；ray 射线 = 一个端点，一端延伸；segment 线段 = 两个端点，有限长；two points → one line 两点确定一条直线 = ；shortest 两点之间线段最短 = 

**EN:** Three cousins: a line goes forever in both directions; a ray has one endpoint and goes forever one way; a segment has two endpoints and a fixed length. Two key facts: through two points there is exactly one line, and the shortest path between two points is the segment joining them.


三兄弟：直线两端无限延伸；射线有一个端点、只朝一边无限延伸；线段有两个端点、长度固定。两条要记的事实：两点确定一条直线；两点之间，线段最短。


- 🟢低: 线段 AB 有几个端点？ → 2 个（A 和 B）
- 🟡中: 「两点之间，___ 最短」 → 线段
- 🔴高: 平面上有 4 个点，任意三点不在一条直线上。过其中每两点画一条直线，共能画几条？
   - 第 1 步 · 一个点连几条：每个点要和其余 3 个点各连一条 → 每点 3 条。
   - 第 2 步 · 别数重复：4 个点各 3 条 = 12，但每条线段被两端各数了一次 → 要除以 2。
   - 第 3 步 · 算：12 ÷ 2 = 6 条。
   - ✅ 6 条。「两点确定一条直线」+ 别重复数（每条被两端各算一次，除以 2）。

## 03 Length & midpoint / 线段的长短与中点

**Key terms**：compare 比较 = 叠合或量长度；add segments 线段和 = AB = AC + CB；midpoint 中点 = 把线段平分的点；AM = MB 中点性质 = 

**EN:** Segments compare by length (lay them together or measure). If C is on AB, then AB = AC + CB (whole = sum of parts). The midpoint M splits a segment into two equal halves: AM = MB = ½·AB.


线段按长度比较（叠合或用尺量）。如果 C 在 AB 上，则 AB = AC + CB（整体 = 各部分之和）。中点 M 把线段分成相等的两半：AM = MB = ½·AB。


- 🟢低: AB = 10，M 是中点，AM = ? → AM = ½·10 = 5
- 🟡中: C 在 AB 上，AC = 3，AB = 10，CB = ? → CB = AB − AC = 7
- 🔴高: 点 C 在线段 AB 上，AC = 6，CB = 4。M、N 分别是 AC、CB 的中点，求 MN。
   - 第 1 步 · 画图定位：顺序是 A—M—C—N—B。M 是 AC 中点、N 是 CB 中点。
   - 第 2 步 · 各段长：MC = ½·AC = 3；CN = ½·CB = 2。
   - 第 3 步 · MN = MC + CN：MN = 3 + 2 = 5。
   - ✅ MN = 5。其实 MN = ½·AC + ½·CB = ½·AB = ½·10 = 5——两个中点之间恰是全长的一半。

## 04 Angles & measuring / 角与度量（度·分·秒）

**Key terms**：angle 角 = 两条射线共端点；vertex 顶点 = 角的公共端点 O；degree 度 ° = 1 周 = 360°；1° = 60′ 一度=60分 = ；1′ = 60″ 一分=60秒 = 

**EN:** An angle is formed by two rays sharing an endpoint (the vertex). We measure it in degrees: a full turn is 360°, a straight angle 180°, a right angle 90°. Finer units: 1° = 60′ (minutes) and 1′ = 60″ (seconds) — like hours/minutes/seconds on a clock. We write an angle as ∠AOB, with the vertex letter in the middle.


角由两条有公共端点的射线组成，公共端点叫顶点。用度来量：一周 360°，平角 180°，直角 90°。更细的单位：1° = 60′（分）、1′ = 60″（秒）——像钟表的时分秒。角记作 ∠AOB，顶点字母写在中间。


- 🟢低: 直角是多少度？ → 90°
- 🟡中: 1.5° 等于多少分？ → 1.5° = 1°30′（0.5° = 30′）
- 🔴高: 把 32.75° 换成「度·分·秒」，并求它与 12°40′30″ 的和。
   - 第 1 步 · 小数度→分：0.75° = 0.75×60′ = 45′ → 32.75° = 32°45′（无秒）。
   - 第 2 步 · 相加(秒、分、度分别加)：32°45′00″ + 12°40′30″：秒 0+30=30″；分 45+40=85′；度 32+12=44°。
   - 第 3 步 · 满60进位：85′ = 60′ + 25′ = 1°25′ → 度 44+1 = 45°，分 25′。
   - ✅ 32.75° = 32°45′；和 = 45°25′30″。度分秒像时钟：满 60 进 1。

## 05 Compare & bisect angles / 角的比较与角平分线

**Key terms**：compare 比较 = 叠合顶点与一边；add angles 角的和 = ∠AOB = ∠AOC + ∠COB；bisector 角平分线 = 从顶点把角平分的射线；∠AOC = ∠COB 平分性质 = 

**EN:** Angles compare like segments — put vertices and one side together. If ray OC is inside ∠AOB, then ∠AOB = ∠AOC + ∠COB. The angle bisector is a ray from the vertex that splits the angle into two equal halves: ∠AOC = ∠COB = ½∠AOB.


角像线段一样比较——把顶点和一条边叠在一起。如果射线 OC 在 ∠AOB 内部，则 ∠AOB = ∠AOC + ∠COB。角平分线是从顶点出发、把角分成相等两半的射线：∠AOC = ∠COB = ½∠AOB。


- 🟢低: OC 平分 ∠AOB = 80°，∠AOC = ? → ½·80° = 40°
- 🟡中: ∠AOB = 100°，∠AOC = 30°，OC 在内部，∠COB = ? → 100° − 30° = 70°
- 🔴高: OC 平分 ∠AOB，OD 平分 ∠AOC。若 ∠AOB = 80°，求 ∠AOD。
   - 第 1 步 · 先求 ∠AOC：OC 平分 ∠AOB → ∠AOC = ½·80° = 40°。
   - 第 2 步 · 再求 ∠AOD：OD 平分 ∠AOC → ∠AOD = ½·40° = 20°。
   - ✅ ∠AOD = 20°。平分一次除以 2，平分两次就是四分之一：80°×¼ = 20°。

## 06 Complementary & supplementary / 余角与补角

**Key terms**：complementary 互余 = 两角和 = 90°；supplementary 互补 = 两角和 = 180°；complement 余角 = 90° − 该角；supplement 补角 = 180° − 该角；equal comps 同角的余角相等 = 

**EN:** Two angles are complementary if they add to 90°, and supplementary if they add to 180°. So the complement of an angle x is (90° − x) and its supplement is (180° − x). Useful fact: angles that are complements (or supplements) of the same angle are equal.


两角和为 90° 叫互余，和为 180° 叫互补。所以一个角 x 的余角是 (90° − x)，补角是 (180° − x)。有用的结论：同一个角的余角（或补角）相等。


- 🟢低: 30° 的余角是多少？ → 90° − 30° = 60°
- 🟡中: 30° 的补角是多少？ → 180° − 30° = 150°
- 🔴高: 【同型·关系列方程】一个角的补角是它的余角的 4 倍，求这个角。
   - 第 1 步 · 设角为 x，写出余角、补角：余角 = 90° − x，补角 = 180° − x。
   - 第 2 步 · 按「补角 = 4×余角」列方程：180 − x = 4(90 − x)。
   - 第 3 步 · 解方程：180 − x = 360 − 4x → 3x = 180 → x = 60°。
   - 第 4 步 · 检验：补角 = 120°，余角 = 30°，120 = 4×30 ✓。
   - ✅ 这个角是 60°。把「余角/补角」写成 90−x、180−x，关系句就变成一元一次方程（正好接上 F2）。

## 练习 Practice（只做题）


### 基础 Basic
1. 线段 AB=12，M 是中点，求 AM、MB。 / find AM, MB.
2. C 在 AB 上，AC=5，AB=13，求 CB。 / find CB.
3. 求 40° 的余角与补角。 / complement & supplement of 40°.
4. OC 平分 ∠AOB=64°，求 ∠AOC。 / bisector.
5. 把 2.25° 换成度分。 / to °′.

### 进阶 Intermediate
1. 点 C 在 AB 上，AC=8，CB=6，M、N 分别是 AC、CB 中点，求 MN。 / find MN.
2. ∠AOB=90°，OC 在内部，∠BOC=35°，求 ∠AOC。 / find ∠AOC.
3. 求 27°36′ + 42°48′。 / add (carry at 60).
4. 【同型·关系】一个角的余角比它小 20°，求这个角。 / complement is 20° less than the angle.

### 挑战 Challenge
1. 【挑战·计数】平面上 5 个点，任意三点不共线，过每两点画直线，共几条？ / lines through 5 points.
2. 【挑战·关系】一个角的补角是它的余角的 3 倍多 20°，求这个角。 / supplement = 3×complement + 20°.
3. 【挑战·平分】∠AOB=120°，OC 平分 ∠AOB，OD 平分 ∠BOC，求 ∠AOD。 / find ∠AOD.
4. 【挑战·线段】AB=20，C 在 AB 上，AC 比 CB 多 4，求 AC、CB。 / find AC, CB.

## 我会了吗 Self-check

- [ ] 我分得清 直线/射线/线段（端点个数、能否延伸） / line vs ray vs segment
- [ ] 我知道「两点确定一条直线」「两点之间线段最短」 / two facts
- [ ] 我会用 AB=AC+CB 和中点 AM=½AB 算线段 / add segments & midpoint
- [ ] 我会读写 ∠AOB，知道 1°=60′、1′=60″ / angle notation & units
- [ ] 我会做度分秒的加法（满60进位） / add in °′″
- [ ] 我会用角平分线 ∠AOC=½∠AOB 算角 / bisector
- [ ] 我知道互余=90°、互补=180°，会写余角90−x、补角180−x / complement & supplement
- [ ] 遇到「余角/补角的关系」我会设 x 列一元一次方程解 / relation → equation
