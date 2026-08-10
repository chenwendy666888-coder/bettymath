# F6 · 二次函数初步

> y=ax² 的形状 → 平移得 y=a(x−h)²+k(顶点式) → 顶点·对称轴·开口 → 一般式 y=ax²+bx+c 求顶点 → 与 x 轴交点(判别式)。先英后中，例题分低中高，配抛物线图。


## 00 What this covers / 这一章要学什么

**Key terms**：quadratic function 二次函数 = y = ax²+bx+c (a≠0)；parabola 抛物线 = 它的图象；vertex 顶点 = 最高或最低点；axis of symmetry 对称轴 = 过顶点的竖直线

**EN:** A quadratic function y = ax² + bx + c (a ≠ 0) draws a parabola — a smooth U (or ∩). This intro builds it up: start from y = ax², shift it to y = a(x−h)² + k, read off the vertex, axis and opening direction, convert a general y = ax²+bx+c to find its vertex, and see where it crosses the x-axis. Quadratics are one of the most tested topics on the paper.


二次函数 y = ax²+bx+c（a≠0）画出抛物线——一条光滑的 U（或 ∩）形。本章从 y = ax² 起步，平移成 y = a(x−h)²+k，读出顶点、对称轴、开口方向，把一般式 y = ax²+bx+c 化出顶点，并看它在哪里与 x 轴相交。二次函数是卷子上考得最多的内容之一。


## 01 The basic parabola y = ax² / 最基本的抛物线

**Key terms**：opening 开口 = a>0 向上，a<0 向下；|a| 决定胖瘦 = |a| 越大越「瘦」；vertex at origin 顶点在原点 = y=ax² 顶点 (0,0)；symmetry 对称 = 关于 y 轴对称

**EN:** y = ax² sits with its vertex at the origin, symmetric about the y-axis. If a &gt; 0 it opens up (a lowest point); if a &lt; 0 it opens down (a highest point). The larger |a| is, the narrower the parabola.


y = ax² 的顶点在原点，关于 y 轴对称。a &gt; 0 开口向上（有最低点）；a &lt; 0 开口向下（有最高点）。|a| 越大，抛物线越瘦。


- 🟢低: y = 3x² 开口向哪？ → 向上（a = 3 &gt; 0）
- 🟡中: y = −½x² 开口向哪？有最高还是最低点？ → 向下，有最高点

## 02 Shifting to vertex form / 平移与顶点式 a(x−h)²+k

**Key terms**：vertex form 顶点式 = y = a(x−h)² + k；h → 右移 = +h 向右、−h 向左；k → 上移 = +k 向上、−k 向下；vertex 顶点 = (h, k)

**EN:** Slide y = ax² around and you get vertex form y = a(x−h)² + k, whose vertex is (h, k). The −h inside moves it right by h (careful: minus means right), and +k outside moves it up by k. The axis of symmetry is the vertical line x = h.


把 y = ax² 平移，就得到顶点式 y = a(x−h)² + k，其顶点为 (h, k)。括号里的 −h 让它向右移 h（注意：减号是向右），外面的 +k 让它向上移 k。对称轴是竖直线 x = h。


- 🟢低: y = (x−3)² + 2 的顶点？ → (3, 2)
- 🟡中: y = x² 向左 1、向下 4，得？ → y = (x+1)² − 4
- 🔴高: 把 y = 2(x−1)² − 3 的图象向右平移 2、向上平移 5，求新解析式与新顶点。
   - 第 1 步 · 原顶点：y = 2(x−1)²−3 顶点 (1, −3)。
   - 第 2 步 · 平移顶点：右移 2、上移 5：新顶点 (1+2, −3+5) = (3, 2)。
   - 第 3 步 · 写解析式：开口 a=2 不变：y = 2(x−3)² + 2。
   - ✅ y = 2(x−3)² + 2，顶点 (3, 2)。顶点式平移只动顶点 (h,k)，a 不变。

## 03 General form → vertex / 一般式 ax²+bx+c 的顶点

**Key terms**：general form 一般式 = y = ax²+bx+c；axis 对称轴 = x = −b/(2a)；vertex-x 顶点横坐标 = −b/(2a)；max/min 最值 = 把顶点横坐标代回

**EN:** For y = ax² + bx + c, the axis of symmetry is x = −b/(2a), and the vertex sits on it — put x = −b/(2a) back in to get the vertex's y (the max if a&lt;0, the min if a&gt;0). You don't need to memorise the y-formula: just compute x first, then substitute.


对 y = ax²+bx+c，对称轴是 x = −b/(2a)，顶点就在这条轴上——把 x = −b/(2a) 代回即得顶点的 y（a&lt;0 时是最大值、a&gt;0 时是最小值）。不必背 y 的公式：先算 x，再代入。


