# N1 · 整除与数论（初版）

> 整除·因数·倍数 → 质数与分解质因数 → 最大公因数·最小公倍数 → 加料：奇偶性·余数·尾数周期。先英后中，例题分低中高。


## 00 What this covers / 这一章要学什么

**Key terms**：divisible 整除 = 除得尽、余数0；prime 质数 = 只有1和自身两个因数；GCD/LCM 最大公因数/最小公倍数 = ；parity 奇偶性 = 

**EN:** Number theory is about the hidden structure of whole numbers — and competition problems love it. You'll nail divisibility, break numbers into primes, compute GCD and LCM, and pick up the exam/AMC tools: parity (odd/even), remainders, and last-digit cycles.


数论研究整数隐藏的结构——竞赛题最爱。你会掌握整除、把数分解质因数、求最大公因数与最小公倍数，并学会考试/AMC 的工具：奇偶性、余数、尾数周期。


## 01 Divisibility / 整除·因数·倍数

**Key terms**：a | b 整除 = a 能整除 b；factor 因数 / multiple 倍数 = ；rules 整除特征 = 2/3/5/9 的判别；6 = 2×3 = 被6整除⟺同时被2、3整除

**EN:** b is divisible by a if the division leaves no remainder (then a is a factor of b, b a multiple of a). Quick tests: ÷2 if the last digit is even; ÷5 if it ends 0 or 5; ÷3 or ÷9 if the digit sum is; ÷6 iff divisible by both 2 and 3.


若相除没有余数，b 能被 a 整除（此时 a 是 b 的因数，b 是 a 的倍数）。快速判别：末位为偶数可 ÷2；末位 0 或 5 可 ÷5；各位数字之和能被 3 或 9 整除则可 ÷3、÷9；÷6 ⟺ 同时能被 2 和 3 整除。


- 🟢低: 36 能被哪些数整除：2? 3? 5? → 2 ✓、3 ✓、5 ✗
- 🟡中: 234 能被 6 整除吗？ → 末位4→÷2✓；2+3+4=9→÷3✓；故 ÷6 ✓
- 🔴高: 三位数 5A2 能被 3 整除，A 是一位数字，求 A 的所有可能值。
   - 第 1 步 · 用 ÷3 特征：各位数字和能被 3 整除：5 + A + 2 = A + 7。
   - 第 2 步 · A+7 是 3 的倍数：A ∈ 0~9，使 A+7 ∈ {9, 12, 15} → A = 2, 5, 8。
   - ✅ A = 2、5、8。整除判别把「大数整除」变成「数字和整除」。

## 02 Primes & factorization / 质数与分解质因数

**Key terms**：prime 质数 = 2,3,5,7,11…；composite 合数 = 有额外因数；prime factorization 分解质因数 = 写成质数乘积；unique 唯一 = 分解方式唯一

**EN:** A prime has exactly two factors (1 and itself); 2 is the only even prime. Every whole number &gt;1 factors uniquely into primes, e.g. 60 = 2²·3·5. Prime factorization is the key to GCD, LCM and counting factors.


质数恰有两个因数（1 和它自己）；2 是唯一的偶质数。每个大于 1 的整数都能唯一地分解成质数之积，例如 60 = 2²·3·5。分解质因数是求 GCD、LCM 和数因数个数的钥匙。


- 🟢低: 把 12 分解质因数 → 2²·3
- 🟡中: 把 60 分解质因数 → 2²·3·5
- 🔴高: 求 72 的分解质因数，并求它共有几个正因数。
   - 第 1 步 · 分解：72 = 8·9 = 2³·3²。
   - 第 2 步 · 因数个数公式：把各质因数指数 +1 再相乘：(3+1)(2+1) = 4·3 = 12。
   - ✅ 72 = 2³·3²，共 12 个正因数。因数个数 = 各指数加一之积——分解质因数的经典用途。

## 03 GCD & LCM / 最大公因数与最小公倍数

**Key terms**：GCD 最大公因数 = 公共质因数取最低次；LCM 最小公倍数 = 所有质因数取最高次；GCD·LCM = a·b = ；coprime 互质 = GCD=1

