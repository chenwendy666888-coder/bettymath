# G4 · 坐标几何（初版）

> 两点距离·中点公式 → 斜率与直线解析式 → 坐标系中的面积 → 加料：直线与抛物线的交点。先英后中，例题分低中高。真题高频。


## 00 What this covers / 这一章要学什么

**Key terms**：coordinate 坐标 = (x, y) 定位；distance 距离 / midpoint 中点 = ；slope 斜率 / line 直线 = ；intersection 交点 = 联立方程

**EN:** Coordinate geometry turns shapes into equations, and it is one of the most-tested areas. You'll get the distance and midpoint formulas, read a line's slope and write its rule, compute areas from coordinates, and — the exam favourite — find where a line meets a parabola by solving simultaneously.


坐标几何把图形变成方程，是考得最多的板块之一。你会掌握距离与中点公式，读出直线的斜率并写出解析式，用坐标求面积，以及考试爱考的——用联立方程求直线与抛物线的交点。


## 01 Distance & midpoint / 两点距离与中点

**Key terms**：distance 距离 = √((x₂−x₁)²+(y₂−y₁)²)；midpoint 中点 = ((x₁+x₂)/2,(y₁+y₂)/2)；Pythagoras 勾股 = 距离公式即勾股；horizontal/vertical 水平/竖直 = 

**EN:** The distance between (x₁,y₁) and (x₂,y₂) is √((x₂−x₁)² + (y₂−y₁)²) — just Pythagoras on the horizontal and vertical gaps. The midpoint is the average of the coordinates: ((x₁+x₂)/2, (y₁+y₂)/2).


(x₁,y₁) 与 (x₂,y₂) 的距离是 √((x₂−x₁)² + (y₂−y₁)²)——就是对水平差与竖直差用勾股定理。中点是坐标的平均：((x₁+x₂)/2, (y₁+y₂)/2)。


- 🟢低: (0,0) 到 (3,4) 的距离？ → √(9+16)=5
- 🟡中: (1,2) 与 (5,2) 的中点？ → (3, 2)
- 🔴高: 已知 A(1,2)、B(4,6)，求 AB 的长与中点 M 的坐标。
   - 第 1 步 · 距离公式：AB = √((4−1)² + (6−2)²) = √(9+16) = √25 = 5。
   - 第 2 步 · 中点公式：M = ((1+4)/2, (2+6)/2) = (2.5, 4)。
   - ✅ AB = 5，M(2.5, 4)。距离＝勾股、中点＝坐标平均，两条公式打底。

## 02 Slope & line equation / 斜率与直线解析式

**Key terms**：slope 斜率 k = (y₂−y₁)/(x₂−x₁)；y = kx + b = k 斜率、b 截距；from 2 points 两点定线 = ；parallel 平行 → 同斜率 = 

**EN:** The slope through two points is k = (y₂−y₁)/(x₂−x₁) ('rise over run'). A line is y = kx + b, where b is the y-intercept. Given two points, find k first, then use one point to solve for b. Parallel lines share the same k.


过两点的斜率是 k = (y₂−y₁)/(x₂−x₁)（「上升 ÷ 前进」）。直线是 y = kx + b，b 是 y 截距。已知两点：先求 k，再用其中一点解出 b。平行线斜率相同。


- 🟢低: 过 (0,1) 与 (2,5) 的斜率？ → (5−1)/(2−0)=2
- 🟡中: 再写出这条直线的解析式 → 过 (0,1)：b=1 → y=2x+1
- 🔴高: 求过 A(−1, 0)、B(2, 6) 的直线解析式。
   - 第 1 步 · 斜率：k = (6−0)/(2−(−1)) = 6/3 = 2。
   - 第 2 步 · 代一点求 b：y=2x+b 过 (−1,0)：0 = 2·(−1)+b → b = 2。
   - 第 3 步 · 写出：y = 2x + 2。
   - ✅ y = 2x + 2。两点定线：先斜率、再代一点求截距。

## 03 Area from coordinates / 坐标系中的面积

**Key terms**：axis-parallel base 轴上底 = 底在坐标轴上好算；height 高 = 另一点到该底的距离；split 割补 = 拆成规则图形；½·base·height 三角形面积 = 

