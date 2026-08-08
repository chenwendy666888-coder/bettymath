# 预备篇 F0b · 解题方法工具箱

> 做题时伸手就拿的方法：Pólya 四步 + 画图列表·找规律·分类讨论·数形结合·整体换元·特殊值·逆推·猜验·拆子问题·排除·回头检查。例题用光剑/他校难题改编。


## 00 A toolbox, not tricks / 一个工具箱，不是套路

**Key terms**：heuristic 启发式 = a general way to attack a problem；strategy 策略 = which tool to pick；toolbox 工具箱 = many tools, pick per problem；practice 练习 = choosing gets easier with reps

**EN:** Hard problems are not solved by luck — they are solved by reaching for a method. This toolbox holds 12 of them. None is a magic trick; each is a sensible way to make progress. The skill is choosing the right one, and that comes from practice. Start every problem with Pólya's four steps, then pick a tool.


难题不是靠运气解出来的，是靠「伸手去拿一个方法」解出来的。这个工具箱有 12 件。没有一件是魔法套路，每一件都是让你往前走一步的合理办法。真正的本事是「选对」，而选对靠多练。每道题都先走 Pólya 四步，再挑工具。


## 01 Pólya's 4 steps / Pólya 四步法（总纲）

**Key terms**：understand 理解 = what is given / asked；plan 计划 = choose a strategy；carry out 执行 = do it step by step；look back 回头查 = check & improve

**EN:** George Pólya's classic four steps: (1) Understand — what is given, what is asked; draw and label. (2) Plan — pick a strategy from this toolbox. (3) Carry out — work carefully, one step at a time. (4) Look back — is the answer reasonable? is there a cleaner way? Most mistakes come from skipping step 1 or step 4, so never skip them.


波利亚（George Pólya）的经典四步：(1) 理解——已知什么、求什么，画图标注。(2) 计划——从工具箱里挑一个策略。(3) 执行——一步一步认真做。(4) 回头检查——答案合理吗？有没有更简法？错误多半出在跳过第 1 步或第 4 步，千万别省。


> 例 — 【同型·华二】a, b are the two roots of x²−6x+(n+1)=0, and a, b, 4 are the sides of an isosceles triangle. Which Pólya step tells you to split into cases, and find all possible n. ／ 【同型·华二】a、b 是 x²−6x+(n+1)=0 的两根，且 a、b、4 是等腰三角形三边。哪一步让你想到分类？求 n 的所有可能值。
>
> 解: 第(2)步「计划」识别「等腰」有多种情况 → 分类讨论。韦达：a+b=6、ab=n+1。①两腰相等 a=b=3 → 边 3,3,4，n+1=9 → n=8；②有一边=4，则另一根=2 → 边 4,4,2，n+1=8 → n=7。两者都满足三角形不等式 → n=8 或 7。


## 02 Draw a diagram / make a table / 画图·列表

**Key terms**：diagram 图 = number line, sketch, figure；table 表格 = organize the data；visualize 可视化 = see the structure；no missing case 不漏 = a table covers all

**EN:** Turn words into a picture or a table. A number line, a sketch of a figure, or an organized table makes hidden structure visible and stops you missing cases. Whenever a problem feels tangled, the first move is often just: draw it.


把文字变成一张图或一张表。数轴、图形草图、或整齐的表格，能让藏着的结构现形，也防止漏情况。题目一乱，第一步往往就是：画出来。


> 例 — In a group everyone shakes hands with everyone else once. With 6 people, how many handshakes? (build a small table) ／ 一群人两两握手各一次。6 人共握几次？（先列表 2、3、4… 人）
>
> 解: 列表：2人→1、3人→3、4人→6、5人→10 …规律 n(n−1)/2。6 人 = 6×5/2 = 15 次。列表让规律现形。


## 03 Look for a pattern / try simple cases / 找规律·从简单情形入手

**Key terms**：simple case 简单情形 = try n = 1, 2, 3；tabulate 列表 = record results；pattern 规律 = what repeats；general rule 一般规则 = then check it

**EN:** If a problem is big or general, shrink it: try the smallest cases (n=1,2,3), record them, spot the pattern, then guess the general rule and test it. Small cases are a window into the whole problem.


