# SKILL · 光剑数学"数学大树"讲义项目 — 继续填充指南

> **给新对话里的 Claude：** 这是一个持续进行的数学讲义项目的交接文档。把它当作 skill/system 指令读。用户会让你"继续填充"某些模块。请**严格**按下面的规范、风格、构建流程和验证要求产出，保证与已完成的部分完全一致。
>
> **用户如何启动新对话：** 把本文件 + 任一份现有**双语讲义 HTML**（作模板/骨架，推荐 `01_algebra-basics.html`）+（如需真题）`光剑四年制模拟卷.zip` / `国际学校模拟题_-春招备考.zip` 一起上传，然后说"继续填充 G2 四边形"之类。你要先 `view` 那份模板 HTML，复用它的骨架。

---

## 0. 一句话项目背景
为一位备考**光华剑桥（光剑，光剑=Guangjian/GuangJian Cambridge）4 年制入学考**的学生（用户的妹妹）搭建一套**双语、从零、交互式 HTML** 数学讲义 + 练习 + 知识图谱 + hub 网站。她考**英文数学卷**、**真·零基础**、以后要读 **A-Level / Further Maths**。目标不只是应试，而是**搭一整棵数学大树的地基**（小学→初中系统化查缺补漏 → 光剑层 → AMC 枝桠 → 衔接 A-Level）。

---

## 1. 铁律（Non-negotiable，务必全部遵守）

1. **双语"先英文后中文"**（她考英文卷）：
   - 标题：英文主标题 + 中文副标题（如 `Triangles` / `三角形`）。
   - 每节开头一个 **Key terms 关键词** 术语表（绿框 `.terms`），列该节英文数学术语 + 中文。
   - 概念：先一行英文（`class="enh"`，前缀显示 `EN`），紧跟中文（`class="zh"`，前缀显示 `中`）。英文简洁如考试口吻，中文负责讲懂。
   - 题目：**英文指令**（Solve/Simplify/Expand/Factorise/Evaluate/Rationalise/Find…）+ 中文注解；数学符号本身通用。
   - UI（目录、按钮、进度）也中英对照。
2. **练习一律不给提示/思路**，只给纯题目；**讲义正文的讲解和例题可以详细**（分步 `.steps`）。练习答案折叠在 `ans()` 里，只放最终答案（可极简步骤）。
3. **真题标注**：出现真题/同型题必须标来源 —— `【真题·某卷】` / `【类似·某卷】` / `【他校·校名】` / `【AMC-年份】`。主线光剑，其他名校题作拓展并标学校。
4. **所有数学先用 sympy 验证**再写进讲义；**所有 HTML 用 node 校验 JS**：`new Function(scriptContent)` 必须通过。SVG 折线/多边形所有点必须在 viewBox 内。
5. **回复用中文**、语气温暖鼓励、一步一步来（用户常回复"继续"推进）。
6. 工作目录 `/home/claude/work/`；成品复制到 `/mnt/user-data/outputs/` 并用 `present_files` 呈现。

---

## 2. 数学大树 · 考纲与进度

**四大支柱 + AMC 枝桠 + A-Level 预备枝**，每块内部按 0→1 台阶：🟢初步 → 🟡中阶 → 🔴光剑/AMC。标签：⭐光剑必考 / 🏆AMC / 🎓A-Level。
（完整版见 `syllabus/master-syllabus.md` = `数学大树_主考纲v2.md`，务必让用户一并提供或参考。）

### 已完成（双语）✅
- **P1 代数基本功** Algebra Basics（幂/乘法公式含杨辉三角/因式分解/根式/分式）
- **P2 图像基础** Graphs（数轴/解集/坐标/看图/**画线与阴影**/用图求范围）
- **P3 不等式** Inequalities（一次/组/二次/绝对值/分式/均值/配方恒成立 + 他校拓展）
- **D 换元与代数变形**（整体换元/对称式/对称因式分解/配方逼值/大数字换元）
- **E 根式·数列·归纳**（等差等比/找规律/三角形数排列/根式裂项/平方差连乘/数学归纳法）
- **G1 三角形**（内角和/全等/相似/重心中线/面积法海伦，6 张 SVG）

### 有中文版、待双语化 🟡
- **A 一元二次方程与韦达**（文件 `A_quadratics-vieta.html`）
- **B 函数与复合函数**（文件 `B_functions.html`）

