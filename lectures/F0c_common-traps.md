# 预备篇 F0c · 常见易错坑

> 中阶数感：这些坑最会白丢分——不等式变号、(a+b)²、−3² vs (−3)²、约分、增根、除以变量、移项变号…… 每个都给「❌错 / ✅对」对照。先英后中。


## 00 Why traps matter / 为什么要专门学坑

**Why (EN):** F0a was basic number sense. This one is the next tier: the handful of mistakes that look totally reasonable but are wrong — the ones that quietly cost easy marks. For each, you will see the ❌ wrong and the ✅ right side by side, plus why. Learn to smell each trap coming; that is what separates a careful solver from a careless one.


F0a 是基础数感，这一份是进阶一层：那几个看起来完全合理、其实是错的坑——它们会悄悄让你白丢容易分。每个坑都给你 ❌ 错 和 ✅ 对 并排看，再讲为什么。练到一见到就闻到坑味——这就是「细心的人」和「粗心的人」的差别。


## 01 Multiply/divide an inequality by a negative → flip / 不等式乘除负数要变号

❌ 错：−2x &lt; 6 → x &lt; −3　｜　✅ 对：−2x &lt; 6 → x &gt; −3　（÷(−2) 时不等号翻向）

**Why (EN):** When you multiply or divide both sides of an inequality by a negative number, the inequality flips (&lt; ↔ &gt;). On the number line, multiplying by a negative reflects everything, so the order reverses. Equations never flip — only inequalities. This is the single most common exam slip.


当你把不等式两边同乘或同除一个负数时，不等号要翻向（&lt; 变 &gt;）。在数轴上，乘负数相当于把一切镜像翻转，大小顺序就反了。方程不用变号，只有不等式要。这是考试最常见的失分点。


> 例 — Solve 3 − 2x ≥ 7. ／ 解 3 − 2x ≥ 7。
>
> 解: 3−2x≥7 → −2x≥4 → 除以 −2 变号 → x ≤ −2。（若忘记变号会错写成 x≥−2。）


## 02 (a+b)² is not a²+b² / 完全平方别漏中间项

❌ 错：(a+b)² = a² + b²　｜　✅ 对：(a+b)² = a² + 2ab + b²　（别漏 2ab）

**Why (EN):** (a+b)² = a² + 2ab + b², not a²+b². The middle term 2ab comes from multiplying the two brackets fully: (a+b)(a+b). Forgetting it is extremely common. Quick check with special values: (1+3)² = 16, but 1²+3² = 10 — they differ by 2·1·3 = 6.


(a+b)² = a² + 2ab + b²，不是 a²+b²。中间那项 2ab 来自把两个括号完整相乘 (a+b)(a+b)。漏掉它非常常见。用特殊值秒验：(1+3)²=16，而 1²+3²=10，差的正是 2·1·3=6。


> 例 — Expand (x − 4)². ／ 展开 (x − 4)²。
>
> 解: (x−4)² = x² − 2·4·x + 16 = x² − 8x + 16。中间项 −8x 千万别漏。


## 03 −3² vs (−3)² / 负号在不在括号里

❌ 错：−3² = 9　｜　✅ 对：−3² = −9，而 (−3)² = 9

**Why (EN):** Without brackets, the power applies only to 3, and the minus is taken afterwards: −3² = −(3²) = −9. With brackets, the minus is inside, so (−3)² = (−3)(−3) = 9. The bracket decides whether the negative is squared.


没有括号时，指数只作用在 3 上，负号最后再加：−3² = −(3²) = −9。有括号时负号在里面，所以 (−3)² = (−3)(−3) = 9。括号决定了负号是否被平方。


> 例 — Evaluate −2⁴ and (−2)⁴. ／ 求 −2⁴ 与 (−2)⁴。
>
> 解: −2⁴ = −(2⁴) = −16；(−2)⁴ = 16。差别全在括号。


## 04 √(a²) = |a|, not a / 开平方得非负

❌ 错：√((−5)²) = −5　｜　✅ 对：√((−5)²) = |−5| = 5

**Why (EN):** The √ symbol always returns the non-negative root. So √(a²) = |a|, not a — because a might be negative. √((−5)²) = √25 = 5, not −5. (Separately, the equation x²=25 has two answers x=±5; but the √ symbol alone means the positive one.)


√ 符号永远取非负根。所以 √(a²) = |a|，不是 a——因为 a 可能是负的。√((−5)²) = √25 = 5，不是 −5。（另外，方程 x²=25 有两个解 x=±5；但单独的 √ 符号只表示正的那个。）


> 例 — Simplify √((x−3)²) for a general x. ／ 化简 √((x−3)²)（x 任意）。
>
> 解: = |x−3|，不能直接写成 x−3（当 x&lt;3 时 x−3 为负）。


## 05 Adding fractions needs a common denominator / 分数相加别分子分母各自加

❌ 错：(1)/(2) + (1)/(3) = (2)/(5)　｜　✅ 对：(1)/(2) + (1)/(3) = (3)/(6) + (2)/(6) = (5)/(6)

