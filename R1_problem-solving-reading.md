# 读一读 · 解题的艺术

> 改写自 Pólya《How to Solve It》与 黃毅英《解題與數學教育》(數學傳播, 1990)。每个要点都配一个例子——读完能用，才算融会贯通。


## 00 Why read this / 为什么读这个

**EN:** Great mathematics lives on good problems (Hilbert). Since the 1970s, problem-solving — not just getting answers — has been the heart of math education. Math is really a tool: turn a real question into a model, solve it, then check the answer fits reality. This reading collects the classic ways people actually crack problems, each with a worked example.


好的数学是靠好问题活着的（希尔伯特）。从 1970 年代起，「解题」——而不是只对答案——就成了数学教育的核心。数学本质是一件工具：把现实问题变成一个模型，解出来，再看答案是否符合实际。这份阅读把「人们真正是怎么破题的」那些经典办法收在一起，每个都配一个例子。读完能上手用，才算真懂。


## 01 Pólya's four steps / 波利亚解题四步

**EN:** Pólya's classic model in How to Solve It: (1) Understand the problem — what is given, what is asked. (2) Devise a plan — pick a strategy. (3) Carry it out — carefully. (4) Look back — check it, and ask if there is a neater way or a wider lesson. The first and last steps are the ones students skip — and exactly where marks are lost.


波利亚在《如何解题》里的经典模型：(1) 理解问题——已知什么、求什么。(2) 拟定计划——选一个策略。(3) 执行计划——认真做。(4) 回顾——检验，并且问「有没有更漂亮的做法、更普遍的道理」。学生最爱跳过的正是第一步和第四步，而失分也往往出在这里。


> 例 — Walk the four steps on: a rectangle has perimeter 34, and its length is 5 more than its width. Find its area. ／ 用四步做：一个长方形周长 34，长比宽多 5，求面积。
>
> 1 理解: 已知 周长=34、长=宽+5；求 面积。2 计划: 用周长列方程求出长宽，再算面积。3 执行: 设宽 w：2((w+5)+w)=34 → w+5+w=17 → w=6，长=11 → 面积=11×6=66。4 回顾: 代回 2(11+6)=34 ✓；还可推广：周长固定时，长宽越接近面积越大。


## 02 Sub-goals: from known to unknown / 次目标：由已知通向未知

**EN:** Newell–Simon, Scandura and others describe solving as building a chain of sub-goals from what you know toward what you want. When a method stalls, set a smaller intermediate target and reach that first. A proof or a hard equation is often just a few easy sub-goals in a coat.


纽厄尔–西蒙、斯坎杜拉等人把解题看成：从「已知」一步步搭次目标（subgoal）通向「未知」。某个方法走不通时，就先立一个更小的中间目标，把它拿下。一个证明、一道难方程，常常只是几个简单次目标披了件外套。


> 例 — Solve 2ˣ + 2ˣ + 2ˣ + 2ˣ = 2¹⁰ by first setting a sub-goal. ／ 先立次目标，解 2ˣ + 2ˣ + 2ˣ + 2ˣ = 2¹⁰。
>
> 次目标: 先把左边「合并成一个 2 的幂」。左边 = 4·2ˣ = 2²·2ˣ = 2ˣ⁺². 达成主目标: 2ˣ⁺² = 2¹⁰ → x+2=10 → x=8。先拿下「合并」这个次目标，主目标就顺了。


## 03 A toolbox of strategies / 解题策略总览（附猜字游戏）

**EN:** Facing a hard problem you could guess wildly, but success comes from strategy. Think of Hangman: you don't guess letters at random — you start with vowels and high-frequency letters (E, T, A…), use common patterns (–ING, –ION), and skip vowels once a word is nearly clear. Larson and others list the classic math heuristics: find a pattern, draw a figure, restate an equivalent problem, use symmetry, split into cases, work backwards, use parity, try extreme cases, generalise, use analogy, substitute, undetermined coefficients, exhaust cases, pigeonhole, induction. The next sections give examples of the most useful ones.


面对难题，你可以乱猜，但成败靠策略。想想「上吊」猜字游戏：你不会随机猜——先猜元音和高频字母（E、T、A…），用常见组合（–ING、–ION），单词快明朗时就跳过元音省次数。拉森等人把数学的经典启发式列成一张表：找规律、画图、提一个等价问题、利用对称、区分情况、逆推、用奇偶、试极端、推广、类比、换元、待定系数、穷举、抽屉（鸽笼）、数学归纳。接下来几节挑最有用的各给一个例子。


## 04 Look for a pattern / 找规律 · 从简单情形入手

**EN:** Shrink a big problem: try n = 1, 2, 3, record, and the rule often jumps out. Then check it.


