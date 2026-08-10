# G3 · 圆（初版）

> 圆的基本量(半径·弦·弧·圆心角) → 圆周角定理 → 垂径定理 → 切线 → 弧长与扇形面积。先英后中，例题分低中高。


## 00 What this covers / 这一章要学什么

**Key terms**：circle 圆 = 到定点等距的点的集合；radius 半径 / chord 弦 = ；arc 弧 / central angle 圆心角 = ；theorem 定理 = 圆的漂亮规律

**EN:** A circle hides some of the most elegant theorems in school maths. You'll meet its parts (radius, chord, arc, central angle), the inscribed-angle theorem (a circle angle is half the central angle on the same arc), the perpendicular-from-centre rule (it bisects a chord), the tangent (perpendicular to the radius at the touch point), and how to measure arc length and sector area.


圆藏着中学里最优雅的一些定理。你会认识它的各部分（半径、弦、弧、圆心角），学圆周角定理（同弧上的圆周角是圆心角的一半）、垂径定理（从圆心作弦的垂线会平分弦）、切线（在切点处与半径垂直），以及怎样量弧长与扇形面积。


## 01 Parts of a circle / 圆的基本量

**Key terms**：centre O / radius r 圆心/半径 = ；chord 弦 = 连接圆上两点；diameter 直径 = 过圆心的弦 = 2r；arc 弧 / central angle 圆心角 = 

**EN:** Every point on a circle is the same distance r (radius) from the centre O. A chord joins two points on the circle; the longest chord is the diameter (= 2r). An arc is a piece of the circle; the central angle is the angle at O that opens onto that arc.


圆上每一点到圆心 O 的距离都是半径 r。弦连接圆上两点；最长的弦是直径（= 2r）。弧是圆的一段；圆心角是顶点在 O、对着那段弧的角。


## 02 Inscribed angle theorem / 圆周角定理

**Key terms**：inscribed angle 圆周角 = 顶点在圆上；= ½ central 圆心角的一半 = ；same arc 同弧 = 同弧上圆周角相等；semicircle 半圆 = 直径所对圆周角 = 90°

**EN:** An inscribed angle (vertex on the circle) is half the central angle that opens onto the same arc. Two consequences you'll use constantly: inscribed angles on the same arc are equal, and an angle inscribed in a semicircle is 90° (the diameter subtends a right angle).


圆周角（顶点在圆上）等于同弧所对圆心角的一半。两条常用推论：同弧上的圆周角相等；直径所对的圆周角是 90°（半圆上的圆周角是直角）。


- 🟢低: 同弧圆心角 80°，圆周角 = ? → 40°（一半）
- 🟡中: 直径所对的圆周角是多少？ → 90°
- 🔴高: AB 是⊙O 的直径，C 在圆上，∠ABC = 35°，求 ∠BAC 与 ∠ACB。
   - 第 1 步 · 半圆上的角：AB 是直径 → ∠ACB 是直径所对圆周角 = 90°。
   - 第 2 步 · 三角形内角和：△ABC 中 ∠BAC = 180 − 90 − 35 = 55°。
   - ✅ ∠ACB = 90°，∠BAC = 55°。见到「直径」先想「所对圆周角 90°」，再用内角和。

## 03 Perpendicular from centre / 垂径定理

**Key terms**：perpendicular to chord 垂直于弦 = ；bisects chord 平分弦 = ；right triangle 直角三角形 = 半弦、弦心距、半径；Pythagoras 勾股 = r² = d² + (½chord)²

**EN:** If a line from the centre is perpendicular to a chord, it bisects that chord (and its arc). This creates a right triangle whose legs are the half-chord and the distance from centre to chord, with the radius as hypotenuse — so r² = d² + (½·chord)² by Pythagoras.


如果一条从圆心出发的线垂直于弦，它就平分这条弦（及所对弧）。这会形成一个直角三角形：两条直角边是半弦与圆心到弦的距离，半径是斜边——所以由勾股定理 r² = d² + (½·弦)²。


