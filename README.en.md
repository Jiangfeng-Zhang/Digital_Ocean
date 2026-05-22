# Digital Ocean

A static personal website cluster — a small galaxy of interconnected sub-sites, deployed on GitHub Pages and accessible from mainland China.

The main site adopts the **Digital Ocean** theme: a full-screen Canvas particle system simulates data currents, mouse movement creates ripples, and scrolling down takes you from the ocean surface into the deep sea, revealing AI capabilities layer by layer.

## Site Map

| Path | Name | Description |
|---|---|---|
| `/` | Digital Ocean (Main) | Full-screen deep-sea particle scene with scroll-driven narrative |
| `/dust/` | DUST | A chronicle of technological change, preserving stories of people and eras past |
| `/mirror/` | Mirror · Under the Lamp | Private chat interface powered by DeepSeek API — a warm, intimate listening experience |
| `/rimlog/` | RimLog · Edge Log | An observation vessel on the Digital Ocean with multi-screen terminal: Bridge / Ship's Log / World Port Chart / Radio Room |
| `/news/` | Joural · Daily | AI industry daily news aggregator, auto-fetches from news.daheiai.com, merges into daily reports with lazy loading and full-text search |
| `/microera/` | Micro · Era | AI-driven topic ideation and content direction refinement tool |
| `/resume/` | Resume · OS | LLM Agent-based resume optimization framework: structured modeling + JD matching |

## Quick Start

### Local Preview

The project is pure static — no build tools required. Start the HTTP server with PowerShell:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File server.ps1
```

Visit `http://localhost:8004/` in your browser.

### Updating News Daily Data

The News sub-site (Joural · Daily) fetches the latest 6 issues from https://news.daheiai.com/ daily and merges them into the corresponding daily reports:

```powershell
python scripts\fetch_news.py         # Incremental update (daily use)
python scripts\fetch_news.py --full  # Force full re-fetch
```

Or double-click `update_news.bat`.

### Deploy to GitHub Pages

1. Push the repository to GitHub
2. Go to repo Settings → Pages
3. Source: **Deploy from a branch**, branch `main`, directory `/ (root)`
4. Wait a few minutes, then visit `https://<your-username>.github.io/<repo-name>/`

## Tech Stack

- Pure static HTML / CSS / JavaScript, zero npm dependencies
- Canvas 2D particle system (main site ocean effect)
- CSS-only animations (scanlines, pulses, scroll reveals)
- IntersectionObserver for scroll-triggered animations + lazy loading
- DeepSeek API integration (Mirror sub-site chat)
- SVG vector world map (RimLog Nav panel)
- Python crawler (News sub-site data fetching and daily report merging)
- PowerShell local dev server

## License

MIT