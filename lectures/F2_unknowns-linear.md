# F2 · 「元」与「次」+ 一元一次方程/不等式

> 从零讲清：什么是「元」「次」→ 方程与解 → 等式性质 → 解一元一次方程(去分母·去括号·移项·合并·系数化1) → 列方程解应用 → 一元一次不等式(变号+数轴)。先英后中，例题分低中高。


## 00 What this covers / 这一章要学什么

**Key terms**：unknown 未知数 = the letter we solve for, e.g. x；equation 方程 = two sides joined by =；linear 一次 = highest power of the unknown is 1；solve 解方程 = find the value of the unknown

**EN:** This is where letters start doing real work. First you'll learn to read an expression's 「元」(how many different unknowns) and 「次」(the highest power) — that's how equations get their names, like 一元一次 (one unknown, degree 1). Then: what an equation and its solution mean, the rules for keeping an equation balanced, a reliable 5-step method to solve any one-variable linear equation, how to turn a word problem into an equation, and finally linear inequalities (with the one rule everybody trips on).


这一章是字母开始真正干活的地方。先学会读一个式子的「元」（有几个不同的未知数）和「次」（最高的次数/幂）——方程就是这样取名的，比如一元一次（一个未知数、次数为 1）。然后：方程和它的「解」是什么意思、保持方程平衡的规则、解任何一元一次方程都好用的五步法、怎么把应用题翻译成方程，最后是一元一次不等式（含那个人人都会踩的变号坑）。


## 01 「元」and「次」/ 几「元」几「次」怎么看

**Key terms**：unknown / variable 元 = a distinct letter (x, y…)；degree 次 = the highest power in the term；one variable 一元 = 只含一个未知数；degree one 一次 = 未知数最高是 1 次；term 项 = pieces joined by + or −

**EN:** 「元」= how many different letters appear (one letter → 一元, two → 二元). 「次」= the highest power of the unknown in any single term (x is degree 1; x² is degree 2; a term like xy counts the powers together as 2). So 3x + 1 is 「一元一次」, x² − 5 is 「一元二次」, 2x + 3y = 6 is 「二元一次」. Naming an equation correctly tells you which method to use.


「元」＝出现了几个不同的字母（一个字母就是一元，两个就是二元）。「次」＝未知数在某一项里的最高次数（x 是 1 次；x² 是 2 次；像 xy 这样的项把两个字母的次数加起来算 2 次）。所以 3x + 1 是「一元一次」，x²−5 是「一元二次」，2x + 3y = 6 是「二元一次」。先叫对名字，就知道该用哪套方法。


- 🟢低: 3x + 1 是几元几次？ → 一元一次（一个字母 x，最高 1 次）
- 🟡中: x² − 5 是几元几次？ → 一元二次（一个字母，最高 2 次）
- 🔴高: 判断下面各是「几元几次」：① 2x + 3y = 6　② xy = 4　③ x³ − x　④ 5
   - 第 1 步 · 数「元」：看有几个不同字母：① 有 x、y 两个 → 二元；② x、y 两个 → 二元；③ 只有 x → 一元；④ 没有字母。
   - 第 2 步 · 数「次」：看最高次：① x、y 都是 1 次 → 一次；② xy 把两字母次数相加 = 2 次；③ x³ 是 3 次；④ 常数，次数为 0。
   - 第 3 步 · 合起来叫名字：① 二元一次　② 二元二次　③ 一元三次　④ 零次（常数）。
   - ✅ ① 二元一次　② 二元二次　③ 一元三次　④ 常数(0 次)。先数字母(元)、再看最高幂(次)。

## 02 Equation & its solution / 方程与「解」

**Key terms**：equation 方程 = 含未知数的等式；left/right side 左边/右边 = LHS = RHS；solution 解 / root 根 = 让等式成立的值；satisfy 满足 = 代入后两边相等；check 检验 = 把解代回验证

**EN:** An equation says two expressions are equal, with an unknown hiding in it. A solution (root) is a value that makes the two sides actually equal. To test a candidate, substitute it in and see if LHS = RHS. Checking a solution is never wasted — it catches slips instantly.