### 待建 ⏳（填充队列，建议顺序）
1. **几何**：G2 四边形 / G3 圆 / G4 翻折·旋转 / G5 锐角三角比（+方位角航行应用）/ G6 坐标几何（+向量·黄金分割）
2. **计数·概率·数论**：F1 排列组合（接杨辉三角→C(n,k)）/ F2 概率 / F3 数论（+AMC 数字枝）/ F4 统计
3. **应用与建模**：最优化利润 / 行程 / 方位角航行
4. **AMC 枝桠专题**：数论 tricky / 根号 tricky / 新定义·绝对值 / 逻辑·袋鼠
5. **数感 Base 根**（可选，真·从零：负数/分数比例/根号入门/变号原理）
6. 把 A、B 双语化
7. 每份新讲义配一份**练习页**（HTML 计时/折叠 + 书写版 MD）

---

## 3. 设计系统（CSS tokens + 结构）

**颜色/字体 tokens（`:root`）：**
```
--bg:#F4F6FB; --surface:#FFFFFF; --ink:#1B1B2A; --muted:#6A6A82; --line:#E3E6F0;
--indigo:#4A43C4; --indigo-deep:#2E2A6B; --indigo-soft:#EEF0FC;
--amber:#C77A15; --amber-soft:#FCF2DF; --green:#1F8A5B; --green-soft:#E6F5EE;
--rose:#C0453B; --rose-soft:#FBEDEC; --radius:14px;
--shadow:0 1px 2px rgba(30,30,60,.05),0 8px 24px rgba(30,30,60,.06);
--font:-apple-system,BlinkMacSystemFont,"PingFang SC","Microsoft YaHei","Segoe UI",Roboto,sans-serif;
```
**布局：** sticky 顶栏（eyebrow + h1 + 进度条 `progFill`/`progLabel`）→ 左侧目录 `nav.toc`（一次显示一节）→ 内容卡 `section.card` → 底部 pager（上一节 / **学完了✓** / 下一节；标记 done 后自动跳下一节）。移动端目录变抽屉（`menuBtn`/`scrim`）。

**关键 class：**
- `.terms`（绿框术语表）、`.enh`（英文，`::before`="EN"）、`.zh`（中文，`::before`="中"）、`.zh-title`（标题下的中文副标题）
- `.example`/`.ex-title`/`.steps`/`.step`/`.ex-ans`（例题分步 + 绿色答案）
- `.practice`/`.practice-head` + `<button class="reveal" onclick="ans(this)">` + `.answer/.answer-inner`（折叠答案）
- `.note`（琥珀提示）、`.note.warn`（红色易错）
- 徽章 `.badge`：`gk`=★ Often tested 常考(琥珀)、`core`=★ Must-know 必背(靛蓝)、`hard`=★ Harder 难题(红)、`warn`(红)
- `.check-item`/`.check-box`（`tick()` 自查打勾）、`.parent`（给家长的话）
- 他校拓展：`.stag`（学校色标：pinghe 绿 / shiwai 琥珀 / lingke 红 / huaer 靛蓝）、`.xschool`、`.xpref`、`.ex-tag`
- 杨辉三角互动：`pascalPick(r)` + `PASCAL_EXP` 字典（第0~6行展开）

**JS 行为：** 内容用 `const S = [...]`（见下），`render()` 渲染当前节、目录高亮、pager、进度；`ans(btn)` 折叠答案并切换"显示/隐藏 Show/Hide"；`tick(el)` 打勾；进度条只统计 `track:true` 的节。**不要用 localStorage 于讲义**（hub 可用但要 try/catch）。

---

## 4. 构建配方（复用骨架，最省事）

**核心技术 `stamp()`：** 读一份现有双语讲义当骨架，替换 `<title>`、eyebrow、h1，补 `hard`/`warn` 徽章 CSS，给 render 的 badge 逻辑加上 `hard`，再把 `const S = [ … ]` 整段换成新的 JSON。