把大问题缩小：试 n = 1, 2, 3，记录下来，规律常常自己跳出来。再验证。


> 例 — Find 1 + 3 + 5 + … + (2n−1). ／ 求 1 + 3 + 5 + … + (2n−1)。
>
> 试小情形: 1=1、1+3=4、1+3+5=9、1+3+5+7=16。都是平方数 → 猜 n²；验证成立。前 n 个奇数之和恰是 n²。


## 05 Use symmetry / 利用对称

**EN:** When two pieces are mirror images (one is the negative of the other), naming the common piece reveals a hidden common factor.


当两块东西是「镜像」（一个是另一个的相反数）时，把公共的那块看成整体，就露出隐藏的公因式。


> 例 — Factorise 4m(a − 2c) + 7n(2c − a). ／ 把 4m(a − 2c) + 7n(2c − a) 因式分解。
>
> 看对称: 注意 2c − a = −(a − 2c)。原式 = 4m(a−2c) − 7n(a−2c) = (4m − 7n)(a − 2c)。把 (a−2c) 当整体，对称立刻帮上忙。


## 06 Use analogy / 类比

**EN:** A new problem may be an old one in disguise. If you can factor one expression, an analogous one factors the same way.


新题可能是老题换了件衣服。若你会分解一个式子，一个「结构相同」的式子就照葫芦画瓢。


> 例 — Knowing t³ + 6t² + 11t + 6 = (t+1)(t+2)(t+3), factor x³ + 6x²y + 11xy² + 6y³. ／ 已知 t³+6t²+11t+6=(t+1)(t+2)(t+3)，分解 x³+6x²y+11xy²+6y³。
>
> 类比: 第二个式子把 t 看成 x、把常数 1,2,3 换成 y,2y,3y，结构完全一样 → (x+y)(x+2y)(x+3y)。（展开可验证。）


## 07 Substitution / 换元

**EN:** If the same awkward chunk repeats, name it with a new letter; a scary system turns simple.


若同一个别扭的块反复出现，用一个新字母给它命名；吓人的方程组立刻变简单。


> 例 — Solve  1/x + 1/y = 3  and  1/x − 1/y = 1. ／ 解方程组 1/x + 1/y = 3，1/x − 1/y = 1。
>
> 换元: 设 u = 1/x、v = 1/y。u+v=3、u−v=1 → u=2、v=1。回代：1/x=2 → x=1/2；1/y=1 → y=1。换元把分式方程变成一次方程组。


## 08 Undetermined coefficients / 待定系数

**EN:** Assume the answer has a certain form with unknown constants, then pin the constants down (often by trying a special case).


先假设答案是「某种带未知常数的形式」，再把常数定出来（常用一个特殊情形来定）。


> 例 — Split 1 / (x(x+1)) into A/x + B/(x+1). ／ 把 1 / (x(x+1)) 拆成 A/x + B/(x+1)。
>
> 待定: 设 1/(x(x+1)) = A/x + B/(x+1) → 1 = A(x+1) + Bx。令 x=0 → A=1；令 x=−1 → B=−1。所以 = 1/x − 1/(x+1)。（这正是「裂项求和」的关键一步。）


## 09 Pigeonhole principle / 抽屉（鸽笼）原理

**EN:** If distinct counts are forced into a limited range, they must be exactly one each — which locks the answer. The classic dinner-handshake puzzle uses this.


若一堆「互不相同」的数被逼进一个有限范围，它们只能一人一个——答案就被锁死了。经典的宴会握手题就用这个。


> 例 — At a party of n = 4 couples everyone shakes hands (never with their own spouse). Mr Zhang finds everyone else gave a different number of handshakes. How many did Mrs Zhang make? ／ n = 4 对夫妇的宴会上，人人握手（不与配偶握）。张先生发现除自己外每个人握手次数都不同，问张太太握了几次？
>
> 抽屉: 除张先生外还有 7 人，每人最多握 2n−2=6 次；7 个互不相同的次数只能是 0,1,2,3,4,5,6。握 6 次的人和握 0 次的是一对（配偶），5 与 1、4 与 2 也各成对，剩下正中间的 3 就是张太太。一般地，张太太握 n−1 次。


## 10 Induction & generalising / 数学归纳与推广

**EN:** Induction is not just a proof trick — it is a way of thinking: do the small case, see how step n grows from step n−1, then claim the general rule.


归纳不只是证明技巧，更是一种思维：先做小情形，看清第 n 步是怎么从第 n−1 步长出来的，再给出一般规律。


