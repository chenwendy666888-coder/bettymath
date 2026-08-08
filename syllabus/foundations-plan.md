# 预备篇建设总规范 · Foundations Build Spec（浙教版 · 双语 · 从零 · 可自查）

> 用途：妹妹长期自习"预备篇"。每个模块**单独开一个对话**建（建完家长 check），本文件是所有对话共用的规范 + 可直接粘贴的提示词。

---

> > **数感分层（新增 F0c）**：数感分两档——
> `F0a_number-sense`（基础版数感，快速过）、`F0c_common-traps`（中阶＝常见易错坑：不等式变号、(a+b)²、−3²vs(−3)²、√(a²)=|a|、通分、约分、增根、除以变量/0、负号分配、移项变号、x²=k双解、百分比先增后减）。
> 建议顺序：F0a → F0c → F0b(解题方法) → F1。

> **更新（数感/方法已拆两份）**：预备篇最前面现在是两份"根中之根"——
> `lectures/F0a_number-sense.html`（数感 11 块：符号/绝对值/大小/分数小数百分数/幂根/估算/拆分补偿/倍半/整除/位值/比例）与
> `lectures/F0b_problem-solving.html`（解题方法 12 块：Pólya四步/画图列表/找规律/分类讨论/数形结合/整体换元/特殊值/逆推/猜验/拆子问题/排除/回头检查）。
> 建议顺序：先 F0a → F0b → 再 F1。这些数感与方法小块在后续每个模块都会反复引用。

## 一、总原则（每个模块都要满足）

1. **从零 & 讲"为什么"**：当她**完全没有数学/英文概念**来写。不只给结论，重点讲 intuition 与"为什么"（例：为什么 y=x 是一条斜线；slope 为什么代表 x、y 的关系、绝对值越大越陡；b 为什么是 x=0 时的 y 值=y 截距）。
2. **双语 先英后中**：标题中英；每节 Key terms 术语表；概念 EN→中；题目英文指令 + 中文注解；中文不比英文少。她英文词汇也从零，术语要反复出现、可对照。
3. **浙教版口径**（不是人教版）：章节顺序/叫法按浙教版（见根知识表已按浙教版重建；若未重建，先按七上/七下/八上/八下/九上顺序）。
4. **知识 + 配题**：每节讲解后配**例题（可详解）**；每模块末尾配**练习区（只给纯题目、不给提示/思路）**。练习含：基础题 + **光剑真题的"简化/同型改编版"**（改数字/情境/设问，**标注【同型·某卷】**，不照搬原题）+ 偶尔一点小创新/小挑战题（标【挑战】）。
5. **配对交互实验室**：能动手的概念，讲义里链接到 `interactives/graphing-lab.html` 对应章（坐标基础/一次/二次/三角/指数对数/线性不等式/二次不等式），让她"看讲义 + 去 lab 拖"结合。
6. **「我没懂」记录**：每个讲义 `</body>` 前加 `<script src="../assets/confusion.js"></script>`（右下角浮标，她随手记疑问，家长可导出复盘）。
7. **分数排版**：讲义里分数一律用堆叠分数（CSS .fr，上下+横线），不要用斜杠 a/b（易误读成"或"）；斜杠只留给并列/或。
8. **可自查**：每模块结尾一个"我会了吗"自查清单（可勾选，存 localStorage）。

## 二、技术铁律

- 数学先 **sympy** 验证；HTML 的 JS 用 **node `new Function()`** 校验；几何/图用 **python 生成 SVG 并验证在画布内**。
- 复用骨架讲义（stamp）风格：`lectures/01_algebra-basics.html`。
- **增量交付**：带 `lectures/` 路径的小 zip；若联动 index/map，一并给出并说明改了什么。

## 三、模块清单（浙教版顺序）