```python
import json
def B(*p): return "".join(p)                     # 拼 body
def terms(x): return f'<div class="terms"><b>Key terms 关键词</b>：{x}</div>'
def kf(x): return f'<span class="kbd-formula">{x}</span>'   # 公式块

def stamp(outfile, eyebrow, h1, S, skeleton="01_algebra-basics.html"):
    sk=open(skeleton).read()
    # 1) 换 title / eyebrow+h1（按骨架里实际字符串替换）
    # 2) 补徽章样式：在 .badge.core{...} 后插入
    sk=sk.replace('.badge.core{background:var(--indigo-soft);color:var(--indigo);}',
      '.badge.core{background:var(--indigo-soft);color:var(--indigo);}\n  .badge.warn,.badge.hard{background:var(--rose-soft);color:var(--rose);}')
    # 3) render badge 支持 hard
    sk=sk.replace("s.badge==='gk'?'<span class=\"badge gk\">★ Often tested 常考</span>':''",
      "s.badge==='gk'?'<span class=\"badge gk\">★ Often tested 常考</span>':s.badge==='hard'?'<span class=\"badge hard\">★ Harder 难题</span>':''")
    # 4) 换 S 数组
    a=sk.index('const S = ['); b=sk.index('const tocList=')
    sk=sk[:a]+'const S = '+json.dumps(S,ensure_ascii=False)+';\n'+sk[b:]
    open(outfile,'w').write(sk)
```

**S 数组每节结构（dict）：**
```python
dict(key="s1", nav="Angles 内角",  # 目录标签(中英)
     num="01",                     # 显示序号；不计入进度的用 ""
     track=True,                   # 是否计入进度条
     badge="gk",                   # 可选: gk / core / hard（不填则无）
     title="Angles & special triangles",  # 英文主标题
     zh="内角和与特殊三角形",              # 中文副标题
     body=B(...))                  # 用 B() 拼；含 terms()/.enh/.zh/example/practice
```
`intro` 和 `end`（小结+`.parent` 给家长）通常 `track=False, num=""`。

**Body 写法要点：**
- 每节先 `terms('<span class="t">term 术语</span> · …')`。
- `<h3 class="blk">Explanation 讲解</h3>` 起讲解；概念用 `<p class="enh">…EN…</p>` 后接 `<p class="zh">…中…</p>`。
- 公式用 `kf('...')`。例题用 `.example`（分步 `.steps>.step` + `.ex-ans`）。
- 练习：`.practice` + `<ol><li>English instruction 中文注解</li>…</ol>` + reveal 按钮 + `.answer`（只放答案）。
- 用 `\u2264/\u2265` 等直接写 ≤≥、上标用 ² ³ ⁿ、根号 √、分数用 ⁄ 或文字。避免依赖 MathJax（讲义不加载外部库）。

**SVG（几何/图像必用，python 生成保证几何正确）：**
- 数轴、坐标系、抛物线、三角形等**用 python 计算坐标**再拼 SVG 字符串，内联进 body。
- 坐标映射示例（坐标系 300×250）：`X(x)=150+x*24; Y(y)=120−y*20`，采样时把 y clamp 在 [−5.2,5.2]、x 在 [−5,5] 内，保证不越界。
- 每个 SVG 加中英标题小字。生成后**校验所有点在 viewBox 内**。

---

## 5. 验证 & 校验（每份必做）

```bash
# 数学：sympy 逐条验证例题/练习答案（务必 timeout，避免卡住）
timeout 60 python3 -c "import sympy as sp; ...; print('ok')"

# HTML：node 校验内嵌 JS 语法
node -e "const fs=require('fs');const h=fs.readFileSync('FILE.html','utf8');
const m=h.match(/<script>([\s\S]*)<\/script>/);
try{new Function(m[1]);console.log('✓ JS通过');}catch(e){console.log('✗',e.message);}"
```
练习按钮数、Key terms 数、SVG 数都顺手数一下确认齐全。

---

## 6. 并入网站 + 打包（每批完成后）

站点结构（`site/`，全相对路径，可上 GitHub Pages）：
```
index.html   hub 首页（按支柱分组卡片；卡片有 状态徽章 + Open + 练习链接 + 已学勾选[localStorage try/catch]）
map.html     知识图谱（竖版：数感→图像→代数→几何→计数概率数论→应用→AMC；点节点看 前置↑/解锁↓/联立↔；标已掌握；顶部两条进度条 全部/⭐光剑）
lectures/    讲义（文件名用 ASCII，如 G2_quadrilaterals.html）
practice/    练习（.html + 书写版 .md）
syllabus/    master-syllabus.md + checkpoints.md
README.md
```
**整合步骤：**
1. 新讲义复制到 `site/lectures/`（ASCII 名）和 `/mnt/user-data/outputs/`。
2. 更新 `index.html` 对应卡片：`st` 从 `todo` 改 `双语`/`中文`，填 `lec` 路径（及练习 `pr`）。用重生成 catalog 的方式最稳。
3. 校验 index 所有 `href` 指向真实文件、JS 通过。
4. 更新 `map.html` 的 `_kgraph_data.json` 里该节点 `status:"done"`（或在 index 卡片对应）。
5. 重新打包：`cd site && zip -r ../maths-study-hub.zip . -x ".*"`。
6. `present_files` 呈现 zip（+ 单独的新讲义 html）。

