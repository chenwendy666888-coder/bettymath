# C4 · 复合函数与函数方程（初版）

> 函数记号与求值 → 复合函数 f(g(x)) → 求解析式(换元·待定系数) → 加料：简单函数方程(换 x→1/x 联立)。先英后中，例题分低中高。


## 00 What this covers / 这一章要学什么

**Key terms**：function f(x) 函数 = 输入 x、输出 f(x)；composite 复合 = 一个函数套另一个；find rule 求解析式 = ；functional equation 函数方程 = 

**EN:** A function is a machine: put in x, get out f(x). This chapter pushes past 'plug in a number' to the moves the English paper tests: composite functions f(g(x)) (a machine feeding a machine), finding the rule f(x) from an indirect condition (by substitution or undetermined coefficients), and simple functional equations solved by clever substitution.


函数是一台机器：输入 x，输出 f(x)。本章从「代个数」推进到英文卷会考的招式：复合函数 f(g(x))（一台机器喂给另一台）、由间接条件求解析式 f(x)（用换元或待定系数）、以及用巧妙代换解简单函数方程。


## 01 Notation & evaluation / 函数记号与求值

**Key terms**：f(x) 记号 = x 是输入；f(2) 求值 = 把 x 换成 2；f(a+1) 代入 = 把整体代进去；input 输入 / output 输出 = 

**EN:** f(x) just names a rule. To evaluate, replace x everywhere by the input: if f(x)=x²+1 then f(3)=3²+1=10, and f(a+1)=(a+1)²+1. Whatever sits inside the bracket is what you substitute — even another expression.


f(x) 只是给规则起名。求值就是把输入处处替换 x：若 f(x)=x²+1，则 f(3)=3²+1=10，f(a+1)=(a+1)²+1。括号里是什么，就代入什么——哪怕是另一个式子。


- 🟢低: f(x)=2x+1，求 f(3) → 2·3+1=7
- 🟡中: f(x)=x²−1，求 f(a+1) → (a+1)²−1=a²+2a

## 02 Composite f(g(x)) / 复合函数

**Key terms**：f(g(x)) 复合 = 先算 g，再喂给 f；inside first 由内到外 = ；order matters 顺序有别 = f(g)≠g(f) 一般；substitute 代入 = 

**EN:** f(g(x)) means: compute g(x) first, then feed that into f. Work from the inside out. Order matters — usually f(g(x)) ≠ g(f(x)). E.g. f(x)=x+1, g(x)=x²: f(g(x))=x²+1 but g(f(x))=(x+1)².


f(g(x)) 意思是：先算 g(x)，再把结果喂给 f。由内到外算。顺序有别——一般 f(g(x)) ≠ g(f(x))。例：f(x)=x+1、g(x)=x²，则 f(g(x))=x²+1，而 g(f(x))=(x+1)²。


- 🟢低: f(x)=x+2、g(x)=3x，求 f(g(x)) → 3x+2
- 🟡中: 同上求 g(f(x)) → g(x+2)=3(x+2)=3x+6
- 🔴高: f(x)=x²、g(x)=2x−1，求 f(g(2)) 与 f(g(x))。
   - 第 1 步 · f(g(2)) 由内到外：先 g(2)=2·2−1=3；再 f(3)=3²=9。
   - 第 2 步 · f(g(x)) 一般式：f(g(x))=f(2x−1)=(2x−1)²=4x²−4x+1。
   - ✅ f(g(2))=9；f(g(x))=(2x−1)²=4x²−4x+1。复合就是「把内层整体代入外层的 x」。

## 03 Finding f(x) / 求解析式（换元·待定系数）

**Key terms**：substitution 换元 = 设 t = 内层；let t = x+1 令整体为t = ；undetermined coeff 待定系数 = 设 f(x)=ax+b 再解；back to x 换回 x = 

**EN:** Two standard ways to recover f. Substitution: if you're told f(x+1)=…, let t = x+1 (so x = t−1), rewrite everything in t, then rename t back to x. Undetermined coefficients: if f is known to be linear, write f(x)=ax+b and solve for a, b from the condition.


两种标准方法。换元：若已知 f(x+1)=…，令 t = x+1（则 x = t−1），把式子全部用 t 表示，再把 t 换回 x。待定系数：若已知 f 是一次函数，设 f(x)=ax+b，由条件解出 a、b。