方程是说「两个式子相等」，里面藏着一个未知数。解（根）就是能让两边真的相等的那个值。要检验一个候选值，就把它代进去，看左边＝右边吗。检验永远不亏——它能一秒抓出错误。


- 🟢低: x = 2 是 3x − 1 = 5 的解吗？ → 代入：3·2−1 = 5 ✓，是。
- 🟡中: x = 4 是 2x + 1 = x + 5 的解吗？ → 左 = 9、右 = 9 ✓，是。
- 🔴高: 【同型·代入求参】已知 x = −3 是方程 ax + 6 = 0 的解，求 a。
   - 第 1 步 · 「是解」＝代入成立：x=−3 是解，意思是把 −3 代进去，等式一定成立。
   - 第 2 步 · 代入：a·(−3) + 6 = 0 → −3a + 6 = 0。
   - 第 3 步 · 解出 a：−3a = −6 → a = 2。
   - ✅ a = 2。「x=… 是方程的解」这句话，就是叫你把它代进去列一个新方程。

## 03 Keeping the balance / 等式的两条性质

**Key terms**：balance 平衡 = 天平两边同样操作；add/subtract 同加/同减 = 两边加或减同一个数；multiply/divide 同乘/同除 = 两边乘或除同一个非零数；not divide by 0 不除以0 = 除数不能为 0

**EN:** Think of an equation as a balance scale. You may do the same thing to both sides and it stays balanced: add or subtract the same amount, or multiply or divide by the same non-zero number. These two properties are the only moves you ever make to solve — everything else is just choosing which move gets x alone.


把方程想成一台天平。你可以对两边做同样的事而不失衡：两边同加或同减一个数，或者两边同乘或同除一个非零数。解方程只有这两种动作——其余都只是选「哪一步能把 x 单独留下」。


- 🟢低: 由 x − 4 = 6 求 x → 两边 + 4 → x = 10
- 🟡中: 由 (x)/(3) = 5 求 x → 两边 × 3 → x = 15
- 🔴高: 只用等式性质，一步步解 2x − 3 = 7。
   - 第 1 步 · 先消掉常数：两边同时 + 3：2x − 3 + 3 = 7 + 3 → 2x = 10。
   - 第 2 步 · 再消掉系数：两边同时 ÷ 2：(2x)/(2) = (10)/(2) → x = 5。
   - 第 3 步 · 检验：代回：2·5 − 3 = 7 ✓。
   - ✅ x = 5。解方程就是反复用这两条性质，把 x 逼到单独一边。

## 04 Solve a linear equation: 5 steps / 解一元一次方程五步法

**Key terms**：clear fractions 去分母 = 两边乘最小公倍数；expand 去括号 = 分配律展开；transpose 移项 = 移到另一边要变号；combine 合并同类项 = 同类项相加减；coefficient → 1 系数化为1 = 两边除以系数

**EN:** A reliable recipe for any one-variable linear equation: (1) clear fractions (multiply every term by the LCM of the denominators), (2) expand brackets, (3) transpose — move x-terms to one side, numbers to the other (flip the sign when a term crosses the =), (4) combine like terms, (5) divide by the coefficient so x stands alone. Then check.


任何一元一次方程都能这样解：(1) 去分母（每一项都乘分母的最小公倍数），(2) 去括号，(3) 移项——把带 x 的移到一边、数字移到另一边（过等号要变号），(4) 合并同类项，(5) 系数化为 1（两边除以 x 的系数）。最后检验。


- 🟢低: x + 5 = 12 → 移项：x = 12 − 5 = 7
- 🟡中: 2x − 3 = 7 → +3：2x = 10 → ÷2 → x = 5
- 🔴高: 解 3(x − 2) + 4 = 2x + 5。
   - 第 1 步 · 去括号：3(x−2) = 3x − 6，方程变成 3x − 6 + 4 = 2x + 5。
   - 第 2 步 · 合并同类项：左边 −6+4 = −2 → 3x − 2 = 2x + 5。
   - 第 3 步 · 移项(过等号变号)：把 2x 移到左、−2 移到右：3x − 2x = 5 + 2。
   - 第 4 步 · 合并并系数化1：x = 7（系数已是 1）。
   - ✅ x = 7。检验：3(7−2)+4 = 19，2·7+5 = 19 ✓。五步走一遍最稳。