题目太大太一般，就先缩小：试最小的几种情形（n=1,2,3），记下来，看出规律，再猜一般规则并验证。小情形是看清整道题的窗口。


> 例 — 【同型·华二】Rotate the point (2, 1) by 90° counter-clockwise about O over and over. Where is it after 2023 rotations? ／ 【同型·华二】点 (2,1) 绕原点每次逆时针转 90°，转 2023 次后在哪？
>
> 解: 每次 (x,y)→(−y,x)：(2,1)→(−1,2)→(−2,−1)→(1,−2)→(2,1)，周期 4。2023÷4 余 3 → 第 3 个 = (1,−2)。找周期是关键。


## 04 Case analysis / 分类讨论

**Key terms**：case analysis 分类讨论 = split into all cases；unknown sign 符号未知 = + / − / 0；cover all 不重不漏 = each case once；combine 合并 = collect answers

**EN:** When a quantity can be positive, negative or zero (or a condition can go two ways), don't guess one — split into cases, solve each, then combine, covering every case exactly once. Absolute-value and “exactly one solution” problems almost always need this.


当一个量可能正、负、或 0（或条件有两种走向），别只猜一种——分情况，每种都解，再合并，务必不重不漏。绝对值题、「恰好一个解」题几乎都要它。


> 例 — Solve |2x − 1| = x + 4 (mind the cases and check). ／ 解 |2x−1| = x+4（分类并回代检验）。
>
> 解: 需 x+4≥0。①2x−1=x+4 → x=5（验：|9|=9=9 ✓）；②2x−1=−(x+4) → 3x=−3 → x=−1（验：|−3|=3=3 ✓）。x=5 或 −1。


## 05 Number–shape / 数形结合

**Key terms**：number–shape 数形结合 = algebra ⇄ picture；graph/line 图象/数轴 = the picture to use；intersection 交点 = where graphs meet；see it 看见 = understand by drawing

**EN:** Many problems get easy the moment you draw them: an inequality becomes a stretch of the number line; “where two lines meet” becomes a crossing point; |x−1|&lt;2 becomes “points within 2 of 1”. Turn algebra into a picture and back.


很多题一画出来就简单了：不等式变成数轴上一段；「两线在哪相交」变成一个交点；|x−1|&lt;2 变成「离 1 不超过 2 的点」。把代数变成图、图变回代数。


> 例 — 【同型·领科】Between which two consecutive integers does the positive root of x² = x + 1 lie? (sketch y=x² and y=x+1) ／ 【同型·领科】x²=x+1 的正根在哪两个相邻整数之间？（画 y=x² 与 y=x+1）
>
> 解: 画两图看交点。代 x=1：1 vs 2（x² 小）；x=2：4 vs 3（x² 大）→ 交点在 1 与 2 之间（其实是 (1+√5)/2≈1.62）。数形结合定范围。


## 06 Treat-as-whole / substitution / 整体·换元

**Key terms**：treat as whole 整体 = handle a chunk as one；substitution 换元 = let u = the chunk；repeated chunk 重复块 = appears twice；simplify 化简 = fewer parts

**EN:** If the same chunk appears more than once, don't expand — name it once. If a+b=5 then 2(a+b)+1 = 2·5+1 = 11 without finding a or b. Later this is substitution (let u = the chunk): it shrinks scary expressions. Look for the repeated piece first.


同一个块出现不止一次，别展开——当整体处理。已知 a+b=5，则 2(a+b)+1 = 2·5+1 = 11，不必求 a、b。以后这叫换元（设 u=那块）：能把吓人的式子变小。先找重复的那块。


> 例 — 【同型·平和】a is a root of x² − 3x + 1 = 0. Find a³ + 1/a³. ／ 【同型·平和】a 是 x²−3x+1=0 的一个根，求 a³ + 1/a³。
>
> 解: 方程 ÷a：a − 3 + 1/a = 0 → a + 1/a = 3（整体）。再用 a³+1/a³=(a+1/a)³−3(a+1/a)=27−9 = 18。把 a+1/a 当整体。


## 07 Special values / 特殊值法

**Key terms**：special values 特殊值 = test 0, 1, −1；disprove 证伪 = one counterexample suffices；check 检验 = catch a wrong guess；eliminate 排除 = kill wrong options

