# N2 · 排列组合（初版）

> 加法原理·乘法原理 → 排列(顺序有关) → 组合(顺序无关) → 加料：分类与分步计数。先英后中，例题分低中高。


## 00 What this covers / 这一章要学什么

**Key terms**：counting 计数 = 有多少种；permutation 排列 = 顺序有关；combination 组合 = 顺序无关；principle 原理 = 加法/乘法

**EN:** Counting answers 'how many ways?'. The two engines are the addition principle (either/or → add) and the multiplication principle (do this then that → multiply). Then two patterns: permutations (order matters) and combinations (order doesn't). Getting this right is a big source of exam marks.


计数回答「有多少种」。两大引擎是加法原理（分类、二选一 → 相加）和乘法原理（分步、先…再… → 相乘）。再加两种模式：排列（顺序有关）和组合（顺序无关）。搞对它能拿不少分。


## 01 Addition & multiplication / 加法原理·乘法原理

**Key terms**：addition 分类相加 = 互斥的类别，各数相加；multiplication 分步相乘 = 连续步骤，各数相乘；either/or 分类 = ；step by step 分步 = 

**EN:** Addition principle: if a task is done by one category OR another (mutually exclusive), add the counts. Multiplication principle: if a task is done in steps, one AND then another, multiply the counts. Deciding 'add or multiply' = deciding 'cases or steps'.


加法原理：一件事由这一类或那一类完成（互斥），把各类的数相加。乘法原理：一件事分步、先…再…完成，把各步的数相乘。判断「加还是乘」＝判断「分类还是分步」。


- 🟢低: 从 3 件上衣或 2 条裤子里选一件，共几种？ → 3 + 2 = 5（分类相加）
- 🟡中: 3 件上衣配 2 条裤子，共几套？ → 3 × 2 = 6（分步相乘）
- 🔴高: 用数字 1、2、3 组成三位数：① 可重复；② 不可重复，各有几个？
   - 第 1 步 · ①可重复(分步相乘)：百位 3 种、十位 3 种、个位 3 种 → 3×3×3 = 27。
   - 第 2 步 · ②不可重复：百位 3 种、十位剩 2 种、个位剩 1 种 → 3×2×1 = 6。
   - ✅ ① 27 个；② 6 个。分步用乘法；不重复时每步可选数依次减少。

## 02 Permutations / 排列（顺序有关）

**Key terms**：permutation 排列 = 从n取r并排序；factorial n! 阶乘 = n!=n(n−1)…1；nPr = n!/(n−r)!；order matters 顺序有关 = 

**EN:** A permutation counts ordered arrangements. Arranging all n distinct items uses n! = n·(n−1)···1. Choosing and ordering r out of n is nPr = n!/(n−r)! = n·(n−1)···(n−r+1). Use permutations when order matters (rankings, seat orders, forming numbers).


排列数的是有顺序的安排。把 n 个不同物全部排好有 n! = n·(n−1)···1 种。从 n 中取 r 个并排序是 nPr = n!/(n−r)! = n·(n−1)···(n−r+1)。当顺序有关时用排列（名次、座位、组数字）。


- 🟢低: 3 本书排成一排，几种？ → 3! = 6
- 🟡中: 从 5 人中选 2 人排第一、第二名，几种？ → 5×4 = 20（=P(5,2)）
- 🔴高: 5 名同学排成一排照相，其中甲必须站正中间，共几种排法？
   - 第 1 步 · 固定甲：甲的位置定死（正中），只剩 4 个位置。
   - 第 2 步 · 排其余 4 人：4 人全排列 = 4! = 24。
   - ✅ 24 种。带限制的排列：先安排「受限的元素」，再排其余（先固定甲，再排 4 人）。

## 03 Combinations / 组合（顺序无关）

**Key terms**：combination 组合 = 只选不排；nCr = n!/(r!(n−r)!)；order doesn't matter 顺序无关 = ；nCr = nC(n−r) 对称 = 

**EN:** A combination counts selections where order does NOT matter (teams, committees, handshakes). nCr = n!/(r!(n−r)!). It equals a permutation divided by r! (removing the orderings). Symmetry: nCr = nC(n−r).


组合数的是顺序无关的选取（球队、委员会、握手）。nCr = n!/(r!(n−r)!)。它等于排列再除以 r!（去掉排序）。对称性：nCr = nC(n−r)。


- 🟢低: 从 5 人中选 2 人做值日（不分先后），几种？ → C(5,2) = 10
- 🟡中: 从 8 人中选 3 人组成小组，几种？ → C(8,3) = 56
- 🔴高: 从 5 男 4 女中选 3 人参赛，要求恰有 1 名女生，共几种？
   - 第 1 步 · 分步：先选女、再选男：恰 1 女 → 从 4 女选 1、从 5 男选 2。
   - 第 2 步 · 各自组合：C(4,1) = 4；C(5,2) = 10。
   - 第 3 步 · 分步相乘：4 × 10 = 40。
   - ✅ 40 种。「恰有 …」用分步：各类分别组合，再相乘。选人不排序 → 用组合。

## 04 Casework counting / 加料：分类与分步

**Key terms**：classify 分类 = 按情况拆开(加法)；combine steps 分步 = 连续选择(乘法)；at least/exactly 至少/恰好 = 常需分类或补集；complement 补集 = 总数 − 反面

**EN:** Harder counting mixes both engines: break into cases (add) and within each case do steps (multiply). For 'at least' questions, it's often easier to count the complement (all − none/opposite). Always ask: order matters (perm) or not (comb)?


较难的计数把两个引擎混用：分类（相加），每类里再分步（相乘）。遇到「至少」的问题，常用补集更省事（总数 − 反面）。永远先问：顺序有关（排列）还是无关（组合）？


- 🟢低: 「至少 1 个」常用什么技巧？ → 补集：总数 − 一个都没有
- 🟡中: 从 4 人中选至少 1 人的选法数？ → 2⁴ − 1 = 15（每人选或不选，去掉全不选）
- 🔴高: 从 5 男 4 女中选 3 人，要求至少有 1 名女生，共几种？
   - 第 1 步 · 用补集：至少 1 女 = 总选法 − 一个女生都没有（全男）。
   - 第 2 步 · 总选法：C(9,3) = 84。
   - 第 3 步 · 全男：C(5,3) = 10。
   - 第 4 步 · 相减：84 − 10 = 74。
   - ✅ 74 种。「至少」优先想补集：从总数里减去「一个都没有」的情形。

## 练习 Practice（只做题）


### 基础 Basic
1. 4 件上衣配 3 条裤子，几套？
2. 从 6 人中选 2 人排名次，几种？
3. 从 6 人中选 2 人做值日，几种？
4. 4 本书排一排，几种？

### 进阶 Intermediate
1. 用 1~5 组成无重复三位数，几个？
2. 从 7 人中选 3 人组成小组，几种？
3. 5 人排队，甲、乙必须相邻，几种？
4. 从 4 男 3 女选 2 人，恰 1 男 1 女，几种？

### 挑战 Challenge
1. 【挑战】5 人排一排，甲不站两端，几种？
2. 【挑战·至少】从 6 人选 3 人，某两人至少入选 1 人，几种？
3. 【挑战】从 5 男 4 女选 4 人，至少 2 女，几种？
4. 【挑战·分类】3 个相同的球放入 3 个不同盒子，几种放法？

## 我会了吗 Self-check

- [ ] 分类用加法、分步用乘法，我会判断
- [ ] 不重复排列时每步可选数依次减少
- [ ] 顺序有关用排列 nPr，会算 n! 与 nPr
- [ ] 顺序无关用组合 nCr，会算并用对称性
- [ ] 「恰有/至少」会用分类或补集
