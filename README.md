# Digital Ocean · 数字海洋中的微光

> 每个数据节点都是一缕微光，散落在数字海洋深处的坐标。

一个部署在 GitHub Pages 上的静态个人网站集群，纯 HTML / CSS / JavaScript 实现，零 npm 依赖，国内可直接访问。主站以 **数字海洋** 为核心意象——全屏 Canvas 粒子系统模拟信息洋流，鼠标移动产生涟漪，向下滚动即从海面"下潜"至深海，各节点能力层层递进地展开。

## 设计哲学

不是把功能堆在一起，而是用一段叙事把它们串起来：

- **海面** —— 粒子流动、涟漪跟随，看似随机的光点其实是信息洋流的具象
- **下潜** —— 滚动即下潜，从光到暗，从喧嚣到沉思
- **深海** —— 各个子站像深海中的节点，各自承载一种能力：记录、对话、观测、聚合、生成

每个子站都有自己的气质，但共享同一片海。

## 站点导航

| 路径 | 名称 | 简介 |
|---|---|---|
| `/` | 数字海洋（主站） | 全屏深海粒子场景，滚动下潜的叙事体验 |
| `/dust/` | DUST · 尘 | 技术变革编年史，记录数字时代的逝去与留存 |
| `/mirror/` | 镜 · 灯下 | 接入 DeepSeek API 的对话界面，暖光下的倾诉体验 |
| `/rimlog/` | RimLog · 外沿记录层 | 数字海洋上的观测船，多屏终端：驾驶台 / 航行日志 / 世界海图 / 无线电 |
| `/news/` | Journal · 日报 | AI 行业日报聚合，每日自动抓取并合并为日报，支持懒加载与全文搜索 |
| `/microera/` | micro · era | AI 驱动的选题演化工具，把模糊选题变成可筛选、可融合、可锁定的内容方向 |
| `/resume/` | Resume · OS | 基于 LLM Agent 的简历优化框架，结构化建模 + JD 动态匹配与多版本生成 |

## 项目结构

```
Digital_Ocean/
├── index.html              # 主站（数字海洋）
├── 404.html                # 自定义 404 页面
├── server.ps1              # 本地开发服务器（PowerShell HttpListener）
├── update_news.bat         # 一键更新日报的 Windows 批处理
├── .env.example            # DeepSeek API 配置模板
├── .gitignore
├── .nojekyll               # 禁用 Jekyll，保留 _ 开头的资源目录
│
├── assets/                 # 共享静态资源（CSS / 字体 / 图标）
├── dust/                   # DUST · 尘
├── mirror/                 # 镜 · 灯下
├── rimlog/                 # RimLog · 外沿记录层
├── news/                   # Journal · 日报
│   ├── index.html          # 日报前端（纸质感 + 模态阅读）
│   ├── news-data.js        # 前端加载的日报数据
│   ├── news-data.json      # 同源 JSON 版本（便于二次消费）
│   └── state.json          # 抓取状态（last_issue_num / last_fetch_date）
├── microera/               # micro · era
├── resume/                 # Resume · OS
└── scripts/                # 数据抓取与提交脚本
    ├── fetch_aihot.py      # 从 aihot.virxact.com 抓取日报（当前主力）
    ├── fetch_news.py       # 备用抓取脚本（news.daheiasi.com）
    └── commit_*.ps1        # GitHub REST API 提交脚本
```

## 快速上手

### 1. 本地预览

项目为纯静态站点，无需构建工具。使用 PowerShell 启动内置 HTTP 服务器：

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File server.ps1
```

默认访问 `http://localhost:8004/`。服务器会自动处理目录路由（如 `/news/` → `news/index.html`）与 404 回退。

### 2. 配置 DeepSeek API（可选）

Mirror（镜 · 灯下）等子站依赖 DeepSeek API。复制模板并填入你的密钥：

```powershell
Copy-Item .env.example .env
# 编辑 .env，填入 DEEPSEEK_API_KEY
```