**EN:** From prime factorizations: the GCD takes each common prime to its lowest power; the LCM takes every prime to its highest power. Handy check: GCD × LCM = a × b. If GCD = 1 the numbers are coprime.


由分解质因数：GCD 取公共质因数的最低次幂；LCM 取所有质因数的最高次幂。好用的检验：GCD × LCM = a × b。若 GCD = 1 则两数互质。


- 🟢低: GCD(12, 18) = ? → 6
- 🟡中: LCM(12, 18) = ? → 36（检验 6·36 = 12·18 ✓）
- 🔴高: 用分解质因数求 GCD(24, 36) 与 LCM(24, 36)。
   - 第 1 步 · 分解：24 = 2³·3；36 = 2²·3²。
   - 第 2 步 · GCD 取公共最低次：2 的最低次 2²、3 的最低次 3¹ → GCD = 2²·3 = 12。
   - 第 3 步 · LCM 取最高次：2³·3² = 72。
   - ✅ GCD = 12、LCM = 72（检验 12·72 = 24·36 = 864 ✓）。GCD 取低次、LCM 取高次。

## 04 Parity, remainders, last digits / 加料：奇偶·余数·尾数周期

**Key terms**：parity 奇偶 = 奇±奇=偶等；remainder 余数 = 除法余几；last digit 尾数 = 个位数字；cycle 周期 = 尾数循环

**EN:** Three AMC staples. Parity: odd±odd=even, odd·odd=odd — great for impossibility proofs. Remainders: classify numbers by what they leave (mod). Last-digit cycles: powers repeat their units digit, e.g. 7¹,7²,…→ 7,9,3,1,7,9,… (period 4), so 7¹⁰⁰ ends in 1.


三样 AMC 常客。奇偶性：奇±奇=偶、奇·奇=奇——常用来证「不可能」。余数：按除法余几给数分类（mod）。尾数周期：幂的个位会循环，如 7¹,7²,…→ 7,9,3,1,7,9,…（周期 4），所以 7¹⁰⁰ 的个位是 1。


- 🟢低: 奇数 + 奇数 = 奇还是偶？ → 偶
- 🟡中: 3¹,3²,3³,3⁴ 的个位？ → 3,9,7,1（周期 4）
- 🔴高: 求 7²⁰²³ 的个位数字。
   - 第 1 步 · 找尾数周期：7 的幂个位：7,9,3,1,7,9,3,1…，周期 4。
   - 第 2 步 · 取余定位置：2023 ÷ 4 = 505 余 3 → 对应周期里第 3 个。
   - 第 3 步 · 读出：第 3 个是 3 → 个位为 3。
   - ✅ 个位是 3。求高次幂尾数：先找周期，再用指数 mod 周期定位（2023 mod 4 = 3）。

## 练习 Practice（只做题）


### 基础 Basic
1. 判断 2,3,5,9 能否整除 90。
2. 把 48 分解质因数。
3. 求 GCD(16,24) 与 LCM(16,24)。
4. 奇数×偶数是奇还是偶？

### 进阶 Intermediate
1. 三位数 3A6 能被 9 整除，求 A。
2. 求 100 共有几个正因数。
3. 两数积为 96、GCD 为 4，求 LCM。
4. 求 2¹⁰⁰ 的个位数字。

### 挑战 Challenge
1. 【挑战·奇偶】能否把 1~9 填入使某和为偶数… 证明 1+2+…+2023 的奇偶性。
2. 【挑战·尾数】求 3²⁰²³ + 7²⁰²³ 的个位。
3. 【挑战·因数】求最小的、恰有 6 个正因数的正整数。
4. 【挑战·余数】求 2023 除以 7 的余数（用尾数/周期）。

## 我会了吗 Self-check

- [ ] 我会用 2/3/5/9/6 的整除特征
- [ ] 我会分解质因数、并用指数+1相乘求因数个数
- [ ] GCD取公共最低次、LCM取最高次，会用 GCD·LCM=ab 检验
- [ ] 我会用奇偶性判断和/积的奇偶
- [ ] 求高次幂尾数会找周期 + 指数取余
