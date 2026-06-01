# v10 Homepage Featured Work Entry PRD

## Goal

把首页从“方法介绍感”调整为“代表作品入口”：访客第一眼先看到侯斯博 / Da Capo 和当前最值得看的《serious AI 内参》，再进入轻量 Demo、完整证据链、其他作品和联系方式。

## Scope

- 顶部导航压缩为：首页 / 代表作品 / 作品证据 / 关于我 / 联系。
- 首页接入常用 Da Capo 头像，替换原来的 DC 方块门牌。
- 首屏右侧从抽象流程图改为《serious AI 内参》工作台预览。
- 首屏提供三个入口：播放 90 秒演示、看信息流 Demo、看完整证据链。
- 代表作品区锚点改为 `#featured-work`，其他项目证据锚点改为 `#project-evidence`。

## Out Of Scope

- 不在本轮制作真实视频文件。
- 不改变 AI 内参轻量 Demo 的六步交互逻辑。
- 不改变完整证据链子页面的信息结构。
- 不引入新的前端框架或视觉系统。

## Acceptance

- 桌面首屏左右结构清楚，右栏承担视觉焦点。
- 移动端导航、头像、按钮和工作台预览不溢出。
- `#featured-work`、`#project-evidence`、`#ai-neican-demo`、`#/ai-neican-case` 能正常跳转。
- `npm run build` 通过。
