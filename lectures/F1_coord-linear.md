# 预备篇 F1 · 图像与坐标 + 一次函数 (Coordinates & Linear Functions)

> 从零 · 双语 · 含分类讨论。先英后中；配套 graphing-lab。


## 00 How to use this / 这份怎么用

**Key terms**：coordinate plane 坐标系 = the flat grid we draw graphs on；linear function 一次函数 = y = mx + b, a straight line；slope / gradient 斜率 = how steep the line is；case analysis 分类讨论 = split into cases when a sign is unknown

**EN:** This is a from-zero foundations note. We build from what a coordinate plane is → why y=x is a slanted line → the two numbers in y=mx+b (slope m, intercept b) → and one big thinking habit: case analysis (分类讨论) — when something can be positive, negative or zero, you must split into cases. Read English first, then Chinese. Where you see 🧪 去实验室, open the Graphing Lab and drag the sliders; a graph only clicks once you move it.


这是一份从零开始的地基讲义。路线：坐标系是什么 → 为什么 y=x 是斜线 → y=mx+b 里的两个数（斜率 m、截距 b）→ 再练一个贯穿初中到剑桥的思维习惯：分类讨论——当一个量可能是正、负或 0 时，就要分情况一个个讨论。每节先英后中。看到 🧪 去实验室 就打开交互实验室拖一拖——图像只有自己动手拖才真的懂。


## 01 The coordinate plane / 坐标系是什么

**Key terms**：x-axis / y-axis 横轴/纵轴 = the horizontal / vertical number line；origin 原点 = where they cross, (0, 0)；quadrant 象限 = one of the four regions；axis 轴 (pl. axes) = a number line

**EN:** Take two number lines and cross them at right angles. The horizontal one is the x-axis, the vertical one is the y-axis, and where they cross is the origin O (0, 0). Together they turn a blank page into a map: every spot now has an address. They also cut the page into four quadrants. Right of O, x is positive; left, x is negative. Above O, y is positive; below, y is negative. So a point's two signs already tell you which quadrant it lives in.


把两条数轴垂直交叉：横着的叫 x 轴，竖着的叫 y 轴，交叉点叫 原点 O (0, 0)。它们把一张白纸变成一张地图：每个位置都有了「门牌号」。同时把平面分成 四个象限。原点右边 x 为正、左边为负；上边 y 为正、下边为负。所以只看一个点两个坐标的正负号，就知道它在哪个象限——这已经是一次小小的「分类讨论」。


## 02 Reading a point (x, y) / 一个点怎么定位

**Key terms**：point 点 = a position on the plane；ordered pair 有序数对 = (x, y) — order matters；x-coordinate x坐标 = how far left / right；y-coordinate y坐标 = how far up / down

**EN:** A point is an ordered pair (x, y) — its address. To place it: read x first, walk that many steps right (left if negative); then read y, walk that many up (down if negative). Order matters: (3, 2) and (2, 3) are different spots. "Ordered" is exactly why we always say x before y.


一个点就是 有序数对 (x, y)——它的门牌号。定位：先看 x，向右走这么多格（负就向左）；再看 y，向上走这么多格（负就向下）。顺序不能换：(3, 2) 和 (2, 3) 是两个不同的点。「有序」二字，正是我们总把 x 写在前、y 写在后的原因。


> 例 — The point P(a, b) is in the fourth quadrant. What are the signs of a and b? And where is Q(b, a)? ／ 点 P(a, b) 在第四象限，a、b 的符号各是什么？点 Q(b, a) 又在哪个象限？
>
> 解 Solution（练分类讨论）: 第四象限＝右下 → x&gt;0、y&lt;0，所以 a&gt;0，b&lt;0。Q(b, a)＝(负, 正)＝左上 → 第二象限。换坐标顺序，象限就变了，这就是「有序」的威力。


## 03 Why y = x is a straight slanted line / 为什么 y=x 是斜线

**Key terms**：rule 规则 = the equation the points must obey；satisfy 满足 = the point makes the rule true；straight line 直线 = constant rate ⇒ no bending；generalise 推广 = same logic for y=2x, y=x+1

