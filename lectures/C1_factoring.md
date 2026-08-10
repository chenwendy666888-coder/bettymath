# C1 · 因式分解与恒等变形（初版）

> 提公因式·公式法 → 十字相乘(含 a≠1) → 分组分解 → 加料：立方和差·换元·配项凑平方差(x⁴+x²+1)。先英后中，例题分低中高。


## 00 What this covers / 这一章要学什么

**Key terms**：factor 因式分解 = 把多项式写成乘积；identity 恒等变形 = 形变值不变；reverse of expanding 展开的逆运算 = 

**EN:** Factoring is expanding in reverse: a sum → a product. It powers solving quadratics, simplifying fractions and most 'clever' exam moves. Beyond basics you'll meet the paper's favourites: the cross method (even a≠1), grouping, sum/difference of cubes, and substitution / add-and-subtract.


因式分解是展开的逆运算：把「和」写成「积」。它是解一元二次、化简分式与多数「巧解」的引擎。除基础外，会学英文卷偏爱的招式：十字相乘（即使 a≠1）、分组分解、立方和/差、换元 / 加减配项。


## 01 Common factor & formulas / 提公因式与公式法

**Key terms**：common factor 公因式 = 每项都有的因式；a²−b² 平方差 = =(a+b)(a−b)；perfect square 完全平方 = a²±2ab+b²=(a±b)²；first 先提公因式 = 

**EN:** First take out any common factor; then look for a formula — difference of squares a²−b²=(a+b)(a−b) or perfect square a²±2ab+b²=(a±b)². Pulling the common factor first often reveals a hidden formula.


先提出公因式；再找公式——平方差 a²−b²=(a+b)(a−b) 或完全平方 a²±2ab+b²=(a±b)²。先提公因式，常能露出藏着的公式。


- 🟢低: 分解 3x² − 6x → 3x(x − 2)
- 🟡中: 分解 x² − 9 → (x + 3)(x − 3)
- 🔴高: 分解 2x³ − 8x。
   - 第 1 步 · 提公因式：2x³ − 8x = 2x(x² − 4)。
   - 第 2 步 · 平方差：x² − 4 = (x+2)(x−2)。
   - 第 3 步 · 完整：2x(x+2)(x−2)。
   - ✅ 2x(x+2)(x−2)。「一提二套三检查」：先提公因式再套公式。

## 02 Cross method / 十字相乘（含 a≠1）

**Key terms**：x²+bx+c = 找两数积c和b；cross 交叉 = 交叉相乘验中项；a≠1 = 拆首项与常数；check 验中项 = 

**EN:** For x²+bx+c find two numbers with product c, sum b. For ax²+bx+c (a≠1) split leading term and constant and cross-multiply to the middle term. Always check the middle.


对 x²+bx+c 找两数积 c、和 b。对 ax²+bx+c（a≠1）拆首项与常数、交叉相乘凑中项。务必验中项。


- 🟢低: 分解 x²+5x+6 → (x+2)(x+3)
- 🟡中: 分解 x²−x−6 → (x−3)(x+2)
- 🔴高: 分解 3x² − 10x + 8。
   - 第 1 步 · 拆首项：3x² = 3x · x。
   - 第 2 步 · 拆常数交叉：8=(−4)(−2)；3x配−2、x配−4 → 交叉 −6x、−4x，和 −10x ✓。
   - 第 3 步 · 结果：(3x−4)(x−2)。
   - ✅ (3x−4)(x−2)。凑不出就换一种拆法。

## 03 Grouping / 分组分解

**Key terms**：group 分组 = 两两分组；per group 每组提公因式 = ；shared bracket 公共括号 = ；4 terms 四项 = 

**EN:** With four terms and no obvious factor, try grouping: split into two pairs, factor each, hope a common bracket appears. ax+ay+bx+by = a(x+y)+b(x+y) = (a+b)(x+y).


四项又无明显公因式时，试分组：分两组、各提公因式，指望出现公共括号。ax+ay+bx+by=a(x+y)+b(x+y)=(a+b)(x+y)。


- 🟢低: 分解 ax+ay+bx+by → (a+b)(x+y)
- 🟡中: 分解 x³+x²+x+1 → (x+1)(x²+1)
- 🔴高: 分解 x³ − x² − 4x + 4。
   - 第 1 步 · 分组：(x³−x²)−(4x−4)。
   - 第 2 步 · 各提：x²(x−1)−4(x−1)。
   - 第 3 步 · 公共括号：(x−1)(x²−4)。
   - 第 4 步 · 继续：(x−1)(x+2)(x−2)。
   - ✅ (x−1)(x+2)(x−2)。分组后检查括号能否继续分解。

## 04 Cubes, substitution, add-subtract / 加料

**Key terms**：a³+b³ = =(a+b)(a²−ab+b²)；a³−b³ = =(a−b)(a²+ab+b²)；substitution 换元 = ；add & subtract 加减配项 = 

**EN:** Three extra tools: cubes a³±b³=(a±b)(a²∓ab+b²); substitution (repeated chunk = t); add-and-subtract to make a difference of squares. Classic: x⁴+x²+1 = (x²+1)²−x² = (x²+x+1)(x²−x+1).


三样工具：立方公式 a³±b³=(a±b)(a²∓ab+b²)；换元（整体设 t）；加减配项凑平方差。经典：x⁴+x²+1=(x²+1)²−x²=(x²+x+1)(x²−x+1)。


- 🟢低: 分解 x³+8 → (x+2)(x²−2x+4)
- 🟡中: 换元分解 (x²+x)²−2(x²+x)−3 → 设t=x²+x → (t−3)(t+1)=(x²+x−3)(x²+x+1)
- 🔴高: 分解 x⁴ + x² + 1。
   - 第 1 步 · 想配平方：(x²+1)²=x⁴+2x²+1，比原式多一个 x²。
   - 第 2 步 · 加减配项：x⁴+x²+1=(x⁴+2x²+1)−x²=(x²+1)²−x²。
   - 第 3 步 · 平方差：=(x²+x+1)(x²−x+1)。
   - ✅ (x²+x+1)(x²−x+1)。「加一项再减一项」配成平方差——英文卷常用高级招。

## 练习 Practice（只做题）


### 基础 Basic
1. 分解：① 5x²−10x　② x²−16　③ x²+6x+9。
2. 分解 x²+7x+12。
3. 分解 x²−2x−15。
4. 分解 ax−ay+bx−by。

### 进阶 Intermediate
1. 分解 2x²+5x−3。
2. 分解 4x²−9。
3. 分解 x³−27。
4. 分解 x³+2x²−x−2。

### 挑战 Challenge
1. 【挑战·换元】分解 (x²−1)²−5(x²−1)+6。
2. 【挑战·配项】分解 x⁴+4。
3. 【挑战】分解 a²(b−c)+b²(c−a)+c²(a−b)。
4. 【挑战·立方】分解 x⁶−1。

## 我会了吗 Self-check

- [ ] 先提公因式，再套平方差/完全平方
- [ ] x²+bx+c 用「积c和b」十字相乘
- [ ] ax²+bx+c(a≠1) 拆首项常数交叉凑中项
- [ ] 四项分组分解并检查继续
- [ ] 会用立方和差 a³±b³
- [ ] 会换元、加减配项凑平方差(x⁴+x²+1)
