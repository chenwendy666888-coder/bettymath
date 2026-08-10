# G6 · 解直角三角形与应用（初版）

> 用 sin·cos·tan 解直角三角形(已知两元素求其余) → 仰角俯角 → 坡度/方位的实际应用。先英后中，例题分低中高。（定义见 F8）


## 00 What this covers / 这一章要学什么

**Key terms**：solve a right triangle 解直角三角形 = 求出所有边角；given two 已知两元素 = (至少一条边)；application 应用 = 高度/距离；elevation/depression 仰角/俯角 = 

**EN:** With the trig ratios from F8, you can solve a right triangle: given two elements (at least one side), find all the others. Then the payoff — real problems: heights of buildings, widths of rivers, slopes, using angles of elevation and depression. This is where trigonometry earns its keep.


有了 F8 的三角比，你就能解直角三角形：已知两个元素（至少一条边），求出其余所有。然后是回报——实际问题：楼有多高、河有多宽、坡有多陡，用仰角与俯角。这正是三角学大显身手的地方。


## 01 Solving a right triangle / 解直角三角形

**Key terms**：choose the ratio 选比 = 看已知/求的是哪两条边；sin for opp&hyp 对与斜用sin = ；tan for opp&adj 对与邻用tan = ；find side/angle 求边或角 = 

**EN:** To find an unknown side, pick the ratio that links the known side to the unknown: opposite & hypotenuse → sin; adjacent & hypotenuse → cos; opposite & adjacent → tan. Set up the equation, then solve. To find an angle from two sides, you'd use the inverse (arcsin/…); at this level we mostly find sides from a given angle.


求未知边时，选出把已知边和未知边连起来的那个比：对边与斜边 → sin；邻边与斜边 → cos；对边与邻边 → tan。列出等式再解。若由两边求角，要用反三角（arcsin 等）；本阶段主要是「由已知角求边」。


- 🟢低: 斜边 10、∠A=30°，A 的对边 = ? → 10·sin30° = 10·½ = 5
- 🟡中: 邻边 8、∠A=45°，对边 = ? → 8·tan45° = 8·1 = 8
- 🔴高: 直角三角形中 ∠C=90°，∠A=30°，斜边 c=10，求 A 的对边 a 与邻边 b。
   - 第 1 步 · 对边用 sin：a = c·sin A = 10·sin30° = 10·½ = 5。
   - 第 2 步 · 邻边用 cos：b = c·cos A = 10·cos30° = 10·(√3/2) = 5√3。
   - 第 3 步 · 检验(勾股)：a²+b² = 25 + 75 = 100 = c² ✓。
   - ✅ a = 5，b = 5√3。已知斜边和角：对边 = 斜·sin、邻边 = 斜·cos，最后可用勾股检验。

## 02 Elevation & depression / 仰角·俯角的应用

**Key terms**：angle of elevation 仰角 = 水平线往上看的角；angle of depression 俯角 = 水平线往下看的角；horizontal 水平线 = 量角的基准；draw a right triangle 画直角三角形 = 把实景抽象成图

**EN:** An angle of elevation is measured up from the horizontal; an angle of depression is measured down. The trick is always the same: draw the right triangle, mark the horizontal distance and vertical height, and pick sin/cos/tan to link what you know to what you want (height and horizontal distance are opposite & adjacent → tan).


仰角是从水平线往上量的角；俯角是往下量的角。诀窍永远一样：画出直角三角形，标出水平距离和竖直高度，再选 sin/cos/tan 把已知和所求连起来（高度与水平距离是对边与邻边 → 用 tan）。


- 🟢低: 从地面看塔顶仰角 45°、水平距离 20 m，塔高 = ? → 20·tan45° = 20 m
- 🟡中: 仰角 30°、水平距离 60 m，高 = ? → 60·tan30° = 60·(√3/3) = 20√3 m
- 🔴高: 在离一栋楼 30 m 处的地面，测得楼顶的仰角为 60°（眼睛贴地）。求楼高（精确值与近似值，√3≈1.73）。
   - 第 1 步 · 画直角三角形：水平距离 30 m = 邻边，楼高 = 对边，仰角 60° 在观测点。
   - 第 2 步 · 选 tan：tan60° = 对/邻 = 高/30 → 高 = 30·tan60°。
   - 第 3 步 · 代值：tan60° = √3 → 高 = 30√3 ≈ 30×1.73 = 51.9 m。
   - ✅ 楼高 = 30√3 ≈ 51.9 m。仰角问题：画直角三角形→高与水平距离用 tan→代特殊角值。

## 练习 Practice（只做题）


### 基础 Basic
1. 斜边 12、∠A=30°，求 A 的对边。 / opposite.
2. 邻边 5、∠A=45°，求对边。 / tan.
3. ∠C=90°、∠A=60°、邻边 b=4，求对边 a。 / find a.
4. 仰角 45°、水平距离 15 m，求高。 / height.

### 进阶 Intermediate
1. ∠C=90°、斜边 c=8、∠A=30°，求 a、b。 / solve.
2. 仰角 30°、水平 90 m，求高（√3≈1.73）。 / height.
3. 从楼顶俯角 30° 看地面一点，楼高 20 m，求水平距离。 / horizontal distance.
4. 【同型】直角三角形两直角边 6、6√3，求较小的锐角。 / find angle (special).

### 挑战 Challenge
1. 【挑战】一段斜坡水平前进 100 m、上升 30 m，求坡角的正切（坡度 i=铅直:水平）。 / slope.
2. 【挑战】河两岸，在 A 测对岸树的仰角 30°，前进 20 m 到 B 再测得 60°，求树高。 / two angles.
3. 【挑战】等腰三角形顶角 120°、腰长 6，求底边（作高用 60°/30°）。 / isosceles.
4. 【挑战·方位】从 O 向北偏东 60° 走 200 m 到 P，求 P 在 O 正东与正北方向的距离分量。 / bearing components.

## 我会了吗 Self-check

- [ ] 求边我会选对比（对斜sin/邻斜cos/对邻tan）并列式 / choose ratio
- [ ] 已知斜边和角，对边=斜·sin、邻边=斜·cos / solve right triangle
- [ ] 我会用勾股检验解直角三角形的结果 / check
- [ ] 仰角从水平往上、俯角往下，我会画直角三角形 / elevation/depression
- [ ] 高与水平距离用 tan，我会代特殊角求高 / height problems