**EN:** An equation like y = x is really a membership rule: a point (x, y) is on the graph if and only if its y equals its x. Test some points: (−2,−2), (−1,−1), (0,0), (1,1), (2,2) all pass; (1,0), (2,5) fail. Collect every point that passes and you get the graph. They line up into a straight line at 45°, and here is the deep reason it is straight, not curved: the rate is constant — every time x goes up by 1, y goes up by exactly 1, never more, never less. A constant rate can only draw a straight line. The same logic builds every line: y=2x passes (1,2),(2,4)… (rate 2, steeper); y=x+1 passes (0,1),(1,2)… (same tilt, lifted up 1). A graph is nothing mystical — it is just "all the points obeying the rule".


像 y = x 这样的方程，本质是一条「入选规则」：一个点 (x, y) 在图象上，当且仅当它的 y 等于它的 x。试几个：(−2,−2)、(−1,−1)、(0,0)、(1,1)、(2,2) 都通过；(1,0)、(2,5) 不通过。把所有通过的点收集起来，就是图象。它们排成 45° 直线。而它为什么是「直」的、不是弯的，深层原因是：变化率恒定——x 每加 1，y 就正好加 1，不多不少。恒定的变化率只能画出直线。同一套逻辑能造出所有直线：y=2x 过 (1,2)、(2,4)…（变化率 2，更陡）；y=x+1 过 (0,1)、(1,2)…（一样的斜、整体抬高 1）。图象并不神秘——它就是「所有满足规则的点」。


> 例 — Show that (0,0), (1,1) and (50,50) are all on y=x, but explain why (50,49) is not — and what single number measures "how far off" it is. ／ 验证 (0,0)、(1,1)、(50,50) 都在 y=x 上，并解释为什么 (50,49) 不在，用一个数说明它「差了多少」。
>
> 解 Solution: 代入规则 y=x：0=0 ✓，1=1 ✓，50=50 ✓。(50,49)：需要 y=50，实际 y=49，y 比 x 小 1，所以差了 1，不满足规则、不在线上。（这个「差 1」其实就是它到直线的竖直距离。）


## 04 The slope m, in depth / 斜率 m 讲透

**Key terms**：slope / gradient 斜率 (m) = rise ÷ run 上升÷右移；from two points 由两点求 = m = (y₂−y₁)/(x₂−x₁)；steepness 陡度 = bigger |m| = steeper；sign of m m的符号 = + up, − down, 0 flat

**EN:** The slope m is the rate: how much y changes per 1 step of x. Two ways to see it: (a) from the equation, m is the number multiplying x; (b) from any two points on the line, m = (y₂−y₁)/(x₂−x₁) = rise ÷ run (up-amount ÷ right-amount). Two facts fall out. Steepness: the bigger |m|, the steeper — |m|=2 climbs twice as fast as |m|=1; |m|=½ is gentle. Direction (case analysis on the sign of m): m&gt;0 → uphill left-to-right (y grows as x grows, increasing); m&lt;0 → downhill (y shrinks as x grows, decreasing); m=0 → perfectly flat, y never changes (a horizontal line y=b). Get in the habit: whenever you meet m, ask "is it +, −, or 0?" — that split is 分类讨论.


斜率 m 就是「变化率」：x 每走 1 步，y 变化多少。两种看法：(a) 从式子看，m 就是 x 前面的那个数；(b) 从直线上任意两点看，m =(y₂−y₁)/(x₂−x₁)=上升 ÷ 右移（rise ÷ run）。由此得两件事。陡度：|m| 越大越陡——|m|=2 比 |m|=1 涨得快一倍；|m|=½ 就平缓。方向（对 m 的符号做分类讨论）：m&gt;0 → 从左下到右上，x 增大 y 也增大（递增）；m&lt;0 → 从左上到右下，x 增大 y 反而减小（递减）；m=0 → 完全水平，y 永远不变（就是水平线 y=b）。养成习惯：一见到 m，先问「它是正、负，还是 0？」——这一分，就是分类讨论。


> 例 — A line passes through (1, 2) and (4, 11). (i) Find its slope. (ii) Is it steeper than y = 2x? (iii) If it also passes through (0, k), find k. ／ 一条直线过 (1, 2) 和 (4, 11)。(i) 求斜率；(ii) 它比 y=2x 更陡吗？(iii) 若它还过 (0, k)，求 k。
>
> 解 Solution: (i) m =(11−2)/(4−1)=9/3=3。(ii) |3|&gt;|2| → 更陡。(iii) 用 m=3、过 (1,2)：从 (1,2) 往左走 1 步（x：1→0）y 要减 m=3，2−3=k=−1。（顺带你已经得出这条线是 y=3x−1。）


## 05 The intercept b, in depth / 截距 b 讲透