```ini
DEEPSEEK_API_KEY=sk_xxxxxxxxxxxxxxxx
DEEPSEEK_API_URL=https://api.deepseek.com
DEEPSEEK_MODEL=deepseek-v4-flash
```

> `.env` 已在 `.gitignore` 中忽略，不会提交到仓库。前端通过运行时读取（部署时需自行注入），不再硬编码任何密钥。

### 3. 更新 News 日报

Journal · 日报 的数据来自 [aihot.virxact.com](https://aihot.virxact.com/agent) 的公开 API，每日一期、连续无遗漏：

```powershell
python scripts\fetch_aihot.py        # 抓取并合并最新日报
```

脚本会：

1. 调用 `GET /api/public/dailies?take=100` 获取日报列表
2. 调用 `GET /api/public/daily/{date}` 获取每日详情
3. 将 `sections` 结构转换为现有的 `{items, companies, cats, summary}` 格式
4. 校验日期连续性，输出到 `news/news-data.js` 与 `news/news-data.json`
5. 更新 `news/state.json` 中的 `last_issue_num` 与 `last_fetch_date`

或双击 `update_news.bat` 一键执行。

### 4. 部署到 GitHub Pages

1. 将仓库推送到 GitHub
2. 进入仓库 **Settings → Pages**
3. Source 选择 **Deploy from a branch**，分支选 `main`，目录选 `/ (root)`
4. 等待几分钟，访问 `https://<你的用户名>.github.io/<仓库名>/`

## News 日报自动化

为保证日报"每日一期、连续不断"，已配置自动化任务：

- **信息源**：`https://aihot.virxact.com/agent` 公开 API
- **抓取频率**：每日定时（北京时间晚间）
- **抓取脚本**：`scripts/fetch_aihot.py`（带重试机制，区分客户端错误与服务器错误）
- **分类映射**：

  | 原始 section | 内部分类 |
  |---|---|
  | 模型发布 / 更新 | `model` |
  | 产品发布 / 更新 | `tool` |
  | 行业动态 | `industry` |
  | 论文研究 | `open-source` |
  | 技巧与观点 | `tutorial` |

- **状态追踪**：`news/state.json` 记录最后抓取期号与日期，支持增量更新与缺口检测

前端阅读体验：

- 纸质感卡片列表，每期展示"◆ 今日重磅新闻"摘要 + 公司标签 + 分类标签
- 点击卡片打开模态阅读视图，支持分类筛选与全文搜索
- `IntersectionObserver` 驱动的无限滚动懒加载

## 技术栈

- **前端**：纯静态 HTML / CSS / JavaScript，零 npm 依赖
- **视觉效果**：Canvas 2D 粒子系统（主站海洋粒子 + 涟漪交互）
- **动画**：CSS-only 扫描线 / 脉冲 / 滚动淡入
- **交互**：IntersectionObserver 驱动滚动动画与懒加载
- **AI 能力**：DeepSeek API（Mirror 对话 / Resume 简历优化 / Microera 选题演化）
- **可视化**：SVG 矢量世界地图（RimLog Nav 面板）
- **数据管线**：Python（urllib + ssl）抓取与日报合并
- **本地开发**：PowerShell HttpListener 静态服务器
- **部署**：GitHub Pages（`.nojekyll` 保留 `_` 开头的资源目录）

## 数据来源

| 子站 | 数据来源 | 说明 |
|---|---|---|
| News · 日报 | [aihot.virxact.com](https://aihot.virxact.com/agent) | 公开 API，每日一期 AI 行业日报 |
| Mirror · 灯下 | DeepSeek API | 用户自备 API Key |
| Resume · OS | DeepSeek API | 用户自备 API Key |
| Microera | DeepSeek API | 用户自备 API Key |

## 安全说明

- 所有 API Key 通过 `.env` 环境变量管理，**严禁硬编码**到 HTML / JS
- `.env` 已加入 `.gitignore`，仅 `.env.example` 作为模板提交
- 历史版本中曾出现密钥泄露，已通过提交 `21d4903` 清理并改为环境变量注入

## 许可

MIT
