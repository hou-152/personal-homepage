# Phase 03：Case 页与验证

状态：completed

## 目标

- case 页从证据罗列升级为“业务问题 -> 工作流 -> Agent 分工 -> 交付物”的直观案例页。
- 完成构建与资源体积检查。

## 已完成

- case 页新增链路概览和外部证据按钮。
- Vite 生产打包通过。
- 产物体积检查：JS gzip 77KB，CSS gzip 6KB，站内 demo 片段 5MB，poster 122KB。

## 验证说明

完整 `npm run build` 中的 `tsc --noEmit` 在本机卡住无输出；已单独跑 Vite build 验证页面可打包。构建过程中发现 `node_modules/@esbuild/darwin-arm64/bin/esbuild` 文件名异常为 `esbuild 2`，已复制为正确文件名后恢复 Vite 构建。