> 例 — n straight lines in a plane (no two parallel, no three through one point) — how many intersection points p(n)? ／ 平面上 n 条直线（两两不平行、无三线共点），共有多少交点 p(n)？
>
> 看增量: 加第 n 条线时，它与前面 n−1 条各交一点 → p(n) = p(n−1) + (n−1)。累加：p(n) = (n−1)+(n−2)+…+1 = n(n−1)/2。（同一思路也给出「叠等腰直角三角形」的斜边 √2、(√2)²、…、(√2)ⁿ。）


## 11 Many solutions & fixed points / 一题多解 · 定点

**EN:** A single problem often has several routes; comparing them deepens understanding. A neat trick: to show a family of lines all pass through one point, group by the parameter.


一道题常有多条路；比较不同解法能加深理解。一个漂亮技巧：要证「一族直线都过某个定点」，就把参数分组。


> 例 — Show the line (1+k)x + (k−1)y − 2k = 0 passes through a fixed point for every k. ／ 证明直线 (1+k)x + (k−1)y − 2k = 0 对任意 k 都过一个定点。
>
> 按 k 分组: 整理成 (x − y) + k(x + y − 2) = 0。要对一切 k 成立，必须 x−y=0 且 x+y−2=0 → x=1、y=1。所以恒过定点 (1, 1)。（也可取 k=0、k=1 得 x=y 与 x=1，交点同样是 (1,1)——这就是一题多解。）


## 12 Get to the root / 寻根究底：抽象来自具体

**EN:** Abstraction scares people, but every abstract idea grew from something concrete. Meet the concrete first, then the general falls into place. The quadratic formula is nothing but completing the square, done once for all.


抽象让人害怕，但每个抽象概念都是从具体长出来的。先见具体、再见一般，抽象就不难。求根公式其实只是把配方法做了一次「一劳永逸」的推广。


> 例 — Where does x = (−b ± √(b²−4ac)) / (2a) come from? ／ x = (−b ± √(b²−4ac))/(2a) 是怎么来的？
>
> 先具体后抽象: 先会解 2x²+5x−6=0（配方），再对一般 ax²+bx+c=0 配方：x² + (b/a)x = −c/a → (x + b/2a)² = (b²−4ac)/4a² → x + b/2a = ±√(b²−4ac)/(2a) → x = (−b ± √(b²−4ac))/(2a)。公式=配方的一般版。


## 13 Insight & seeing the whole / 顿悟 · 以简驭繁

**EN:** Sometimes you don't need a long chain — you see the whole at once. In Hangman, SI_​ _LATION jumps out as SIMULATION. In math, rewriting can reveal a shape instantly, no heavy computation needed.


有时你不需要长长的推理链——而是一眼看穿整体。猜字里 SI_ _LATION 一下就认出是 SIMULATION。数学里，换个写法常常瞬间看出结构，不必硬算。


> 例 — Sketch y = 3x⁴ − 16x³ + 24x² without computing a second derivative. ／ 不算二阶导，画出 y = 3x⁴ − 16x³ + 24x² 的大致形状。
>
> 换个写法就看穿: y = x²(3x² − 16x + 24) ≥ 0，且在 x=0 处触地（重根）。y′ = 12x(x−2)²：x=0 是变号根（极小），x=2 是重根（切线水平但不变号，拐点式平台）。于是形状是：从 0 起、在 x=0 处最低、在 x=2 处出现一个「平台」再上扬——无须二阶导。（同理小技巧：3 : x = 1/2 : 8，看出 8 是 1/2 的 16 倍，故 x = 3×16 = 48。）


## 14 The affective side / 情性：信心与坚持

**EN:** Research is clear: confidence, perseverance and self-monitoring matter as much as technique. Many give up before really trying. Treat a hard problem as a challenge that grows you, keep your own record of what puzzled you, and check your work yourself instead of waiting for the answer key.


研究很明确：信心、恒心、自我监察和技巧一样重要。很多人还没真正试就放弃了。把难题当成「让你长大的挑战」，把卡住你的地方记下来（就用右下角 🙋），并且自己验算，而不是等标准答案。


## 15 Closing / 结语

**EN:** A hard problem first makes you uneasy — and that unease, once resolved, lifts you to a higher level. As the old sayings go: great doubt, great awakening; a teacher “does not enlighten until the student is struggling.” Every problem you wrestle with makes the next one easier. That is the whole point of learning to solve problems.


难题一开始让你不安——而这份不安一旦被解开，就把你抬到更高的层面。正如古语：大疑大悟；「不愤不启，不悱不发」。你每啃下一道题，下一道就更容易。这，就是学「解题」的全部意义。


---
参考：Pólya《How to Solve It》(1957)；黃毅英《解題與數學教育》(1990,數學傳播14卷2期)。改写讲述，例子自编。