## 05 Fractions & brackets / 带分母、带括号的方程

**Key terms**：denominator 分母 = 下面那个数；LCM 最小公倍数 = 去分母时两边乘它；every term 每一项 = 乘的时候一项都不能漏；distribute 分配 = 括号前的数/负号乘进去

**EN:** When an equation has fractions, multiply every single term by the LCM of the denominators to clear them — a term with no fraction gets multiplied too (don't forget it). When there are brackets, distribute carefully, and remember a minus in front flips every sign inside. After clearing, it's an ordinary linear equation again.


方程里有分数时，把每一项都乘上分母的最小公倍数来去分母——没有分数的项也要乘（千万别漏）。有括号时用分配律展开，注意括号前是负号时里面每一项都变号。清干净后，它又变回普通的一元一次方程。


- 🟢低: 2(x + 1) = 8 → 去括号：2x + 2 = 8 → x = 3
- 🟡中: (x)/(2) + 1 = 4 → 两边 ×2：x + 2 = 8 → x = 6
- 🔴高: 解 (x−1)/(2) − (x+2)/(3) = 1。
   - 第 1 步 · 找最小公倍数去分母：分母 2、3 的最小公倍数是 6，每一项都 ×6：6·(x−1)/(2) − 6·(x+2)/(3) = 6·1 → 3(x−1) − 2(x+2) = 6。
   - 第 2 步 · 去括号(注意负号)：3x − 3 − 2x − 4 = 6（−2 乘 (x+2) 两项都要乘）。
   - 第 3 步 · 合并同类项：(3x − 2x) + (−3 − 4) = 6 → x − 7 = 6。
   - 第 4 步 · 移项求解：x = 6 + 7 = 13。
   - ✅ x = 13。检验：(12)/(2) − (15)/(3) = 6 − 5 = 1 ✓。关键是「每一项都乘 6」且「负号分配到括号每一项」。

## 06 Word problems → equations / 列方程解应用题

**Key terms**：let x be… 设…为 x = 给未知量取名；translate 翻译 = 把中文条件写成式子；relation 等量关系 = 题里「相等」的那句话；answer in context 作答 = 回到题意写单位/取舍

**EN:** The skill is translation: let x be the thing asked, write each condition as algebra, find the one sentence that says two things are equal, and that's your equation. Solve it, then read the answer back into the story (units, and reject impossible values like a negative length).


核心是翻译：设所求为 x，把每个条件写成式子，找到题里「某两样东西相等」的那句话，那就是你的方程。解出来后，把答案放回题意（带单位，舍掉不合理的值，比如负的长度）。


- 🟢低: 某数加 7 得 20，求这个数。 → x + 7 = 20 → x = 13
- 🟡中: 某数的 3 倍减 5 得 16，求它。 → 3x − 5 = 16 → x = 7
- 🔴高: 【同型·应用】哥哥比弟弟大 6 岁，两人年龄之和是 34 岁，求两人各几岁。
   - 第 1 步 · 设未知数：设弟弟 x 岁，则哥哥 (x + 6) 岁。
   - 第 2 步 · 找等量关系列方程：「两人年龄和是 34」→ x + (x + 6) = 34。
   - 第 3 步 · 解方程：2x + 6 = 34 → 2x = 28 → x = 14。
   - 第 4 步 · 作答：弟弟 14 岁，哥哥 14 + 6 = 20 岁。
   - ✅ 弟弟 14 岁、哥哥 20 岁。检验：14+20 = 34，差 6 ✓。设最小的量为 x，其余用它表示，最省事。

## 07 Linear inequalities / 一元一次不等式（含变号）

**Key terms**：inequality 不等式 = 含 &lt; &gt; ≤ ≥；solution set 解集 = 所有满足的 x；flip 变号 = ÷或×负数时不等号翻向；number line 数轴 = 用射线表示解集

**EN:** Solving a linear inequality is almost the same as an equation — with one crucial rule: when you multiply or divide both sides by a negative number, the inequality flips (&lt; ↔ &gt;). The answer is a whole range (solution set), which you show on a number line: a hollow dot for &lt; or &gt;, a solid dot for ≤ or ≥.


解一元一次不等式和解方程几乎一样——只有一条关键规则：两边乘或除以负数时，不等号要翻向（&lt; 变 &gt;）。答案是一整个范围（解集），用数轴表示：&lt; 或 &gt; 用空心点，≤ 或 ≥ 用实心点。


- 🟢低: x + 2 &gt; 5 → 移项：x &gt; 3（空心点）
- 🟡中: 2x ≤ 10 → ÷2：x ≤ 5（正数除，不变号）
- 🔴高: 解 2 − 3x ≥ 8，并在数轴上表示。
   - 第 1 步 · 移项：把 2 移到右边（变号）：−3x ≥ 8 − 2 → −3x ≥ 6。
   - 第 2 步 · 系数化1(除以负数→变号)：两边 ÷(−3)，是负数，不等号翻向：x ≤ (6)/(−3) → x ≤ −2。
   - 第 3 步 · 数轴表示：在 −2 处画实心点（含等号），向左画射线（x ≤ −2）。
   - ✅ x ≤ −2。检验端点：2 − 3·(−2) = 8 ≥ 8 ✓。除以负数一定要翻号——这是最常见的失分点。

## 练习 Practice（只做题）


### 基础 Basic
1. 判断「几元几次」：① 4x − 7　② 3xy　③ x² + 2x　④ 2a + b。 / classify each.
2. x = 5 是 3x − 4 = 11 的解吗？x = −2 呢？ / check both.
3. 解：① x − 8 = 3　② 4x = 20　③ (x)/(5) = 3　④ x + 9 = 2。 / solve each.
4. 解：2x + 5 = 17。 / solve.

### 进阶 Intermediate
1. 解：5x − 3 = 2x + 12。 / solve.
2. 解：4(x − 1) = 2x + 6。 / solve.
3. 解：(x)/(2) − (x−3)/(4) = 1。 / solve (clear fractions).
4. 【同型·代入求参】x = 2 是 3x + k = 10 的解，求 k。 / find k.
5. 解不等式并在数轴上表示：3x − 1 &lt; 8。 / solve & draw.

### 挑战 Challenge
1. 【同型·应用】一个两位数，个位比十位大 3，数字之和是 11，求这个两位数。 / find the number.
2. 【挑战·变号】解 5 − 2x ≥ 3x − 10。 / solve.
3. 【挑战·整数解】求满足 −3 &lt; 2x − 1 ≤ 5 的所有整数 x。 / all integer x.
4. 【挑战·应用】甲每分钟走 60 米，乙每分钟走 80 米，两人从相距 700 米处相向而行，几分钟后相遇？ / minutes to meet.

## 我会了吗 Self-check

- [ ] 我会看一个式子是「几元几次」（先数字母、再看最高幂） / read 元 & 次
- [ ] 我知道「x=… 是方程的解」＝把它代入等式成立 / solution means it fits
- [ ] 我会用等式两条性质（同加减、同乘除非零数）解方程 / use the two balance rules
- [ ] 我会用五步法解一元一次方程（去分母·去括号·移项·合并·系数化1） / the 5 steps
- [ ] 去分母时我会把「每一项」都乘、括号前负号会分配到每一项 / clear fractions & distribute
- [ ] 移项过等号我会变号 / flip sign when transposing
- [ ] 我会设未知数、找等量关系、列方程解应用题、并作答 / word problems
- [ ] 解不等式除以负数时我会把不等号翻向 / flip on ÷ negative
- [ ] 我会用数轴表示解集（空心/实心点 + 射线方向） / number line
