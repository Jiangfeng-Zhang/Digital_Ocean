# Digital Ocean · 数字海洋

一个静态个人星系网站集群，部署在 GitHub Pages 上，国内可直接访问。

主站以 **数字海洋** 为意象——全屏 Canvas 粒子系统模拟数据洋流，鼠标移动产生涟漪，向下滚动从海面"下潜"到深海，AI 能力层层递进展示。

## 站点导航

| 地址 | 名称 | 功能 |
|---|---|---|
| `/` | 数字海洋（主站） | 全屏深海粒子场景，滚动下潜叙事体验 |
| `/dust/` | DUST · 尘 | 技术变革编年史，记录数字时代的逝去与留存 |
| `/mirror/` | 镜 · 灯下 | 接入 DeepSeek API 的私密对话界面，温暖的灯下倾诉体验 |
| `/rimlog/` | RimLog · 外沿记录层 | 数字海洋上的观测船，多屏终端：驾驶台 / 航行日志 / 世界海图 / 无线电 |
| `/bluespace/` | 蓝色空间 · 时序薯盘 | 星图式金融数据可视化界面 |
| `/microera/` | micro · era | AI 驱动的选题演化与内容方向锁定工具 |
| `/resume/` | darkforest · resume · os | LLM Agent 简历优化框架，结构化建模 + JD 动态匹配 |

## 快速上手

### 本地预览

项目为纯静态站点，无需构建工具。使用 PowerShell 启动 HTTP 服务器：

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File server.ps1
```

默认访问 `http://localhost:8004/`。

### 部署到 GitHub Pages

1. 将仓库推送到 GitHub
2. 进入仓库 Settings → Pages
3. Source 选择 **Deploy from a branch**，分支选择 `main`，目录选 `/ (root)`
4. 等待几分钟，访问 `https://<你的用户名>.github.io/<仓库名>/`

## 技术栈

- 纯静态 HTML / CSS / JavaScript，零 npm 依赖
- Canvas 2D 粒子系统（主站海洋粒子效果）
- CSS-only 动画（扫描线、脉冲、淡入滚动）
- IntersectionObserver 驱动滚动动画
- DeepSeek API（Mirror 子站的对话功能）
- SVG 矢量世界地图（RimLog Nav 面板）
- PowerShell 本地开发服务器

## 许可

MIT