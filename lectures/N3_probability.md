# N3 · 概率初步（初版）

> 随机事件与概率意义 → 列举法(树状图·列表) → 简单概率计算 → 加料：两步事件与「倍数」概率。先英后中，例题分低中高。


## 00 What this covers / 这一章要学什么

**Key terms**：random event 随机事件 = ；probability 概率 = 0~1 之间；favorable/total 有利/总数 = ；enumerate 列举 = 树状图·列表

**EN:** Probability measures how likely an event is, as a number from 0 to 1. For equally-likely outcomes, P(event) = favourable outcomes / total outcomes. The main skill is listing all outcomes fairly — with tree diagrams or tables — then counting the ones you want.


概率衡量一个事件发生的可能性大小，是 0 到 1 之间的数。对等可能的结果，P(事件) = 有利结果数 ÷ 总结果数。核心技能是不重不漏地列举所有结果——用树状图或列表——再数出你想要的那些。


## 01 Meaning / 概率的意义

**Key terms**：certain 必然事件 = P=1；impossible 不可能事件 = P=0；P=有利/总 = 等可能时；0 ≤ P ≤ 1 = 

**EN:** A certain event has P = 1, an impossible one P = 0, everything else is in between. When outcomes are equally likely, P = (number of favourable outcomes) / (total outcomes). Example: a fair die shows an even number with P = 3/6 = 1/2.


必然事件 P = 1，不可能事件 P = 0，其余都在中间。当各结果等可能时，P = 有利结果数 ÷ 总结果数。例：掷一枚均匀骰子，出现偶数的概率 P = 3/6 = 1/2。


- 🟢低: 掷骰子出现 5 的概率？ → (1)/(6)
- 🟡中: 掷骰子出现偶数的概率？ → (3)/(6) = (1)/(2)

## 02 Listing outcomes / 列举法（树状图·列表）

**Key terms**：tree diagram 树状图 = 分步列出；table 列表 = 两步事件用表格；no repeat/miss 不重不漏 = ；total 总数 = 树叶/表格数

**EN:** For two-step experiments (two coins, two dice), draw a tree or a table to list every outcome without missing or repeating. Two coins → 4 outcomes; two dice → 36 outcomes. Then count favourable leaves/cells.


对两步试验（两枚硬币、两颗骰子），画树状图或列表，不重不漏地列出每个结果。两枚硬币 → 4 种；两颗骰子 → 36 种。再数出有利的树叶/格子。


- 🟢低: 掷两枚硬币，共几种结果？ → 4（正正/正反/反正/反反）
- 🟡中: 两枚硬币「恰好一正一反」的概率？ → 2/4 = (1)/(2)
- 🔴高: 同时掷两颗均匀骰子，求点数之和为 7 的概率。
   - 第 1 步 · 总数：两颗骰子共 6×6 = 36 种等可能结果。
   - 第 2 步 · 列出和为 7：(1,6)(2,5)(3,4)(4,3)(5,2)(6,1) 共 6 种。
   - 第 3 步 · 概率：(6)/(36) = (1)/(6)。
   - ✅ (1)/(6)。两步事件：先定总数(6×6)，再有序列出有利结果，别漏 (a,b) 与 (b,a)。

## 03 Two-step & 'multiple' probabilities / 加料：两步事件与倍数概率

**Key terms**：two-step 两步事件 = 分步 → 列表/树；multiple 倍数 = 如是否6的倍数；favourable 有利 = 满足条件的格子；reduce 约分 = 

**EN:** Exam questions often ask for a probability tied to a number property — e.g. the sum or product being a multiple of 6, or a two-digit number being prime. Method is the same: total outcomes in a table, then count the cells with the property, then reduce.


考题常问与数的性质有关的概率——例如和或积是否为 6 的倍数、组成的两位数是否为质数。方法不变：列表求总数，再数出具有该性质的格子，最后约分。


- 🟢低: 两骰子之和是 6 的倍数，有哪些和？ → 6 或 12
- 🟡中: 和为 12 的结果有几种？ → 1 种：(6,6)
- 🔴高: 同时掷两颗骰子，求点数之和为 6 的倍数的概率。
   - 第 1 步 · 总数：36 种。
   - 第 2 步 · 和为 6：(1,5)(2,4)(3,3)(4,2)(5,1) 共 5 种。
   - 第 3 步 · 和为 12：(6,6) 共 1 种；合计 5+1 = 6。
   - 第 4 步 · 概率：(6)/(36) = (1)/(6)。
   - ✅ (1)/(6)。「倍数」概率：先确定哪些和是 6 的倍数(6、12)，再分别数结果相加。

## 练习 Practice（只做题）


### 基础 Basic
1. 掷一枚骰子，出现大于 4 的概率？
2. 口袋里 2 红 3 白球，摸到红球的概率？
3. 掷两枚硬币，两个都是正面的概率？
4. 必然事件的概率是多少？

### 进阶 Intermediate
1. 两颗骰子之和为 5 的概率。
2. 两颗骰子点数相同的概率。
3. 从 1~9 中任取一数，取到质数的概率。
4. 两枚硬币「至少一个正面」的概率。

### 挑战 Challenge
1. 【挑战·倍数】两颗骰子之积为 6 的倍数的概率。
2. 【挑战】三枚硬币恰好两个正面的概率。
3. 【挑战】从 1~5 任取两个不同数，其和为偶数的概率。
4. 【挑战·两步】不放回地从 3 红 2 白中摸两球，两球同色的概率。

## 我会了吗 Self-check

- [ ] P=有利/总(等可能)，0≤P≤1，必然=1不可能=0
- [ ] 两步事件我会用树状图/列表不重不漏列举
- [ ] 两骰子总数36，会有序列出有利结果
- [ ] 「倍数/质数」概率会先确定满足的和再数
- [ ] 结果概率会约分成最简
