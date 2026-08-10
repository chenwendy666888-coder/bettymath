# AMC · 竞赛专题入门（初版）

> 竞赛心态与策略 → 巧算与找规律 → 抽屉原理 → 加料：综合技巧精选。用已学知识解更灵活的题。先英后中，例题分低中高。


## 00 What this covers / 这一章要学什么

**Key terms**：AMC 美国数学竞赛 = 选择题为主；strategy 策略 = 巧解胜过硬算；no calculator 不用计算器 = ；build on basics 用已学 = 

**EN:** AMC-style problems reward clever thinking over heavy computation. Nothing here needs new theory — it re-uses your algebra, number theory and counting in flexible ways. This primer shows a few recurring moves: smart calculation, finding patterns, and the pigeonhole principle, plus mixed practice. Aim for insight, not force.


AMC 风格的题奖励巧思，而非蛮算。这里不需要新理论——只是把你学过的代数、数论、计数灵活地重新组合。本入门展示几个反复出现的招式：巧算、找规律、抽屉原理，加上综合练习。追求洞察，而非硬拼。


## 01 Smart calculation & patterns / 巧算与找规律

**Key terms**：pairing 配对 = 首尾相加；Gauss sum 高斯求和 = 1+…+n = n(n+1)/2；pattern 规律 = 算几项找循环；telescoping 裂项 = 

**EN:** Don't brute-force — pair up terms (Gauss: 1+2+…+n = n(n+1)/2), factor cleverly, or compute a few terms to spot a pattern/cycle. Many 'scary' AMC numbers collapse once you see the structure (a repeating last digit, a symmetric sum, a telescoping cancellation).


别硬算——把项配对（高斯：1+2+…+n = n(n+1)/2）、巧妙因式分解，或先算几项找规律/循环。很多「吓人」的 AMC 数字，一旦看出结构（尾数循环、对称求和、裂项相消）就会瞬间坍缩。


- 🟢低: 1 + 2 + … + 10 = ? → 10·11/2 = 55
- 🟡中: 1 + 2 + … + 100 = ? → 100·101/2 = 5050
- 🔴高: 求 1 + 3 + 5 + … + 99（前 50 个奇数之和）。
   - 第 1 步 · 认结构：这是前 50 个奇数，可配对：(1+99)+(3+97)+…
   - 第 2 步 · 配对：每对和都是 100，共 25 对。
   - 第 3 步 · 求和：25 × 100 = 2500（＝ 50²，前 n 个奇数和 = n²）。
   - ✅ 2500。首尾配对是巧算的核心；并记住「前 n 个奇数之和 = n²」。

## 02 Pigeonhole principle / 抽屉原理

**Key terms**：pigeonhole 抽屉原理 = 物比屉多必有重；at least 至少 = 必有一屉≥2；n+1 into n = 放不下必有共享；existence 存在性 = 

**EN:** The pigeonhole principle: if you put more items than boxes, some box holds at least two. Simple but powerful for existence ('show that two of them must…'). E.g. among 13 people, two share a birth month (13 people, 12 months).


抽屉原理：把比抽屉多的物品放进抽屉，必有一个抽屉装了至少两个。简单却擅长证存在性（「说明必有两个…」）。例：13 个人里必有两人生日在同一个月（13 人、12 个月）。


- 🟢低: 13 人里必有两人同月生，为什么？ → 13 > 12 个月，由抽屉原理
- 🟡中: 至少几人才能保证两人同月生？ → 13 人
- 🔴高: 从 1~8 中任取 5 个不同的数，说明其中必有两个数之和为 9。
   - 第 1 步 · 造抽屉(配对)：把和为 9 的数配对：{1,8}{2,7}{3,6}{4,5}，共 4 个抽屉。
   - 第 2 步 · 放物：取 5 个数放进这 4 个抽屉。
   - 第 3 步 · 抽屉原理：5 > 4 → 必有一个抽屉里有 2 个数，它们之和就是 9。
   - ✅ 必有两数之和为 9。抽屉原理关键是造好抽屉（这里按「和为 9」配对成 4 个抽屉）。

## 03 Mixed techniques / 加料：综合技巧精选

**Key terms**：work backward 逆推 = 从答案倒推；symmetry 对称 = 利用对称简化；extreme 极端 = 考虑最大/最小情形；combine 综合 = 多招并用

**EN:** Harder problems combine tricks: work backward from what's asked, exploit symmetry, test extreme cases, or translate to an equation you can solve. There's no single recipe — the meta-skill is trying a promising move, checking, and switching if stuck. Practice builds the instinct.


更难的题会综合技巧：从所求逆推、利用对称、考虑极端情形，或化成能解的方程。没有唯一套路——元技能是「试一个有希望的招、检验、卡住就换」。多练自然生出直觉。


- 🟢低: 「前 n 个奇数之和」等于什么？ → n²
- 🟡中: 2⁴⁰ 与 3²⁵ 谁大？(化同指数) → 2⁴⁰=(2⁸)⁵=256⁵，3²⁵=(3⁵)⁵=243⁵ → 2⁴⁰ 大
- 🔴高: 求 2²⁰²³ 的个位数字。
   - 第 1 步 · 找尾数周期：2 的幂个位：2,4,8,6,2,4,…，周期 4。
   - 第 2 步 · 取余：2023 ÷ 4 = 505 余 3 → 周期里第 3 个。
   - 第 3 步 · 读出：第 3 个是 8 → 个位为 8。
   - ✅ 个位是 8。综合运用「尾数周期 + 取余」——数论工具在竞赛里反复出现。

## 练习 Practice（只做题）


### 基础 Basic
1. 求 1+2+…+50。
2. 求 2+4+6+…+100。
3. 10 个人分到 3 个组，必有一组至少几人？
4. 3⁴ 的个位？

### 进阶 Intermediate
1. 求 1+3+5+…+199。
2. 从 1~10 任取 6 个不同数，必有两数之和为 11，为什么？
3. 求 7²⁰²³ 的个位。
4. 比较 3¹⁰⁰ 与 2¹⁵⁰ 的大小。

### 挑战 Challenge
1. 【挑战·裂项】求 (1)/(1·2)+(1)/(2·3)+…+(1)/(9·10)。
2. 【挑战·抽屉】任取 51 个 1~100 的数，必有两数相邻(差1)，为什么？
3. 【挑战·规律】数列 1,1,2,3,5,8,… 第 10 项？其奇偶规律？
4. 【挑战·综合】1²−2²+3²−4²+…+99²−100² 的值。

## 我会了吗 Self-check

- [ ] 会用首尾配对/高斯公式巧算求和
- [ ] 知道前 n 个奇数之和 = n²
- [ ] 会用抽屉原理证存在性、并会「造抽屉」
- [ ] 会用尾数周期+取余求高次幂个位
- [ ] 遇难题会逆推/对称/极端/化方程等综合尝试