**Why (EN):** You cannot add numerators and denominators separately. First rewrite both fractions with the same denominator, then add the tops. (1)/(2) + (1)/(3): common bottom 6 → (3)/(6) + (2)/(6) = (5)/(6). (Sanity check: (1)/(2) alone is already bigger than (2)/(5), so (2)/(5) can't be the sum.)


不能把分子、分母各自相加。先把两个分数通分成同一个分母，再把分子相加。(1)/(2) + (1)/(3)：通分到 6 → (3)/(6) + (2)/(6) = (5)/(6)。（合理性检验：光 (1)/(2) 就已经比 (2)/(5) 大，所以和不可能是 (2)/(5)。）


> 例 — Compute (2)/(3) + (1)/(4). ／ 计算 (2)/(3) + (1)/(4)。
>
> 解: 通分到 12：(8)/(12) + (3)/(12) = (11)/(12)。


## 06 Cancel factors, not terms / 约分只能约「乘的公因式」

❌ 错：(a+b)/(b) = a　｜　✅ 对：(a+b)/(b) 不能约（a+b 是相加，不是乘）

**Why (EN):** You can only cancel a factor that multiplies the whole top and the whole bottom. You cannot cancel a piece that is added or subtracted. So (2b)/(b) = 2 (b is a factor), but (a+b)/(b) ≠ a (here b is a term added to a). Cross out products, never terms across + or −.


只能约掉乘在整个分子、整个分母上的因式，不能约掉加减里的一项。所以 (2b)/(b) = 2（b 是因式），但 (a+b)/(b) ≠ a（这里 b 是与 a 相加的一项）。能划掉的是乘积，绝不是跨着 + − 的项。


> 例 — Simplify (2x+6)/(2). ／ 化简 (2x+6)/(2)。
>
> 解: 先提公因式：(2(x+3))/(2) = x+3。不能只把一个 2 约掉写成 x+6。


## 07 Squaring can create false roots / 两边平方要验根

❌ 错：√x = x−2 → x = 1 或 4（都要）　｜　✅ 对：x = 4（x=1 是增根，代回不成立，舍）

**Why (EN):** Squaring both sides can introduce solutions that don't fit the original (because both +k and −k square to k²). After squaring, you must substitute each answer back and reject any that fail. √x = x−2 → x = x²−4x+4 → x=1 or 4; check: x=4 works (√4=2), x=1 fails (√1=−1 is false) → keep only x=4.


两边平方可能造出不满足原方程的解（因为 +k 和 −k 平方都得 k²）。平方后必须把每个答案代回原式，把不成立的舍掉。√x = x−2 → x = x²−4x+4 → x=1 或 4；验根：x=4 成立（√4=2），x=1 不成立（√1=−1 假）→ 只保留 x=4。


> 例 — Solve √(x + 2) = x. ／ 解 √(x + 2) = x。
>
> 解: 平方：x+2 = x² → x²−x−2=0 → x=2 或 −1。验根：x=2 成立（√4=2）；x=−1 不成立（√1=−1 假）→ x=2。


## 08 Dividing by a variable can lose roots / 除以变量当心丢根与除以0

❌ 错：x² = x → 两边÷x → x = 1　｜　✅ 对：x²−x=0 → x(x−1)=0 → x = 0 或 1

**Why (EN):** Dividing both sides by x silently assumes x ≠ 0, so you can lose the solution x = 0. Instead, move everything to one side and factor: x² = x → x²−x = 0 → x(x−1)=0 → x=0 or 1. And you may never divide by 0 — an expression like (1)/((x−3)) is undefined at x=3.


两边除以 x 等于偷偷假设 x ≠ 0，于是会把解 x = 0 弄丢。正确做法是把式子移到一边因式分解：x²=x → x²−x=0 → x(x−1)=0 → x=0 或 1。而且永远不能除以 0——像 (1)/((x−3)) 在 x=3 处没有意义。


> 例 — Solve x² = 5x. ／ 解 x² = 5x。
>
> 解: 别两边÷x。x²−5x=0 → x(x−5)=0 → x=0 或 5。÷x 会丢掉 x=0。


## 09 Distribute the minus to every term / 负号要分配到每一项

❌ 错：−(a − b) = −a − b　｜　✅ 对：−(a − b) = −a + b

**Why (EN):** A minus sign in front of a bracket flips the sign of every term inside, not just the first. So −(a−b) = −a + b. A very common slip is 5 − (x − 3) = 5 − x − 3; correct is 5 − x + 3.


括号前的负号会把括号里每一项的符号都翻掉，不是只翻第一项。所以 −(a−b) = −a + b。常见错误：5 − (x − 3) = 5 − x − 3；正确是 5 − x + 3。


> 例 — Simplify 8 − (2x − 5). ／ 化简 8 − (2x − 5)。
>
> 解: = 8 − 2x + 5 = 13 − 2x。括号里两项符号都要翻。


## 10 Moving a term flips its sign / 移项要变号

❌ 错：x + 5 = 2 → x = 2 + 5　｜　✅ 对：x + 5 = 2 → x = 2 − 5 = −3

**Why (EN):** Moving a term to the other side of the equals sign flips its sign (it is really “subtract from both sides”). x + 5 = 2 means x = 2 − 5 = −3, not 2 + 5. Check: −3 + 5 = 2 ✓.


把一项移到等号另一边时要变号（本质是「两边同时减」）。x + 5 = 2 应得 x = 2 − 5 = −3，而不是 2 + 5。检验：−3 + 5 = 2 ✓。


> 例 — Solve 3x − 7 = 5. ／ 解 3x − 7 = 5。
>
> 解: 移 −7 → 3x = 5 + 7 = 12 → x = 4。移项时 −7 变成 +7。


## 11 x² = k has two roots / 平方等于常数有两个解

❌ 错：x² = 4 → x = 2　｜　✅ 对：x² = 4 → x = ±2（即 2 或 −2）

**Why (EN):** If x² = k (k &gt; 0), there are two solutions: x = +√k and x = −√k, written x = ±√k. Both squared give k. Dropping the negative one loses half the answer. (Note this differs from the √ symbol itself, which means only the positive root.)


若 x² = k（k &gt; 0），有两个解：x = +√k 和 x = −√k，写成 x = ±√k。两个平方都得 k。漏掉负的那个就丢了一半答案。（注意这和 √ 符号本身不同，√ 只表示正根。）


> 例 — Solve (x − 1)² = 9. ／ 解 (x − 1)² = 9。
>
> 解: x−1 = ±3 → x = 4 或 −2。两个解都要。


## 12 +20% then −20% ≠ back to start / 百分比先增后减不回原值

❌ 错：+20% 再 −20% → 回到原价　｜　✅ 对：×1.2×0.8 = 0.96 → 比原来少 4%

**Why (EN):** A percent is a percent of the current amount, and that amount changes. Rising 20% then falling 20% is ×1.2 then ×0.8 = ×0.96, i.e. 4% below the start — because the 20% drop is taken from the larger, raised amount. Percents don't simply add or cancel.


百分比是对「当前的量」取的百分比，而这个量在变。先涨 20% 再跌 20% 是 ×1.2 再 ×0.8 = ×0.96，即比原来少 4%——因为那 20% 的跌是从涨高后的更大数上扣的。百分比不能简单相加或抵消。


> 例 — A $100 item rises 10%, then falls 10%. Final price? ／ 一件 100 元的商品先涨 10%、再跌 10%，最后多少钱？
>
> 解: 100×1.1×0.9 = 100×0.99 = 99 元，比原来少 1%。


## 练习 Practice（只做题）


### 找出并改正 Spot & fix

1. Solve −3x &gt; 9. / 解 −3x &gt; 9。
2. Expand (x − 4)² fully. / 完整展开 (x − 4)²。
3. Evaluate −5² and (−5)². / 求 −5² 与 (−5)²。
4. Simplify √((−7)²) and √((x−2)²). / 化简这两个。
5. Compute (1)/(2) + (1)/(4). / 计算此和。
6. Solve x² = 9 (all solutions). / 求所有解。

### 进阶·易错 Trickier

1. Solve x² = 5x without losing a root. / 解且不丢根。
2. Simplify (3x + 9)/(3) correctly. / 正确化简。
3. Solve √(x + 6) = x, checking for extraneous roots. / 解并验根。
4. Simplify 10 − (3x − 4). / 化简。
5. A price rises 25% then falls 20%. Net change? / 净变化多少？

### 挑战 Challenge

1. 【挑战】Solve −2(x − 3) ≥ 4x. / 解此不等式（注意变号）。
2. 【挑战】For which x is (x)/((x−1)) undefined? Then solve (x)/((x−1)) = 2. / 何时无意义？再解方程。
3. 【挑战】Solve (2x − 1)² = 25 (two roots). / 求两根。

## 我会避坑了吗 Self-check

- [ ] 不等式乘/除负数时我会把不等号变号 / flip when ÷ negative
- [ ] 我知道 (a+b)² = a²+2ab+b²，不漏中间项 / keep the 2ab
- [ ] 我分得清 −3²=−9 与 (−3)²=9 / brackets on the minus
- [ ] 我知道 √(a²)=|a| 而不是 a / root gives non-negative
- [ ] 分数相加我会先通分，不分子分母各自加 / common denominator
- [ ] 我只约乘的公因式，不约加减里的项 / cancel factors only
- [ ] 两边平方后我会验根、舍去增根 / check for extraneous roots
- [ ] 我不随便两边除以变量，改用因式分解，且不除以0 / factor, never ÷0
- [ ] 负号我会分配到括号里每一项 / distribute the minus
- [ ] 移项时我会变号 / flip sign when transposing
- [ ] x²=k 我会写 x=±√k，不漏负根 / both roots
- [ ] 百分比先增后减我知道不回原值 / percents don't cancel