- 🟢低: y = x² − 4x + 3 的对称轴？ → x = −(−4)/2 = 2
- 🟡中: 它的顶点？ → x=2 代回：4−8+3 = −1 → (2, −1)
- 🔴高: 求 y = −2x² + 4x + 1 的对称轴、顶点，并说明有最大还是最小值、值为多少。
   - 第 1 步 · 对称轴：x = −b/(2a) = −4/(2·(−2)) = 1。
   - 第 2 步 · 顶点 y：代 x=1：−2·1 + 4·1 + 1 = 3 → 顶点 (1, 3)。
   - 第 3 步 · 最值：a = −2 &lt; 0 → 开口向下 → 有最大值，为 3。
   - ✅ 对称轴 x=1，顶点 (1,3)，最大值 3。一般式先用 −b/2a 求轴，再代回求顶点。

## 04 Where it meets the x-axis / 与 x 轴的交点（判别式）

**Key terms**：roots 交点/根 = 令 y=0 解方程；discriminant 判别式 = Δ = b²−4ac；Δ>0 两个交点 = ；Δ=0 一个 / Δ<0 无 = 

**EN:** The parabola meets the x-axis where y = 0, i.e. the roots of ax²+bx+c = 0. The discriminant Δ = b²−4ac tells you how many: Δ &gt; 0 → two points, Δ = 0 → one (tangent), Δ &lt; 0 → none. Factor or use the quadratic formula to find them.


抛物线与 x 轴相交处 y = 0，即 ax²+bx+c = 0 的根。判别式 Δ = b²−4ac 告诉你有几个：Δ &gt; 0 → 两个交点，Δ = 0 → 一个（相切），Δ &lt; 0 → 没有。用因式分解或求根公式求出它们。


- 🟢低: y = x²−4x+3 与 x 轴交点的横坐标？ → 解 x²−4x+3=0 → x = 1 或 3
- 🟡中: y = x²−6x+9 与 x 轴几个交点？ → Δ = 36−36 = 0 → 1 个（相切于 x=3）
- 🔴高: 已知抛物线 y = x² − 2x − 3。① 求它与 x 轴、y 轴的交点；② 求顶点；③ 说出开口方向与最值。
   - 第 1 步 · 与 x 轴：令 y=0：x²−2x−3=0 →(x−3)(x+1)=0 → x=3 或 −1 → (3,0)、(−1,0)。
   - 第 2 步 · 与 y 轴：令 x=0：y = −3 → (0, −3)。
   - 第 3 步 · 顶点：x = −b/2a = 1；y = 1−2−3 = −4 → (1, −4)。
   - 第 4 步 · 开口与最值：a=1&gt;0 → 向上 → 最小值 −4。
   - ✅ x 轴交点 (3,0)、(−1,0)；y 轴 (0,−3)；顶点 (1,−4)；开口向上、最小值 −4。这就是「画抛物线」的全部关键信息。

## 练习 Practice（只做题）


### 基础 Basic
1. y = −4x² 开口向哪？有最高还是最低点？ / opening & max/min.
2. 写出 y = (x−2)² + 5 的顶点与对称轴。 / vertex & axis.
3. y = x² 向右 3、向下 1 平移后的解析式？ / shifted.
4. y = x²−2x 与 x 轴的交点？ / x-intercepts.

### 进阶 Intermediate
1. 求 y = x²−6x+5 的对称轴、顶点、最小值。 / axis, vertex, min.
2. 求 y = −x²+2x+3 的顶点与最大值。 / vertex & max.
3. y = 2(x+1)²−3 向右 4、向上 1，求新解析式。 / translate.
4. 判断 y = x²+2x+5 与 x 轴的交点个数。 / number of x-intercepts.

### 挑战 Challenge
1. 【挑战】抛物线 y = x²+bx+c 过 (1,0) 与 (3,0)，求 b、c 及顶点。 / find b,c,vertex.
2. 【挑战】y = ax²−4x+1 的顶点在 x=1 上，求 a 及最值。 / find a.
3. 【挑战·同型】二次函数 y = x²−2x+k 与 x 轴只有一个交点，求 k。 / one intersection.
4. 【挑战】把 y = x²−4x+7 配成顶点式，并求最小值。 / complete the square.

## 我会了吗 Self-check

- [ ] a>0 向上、a<0 向下，|a| 越大越瘦，我懂了 / opening & width
- [ ] 顶点式 y=a(x−h)²+k 我会读顶点 (h,k)、对称轴 x=h / vertex form
- [ ] 平移只动顶点、a 不变，我会写平移后解析式 / translation
- [ ] 一般式我会用 x=−b/(2a) 求对称轴、代回求顶点 / axis & vertex
- [ ] 我会用判别式 b²−4ac 判断与 x 轴交点个数 / discriminant
- [ ] 给一个二次函数，我能求出画图的全部关键信息 / full sketch info