- 🟢低: f(x−1)=x，求 f(x) → 令 t=x−1→x=t+1→f(t)=t+1→f(x)=x+1
- 🟡中: f(x)=ax+b，f(1)=3、f(2)=5，求 f(x) → a+b=3、2a+b=5→a=2,b=1→f(x)=2x+1
- 🔴高: 已知 f(x + 1) = x² + 2x，求 f(x)。
   - 第 1 步 · 换元：令 t = x + 1，则 x = t − 1。
   - 第 2 步 · 全代成 t：f(t) = (t−1)² + 2(t−1) = t² − 2t + 1 + 2t − 2 = t² − 1。
   - 第 3 步 · 换回 x：f(x) = x² − 1。
   - ✅ f(x) = x² − 1。求解析式的换元法：令内层为 t、把右边全写成 t、再把 t 改回 x。

## 04 Functional equations / 加料：简单函数方程

**Key terms**：functional equation 函数方程 = 关于 f 的方程；substitute x→1/x 代换 = 制造第二个方程；solve as system 联立 = 消去 f(1/x)；clever move 巧代 = 

**EN:** A functional equation relates f at different inputs, e.g. f(x) + 2f(1/x) = x. Trick: substitute x → 1/x to get a second equation, then treat f(x) and f(1/x) as two unknowns and solve the linear system to isolate f(x).


函数方程把 f 在不同输入处联系起来，例如 f(x) + 2f(1/x) = x。诀窍：把 x 换成 1/x 得到第二个方程，再把 f(x) 与 f(1/x) 看作两个未知数、联立解方程组，把 f(x) 单独解出。


- 🟢低: 函数方程里，制造第二个方程的常用代换是什么？ → 把 x 换成 1/x（或 −x 等）
- 🟡中: 若 f(x)+f(−x)=2x²，f 的奇偶性给了什么信息？ → 右边是偶函数、提示对称
- 🔴高: 【加料】已知对一切 x≠0，f(x) + 2f((1)/(x)) = x，求 f(x)。
   - 第 1 步 · 写原方程：f(x) + 2f((1)/(x)) = x　……①
   - 第 2 步 · 代换 x→1/x：f((1)/(x)) + 2f(x) = (1)/(x)　……②
   - 第 3 步 · 消 f(1/x)：②×2 − ①：4f(x) − f(x)... 用②×2 得 2f((1)/(x))+4f(x)=(2)/(x)，减①：3f(x) = (2)/(x) − x。
   - 第 4 步 · 解出：f(x) = (2−x²)/(3x)。
   - ✅ f(x) = (2−x²)/(3x)。函数方程的招牌解法：代换制造第二个方程 → 联立消去另一个 f。

## 练习 Practice（只做题）


### 基础 Basic
1. f(x)=3x−2，求 f(0)、f(2)。
2. f(x)=x²+1，求 f(−1)、f(a)。
3. f(x)=x+1、g(x)=2x，求 f(g(x)) 与 g(f(x))。
4. f(x−2)=x，求 f(x)。

### 进阶 Intermediate
1. f(x)=x²、g(x)=x+3，求 f(g(1)) 与 f(g(x))。
2. f(x)=ax+b，f(0)=1、f(3)=7，求 f(x)。
3. f(2x+1)=4x²，求 f(x)。
4. f(x)=(1)/(x)、g(x)=x−1，求 f(g(x)) 及定义域限制。

### 挑战 Challenge
1. 【挑战·待定】f 是一次函数且 f(f(x))=4x+3，求 f(x)。
2. 【挑战·换元】f((x+1)/(x))=... 设 t=(x+1)/(x) 求 f(t)（给定右边）。
3. 【挑战·函数方程】f(x)+3f(−x)=2x+4，求 f(x)。
4. 【挑战】f(x)−2f((1)/(x))=x，求 f(2)。

## 我会了吗 Self-check

- [ ] f(2)、f(a+1) 我会正确代入求值
- [ ] 复合 f(g(x)) 由内到外，知道顺序一般有别
- [ ] 会用换元法由 f(x+1)=… 求 f(x)
- [ ] 会用待定系数设 f(x)=ax+b 求解析式
- [ ] 函数方程会用 x→1/x 代换联立消元求 f(x)
