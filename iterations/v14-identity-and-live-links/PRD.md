# v14 Identity And Live Links PRD

## 背景

V13 已经把首页后半部分收束为代表作品、作品背后的思考、交付证据和持续建造记录，但 Identity 区仍然像一个小型 dashboard：左侧身份宣言、右侧解释卡、黄色标签和 `01 / 06 / ∞` 统计同时存在，视觉上显得拼接和用力。

同时，碳水蛋白质配额卡已经有两个可长期分享的线上入口：

- CloudBase: `https://fat-loss-tool-prod-0504-da3dc1df-1428481707.tcloudbaseapp.com/?v=DCWC1P-6`
- GitHub Pages: `https://hou-152.github.io/carb-protein-quota-card/?v=719df8b`

本轮迭代目标是：把 Identity 改成人物介绍，而不是仪表盘；把碳水配额卡项目卡接入可公开访问的双线上入口。

## 本轮目标

1. 重做 Identity 区：
   - 保留人物身份和 Da Capo 解释。
   - 删除四个黄色标签。
   - 删除 `01 / 06 / ∞` 三张统计卡。
   - 让右侧更像自然介绍和当前重点提示。

2. 更新碳水蛋白质配额卡项目链接：
   - 主 Demo 使用 CloudBase。
   - 备用 Demo 使用 GitHub Pages。
   - 保留 GitHub 源码仓库。
   - 不在首页展示本地 `127.0.0.1:4330`。

3. 保持页面稳定：
   - 不改技术栈。
   - 不改长期定位文档。
   - 保持桌面和移动端可读。

## 信息架构调整

### Identity 区

改为两栏：

- 左栏：身份声明
- 右栏：Da Capo 说明 + 当前重点作品

删除：

- `focus-list`
- `stat-row`

可保留一个低调的当前重点提示：

> 当前重点：代表作品《serious AI 内参》；旁证作品持续补齐中。

### 项目卡片链接

项目卡片支持可选第二个 Demo 链接：

- `demoLabel`
- `demoUrl`
- `secondaryDemoLabel`
- `secondaryDemoUrl`

碳水蛋白质配额卡：

- `demoLabel: "CloudBase"`
- `demoUrl: CloudBase URL`
- `secondaryDemoLabel: "GitHub Pages"`
- `secondaryDemoUrl: GitHub Pages URL`

## 非目标

- 不处理个人主页部署。
- 不处理 Git 状态异常。
- 不新增截图素材。
- 不把本地预览地址作为公开链接。

## 验收标准

- Identity 区不再出现黄色标签和三张统计卡。
- Identity 区视觉更像人物介绍，不像 KPI dashboard。
- 碳水蛋白质配额卡项目卡显示 CloudBase 和 GitHub Pages 两个线上入口。
- 页面仍能通过 Vite build。
- 桌面和移动端截图无明显溢出。
