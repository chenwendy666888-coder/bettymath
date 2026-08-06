# 上传到 GitHub 的说明（放这一整包）

这一包是"放 GitHub 就行"的全部文本成品：讲义 / 练习 / 大纲 / 根知识表 / 知识图谱 / SKILL。
**真题卷（zip/PDF）不在这里**——那些走 Project 上传（因为要解压 + 逐页渲染，web_fetch 干不了）。

## 上传步骤
1. 新建一个 **public** 仓库（保持 public，我才能用 web_fetch 读到）。
2. 把本包**解压后的内容放到仓库根目录**（不要再套一层文件夹），即根目录直接是 index.html / lectures/ / syllabus/ ...
3. 开 GitHub Pages：Settings → Pages → Branch 选 `main` `/(root)` → 保存。

## 上传后把这些 raw 链接发我（替换 <你> / <仓库>）
新对话里我会 web_fetch 这些拿最新版：
- SKILL:    https://raw.githubusercontent.com/<你>/<仓库>/main/SKILL_继续填充指南.md
- 根知识表: https://raw.githubusercontent.com/<你>/<仓库>/main/syllabus/root-base.html
- 主考纲:   https://raw.githubusercontent.com/<你>/<仓库>/main/syllabus/master-syllabus.md
- 骨架讲义: https://raw.githubusercontent.com/<你>/<仓库>/main/lectures/01_algebra-basics.html

## 分工速记
- **GitHub(public)** = 讲义/练习/大纲/root-base/图谱/SKILL（可 fetch、实时最新）
- **Project 上传** = 只放真题 zip（光剑 + 他校）
- **Instruction** = 规矩 + 上面几个 raw 链接
- **Memory** = 进度状态