知识图谱节点 id 参考：num, numline, coord, readg, shade, alg, eq, vieta, ineq, func, seq, subst, tri, quad, circ, trans, trig, cgeo, perm, prob, nt, stat, app, nav, ntx, surdx, newdef, logic。

---

## 7. 内容锚点 · 已验证的真题/竞赛型（放进对应讲义，务必标来源）

- **根式裂项**【真题·光剑】：Σ 1/√(n+√(n²−1))，n=1,3,…,49 = **5**。恒等式 √(n+√(n²−1)) = √((n+1)/2)+√((n−1)/2)，每项化为 √((n+1)/2)−√((n−1)/2) 裂项相消。→ 模块 E。
- **对称多项式因式分解**【类似·光剑竞赛】：x²y+xy²+y²z+yz²+z²x+zx²−x³−y³−z³−2xyz = **(x+y−z)(x−y+z)(−x+y+z)**（选 C）。→ 模块 D。
- **含绝对值二次·讨论解个数**【真题·光剑模拟】：x²−100|x−10|=k，双谷图（左谷 −3500@x=−50，右谷 −1500@x=50，交界峰 100@x=10）。随 k：>100→2、=100→3、−1500~100→**4**、=−1500→3、−3500~−1500→2、=−3500→1、<−3500→0。标准答案 **C(0,2,3,4)**。→ 模块 A tricky。
- **三角形数排列**【真题·光剑春招】：Tₙ=n(n+1)/2，T₆₂=1953、T₆₃=2016 → 2013 在**第 63 行第 60 个**。→ 模块 E。
- **平方差连乘**【他校·世外】：(1+2)(1+2²)(1+2⁴)…，×(2−1) 触发，x=2^(2n)−1，x+1=2¹²⁸ → **n=64**。→ 模块 E。
- **配方逼值**【他校·平和】：a²+b²+c²+4≤ab+3b+2c ⇒ (a−b/2)²+¾(b−2)²+(c−1)²≤0 ⇒ a=1,b=2,c=1 ⇒ 200a+9b+c=**219**。→ 模块 D / 不等式。
- **大数字换元**【他校·领科】：(2020−a)(2019−a)=2021，设 u=2020−a,v=2019−a（u−v=1,uv=2021）⇒ u²+v²=**4043**。→ 模块 D。
- **几何**：相似**面积比 = 相似比²**；海伦公式 面积=√(s(s−a)(s−b)(s−c))，3-4-5→**6**；重心分中线 **2:1**、三中线到重心分**三等面积**。
- **模块 A/B tricky（真题·光剑春招）**：fff(x)=771→x=99；fg=gf 只一根 ⇒ Δ=0（a=7）；曲线绕原点旋转 180° 反求参 p+q=−9；函数方程 2ˣ+x·f(2⁻ˣ)=x²+x³ ⇒ f(8)=145/24；a³+1/a³=18（由 a+1/a 凑，降幂）。

**光剑爱考（重点）**：几何（三角形/四边形/圆/翻折/相似/坐标几何，只不考立体）、二次函数/韦达/因式分解、找规律递推、**AMC 数字题（整除/末位/数位乘积/完全平方数）**、**带根号 tricky**、组合概率（随机游走接杨辉三角）。
**明确不考**（全卷 0 次）：立体几何/体积/表面积、复数虚数、集合论（这些仅作 🎓A-Level 预备可选枝）。

---

## 8. 给用户的启动模板（可直接复制到新对话）

> 我在继续一个数学讲义项目。附件是：① 项目 skill 指南（本 md）② 一份现有双语讲义当模板 ③ 主考纲 md（④ 如需真题：模拟卷 zip）。
> 请**严格按 skill 指南的双语规范、设计系统、构建配方和验证流程**，帮我继续填充 **【G2 四边形 / G3 圆 / …】**：先 sympy 验证数学，再复用模板骨架生成双语 HTML 讲义（含 SVG），node 校验 JS，最后告诉我文件。做完一份我会说"继续"。