**Key terms**：y-intercept y截距 (b) = the y value when x = 0；(0, b) = the crossing point on the y-axis；distance from x-axis 到x轴的距离 = |b|；sign of b b的符号 = + above, − below, 0 through O

**EN:** Put x = 0 into y = mx + b: y = m·0 + b = b. So the moment x is 0, y is exactly b — the line pierces the y-axis at (0, b). That is why b is the y-intercept. Read b geometrically: it is the crossing point's signed distance from the x-axis (from y=0), measured up the y-axis; its size |b| is how far, its sign is which side. Case analysis on the sign of b: b&gt;0 crosses the y-axis above the origin; b&lt;0 crosses below; b=0 passes through the origin. Big picture: m tilts the line, b slides it up/down — two independent controls, exactly the two sliders in the Lab.


把 x = 0 代进 y = mx + b：y = m·0 + b = b。所以 x 一等于 0，y 就正好是 b——直线在 (0, b) 处穿过 y 轴。这就是 b 叫 y 截距的原因。几何上读 b：它是穿过点到 x 轴（y=0）沿 y 轴量的「带符号距离」；|b| 是离多远，符号是在哪一侧。对 b 的符号做分类讨论：b&gt;0 在原点上方穿过 y 轴；b&lt;0 在下方穿过；b=0 正好过原点。总览：m 管倾斜、b 管上下平移——两个互不干扰的旋钮，正好就是实验室里那两根滑块。


> 例 — A line has slope −2 and passes through (0, 3). (i) Write its equation. (ii) Find where it crosses the x-axis. (iii) State the signs of m and b, and say what the line looks like. ／ 一条直线斜率 −2、过 (0, 3)。(i) 写方程；(ii) 求它与 x 轴的交点；(iii) 说出 m、b 的符号，并描述这条线的样子。
>
> 解 Solution: (i) 过 (0,3) 说明 b=3，m=−2 → y=−2x+3。(ii) 与 x 轴交点令 y=0：0=−2x+3 → x=3/2，即 (3/2, 0)。(iii) m&lt;0（下降）、b&gt;0（在原点上方穿过 y 轴）→ 一条从左上向右下、且在 y 轴正半轴穿过的直线。


## 06 Case analysis: signs of m and b / 分类讨论：m、b 的正负

**Key terms**：case analysis 分类讨论 = split into all possible sign cases；m controls tilt = + up, − down, 0 flat；b controls height = + above, − below, 0 through O；read a graph 读图 = recover m, b signs from a picture

**EN:** Now combine them. Since m can be + / − / 0 and b can be + / − / 0, a line's whole "look" is decided by this pair of signs — that is a perfect place to practise case analysis (分类讨论): list the cases and handle each. The picture shows the four main ones: (m&gt;0,b&gt;0) up & crossing high; (m&gt;0,b&lt;0) up & crossing low; (m&lt;0,b&gt;0) down & crossing high; (m&lt;0,b&lt;0) down & crossing low. This works both ways: given signs you can sketch the line, and given a picture you can read off the signs of m and b. In the exam, whenever an unknown could be positive, negative or zero, splitting into cases like this is what stops you from missing an answer.


现在把两者合起来。既然 m 可以是 + / − / 0、b 也可以是 + / − / 0，一条直线的整体「长相」就由这对符号决定——这正是练分类讨论的好地方：把情况列全，一个个处理。图里画了四种主要情况：(m&gt;0,b&gt;0) 上升、在上方穿过；(m&gt;0,b&lt;0) 上升、在下方穿过；(m&lt;0,b&gt;0) 下降、在上方穿过；(m&lt;0,b&lt;0) 下降、在下方穿过。这件事双向都成立：给符号能画线，给一张图也能反读出 m、b 的符号。到了考试，只要某个未知量可能正、可能负、可能 0，像这样分情况，就是防止你漏解的关键。


> 例 — A line goes downhill and crosses the y-axis below the origin. (i) What are the signs of m and b? (ii) Which quadrants does it pass through? (iii) If instead you are only told m·b &gt; 0, what can you say about the line's direction and where it crosses? ／ 一条直线下降，且在原点下方穿过 y 轴。(i) m、b 符号？(ii) 它经过哪几个象限？(iii) 若只告诉你 m·b &gt; 0，你能对方向和穿过位置说些什么？
>
> 解 Solution: (i) 下降 → m&lt;0；下方穿过 → b&lt;0。(ii) 这样的线从第二象限来、穿过第三、进第四象限（不经过第一象限）。(iii) m·b&gt;0 表示 m、b 同号 → 要么都正（上升、上方穿过），要么都负（下降、下方穿过）——这就得分两类讨论，两种都可能，不能只答一种。