**EN:** Not sure a formula is right, or which option is correct? Plug in an easy number (0, 1, −1). One failing value is enough to disprove. Is (x+1)² = x²+1? Try x=1: 4 ≠ 2, so false. Special values won't prove a formula, but they catch errors and kill wrong multiple-choice options fast.


拿不准公式或选项？代个好算的数（0、1、−1）。只要一个值不成立就足以证伪。(x+1)²=x²+1 吗？代 x=1：4≠2 → 错。特殊值不能「证明」，但能飞快抓错、秒杀错误选项。


> 例 — Is x² − x + 41 a prime for every whole number x? Decide. ／ x²−x+41 对每个自然数 x 都是质数吗？
>
> 解: 前几个 x 都是质数，很诱人。代特殊值 x=41：41²−41+41 = 41²，能被 41 整除、不是质数 → 命题为假。一个反例即可推翻。


## 08 Work backwards / 逆推

**Key terms**：work backwards 逆推 = start from the goal；undo 反运算 = reverse each step；end state 末态 = clear final value；chain 链条 = step back one by one

**EN:** When the final state is clear (“after these operations you get 20”), start from the end and undo each step. To reverse +3 you −3; to reverse ×2 you ÷2. Working backwards turns a mystery start into a simple chain.


当末态很清楚（「经过这些操作后得到 20」），就从结果倒着一步步还原。要反 +3 就 −3，要反 ×2 就 ÷2。逆推把「起点不明」变成一条简单链条。


> 例 — 【同型·平和】Curve C₁: y = x² − 2x is reflected in the line x = −1 to give C₂. Find C₂. ／ 【同型·平和】曲线 C₁：y=x²−2x 关于直线 x=−1 对称得 C₂，求 C₂。
>
> 解: 关于 x=−1 对称：把 x 换成 (−2−x)。C₂：y=(−2−x)²−2(−2−x)=x²+4x+4+4+2x = x²+6x+8。（顶点由 (1,−1) 逆推到 (−3,−1)，可验。）


## 09 Guess & check / 猜测与检验

**Key terms**：guess 猜 = a sensible first try；test 检验 = does it fit?；refine 调整 = use the last result；narrow 缩小 = close in on the answer

**EN:** Make a sensible guess, test it, adjust — and make the next guess smarter using what the last one told you (too big? go lower). It's a fine fallback and often the fastest route for “find two numbers with…” problems.


先合理地猜，再检验，再调整——用上一次的结果让下一次更聪明（太大就往小猜）。它是很好的兜底办法，「找两个数满足……」这类题常常最快。


> 例 — How many pairs of positive integers (x, y) satisfy x² − y² = 45? ／ 有多少对正整数 (x,y) 使 x²−y²=45？
>
> 解: (x−y)(x+y)=45，因数对 1×45、3×15、5×9 → 解 (23,22)、(9,6)、(7,2)，共 3 对。因式分解 + 试因数对。


## 10 Break into sub-problems / 拆成子问题

**Key terms**：sub-problem 子问题 = a smaller piece；simpler related 更简单的相关题 = solve that first；combine 合并 = join the pieces；step by step 分步 = one piece at a time

**EN:** A hard problem is often several easy ones in a coat. Break it into pieces you can solve, or first solve a simpler related problem, then combine. An L-shaped area? Split it into two rectangles and add.


难题常常是几道简单题披了件外套。拆成能解的小块，或先解一个更简单的相关问题，再合并。L 形面积？拆成两个长方形相加。


> 例 — A square of side 10 has a quarter-circle of radius 10 (centred at a corner) removed. Find the remaining area. ／ 边长 10 的正方形挖去以一个顶点为圆心、半径 10 的四分之一圆，求剩余面积。
>
> 解: 拆成整块减小块：10² − ¼π·10² = 100 − 25π。


## 11 Eliminate possibilities / 排除法

**Key terms**：eliminate 排除 = rule out options；quick test 快检 = sign, size, unit, parity；multiple choice 选择题 = fewer to check；remaining 剩下 = the answer survives

**EN:** On multiple-choice or “which values work” problems, rule out options that fail a quick test — wrong sign, too big/small (estimate), wrong parity (odd/even), wrong units. Often faster than solving fully; whatever survives is your answer.