---

*保持大树的一致性：同样的配色、同样的双语结构、同样的验证严谨度。用户重视"从零到一建牢地基"，不要为省事跳过基础或省略验证。*

---

# 【SKILL 更新 v2 · 2026-08】新方向与优先任务队列

> 用户重新校准了方向：这不只是"填讲义"，而是**建成熟一整套体系**。下面是新增的、优先级更高的任务。**慢慢来、一件一件做；一个对话做不完就明确告诉用户停在哪。**

## 新的"根"：以人教版初中 29 章为骨架（不要再自己编树）
用户上传了《初中数学知识归纳总结》（人教版七上–九下 29 章），这才是诚实的地基。已据此生成 **`syllabus/root-base.html`（根知识表）**：29 章逐章标注光剑侧重（⭐核心/✓会考/➖少考/✕不考）+ 对应我们的模块，另加"➕ 光剑加料（超初中）"10 项（韦达/复合函数/换元/数列归纳/组合/数论tricky/绝对值讨论/均值不等式/向量方位角/AMC）。
- **唯一明确不考**：第 29 章 投影与视图/立体几何。其余 28 章都是光剑地基。
- 源文件存于 `syllabus/junior-high-knowledge.md`。
- 新讲义/考点都应能回指到这张根表。

## ⚠️ 扫描铁律（之前做错了，必须纠正）
**之前只用 pdftotext 提取文字 → 图片型几何图、扫描题、带图题目全漏了，只是"部分扫描"。这不合格。**
- **完整扫描 = 逐页把 PDF 渲染成图片、用 `view` 逐张看**（含每一张几何图、函数图、表格）。命令示例：
  ```bash
  pdftoppm -png -r 130 卷子.pdf /tmp/pg   # 渲染每页为 png
  # 然后对每个 /tmp/pg-*.png 用 view 工具逐张查看
  ```
- 容器状态会重置：光剑卷需重新解压 `光剑四年制模拟卷.zip`（约 10 份 PDF + 内层 rar）；他校 `国际学校模拟题_-春招备考.zip`（spring/ 下 16 PDF + 57 docx）。
- **不许**只凭 pdftotext 的关键词计数下结论；那只能当粗筛。

## 优先任务队列（按顺序，逐个对话做）
1. ✅ **① 根知识表**（已完成，见 root-base.html）。
2. **② 完整视觉扫描光剑卷**（重头，约 1–2 个对话）：逐页逐图看完全部光剑卷 → 产出**光剑考点全表**（每个考点 + 出现在哪套哪题 + 频次 → **识别光剑侧重点**）。以根知识表为清单逐项打勾/计频。
3. **③ 知识点 ↔ 真题 双向对应**：基于②，每个知识点挂上"哪套卷哪题考它"，反向每题挂知识点；surface 进知识图谱/hub（点知识点→看真题；点真题→看考点）。
4. **④ 光剑每套卷解析版 HTML**（每对话 1–3 套）：逐题解析、标考点、验证答案，放进 hub 新板块 `真题解析 Papers/`；hub 首页加对应卡片。
5. **⑤ 他校卷**同样处理（扫描+解析+对应），优先级最低。

## 建议
- **②最耗额度，最适合在一个新鲜对话里从头做**：附 `光剑四年制模拟卷.zip` + 本 SKILL + `root-base.html`（或其 md）。
- 每套卷解析建议复用讲义骨架（`stamp()`）或做成简洁真题解析页；每题标 ✅sympy 验证。
- 始终：双语规范、练习不给提示、真题标来源、数学 sympy 验证、HTML node 校验。

## 现有站点关键文件（`maths-study-hub.zip` 解压）
- `index.html`（hub，含 参考区：根知识表/知识图谱/主考纲/自查）
- `map.html`（知识图谱，竖版，节点 id 见上文）
- `lectures/`：01/02/03（双语预备）、A/B（中文）、D/E/G1（双语）——**每份右上角已有 ⬇MD / 🖨PDF**
- `practice/`（5 套）、`syllabus/`（root-base.html / syllabus.html / checkpoints.html + md）
- 待建：G2–G6、F1–F4、应用、AMC、A/B 双语化、数感Base；以及上面②③④⑤。