| # | 模块 | 文件名建议 | 配对 lab 章 |
|---|---|---|---|
| 1 | 图像与坐标 + 一次函数（从 y=x 讲起） | `lectures/F1_coord-linear.html` | 坐标基础 / 一次 |
| 2 | "元"与"次" + 一元一次方程/不等式 | `lectures/F2_yuan-ci.html` | 线性不等式 |
| 3 | 几何入门（点线面角） | `lectures/F3_geometry-intro.html` | — |
| 4 | 相交线与平行线（性质 + 判定） | `lectures/F4_lines.html` | — |
| 5 | 三角形初步 | `lectures/F5_triangles-intro.html` | — |
| 6 | 二次函数初步 | `lectures/F6_quadratic-intro.html` | 二次 |
| 7 | 不等式与阴影（先一次再二次） | `lectures/F7_inequalities.html` | 线性/二次不等式 |
| 8 | 三角初步（锐角三角比直觉） | `lectures/F8_trig-intro.html` | 三角 |

> 之后一起学（暂不放预备篇）：指数/对数、圆、相似、解直角三角形、统计概率。

---

## 四、可直接粘贴的提示词（把 ▲ 换成对应模块）

```
接手 bettymath 项目的"预备篇"一个模块。先 web_fetch 这四个规范（以 raw 为准）：
- SKILL:   https://raw.githubusercontent.com/chenwendy666888-coder/bettymath/main/SKILL_继续填充指南.md
- 根知识表: https://raw.githubusercontent.com/chenwendy666888-coder/bettymath/main/syllabus/root-base.html
- 主考纲:   https://raw.githubusercontent.com/chenwendy666888-coder/bettymath/main/syllabus/master-syllabus.md
- 骨架讲义: https://raw.githubusercontent.com/chenwendy666888-coder/bettymath/main/lectures/01_algebra-basics.html
并读这份总规范：
- https://raw.githubusercontent.com/chenwendy666888-coder/bettymath/main/syllabus/foundations-plan.md

本次任务：做【模块▲：▲▲▲】的"从零·双语·自查"讲义 + 配套练习。
硬性要求（见总规范一/二）：从零讲"为什么"、双语先英后中、浙教版口径、
每节 Key terms + 例题详解、模块末练习区只给纯题目（含光剑同型改编【标注来源卷】+ 偶尔【挑战】）、
配对 graphing-lab 对应章的链接、</body> 前加 <script src="../assets/confusion.js"></script>、
结尾"我会了吗"自查清单。数学先 sympy、HTML 用 node 校验、图用 python 生成 SVG 验证。
交付：lectures/▲▲▲.html + .md（增量小 zip，带 lectures/ 路径），并说明在 index/map 怎么挂入口。
```

### 各模块填空
- 模块1：`F1_coord-linear` — 图像与坐标 + 一次函数。**重点**：坐标系是什么、点(x,y)怎么定位、**为什么 y=x 是斜线**、slope 的 intuition（x↔y 的变化率、|m| 越大越陡、正负方向）、b 是 y 截距（x=0 时的 y 值、到 y=0 的距离）。配 lab 坐标基础/一次章。
- 模块2：`F2_yuan-ci` — **"元"=未知数个数、"次"=最高次数**；一元一次 vs 一元二次的区别；一元一次方程/不等式的解法与数轴表示。配 lab 线性不等式。
- 模块3：`F3_geometry-intro` — 点、线、射线、线段、角（度量、分类、余角补角），几何语言与记号。
- 模块4：`F4_lines` — 相交线（对顶角、邻补角、垂线）、平行线的**性质**与**判定**（同位角/内错角/同旁内角）。
- 模块5：`F5_triangles-intro` — 三角形分类、内角和、外角、三边关系、全等初步。
- 模块6：`F6_quadratic-intro` — 从 y=x² 讲起：开口/顶点/对称轴/与 y=x² 的平移伸缩；配 lab 二次章。
- 模块7：`F7_inequalities` — 一元一次不等式(组)+数轴/阴影 → 一元二次不等式(根之外/根之内)；配 lab 线性/二次不等式章。
- 模块8：`F8_trig-intro` — 用直角三角形讲 sin/cos/tan 的 intuition（对边/邻边/斜边之比），特殊角。

---

## 五、家长复盘

- 她在讲义右下角「🙋 我没懂」里记的疑问，点"⬇ 导出"会下成 txt，你回来看她卡在哪，再针对性讲。
- 每套练习她做完 → 你对答案 → 把错的/不懂的告诉我（哪个对话都行），我出针对性同型题继续练。