选择题或「哪些值成立」，排除那些一测就挂的选项——符号不对、数量级不对（估算）、奇偶不对、单位不对。常比完整求解更快；活下来的就是答案。


> 例 — Which of 2023, 2024, 2025 is divisible by 9? (use the digit-sum test to eliminate) ／ 2023、2024、2025 中哪个能被 9 整除？（用数字和排除）
>
> 解: 数字和：2023→7、2024→8、2025→9。只有 2025 能被 9 整除。用判定快速排除。


## 12 Look back / check reasonableness / 回头检查·合理性

**Key terms**：look back 回头查 = the last Pólya step；reasonable 合理 = does size/sign fit?；plug back 代回 = into the original；units 单位 = right unit & rounding

**EN:** After an answer, look back: right sign? right units? does an estimate agree? Plug the answer back into the original problem. This last step catches careless slips that would otherwise cost easy marks — never hand in without it.


得出答案后回头检查：符号对吗？单位对吗？和估算一致吗？把答案代回原题。这一步专抓粗心错，否则白丢容易分——不检查不交卷。


> 例 — A rectangle problem gives length x = −8 or x = 5. Which do you keep, and why? ／ 一个长方形问题解得 x=−8 或 x=5，保留哪个？为什么？
>
> 解: 回头检查合理性：长度必须为正 → 舍去 −8，保留 x=5。很多题要按实际意义取舍。


## 练习 Practice（只做题，不给提示）


### 用方法解难题 Apply the tools

1. 【逆推】A number: ×3, then −5, then ÷2 gives 8. Find it. / 某数 ×3 再 −5 再 ÷2 得 8，求它。
2. 【找规律·同型华二】Rotate (3, 0) by 90° CCW about O repeatedly; where is it after 101 rotations? / 转 101 次后在哪？
3. 【整体·同型平和】a is a root of x² − 4x + 1 = 0; find a² + 1/a². / 求 a²+1/a²。
4. 【分类讨论】Solve |x − 3| = 2x. / 解此绝对值方程。
5. 【数形结合·同型领科】Between which integers is the positive root of x² = 2x + 2 ? / 正根在哪两个整数间？

### 选·验·拆 Choose / check / split

1. 【特殊值】Is n² + n always even for whole n ? Test and argue. / n²+n 恒为偶数吗？
2. 【排除】Which is divisible by 3: 2023, 4568, 7311 ? (digit sum) / 哪个能被 3 整除？
3. 【拆子问题】A 6×8 rectangle has a right triangle (legs 3, 4) cut from a corner. Find the remaining area. / 求剩余面积。
4. 【回头检查】Solving 2/x = 4 gives x = 1/2; verify by substitution. / 代回验证。

### 挑战 Challenge

1. 【挑战·华二同型】Three distinct numbers form both an arithmetic set {a, a+d, a+2d} and the set {0, m, 2m}. If d ≠ 0, what must a be? / 集合相等 + 分类。
2. 【挑战·裂项】Simplify 1/(1·2) + 1/(2·3) + … + 1/(9·10). / 裂项求和。
3. 【挑战·整体+逆推】For a number x, 2x + 1/x = 4.5. Verify x = 2 works; find the other value of x. / 验证并求另一解。

## 我会了吗 Self-check

- [ ] 我会用 Pólya 四步（理解→计划→执行→回头查）起手 / Pólya 4 steps
- [ ] 我会把题目画成图或列成表 / draw a diagram / table
- [ ] 我会从简单情形找规律再推一般 / pattern from simple cases
- [ ] 遇到符号/条件不定，我会分类讨论、不重不漏 / case analysis
- [ ] 我会数形结合，把代数画成图来看 / number–shape
- [ ] 看到重复的块，我会用整体/换元 / treat-as-whole
- [ ] 拿不准时我会用特殊值 0、1、−1 检验 / special values
- [ ] 末态清楚时我会逆推还原 / work backwards
- [ ] 我会用猜测与检验兜底并逐步逼近 / guess & check
- [ ] 难题我会拆成子问题或先解更简单的 / sub-problems
- [ ] 选择题我会用排除法（符号/大小/奇偶/单位） / eliminate
- [ ] 交卷前我会回头检查合理性、代回原题 / look back
