# C2 · 分式（初版）

> 意义与约分 → 四则运算(通分) → 分式方程(去分母·验增根) → 加料：整体代入求值 a+1/a→a³+1/a³。先英后中，例题分低中高。


## 00 What this covers / 这一章要学什么

**Key terms**：algebraic fraction 分式 = 分母含字母；defined 有意义 = 分母≠0；simplify 约分 = ；fractional equation 分式方程 = 

**EN:** An algebraic fraction has a variable on the bottom, so it is defined only when the denominator ≠ 0. You'll simplify (cancel common factors), do the four operations, solve fractional equations (clear denominators, then check extraneous roots), and use whole-substitution for values like a³+1/a³.


分式分母含字母，只有分母≠0 时才有意义。你会约分（约公因式）、四则运算、解分式方程（去分母后验增根），并用整体代入求 a³+1/a³ 这类值。


## 01 Meaning & simplifying / 有意义与约分

**Key terms**：denominator≠0 分母不为零 = ；cancel factors 约公因式 = 不约加减项；factor first 先分解 = ；restriction 取值范围 = 

**EN:** A fraction is undefined where the denominator is 0 — state it. To simplify, factor top and bottom and cancel common factors. E.g. (x²−4)/(x+2)=x−2 for x≠−2.


分式在分母为0处无意义——要写限制。约分：分子分母因式分解后约公因式。例：(x²−4)/(x+2)=x−2（x≠−2）。


- 🟢低: (6)/(2x) 化简 → (3)/(x)（x≠0）
- 🟡中: (x²−4)/(x+2) 化简 → x−2（x≠−2）
- 🔴高: 化简 (x²−6x+9)/(x²−9) 并写范围。
   - 第 1 步 · 分解：分子(x−3)²，分母(x−3)(x+3)。
   - 第 2 步 · 约分：((x−3)²)/((x−3)(x+3))=(x−3)/(x+3)。
   - 第 3 步 · 范围：x≠3 且 x≠−3。
   - ✅ (x−3)/(x+3)（x≠±3）。先分解再约公因式，记得写限制。

## 02 Operations / 四则运算

**Key terms**：multiply 乘 = 分子乘分子；divide 除 = 乘以倒数；add/subtract 加减 = 先通分；LCD 最简公分母 = 

**EN:** Multiply across; divide by the reciprocal; to add/subtract find the LCD, rewrite each fraction, then combine numerators. Factor denominators first.


乘：分子乘分子分母乘分母；除：乘以倒数；加减：先找最简公分母通分再合并分子。先分解分母。


- 🟢低: (1)/(x)+(1)/(y) → (x+y)/(xy)
- 🟡中: (2)/(x)·(x)/(3) → (2)/(3)
- 🔴高: 计算 (1)/(x−1) − (2)/(x²−1)。
   - 第 1 步 · 公分母：x²−1=(x−1)(x+1)。
   - 第 2 步 · 通分：(1)/(x−1)=(x+1)/((x−1)(x+1))。
   - 第 3 步 · 合并：((x+1)−2)/((x−1)(x+1))=(x−1)/((x−1)(x+1))。
   - 第 4 步 · 约分：=(1)/(x+1)（x≠±1）。
   - ✅ (1)/(x+1)（x≠±1）。分解→通分→合并→约分。

## 03 Fractional equations / 分式方程（验增根）

**Key terms**：clear 去分母 = 乘公分母；extraneous 增根 = 使分母0的假解；check 验根 = ；no solution 无解 = 

**EN:** Multiply by the LCD to clear denominators, solve, then check: any value making an original denominator 0 is extraneous — reject it. If the only value is extraneous, there's no solution.


两边乘公分母去分母、解出、再验根：使原分母为0 的值是增根要舍。若唯一解是增根则无解。


- 🟢低: 解 (2)/(x)=(1)/(3) → x=6
- 🟡中: 解 (1)/(x)=(1)/(x)+1 → 无解(矛盾)
- 🔴高: 解分式方程 (1)/(x−1) = (2)/(x²−1)。
   - 第 1 步 · 去分母：乘(x−1)(x+1)：x+1=2。
   - 第 2 步 · 解：x=1。
   - 第 3 步 · 验根：x=1 使 x−1=0 → 增根，舍。
   - ✅ 无解（x=1 为增根）。解要代回原分母检验。

## 04 Whole-substitution / 加料：整体代入求值

**Key terms**：a+1/a 整体 = ；square (a+1/a)² = =a²+2+1/a²；cube (a+1/a)³ = ；from a²−ka+1=0 = ÷a 得 a+1/a=k

**EN:** If a is a root of a²−ka+1=0, ÷a gives a+1/a=k. Then a²+1/a²=(a+1/a)²−2 and a³+1/a³=(a+1/a)³−3(a+1/a). Treat a+1/a as one object.


若 a 是 a²−ka+1=0 的根，÷a 得 a+1/a=k。则 a²+1/a²=(a+1/a)²−2、a³+1/a³=(a+1/a)³−3(a+1/a)。把 a+1/a 当整体。


- 🟢低: a+(1)/(a)=3，求 a²+(1)/(a²) → 3²−2=7
- 🟡中: 再求 a³+(1)/(a³) → 3³−3·3=18
- 🔴高: 【同型·平和】a 是 a²−3a+1=0 的根，求 a³+(1)/(a³)。
   - 第 1 步 · 得整体：÷a：a−3+(1)/(a)=0 → a+(1)/(a)=3。
   - 第 2 步 · 立方：a³+(1)/(a³)=(a+(1)/(a))³−3(a+(1)/(a))。
   - 第 3 步 · 代入：=27−9=18。
   - ✅ 18。见 a²−ka+1=0 立刻 ÷a 得 a+1/a=k，再整体立方。

## 练习 Practice（只做题）


### 基础 Basic
1. 化简 (10x)/(5x²)（写范围）。
2. 化简 (x²−1)/(x−1)。
3. 计算 (1)/(x)−(1)/(2x)。
4. 解 (4)/(x)=(2)/(x−3)。

### 进阶 Intermediate
1. 化简 (x²−4x+4)/(x²−4)。
2. 计算 (1)/(x)+(1)/(x+1)。
3. 解 (x)/(x−2)−1=(2)/(x−2) 并验根。
4. a+(1)/(a)=4，求 a²+(1)/(a²)。

### 挑战 Challenge
1. 【挑战】((1)/(x−1)−(1)/(x+1))÷(2)/(x²−1)。
2. 【挑战·增根】解 (x)/(x−1)=(1)/(x−1)+2。
3. 【挑战·同型】a 是 a²−5a+1=0 的根，求 a²+(1)/(a²)。
4. 【挑战】(1)/(x)−(1)/(y)=3、(1)/(x)+(1)/(y)=5，求 x、y。

## 我会了吗 Self-check

- [ ] 分母为0处无意义，会写取值范围
- [ ] 约分只约公因式(先分解)
- [ ] 加减先通分、除→乘倒数
- [ ] 分式方程去分母后必验增根
- [ ] 由 a²−ka+1=0 得 a+1/a=k，整体求 a³+1/a³