- 🟢低: 垂径定理里，从圆心垂直于弦的线做了什么？ → 平分这条弦（和所对的弧）
- 🟡中: 半径 5，圆心到弦距离 3，半弦 = ? → √(25−9) = 4
- 🔴高: ⊙O 半径为 5，一条弦到圆心的距离为 3，求这条弦的长。
   - 第 1 步 · 构造直角三角形：半径 5 = 斜边，圆心到弦距离 3 = 一条直角边，半弦 = 另一条直角边。
   - 第 2 步 · 勾股求半弦：半弦 = √(5² − 3²) = √16 = 4。
   - 第 3 步 · 弦长：弦 = 2 × 半弦 = 8。
   - ✅ 弦长 = 8。垂径定理把「弦」问题变成「半径、弦心距、半弦」的勾股直角三角形。

## 04 Tangent, arc length, sector / 切线·弧长·扇形

**Key terms**：tangent 切线 = 与圆只有一个公共点；⊥ radius 垂直半径 = 切线在切点处 ⊥ 半径；arc length 弧长 = l = nπr/180；sector area 扇形面积 = S = nπr²/360

**EN:** A tangent touches the circle at exactly one point and is perpendicular to the radius there. For a central angle n° in a circle of radius r: the arc length is l = nπr/180 and the sector area is S = nπr²/360 (each is the fraction n/360 of the whole).


切线与圆只有一个公共点，并在切点处与半径垂直。对半径为 r、圆心角 n° 的情形：弧长 l = nπr/180，扇形面积 S = nπr²/360（都是整圆的 n/360）。


- 🟢低: 切线与过切点的半径成多少度？ → 90°（垂直）
- 🟡中: n=90°、r=4，弧长 = ? → l = 90π·4/180 = 2π
- 🔴高: ⊙O 半径为 6，圆心角为 60° 的扇形，求它的弧长与面积。
   - 第 1 步 · 弧长：l = nπr/180 = 60·π·6/180 = 2π。
   - 第 2 步 · 扇形面积：S = nπr²/360 = 60·π·36/360 = 6π。
   - ✅ 弧长 2π，面积 6π。弧长和面积都是整圆的 60/360 = ⅙：整圆周长 12π 的 ⅙ 是 2π，整圆面积 36π 的 ⅙ 是 6π。

## 练习 Practice（只做题）


### 基础 Basic
1. 同弧所对圆心角 100°，圆周角多少？ / inscribed.
2. AB 为直径，C 在圆上，∠ACB = ? / semicircle.
3. 半径 13，弦心距 5，求半弦与弦长。 / chord.
4. 切线与半径在切点处成多少度？ / tangent.

### 进阶 Intermediate
1. 半径 10 的圆，一条弦长 16，求圆心到弦的距离。 / distance to chord.
2. n=120°、r=3，求弧长与扇形面积。 / arc & sector.
3. AB 为直径，∠ABC=28°，求 ∠BAC。 / angles.
4. 【同型】圆内接三角形一边为直径，另两边为 6、8，求直径。 / hypotenuse = diameter.

### 挑战 Challenge
1. 【挑战·垂径】半径 5 的圆，两条平行弦长分别为 6 和 8，求两弦之间的距离（两种情形）。 / two cases.
2. 【挑战·扇形】扇形弧长为 4π、半径为 6，求圆心角与面积。 / from arc length.
3. 【挑战·切线】PA 切⊙O 于 A，OA=3、OP=5，求 PA。 / tangent length.
4. 【挑战·圆周角】圆内接四边形对角互补，说明理由。 / cyclic quadrilateral.

## 我会了吗 Self-check

- [ ] 我认识半径/弦/直径/弧/圆心角 / parts
- [ ] 圆周角=½圆心角、同弧圆周角相等、直径所对90° / inscribed angle
- [ ] 垂径定理：从圆心垂直于弦→平分弦，用 r²=d²+(½弦)² / perpendicular
- [ ] 切线在切点处⊥半径 / tangent
- [ ] 弧长 l=nπr/180、扇形面积 S=nπr²/360 / arc & sector