**EN:** For a triangle with a side on an axis, take that side as the base and the perpendicular distance to the third vertex as the height: area = ½·base·height. If no side lies on an axis, split or subtract rectangles/triangles, or use the vertical-height method.


若三角形有一边在坐标轴上，就以它为底、第三点到该底的垂直距离为高：面积 = ½·底·高。若没有边在轴上，就割补矩形/三角形，或用铅垂高法。


- 🟢低: 顶点 (0,0)(4,0)(0,3) 的三角形面积？ → ½·4·3=6
- 🟡中: (0,0)(6,0)(2,5) 的面积？ → 底6(在x轴)、高5 → ½·6·5=15
- 🔴高: 求以 A(0,0)、B(4,0)、C(1,3) 为顶点的三角形面积。
   - 第 1 步 · 选轴上的底：AB 在 x 轴上，长 = 4。
   - 第 2 步 · 高 = C 到 AB 的距离：AB 在 x 轴上，C 的高就是它的纵坐标 = 3。
   - 第 3 步 · 面积：½ · 4 · 3 = 6。
   - ✅ 面积 = 6。有边在轴上：底取该边、高取对顶点到该轴的距离（即纵/横坐标）。

## 04 Line meets parabola / 加料：直线与抛物线交点

**Key terms**：simultaneous 联立 = 两式相等；set equal 令 y 相等 = 得一元二次；solve quadratic 解一元二次 = ；two/one/none 交点个数 = 看判别式

**EN:** To find where a line meets a parabola, set their y's equal and solve the resulting quadratic in x; each solution gives a point (put x back to get y). The number of intersection points matches the quadratic's roots (discriminant): two, one (tangent), or none.


求直线与抛物线的交点：令两者的 y 相等，解得到的关于 x 的一元二次；每个解给一个交点（把 x 代回求 y）。交点个数就是该一元二次的根的个数（看判别式）：两个、一个（相切）或没有。


- 🟢低: y=x² 与 y=4 的交点横坐标？ → x²=4→x=±2
- 🟡中: y=x² 与 y=x 的交点？ → x²=x→x=0 或 1 →(0,0)、(1,1)
- 🔴高: 求直线 y = x + 2 与抛物线 y = x² 的交点坐标。
   - 第 1 步 · 令 y 相等：x² = x + 2。
   - 第 2 步 · 解一元二次：x² − x − 2 = 0 → (x−2)(x+1)=0 → x = 2 或 −1。
   - 第 3 步 · 求 y 得交点：x=2→y=4；x=−1→y=1 → (2, 4)、(−1, 1)。
   - ✅ 交点 (2, 4) 与 (−1, 1)。直线与曲线交点＝联立→令 y 相等→解一元二次→回代求 y。

## 练习 Practice（只做题）


### 基础 Basic
1. 求 (1,1) 到 (4,5) 的距离。
2. 求 (−2,3) 与 (4,−1) 的中点。
3. 求过 (0,2)、(3,8) 的斜率。
4. 顶点 (0,0)(5,0)(0,4) 的三角形面积。

### 进阶 Intermediate
1. 求过 A(1,−1)、B(3,5) 的直线解析式。
2. A(2,0)、B(2,6)、C(6,3) 的三角形面积。
3. 求 y=x² 与 y=2x+3 的交点。
4. 点 (a,3) 到 (1,0) 的距离为 5，求 a。

### 挑战 Challenge
1. 【挑战】A(0,0)、B(6,0)、C(4,4) 与 D(2,4) 的四边形面积。
2. 【挑战·同型】直线 y=kx+1 与抛物线 y=x² 相切，求 k。
3. 【挑战】三角形 A(−2,1)、B(4,1)、C(1,y) 面积为 9，求 y。
4. 【挑战】求 y=x²−2x 与直线 y=x−2 的交点及线段长。

## 我会了吗 Self-check

- [ ] 距离公式(勾股)与中点公式(平均) 我会用
- [ ] 斜率 k=(y₂−y₁)/(x₂−x₁)，会由两点求直线解析式
- [ ] 有边在轴上时会用 ½·底·高 求面积
- [ ] 会用割补/铅垂高求一般三角形面积
- [ ] 直线与抛物线交点：联立令 y 相等、解一元二次、回代