## 07 Draw it & go to the Lab / 画一次函数 & 去实验室

**Key terms**：plot points 描点 = choose x, compute y, mark；two points fix a line 两点定线 = only 2 points needed；join & extend 连线延长 = ruler, both ways；check 检验 = does a third point fit?

**EN:** To draw y = mx + b by plotting points: pick a few x-values, compute y, mark them, join with a ruler and extend both ways. In fact two points already fix a line — a fast pair is the y-intercept (0, b) and one more, say x=1 giving (1, m+b). Then check with a third point to be safe. Now the part that actually makes it stick — move it yourself: open the Graphing Lab, drag m (watch the tilt, and the +/−/0 cases from section 06) and drag b (watch it slide up and down through the origin). Do the tilt and the slide until you can predict the line before you let go.


用 描点法画 y = mx + b：选几个 x，算出 y，描点，用直尺连起来并向两端延长。其实 两点就能定一条直线——最快的一对是 y 截距 (0, b) 再加一个点，比如 x=1 得 (1, m+b)。再用第三个点检验更稳。接下来真正让你学会的一步——自己去拖：打开交互实验室，拖 m（看倾斜，对照第 06 节 +/−/0 三种情况），拖 b（看它上下平移、穿过原点）。反复拖到「松手前就能预测这条线长什么样」为止。


## 练习 Practice（只做题，不给提示）


### 基础 Basic

1. Plot A(2, 3), B(−1, 4), C(0, −2), D(−3, −1); state each point's quadrant (or axis). / 描出并说出各点在第几象限（或哪条轴上）。
2. For y = 2x − 1, complete the table for x = −2,−1,0,1,2, then draw the line. / 填表并画线。
3. Find the slope of the line through (−1, 1) and (2, 7). / 求过 (−1,1) 与 (2,7) 的斜率。
4. Write the slope and y-intercept, then say +/−/0 for each: y=3x+2; y=−x−4; y=½x; y=5. / 写出斜率与 y 截距并标符号。

### 光剑同型 Guangjian-style

1. 【同型·光剑英数模拟卷】A line passes through (0, −1) and (2, 3). Find m and b, then its x-intercept. / 过 (0,−1) 与 (2,3)，求 m、b 及 x 截距。
2. 【同型·2022 光剑真题】The line y = mx + 3 passes through (2, 7). Find m; does the line pass through the third quadrant? / 求 m；该直线经过第三象限吗？
3. 【同型·光剑】Line y = (k−1)x + 2 is decreasing. What values can k take? / 直线 y=(k−1)x+2 递减，k 的取值范围？（练分类/条件）

### 挑战 Challenge

1. 【挑战】Lines y = 2x + 1 and y = −x + 4 meet at one point. Find it, and find the area of the triangle they form with the y-axis. / 求交点，并求两线与 y 轴围成的三角形面积。
2. 【挑战】A line has slope 3 and passes through (1, 2). Show its equation is y=3x−1, then find all integer points (x, y) on it with −2 ≤ x ≤ 2. / 证明方程并求 −2≤x≤2 的整点。
3. 【挑战·分类讨论】For y = mx + b, you are told the line does NOT pass through the second quadrant. What must be true about the signs of m and b? (list the cases) / 直线不经过第二象限，m、b 符号需满足什么？（列出各情况）

## 我会了吗 Self-check

- [ ] 我能说出 x 轴、y 轴、原点、象限，并由坐标符号判断象限 / axes, quadrant from signs
- [ ] 我能把一个点 (x, y) 描到坐标系上，并理解「有序」 / plot & ordered pair
- [ ] 我能解释为什么 y=x 是直线（恒定变化率） / why y=x is straight
- [ ] 我能由两点求斜率 m，并说出 |m| 陡度与 m 符号方向 / slope from two points, steepness & sign
- [ ] 我知道 b 是 y 截距、x=0 时的 y 值，并会用 b 符号判断穿过位置 / intercept & its sign
- [ ] 我会对 m、b 的正负做分类讨论，能由符号画线、由图读符号 / case analysis both ways
- [ ] 我在实验室里拖过 m、b，能松手前预测直线 / I can predict the line in the Lab
