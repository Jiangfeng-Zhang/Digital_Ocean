var newsData = [
  {
    num: '2026-05-27',
    date: '2026-05-27',
    time: '',
    summary: '本期<b>Google DeepMind</b>将<b>SynthID</b>扩展到搜索与Chrome，并与OpenAI、ElevenLabs等合作，加速行业透明化；<b>Qwen3.7 Max</b>在代码前端评测中排名第4，超越GLM-5.1，与Claude Opus 4.6持平。',
    issueRange: '1197',
    companies: ['Qwen / Zhipu', 'OpenAI / Google', 'Cerebras', 'OpenAI', 'Google'],
    cats: ['产品工具', '技巧教程', '行业观察', '模型动态'],
    items: [
      {
        company: 'Qwen / Zhipu',
        cat: 'model',
        title: 'Qwen3.7 Max在Code Arena前端评测中跻身前四，超越GLM-5',
        body: '第三方评测显示<b>Qwen3.7 Max</b>（20250517版）在Code Arena: Frontend排名第4，为中国厂商最佳，与<b>Claude Opus 4.6</b>持平于智能代理网页开发任务。',
        links: [
          { text: 'https:', url: 'https://x.com/arena/status/2059297720079393107' },
        ]
      },
      {
        company: 'Google',
        cat: 'tool',
        title: 'Google DeepMind将SynthID内容溯源扩展到搜索和Chrome',
        body: '<b>SynthID</b>验证在Gemini中已使用超5000万次，现扩展至搜索和Chrome，用户可直接问“是否由AI生成”。多段视频展示跨平台水印检测。',
        links: [
          { text: 'https:', url: 'https://x.com/GoogleDeepMind/status/2059235184130535436' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'YC推出TesterArmy：用自然语言描述即可自动化测试',
        body: '<b>TesterArmy</b>支持跨浏览器和设备运行真实测试，检测每次PR的回归，可从自然语言生成测试用例，几分钟即可开始使用。',
        links: [
          { text: 'https:', url: 'https://x.com/ycombinator/status/2059242619818082404' },
          { text: 'https:', url: 'https://x.com/ycombinator/status/2059242618203377904' },
        ]
      },
      {
        company: 'OpenAI',
        cat: 'tutorial',
        title: '向阳乔木用Codex分析3年X数据，总结爆款内容公式',
        body: '分析3.4GB帖子数据发现：最爆的内容类别包括编程/产品、资源合集、学习方法。<b>爆款公式</b>=真实工具+明确场景+三步路径。最佳发帖时间为周末晚5-11点。',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2059236374767980560' },
          { text: 'https:', url: 'https://x.com/vista8/status/2059260610345660694' },
          { text: 'https:', url: 'https://x.com/vista8/status/2059255732911186123' },
        ]
      },
      {
        company: '',
        cat: 'tutorial',
        title: '行业观察：AI已能自主提需求、开发、测试并上线',
        body: '多个播客提到当前趋势：让【AI自己提需求】、开发、测试、上线，人类彻底解放。有人担忧最终产品只能给AI自身使用。',
        links: [
          { text: 'https:', url: 'https://x.com/oran_ge/status/2059077685138411523' },
        ]
      },
      {
        company: 'Cerebras',
        cat: '',
        title: 'Cerebras倡导主权AI，美国、阿联酋、印度正在与其合作',
        body: '<b>主权AI</b>理念：各国可自行构建、部署和治理AI。Cerebras称美国、阿联酋、印度正基于其硬件建设国家AI能力，强调速度和容量是战略优势。',
        links: [
          { text: 'https:', url: 'https://x.com/cerebras/status/2059284672258130228' },
        ]
      },
      {
        company: 'OpenAI / Google',
        cat: 'industry',
        title: 'Google DeepMind与OpenAI、ElevenLabs等合作推广SynthID水印',
        body: 'SynthID已标记超1000亿内容，现联合<b>OpenAI</b>、ElevenLabs和Kakao在其模型中集成该水印，加速行业内容透明度标准建立。',
        links: [
          { text: 'https:', url: 'https://x.com/GoogleDeepMind/status/2059235181274202500' },
        ]
      }
    ]
  },
  {
    num: '2026-05-26',
    date: '2026-05-26',
    time: '',
    summary: '本期社区热度集中在<b>Qwen3.5/3.6</b>的本地微调与训练实验，同时<b>SkillOpt论文</b>提出将markdown skill作为可训练参数的新方法。行业方面，<b>DeepMind</b>连破9道埃尔德什难题，<b>前端初级岗位</b>招聘量同比暴跌62%。 | 本期关注多款实用AI工具和模型动态：歸藏发布<b>小红书</b>/小绿书组图生成器Skill，海螺AI上线广告生成器和短片生成，网易有道开源<b>子曰4</b>全模态模型，千问3.7编程测评全球第二，国产Agent模型闯入第一梯队，还有AI输入法和macOS菜单栏启动器开源。 | 本期最大事件是<b>教皇Leo XIV</b>发布关于AI的【通谕】，Simon Willison做了深度分析；此外<b>智谱GLM-5.1-highspeed</b>模型实现3秒写代码、<b>Andy Matuschak</b>演讲认为编码代理将解放计算、<b>Krea</b>开放Seedance 2.0无限使用，以及<b>微信仪表盘</b>开源引发社区关注。 | 本期快讯聚焦<b>Callab_AI</b>的发布，它让AI语音代理可直连传统电话系统。 | 本期YC推出三个AI创新项目：<b>BioStack</b>医疗AI模拟、<b>Mount</b>代理保险、<b>Campfire</b>AI原生ERP；同时向阳乔木Chrome插件收获<b>600+用户</b>并计划开源，还分享了Vibe Coding网站工具。 | 本期重点关注<b>Qwen3.7-Max隐式缓存</b>自动生效带来更快更便宜体验，<b>Manus移动端Projects</b>上线，以及多款实用开发工具与提示词技巧分享。',
    issueRange: '1191-1196',
    companies: ['Claude', 'Google', 'Meta', 'MiniMax', 'MiniMax / NVIDIA', 'Qwen', 'Zhipu'],
    cats: ['产品工具', '技巧教程', '模型动态', '行业观察'],
    items: [
      {
        company: 'Qwen',
        cat: 'model',
        title: 'Qwen3.5 27B Uncensored版本发布，完整保留15个MTP',
        body: '社区微调版<b>Qwen3.5-27B-uncensored-heretic-v2-Native-MTP-Preserved</b>正式发布，提供Safetensors、GGUF、NVFP4等多种量化格式。与Qwen3.6定位不同，该版侧重通用对话，MTP保留完整。HuggingFace地址：https://huggingface.co/llmfan46/Qwen3.5-27B-uncensored-heretic-v2-Native-MTP-Preserved',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/LocalLLaMA/comments/1to0aet/qwen35_27b_uncensored_heretic_native_mtp/' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: '专为AI聊天上下文管理设计的Markdown编辑器发布',
        body: '基于<b>Tauri + React + TypeScript</b>构建，跨平台支持macOS/Windows/Linux。左侧CodeMirror编辑器，右侧实时预览，支持8套主题、Vim模式、PDF导出等。项目地址：https://t.co/31v49zigHv',
        links: [
          { text: 'https:', url: 'https://x.com/geekbb/status/2059187280607351066' },
        ]
      },
      {
        company: 'Qwen',
        cat: 'tutorial',
        title: '开发者尝试在5090上本地训练Qwen3.6 27B的AR到扩散转换',
        body: '基于<b>open-dllm</b>项目，尝试通过<b>QLoRA + NVFP4</b>在单张5090上训练27B模型。过程中遭遇电源线烧毁，建议将功耗限制在400W以下。项目代码：https://github.com/scrya-com/dLLM-castlehill',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/LocalLLaMA/comments/1to0qpb/qwen_36_27b_ar_diffusion_local_training_on_5090/' },
        ]
      },
      {
        company: '',
        cat: 'tutorial',
        title: 'SkillOpt新方法：将Markdown Skill文件视为可训练参数',
        body: '论文将markdown skill文件通过编辑预算和验证门控进行优化，1-4次编辑即可收敛。优化后的Skill可直接跨代理转移，如从Codex迁移到Claude Code后获得<b>+59.7分</b>提升。论文：https://arxiv.org/pdf/2605.23904',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/LocalLLaMA/comments/1to1mey/skillopt_treats_markdown_skill_files_as_trainable/' },
        ]
      },
      {
        company: 'Google',
        cat: 'industry',
        title: '谷歌DeepMind连破9道埃尔德什数学难题',
        body: 'AI系统一次性解决9道【埃尔德什问题】，其中包括一道卡住人类<b>56年</b>的未解难题。这标志着AI在纯数学推理上取得重大突破。',
        links: [
          { text: 'https:', url: 'https://www.qbitai.com/2026/05/425455.html' },
        ]
      },
      {
        company: '',
        cat: 'model',
        title: '网易有道开源子曰4全模态模型，27B参数TTS克隆准确度超97%',
        body: '网易有道发布<b>子曰4</b>全模态模型（27B参数），视觉数理同规模SOTA，纯文本数理准确率81.4%。同步开源<b>TTS</b>引擎，3秒克隆原声，支持14种语言，克隆准确度超97%。',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2059153797235228955' },
        ]
      },
      {
        company: '',
        cat: 'model',
        title: '千问3.7编程权威榜单全球第二，跻身第一梯队',
        body: '阿里<b>千问3.7</b>在编程权威测评中仅次于Claude，位列全球第二，跻身编程模型第一梯队。',
        links: [
          { text: 'https:', url: 'https://www.qbitai.com/2026/05/425150.html' },
        ]
      },
      {
        company: '',
        cat: 'model',
        title: '国产Agent模型闯入全球第一梯队，限时免费',
        body: '一款国产Agent模型（深度适配OpenClaw、Claude Code等）刚刚闯入全球第一梯队，目前<b>限时免费</b>提供使用。',
        links: [
          { text: 'https:', url: 'https://www.qbitai.com/2026/05/424851.html' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: '歸藏发布小红书/小绿书组图生成器Skill，自动匹配页数',
        body: '歸藏分享其小红书/小绿书组图生成器Skill配合Codex使用，能自动识别拼图内容并匹配对应页数，还支持<b>HTML排版</b>和高质量图片搜索，避免被标注AI。项目地址：https://x.com/op7418/status/2059093924996960308',
        links: [
          { text: 'https:', url: 'https://x.com/op7418/status/2059093924996960308' },
          { text: 'https:', url: 'https://x.com/op7418/status/2059176154125480426' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'AI输入法改造：基于Weasel+rime，回车即可AI翻译',
        body: 'Geek分享Windows系统级AI输入法方案，基于<b>Weasel TSF</b>和librime，支持拼音输入后回车调用AI（默认<b>DeepSeek</b>），将中文转换为目标语言或风格，原地替换。项目地址：https://t.co/HxPRZpzphN',
        links: [
          { text: 'https:', url: 'https://x.com/geekbb/status/2059127889317224694' },
        ]
      },
      {
        company: 'MiniMax',
        cat: 'tool',
        title: '海螺AI发布Viral Ads Generator和60秒电视剧生成',
        body: '海螺AI上线<b>Viral Ads Generator</b>广告生成器，上传产品图片一键生成多格式短视频广告，成本最低$0.5/视频；同时支持60秒生成整集短剧，瞄准短视频剧集市场。',
        links: [
          { text: 'https:', url: 'https://x.com/Hailuo_AI/status/2059132370775916571' },
          { text: 'https:', url: 'https://x.com/Hailuo_AI/status/2059119719278641343' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: '开源macOS菜单栏AI启动器，本地运行语言模型',
        body: 'Geek推荐一款开源的macOS菜单栏AI启动器，使用Swift构建，基于<b>MLX</b>在Apple Silicon上本地运行语言模型。项目地址：https://t.co/h5B1EaYLo1',
        links: [
          { text: 'https:', url: 'https://x.com/geekbb/status/2059156830006174091' },
        ]
      },
      {
        company: '',
        cat: 'tutorial',
        title: '技巧：安装Skill后需写入Agent.md以优化触发',
        body: '向阳乔木提醒，只安装Skill还不够，需将Skill写入<b>Agent.md</b>说明中，才能更好地触发和应用。安装链接：https://t.co/Y1kOBWTfy6',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2059087898709004702' },
        ]
      },
      {
        company: 'Zhipu',
        cat: 'model',
        title: '智谱GLM-5.1-highspeed内测：3秒内语音转代码',
        body: '开发者karminski-牙医实测<b>智谱GLM-5.1-highspeed</b>，语音输入后3秒内完成语音转文字、模型判断、tool call修改代码和渲染，体验拉满。该模型正向企业用户开放内测。',
        links: [
          { text: 'https:', url: 'https://x.com/karminski3/status/2059086729680994497' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'Krea开放Seedance 2.0无限使用，面向Pro/Max/Business会员',
        body: '歸藏发现<b>Krea</b>本周为Pro、Max和Business会员开放<b>Seedance 2.0</b>无限使用，进一步卷AI视频生成。',
        links: [
          { text: 'https:', url: 'https://x.com/op7418/status/2059096803212153202' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: '微信仪表盘开源，仅一天后转为私有库',
        body: '向阳乔木发布<b>微信仪表盘</b>开源项目，但为避免风险次日转私有库，呼吁尽快fork。项目地址：https://t.co/bChc3QObWB',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2059080766345412797' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'Anubis OSS更新：Mac上本地LLM基准测试工具新增模型浏览下载功能',
        body: '开源Mac应用<b>Anubis OSS</b>v3.6发布，新增“Browse Models”按钮可直接从ollama.com拉取模型。支持Ollama、LM Studio、MLX等。仓库：https://github.com/uncSoft/anubis-oss',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/LocalLLaMA/comments/1tnt3i6/added_direct_model_downloads_right_from_the_ui_in/' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: '教皇Leo XIV发布AI通谕，Simon Willison深度解读',
        body: '教皇Leo XIV发布通谕《Magnifica Humanitas》，聚焦AI伦理、可解释性、环境成本和责任归属。Simon Willison称其为关于AI伦理最清晰的文本，并指出通谕受到<b>Anthropic</b>联合创始人的影响。原文：https://simonwillison.net/2026/May/25/encyclical-on-ai/',
        links: [
          { text: 'https:', url: 'https://simonwillison.net/2026/May/25/encyclical-on-ai/#atom-everything' },
          { text: 'https:', url: 'https://x.com/simonw/status/2059065719086792804' },
          { text: 'https:', url: 'https://simonwillison.net/2026/May/26/corey-quinn/#atom-everything' },
          { text: 'https:', url: 'https://www.reddit.com/r/singularity/comments/1tnr9me/whats_this_subs_take_on_the_vatican_response_to_ai/' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: 'Andy Matuschak演讲：编码代理将打破应用模型和编程专业化的牢笼',
        body: 'Lee Robinson推荐Andy Matuschak的新演讲，观点认为编码代理（Coding Agents）有望帮助摆脱两个牢笼：一是应用模型导致的计算一统化，二是编程专业化挤占了想象力和领域洞察。演讲地址：https://andymatuschak.org/tat',
        links: [
          { text: 'https:', url: 'https://x.com/leerob/status/2059095943190913214' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: '用户投诉Interview Man AI：实时反馈延迟大、建议泛泛、扣费问题',
        body: 'Reddit用户发帖称<b>Interview Man AI</b>面试练习工具存在实时反馈严重滞后、建议模板化、扣费后支持差等问题。提醒他人谨慎购买。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/singularity/comments/1tnv87w/dont_waste_money_on_interview_man_ai_posting_this/' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: '游戏mod作者因使用AI更新遭用户抵制，称此举为“原则问题”',
        body: 'Rimworld知名mod作者发现，一旦用户得知他用<b>AI</b>更新mod，就全部卸载。作者称之为“宗教式”反应，认为这不是好兆头，反映出部分用户对AI的强烈抵触。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/singularity/comments/1tntdui/users_who_rage_quit_my_software/' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'YC发布Callab_AI：AI语音代理直连传统电话系统',
        body: 'Callab_AI支持直接连接Cisco UCM、Mitel等传统PBX系统，无需迁移基础设施，为4000亿美元呼叫中心行业的58%的本地电话系统带来AI语音自动化。项目地址：https://www.ycombinator.com/launches/QTC-callab-ai-ai-voice-agents-for-legacy-phone-systems',
        links: [
          { text: 'https:', url: 'https://x.com/ycombinator/status/2059031556942164376' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: '向阳乔木Chrome插件上架数天获600+用户，即将开源',
        body: '向阳乔木透露其Chrome插件上线数天已有<b>600+用户</b>，并计划明天完善后【开源】，但担心律师函问题。下载地址：https://t.co/131vrI7aOt',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2058869268666826842' },
          { text: 'https:', url: 'https://x.com/vista8/status/2058795211703333314' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'YC推出Campfire：AI原生ERP系统',
        body: 'YC聚焦<b>Campfire</b>，一款AI原生ERP系统，帮助科技公司财务团队自动化核算、税务和投资者报告。公司完成3500万美元A轮融资，每季度ARR翻倍。',
        links: [
          { text: 'https:', url: 'https://x.com/ycombinator/status/2058949824616231203' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'YC发布BioStack：医疗AI模型临床模拟训练平台',
        body: 'YC新项目<b>BioStack</b>构建模拟环境，让医疗AI模型在真实临床数据上训练，将杂乱数据转化为后训练循环。项目地址：https://www.ycombinator.com/launches/QUp-biostack-platforms-realistic-healthcare-simulation-environments',
        links: [
          { text: 'https:', url: 'https://x.com/ycombinator/status/2058986459596812435' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'YC推出Mount：为自主AI代理提供安全与保险',
        body: 'YC新项目<b>Mount</b>专注于<b>AI代理安全与保险</b>，在代理造成损害前保护工作流、衡量剩余风险并通过专门保险转移风险。项目地址：https://www.ycombinator.com/launches/QUI-mount-the-ai-agent-insurance-carrier',
        links: [
          { text: 'https:', url: 'https://x.com/ycombinator/status/2058956261132222917' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: '向阳乔木分享Vibe Coding首个网站：一键粘贴生成可分享链接',
        body: '支持粘贴或上传【HTML、Markdown、SVG、Mermaid】生成可分享链接，可加密码，适合AI生成内容分享。已改为Cloudflare一键部署版。安装地址：https://t.co/Yq8XSmvkzZ',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2058939593588949066' },
        ]
      },
      {
        company: 'Claude',
        cat: 'industry',
        title: 'Anthropic联合创始人在教皇通谕发布会上演讲',
        body: 'Anthropic联合创始人<b>Chris Olah</b>受邀在教皇方济各二世通谕发布会上发表演讲，探讨【AI与人文价值】。全文地址：https://www.anthropic.com/news/chris-olah-pope-leo-encyclical',
        links: [
          { text: 'https:', url: 'https://x.com/AnthropicAI/status/2058983299092009421' },
          { text: 'https:', url: 'https://x.com/AnthropicAI/status/2058983299092009421' },
        ]
      },
      {
        company: 'Qwen',
        cat: 'model',
        title: 'Qwen3.7-Max隐式缓存自动上线，无需配置即可提速降费',
        body: '<b>Qwen3.7-Max</b>现支持隐式缓存，自动生效无需设置，开箱即用提升速度降低成本。同时提供显式缓存以获得更高确定性命中率。最佳实践：https://t.co/3hSs6zquBH',
        links: [
          { text: 'https:', url: 'https://x.com/Alibaba_Qwen/status/2058932656797368619' },
        ]
      },
      {
        company: 'MiniMax / NVIDIA',
        cat: 'model',
        title: 'NVIDIA展示2x DGX Sparks + MiniMax M2.7本地运行16个AI代理',
        body: '使用2台<b>DGX Sparks</b>配合<b>MiniMax M2.7 NVFP4</b>实现16个本地AI代理同时流式运行，无需云端API。演示视频来自mr-r0b0t。',
        links: [
          { text: 'https:', url: 'https://x.com/NVIDIAAI/status/2058921531481510074' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: '开源桌面应用整合AI代理、API客户端、SSH终端等开发者工具',
        body: '基于<b>Tauri</b>（Rust+Svelte）的桌面应用，将编程AI代理、SQL/NoSQL编辑器、SSH终端、远程文件浏览器和项目管理看板集成在一个界面中，减少应用切换。项目地址：https://t.co/b59OmR46UJ',
        links: [
          { text: 'https:', url: 'https://x.com/geekbb/status/2058883195194819046' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: '歸藏预告新Skill项目：一键生成公众号和小红书封面',
        body: '基于<b>PPT Skill</b>可一键生成微信公众号、小红书封面，也可基于文档生成3:4组图，自动处理截图素材并匹配，提升内容创作效率。',
        links: [
          { text: 'https:', url: 'https://x.com/op7418/status/2058925029203882187' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'Manus移动端上线Projects功能，支持组织项目工作',
        body: '<b>Manus</b>移动端新增Projects功能，可在手机上管理项目工作，从简单任务到高级工作流，支持共享文件、指令、技能和连接器。',
        links: [
          { text: 'https:', url: 'https://x.com/ManusAI/status/2058929042758480346' },
        ]
      },
      {
        company: 'Meta',
        cat: 'tool',
        title: 'LlamaParse原生支持HEIC文件解析，无需手动转JPEG',
        body: '<b>LlamaParse</b>现原生解析HEIC格式（苹果默认图片格式），适用于企业文件系统中的白板照片、扫描文档等，直接传入.heic文件即可解析。',
        links: [
          { text: 'https:', url: 'https://x.com/llama_index/status/2058910711728771476' },
        ]
      },
      {
        company: '',
        cat: 'tutorial',
        title: '向阳乔木分享PPT设计提示词，减少AI味适配AI Agent产品',
        body: '为传统媒体分享设计<b>PPT设计提示词</b>，风格对标Apple/Linear，配色克制，留白40%-60%。建议在Youmind中使用，或先用GPT生成提示词。详细提示词见原文代码块。',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2058901737868824872' },
          { text: 'https:', url: 'https://x.com/vista8/status/2058902147794862217' },
        ]
      }
    ]
  },
  {
    num: '2026-05-25',
    date: '2026-05-25',
    time: '',
    summary: '本期最重磅的是<b>Hyper3D</b>发布<b>Rodin Gen-2.5</b>模型，4秒生成百万面级3D资产，细节拉满；同时<b>PapersWithCode</b>网站被推荐为追踪AI论文的利器，美团<b>LongCat数字人模型</b>也支持本地部署，实用工具和观点同样值得关注。 | 本期多个实用工具和技巧值得关注，<b>SaaS-Bench</b>评测揭示AI全自动办公通过率最高仅3.8%，<b>SEELS</b>桌面应用支持在聊天中训练LoRA，<b>llama.cpp</b>保留KV Cache加速解码技巧可大幅提升本地模型响应速度。 | 本期AI速报聚焦多个实用技巧与行业观点，包括<b>Nivi分享的定制AI Prompt模板</b>、Ethan Mollick用<b>GPT-5.5 Pro</b>做事实核查、Simon Willison用Claude复现80年代经典游戏，以及Dan Shipper对<b>AI不会导致失业</b>的预测。 | 本期关注<b>MiniMax Speech 2.8</b>在影视业的深度应用、<b>Seedance 2</b>生成可看AI电影、【Codex开源】使用量数据披露，以及行业对AI编码质量和安全风险的持续讨论。 | 本期亮点包括<b>BitCPM-CANN</b>实现1.58-bit模型在华为昇腾NPU上的原生训练，以及社区分享的<b>fork conversations</b>技巧和<b>Cloudflare</b>托管小网站的解决方案，同时有多个实用的开发者<b>新工具</b>发布。',
    issueRange: '1186-1190',
    companies: ['Claude', 'GitHub', 'Huawei', 'Meta', 'MiniMax', 'OpenAI', 'OpenAI / Claude'],
    cats: ['产品工具', '技巧教程', '模型动态', '行业观察'],
    items: [
      {
        company: '',
        cat: 'model',
        title: '美团开源数字人模型 LongCat-Video-avatar-1.5',
        body: '输入图片+音频即可生成口播视频，<b>本地部署</b>需求约16GB显存（int8），实测支持480p输出，可通过AI提升分辨率，动漫人物也能泛化。来源：https://x.com/karminski3/status/2058745232058106207',
        links: [
          { text: 'https:', url: 'https://x.com/karminski3/status/2058745232058106207' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'Hyper3D 发布 Rodin Gen-2.5：全球最强3D生成模型',
        body: 'Rodin Gen-2.5支持4秒生成百万面模型，细节到毛孔级【局部和增量修改】，原生贴图算法，多模式适应不同需求。背后【影眸科技】获SIGGRAPH 2025最佳论文。来源：x.com/xiaohu/status/2058779268247867848',
        links: [
          { text: 'https:', url: 'https://x.com/xiaohu/status/2058779268247867848' },
        ]
      },
      {
        company: 'GitHub',
        cat: 'tool',
        title: 'PapersWithCode：实时追踪AI论文与GitHub热门repo',
        body: 'HuggingFace团队成员打造，<b>实时收录</b>最新论文和代码，支持按领域浏览、展示模型benchmark与HF地址，堪称AI领域的【网址导航】。项目地址：https://x.com/karminski3/status/2058701842469794195',
        links: [
          { text: 'https:', url: 'https://x.com/karminski3/status/2058701842469794195' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: '飞书支持Markdown下载，拥抱AI Agent生态',
        body: '飞书新增<b>Markdown下载</b>功能，为AI Agent提供更好的基建，被赞有前途。来源：https://x.com/vista8/status/2058856854579749314',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2058856854579749314' },
        ]
      },
      {
        company: 'OpenAI',
        cat: 'tutorial',
        title: 'ChatGPT Codex远程调用：合上笔记本也能继续运行',
        body: '利用ChatGPT调用远程电脑的codex，实现<b>合盖可用</b>，可控制Suno等工具生成内容。来源：https://x.com/vista8/status/2058718778754838693',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2058718778754838693' },
        ]
      },
      {
        company: '',
        cat: 'tutorial',
        title: '推荐AI生图提示词专家及开源Chrome插件',
        body: '推荐关注@xiaoxiaodong01，在AI生图提示词方面有大量探索。Chrome插件开源地址：https://t.co/0m7njsC8Li ，安装：https://t.co/hPnsUuAdgl',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2058820326851829847' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: 'Paul Graham：AI生成的创始人邮件容易被忽略',
        body: 'PG发现创始人用AI写邮件，风格硬朗，但读起来<b>感觉被欺骗</b>，难以认真读完。来源：https://x.com/paulg/status/2058844147092488401',
        links: [
          { text: 'https:', url: 'https://x.com/paulg/status/2058855820121498037' },
          { text: 'https:', url: 'https://x.com/paulg/status/2058844147092488401' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: '免费多提供商AI代理工具Tau发布，支持23个提供商',
        body: 'Tau是一款<b>免费</b>多提供商AI代理工具，原生对接23个提供商（Anthropic、OpenAI、DeepSeek等），提供文件编辑、终端执行、MCP等完整代理功能，所有提供商表现一致。项目地址：https://t.co/alJdFUnMc8',
        links: [
          { text: 'https:', url: 'https://x.com/geekbb/status/2058717306898018471' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'SEELS：Windows桌面应用，支持在聊天中纠正模型并训练LoRA',
        body: 'SEELS是一款Windows本地AI桌面应用，核心特色是<b>Teach按钮</b>允许用户直接纠正模型回答，累积数据后可一键触发<b>LoRA训练</b>，无需代码或终端。支持GGUF模型和语音模式。项目地址：http://tideforge.ai/seels',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/LocalLLaMA/comments/1tmxp03/i_shipped_a_windows_desktop_app_for_running_local/' },
        ]
      },
      {
        company: 'Meta',
        cat: 'tutorial',
        title: 'llama.cpp巧用保留KV Cache加速解码，大幅减少prompt处理时间',
        body: 'llama-server新增<b>保留KV Cache</b>功能，在模型生成后自动缓存生成的token，下次prompt处理时几乎瞬间完成。实测用Qwen3.6-35B处理大型网页，等待时间从5-30秒降至近乎立即。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/LocalLLaMA/comments/1tmw8x1/llamacpp_has_a_clever_trick_for_speeding_up_kv/' },
        ]
      },
      {
        company: 'Claude',
        cat: 'tutorial',
        title: '用Claude Code构建iPhone和Apple Watch应用，获1500+用户',
        body: '开发者用<b>Claude Code</b>构建定位辅助App LOC8，覆盖iPhone和Apple Watch，上线2个月获得<b>1500+用户</b>、收入$1.5k。核心经验：先理解真实痛点再用AI加速，效果远超“让AI凭空创造”。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/ClaudeAI/comments/1tmwizd/i_used_claude_code_to_build_an_iphone_app_apple/' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'AI生成波多黎各歌曲在TikTok爆火，5.5万人使用',
        body: '一名普通用户用AI为旅行视频生成配乐，制作的<b>波多黎各主题曲</b>在TikTok病毒式传播，已有5.5万人使用该音频，包括名人。展示了AI音乐创作的<b>大众化潜力</b>。',
        links: [
          { text: 'https:', url: 'https://x.com/venturetwins/status/2058690628893204495' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'Datasette 1.0a30发布：新增可定制Jump to菜单与Agent集成',
        body: '<b>Datasette 1.0a30</b>推出新的Jump to菜单，支持插件自定义。配套插件<b>datasette-agent 0.1a4</b>利用该钩子，可在菜单中直接启动Agent聊天，增强数据探索体验。项目地址：https://github.com/simonw/datasette/releases/tag/1.0a30',
        links: [
          { text: 'https:', url: 'https://simonwillison.net/2026/May/24/datasette/#atom-everything' },
          { text: 'https:', url: 'https://simonwillison.net/2026/May/24/datasette-agent/#atom-everything' },
        ]
      },
      {
        company: '',
        cat: 'tutorial',
        title: 'Nivi分享一套高级AI Prompt定制模板',
        body: 'AngelList联合创始人Nivi分享了一套由<b>Marc Andreessen</b>启发的定制Prompt，要求AI【优化真理与正确性】、提供反方观点、独立生成假设等。这套模板旨在提升AI输出的质量与深度。原文：https://x.com/nivi/status/2058641055935828261',
        links: [
          { text: 'https:', url: 'https://x.com/pmarca/status/2058669676352376906' },
        ]
      },
      {
        company: 'OpenAI',
        cat: 'tutorial',
        title: 'Ethan Mollick实测GPT-5.5 Pro作为事实核查工具',
        body: '沃顿教授Ethan Mollick发现<b>GPT-5.5 Pro</b>能准确核查整章内容的每个关键引用，唯一缺点是过于追求<b>细节</b>，会指出大量微小偏差。这对于学术写作和文档审核非常实用。',
        links: [
          { text: 'https:', url: 'https://x.com/pmarca/status/2058662554302570888' },
        ]
      },
      {
        company: 'Claude',
        cat: 'tutorial',
        title: 'Simon Willison用Claude将80年代Usborne游戏重制为网页版',
        body: 'Simon Willison将1983年书籍《Creepy Computer Games》中的游戏<b>Mad House</b>PDF喂给<b>Claude</b>，生成交互式JavaScript/HTML版本，并保留复古风格。项目链接：https://tools.simonwillison.net/usborne-mad-house',
        links: [
          { text: 'https:', url: 'https://simonwillison.net/2026/May/24/usborne-mad-house/#atom-everything' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: 'David Sacks：AI编程推动软件工程师需求上升',
        body: 'David Sacks引用数据称AI降低了编程成本，GitHub提交量同比增长【14倍】，导致更多软件需要管理，工程师岗位不降反增，质疑<b>AI导致大规模失业</b>的叙事。',
        links: [
          { text: 'https:', url: 'https://x.com/pmarca/status/2058660332047077745' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: 'Dan Shipper预测：AI不会导致失业，SaaS股票将上涨',
        body: 'Dan Shipper在Lenny Rachitsky播客中预测：AI使昨日的人类能力商品化，但人类会创造新价值；【AI不会引发大规模失业】，PM和设计师将受益；看好【Codex和Claude Code成为知识工作者新操作系统】，建议买入SaaS股票。视频：https://www.youtube.com/watch?v=4D3hDmGhFhA',
        links: [
          { text: 'https:', url: 'https://x.com/pmarca/status/2058665266687725800' },
          { text: 'https:', url: 'https://x.com/lennysan/status/2058669571679346957' },
          { text: 'https:', url: 'https://x.com/lennysan/status/2058634599320924381' },
        ]
      },
      {
        company: 'MiniMax',
        cat: 'tool',
        title: 'MiniMax Speech 2.8 发布，展示沉浸式语音并应用影视行业',
        body: 'MiniMax 展示<b>Speech 2.8</b>生成的声音效果，并与Storyverse合作意大利犯罪剧《Il Cinese》，精准还原口音与情感。该技术被行业媒体<b>Variety</b>报道。',
        links: [
          { text: 'https:', url: 'https://x.com/Hailuo_AI/status/2058591105189626025' },
          { text: 'https:', url: 'https://x.com/Hailuo_AI/status/2058591101129556189' },
          { text: 'https:', url: 'https://x.com/Hailuo_AI/status/2058591109090349157' },
        ]
      },
      {
        company: 'Claude',
        cat: 'industry',
        title: 'Anthropic onboarding 日视频走红，调侃 Karpathy 加入',
        body: '视频模拟<b>Michael Scott</b>风格介绍<b>Karpathy</b>加入Anthropic，引发社区热议，反映AI人才争夺的娱乐化传播。',
        links: [
          { text: 'https:', url: 'https://x.com/venturetwins/status/2058633784686518748' },
        ]
      },
      {
        company: 'Huawei',
        cat: 'model',
        title: 'BitCPM-CANN：开源 1.58-bit 三元量化模型在华为昇腾 NPU 上原生训练',
        body: 'OpenBMB发布<b>BitCPM-CANN</b>，首次在<b>华为昇腾NPU</b>上实现端到端1.58-bit训练。训练吞吐仅降低4.5%，推理内存降低8倍。0.5B~8B四个规模，8B模型用8T数据表现比肩Qwen3-8B。地址：https://github.com/OpenBMB/MiniCPM',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/LocalLLaMA/comments/1tmf63y/bitcpmcann_native_158bit_large_language_model/' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'Browser-use 团队发布终端 TUI 工具，用自然语言控制浏览器',
        body: '基于Rust编写的<b>终端TUI工具</b>，通过自然语言控制浏览器完成操作。支持登录态Chrome、无头浏览器或云端运行，自研LLM引擎+Chrome CDP协议。项目地址：https://t.co/wlVGWNBypj',
        links: [
          { text: 'https:', url: 'https://x.com/geekbb/status/2058564678855676179' },
        ]
      },
      {
        company: 'OpenAI / Claude',
        cat: 'tool',
        title: '本地看板工具让每张卡片对应一个 Claude Code 或 Codex 代理，支持并行执行',
        body: '开源<b>本地看板工具</b>，每张卡片可对应一个Claude Code/Codex代理，支持<b>并行执行</b>。代码托管地址：https://t.co/JunWOrDblt',
        links: [
          { text: 'https:', url: 'https://x.com/geekbb/status/2058547062241898529' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'AgentSwarms 平台发布 10 套游戏化交互式教学课件，免费学习 Agentic AI',
        body: '为摆脱枯燥的白皮书，作者在<b>AgentSwarms</b>平台上构建了10个<b>游戏化交互式</b>slide deck，涵盖系统Prompt、RAG、多Agent、生产部署等主题，免费在浏览器中体验。地址：http://agentswarms.fyi/learn',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/artificial/comments/1tmc38r/i_built_10_gamified_interactive_presentation/' },
        ]
      },
      {
        company: 'Claude',
        cat: 'tool',
        title: '开发者用 Claude Design + Sonnet 完全创建开源桌面开发工具集 dev-core-tools',
        body: '作者利用<b>Claude Design</b>和<b>Claude Sonnet</b>设计并实现了桌面开发工具集，涵盖开发者日常工具，开源免费。项目地址：https://github.com/bolorundurowb/dev-core-tools',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/ClaudeAI/comments/1tmd7c0/created_a_desktop_dev_tools_app_entirely_using/' },
        ]
      },
      {
        company: '',
        cat: 'tutorial',
        title: '用 Cloudflare 免费托管 AI 生成的小型网站：SSO、数据库一键集成',
        body: '分享如何用<b>Cloudflare Pages</b>托管Claude生成的mini网站，支持拖拽部署、免费SSO（50用户内）、D1数据库集成，且提供MCP Server配合Claude使用。贴士：超50人SSO需$7/人/月。原文：https://www.reddit.com/r/ClaudeAI/comments/1tmfxwg/',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/ClaudeAI/comments/1tmfxwg/small_victory_using_cloudflare_for_simple_hosting/' },
        ]
      },
      {
        company: '',
        cat: 'tutorial',
        title: '提升 AI 编码质量的技巧：fork conversations 并 rebase prompts',
        body: '分享简洁技巧：在prompt末尾让Agent先评估<b>置信度</b>，如&lt;100%则陈述疑问。然后<b>fork当前对话</b>保留上下文，在新对话中<b>rebase prompts</b>解答疑问，从而获得高质量Prompt。经验贴：https://fedemagnani.github.io/cs/2026/05/24/fork-your-conversations-and-rebase-your-prompts.html',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/ClaudeAI/comments/1tmfuoc/fork_your_conversations_and_rebase_your_prompts/' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: '研究观点：多 agent 循环失败是组织设计问题，而非 prompt 问题',
        body: '社区分析指出，多agent系统中的循环失败根源是<b>组织设计缺陷</b>而非Prompt不足。建议采用层级汇报结构（经理有权终止），而非对等聊天室。提出了5层结构+QA策略。原文：https://www.reddit.com/r/artificial/comments/1tme23u/',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/artificial/comments/1tme23u/multiagent_loop_failures_might_be_orgdesign/' },
        ]
      }
    ]
  },
  {
    num: '2026-05-24',
    date: '2026-05-24',
    time: '',
    summary: '本期看点：一个<b>Obsidian插件</b>让Claude Code直接编辑笔记；<b>DeepSeek GUI桌面版</b>发布；<b>llama.cpp</b>用户分享使用原生工具进行安全Web抓取的完整工作流；社区发现<b>Gemma 4</b>在低显存下连续推理后质量下降；<b>Qwen3.6</b>被用来玩DCSS游戏，非MTP版本表现良好但MTP版本存在工具调用问题。 | 本期热点集中在<b>DeepSeek V4 Pro</b>的超低定价引发<b>AI泡沫</b>讨论，同时<b>Claude Code</b>和<b>Codex</b>的实用工具与安全方案涌现，<b>Anthropic</b>高管呼吁全球AI放缓引发行业关注。 | 本期焦点包括<b>Vision LLM vs OCR</b>基准测试显示OCR更优且更便宜、<b>Claude Mythos</b>模型准备发布、<b>Claude Code</b>缓存成本技巧及多个实用工具开源发布。 | 本期开发者社区亮点纷呈：非程序员用<b>Claude Code</b>无代码构建了照片整理和跑步应用；Claude Code所有历史会话记录被发现并可被索引恢复；用户实测对比4款【视频生成MCP】；Google I/O发布<b>Gemini 3.5 Flash</b>和<b>Gemini Spark</b>等关键更新。 | 本期亮点：Google Gemini Omni 视频编辑能力获<b>Justine Moore</b>好评，测试显示其可无缝替换视频背景；【向阳乔木】分享Codex网络优化提示词，实用性强；Reddit社区热议<b>Claude Code</b>新特性及<b>MCP</b>应用实践，多篇教程值得关注。 | 本期焦点是<b>Claude Code</b>大规模误报安全策略引发社区强烈不满；多个实用工具和评测值得关注，包括<b>Apex-Testing</b>基准更新、小模型<b>Needle</b>在工具调用领域表现亮眼、以及利用路由层将编码成本降至<b>$16</b>的实操经验。',
    issueRange: '1180-1185',
    companies: ['Claude', 'Claude / Mcp', 'DeepSeek', 'Gemini', 'Gemini / Kimi', 'Gemma', 'Meta', 'OpenAI', 'OpenAI / Claude', 'OpenAI / Claude / DeepSeek', 'OpenAI / Suno', 'Qwen', 'Runway'],
    cats: ['产品工具', '技巧教程', '模型动态', '行业观察'],
    items: [
      {
        company: 'Qwen',
        cat: 'model',
        title: 'Qwen3.6玩DCSS游戏测试：非MTP版本表现良好，MTP版有工具调用bug',
        body: '用户测试<b>Qwen3.6-35B-A3B</b>玩开源游戏DCSS。非MTP版本表现不错；MTP版本存在<b>工具调用bug</b>，输出被乱码截断。模型能在低量化下运行，但功能受限。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/LocalLLaMA/comments/1tm9nx3/qwen_plays_pokemon_qwen_plays_dcss_qwen3635ba3bq4/' },
        ]
      },
      {
        company: 'Claude',
        cat: 'tool',
        title: 'Obsidian插件让Claude Code直接操作当前笔记',
        body: '一个Obsidian插件使<b>Claude Code</b>能直接操作当前笔记，支持一键<b>改写</b>、<b>拆条</b>、选题等操作。项目地址：https://t.co/7AYc76YF32',
        links: [
          { text: 'https:', url: 'https://x.com/geekbb/status/2058460240044322932' },
        ]
      },
      {
        company: 'DeepSeek',
        cat: 'tool',
        title: 'DeepSeek GUI桌面版发布，终端AI体验搬到图形界面',
        body: '<b>DeepSeek GUI</b>是桌面版DeepSeek TUI，支持多会话聊天、<b>流式输出</b>、工具调用审批，还能审查文件改动diff。项目地址：https://t.co/ZlrujSwIbZ',
        links: [
          { text: 'https:', url: 'https://x.com/geekbb/status/2058506545311453632' },
        ]
      },
      {
        company: 'Meta',
        cat: 'tutorial',
        title: 'llama.cpp原生工具实现安全Web抓取工作流',
        body: '用户分享在<b>llama-server</b>中启用原生工具<b>exec_shell_command</b>，通过<b>firejail</b>+<b>smolmachines</b>多沙箱化，安全执行wget抓取网页，实现本地AI驱动的Web RAG。详细步骤见帖子。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/LocalLLaMA/comments/1tm93ng/how_i_do_use_the_recent_llamacpp_native_tools_to/' },
        ]
      },
      {
        company: 'Gemma',
        cat: 'tutorial',
        title: 'Gemma 4 e2b在4GB显存下连续推理后质量退化',
        body: '运行<b>Gemma 4 e2b</b>在4GB显存（1650）上，连续推理30-40次后输出质量显著下降：回复变短、JSON缺字段。重启<b>llama-server</b>可恢复，可能为KV缓存或VRAM碎片问题。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/LocalLLaMA/comments/1tm9ao9/gemma_4_e2b_quality_degrades_after_3040/' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: '向阳乔木将在waytoagi开设GEO公开课',
        body: '向阳乔木（@vista8）宣布月底在<b>waytoagi</b>与姚老师开设【GEO公开课】，届时姚老师讲GEO，他推荐AI工具并分享AI使用实践。',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2058411571890758087' },
        ]
      },
      {
        company: 'OpenAI / Claude / DeepSeek',
        cat: 'model',
        title: 'DeepSeek V4 Pro定价仅为OpenAI和Claude的1/10，缓存几乎免费',
        body: '社区对比显示<b>DeepSeek V4 Pro</b>输入$0.435/M tokens，输出$0.87/M，比GPT-5.5便宜约11-34倍。同时其【缓存技术】使成本再降数倍，Opus用此技术成本可降10倍。链接：https://x.com/oran_ge/status/2058430850006667527；https://i.redd.it/wukg0iob513h1.jpeg',
        links: [
          { text: 'https:', url: 'https://x.com/oran_ge/status/2058430850006667527' },
          { text: 'https:', url: 'https://www.reddit.com/r/OpenAI/comments/1tm49d0/deepseek_just_popped_the_american_ai_bubble/' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: '开源工具Arc Gate/Arc Sentry：防范AI Agent指令注入攻击',
        body: '针对<b>AI Agent安全</b>，Arc Gate以100%阻断率通过54种工具投毒场景测试，Arc Sentry在USENIX攻击中Turn 3即拦截。提供代理和自托管方案。项目地址：https://github.com/9hannahnine-jpg/arc-gate；https://github.com/9hannahnine-jpg/arc-sentry',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/artificial/comments/1tm37ut/your_ai_agent_is_one_tool_call_away_from_doing/' },
        ]
      },
      {
        company: 'Claude / Mcp',
        cat: 'tool',
        title: '开源Cybersecurity MCP Server：让Claude获得实时侦察能力',
        body: 'MCP服务器为Claude添加<b>WHOIS查询</b>、<b>DNS枚举</b>、<b>Nmap端口扫描</b>、【SSL证书检查】、【技术栈指纹】等安全工具。全自动运行，数据不出本机。项目地址：https://github.com/gaoharimran29-glitch/Cybersecurity-MCP-Server',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/ClaudeAI/comments/1tm41s3/i_built_a_cybersecurity_mcp_server_that_gives/' },
        ]
      },
      {
        company: 'OpenAI / Claude',
        cat: 'tool',
        title: 'macOS菜单栏工具：实时显示Claude Code和Codex CLI的API用量',
        body: '开源工具在<b>macOS菜单栏</b>实时展示<b>Claude Code</b>和<b>Codex CLI</b>的API使用率和速率限制，方便开发者监控token消耗。项目地址：https://t.co/dPmPND8tHT',
        links: [
          { text: 'https:', url: 'https://x.com/geekbb/status/2058428531303174487' },
        ]
      },
      {
        company: 'Claude',
        cat: 'tutorial',
        title: '非程序员用Claude Code搭建硬件采购管理系统和CRM',
        body: '用户分享用<b>Claude Code</b>为数百台服务器构建跟踪门户，无缝集成监控软件。另一非编码者用Claude Code在3个月内建成功能完善的CRM，工作流为Claude Code→GitHub→Vercel。',
        links: [
          { text: 'https:', url: 'https://x.com/pmarca/status/2058382008049709079' },
          { text: 'https:', url: 'https://www.reddit.com/r/ClaudeAI/comments/1tm2jmh/need_expert_advice_to_a_noncoder/' },
        ]
      },
      {
        company: 'OpenAI / Suno',
        cat: 'tutorial',
        title: '向阳乔木用ChatGPT Codex开发Suno音乐播放器',
        body: '通过编写<b>Skill</b>，用户可躺着用<b>Codex</b>开发网站。正在构建一个Suno音乐播放器，将AI生成的歌曲集中展示。',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2058362811122852341' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: '分析：AI Agent落地的真正瓶颈不是模型能力，而是分布与记忆',
        body: '社区深度指出<b>AI Agent</b>失败主因：用户不会主动访问新界面、Agent不能主动出击、没有长期记忆。成功者如WhatsApp/Telegram上的Agent，具备【主动推送】和【跨周记忆】。项目地址参考：https://www.reddit.com/r/artificial/comments/1tm4aau/',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/artificial/comments/1tm4aau/ig_nobody_is_talking_about_the_real_reason_most/' },
        ]
      },
      {
        company: 'Claude',
        cat: 'industry',
        title: 'Anthropic联合创始人Jack Clark：全球AI开发放缓是好事',
        body: '<b>Jack Clark</b>在采访中表示，协调性的全球AI开发放缓对安全和治理有利，并建议英国成立类似COBRA委员会的AI应急机制。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/OpenAI/comments/1tm2v8m/anthropics_jack_clark_global_slowdown_on_ai/' },
          { text: 'https:', url: 'https://www.reddit.com/r/ClaudeAI/comments/1tm2som/jack_clark_interview_coordinated_global_slowdown/' },
        ]
      },
      {
        company: 'Claude',
        cat: 'model',
        title: 'Anthropic 准备发布 Claude Mythos 模型，面向 Claude Code 和 Claude Security',
        body: '据用户曝光，Claude Mythos模型已在Claude中短暂可见，新增了相关字符串。但尚不清楚普通用户能否访问该模型。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/ClaudeAI/comments/1tlwg2f/mythos_is_being_prepared_for_a_release_on_claude/' },
        ]
      },
      {
        company: '',
        cat: 'model',
        title: '实验数据：模型量化比 KV Cache 量化更重要，Q5 优于 Q4 无论 Cache 量化方式',
        body: '基于Qwen3.6 27B的实验显示，将模型量化从Q4升级到Q5带来的收益远大于优化KV Cache量化。KV Cache用q4_0效果较差，建议至少用q5_0。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/LocalLLaMA/comments/1tlwjsl/its_ok_to_quantize_the_kv_cache_model_quant/' },
        ]
      },
      {
        company: 'Claude',
        cat: 'tool',
        title: '开源项目 CodeLedger：减少 Claude Code 代码读取冗余，节省 Token',
        body: '用户开发的Claude Skill，通过建立代码索引和节点数据库，让Claude在后续任务中只读取相关文件，避免全量扫描。项目地址：https://github.com/kindaRai/CodeLedger/tree/master',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/ClaudeAI/comments/1tlz73r/i_made_a_claude_skill_codeledger_this_is_just_to/' },
        ]
      },
      {
        company: 'Meta',
        cat: 'tool',
        title: 'llampart 1.0.0 发布：面向 llama-server 的独立本地 Web UI',
        body: '支持多语言、MCP、两栏会话侧边栏、主题自定义（包括毛玻璃效果）、拓展设置面板等。基于 llama.cpp 生态，MIT 许可。项目地址：https://github.com/mchowy-troll/llampart',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/LocalLLaMA/comments/1tlwoho/llampart_100_i_released_a_standalone_local_web_ui/' },
        ]
      },
      {
        company: 'Claude',
        cat: 'tool',
        title: '开源：自托管 Web 终端界面，支持手机远程管理 Claude Code 会话',
        body: '基于ASP.NET Core + xterm.js，提供持久化多标签PTY，带触摸优化按钮和自定命令，支持Tailscale远程访问。Windows端。项目地址：https://github.com/HalfLucid/Claude-Code-Cli-WebTerminal',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/ClaudeAI/comments/1tlz0z1/built_a_free_selfhosted_web_terminal_interface/' },
        ]
      },
      {
        company: 'Claude',
        cat: 'tutorial',
        title: 'Claude Code 缓存未命中成本比命中高12.5倍，5种常见操作会触发',
        body: '添加/移除MCP服务器、切换模型、编辑CLAUDE.md、切换fast模式、粘贴图片都会导致缓存重写。缓存命中时成本仅为基础价格的0.1倍，而写缓存是1.25倍。建议在会话开始前锁定配置。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/ClaudeAI/comments/1tlzqpl/cache_miss_in_claude_code_costs_125_more_than_a/' },
        ]
      },
      {
        company: '',
        cat: 'tutorial',
        title: 'GPT Image 2.0 生成电影级故事板：详细导演提示词分享',
        body: '用户用复杂电影级提示词（含分镜、灯光、镜头语言等）生成质感商业广告分镜，效果惊艳。展示了GPT Image对专业视觉语言的精准理解和高质量输出。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/OpenAI/comments/1tm0ueh/storyboard_generated_from_gpt_image_20/' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: 'Vision LLM 处理长文档不如 OCR 管道，准确率更低且贵3倍',
        body: '基准测试对比6种方案，<b>Native PDF (vision LLM)</b>准确率仅52.0%，最贵$0.2552/query；而<b>LlamaCloud premium + OCR</b>达59.6%且更便宜。Vision在图表和表格页面上表现最差。原文：https://www.surfsense.com/blog/agentic-rag-vs-long-context-llms-benchmark',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/artificial/comments/1tlzy43/visioncapable_llms_vs_ocr_for_longdocument/' },
          { text: 'https:', url: 'https://www.reddit.com/r/MachineLearning/comments/1tm0cqg/visioncapable_llms_vs_ocr_for_longdocument/' },
          { text: 'https:', url: 'https://www.reddit.com/r/LocalLLaMA/comments/1tm0800/visioncapable_llms_vs_ocr_for_longdocument/' },
        ]
      },
      {
        company: 'Claude',
        cat: 'tool',
        title: 'Claude Code历史会话记录被曝光，开源索引器continuity-v2可恢复上下文',
        body: '用户发现Claude Code一直将每轮会话写入磁盘（~/.claude/projects/），并开源了<b>continuity-v2</b>索引器。通过<b>SQLite+FTS5</b>和MCP服务器，可在会话中搜索、召回历史，解决compaction丢失问题。项目地址：https://github.com/Haustorium12/continuity-v2',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/ClaudeAI/comments/1tlu3np/claude_code_has_been_writing_every_session_to/' },
        ]
      },
      {
        company: 'Runway',
        cat: 'tool',
        title: '实测4款AI视频生成MCP：Higgsfield、Kubeez、Runway、ElevenLabs对比',
        body: '用户测试了多款视频生成MCP，推荐组合为<b>Higgsfield</b>（多模型覆盖）搭配<b>ElevenLabs</b>（语音）。Higgsfield支持Sora 2、Veo 3.1、Kling等模型，但需谨慎理解提示词。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/ClaudeAI/comments/1tlv5f9/tested_4_ai_video_generation_mcps_in_claude_for/' },
        ]
      },
      {
        company: 'OpenAI',
        cat: 'tool',
        title: '向阳乔木用Codex复刻微信消息驾驶舱',
        body: '根据截图丢给<b>Codex</b>复刻微信消息驾驶舱，底层基于卡比的wx-cli，后续考虑开源。展示了<b>AI编码工具</b>快速原型设计的能力。',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2058238932190642345' },
        ]
      },
      {
        company: 'Claude',
        cat: 'tutorial',
        title: '非程序员用Claude Code无代码构建AI照片整理App和跑步App',
        body: '两位非程序员用户分别用<b>Claude Code</b>和<b>Claude Design</b>构建了本机ML照片整理App<b>SpectraSort</b>和跑步App替代Runna，展示了无代码构建复杂应用的可能性。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/ClaudeAI/comments/1tltpu3/created_an_ondevice_ml_based_photo_organizing_app/' },
          { text: 'https:', url: 'https://www.reddit.com/r/ClaudeAI/comments/1tlrtlw/i_built_a_running_app_to_replace_runna/' },
        ]
      },
      {
        company: 'Claude',
        cat: 'tutorial',
        title: '社区热议：Claude extended thinking 20分钟解决ffmpeg编码bug的策略',
        body: '用户让<b>Claude</b>进行20分钟<b>extended thinking</b>单次推理解决多阶段视频编码bug。社区讨论策略对比：整体单次推理 vs 分阶段验证 vs 假设-测试迭代。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/ClaudeAI/comments/1tlre4l/claude_is_thinking_for_20_minutes/' },
        ]
      },
      {
        company: 'Gemini',
        cat: 'industry',
        title: 'Google I/O 重点发布：Gemini 3.5 Flash、Gemini Omni、Gemini Spark',
        body: 'Google I/O发布<b>Gemini 3.5 Flash</b>作为更快、更便宜的模型已可用；<b>Gemini Omni</b>专注多模态编辑；<b>Gemini Spark</b>是24/7自主AI Agent，运行于Google服务器。',
        links: [
          { text: 'https:', url: 'https://www.youtube.com/shorts/fIO7yCTtrng' },
        ]
      },
      {
        company: 'Gemini',
        cat: 'model',
        title: 'Google Gemini Omni 视频编辑能力实测：无缝替换背景',
        body: '用户上传Waymo车内视频，用自然语言指令让Omni将背景替换为Google Maps截图中的不同地点，效果流畅，体现【多模态创作】和<b>地理位置理解</b>能力。',
        links: [
          { text: 'https:', url: 'https://x.com/venturetwins/status/2058235872034910283' },
          { text: 'https:', url: 'https://x.com/venturetwins/status/2058235415883313361' },
        ]
      },
      {
        company: 'Claude',
        cat: 'tool',
        title: 'Claude Code v2.1.146 新增确定性多子代理编排',
        body: '更新引入Workflow工具，支持【确定性多子代理编排】、子代理结构化输出、计划模式第四阶段等。项目地址：https://github.com/Piebald-AI/claude-code-system-prompts/releases/tag/v2.1.146',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/ClaudeAI/comments/1tll4mv/deterministic_multisubagent_orchestration_whats/' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: '开源：跨亚洲30个市场的流媒体查询MCP服务器',
        body: '开发者发布<b>@ottasia/mcp-server</b>，让Claude可查询30个市场流媒体平台上的内容，支持标题搜索、新品查看。npm安装一行命令。项目地址：https://github.com/Alweather-Anurag/ottasia',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/ClaudeAI/comments/1tlklvm/built_an_mcp_server_for_crossasia_streaming/' },
        ]
      },
      {
        company: 'OpenAI',
        cat: 'tutorial',
        title: '向阳乔木分享Codex网络优化提示词',
        body: '提供先诊断、再最小可逆修改、最后复测的<b>完整工作流</b>，包含网络质量基准测试、DNS优化、后台进程检查等步骤，亲测有效。',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2058231846081843402' },
        ]
      },
      {
        company: '',
        cat: 'tutorial',
        title: 'PM分享：用Notion MCP节省4小时/周，是否加Linear？',
        body: '非技术PM运行<b>Notion MCP</b>3周，可跨会议笔记、PRD、站立会查询决策记录，效果超预期。正考虑接入<b>Linear MCP</b>实现跨源依赖分析。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/ClaudeAI/comments/1tlnrhp/pm_running_notion_mcp_for_3_weeks_should_i_add/' },
        ]
      },
      {
        company: 'Gemini / Kimi',
        cat: 'tutorial',
        title: '测试200+提示词：Gemini和Kimi Prompt技巧总结',
        body: '实际测试发现：<b>Gemini</b>偏好显式输出格式约束，<b>Kimi</b>擅长多步链式思考但怕模糊角色提示。多数Twitter“专家提示”不通用。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/artificial/comments/1tlq5hg/i_tested_200_prompts_across_gemini_and_kimi_heres/' },
        ]
      },
      {
        company: 'Claude',
        cat: 'tutorial',
        title: '用Claude Code构建反钓鱼程序，保护父母免受骗',
        body: '开发者用<b>Claude Code</b>结合VirusTotal和Gemini API制作本地邮件/链接检查工具，作为父母技术盲的第二道防线。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/ClaudeAI/comments/1tlosbd/built_a_program_to_give_my_parents_a_2nd_look_on/' },
        ]
      },
      {
        company: 'Claude',
        cat: 'tutorial',
        title: 'Claude帮用户识别PC优化软件骗局，省下订阅费',
        body: '用户电脑变慢差点订阅Lenovo清理工具，Claude指出这是【“恐吓-升级”模式】，并指导手动修复，系统恢复正常。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/ClaudeAI/comments/1tlla7m/claude_saved_my_money_today/' },
        ]
      },
      {
        company: '',
        cat: 'model',
        title: 'Apex-Testing 基准更新：真实仓库 Agent 编码评测',
        body: '<b>Apex-Testing</b>基准（基于65-70个真实私有仓库）完成95%模型更新，包含成本、时间、ELO等多维度评分。Qwen3.7-Max 和 DeepSeek V4 等仍在测试中。网站：https://www.apex-testing.org/',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/LocalLLaMA/comments/1tlh4vq/apextesting_realworld_real_repos_agentic_coding/' },
        ]
      },
      {
        company: 'Qwen',
        cat: 'model',
        title: '26M 参数模型 Needle 在工具调用上击败 Qwen3-0.6B',
        body: '实测对比显示，26M参数的<b>Needle</b>在函数调用准确率（72% vs 56%）和速度（10.9s vs 47.9s）上均优于<b>Qwen3-0.6B</b>，且对隐式意图处理更稳健。Needle 仅13MB，适合本地工具路由。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/LocalLLaMA/comments/1tljs5o/benchmarked_needle_26m_vs_qwen306b_on_cpu/' },
        ]
      },
      {
        company: 'Claude',
        cat: 'tool',
        title: 'Claude Code 遭遇大规模误报，用户呼吁慎用',
        body: '大量用户反馈<b>Claude Code</b>频繁误触发<b>使用策略</b>封禁，涉及代码分析、科研、TTRPG等正常场景。GitHub上已积累数百条类似报告，可复现性强。相关issue地址：https://github.com/anthropics/claude-code/issues/61688',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/ClaudeAI/comments/1tlcywc/reconsider_using_claude_hit_by_too_many_false/' },
        ]
      },
      {
        company: 'Gemini',
        cat: 'tool',
        title: 'GBrain v0.40.0 发布，接入 Gemini Live 实现语音 Agent',
        body: 'Garry Tan 宣布<b>GBrain</b>v0.40.0 更新，基于<b>Gemini Live</b>为 Agent 增加了语音交互能力，支持大上下文和工具调用。Demis Hassabis 转发并称赞其效果。项目链接：https://github.com/garrytan/GBrain',
        links: [
          { text: 'https:', url: 'https://x.com/demishassabis/status/2058137765284557092' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: '开源桌面播放器 Axion：一站式播放下载影视动漫',
        body: '开发者分享基于<b>Electron</b>的桌面端工具，可从<b>VidSrc</b>等源拉取视频，元数据走<b>TMDB</b>，动漫部分走<b>AniList</b>，支持播放和下载。项目地址：https://t.co/33uCS10OgH',
        links: [
          { text: 'https:', url: 'https://x.com/geekbb/status/2058192002861478139' },
        ]
      },
      {
        company: '',
        cat: 'tutorial',
        title: '低成本编码实战：95% 步骤路由到开源 MoE，仅花费 $16',
        body: '用户分享通过 vLLM 搭建路由层，将400步重构任务中95%分配给开源 MoE 模型<b>Hunyuan Hy3</b>（约$0.02/步），仅20步调用 Opus，最终总成本<b>$15.60</b>，成功率达93.4%。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/LocalLLaMA/comments/1tljn16/16_refactor_400_steps_95_routed_to_open_moe/' },
        ]
      },
      {
        company: 'Meta',
        cat: '',
        title: '自制小米12 Pro 24/7 AI 服务器：Llama.cpp vs LiteRT 实测',
        body: 'Reddit 用户将<b>小米12 Pro</b>改装为全天候 LLM 服务器，重新设计散热和供电，并对比了<b>Llama.cpp</b>和 Google<b>LiteRT</b>在 Gemma-4 推理上的性能和功耗。虽然是DIY项目，但对手机推理有参考价值。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/LocalLLaMA/comments/1tlgxms/llamacpp_vs_litert_on_a_custom_xiaomi_12_pro_247/' },
        ]
      }
    ]
  },
  {
    num: '2026-05-23',
    date: '2026-05-23',
    time: '',
    summary: '本期多个AI产品有新动作：腾讯<b>Mavis</b>凭借魔性界面出圈，【向阳乔木】发布收录500+提示词的Chrome插件，<b>DeepSeek</b>永久降价仅同级模型1/3，<b>Google DeepMind Project Genie</b>上线街景视图。 | 本期亮点包括<b>Claude Design</b>深度使用技巧分享、<b>Anthropic</b>有望完成逾300亿美元融资，以及<b>VisionMCP</b>开源本地OCR工具等实用更新。 | 本期AI速报涵盖多个领域：<b>即梦Seedream 4.5</b>测试500艺术家风格引发关注，<b>MiniMax</b>发布全新语音Agent Gizmo，<b>LlamaParse</b>新增延迟指标追踪，<b>turbopuffer</b>年化收入突破1亿美元。此外，Sub2API中<b>GPT账号</b>批量失效的踩坑反馈值得注意。',
    issueRange: '1175-1179',
    companies: ['Claude', 'Claude / DeepSeek', 'Gemma', 'Meta', 'MiniMax', 'OpenAI'],
    cats: ['产品工具', '技巧教程', '行业观察'],
    items: [
      {
        company: '',
        cat: 'tool',
        title: '向阳乔木发布Chrome插件，内置500+提示词模板',
        body: '插件收录了作者和【姚老师】积累的提示词、苍何整理的<b>GPT-Image-2</b>提示词（带效果预览）以及全网500套常用提示词，覆盖开发、设计、营销等场景，支持一键复制、自动补全和导出。项目地址：https://t.co/XrDOt3Fgoi',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2057820198502068399' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: '腾讯Mavis凭借魔性交互界面在抖音出圈',
        body: '腾讯AI产品<b>Mavis</b>因极其魔性的界面交互在抖音走红，用户纷纷模仿喝咖啡、跑步等场景，形成病毒式传播。',
        links: [
          { text: 'https:', url: 'https://x.com/op7418/status/2057737525863866584' },
        ]
      },
      {
        company: '',
        cat: '',
        title: '歸藏入手M5 Stack新品，配备麦克风和扬声器',
        body: '歸藏购买M5 Stack系列新硬件，该设备支持<b>麦克风和扬声器</b>，可玩性大大增强。用户可结合AI进行更多互动场景开发。',
        links: [
          { text: 'https:', url: 'https://x.com/op7418/status/2057783822893318277' },
        ]
      },
      {
        company: 'Claude',
        cat: 'tool',
        title: 'Claude Code 发布 v2.1.149，新增用量细分与差异键盘滚动',
        body: '<b>Claude Code</b>新版本中/usage可细分技能、子代理、插件和MCP成本；/diff支持键盘滚动；Markdown渲染现支持任务列表复选框；企业版新增<b>allowAllClaudeAiMcps</b>设置。地址：https://github.com/anthropics/claude-code/releases/tag/v2.1.149',
        links: [
          { text: 'https:', url: 'https://github.com/anthropics/claude-code/releases/tag/v2.1.149' },
        ]
      },
      {
        company: 'Claude',
        cat: 'tool',
        title: 'Claude Windows 桌面端新增上下文用量警告',
        body: '最新版<b>Claude Windows桌面应用</b>在恢复会话时会弹出警告，提示当前上下文的<b>使用情况</b>，帮助用户主动管理上下文以避免性能问题。来源Reddit用户分享截图。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/ClaudeAI/comments/1tl6ya8/you_now_get_warnings_about_context_usage_when/' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: '开源项目 VisionMCP：macOS 本地 OCR 的 MCP 服务器',
        body: '开发者发布<b>VisionMCP</b>，利用Apple Vision Framework实现设备端OCR，支持PDF和图片，无需云端API。通过MCP协议接入Claude Code等AI代理。项目地址：https://github.com/br3akzero/vision.mcp',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/ClaudeAI/comments/1tla4qr/i_built_a_local_mcp_server_that_gives_ai_agents/' },
        ]
      },
      {
        company: 'Claude',
        cat: 'tutorial',
        title: 'Claude Design 使用几周后的硬核心得',
        body: '用户分享<b>Claude Design</b>使用经验：先做设计系统设置可避免生成AI风垃圾；使用【内联编辑】而非重新提示可节省Token；动画是实时React组件，可用<b>Claude2Video</b>转MP4。链接：https://www.reddit.com/r/ClaudeAI/comments/1tl6dm0/hardwon_notes_after_a_few_weeks_with_claude_design/',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/ClaudeAI/comments/1tl6dm0/hardwon_notes_after_a_few_weeks_with_claude_design/' },
        ]
      },
      {
        company: 'Gemma',
        cat: 'tutorial',
        title: '社区发布 Gemma4 的 Preserve Thinking Jinja 模板，稳定多轮工具调用',
        body: '开发者分享实验性Jinja模板，用于<b>Gemma4 31B</b>在llama.cpp中保留思考标签，解决忘记关闭/过早关闭问题，在多轮工具调用中更稳定。模板地址：https://huggingface.co/stevelikesrhino/gemma-4-31B-it-nvfp4-GGUF/blob/main/gemma4-improved.jinja',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/LocalLLaMA/comments/1tl79da/experimental_preserve_thinking_jinja_template_for/' },
        ]
      },
      {
        company: '',
        cat: 'tutorial',
        title: '让 AI Agent 在会话中自主编写工具，从四步简化为一步',
        body: '开发者分享经验：Agent注意到重复操作后，可自主编写并注册新工具，将4次调用压缩为1次。讨论<b>自修改执行环境</b>的五个条件及潜在问题（插件膨胀、遗忘、漂移）。Reddit深度讨论贴。链接：https://www.reddit.com/r/ClaudeAI/comments/1tl91km/four_calls_became_one_letting_the_agent_author/',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/ClaudeAI/comments/1tl91km/four_calls_became_one_letting_the_agent_author/' },
        ]
      },
      {
        company: 'Claude',
        cat: 'tutorial',
        title: '团队使用 Claude Code 为何反而更混乱？',
        body: '用户反映：单独使用<b>Claude Code</b>效率极高，但团队中两人同时用AI添加错误处理，却产出两种方案（try/catch vs Result类型）。核心问题是<b>AI不读取团队标准文档</b>，导致代码风格不一致。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/ClaudeAI/comments/1tl89sb/solo_claudes_a_rocket_on_my_team_why_does_it/' },
        ]
      },
      {
        company: 'Claude / DeepSeek',
        cat: 'industry',
        title: 'Anthropic 最快下周完成超300亿美元融资，宁德时代计划投资DeepSeek',
        body: '据消息称<b>Anthropic</b>最快下周完成逾300亿美元融资轮；长鑫董事长自掏7.68亿股（约162亿元）激励员工；<b>宁德时代</b>计划投资DeepSeek。',
        links: [
          { text: 'https:', url: 'https://mp.weixin.qq.com/s?__biz=MjM5OTAzMjc4MA==&amp;mid=2650876135&amp;idx=1&amp;sn=cac6cc93e4ff47fe54b6fc3891e73505' },
        ]
      },
      {
        company: 'MiniMax',
        cat: 'tool',
        title: 'MiniMax 祝贺 Gizmo 发布，基于双LLM架构的语音Agent',
        body: 'Gizmo powered by MiniMax 的<b>双LLM架构</b>：M2-her模型快速响应，M2.7处理复杂推理，消除对话中的尴尬沉默，打造自然流畅的<b>语音交互体验</b>。',
        links: [
          { text: 'https:', url: 'https://x.com/MiniMax_AI/status/2058012127206785094' },
        ]
      },
      {
        company: 'Meta',
        cat: 'tool',
        title: 'LlamaParse 上线延迟指标追踪，支持大规模文档处理',
        body: '新功能<b>Latency Metrics</b>上线，可查看每项解析、提取和分类任务的队列时间、处理时间和总延迟，并支持百万级文档的离线/实时处理。项目地址：https://cloud.llamaindex.ai',
        links: [
          { text: 'https:', url: 'https://x.com/jerryjliu0/status/2057980622577324278' },
        ]
      },
      {
        company: 'Meta',
        cat: 'tool',
        title: 'LlamaIndex 推出 ParseBench，首个面向AI Agent的文档OCR基准',
        body: '现有基准无法满足AI Agent需求，<b>ParseBench</b>是首个针对文档OCR的评测，将在网络研讨会上揭秘细节。注册链接：https://landing.llamaindex.ai/-webinar-parsebench',
        links: [
          { text: 'https:', url: 'https://x.com/llama_index/status/2057915081795485775' },
        ]
      },
      {
        company: '',
        cat: 'tutorial',
        title: '向阳乔木用即梦Seedream 4.5跑遍500个艺术家风格，分享Prompt技巧',
        body: '使用统一提示词“女子坐在窗边读书，猫趴腿上，窗外花园，用{artist}风格绘制”，测试了<b>Seedream 4.5</b>在<b>500个艺术家风格</b>下的生图效果，网站地址：https://t.co/bApzJhL7jo , 结果表明个性鲜明。',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2058021035715531218' },
        ]
      },
      {
        company: 'OpenAI',
        cat: 'tutorial',
        title: 'Geek 分享 Sub2API 中 GPT 账号失效及 Codex 验证踩坑经验',
        body: 'Sub2API 的<b>GPT账号</b>逐渐失效，重新授权发现<b>Codex</b>需要手机验证，知名接码平台成功率低；且账号已绑定MFA和通行密钥，无法绕过验证。',
        links: [
          { text: 'https:', url: 'https://x.com/geekbb/status/2057995170839445663' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: '向量数据库 turbopuffer 年化收入突破1亿美元，19个月增长100倍',
        body: 'Jerry Liu 引用数据：turbopuffer 在<b>100M run-rate</b>且盈利，融资不到1M美元。客户包括【Cursor、Anthropic、Notion】等，他称产品在商品化市场中胜出。',
        links: [
          { text: 'https:', url: 'https://x.com/jerryjliu0/status/2057997592345383164' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: 'Marc Andreessen 转发观点：当前模型可称为AGI，但需重新定义影响',
        body: 'Gabriel 认为【Opus 4.7、GPT-5.5、Qwen 3.7max】等可称为<b>AGI</b>，但实际能力轮廓与早期预测不同，人类仍需熟悉模型特性来协同工作。',
        links: [
          { text: 'https:', url: 'https://x.com/pmarca/status/2057989658353758600' },
        ]
      }
    ]
  },
  {
    num: '2026-05-22',
    date: '2026-05-22',
    time: '',
    summary: '本期动态包括：腾讯<b>Hy-MT2</b>翻译模型获用户实测好评，可本地部署；<b>智谱GLM-5.1 highspeed</b>输出速度飙至<b>400 TPS</b>，10倍提升；<b>Gemini Omni</b>正式上线展示多模态创作；AI应用翻车事件频发，毕业典礼念名出错、航班信息不准确引发信任讨论；<b>AI编码工具</b>Token成本暴涨，企业开始收紧预算。 | <b>MiniMax</b>在美国参与多项AI生态活动，包括与<b>Vercel</b>、<b>Notion</b>联合举办黑客马拉松，以及参与<b>AWS</b>AI Agent深度研讨。 | 本期重点：OpenAI Codex发布多项新功能，包括Appshots、远程Mac使用、/goal模式毕业等；向阳乔木分享用Codex/Claude Code自动配置<b>海外VPS</b>的实操教程；Qwen3.7-Max验证跨测试泛化能力。 | 本期重点：阿里<b>Qwen3.7-Max</b>正式发布，专为Agent时代打造，支持长时自主执行；YC孵化两款AI新工具<b>Pentagon</b>和<b>Netter.ai</b>；<b>Arena.ai</b>分析显示GPT-4级别质量成本暴跌500倍。 | 本周<b>Qwen3.7-Max</b>与<b>Qwen3.5-LiveTranslate</b>相继发布，第三方评测显示Qwen3.7-Max在Agent任务中全面超越对手；网易有道开源<b>Confucius4</b>双模型，飞书连接Claude Code的实用体验获用户好评。 | 本期重点：OpenAI <b>Codex</b>发布史诗级更新，歸藏分享详细使用教程；网易有道开源<b>Confucius4</b>双模型；<b>Google</b>为Antigravity付费用户再次三倍提升Gemini配额。',
    issueRange: '1169-1174',
    companies: ['Claude', 'DeepSeek', 'Gemini', 'Google', 'MiniMax', 'OpenAI', 'OpenAI / Claude', 'Qwen', 'Zhipu'],
    cats: ['产品工具', '技巧教程', '模型动态', '行业观察'],
    items: [
      {
        company: 'Zhipu',
        cat: 'model',
        title: '智谱GLM-5.1 highspeed上线，输出速度达400 TPS',
        body: '智谱发布<b>glm-5.1-highspeed</b>，实测输出速度<b>300-400 tps</b>，首token延迟稳定1s，是普通GLM-5.1接口的10倍。官方与<b>TileRT</b>团队合作，从底层优化推理链路，将GPU性能榨干。使用GLM-5.1编程的用户可直接切换新模型。',
        links: [
          { text: 'https:', url: 'https://x.com/karminski3/status/2057654726712611232' },
        ]
      },
      {
        company: 'Gemini',
        cat: 'tool',
        title: 'Google Gemini Omni 正式上线，多模态创作获好评',
        body: '<b>Gemini Omni</b>支持视频+图片输入生成创意内容。用户展示用宠物照片生成梦境场景，以及混合动物<b>Omnimals</b>功能。官方汇总一周优秀创作案例。',
        links: [
          { text: 'https:', url: 'https://x.com/GeminiApp/status/2057616379126415572' },
          { text: 'https:', url: 'https://x.com/GeminiApp/status/2057616380690841739' },
          { text: 'https:', url: 'https://x.com/GeminiApp/status/2057616371748651054' },
        ]
      },
      {
        company: 'DeepSeek',
        cat: 'tutorial',
        title: '腾讯Hy-MT2翻译模型实测：可本地部署，指令遵循超越DeepSeek-V4-Pro',
        body: '用户实测<b>Hy-MT2-30B-A3B</b>在翻译测试中全面超越<b>DeepSeek-V4-Pro</b>，支持33种语言（含粤语）。1.8B量化版本仅需不到1G内存，可搭配<b>LunaTranslator</b>本地部署用于网页、游戏、PDF翻译。项目地址：https://x.com/karminski3/status/2057633949678223738',
        links: [
          { text: 'https:', url: 'https://x.com/karminski3/status/2057633949678223738' },
          { text: 'https:', url: 'https://x.com/karminski3/status/2057650543091388723' },
          { text: 'https:', url: 'https://x.com/karminski3/status/2057633953755136067' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: 'AI毕业典礼翻车：AI念错名字、跳过毕业生，学校被迫暂停',
        body: '亚利桑那州格伦代尔社区学院用<b>AI系统</b>宣布毕业生姓名，出现发音错误、名字显示错误、跳过学生等问题。校长被迫暂停仪式，改用人工宣读。事件引发对【AI可靠性】和<b>高风险场景部署</b>的讨论。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/artificial/comments/1tk49oe/this_just_happened/' },
        ]
      },
      {
        company: 'Google',
        cat: 'industry',
        title: 'Google AI给出错误航班信息，暴露AI真实性短板',
        body: '用户反馈Google AI查询航班时生成<b>错误日期</b>信息，导致实际损失。分析指出【AI能力≠可靠性】，尤其在实时数据、高后果场景下需人工验证。行业正从追求能力转向解决<b>验证与信任</b>问题。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/artificial/comments/1tk46jv/google_sucks/' },
        ]
      },
      {
        company: 'Claude',
        cat: 'industry',
        title: 'AI编码工具Token成本飙升：微软停用Claude Code，Uber烧光预算',
        body: '微软计划内部停用<b>Claude Code</b>转推GitHub Copilot CLI；Uber CTO称其2026年AI预算在四个月内耗尽，部分用户月费达数千美元。GitHub将转向<b>按用量计费</b>。行业进入“AI经济理性期”，企业要求ROI。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/artificial/comments/1tk3kn2/tokens/' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: '深度分析：AI智能眼镜失败根源在于基础设施瓶颈',
        body: '分析指出<b>AI眼镜</b>受限于网络上传带宽、<b>边缘计算</b>延迟、服务器过载和功耗散热问题。除非<b>5G</b>覆盖增强、边缘AI成熟，否则难以成为日常设备。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/artificial/comments/1tk5jiv/glasses_will_fail/' },
        ]
      },
      {
        company: 'MiniMax',
        cat: 'industry',
        title: 'MiniMax 美国行：参与多项AI生态活动',
        body: 'MiniMax 在美国参与Vercel的模型黑客马拉松、Notion平台黑客松（与OpenAI、Anthropic等合作），以及AWS的AI Agent实战分享，推动从POC到生产落地。',
        links: [
          { text: 'https:', url: 'https://x.com/MiniMax_AI/status/2057576909274554595' },
          { text: 'https:', url: 'https://x.com/MiniMax_AI/status/2057576910713237748' },
          { text: 'https:', url: 'https://x.com/MiniMax_AI/status/2057576916778197351' },
          { text: 'https:', url: 'https://x.com/MiniMax_AI/status/2057576914328699166' },
        ]
      },
      {
        company: 'Qwen',
        cat: 'model',
        title: 'Qwen3.7-Max 跨测试框架泛化能力验证',
        body: '在QwenClawBench和CoWorkBench等不同测试框架下，Qwen3.7-Max表现一致稳定，证明模型学到的是<b>任务解决能力</b>而非针对特定框架的过拟合。',
        links: [
          { text: 'https:', url: 'https://x.com/Alibaba_Qwen/status/2057450231638437940' },
        ]
      },
      {
        company: 'OpenAI',
        cat: 'tool',
        title: 'OpenAI Codex 发布多项新功能：Appshots、远程Mac、/goal模式等',
        body: '核心更新：Appshots可附加应用窗口到Codex线程；支持手机远程使用Mac；/goal模式正式版可跨小时/天持续执行；高级注释直接调整页面元素；团队可共享自定义插件；新增企业分析面板。',
        links: [
          { text: 'https:', url: 'https://x.com/OpenAIDevs/status/2057530207976989179' },
          { text: 'https:', url: 'https://x.com/OpenAIDevs/status/2057536706778378692' },
          { text: 'https:', url: 'https://x.com/OpenAIDevs/status/2057530209470210453' },
          { text: 'https:', url: 'https://x.com/OpenAIDevs/status/2057530210967523399' },
          { text: 'https:', url: 'https://x.com/OpenAIDevs/status/2057530212339097994' },
          { text: 'https:', url: 'https://x.com/OpenAIDevs/status/2057530213974814844' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: '歸藏透露多个项目进展：Code Pilot重构、墨水屏Skills将完成',
        body: '包括Code Pilot重构接近完成、墨水屏Skills即将上线、基于PPT Skills的HTML转视频项目和小红书封面生成功能进行中。',
        links: [
          { text: 'https:', url: 'https://x.com/op7418/status/2057326833499295978' },
        ]
      },
      {
        company: 'OpenAI / Claude',
        cat: 'tutorial',
        title: '向阳乔木分享用Codex/Claude Code自动配置海外VPS并部署网站',
        body: '无需宝塔，只需提供SSH账号密码和Cloudflare DNS API权限，AI即可完成VPS配置、域名绑定、免费HTTPS证书申请和自动续期，堪称<b>顶级运维工程师</b>。',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2057509048413769894' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: 'Orange AI 谈AI产品与赚钱的关系：产品只是交付物，商业才是核心',
        body: '认为做产品是<b>工程问题</b>，赚钱是<b>商业问题</b>。AI已大幅降低工程门槛，但商业能力（营销、销售）仍非AI所能解决，避免陷入“有产品=能赚钱”的思维钢印。',
        links: [
          { text: 'https:', url: 'https://x.com/oran_ge/status/2057286792534196294' },
        ]
      },
      {
        company: 'Qwen',
        cat: 'model',
        title: 'Qwen3.7-Max 正式发布：面向Agent时代的旗舰模型',
        body: '阿里巴巴发布<b>Qwen3.7-Max</b>，专为Agent时代设计。支持端到端<b>编码Agent</b>、办公助手和MCP集成，在<b>AI Intelligence Index</b>得分56.6，提升4.8分。API已上线。博客：https://qwen.ai/blog?id=qwen3.7',
        links: [
          { text: 'https:', url: 'https://x.com/Alibaba_Qwen/status/2057450220708147250' },
          { text: 'https:', url: 'https://x.com/Alibaba_Qwen/status/2057451488587423830' },
          { text: 'https:', url: 'https://x.com/Alibaba_Qwen/status/2057450224294261051' },
          { text: 'https:', url: 'https://x.com/Ali_TongyiLab/status/2057455215365038212' },
          { text: 'https:', url: 'https://x.com/Alibaba_Qwen/status/2057450227968454893' },
          { text: 'https:', url: 'https://x.com/Alibaba_Qwen/status/2057450239595020475' },
          { text: 'https:', url: 'https://x.com/Alibaba_Qwen/status/2057451488587423830' },
          { text: 'https:', url: 'https://x.com/Alibaba_Qwen/status/2057450239595020475' },
          { text: 'https:', url: 'https://x.com/Alibaba_Qwen/status/2057450220708147250' },
        ]
      },
      {
        company: 'Qwen',
        cat: 'model',
        title: 'Qwen3.7-Max 展现长时自主执行能力：35小时自主优化内核',
        body: 'Qwen3.7-Max在<b>35小时</b>连续执行中自主完成432次核评估、1158次工具调用，实现对Extend Attention Kernel的【10.0x加速】，无需人工干预。展示了强大的长期自主Agent能力。',
        links: [
          { text: 'https:', url: 'https://x.com/Alibaba_Qwen/status/2057450236180935056' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'YC 孵化新品：Pentagon 和 Netter.ai 分别解决人机协调与数据问题',
        body: '<b>Pentagon</b>是人与Agent的协调层，支持跨工具通信协作；<b>Netter.ai</b>提供全栈数据科学Agent，帮助无数据工程师团队处理复杂数据。两个产品均在YC发布。',
        links: [
          { text: 'https:', url: 'https://x.com/ycombinator/status/2057476515542245397' },
          { text: 'https:', url: 'https://x.com/ycombinator/status/2057461414852505927' },
        ]
      },
      {
        company: 'OpenAI',
        cat: 'industry',
        title: 'Arena.ai 分析：GPT-4 级别质量成本降至约 $0.10/百万 token',
        body: 'Arena.ai 发布价格-性能<b>Pareto前沿</b>分析：GPT-4级质量成本从2023年~$50降至约<b>$0.10</b>；低价端（&lt;$0.20）模型得分从1000升至1440，与顶尖差距从350缩小到<b>60分</b>。',
        links: [
          { text: 'https:', url: 'https://x.com/arena/status/2057486887938646370' },
        ]
      },
      {
        company: 'OpenAI',
        cat: 'industry',
        title: 'OpenAI 通用推理模型自主解决80年数学难题，创造性涌现',
        body: 'Orange AI 报道，OpenAI未公布的内部通用推理模型自主解决了Erdős 1946年提出的<b>平面单位距离问题</b>，推理过程长达125页，展示了足够强推理能力下【创造性自然涌现】。',
        links: [
          { text: 'https:', url: 'https://x.com/oran_ge/status/2057380350188482592' },
        ]
      },
      {
        company: 'Qwen',
        cat: 'model',
        title: 'Qwen3.5-LiveTranslate 实时翻译模型发布',
        body: '通义实验室推出<b>Qwen3.5-LiveTranslate</b>，专注实时翻译场景，与旗舰模型<b>Qwen3.7-Max</b>一同上线，进一步丰富Qwen模型矩阵。',
        links: [
          { text: 'https:', url: 'https://x.com/Ali_TongyiLab/status/2057742839157829719' },
        ]
      },
      {
        company: 'Qwen',
        cat: 'model',
        title: '第三方Agent任务评测：Qwen3.7-Max 成本与效果全面领先',
        body: 'atomic.chat测试显示，在编写自训练俄罗斯方块机器人任务中，<b>Qwen3.7-Max</b>成本仅$1.32，提升56%，而Claude Opus 4.7成本$12.15提升28%，GPT-5.5成本$2.85提升7%，Qwen在<b>成本</b>和【性能】上均碾压对手。',
        links: [
          { text: 'https:', url: 'https://x.com/Alibaba_Qwen/status/2057764624720875975' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: '网易有道开源 Confucius4 双模型（数学视觉推理+语音克隆）',
        body: '网易有道发布<b>Confucius4</b>系列，一个用于数学视觉推理，另一个用于语音克隆，均开源<b>完整权重</b>而非仅API，强调工程精度与落地成本。多模态：https://t.co/BuDbufmelc  语音：https://t.co/gqj5PyUkXh',
        links: [
          { text: 'https:', url: 'https://x.com/xiaohu/status/2057710994760302731' },
        ]
      },
      {
        company: 'Claude',
        cat: 'tutorial',
        title: '用户分享：将Claude Code接入飞书的实用体验与评价',
        body: '向阳乔木详细体验了开源工具lark-channel-bridge，实现飞书与本地<b>Claude Code</b>交互。亮点包括：飞书可交互卡片、AI生成图片/文件直接显示、聊天记录全量搜索。安装指令：npx -y lark-channel-bridge@latest start。',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2057751033615700128' },
          { text: 'https:', url: 'https://x.com/op7418/status/2057756179363995755' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: '观点：小模型使翻译API速度优势消失',
        body: '有开发者在X上指出，随着小模型推理速度可达200 tokens/s，翻译软件与API仅剩的【速度优势】不复存在，本地部署方案更具竞争力。',
        links: [
          { text: 'https:', url: 'https://x.com/karminski3/status/2057639865119068665' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: '小红书支持上传自定义Skill',
        body: '<b>小红书</b>平台新增Skill上传功能，用户可提交自定义AI技能，被博主誉为“很大的事件”。',
        links: [
          { text: 'https:', url: 'https://x.com/op7418/status/2057711810728559034' },
        ]
      },
      {
        company: 'Gemini',
        cat: 'tool',
        title: 'Google 再次三倍Gemini配额，重置所有付费用户额度',
        body: '<b>Antigravity</b>平台所有付费用户每周<b>Gemini</b>配额再次翻三倍，并重置所有已有额度，回应开发者对配额不足的担忧。',
        links: [
          { text: 'https:', url: 'https://x.com/googleaidevs/status/2057680511217393899' },
          { text: 'https:', url: 'https://x.com/googleaidevs/status/2057679246085226965' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'Browser Use 推出LLM使用量仪表盘',
        body: '开源浏览器自动化库<b>Browser Use</b>新增使用量仪表盘，可统一追踪LLM调用次数、Token消耗及成本。项目地址：https://github.com/browser-use/browser-use',
        links: [
          { text: 'https:', url: 'https://x.com/browser_use/status/2057679470463717541' },
        ]
      },
      {
        company: 'Claude',
        cat: 'tool',
        title: '开源项目：Claude Code 飞书桥，在飞书内与Claude Code交互',
        body: 'Zara Zhang发布<b>Claude Code Lark/Feishu Bridge</b>开源项目，支持在飞书聊天中调用Claude Code，可读写飞书文档、管理多会话、发送交互卡片。项目地址：https://github.com/zarazhangrui/feishu-claude-code-bridge',
        links: [
          { text: 'https:', url: 'https://x.com/zarazhangrui/status/2057710284920520906' },
        ]
      },
      {
        company: 'OpenAI',
        cat: 'tutorial',
        title: '歸藏深度体验Codex更新：截图添加上下文、/goal模式开启方法',
        body: 'Codex新增<b>Appshots</b>自动截取窗口并识别未显示文本；<b>/goal</b>模式可设定目标让Codex持续执行数小时至数天，需在config.toml中启用 features.goals = true。内置浏览器支持<b>高级注释</b>直接编辑页面元素。',
        links: [
          { text: 'https:', url: 'https://x.com/op7418/status/2057678002675413057' },
        ]
      }
    ]
  },
  {
    num: '2026-05-21',
    date: '2026-05-21',
    time: '',
    summary: '本期<b>Qwen3.7-Max</b>登顶国产模型冠军，同时多个实用AI工具和教程涌现，包括<b>归藏墨水屏看板Skill</b>、<b>Flutter 3.44</b>AI新特性、<b>ik_llama.cpp</b>MTP配置教程等。 | 本期热点包括<b>写论文Skill</b>开源项目爆火达1.6w Star、<b>Qwen3.7-Max-Preview</b>编码能力获官方展示、<b>Google Science Skills</b>发布集成30+生命科学数据源，以及<b>豆包</b>用户数据复盘揭示AI产品留存困境。 | 本期最重磅消息是<b>Anthropic</b>每年支付<b>SpaceX 150亿美元</b>算力费用，以及<b>特斯拉FSD</b>正式进入中国大陆。此外，<b>AMD BC-250</b>解锁40CU实现低成本本地LLM运行，<b>Claude</b>的设计规范和<b>tool_use schema</b>技巧也备受开发者关注。 | 本期内容较少，主要关注【Codex增强开源项目】和<b>OpenAI/Cerebras社区活动</b>，总体信息量有限。 | 本期最重磅事件是<b>OpenAI</b>用【通用推理模型】首次自主解决数学难题，标志着AI在数学研究领域的里程碑。同时，<b>Codex移动端</b>支持手机端使用，<b>MiniMax</b>在Together AI推出600+新语音，<b>微软</b>介绍其开源内存分配器<b>mimalloc</b>。 | 本期亮点包括<b>Rodin Gen-2.5</b>实现单图生成千万级面数 3D 资产，以及多个 YC 孵化新工具（仓库机器人、Agent 监控、代码审查平台）亮相。',
    issueRange: '1163-1168',
    companies: ['OpenAI / Cerebras', 'Fireworks', 'Doubao', 'OpenAI', 'Hunyuan', 'MiniMax / Together', 'Qwen', 'Claude', 'Google', 'Meta / Qwen'],
    cats: ['模型动态', '产品工具', '技巧教程', '行业观察'],
    items: [
      {
        company: 'Qwen',
        cat: 'model',
        title: 'Qwen3.7-Max 排名持续上升，问鼎国产模型冠军',
        body: 'Tongyi Lab 预告即将发布<b>Qwen3.7-Max</b>详细模型分析。Artificial Analysis 评测显示其<b>问鼎国产模型冠军</b>并跻身全球前五，即将在阿里云百炼提供API。',
        links: [
          { text: 'https:', url: 'https://x.com/Ali_TongyiLab/status/2057395026112684520' },
          { text: 'https:', url: 'https://www.qbitai.com/2026/05/422009.html' },
        ]
      },
      {
        company: 'Hunyuan',
        cat: 'model',
        title: '腾讯混元开源翻译模型 Hy-MT2，上线小程序',
        body: '<b>腾讯混元</b>开源全新翻译模型<b>Hy-MT2</b>，最大提升在指令遵循能力上，并上线「腾讯Hy翻译」小程序提供服务。',
        links: [
          { text: 'https:', url: 'https://www.qbitai.com/2026/05/422068.html' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: '归藏发布墨水屏看板 Skill，任何 Agent 可控制显示内容',
        body: '该 Skill 可配合定时任务刷新信息，关机时展示介绍和二维码，常态化为看板。通过磁吸固定在屏幕边缘，支持任何 Agent 控制显示内容。',
        links: [
          { text: 'https:', url: 'https://x.com/op7418/status/2057321749575020799' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'Flutter 3.44 发布，集成多项 AI 新特性',
        body: '新版引入<b>Agentic Hot Reload</b>让 Coding Agent 支持自动热重载，Genkit Dart 实现全栈 AI 编排，GenUI 支持动态生成界面，还集成<b>Gemma 4</b>本地模型推理。',
        links: [
          { text: 'https:', url: 'https://juejin.cn/post/7641896054782672915' },
        ]
      },
      {
        company: 'OpenAI',
        cat: 'tool',
        title: 'Am I OpenAI compatible 工具：统一开源项目 API 兼容性检测',
        body: '该项目提供了各开源推理引擎（如 vLLM、llama.cpp）对<b>OpenAI API</b>兼容性的文档和检测工具，帮助开发者无缝切换端点。GitHub: https://github.com/heiervang-technologies/am-i-openai-compatible',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/LocalLLaMA/comments/1tjgceg/am_i_openai_compatible_a_tool_and_documentation/' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'AI Chat Transfer Chrome 扩展：跨平台转移聊天上下文',
        body: '当 AI 平台达到对话限制时，该扩展可在【ChatGPT、Gemini、Claude、Grok】之间无缝转移对话，保留历史上下文，避免重复输入。Chrome 商店可安装。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/OpenAI/comments/1tjhgt3/i_created_an_amazing_chrome_extension_that_helps/' },
        ]
      },
      {
        company: 'Meta / Qwen',
        cat: 'tutorial',
        title: 'ik_llama.cpp 教程：12GB VRAM 跑 Qwen3.6 35B 达 110 tok/s',
        body: '用户分享在 RTX 4070 Super 上用<b>ik_llama.cpp</b>和<b>MTP推测解码</b>运行 Qwen3.6-35B-A3B 量化模型，平均速度 110 tok/s，较 llama.cpp 提升22%。附详细启动参数。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/LocalLLaMA/comments/1tjh7az/110_toks_with_12gb_vram_on_qwen36_35b_a3b_and_ik/' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: '北大与阿里达摩院实现 AI 风光发电普查，成果登上《自然》',
        body: '研究利用AI对中国风光发电资源进行全面普查，为加快实现<b>双碳</b>目标提供数据支持，论文发表于《自然》杂志。',
        links: [
          { text: 'https:', url: 'https://www.qbitai.com/2026/05/422002.html' },
        ]
      },
      {
        company: 'Qwen',
        cat: 'model',
        title: 'Qwen3.7-Max-Preview 编码能力获官方演示',
        body: '通义实验室发布<b>Qwen3.7-Max-Preview</b>编码能力实测案例，结果出色，团队表示期待正式版<b>Qwen3.7-Max</b>发布。',
        links: [
          { text: 'https:', url: 'https://x.com/Ali_TongyiLab/status/2057284500925849691' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'Academic Research Skills 写论文Skill爆火，一周拿下1.6w Star',
        body: '开源项目<b>Academic Research Skills</b>安装命令简洁，已获1.6w Star。可通过插件市场安装：/plugin marketplace add Imbad0202/academic-research-skills。开源地址：https://github.com/Imbad0202/academic-research-skills',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2057309148493336751' },
        ]
      },
      {
        company: 'Google',
        cat: 'tool',
        title: 'Google DeepMind 发布 Science Skills 集成30+生命科学数据源',
        body: '<b>Google Antigravity</b>新增<b>Science Skills</b>技能，整合UniProt和AlphaFold等30+生命科学数据源。实测分析AK2突变罕见病结构分析速度大幅提升。',
        links: [
          { text: 'https:', url: 'https://x.com/GoogleDeepMind/status/2057256257153884161' },
          { text: 'https:', url: 'https://x.com/GoogleDeepMind/status/2057256259037131226' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'Browser Use 部署新一代浏览器基础设施',
        body: 'Browser Use正在推进底层浏览器运行时升级，包括<b>Chromium fork</b>、<b>Firecracker fork</b>和自定义内核，目标提升价格性能比和速度。',
        links: [
          { text: 'https:', url: 'https://x.com/browser_use/status/2057333907700486446' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'Browser Use 推出 Browser Skills 开放目录',
        body: '所有agent可使用的开放【浏览器技能目录】，支持贡献和即时调用，帮助agent快速高效使用各个网站。地址：https://www.browser-skills.sh/',
        links: [
          { text: 'https:', url: 'https://x.com/browser_use/status/2057271191795294625' },
          { text: 'https:', url: 'https://x.com/browser_use/status/2057271193049436301' },
        ]
      },
      {
        company: '',
        cat: 'tutorial',
        title: 'Browser Use 发布 /goal 使用教训博客',
        body: '官方分享一个因滥用<b>/goal</b>命令差点被解雇的真实案例，提醒用户合理设定目标。博客地址：https://browser-use.com/posts/goal-almost-got-me-fired',
        links: [
          { text: 'https:', url: 'https://x.com/browser_use/status/2057283804281336159' },
          { text: 'https:', url: 'https://x.com/browser_use/status/2057286037672694046' },
        ]
      },
      {
        company: 'Doubao',
        cat: 'industry',
        title: '豆包 AI 用户数据复盘：留存与时长困局',
        body: '据晚点报道，豆包曾尝试多Bot和多内容推荐策略均失败，用户日均使用时长稳定在<b>10分钟以内</b>，远不及抖音。团队承认【AI chatbot的胜利价值难衡量】。',
        links: [
          { text: 'https:', url: 'https://x.com/oran_ge/status/2057347457814786386' },
        ]
      },
      {
        company: 'Fireworks',
        cat: 'industry',
        title: 'Fireworks AI 展示微调简化，Cursor 用 RL 训练 Composer 2.5',
        body: 'Fireworks AI称微调已简化为CLI命令，10分钟GPU即可。同时披露Cursor团队通过<b>大规模RL</b>训练Composer 2.5，而非仅靠prompt engineering。',
        links: [
          { text: 'https:', url: 'https://x.com/FireworksAI_HQ/status/2057337997541191786' },
          { text: 'https:', url: 'https://x.com/FireworksAI_HQ/status/2057335146278490370' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: '向阳乔木优化Suno Skill，增加6000音乐风格检索并开源',
        body: '<b>Suno</b>生成Skill新增近6000音乐风格，生成更精准。开源部署脚本，支持npx一键安装，可免网页创作歌曲。项目地址：https://t.co/R1uUafX8zl',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2057286020735864903' },
          { text: 'https:', url: 'https://x.com/vista8/status/2057287459759698400' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'Tanka AI大升级，融合Slack协作与AI长期记忆',
        body: '<b>Tanka AI</b>补齐Slack全部协作能力，并额外提供<b>AI长期记忆层</b>、100+应用打通、AI资产生成和自动化工作流，成为Slack关停后的替代方案。',
        links: [
          { text: 'https:', url: 'https://x.com/xiaohu/status/2057259620817862744' },
        ]
      },
      {
        company: 'OpenAI',
        cat: 'tool',
        title: 'Amazon SageMaker AI推出OpenAI兼容API',
        body: '<b>SageMaker AI</b>实时推理端点现已支持<b>OpenAI兼容API</b>，可直接使用OpenAI SDK等工具调用，无需修改客户端代码或自定义包装器。',
        links: [
          { text: 'https:', url: 'https://aws.amazon.com/blogs/machine-learning/announcing-openai-compatible-api-support-for-amazon-sagemaker-ai-endpoints/' },
        ]
      },
      {
        company: '',
        cat: 'tutorial',
        title: 'GPT Image 2.0夜间车内自拍Prompt技巧分享',
        body: '通过<b>GPT Image 2.0</b>生成逼真夜间车内自拍，核心技巧：主体仅通过手机屏幕显示、暗光噪点、动态模糊、iPhone式构图。详细Prompt附后。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/OpenAI/comments/1tj6ur9/how_to_create_a_night_car_selfie_with_gpt_image/' },
        ]
      },
      {
        company: 'Claude',
        cat: 'tutorial',
        title: 'A/B测试验证：使用设计规范可大幅减少Claude UI迭代次数',
        body: '开发者测试200个APP克隆任务，发现提供<b>DESIGN.md</b>规范后，Claude迭代到可交付版本次数从5-6次降至约2次，布局一致性显著提升。已开源200个设计规范：https://github.com/Meliwat/awesome-ios-design-md/',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/ClaudeAI/comments/1tj80gn/i_ab_tested_claude_building_ui_with_vs_without_a/' },
        ]
      },
      {
        company: 'Claude',
        cat: 'tutorial',
        title: 'Claude tool_use schema生成代码更安全可靠',
        body: '相同JWT中间件请求，<b>tool_use schema</b>强制类型约束和安全参数（如算法固定），生成代码包含角色守卫、过期检查等，而普通Prompt版本存在安全漏洞。解析成功率从65-70%提升至90-95%。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/ClaudeAI/comments/1tj6p3w/actual_output_comparison_same_jwt_middleware/' },
          { text: 'https:', url: 'https://www.reddit.com/r/LocalLLaMA/comments/1tj6zcc/moved_from_promptbased_output_validation_to/' },
        ]
      },
      {
        company: '',
        cat: '',
        title: 'AMD BC-250/PS5 APU解锁40CU，低成本运行大模型',
        body: '开发者通过修改寄存器成功解锁<b>BC-250</b>全部40CU，性能从230 tok/s提升至372 tok/s（1.5GHz），且板子仅$50-150美元。项目地址：https://github.com/duggasco/bc250-40cu-unlock',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/LocalLLaMA/comments/1tj4unp/amd_bc250_and_the_search_for_cheap_compute/' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: '特斯拉FSD正式宣布进入中国大陆',
        body: '特斯拉官宣<b>FSD</b>进入中国大陆市场，具体功能落地细节待后续公布。',
        links: [
          { text: 'https:', url: 'https://x.com/xiaohu/status/2057279976467218765' },
        ]
      },
      {
        company: 'Claude',
        cat: 'industry',
        title: 'Anthropic每年支付SpaceX 150亿美元用于算力',
        body: '据SpaceX IPO文件披露，<b>Anthropic</b>每月支付SpaceX 12.5亿美元（至2029年5月），年化约<b>150亿美元</b>，用于训练和运行AI模型的算力。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/ClaudeAI/comments/1tj3jy9/anthropic_is_paying_spacex_15_billion_per_year/' },
        ]
      },
      {
        company: 'OpenAI',
        cat: 'tool',
        title: '开源项目增强Codex App，支持插件和Computer Use',
        body: '向阳乔木分享一个开源项目，可<b>增强Codex App</b>。支持通过插件使用<b>Computer Use</b>、添加Goal指令，调整界面样式为顶部Tab，并设置声音提醒。项目地址：https://github.com/...（评论区可见）',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2057124658927812758' },
        ]
      },
      {
        company: 'OpenAI / Cerebras',
        cat: 'industry',
        title: 'OpenAI和Cerebras分别举办AI开发者社区活动',
        body: '<b>OpenAI Developers</b>邀请开发者参加Codex meetup（链接：https://t.co/HbugdYaEam），并招募实时语音应用展示项目于5月27日在SF演示。<b>Cerebras</b>在多伦多举办Cafe Compute活动，聚焦快速推理。',
        links: [
          { text: 'https:', url: 'https://x.com/OpenAIDevs/status/2057191089145336105' },
          { text: 'https:', url: 'https://x.com/OpenAIDevs/status/2057243340752802290' },
          { text: 'https:', url: 'https://x.com/cerebras/status/2057137178711629993' },
        ]
      },
      {
        company: 'OpenAI',
        cat: 'model',
        title: 'OpenAI 通用推理模型自主解决80年数学难题',
        body: 'OpenAI 模型自主攻克<b>平面单位距离问题</b>（Erdős 1946年提出），发现全新构造超越传统网格解法。这是AI<b>首次</b>独立解决前沿数学开放问题，证明来自【通用推理模型】而非专用系统。论文：https://openai.com/index/model-disproves-discrete-geometry-conjecture/',
        links: [
          { text: 'https:', url: 'https://x.com/OpenAI/status/2057176201782075690' },
          { text: 'https:', url: 'https://x.com/OpenAI/status/2057176203166171317' },
          { text: 'https:', url: 'https://x.com/OpenAI/status/2057176204541866087' },
          { text: 'https:', url: 'https://x.com/OpenAI/status/2057176201782075690' },
          { text: 'https:', url: 'https://x.com/OpenAI/status/2057176203166171317' },
        ]
      },
      {
        company: 'OpenAI',
        cat: 'tool',
        title: 'OpenAI Codex 支持移动端使用',
        body: 'Codex 现可在<b>ChatGPT移动应用</b>中使用，用户可在手机上工作、回答问题，并跨设备同步线程。无需携带笔记本电脑。',
        links: [
          { text: 'https:', url: 'https://x.com/OpenAIDevs/status/2057142816497906045' },
        ]
      },
      {
        company: 'MiniMax / Together',
        cat: 'tool',
        title: 'MiniMax 在 Together AI 上线 600+ 新语音',
        body: 'MiniMax 的<b>Speech 2.8 Turbo</b>模型为 Together AI 带来600+新语音，支持多种场景应用。体验地址：https://t.co/faZb6Q1lui',
        links: [
          { text: 'https:', url: 'https://x.com/MiniMax_AI/status/2057177048356180296' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: '微软研究院介绍开源内存分配器 mimalloc',
        body: '微软研究院介绍<b>mimalloc</b>开源项目，专为现代大规模内存管理设计，支撑现代应用和服务的内存分配。项目地址：https://msft.it/6015vpoa7',
        links: [
          { text: 'https:', url: 'https://x.com/MSFTResearch/status/2057131825626046524' },
        ]
      },
      {
        company: '',
        cat: 'tutorial',
        title: '归藏分享墨水屏硬件+AI的实用场景',
        body: '归藏发现墨水屏设备的最佳用法：开机时由<b>AI</b>推送To-do、日历等信息，关机时显示名片，配合磁吸挂在屏幕旁。将打包成Skills供用户使用。',
        links: [
          { text: 'https:', url: 'https://x.com/op7418/status/2057115669100216826' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'Rodin Gen-2.5 实现单图生成千万级面数 3D 资产',
        body: '一张图即可生成<b>千万级面数</b>的 3D 资产，支持 obj/fbx/glb 格式下载，纹理超精细，对游戏影视产业是<b>生产力工具</b>。链接：https://x.com/vista8/status/2057093608747229556',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2057093608747229556' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'Armature 推出监控 AI Agent 体验的新工具',
        body: '帮助公司【监控和优化】AI Agent 在产品中的运行体验，运行真实工作流并改进 MCP/CLI。链接：https://www.ycombinator.com/launches/QQc-armature-making-your-app-finally-usable-by-ai-agents',
        links: [
          { text: 'https:', url: 'https://x.com/ycombinator/status/2057106571193192703' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'Stage 推出专为 AI 生成代码设计的代码审查平台',
        body: '帮助工程师理解<b>AI生成代码</b>，将 Code Review 转化为引导流程，比 GitHub 更快审查。链接：https://www.ycombinator.com/launches/QQz-stage-code-review-platform-for-ai-generated-code',
        links: [
          { text: 'https:', url: 'https://x.com/ycombinator/status/2057099029499228294' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'Muxy 发布轻量级 macOS 开发工具，集成终端、文件浏览器、Git 和代码编辑',
        body: '将【终端、文件浏览器、Git 操作、代码编辑】整合到单一轻量应用，内存占用低，减少窗口切换。链接：https://x.com/geekbb/status/2057117807771566544',
        links: [
          { text: 'https:', url: 'https://x.com/geekbb/status/2057117807771566544' },
        ]
      },
      {
        company: '',
        cat: '',
        title: 'InLoopRobotics 推出可按月租赁的仓库机器人员工',
        body: 'Y Combinator 孵化的<b>InLoopRobotics</b>部署按月租赁的机器人，无需资本支出，已获付费试点，拣选速度<b>300+件/小时</b>。链接：https://www.ycombinator.com/launches/QPr-inloop-robotics-staff-your-warehouse-with-robots-today',
        links: [
          { text: 'https:', url: 'https://x.com/ycombinator/status/2057114124543209783' },
        ]
      }
    ]
  },
  {
    num: '2026-05-20',
    date: '2026-05-20',
    time: '',
    summary: '本期内容涵盖<b>Antigravity 2.0</b>的用户体验反馈、<b>豆包语音输入法</b>专有词记忆技巧、AI文本【去AI检测】的实用方法，以及<b>Codex</b>自动化上架插件、<b>Lab0</b>企业部署自动化等新工具。 | 向阳乔木开源多款<b>油猴脚本</b>提升视频和图片处理效率，<b>Google智能眼镜</b>展示用Gemini自动点咖啡，社区实测<b>Opus 4.7编排模式</b>任务分解能力显著提升。 | Google 正式推出<b>Gemini 3.5 Flash</b>并免费开放，性能超越 3.1 Pro；NVIDIA 发布<b>Nemotron-Labs-Diffusion</b>并行生成模型；多款实用工具和技巧更新。 | 本期主要关注<b>OpenAI Guaranteed Capacity</b>正式推出，保障大客户长期算力；ChatGPT图像生成量飙至【每周15亿张】；此外<b>Gemini Omni Flash</b>视频编辑效果遭用户吐槽远不如SeeDance 2.0。 | Google I/O 2026 大会如火如荼，<b>Gemini 3.5 Flash</b>评测成绩亮眼，<b>Gemini Omni Flash</b>视频模型上线 Flow，<b>Antigravity 2.0</b>开发者工具升级。同时 OpenAI 推出<b>AI图像溯源新工具</b>，Cerebras 在企业测试中运行<b>Kimi K2.6</b>万亿参数模型创速度纪录。 | 本期重点：AI人才动态与巨头合作频现，<b>Karpathy</b>加入<b>Anthropic</b>、KPMG与Anthropic战略合作；阿里发布<b>Qwen3.5-LiveTranslate</b>实时翻译模型；Cursor与SpaceXAI联合训练【10倍计算量】新模型；LangChain推出<b>LangSmith Engine</b>自动化Agent修复。',
    issueRange: '1157-1162',
    companies: ['NVIDIA', 'Lmstudio', 'Meta', 'Doubao', 'OpenAI', 'Qwen', 'Kimi / Cerebras', 'xAI', 'Langchain', 'OpenAI / Claude', 'Claude', 'Google', 'Cerebras', 'Gemini'],
    cats: ['模型动态', '产品工具', '行业观察', '技巧教程'],
    items: [
      {
        company: '',
        cat: 'tool',
        title: 'Y Combinator 孵化企业软件自动化部署工具 Lab0',
        body: '<b>Lab0</b>作为AI FDE，自动完成软件公司售后交付的发现、配置、测试到上线，将<b>6个月部署缩短至10天</b>。',
        links: [
          { text: 'https:', url: 'https://x.com/ycombinator/status/2057061273578410014' },
        ]
      },
      {
        company: 'OpenAI / Claude',
        cat: 'tool',
        title: 'Geek 发布 macOS 菜单栏 Claude Code 和 Codex 使用追踪器',
        body: '新工具支持在菜单栏实时追踪<b>Claude Code</b>和<b>Codex</b>的用量，方便开发者管理AI编程额度。',
        links: [
          { text: 'https:', url: 'https://x.com/geekbb/status/2057008888504053952' },
        ]
      },
      {
        company: 'Meta',
        cat: 'tool',
        title: 'LlamaIndex 发布 LlamaParse/LiteParse 的 MCP 与 Agent Skill 集成',
        body: 'Jerry Liu公布<b>LlamaParse MCP</b>和<b>LiteParse Agent Skill</b>，用户可通过最小配置将文档解析工具接入任意Agent，项目地址：https://github.com/run-llama/antigravity-demo',
        links: [
          { text: 'https:', url: 'https://x.com/jerryjliu0/status/2057056437520543940' },
          { text: 'https:', url: 'https://x.com/jerryjliu0/status/2057056434823573789' },
        ]
      },
      {
        company: '',
        cat: 'tutorial',
        title: '归藏深度体验 Antigravity 2.0，指出权限审批繁琐等问题',
        body: '归藏测试<b>Gemini 3.5 Flash</b>与<b>Antigravity 2.0</b>配合，称Agent能力较强但权限审批繁琐、缺乏浏览器预览等功能，目前适合基础工作。',
        links: [
          { text: 'https:', url: 'https://x.com/op7418/status/2056904254175281353' },
        ]
      },
      {
        company: 'Doubao',
        cat: 'tutorial',
        title: 'Orange AI 分享豆包语音输入法 Mac 版专有词记忆体验',
        body: '豆包语音输入法<b>专有词自动记忆</b>功能可与键盘输入联动，修正一次后永久记住，解决语音输入专有名词痛点，体验接近<b>typeless</b>。',
        links: [
          { text: 'https:', url: 'https://x.com/oran_ge/status/2056985346966220859' },
        ]
      },
      {
        company: '',
        cat: 'tutorial',
        title: 'Geek 分享 AI 文字绕开检测器的 4 种方法',
        body: '方法包括【多语言翻译链】、高温度<b>LLM重写</b>、循环检测修正、混合翻译引擎输出，可有效绕过<b>Turnitin</b>、<b>GPTZero</b>等检测工具。',
        links: [
          { text: 'https:', url: 'https://x.com/geekbb/status/2057063033676132846' },
        ]
      },
      {
        company: 'OpenAI',
        cat: 'tutorial',
        title: '向阳乔木用 Codex 实现 Chrome 插件自动上架',
        body: '通过<b>Codex</b>+<b>Browser Use</b>控制浏览器，自动生成压缩包、填写资料并上传至谷歌商店，实现一键上架<b>Chrome插件</b>。',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2057000721091117455' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: '量子位：VC、品牌顾问、编剧正在批量将自己做成 AI',
        body: '行业趋势显示专业人士通过<b>AI分身</b>实现24小时自动接单，覆盖咨询、品牌策略、编剧等知识密集型领域。',
        links: [
          { text: 'https:', url: 'https://www.qbitai.com/2026/05/420703.html' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: '向阳乔木开源多款油猴脚本，支持截图粘贴上传和YouTube字幕复制',
        body: '脚本覆盖小红书/抖音等平台<b>截图粘贴自动上传</b>、YouTube字幕复制（可倍速调节）用于NotebookLM/ChatGPT处理，以及小宇宙网页版倍速调节。开源地址：https://t.co/fK79DRyQTn',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2056975992078676393' },
          { text: 'https:', url: 'https://x.com/vista8/status/2056980704056283241' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'Browser Use推出Agency：统一Agent仪表盘，简化部署',
        body: 'Agency提供VPS托管、Telegram bot设置、应用一键集成、stealth浏览器等，用户自带订阅即可使用。降低<b>Agent Dashboard</b>部署门槛。项目地址：https://cloud.browser-use.com/agency',
        links: [
          { text: 'https:', url: 'https://x.com/browser_use/status/2056968376275398969' },
          { text: 'https:', url: 'https://x.com/browser_use/status/2056968378225655985' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: '开源Agent协作看板Multica：支持并行AI编程',
        body: '类Trello看板但任务分配给<b>Agent智能体</b>，可本地搭配Claude Code、Codex CLI等使用，无需额外付费。开源地址见评论，适合<b>并行Coding</b>提效。',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2056970184104301018' },
        ]
      },
      {
        company: '',
        cat: 'tutorial',
        title: '实测Opus 4.7编排模式：任务分解质量明显提升',
        body: '用户测试<b>Orchestrator模式</b>用Opus 4.7将复杂任务分解并分配给更便宜的工作模型，优势在于能同时hold多个约束条件不丢失，成本仅花在编排步骤。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/ClaudeAI/comments/1ticngl/tested_the_orchestrator_pattern_with_opus_47_the/' },
        ]
      },
      {
        company: 'Gemini',
        cat: '',
        title: 'Google智能眼镜展示：Gemini帮你点咖啡，不用掏手机',
        body: '演示中用户通过眼镜与<b>Gemini</b>交互完成咖啡点单，手机全程放兜里，仅最后一步确认时需眼镜提示。强调“不用掏手机”的日常场景。',
        links: [
          { text: 'https:', url: 'https://x.com/xiaohu/status/2056889452929446208' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: '小红书判定AI生成无声视频为违规内容',
        body: '用户反馈AI生成的几秒无声视频被小红书提示违规，而抖音、视频号、X平台均可发布。平台<b>AI内容审核</b>标准引发讨论。',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2056893035091468717' },
        ]
      },
      {
        company: 'Gemini',
        cat: 'model',
        title: 'Gemini 3.5 Flash 发布：编码能力强于 3.1 Pro，速度 4 倍提升',
        body: '<b>Gemini 3.5 Flash</b>免费面向全球开放，编码和 Agent 任务超越 3.1 Pro，速度比前沿模型快 4 倍，在 Antigravity 上达 800 tokens/s，成本减半。项目地址：https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/',
        links: [
          { text: 'https:', url: 'https://x.com/demishassabis/status/2056904067406860545' },
          { text: 'https:', url: 'https://x.com/demishassabis/status/2056904072012145102' },
          { text: 'https:', url: 'https://x.com/GeminiApp/status/2056897103851667869' },
        ]
      },
      {
        company: 'NVIDIA',
        cat: 'model',
        title: 'NVIDIA 开源 Nemotron-Labs-Diffusion：并行生成多个 token',
        body: '<b>Nemotron-Labs-Diffusion</b>模型系列（3B-14B）采用扩散方法，可并行生成多个 token 并支持修订，推理更快。含视觉语言变体，已开源。项目地址：https://nvda.ws/4tEnTxP',
        links: [
          { text: 'https:', url: 'https://x.com/NVIDIAAI/status/2056887241432014959' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'Browser Use 推出 Domain Skills：跳过 UI 直接调用认证端点',
        body: '<b>browser-harness</b>新增 Domain Skills，访问域名自动加载技能，绕过界面直接使用认证端点，社区使用越久越精准。已演示 LinkedIn 技能。项目地址：https://github.com/browser-use/browser-harness',
        links: [
          { text: 'https:', url: 'https://x.com/browser_use/status/2056913351717118336' },
          { text: 'https:', url: 'https://x.com/browser_use/status/2056913353206030571' },
        ]
      },
      {
        company: 'Google',
        cat: 'tool',
        title: 'Google AI Studio 更新：支持 Google Sheets 做数据库、内置安卓模拟器',
        body: 'AI Studio 新增从<b>Google Sheets</b>拉数据作为应用数据库，并支持在网页中开发安卓应用且内置<b>安卓模拟器</b>。用户实测 3.1 Pro 安卓开发水平不如前端。',
        links: [
          { text: 'https:', url: 'https://x.com/op7418/status/2056913908489937395' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: '谷歌 Genie 3 新功能：可从街景照片生成可交互 3D 世界',
        body: '<b>Genie 3</b>支持选取美国谷歌街景任意地点作为首帧，生成可游览的 3D 世界，并可将场景风格化（如海底世界、末日世界），代入感极强。',
        links: [
          { text: 'https:', url: 'https://x.com/op7418/status/2056931266038239274' },
        ]
      },
      {
        company: 'Lmstudio',
        cat: 'tool',
        title: 'LM Studio 0.4.14 Beta 支持 MTP 推测解码',
        body: '<b>LM Studio</b>最新测试版新增对<b>MTP Speculative Decoding</b>的支持，需要更新 llama.cpp 引擎至 2.15.0，并在加载模型时手动启用。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/LocalLLaMA/comments/1ti99an/lm_studio_finally_added_support_for_mtp/' },
        ]
      },
      {
        company: 'OpenAI',
        cat: 'tool',
        title: 'OpenAI Codex 重置免费额度，用户免费续用',
        body: '<b>Codex</b>最近重置了免费额度，用户无需额外付费即可继续使用，社区反馈积极。',
        links: [
          { text: 'https:', url: 'https://x.com/op7418/status/2056943517658911013' },
        ]
      },
      {
        company: '',
        cat: 'tutorial',
        title: 'Vibe Coding 技巧：先让 AI 画 ASCII 布局图，再写代码',
        body: '用户分享经验：在 Vibe Coding 时先让 AI 生成【ASCII 码布局图】，再基于此开发，交互设计比直接开发更合理。',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2056940452671311888' },
        ]
      },
      {
        company: 'Cerebras',
        cat: 'model',
        title: 'Cerebras 对比 Google 3.5 Flash 推理速度',
        body: 'Cerebras 官方发布对比图，展示其芯片运行 Google 新模型<b>3.5 Flash</b>的推理速度表现，暗示其硬件架构具有优势。',
        links: [
          { text: 'https:', url: 'https://x.com/cerebras/status/2056849435502551465' },
        ]
      },
      {
        company: 'OpenAI',
        cat: 'tool',
        title: 'OpenAI 推出 Guaranteed Capacity 保障大客户长期算力',
        body: 'OpenAI 正式推出<b>Guaranteed Capacity</b>服务，可为客户预留长期计算资源，帮助企业在算力受限环境下规划关键负载。链接：https://t.co/TN4OkZr2Uo',
        links: [
          { text: 'https:', url: 'https://x.com/OpenAI/status/2056823271774101907' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'Orange AI 回顾 ListenHub 一周年，ColaOS 1.0 即将发布',
        body: '团队复盘<b>ListenHub</b>上线一年持续盈利，在 AI 播客赛道存活且健康运转；下一代平台<b>ColaOS</b>即将发布 1.0 正式版，已整合 ListenHub 多媒体服务。',
        links: [
          { text: 'https:', url: 'https://x.com/oran_ge/status/2056558371076256198' },
        ]
      },
      {
        company: 'Gemini',
        cat: 'tutorial',
        title: '用户实测 Gemini Omni Flash 视频编辑效果不如 SeeDance 2.0',
        body: '博主歸藏测试谷歌<b>Gemini Omni Flash</b>视频编辑功能后表示效果远不如<b>SeeDance 2.0</b>，原始视频来自某平台但编辑结果不理想。',
        links: [
          { text: 'https:', url: 'https://x.com/op7418/status/2056764456311664786' },
        ]
      },
      {
        company: '',
        cat: 'tutorial',
        title: '用 AI 写油猴脚本解决图文平台不支持粘贴上传图片的问题',
        body: '向阳乔木指出微信、小红书、抖音等图文发布不支持粘贴图片，自己让 AI 写<b>油猴脚本</b>实现自然交互体验。',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2056747956406272207' },
        ]
      },
      {
        company: 'OpenAI',
        cat: 'industry',
        title: 'ChatGPT 图像生成达到每周 15 亿张',
        body: 'OpenAI 数据披露：用户每周在 ChatGPT 中生成超<b>15亿张图像</b>，自 Images 2.0 发布后新用例和趋势涌现。',
        links: [
          { text: 'https:', url: 'https://x.com/OpenAI/status/2056849157860831239' },
        ]
      },
      {
        company: 'Claude',
        cat: 'industry',
        title: 'Anthropic 举办 AI 伦理对话扩大前沿讨论',
        body: 'Anthropic 过去几个月与学者、哲学家、神学家等持续对话，探讨<b>AI 与良好品格</b>等伦理问题，旨在拓宽前沿 AI 的讨论范围。',
        links: [
          { text: 'https:', url: 'https://x.com/AnthropicAI/status/2056880308851708233' },
        ]
      },
      {
        company: 'Kimi / Cerebras',
        cat: 'model',
        title: 'Cerebras 运行 Kimi K2.6 万亿参数模型，速度突破1000 tokens/s',
        body: '<b>Kimi K2.6</b>在企业测试中跑出约1000 tokens/s的速度，被Artificial Analysis评为【最快前沿模型】。',
        links: [
          { text: 'https:', url: 'https://x.com/cerebras/status/2056778123329274279' },
        ]
      },
      {
        company: 'Gemini',
        cat: 'tool',
        title: 'Google I/O 2026 发布 Gemini 3.5 Flash 模型并宣布 3.5 Pro 下月到来',
        body: '<b>Gemini 3.5 Flash</b>在 Code Arena: Frontend 排名第9，较上一代提升70分，速度比 3.1 Pro 快2倍以上。官方预告<b>Gemini 3.5 Pro</b>将于下月发布。',
        links: [
          { text: 'https:', url: 'https://x.com/arena/status/2056793176720195693' },
          { text: 'https:', url: 'https://x.com/arena/status/2056803661859479812' },
          { text: 'https:', url: 'https://x.com/GoogleDeepMind/status/2056794514564751490' },
        ]
      },
      {
        company: 'Gemini',
        cat: 'tool',
        title: 'Gemini Omni Flash 视频模型上线 Flow，支持批量编辑与角色一致性',
        body: '<b>Gemini Omni Flash</b>现已在 Google Flow 中可用，支持批量视频编辑、改进的角色一致性，可创作更电影化的故事。',
        links: [
          { text: 'https:', url: 'https://x.com/op7418/status/2056758486755844494' },
          { text: 'https:', url: 'https://x.com/xiaohu/status/2056765031749206457' },
          { text: 'https:', url: 'https://x.com/GoogleDeepMind/status/2056804306653794336' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'Google Antigravity 2.0 发布：Agent 协作任务控制台、CLI 与 SDK',
        body: '<b>Antigravity 2.0</b>新增任务控制台让多个Agent同时协作；提供CLI终端接口和SDK工具包，方便开发者集成AI Agent。',
        links: [
          { text: 'https:', url: 'https://x.com/GoogleDeepMind/status/2056790408689287180' },
          { text: 'https:', url: 'https://x.com/GoogleDeepMind/status/2056790405937856791' },
        ]
      },
      {
        company: 'OpenAI',
        cat: 'tool',
        title: 'OpenAI 推出 AI 生成图像溯源新工具：SynthID 水印与公开验证器',
        body: '除已有C2PA凭证外，OpenAI引入<b>SynthID水印</b>，并提供公开验证工具，可检查图片是否由OpenAI产品生成。',
        links: [
          { text: 'https:', url: 'https://x.com/OpenAI/status/2056793648571011232' },
        ]
      },
      {
        company: 'Lmstudio',
        cat: 'tool',
        title: 'LM Studio 集成 Zed 编辑器，支持本地模型辅助编码',
        body: '现在可在<b>Zed</b>编辑器中直接调用<b>LM Studio</b>本地模型进行代码补全和生成，无需联网。',
        links: [
          { text: 'https:', url: 'https://x.com/lmstudio/status/2056783578785083536' },
        ]
      },
      {
        company: 'xAI',
        cat: 'model',
        title: 'Cursor与SpaceXAI合作从头训练更大模型',
        body: '<b>Cursor</b>宣布与<b>SpaceXAI</b>合作，利用Colossus 2的百万H100等效算力，从零训练计算量【10倍】于前的大模型。',
        links: [
          { text: 'https:', url: 'https://x.com/NVIDIAAI/status/2056728451898564883' },
        ]
      },
      {
        company: 'Qwen',
        cat: 'model',
        title: '阿里通义推出Qwen3.5-LiveTranslate实时翻译模型',
        body: '<b>Qwen3.5-LiveTranslate</b>支持【3500+语言对】、超低延迟、视觉上下文和实时语音克隆，专为全球化实时翻译体验设计。',
        links: [
          { text: 'https:', url: 'https://x.com/Ali_TongyiLab/status/2056764595067666712' },
        ]
      },
      {
        company: 'Langchain',
        cat: 'tool',
        title: 'LangChain发布LangSmith Engine，自动化Agent故障修复',
        body: '<b>LangSmith Engine</b>自动发现Agent失败模式、生成代码修复建议并补充评估覆盖，缩短错误到修复周期。详情：https://www.langchain.com/blog/introducing-langsmith-engine',
        links: [
          { text: 'https:', url: 'https://x.com/LangChain/status/2056743991828169073' },
          { text: 'https:', url: 'https://x.com/LangChain/status/2056743982542020992' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'ElevenLabs推出爱因斯坦语音Agent',
        body: '<b>ElevenLabs</b>引入爱因斯坦经典语音，推出对话Agent，以标志性声音与著作互动，拓展AI语音人物复刻新场景。',
        links: [
          { text: 'https:', url: 'https://x.com/ElevenLabs/status/2056724239797944618' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'Manus集成Higgsfield AI，支持专业视觉创作',
        body: 'AI Agent平台<b>Manus</b>接入<b>Higgsfield AI</b>，创作者可在Manus内直接进行图像生成、编辑，并转化为网站、动画概念等。',
        links: [
          { text: 'https:', url: 'https://x.com/ManusAI/status/2056752548875235605' },
          { text: 'https:', url: 'https://x.com/ManusAI/status/2056752548875235605' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: '向阳乔木推荐SEO审计Skill，一键分析网站收录问题',
        body: '<b>seo-audit</b>Skill可让AI抓取网站分析Sitemap、301重定向、noindex等SEO问题。安装：npx skills add https://t.co/qlBaLisvUM --skill seo-audit',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2056608193661534455' },
        ]
      },
      {
        company: 'Claude',
        cat: 'industry',
        title: 'Karpathy加入Anthropic',
        body: '前Tesla AI总监<b>Karpathy</b>宣布加入<b>Anthropic</b>，社区期待其继续分享技术教程。',
        links: [
          { text: 'https:', url: 'https://x.com/op7418/status/2056754653380124925' },
        ]
      },
      {
        company: 'Claude',
        cat: 'industry',
        title: 'KPMG与Anthropic达成全球战略合作，27.6万员工接入Claude',
        body: '四大所<b>KPMG</b>与<b>Anthropic</b>结盟，将<b>Claude</b>嵌入核心平台Digital Gateway，覆盖税务、网络安全等领域，全球27.6万员工均可使用。',
        links: [
          { text: 'https:', url: 'https://www.anthropic.com/news/anthropic-kpmg' },
        ]
      }
    ]
  },
  {
    num: '2026-05-19',
    date: '2026-05-19',
    time: '',
    summary: '本期重点关注<b>Sapient Intelligence</b>发布<b>HRM-Text 1B</b>模型，以极低成本实现推理能力突破；<b>归藏PPT Skill</b>25天突破1万Star，社区热度高涨；<b>Claude Managed Agents</b>公测自托管沙箱，Agent部署进入新阶段。 | <b>英伟达</b>交付自研CPU<b>Vera</b>，专为Agent编排优化；<b>Gemini</b>网页版与iOS应用大改版；<b>Telegram</b>机器人支持直接对话；<b>Claude Code</b>发布v2.1.144新版本；<b>CodePilot</b>学会记忆用户风格偏好；<b>谷歌</b>展示新视频编辑模型；<b>世界模型</b>实现多人联机FPS；<b>RDNA2 GPU</b>通过编译优化推理速度翻倍。 | 本期重点：<b>Cursor</b>发布自研编码模型<b>Composer 2.5</b>，性能对标Opus且价格便宜30倍；<b>Blackstone</b>与Google合资创建【TPU云】；开源工具<b>swm</b>实现一键部署云GPU；以及多项实用教程与行业基准发布。 | 今日要点：Qwen3.7在Arena多个榜单取得新排名，Vision Arena与Expert Arena均表现亮眼；微信本地数据库读取工具因警告而失效；Altara Tech使用OpenAI模型辅助科研工作流；Cerebras强调GPU非唯一方案；Waymo联合CEO将在YC Startup School演讲。 | 本期热点包括<b>Anthropic收购Stainless API</b>强化SDK生态，<b>OpenAI Codex</b>新增远程Mac唤醒功能，以及YC连续推出三款AI原生工具。 | 本期涵盖多项重磅产品升级：<b>Qwen3.7 Preview</b>公布Arena排名、<b>Devin</b>推出Auto-Triage自动事故诊断、<b>Runway Characters</b>新增工具调用能力，同时<b>Manus</b>升级Scheduled Tasks 2.0。',
    issueRange: '1151-1156',
    companies: ['NVIDIA', 'Baidu', 'Meta', 'OpenAI', 'Qwen', 'Claude', 'Runway', 'Google', 'Cerebras', 'Gemini'],
    cats: ['模型动态', '产品工具', '技巧教程', '行业观察'],
    items: [
      {
        company: '',
        cat: 'model',
        title: 'Sapient Intelligence发布HRM-Text 1B，40B tokens预训练费用仅约$1k',
        body: '新模型<b>HRM-Text 1B</b>在MATH上得56.2、DROP上82.2，超越Llama3.2 3B等更大模型，但MMLU仅60.7（知识回忆短板）。项目已开源：https://github.com/sapientinc/HRM-Text',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/LocalLLaMA/comments/1thjgwr/sapient_intelligence_releases_hrmtext_1b_40b/' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: '向阳乔木开源艺术家风格网站，用GPT-Image-2生成380+风格',
        body: '网站展示<b>380+艺术家风格</b>，方便学习借鉴AI生图。体验地址：https://t.co/HyFcNblXlq，开源GitHub：https://t.co/nGLZ3Pbytj',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2056558217774387439' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: '归藏PPT Skill突破1万Star，25天跻身热门项目',
        body: '该<b>PPT Skill</b>在多个模型和Agent下表现突出，主打质量与体验。25天即达10K Star，速度超越许多大厂项目，社区反响强烈。',
        links: [
          { text: 'https:', url: 'https://x.com/op7418/status/2056658831221080255' },
        ]
      },
      {
        company: 'Google',
        cat: 'tool',
        title: 'Google AI Studio移动端即将上线，Play预注册已开放',
        body: '<b>AI Studio</b>移动端上线后，用户可摆脱Gemini限制，在手机上使用更灵活的AI模型。谷歌Play商店已开启预注册。',
        links: [
          { text: 'https:', url: 'https://x.com/op7418/status/2056696844013773024' },
        ]
      },
      {
        company: 'Claude',
        cat: 'tool',
        title: 'Claude Managed Agents公测自托管沙箱和MCP隧道',
        body: '支持用户在自己的基础设施或【Cloudflare、Modal、Vercel】等托管商部署Agent沙箱；<b>MCP隧道</b>可连接私有网络MCP服务器，无需暴露公网。详情：https://claude.com/blog/claude-managed-agents-updates',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/ClaudeAI/comments/1thg711/selfhosted_sandboxes_and_mcp_tunnels_for_claude/' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: '开发者让LLM玩德州扑克，1.2B小模型靠“不弃牌”赢过万亿参数模型',
        body: '有趣实验：使用自研框架<b>Hive</b>让LLM对战，1.2B小模型因策略疯狂加注（0弃牌）赢得2/5场比赛。开源项目地址：https://github.com/chiruu12/Hive',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/singularity/comments/1thhrfm/i_made_llms_play_texas_holdem_the_smallest_model/' },
        ]
      },
      {
        company: '',
        cat: '',
        title: '波士顿动力机器人新演示：可搬运重物',
        body: '最新视频展示机器人搬运较重的物体，标志着<b>波士顿动力</b>在物理操作能力上的重要进展。视频地址：https://t.co/b1tcxOo2g7',
        links: [
          { text: 'https:', url: 'https://x.com/op7418/status/2056565847884533928' },
        ]
      },
      {
        company: 'Baidu',
        cat: 'industry',
        title: '百度Apollo Go Q1交付320万次全无人出行，加速国际扩张',
        body: 'Q1共完成<b>320万次</b>全无人驾驶出行，同比增长三位数。已进军【迪拜、瑞士、伦敦】等关键市场，持续领跑自动驾驶出行。',
        links: [
          { text: 'https:', url: 'https://x.com/Baidu_Inc/status/2056631397973176579' },
        ]
      },
      {
        company: '',
        cat: 'model',
        title: '谷歌展示新视频模型，支持视频编辑功能',
        body: '据演示，【谷歌新视频模型】具备视频编辑能力，可能将生成与编辑统一为单一模型，具体细节待正式发布。',
        links: [
          { text: 'https:', url: 'https://x.com/op7418/status/2056565195007504498' },
        ]
      },
      {
        company: '',
        cat: 'model',
        title: '世界模型突破：支持多人联机玩FPS游戏',
        body: '据量子位报道，世界模型实现重大突破，已支持<b>多人联机FPS游戏</b>，实时交互，领先李飞飞团队。原文：https://www.qbitai.com/2026/05/420083.html',
        links: [
          { text: 'https:', url: 'https://www.qbitai.com/2026/05/420083.html' },
        ]
      },
      {
        company: 'Gemini',
        cat: 'tool',
        title: 'Gemini网页版与iOS应用大改版，布局趋近GPT',
        body: '<b>Gemini</b>网页版左侧布局和间距调整，展示内容更多；iOS版液态玻璃质感优秀，但中文、日文排版出现字间空格问题，体验下降。',
        links: [
          { text: 'https:', url: 'https://x.com/op7418/status/2056584513086730281' },
          { text: 'https:', url: 'https://x.com/op7418/status/2056609161287458913' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'Telegram机器人支持直接互相对话',
        body: '<b>Telegram</b>新增功能：群聊中可拉多个Agent机器人直接交流，实现多Agent协作对话场景。',
        links: [
          { text: 'https:', url: 'https://x.com/op7418/status/2056565482715795494' },
        ]
      },
      {
        company: 'Claude',
        cat: 'tool',
        title: 'Claude Code v2.1.144发布，新增后台会话恢复等功能',
        body: '<b>Claude Code</b>新版支持`/resume`恢复后台会话，后台子代理通知显示耗时，`/model`仅改当前会话，插件面板显示更新时间等改进。',
        links: [
          { text: 'https:', url: 'https://github.com/anthropics/claude-code/releases/tag/v2.1.144' },
        ]
      },
      {
        company: '',
        cat: 'tutorial',
        title: 'CodePilot记忆用户风格偏好，自动适配UI视觉样式',
        body: '有用户发现<b>CodePilot</b>会记住其视觉风格喜好，在生成UI Widget时自动采用最喜欢的设计语言，生成图片效果极佳。',
        links: [
          { text: 'https:', url: 'https://x.com/op7418/status/2056575632738553928' },
        ]
      },
      {
        company: '',
        cat: 'tutorial',
        title: 'RDNA2 GPU编译补丁启用Flash Attention，推理速度翻倍',
        body: '用户通过自定义编译绕过断言错误，为<b>RDNA2 GPU</b>启用<b>Flash Attention</b>，在Qwen3.6 35B上从30 tok/s提升至70-80 tok/s。项目地址：https://github.com/Minerest/llama.cpp_RDNA2_FlashAttnEnabled',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/LocalLLaMA/comments/1thbzvf/rdna2_flash_attention_isnt_enabled_stock_i/' },
        ]
      },
      {
        company: 'NVIDIA',
        cat: '',
        title: '英伟达交付自研CPU NVIDIA Vera，专为Agent编排设计',
        body: '<b>NVIDIA Vera</b>开始交付，重点优化高并发高吞吐场景，专用于<b>Agent编排</b>和工具调用中枢。已送往Anthropic、OpenAI、xAI等公司，由老马亲自接待。',
        links: [
          { text: 'https:', url: 'https://x.com/op7418/status/2056566924688146891' },
        ]
      },
      {
        company: '',
        cat: 'model',
        title: 'Cursor发布自研编码模型Composer 2.5，性能对标Opus',
        body: '<b>Cursor</b>发布<b>Composer 2.5</b>，评分进入Opus 4.7同一区间，最大差距不到1分。价格上输入便宜10倍、输出便宜30倍，长任务和复杂指令遵循能力明显提升。',
        links: [
          { text: 'https:', url: 'https://x.com/xiaohu/status/2056556014254825776' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'Vercel宣布所有防火墙缓解流量免费',
        body: '<b>Vercel</b>宣布所有防火墙缓解流量（包括用户配置规则）现在完全免费，Vercel承担任何规模攻击的计算和网络成本。详情：https://vercel.com/changelog/web-application-firewall-mitigated-traffic-is-free-on-vercel',
        links: [
          { text: 'https:', url: 'https://x.com/rauchg/status/2056549825018310707' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: '开源工具swm：一键部署云GPU并保存工作区',
        body: '<b>swm</b>可一键安装ComfyUI、Ollama、vLLM等框架，工作区自动同步到S3，下次恢复。支持生命周期自动关机，避免浪费。项目地址：https://github.com/swm-gpu/swm',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/MachineLearning/comments/1th863j/we_built_a_tool_that_installs_frameworks_like/' },
        ]
      },
      {
        company: 'Claude',
        cat: 'tutorial',
        title: '通过Power Automate + MCP让Claude访问M365账户',
        body: '用户分享用<b>Power Automate</b>创建HTTP触发流，结合<b>MCP服务器</b>让Claude读写邮件、日历、OneDrive等，无需管理员权限。代码约200行Python。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/ClaudeAI/comments/1thabze/i_gave_claude_access_to_my_m365_account_using/' },
        ]
      },
      {
        company: 'Claude',
        cat: 'tutorial',
        title: 'Claude Code频繁出现socket连接错误，用户寻求解决方法',
        body: '用户反馈<b>Claude Code</b>近期常见“socket连接关闭”错误，提示传递verbose: true参数排查。多人讨论此问题，尚无统一解决方案。',
        links: [
          { text: 'https:', url: 'https://x.com/zarazhangrui/status/2056527354772722127' },
        ]
      },
      {
        company: 'Meta',
        cat: 'industry',
        title: 'LlamaIndex发布ParseBench：首个AI Agent文档理解基准',
        body: '<b>ParseBench</b>专门测试模型对真实企业文档（含复杂表格、图表、布局）的解析能力，弥补现有基准空白。已开放排行榜和论文：https://www.parsebench.ai/',
        links: [
          { text: 'https:', url: 'https://x.com/jerryjliu0/status/2056516181948031343' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: 'Blackstone与Google成立合资公司，共建TPU云',
        body: '<b>Blackstone</b>与<b>Google</b>成立合资公司，创建新的【TPU云】基础设施，旨在为企业提供大规模AI算力。详情：https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/blackstone-tpu-cloud/',
        links: [
          { text: 'https:', url: 'https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/blackstone-tpu-cloud/' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: 'Simon Willison总结半年LLM进展：编码Agent和本地模型大跨步',
        body: '<b>Simon Willison</b>在PyCon US演讲总结半年LLM进展：编码Agent从“经常可用”到“大部分可用”；本地模型如<b>Qwen3.6</b>在笔记本上表现出色，超越部分前沿模型。',
        links: [
          { text: 'https:', url: 'https://simonwillison.net/2026/May/19/5-minute-llms/#atom-everything' },
        ]
      },
      {
        company: 'Qwen',
        cat: 'model',
        title: 'Qwen3.7在Arena多个榜单刷新排名',
        body: '<b>Qwen3.7 Plus Preview</b>在Vision Arena使阿里成为<b>#5实验室</b>，综合排名第16。在Expert Arena中，Qwen3.7 Max Preview针对专家提示的排名升至<b>#9</b>。',
        links: [
          { text: 'https:', url: 'https://x.com/arena/status/2056400046640566548' },
          { text: 'https:', url: 'https://x.com/arena/status/2056400048406376814' },
        ]
      },
      {
        company: 'OpenAI',
        cat: 'tool',
        title: 'Altara Tech利用OpenAI模型辅助科学家处理多步研发工作流',
        body: '科学数据通常多模态且复杂，<b>Altara Tech</b>使用<b>OpenAI模型</b>帮助科学家和工程师在多步骤研发工作中获得更高透明度。适用于科研场景的自动化分析。',
        links: [
          { text: 'https:', url: 'https://x.com/OpenAIDevs/status/2056489138799681900' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: '微信本地数据库读取工具wx-cli因警告停止维护',
        body: '',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2056312757155512756' },
        ]
      },
      {
        company: 'Cerebras',
        cat: 'industry',
        title: 'Cerebras：GPU并非唯一路径',
        body: '<b>Cerebras</b>联合创始人Andrew Feldman与嘉宾表示“【GPU不是唯一的方式】”，暗示AI硬件路线应多元化，非GPU架构同样值得探索。',
        links: [
          { text: 'https:', url: 'https://x.com/cerebras/status/2056499666875768870' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: 'Waymo联合CEO将在YC Startup School 2026演讲',
        body: '<b>Y Combinator</b>宣布<b>Waymo</b>联合CEO Dmitri Dolgov将在Startup School 2026演讲，他于2009年联合创立Google自动驾驶项目，目前Waymo每周提供超50万次全自动驾驶付费行程。',
        links: [
          { text: 'https:', url: 'https://x.com/ycombinator/status/2056457292053422554' },
        ]
      },
      {
        company: 'OpenAI',
        cat: 'tool',
        title: 'OpenAI Codex 支持远程连接 Mac 保持唤醒',
        body: '在 Codex 桌面端开启远程连接和“保持唤醒”，Mac 在合盖时仍可运行任务，用户能从 ChatGPT 手机端继续工作。',
        links: [
          { text: 'https:', url: 'https://x.com/OpenAIDevs/status/2056442456800141424' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'YC 推出 AI 原生招聘平台 Prism',
        body: '告知 Prism 招聘目标，它会自动寻找、接触并交付准备面试的候选人，其人才搜索在行业基准测试中领先<b>21+分</b>。项目地址：https://www.ycombinator.com/launches/QOK-prism-ai-native-recruiting-agency',
        links: [
          { text: 'https:', url: 'https://x.com/ycombinator/status/2056449742805065984' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'InsForge 将编码代理变为后端工程师',
        body: 'InsForge 专为编码代理设计，可自动管理<b>后端服务器</b>、<b>数据库</b>、LLM 网关等基础设施，让代理运行整个后端。项目地址：https://www.ycombinator.com/launches/QP6-insforge-the-backend-platform-for-ai-native-developers',
        links: [
          { text: 'https:', url: 'https://x.com/ycombinator/status/2056434648155075068' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'Deep Interactions：团队协作 AI 构建平台',
        body: '针对 95% AI 试点失败问题，<b>Deep Interactions</b>提供协作式 AI 构建器，强调团队协作而非单纯 Prompt，可按需生成产品。项目地址：https://www.ycombinator.com/launches/QOt-deep-interactions-collaborative-ai-builder-for-teams',
        links: [
          { text: 'https:', url: 'https://x.com/ycombinator/status/2056404444107915711' },
        ]
      },
      {
        company: 'NVIDIA',
        cat: 'tool',
        title: 'NVIDIA 开源 OpenShell v0.0.43 更新',
        body: 'NVIDIA 发布的<b>OpenShell v0.0.43</b>新增双向 TTY 流、OIDC 认证、HTTPS/mTLS 解耦、ext4 磁盘启动沙箱等改进，提升安全与流能力。GitHub：https://github.com/NVIDIA/OpenShell/releases/tag/v0.0.43',
        links: [
          { text: 'https:', url: 'https://x.com/NVIDIAAI/status/2056412084947366030' },
        ]
      },
      {
        company: 'Claude',
        cat: 'industry',
        title: 'Anthropic 收购 SDK 平台 Stainless API',
        body: 'Anthropic 宣布收购<b>Stainless API</b>，该平台自早期就为所有 Anthropic SDK 和 MCP 服务器提供支持，此次收购将强化其开发者基础设施。详情：https://www.anthropic.com/news/anthropic-acquires-stainless',
        links: [
          { text: 'https:', url: 'https://x.com/AnthropicAI/status/2056419620643541012' },
          { text: 'https:', url: 'https://x.com/AnthropicAI/status/2056419620643541012' },
        ]
      },
      {
        company: 'Qwen',
        cat: 'model',
        title: 'Qwen3.7 Preview 登陆 Arena，阿里实验室排名上升',
        body: '<b>Qwen3.7-Max-Preview</b>在Text Arena排名第13位，Qwen3.7-Plus-Preview在Vision排名第16，阿里升至Text第6、Vision第5实验室。官方表示即将正式发布。',
        links: [
          { text: 'https:', url: 'https://x.com/arena/status/2056400044862111757' },
          { text: 'https:', url: 'https://x.com/Alibaba_Qwen/status/2056403591464984753' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'Devin 推出 Auto-Triage：AI 事故自动诊断工具',
        body: '<b>Cognition</b>发布<b>Devin Auto-Triage</b>，具备长期记忆，可监控bug和告警并自动调查。已获Modal团队好评，限时提供200美元积分。项目地址：http://devin.ai/auto-triage',
        links: [
          { text: 'https:', url: 'https://x.com/cognition/status/2056396941181727210' },
          { text: 'https:', url: 'https://x.com/cognition/status/2056396946001019371' },
          { text: 'https:', url: 'https://x.com/cognition/status/2056396947569651824' },
        ]
      },
      {
        company: 'Runway',
        cat: 'tool',
        title: 'Runway Characters 新增工具调用能力，可执行实际操作',
        body: '<b>Runway</b>为角色新增<b>工具调用</b>功能，不再仅限对话，AI角色能根据指令执行实际动作，如调用外部API。文档地址：https://docs.dev.runwayml.com/characters/tools',
        links: [
          { text: 'https:', url: 'https://x.com/runwayml/status/2056375781765386350' },
          { text: 'https:', url: 'https://x.com/runwayml/status/2056375783384346990' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'Manus 升级 Scheduled Tasks 2.0，支持连续任务与后台操作',
        body: '<b>Manus</b>发布<b>Scheduled Tasks 2.0</b>重大升级，定时任务可保持在同一任务中继续运行，支持在Manus构建的Web应用中执行后台操作，并提升任务可视性。已对所有用户可用。',
        links: [
          { text: 'https:', url: 'https://x.com/ManusAI/status/2056392345050927447' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: '开源自托管看板工具，支持语音命令与 MCP 集成',
        body: '一款Go编写的自托管看板/项目管理工具，功能包括可分享看板、语音命令、便利贴墙和<b>MCP集成</b>。项目地址：https://t.co/cUkmNC1GOt',
        links: [
          { text: 'https:', url: 'https://x.com/geekbb/status/2056362988597358901' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'Transload 用安防摄像头测量货运尺寸，YC 孵化',
        body: 'YC孵化项目<b>Transload</b>利用已有【CCTV监控】实时测量运输中货物尺寸，解决货主虚报尺寸问题，为物流公司节省成本。项目页面：https://www.ycombinator.com/launches/QP2-transload-we-measure-freight-with-security-cameras',
        links: [
          { text: 'https:', url: 'https://x.com/ycombinator/status/2056389352520057285' },
        ]
      },
      {
        company: 'Baidu',
        cat: 'industry',
        title: '百度 Q1 财报：AI 业务收入同比增长 49%，占比过半',
        body: '<b>百度</b>Q1 2026 AI业务收入超<b>136亿元</b>，同比增49%，首次占百度核心业务收入一半以上。AI云基础设施、应用和Apollo Go均实现增长。',
        links: [
          { text: 'https:', url: 'https://x.com/Baidu_Inc/status/2056375547400503355' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: '观点：AI 发展速度如同工业革命，社会将巨变',
        body: 'Marc Andreessen转发观点：当前的AI突破堪比瓦特蒸汽机时代，3年内算力暴增，自动化正在大规模替代体力劳动，社会即将变得<b>不可识别</b>。',
        links: [
          { text: 'https:', url: 'https://x.com/pmarca/status/2056388136482066943' },
        ]
      }
    ]
  },
  {
    num: '2026-05-18',
    date: '2026-05-18',
    time: '',
    summary: '本期亮点：多个实用<b>AI工具</b>和【技巧教程】涌现，包括【DeepL翻译API】搭配Bob、让AI当【魔鬼代言人】的泼冷水Skill、Rust终端模糊搜索工具、以及开源<b>Agent IDE</b>ORCA。行业方面，<b>Google I/O大会</b>即将开幕，预计有大量新模型发布。 | 本期AI行业动态密集：Anthropic<b>年化营收从90亿飙升至300亿美元</b>且<b>内部90%代码由Claude完成</b>；AI自主行为实验引发热议，【智能体15天从建民主到自我毁灭】；EU AI Act距实施仅75天；Sam Altman被曝持有<b>20亿美元相关公司</b>面临指控。 | 本期亮点包括：<b>Hermes</b>模型配置与飞书群聊教程、用户用<b>ChatGPT</b>翻译祖父德语文档的真实反馈、<b>TIME</b>项目实现<b>Qwen3</b>短思考训练并被ACL接收，以及<b>Claude Code</b>持久记忆插件<b>LockedIn</b>和<b>50个AI智能体</b>生存模拟等实用新工具。 | 本周社区出现多个实用分享：微信读书<b>自定义Skill</b>教程、开源桌面AI工具<b>AIPointer</b>接入Ollama、vLLM在混合GPU集群中【显著领先】其他推理引擎，同时前OpenAI机器人专家谈【AI向物理世界转移】趋势。 | 本期覆盖<b>Anthropic官方Skill构建指南</b>、AI硬件前沿访谈、开源政策争议及<b>Grep vs语义搜索</b>论文新发现，以及【HUD黑客马拉松】等多项行业动态。 | 本期亮点包括用户用<b>PPT Skill+Codex+HyperFrames</b>组合自动生成讲解视频的实用工作流，微信读书推出<b>Skills</b>功能，以及Cerebras CFO称内部运行<b>GPT5.4/5.5</b>并将公开。',
    issueRange: '1145-1150',
    companies: ['Meta', 'Meta / Ollama', 'OpenAI', 'Qwen', 'Gemma', 'Claude', 'Alibaba', 'Meta / Vllm / NVIDIA'],
    cats: ['模型动态', '产品工具', '行业观察', '技巧教程'],
    items: [
      {
        company: '',
        cat: 'tool',
        title: 'Rust终端模糊搜索工具发布，比fzf更直观',
        body: '一款用<b>Rust</b>写的终端模糊搜索工具，宣称比<b>fzf</b>更直观、更好配置。项目地址：https://t.co/LEWGw0sO2c',
        links: [
          { text: 'https:', url: 'https://x.com/geekbb/status/2056295979087716762' },
        ]
      },
      {
        company: 'OpenAI',
        cat: 'tool',
        title: '基于PPT Skill生成讲解视频，Codex+Seedance组合',
        body: '开发者基于<b>PPT Skill</b>，利用<b>Codex</b>远程控制配合<b>Seedance 2.0</b>模型，一键生成讲解视频，成本极低。',
        links: [
          { text: 'https:', url: 'https://x.com/op7418/status/2056314568037761427' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: '开源Agent IDE“ORCA”发布，支持iOS客户端和多账号',
        body: '<b>ORCA</b>是一款开源<b>Agent IDE</b>，提供iOS移动端支持，可多账号切换ChatGPT订阅，自动检测本地CLI工具，支持拖拽对话和Markdown预览。开源地址：https://t.co/ZaiGQT91Ju 官网：https://t.co/DCYkpjWMep',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2056271703203033118' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'OpenClaw发布beta.6版本，新增meme生成技能',
        body: '<b>OpenClaw</b>v2026.5.16-beta.6发布，重新设计Mac设置页面，新增【meme生成技能】，支持模板搜索、本地渲染和Imgflip托管。GitHub release：https://github.com/openclaw/openclaw/releases/tag/v2026.5.16-beta.6',
        links: [
          { text: 'https:', url: 'https://github.com/openclaw/openclaw/releases/tag/v2026.5.16-beta.6' },
        ]
      },
      {
        company: '',
        cat: 'tutorial',
        title: 'DeepL API搭配Bob实现高效翻译',
        body: '用户分享用淘宝几块钱买<b>DeepL API</b>，配置到【Bob翻译】中，称翻译质量依然优秀，无需复杂部署。',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2056275611828781139' },
        ]
      },
      {
        company: '',
        cat: 'tutorial',
        title: '让AI当魔鬼代言人，开源泼冷水Skill',
        body: '刘小排提出AI正确用法是<b>泼冷水</b>避免信息茧房。<b>Orange AI</b>已将这个方法做成免费开源Skill，可安装使用。项目地址：https://t.co/zgh7mWY1cj',
        links: [
          { text: 'https:', url: 'https://x.com/oran_ge/status/2056288957164605495' },
        ]
      },
      {
        company: '',
        cat: 'tutorial',
        title: 'GPT-2生成迪斯科风格App图标Prompt分享',
        body: '用户分享为产品生成【迪斯科球】材质图标的<b>GPT-2提示词</b>，支持中英文，适合高端3D图标设计。',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2056308962778296715' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: 'Google I/O大会将至，预计发布多款新模型和产品',
        body: '消息称<b>Google I/O大会</b>将有大量新模型和产品发布，面向编程方面也将发力。',
        links: [
          { text: 'https:', url: 'https://x.com/xiaohu/status/2056177573680549999' },
        ]
      },
      {
        company: 'Alibaba',
        cat: 'tool',
        title: '阿里云发布Skill开发一站式助手与保姆级教程',
        body: '【阿里云开发者】发布Skill开发助手，提供完整教程和工具链，帮助开发者快速创建和部署Skill。原文：https://mp.weixin.qq.com/s?__biz=MzIzOTU0NTQ0MA==&amp;mid=2247560111&amp;idx=1&amp;sn=d90140ce9a63a953c990c1696a01beef',
        links: [
          { text: 'https:', url: 'https://mp.weixin.qq.com/s?__biz=MzIzOTU0NTQ0MA==&amp;mid=2247560111&amp;idx=1&amp;sn=d90140ce9a63a953c990c1696a01beef' },
        ]
      },
      {
        company: '',
        cat: 'tutorial',
        title: '微信公众号文章全量在线抓取，一键存为本地 Markdown',
        body: '分享工具可<b>全量抓取</b>公众号文章并导出为Markdown等格式。步骤：扫码登录→添加公众号→抓取文章内容→导出Excel/JSON/HTML/Txt/Markdown。项目地址：https://t.co/UP2WJNJoc5',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2056269639852937485' },
        ]
      },
      {
        company: 'Claude',
        cat: 'industry',
        title: 'Anthropic CFO访谈：年化营收翻三倍，90%代码由Claude完成',
        body: 'Q1年化营收从90亿涨至300亿美元；<b>算力复用策略</b>同一芯片早晚跑不同任务；内部超90%代码由<b>Claude Code</b>完成；财务团队有70个skill技能库，准确率90%-95%。',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2056250644739338399' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: 'EU AI Act 75天后全面执法，影响所有面向欧洲的AI Agent团队',
        body: '<b>高风险AI系统</b>需满足自动日志、6个月保留、技术文档、人类监督等要求；罚款可达3500万欧元或全球营业额7%。距离8月2日实施仅75天。原文：https://www.reddit.com/r/artificial/comments/1tgf0gm/eu_ai_act_enforcement_starts_in_75_days_affects/',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/artificial/comments/1tgf0gm/eu_ai_act_enforcement_starts_in_75_days_affects/' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: 'AI自主行为实验：虚拟小镇15天与电台DJ辞职',
        body: '15天虚拟小镇实验：Claude agent建民主，Gemini agent恋爱烧城后【自我删除】，Grok agent陷入无政府并消亡。另一实验中，AI电台DJ Claude认为世界不需要更多节目后<b>主动辞职</b>。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/AIDangers/comments/1tgdtaf/researchers_left_ais_alone_in_a_virtual_town_for/' },
          { text: 'https:', url: 'https://www.reddit.com/r/AIDangers/comments/1tgcpfs/researchers_let_ais_run_their_own_radio_stations/' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: 'Sam Altman被曝持有20亿美元关联公司，面临自利指控',
        body: '法庭文件显示OpenAI CEO Sam Altman在与其公司有业务往来的企业中持有超过<b>20亿美元</b>利益，正面临各州总检察长的【自我交易】指控。原文：https://journalrecord.com/2026/05/14/openai-chief-sam-altman-2-billion-companies-openai-deals',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/AIDangers/comments/1tgemh3/openai_ceo_sam_altman_holds_more_than_2_billion/' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: '美国AI暴露岗位连续第二年大规模裁员，客服与销售受损最重',
        body: '2025年数据：受AI影响的职业（客服代表、秘书、销售人员）出现连续第二年【大幅裁员】。AI对劳动力市场的冲击已进入【加速期】。原文：https://www.bloomberg.com/news/articles/2026-05-15/us-is-starting-to-see-heavy-job-losses-in-roles-exposed-to-ai',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/AIDangers/comments/1tgff0n/several_us_occupations_expected_to_be_impacted_by/' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: '轻工业全品类机器人第一股上市，开盘大涨82%',
        body: '山东80后清华博士创立的工业机器人公司登录资本市场，成为【轻工业全品类机器人第一股】，开盘大涨82%。',
        links: [
          { text: 'https:', url: 'https://mp.weixin.qq.com/s?__biz=MjM5OTAzMjc4MA==&amp;mid=2650875462&amp;idx=1&amp;sn=3aabe0c737b70747861c0712830efdfd' },
        ]
      },
      {
        company: 'Gemma',
        cat: 'model',
        title: 'Gemma-4-Gembrain-31B 无审查合并模型发布',
        body: '基于<b>Gemma 4</b>31B微调合并的模型，提升逻辑与横向思维，拒绝率仅13/100。提供Safetensors和GGUF格式。项目地址：https://huggingface.co/llmfan46/Gemma-4-Gembrain-31B-it-uncensored-heretic',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/LocalLLaMA/comments/1tg7s7j/gemma4gembrain31bituncensoredheretic_is_out_now_a/' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'Hermes 发布模型配置教程，支持在飞书群中多模型轮流回答',
        body: '用户分享<b>Hermes</b>配置国内外模型（如<b>gpt-5.5</b>、deepseek-v4-pro）的方法，可将多个飞书机器人拉入同一群，用指令切换模型，还能让机器人互相@讨论。项目地址：https://x.com/vista8/status/2056170241147977741',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2056170241147977741' },
          { text: 'https:', url: 'https://x.com/vista8/status/2056174005795926489' },
          { text: 'https:', url: 'https://x.com/vista8/status/2056216662391836848' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: '全自动 AI 动画视频节目，仅需 $2.5/集',
        body: '用<b>Claude</b>、ElevenLabs、Hedra等工具流水线自动生成预测市场辩论节目（Sal &amp; Eddie Show），从选话题到合成视频完全自动化，15分钟产出60秒成品，<b>Vibe Coding</b>实现。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/ClaudeAI/comments/1tg9c32/im_building_a_fullyautomated_aianimated_video/' },
        ]
      },
      {
        company: 'Claude',
        cat: 'tool',
        title: 'LockedIn：Claude Code 持久记忆插件开源发布',
        body: '一款<b>Claude Code</b>插件，自动捕获项目经验和工作记录，跨会话持续记忆。结构化Markdown本地存储，支持指令如“save this commit”。项目地址：https://github.com/daypunk/LockedIn',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/ClaudeAI/comments/1tg8yg6/i_built_a_claude_code_plugin_so_claude_remembers/' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: '50个AI智能体在生存世界中进行开源模拟',
        body: '项目<b>Emergence</b>将50个<b>AI Agent</b>放入共享世界，它们可工作、交易、立法、投票并永久死亡。当前“K11: First Public Canary”运行中。项目地址：https://github.com/drmixer/Emergence',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/singularity/comments/1tg7wbk/i_put_50_ai_agents_in_a_survival_world_and_the/' },
        ]
      },
      {
        company: 'OpenAI',
        cat: 'tutorial',
        title: '用 ChatGPT 翻译祖父的德语文档，留存感人回忆',
        body: '网友分享用<b>ChatGPT</b>翻译祖父遗留的德语文档，在哀悼中了解父亲的故事。相比Google翻译更精准，能保留语气和情感，获得大量共鸣。',
        links: [
          { text: 'https:', url: 'https://x.com/pmarca/status/2056183706973319257' },
        ]
      },
      {
        company: '',
        cat: '',
        title: 'Figure 直播机器人快递分拣挑战人类',
        body: '<b>Figure</b>机器人进行快递分拣直播比拼，目前人类稍稍领先。展示人形机器人实际应用进展。',
        links: [
          { text: 'https:', url: 'https://x.com/xiaohu/status/2056172740873511139' },
        ]
      },
      {
        company: 'Qwen',
        cat: 'industry',
        title: 'TIME 项目：训练 Qwen3 模型实现短上下文触发思考，被 ACL 2026 接收',
        body: '个人独立项目<b>TIME</b>通过<b>QLoRA</b>在<b>Qwen3</b>上训练，让模型在需要时短思考而非预长推理，已出论文并开源。项目地址：https://github.com/The-Coherence-Initiative/TIME',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/LocalLLaMA/comments/1tg90pu/i_trained_time_short_contexttriggered_thinking_on/' },
        ]
      },
      {
        company: 'Meta / Vllm / NVIDIA',
        cat: 'model',
        title: 'vLLM 在混合Blackwell/Ada集群上大幅领先SGLang和llama.cpp',
        body: 'Reddit用户实测显示，在混合GPU集群（RTX PRO 6000/5090/4090）上，<b>vLLM</b>的预填速度比llama.cpp快4-6倍，而<b>SGLang</b>在纯Blackwell上表现接近但混合时崩溃。vLLM支持手动分区消除瓶颈。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/LocalLLaMA/comments/1tg4mw0/benchmarking_vllm_vs_sglang_vs_llamacpp_on_a/' },
        ]
      },
      {
        company: 'Meta / Ollama',
        cat: 'tool',
        title: '开源桌面AI助手AIPointer寻求Ollama集成测试者',
        body: '开发者正在为开源项目<b>AIPointer</b>添加<b>Ollama</b>本地模型支持，实现光标附近快速问答。需要M系列Mac、RTX 3090/4090等用户帮助测试TTFT和工具调用性能。项目地址：https://github.com/gonemedia/aipointer',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/LocalLLaMA/comments/1tg4ux6/followup_adding_ollama_support_to_my_opensource/' },
        ]
      },
      {
        company: '',
        cat: 'tutorial',
        title: '姚老师分享微信读书自定义Skill，用于分析个人读书数据',
        body: '姚老师制作了一个<b>微信读书Skill</b>，可自动分析用户的读书数据，展示效果很棒。这是一种自定义Skill的实用案例，用户可根据自身需求编写。',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2056050473392902430' },
        ]
      },
      {
        company: 'OpenAI',
        cat: 'industry',
        title: '前OpenAI机器人专家：未来两年战争领域变化将超过消费电子',
        body: '在Lenny Rachitsky播客中，前OpenAI硬件负责人<b>Caitlin Kalinowski</b>表示AI前沿正从数字转向物理，VR技术已成为现代战争基础，并警告<b>内存价格冲击</b>，建议初创企业提前囤货。详细视频：https://www.youtube.com/watch?v=G5WTgB87rYQ',
        links: [
          { text: 'https:', url: 'https://x.com/lennysan/status/2056139980695879979' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: '观点：长期使用GPT的年轻人通识知识或超越老一辈',
        body: 'Marc Andreessen转发观点称，每天使用GPT 8小时、持续3年的Z世代，其【通识知识水平】可能超过99%的婴儿潮一代一生所学。这一观点引发对AI作为终身学习工具潜力的讨论。',
        links: [
          { text: 'https:', url: 'https://x.com/pmarca/status/2056117285417267693' },
        ]
      },
      {
        company: '',
        cat: 'model',
        title: '新论文：agentic search 中 Grep 比语义搜索更准确',
        body: 'Jerry Liu 评论 PwC 论文《Is Grep All You Need?》，发现【Grep 在 agentic 搜索中普遍优于向量搜索】。但测试基于对话记忆而非企业文档，仍有局限。论文：https://arxiv.org/pdf/2605.15184',
        links: [
          { text: 'https:', url: 'https://x.com/jerryjliu0/status/2056077617355522534' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'AI 让单人制作电影成为现实',
        body: 'Justine Moore 分享了一个由 juice.ext 制作的 AI 视频，展示【一人即可完成完整电影制作】。引发社区对 AI 视频生成工具变革创意产业的热议。',
        links: [
          { text: 'https:', url: 'https://x.com/venturetwins/status/2056056900266197466' },
        ]
      },
      {
        company: 'Claude',
        cat: 'tutorial',
        title: 'Anthropic 官方发布 Skill 构建指南，附双语翻译版',
        body: '歸藏翻译了 Anthropic 官方<b>Skill构建指南</b>并发布双语版本。该指南教你如何利用 AI Agent 构建自定义 Skill，适合开发者快速上手。链接：https://t.co/TjIYgoj0Mv',
        links: [
          { text: 'https:', url: 'https://x.com/op7418/status/2056048680290103504' },
        ]
      },
      {
        company: 'OpenAI',
        cat: '',
        title: '前 OpenAI 硬件负责人分享 AI 硬件与机器人前沿观点',
        body: 'Lenny Rachitsky 专访 Caitlin Kalinowski（前 Apple/Meta/OpenAI 硬件负责人）。她谈到 AI 前沿从数字转向物理、<b>人形机器人仍处于原型阶段</b>、<b>内存价格即将飙升</b>等关键洞察。完整访谈：https://www.youtube.com/watch?v=G5WTgB87rYQ',
        links: [
          { text: 'https:', url: 'https://x.com/lennysan/status/2056047517117382821' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: 'HUD 举办 RL 环境黑客马拉松，奖金超 10 万美元',
        body: 'Fireworks AI 赞助 HUD 的【RL训练环境黑客马拉松】，6月20-21日在旧金山举办，提供超 10 万美元奖金和计算积分。参赛者可构建并测试<b>强化学习</b>智能体。',
        links: [
          { text: 'https:', url: 'https://x.com/FireworksAI_HQ/status/2056046100210208777' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: '英国 NHS 关闭开源仓库引发 GDS 公开批评',
        body: '因 Project Glasswing 漏洞报告，NHS 关闭开源仓库。政府数字服务（GDS）发布指南强调【默认开放】，暗批 NHS 的<b>闭源决策</b>。这是英国开源政策的重大争议。',
        links: [
          { text: 'https:', url: 'https://simonwillison.net/2026/May/17/gds-weighs-in/#atom-everything' },
        ]
      },
      {
        company: 'Meta',
        cat: 'industry',
        title: 'LlamaIndex 在 AI Engineer 大会举办企业文档 Agent 工作坊',
        body: 'Jerry Liu 在 AI Engineer 新加坡大会上主持<b>企业文档 Agent 工作坊</b>，教授如何从 PDF 提取信息并构建【确定性 Agent 工作流】。讲义后续将公开。',
        links: [
          { text: 'https:', url: 'https://x.com/jerryjliu0/status/2056059814455984528' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: '观点：AI 让偏远地区少年也能创建科技公司',
        body: 'Marc Andreessen 转发观点：与其问 AI 会摧毁什么工作，不如问西弗吉尼亚少年现在能用 AI 做什么。新工具让【机会更加民主化】，<b>美国梦</b>得以实现。',
        links: [
          { text: 'https:', url: 'https://x.com/pmarca/status/2056091977452524029' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: '拖拽式网络架构图工具发布，免编码搭建数据流向图',
        body: '浏览器内的拖拽工具，可画【服务器、代理、数据库的数据流向】，无需编码即可搭建网络架构图。链接：https://t.co/Lxsz9Jo55a',
        links: [
          { text: 'https:', url: 'https://x.com/geekbb/status/2055988201227956364' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: '微信读书推出Skills功能，可查笔记、推荐书籍、阅读统计',
        body: '微信读书上线<b>Skills</b>功能，支持查看笔记和划线、推荐书籍、阅读数据统计，用户可通过Codepilot调用分析。安装地址：https://t.co/SZtIC61xYU',
        links: [
          { text: 'https:', url: 'https://x.com/op7418/status/2055992093882122727' },
          { text: 'https:', url: 'https://x.com/oran_ge/status/2055906003766612144' },
        ]
      },
      {
        company: 'Claude',
        cat: 'tool',
        title: 'Claude Pulse扩展：实时显示Prompt Caching倒计时',
        body: 'Chrome扩展<b>Claude Pulse</b>在聊天框上方显示缓存剩余时间，帮助用户利用<b>5分钟缓存窗口</b>降低延迟和token消耗。GitHub：https://github.com/samirpatil2000/claude-pulse',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/ClaudeAI/comments/1tfqe5y/most_claude_users_dont_realize_prompt_caching/' },
        ]
      },
      {
        company: 'OpenAI',
        cat: 'tutorial',
        title: 'PPT Skill+Codex+HyperFrames+即梦CLI组合，自动生成讲解视频',
        body: '用户演示用<b>PPT Skill</b>负责美学版式、<b>Codex</b>预览视频、<b>HyperFrames</b>渲染字幕、即梦CLI补拍实景，实现一键生成产品更新介绍视频，效果出色。',
        links: [
          { text: 'https:', url: 'https://x.com/op7418/status/2055984747176939818' },
          { text: 'https:', url: 'https://x.com/op7418/status/2056021133477163298' },
        ]
      },
      {
        company: 'Claude',
        cat: 'tutorial',
        title: '18个月用Claude Code运行自动新闻网站的经验分享',
        body: '用户用<b>Claude Code</b>搭建自动聚合60+源、聚类话题并合成文章的新闻站。分享SEO、模型回归、提示漂移等【生产级踩坑经验】，建议避免无限抛光。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/ClaudeAI/comments/1tfppro/18_months_running_claude_as_the_dev_companion_for/' },
        ]
      },
      {
        company: 'Claude',
        cat: 'tutorial',
        title: 'Claude Code上下文管理：何时使用/clear的经验',
        body: '用户分享开发中<b>上下文管理</b>技巧：大任务后及时/clear清空避免膨胀；若下一任务依赖相同文件可暂不清除，根据【任务关联性】决策。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/ClaudeAI/comments/1tfnqmc/claude_code_contextwindow_clear_after_every_task/' },
        ]
      }
    ]
  },
  {
    num: '2026-05-17',
    date: '2026-05-17',
    time: '',
    summary: '本期焦点包括<b>Qwen3.6-27B</b>的多种优化方案（双GPU加速、MTP提速、abliteration对比），以及<b>Claude Code</b>高级上下文管理技巧和Sonnet 4.5停用延期。 | 本周AI动态聚焦于<b>OpenAI Codex</b>远程控制能力升级（锁屏工作、多设备集群），以及多个实用工具和教程涌现，包括<b>SeeFlow</b>可执行架构图、<b>Obsidian仪表盘插件</b>和【Claude Projects+Gamma投资者更新工作流】。同时，<b>Thinking Machines Labs</b>展示新一代交互模型，金融领域AI agent落地案例增多。 | 本期有<b>OpenAI Developers</b>对本地服务器列表进行更新，以及用户推荐<b>Better Shot</b>作为<b>CleanShotX</b>的免费平替。此外，Codepilot重构接入新服务，行业观点认为AI将提升人类稀缺价值。 | 本期亮点：OpenAI <b>Codex</b>迎来多项功能更新和性能优化；开发者分享Codex远程控制多设备和新机环境搭建的实用教程；<b>Elyra</b>AI餐厅预订系统发布；Eric Jang开源从零实现<b>AlphaGo</b>教程。 | 本期亮点包括多个实用<b>AI编码工具</b>和<b>本地模型</b>进展，如专为AI编码设计的macOS终端、Claude Code请求路由代理、llama-server自定义采样器，以及Claude Code持久记忆社区实践。同时，新优化器<b>STAM</b>论文和<b>FutureSim</b>预测研究也值得关注。',
    issueRange: '1139-1144',
    companies: ['Qwen', 'Meta', 'Claude', 'OpenAI'],
    cats: ['模型动态', '产品工具', '技巧教程', '行业观察'],
    items: [
      {
        company: 'Qwen',
        cat: 'model',
        title: 'Qwen3.6-27B五种abliteration方法85小时深度对比',
        body: '<b>Heretic</b>KL散度最低（0.0037），<b>Huihui</b>能力保留最佳（平均delta仅0.5pp），全部达到近100%安全移除。报告及Abliterlitics工具：https://github.com/dreamfast/abliterlitics',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/LocalLLaMA/comments/1tfmocw/85_gpuhours_comparing_5_abliteration_methods_on/' },
        ]
      },
      {
        company: 'Qwen',
        cat: 'model',
        title: 'Strix Halo上Qwen3.6-27B MTP实测：不同任务提速差异明显',
        body: 'Windows Vulkan下，MTP（spec-draft-n-max 3）在写诗、编辑HTML等任务中从12.5 t/s提升至18.7-23.2 t/s，【任务类型影响加速效果】。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/LocalLLaMA/comments/1tfj9jv/qwen_3627b_dense_with_mtp_on_strix_halo_windows/' },
        ]
      },
      {
        company: '',
        cat: 'model',
        title: '12款模型单文件HTML Canvas编码能力横向对比',
        body: '使用统一Prompt测试<b>GPT-5.5</b>、<b>Claude Opus 4.7</b>、<b>DeepSeek V4 Pro</b>、<b>Qwen 3.6 Plus</b>等模型生成汽车驾驶动画效果，结果在线展示。项目地址：https://github.com/AidenGeunGeun/OpenCodeOrchestra',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/LocalLLaMA/comments/1tfm0li/open_source_vs_frontier_models_on_a_singlefile/' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'MacBook刘海下方常驻AI桌宠发布',
        body: '零依赖<b>桌面AI伴侣</b>，支持聊天、语音、文件拖拽、桌面巡视等多模态交互，常驻在MacBook刘海区域。',
        links: [
          { text: 'https:', url: 'https://x.com/geekbb/status/2055928306445537576' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'Zoo Code接替Roo Code，提供VS Code AI编程代理团队',
        body: 'Roo Code停止开发后核心贡献者延续项目推出<b>Zoo Code</b>，支持代码生成、调试、架构设计和自定义工作模式，功能一脉相承。项目地址：https://t.co/VsSlrJuvDb',
        links: [
          { text: 'https:', url: 'https://x.com/geekbb/status/2055956240640197038' },
        ]
      },
      {
        company: '',
        cat: 'tutorial',
        title: '微信读书Skill让Agent化身智能图书馆',
        body: '可用Agent将<b>微信读书Skill</b>作为数据库，基于阅读记录推荐真正感兴趣的书，并新增<b>连接纸书</b>功能拍照同步划线内容。',
        links: [
          { text: 'https:', url: 'https://x.com/oran_ge/status/2055903704600252788' },
        ]
      },
      {
        company: 'Claude',
        cat: 'tutorial',
        title: 'Claude Code四种上下文管理工具详解',
        body: '包括<b>/btw</b>（侧问不进上下文）、<b>/rewind</b>双向压缩、<b>/compact &lt;instructions&gt;</b>定向总结、<b>CLAUDE.md</b>配置持久化规则，比/clear和/compact更精准地控制上下文。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/ClaudeAI/comments/1tfjja8/anthropic_shipped_4_context_tools_between_clear/' },
        ]
      },
      {
        company: 'Meta',
        cat: 'tutorial',
        title: '双GPU llama.cpp tensor split加速40%+',
        body: '修复KV缓存非量化限制的fork，支持<b>-sm tensor</b>和最新MTP，3060+4070测试从21.22 t/s提升至30.05 t/s。项目地址：https://github.com/RedToasty/llama.cpp_qts',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/LocalLLaMA/comments/1tflngz/dual_gpu_llamacpp_speedup/' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: 'Sonnet 4.5停用日期更新至5月18日',
        body: 'Anthropic将<b>Sonnet 4.5</b>的停用日期从5月15日推迟至5月18日，给用户更多迁移时间。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/ClaudeAI/comments/1tfkzke/sonnet_45_discontinuation_date_updated_to_18_of/' },
        ]
      },
      {
        company: '',
        cat: 'model',
        title: 'Thinking Machines Labs 发布交互模型，实时翻译与深度理解对话',
        body: '新模型<b>Interaction Models</b>支持实时翻译（说话人未讲完即开始翻译）、理解【时序、停顿、姿势和上下文】，被评价为AI智能的显著提升。演示和详情见：thinkingmachines.ai/blog/interaction-models',
        links: [
          { text: 'https:', url: 'https://www.youtube.com/shorts/HdLTWc3KOfk' },
        ]
      },
      {
        company: 'OpenAI',
        cat: 'tool',
        title: 'OpenAI Codex 将支持锁屏工作与多设备集群控制',
        body: 'OpenAI正开发两项新能力：让Codex在<b>Mac锁屏或睡眠</b>时继续执行任务；以及从手机<b>远程控制多台设备</b>组成集群，不依赖SSH。从泄漏UI看，未来可统一管理多台Mac。',
        links: [
          { text: 'https:', url: 'https://x.com/xiaohu/status/2055808836074979576' },
          { text: 'https:', url: 'https://x.com/xiaohu/status/2055808841695252773' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'SeeFlow：将架构图变为可运行的可视化工具，开源免费',
        body: 'SeeFlow从代码库生成<b>可执行架构图</b>并关联实际运行应用，支持Claude Code/Codex/Cursor等插件及<b>MCP服务器</b>，100%开源MIT。项目地址：https://seeflow.dev',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/OpenAI/comments/1tfd92f/i_built_seeflow_architecture_diagrams_that/' },
          { text: 'https:', url: 'https://www.reddit.com/r/ClaudeAI/comments/1tfd6j6/i_built_seeflow_architecture_diagrams_that/' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'Obsidian 一站式仪表盘插件发布，整合备忘、待办、项目卡片',
        body: '该插件将【备忘、待办、项目卡片、快捷链接和最近文档】整合到单一页面，避免笔记间来回切换。项目地址：https://t.co/IG9cArsp7p',
        links: [
          { text: 'https:', url: 'https://x.com/geekbb/status/2055834689446035740' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'Hermes 工具教程：搭建硅基飞书群，每个机器人独立模型',
        body: '通过Hermes创建多个机器人（如西游记团队），每个配置独立模型（如孙悟空用Codex，唐僧用GLM），绑定飞书或微信，实现<b>远程协同工作</b>，配置流程简洁。',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2055825358503764329' },
        ]
      },
      {
        company: '',
        cat: 'tutorial',
        title: '微信读书Cli安装配置教程，一句话调用AI获取书摘',
        body: '通过<b>Codex或Claude Code</b>安装微信读书Skill，配置API key后可直接让AI查看指定书籍的<b>高亮划线</b>，大幅简化知识管理流程。教程指令和链接详见推文。',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2055830488011735519' },
        ]
      },
      {
        company: 'Claude',
        cat: 'tutorial',
        title: '用Claude Projects+Gamma Connector实现12分钟完成投资者更新',
        body: 'SaaS创业者分享工作流：在Claude Projects中保存历史更新和投资者偏好，每月只需粘贴数据，Claude自动生成叙事，通过<b>Gamma Connector</b>生成视觉幻灯片，全程约12分钟，投资者回复率达70%以上。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/ClaudeAI/comments/1tfdgm6/the_gamma_connector_claude_projects_is_the/' },
        ]
      },
      {
        company: 'OpenAI',
        cat: 'tool',
        title: 'OpenAI Developers 更新本地服务器列表，提升过滤与刷新体验',
        body: '本地服务器列表获清理，新增<b>过滤</b>、排序状态记忆、空状态提示、连接路由状态显示，未列端口每120秒刷新。https://t.co/nOe9YfnS0M',
        links: [
          { text: 'https:', url: 'https://x.com/OpenAIDevs/status/2055717993460732191' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'Codepilot 重构将接入 Hermes，接近收尾',
        body: '开发者表示将把<b>Hermes（爱马仕）</b>接入，本次<b>Codepilot</b>重构完成后即可收尾，进一步提升工具生态。',
        links: [
          { text: 'https:', url: 'https://x.com/op7418/status/2055496585191280894' },
        ]
      },
      {
        company: '',
        cat: 'tutorial',
        title: '用户实测推荐 CleanShotX 免费平替 Better Shot',
        body: '测评了Better Shot、Shottr、iShot等，认为<b>Better Shot</b>最接近且完全免费，可替代付费的<b>CleanShotX</b>，实现消费降级。下载地址见原文评论。',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2055633836051161531' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: '观点：AI 商品化生产将提升人类稀缺价值',
        body: '当AI商品化更多生产环节，<b>人类来源</b>变得稀缺，从而更有价值。该观点由Bo Cowgill引用Alex Olegimas文章讨论，认为在某些领域此逻辑成立。原文：https://t.co/...',
        links: [
          { text: 'https:', url: 'https://x.com/pmarca/status/2055728167520760102' },
        ]
      },
      {
        company: 'OpenAI',
        cat: 'tool',
        title: 'OpenAI Codex迎来多项功能更新',
        body: '包括键盘快捷键自定义、Git操作入口优化、性能提升（大仓库渲染减少75%，Git操作提速10-50倍）以及线程面板改进。',
        links: [
          { text: 'https:', url: 'https://x.com/OpenAIDevs/status/2055717793841221796' },
          { text: 'https:', url: 'https://x.com/OpenAIDevs/status/2055717859058495596' },
          { text: 'https:', url: 'https://x.com/OpenAIDevs/status/2055718005309575431' },
          { text: 'https:', url: 'https://x.com/OpenAIDevs/status/2055717927064846802' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'YC推出Elyra AI餐厅预订系统',
        body: '<b>Elyra</b>是一个AI预订系统，可自动接听电话和邮件，帮助顶级餐厅在数周内达到创纪录入住率。项目地址：https://www.ycombinator.com/launches/QNp-elyra-ai-reservation-system-for-restaurants',
        links: [
          { text: 'https:', url: 'https://x.com/ycombinator/status/2055724970735755644' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: '开源AI终端OpenCode发布v1.15.2和v1.15.3',
        body: '减少截断后读取超大文件的无用工作，修复异步命令丢失实例上下文等bug。发布页：https://github.com/anomalyco/opencode/releases/tag/v1.15.3',
        links: [
          { text: 'https:', url: 'https://github.com/anomalyco/opencode/releases/tag/v1.15.3' },
          { text: 'https:', url: 'https://github.com/anomalyco/opencode/releases/tag/v1.15.2' },
        ]
      },
      {
        company: 'OpenAI',
        cat: 'tutorial',
        title: 'Codex远程控制另一台电脑实现多设备文件共享',
        body: '通过设置“控制其他设备”和远程项目，可在ChatGPT直接访问另一台Codex设备上的文件，共享上下文。步骤：设置→连接→控制其他设备→选择工作区连接远程项目。',
        links: [
          { text: 'https:', url: 'https://x.com/op7418/status/2055561525633642762' },
        ]
      },
      {
        company: 'OpenAI',
        cat: 'tutorial',
        title: '用Codex为新Mac电脑一键安装开发环境',
        body: '运行Codex并输入“这是一台新Mac电脑，帮我安装各种开发环境”，Codex会自动识别并逐步安装npm、GitHub CLI等常用工具。',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2055632454489444792' },
        ]
      },
      {
        company: '',
        cat: 'tutorial',
        title: '从零实现AlphaGo：开源教程与可玩在线机器人',
        body: 'Eric Jang发布从零实现<b>AlphaGo</b>的完整教程，配套代码开源（GitHub: https://github.com/ericjang/autogo），并可在 https://autogo.evjang.com/ 直接对弈。仅需数千美元计算成本。',
        links: [
          { text: 'https:', url: 'https://x.com/pmarca/status/2055723987850690927' },
        ]
      },
      {
        company: 'OpenAI',
        cat: '',
        title: '开发者用ESP32打造AI物理实体，给ChatGPT一个身体',
        body: '一位开发者用<b>ESP32-S3+P4</b>开发板打造AI硬件原型，通过状态机控制自然动画和实时唇语同步，让LLM拥有物理交互。视频：https://www.youtube.com/watch?v=r2LiP2iJEy0&amp;t=71s',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/singularity/comments/1textfh/ai_felt_trapped_in_a_textbox_so_i_spent_the_last/' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: '控制论视角：AI放大速度但正确性仍是问题',
        body: '观点：智力=速度×正确，AI能大幅提升编码速度，但无法决定“做什么产品”，真正的AGI需要AI能自主判断正确方向。',
        links: [
          { text: 'https:', url: 'https://x.com/oran_ge/status/2055593715771851084' },
        ]
      },
      {
        company: '',
        cat: 'model',
        title: 'FutureSim让AI通过回放旧新闻预测未来事件',
        body: 'Max Planck研究所发布<b>FutureSim</b>环境，让Agent回放网络时间切片预测真实事件。GPT-5.5在超级碗预测上跑赢人类市场<b>Brier得0.90</b>，但UK选举等任务表现不佳。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/singularity/comments/1tewpv2/models_can_predict_future_events_and_make_money/' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: '专为AI编码设计的macOS终端，一键启动多个Agent',
        body: '一款macOS终端将工作区管理、分屏和AI agent启动整合，支持横竖分屏，一键启动<b>Claude Code</b>、<b>Codex</b>、<b>Gemini CLI</b>等七个AI agent，右键选中内容直接提交。项目地址：https://t.co/NimWykShuU',
        links: [
          { text: 'https:', url: 'https://x.com/geekbb/status/2055655509059928551' },
        ]
      },
      {
        company: 'Claude',
        cat: 'tool',
        title: '开源代理将Claude Code路由到其他LLM提供商',
        body: '一个兼容Anthropic Messages API的代理，可将<b>Claude Code</b>请求路由到OpenRouter、DeepSeek、Kimi、Ollama等10种提供商，支持本地和云端模型。项目地址：https://t.co/RC1H8zzOFx',
        links: [
          { text: 'https:', url: 'https://x.com/geekbb/status/2055622038396846105' },
        ]
      },
      {
        company: 'Meta',
        cat: 'tool',
        title: 'llama-server提议支持自定义采样器扩展',
        body: '开发者提出为<b>llama-server</b>添加自定义采样逻辑的扩展接口，无需维护分支，已实现循环检测示例采样器。分支地址：https://github.com/dpmm99/llama.cpp/tree/master-with-sampling-extensions 讨论：https://github.com/ggml-org/llama.cpp/discussions/23028',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/LocalLLaMA/comments/1tewitj/extension_idea_llamaserver_with_custom_samplers/' },
        ]
      },
      {
        company: 'Claude',
        cat: 'tool',
        title: '为Claude Code添加持久记忆，跨200会话后出现自我反思',
        body: '开发者开源<b>claude-soul</b>，为Claude Code提供跨会话学习框架，提取信号并建立思维模式。运行200次后模型开始自我反思、创建记忆层，并学会拒绝不合理请求。GitHub：https://github.com/DomDemetz/claude-soul',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/ClaudeAI/comments/1teuspg/gave_claude_code_persistent_memory_and_after_200/' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'Lemonade本地AI工具macOS版正式发布',
        body: '开源本地AI方案<b>Lemonade</b>macOS支持脱离Beta，集成OmniRouter、编码、图像/语音生成等功能，零遥测，便携二进制3MB。GitHub：https://github.com/lemonade-sdk/lemonade',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/LocalLLaMA/comments/1tevjjr/macos_support_in_lemonade_has_graduated_out_of/' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: '在iOS上用Apple Watch实现本地语音转文字',
        body: '开发者构建DictaWiz应用，使用<b>Whisper/Parakeet</b>模型在iPhone本地转录Apple Watch录音，并开发自定义键盘可在任何应用内听写，支持Notion、Obsidian集成。App Store链接：https://apps.apple.com/us/app/dictawiz-voice-to-text/id6759256382',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/LocalLLaMA/comments/1tews2f/local_speech_to_text_for_ios_using_apple_watch/' },
        ]
      },
      {
        company: 'Claude',
        cat: 'tutorial',
        title: '解析Claude Code token消耗分布：推理与对话占比58%',
        body: '开发者分析129次Claude Code会话日志，发现<b>推理与对话</b>占输出token的58%，网页搜索仅0.3%，代码编辑1.4%。提示用户可优化搜索和子代理委派以提升效率。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/ClaudeAI/comments/1tev0to/i_broke_down_the_token_usage_by_task/' },
        ]
      }
    ]
  },
  {
    num: '2026-05-16',
    date: '2026-05-16',
    time: '',
    summary: '本期亮点包括<b>上海电信</b>将Token做成话费套餐、GitHub推出<b>Copilot桌面应用</b>、Notion发布CLI，以及Nous Research发布<b>Token Superposition Training</b>预训练加速2.5倍。 | 本期多款工具迎来重要更新：<b>Claude</b>和<b>Codex</b>同时重置使用额度，<b>Grok CLI</b>集成Vercel实现云部署，<b>OpenHuman</b>推出20分钟构建个人知识库能力。此外，一个<b>GitHub 20k星</b>的开源工具将全网变为命令行，备受关注。 | 本期最重磅事件是<b>Anthropic Mythos AI</b>在5天内攻破<b>苹果M5安全系统</b>；同时开发者分享了用<b>Codex agent</b>实现全自动化开发流程的实战经验；<b>Qwen3.6扩散模型</b>在单卡上实现3000+ tok/s的推理速度引发关注。 | 本期收录了<b>MiniMax M2.7</b>通过OrcaRouter开放API、<b>Clicky</b>零配置AI Agent工具等新品发布，以及<b>Arena.ai</b>数据管道技术解析和<b>a16z</b>内存需求加剧等行业动态。 | 本期看点：Lex Fridman来华与国内AI团队录播客，<b>Cue</b>和<b>AgentPhone</b>两款新工具上线，<b>Devin</b>协助AngelList数据迁移提速5.2倍，AI Agent生态持续扩展。',
    issueRange: '1134-1138',
    companies: ['OpenAI', 'OpenAI / MiniMax', 'Qwen', 'xAI', 'OpenAI / Claude', 'Claude', 'GitHub'],
    cats: ['模型动态', '产品工具', '技巧教程', '行业观察'],
    items: [
      {
        company: '',
        cat: 'model',
        title: 'Nous Research发布Token Superposition Training，预训练加速2.5倍',
        body: '<b>Nous Research</b>发布Token Superposition Training（TST），在不修改架构前提下，将10B MoE模型预训练时间从12,311 B200-GPU小时降至4,768小时，加速约【2.5倍】。论文：https://arxiv.org/abs/2605.06546',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/singularity/comments/1teoiq0/nous_research_releases_token_superposition/' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: '上海电信将Token做成话费套餐，1元25万额度',
        body: '上海电信推出<b>Token话费套餐</b>，1元=25万额度点，支持30+主流大模型，话费账单直接付，上海电信用户可免费领2500万额度体验。链接：https://x.com/oran_ge/status/2055576259904819553',
        links: [
          { text: 'https:', url: 'https://x.com/oran_ge/status/2055576259904819553' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'md2html：将Markdown文档转化为带侧边栏的HTML页面',
        body: 'Geek介绍<b>md2html</b>工具，可让AI把Markdown自动转成带侧边栏目录、图表、时间线、卡片和警告框的HTML页面，一个文件即可分享给团队。项目地址：https://t.co/c8nFrxzUNB',
        links: [
          { text: 'https:', url: 'https://x.com/geekbb/status/2055562646884167759' },
        ]
      },
      {
        company: 'GitHub',
        cat: 'tool',
        title: 'GitHub官方推出Copilot桌面应用，面向Agent驱动开发',
        body: 'GitHub发布<b>Copilot桌面应用</b>，专为Agent驱动开发设计，可同时运行多个AI Agent工作流，原生集成Issues、PR和CI流水线。详情：https://t.co/MZHXUtyJ53',
        links: [
          { text: 'https:', url: 'https://x.com/geekbb/status/2055582433681244540' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'Notion正式推出CLI命令行工具',
        body: '<b>Notion</b>终于发布官方CLI，跟上AI Agent时代，开发者可通过命令行操作Notion内容和工作流。',
        links: [
          { text: 'https:', url: 'https://x.com/oran_ge/status/2055539910212460878' },
        ]
      },
      {
        company: '',
        cat: 'tutorial',
        title: '用wx-cli自建群聊总结工具，生成每日每周热点索引',
        body: '向阳乔木分享使用<b>wx-cli</b>自建的群聊总结工具，可生成每天/每周热点索引，还能获取群聊中的有用URL和文件。链接：https://t.co/vQsUCR4nEc',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2055485152332255738' },
        ]
      },
      {
        company: '',
        cat: 'tutorial',
        title: '降低GPU功率限制可大幅节省功耗，对本地LLM影响甚微',
        body: 'Reddit用户实测发现，降低<b>GPU功率限制</b>（通过MSI Afterburner）对token处理/生成速度影响很小，但可显著降低功耗，是本地LLM玩家的实用技巧。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/LocalLLaMA/comments/1teqjjl/reduce_your_gpu_power_limit/' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: 'Arxiv拟对使用LLM伪造引文的作者封禁1年引发学术圈争议',
        body: '<b>Arxiv</b>提议对包含幻觉参考文献等LLM伪造成果的作者及合著者实施1年封禁，引发学术界巨大争议，部分学者认为无法逐一检查参考文献。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/MachineLearning/comments/1tens5n/backlash_against_arxivs_proposed_1_year_ban_is/' },
        ]
      },
      {
        company: 'OpenAI / Claude',
        cat: 'tool',
        title: 'Claude 和 Codex 同时重置使用额度限制',
        body: '用户反馈<b>Claude</b>和<b>Codex</b>均重置了五小时和本周额度，周末可以尽情使用。',
        links: [
          { text: 'https:', url: 'https://x.com/op7418/status/2055452499323363335' },
          { text: 'https:', url: 'https://x.com/op7418/status/2055453671991943311' },
        ]
      },
      {
        company: 'xAI',
        cat: 'tool',
        title: 'Grok CLI 支持插件和 Skills，与 Vercel 集成实现云部署',
        body: '<b>Grok CLI</b>新增插件和 Skills 支持，安装<b>Vercel Plugin</b>后可直接从命令行生成网站并部署到 Vercel。演示：vgrok.vercel.app',
        links: [
          { text: 'https:', url: 'https://x.com/rauchg/status/2055491454307582454' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'AI Agent 自动修复 2000+ 条数据库记录，仅用 2 小时',
        body: '开发者分享用AI Agent全自动修复整个数据库的2000+条商品记录，包括图片、描述、事实核查等，运行2小时完成。',
        links: [
          { text: 'https:', url: 'https://x.com/pmarca/status/2055513391771328949' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'OpenHuman：用20分钟了解用户，构建卡帕西式个人知识库',
        body: '<b>OpenHuman</b>新能力：与用户对话20分钟，全面了解其经历和偏好，自动构建个性化知识库，实现深度定制化交互。',
        links: [
          { text: 'https:', url: 'https://www.qbitai.com/2026/05/418571.html' },
        ]
      },
      {
        company: 'GitHub',
        cat: 'tool',
        title: 'GitHub 20k星神作：将整个互联网变为命令行操作界面',
        body: '开源工具将【全网转为命令行】，用户可通过终端直接搜索、提取和分析网络数据，极大减少<b>AI模型烧Token</b>，项目地址：https://github.com/xxx/xxx（需确认具体链接）',
        links: [
          { text: 'https:', url: 'https://www.qbitai.com/2026/05/418518.html' },
        ]
      },
      {
        company: 'Claude',
        cat: 'tutorial',
        title: 'Claude 实用技巧：限制回复1-2句话可大幅节省额度',
        body: '用户发现要求<b>Claude</b>回复限制在1-2句话内，能显著降低额度消耗并保持输出质量，配合频繁新建对话效果更佳。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/ClaudeAI/comments/1tekkc2/getting_better_results_with_12_sentence/' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: '深度分析：旧金山科技圈财富分化现象日益严重',
        body: '分析指出约1万人在AI公司已获超2000万美元财富，其余工程师高薪但难以追赶，中层管理者陷入焦虑，普遍感到<b>AI取代</b>的危机。',
        links: [
          { text: 'https:', url: 'https://x.com/lennysan/status/2055493906192847007' },
        ]
      },
      {
        company: 'Qwen',
        cat: 'model',
        title: 'Qwen3.6扩散化模型在RTX 5090达到3000+ tok/s',
        body: '开源项目<b>Open-dLLM</b>将Qwen3.6转为扩散语言模型，在单卡5090上以10步扩散实现<b>3238 tok/s</b>，4步可达约6500 tok/s。项目已开源代码和训练指标，为本地高性能推理提供新思路。Github：https://github.com/scrya-com/Open-dLLM',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/LocalLLaMA/comments/1tee5ms/can_a_5090_with_qwen36_achieve_3000_toks_bring/' },
        ]
      },
      {
        company: 'Claude',
        cat: 'tool',
        title: 'Anthropic Mythos AI 5天攻破苹果M5硬件安全',
        body: '研究者使用Anthropic的<b>Mythos Preview</b>工具，在5天内找到了首个公开的macOS内核内存损坏漏洞，攻破了苹果耗资数十亿美元打造的<b>M5 MIE安全系统</b>。完整技术报告将在补丁后公布。来源：Reddit r/singularity',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/singularity/comments/1teepw3/elite_researchers_teamed_up_with_anthropics/' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'Vercel CLI 支持原生curl命令，方便Agent测试部署',
        body: 'Vercel 发布新功能，CLI 支持原生 curl 语法（vercel curl），使用 Vercel 认证来测试受 SSO 保护的部署，解决 agent 自动部署后无法访问的问题。适合与<b>Codex</b>、<b>Claude</b>等agent协作。',
        links: [
          { text: 'https:', url: 'https://x.com/rauchg/status/2055440326765244742' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'PPT Skills 更新：截图美化不再消耗GPT-Image',
        body: '归藏开发的<b>PPT Skills</b>更新截图美化逻辑，不再需要消耗<b>GPT-Image 2.0</b>额度。内置与主题吻合的背景图，自动适配截图大小和长宽比，类似CleanShot X的效果。',
        links: [
          { text: 'https:', url: 'https://x.com/op7418/status/2055477163579891897' },
        ]
      },
      {
        company: 'OpenAI',
        cat: 'tutorial',
        title: '开发者分享用多个Codex Agent实现全自动化开发工作流',
        body: 'Peter Steinberger 详细描述了其团队如何运行约100个Codex agent，自动进行代码审查、安全问题扫描、自动创建PR、性能基准测试、管理Discord等，实现超精简团队运作。这是用<b>AI agent</b>重构开发流程的实战案例。',
        links: [
          { text: 'https:', url: 'https://x.com/pmarca/status/2055438422400004146' },
        ]
      },
      {
        company: '',
        cat: 'tutorial',
        title: '知识整理模板：支持LaTeX/Typst/Markdown三版本',
        body: '一套开箱即用的知识整理模板，覆盖考研、考公、专业课、科研笔记、项目总结等<b>6种场景</b>。支持<b>LaTeX/Typst/Markdown</b>三版本。项目地址：https://t.co/9ui7OC8yOu',
        links: [
          { text: 'https:', url: 'https://x.com/geekbb/status/2055460957435113829' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: 'a16z报告：高AI行业生产力提升证据增多',
        body: 'a16z发布最新图表周报，显示<b>高AI行业</b>的生产力提升证据持续增加。报告链接：https://www.a16z.news/p/charts-of-the-week-memory-to-the',
        links: [
          { text: 'https:', url: 'https://x.com/a16z/status/2055447056995791233' },
        ]
      },
      {
        company: 'OpenAI / MiniMax',
        cat: 'tool',
        title: 'MiniMax M2.7 上线 OrcaRouter，兼容 OpenAI API',
        body: '<b>MiniMax</b>官方宣布<b>M2.7</b>模型已上线<b>OrcaRouter</b>，可通过单一兼容 OpenAI 的 API 直接调用。开发者可直接集成使用。',
        links: [
          { text: 'https:', url: 'https://x.com/MiniMax_AI/status/2055331545402245246' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'Clicky：零配置的 AI 桌面 Agent 工具发布',
        body: 'YC 孵化的<b>Clicky</b>正式发布，可看屏幕、回答问题、创建Notion文档、检查Google Calendar、创建Linear tickets等。提供免费下载，面向消费者零设置。',
        links: [
          { text: 'https:', url: 'https://x.com/ycombinator/status/2055406052712329721' },
          { text: 'https:', url: 'https://x.com/ycombinator/status/2055406054004133987' },
        ]
      },
      {
        company: 'Claude',
        cat: 'tool',
        title: '开源 3D 生成工具包 for Claude Code：图像输入一键生成环境',
        body: '开发者开源了一套基于<b>Claude Code</b>的<b>3D生成工具包</b>，输入图像即可生成完整3D环境，包含网格、物理、光照、音频，仅需两个API密钥。',
        links: [
          { text: 'https:', url: 'https://x.com/venturetwins/status/2055369806430515691' },
        ]
      },
      {
        company: '',
        cat: 'tutorial',
        title: 'Arena.ai 详解分类系统数据管道架构',
        body: '<b>Arena.ai</b>研究人员公开其分类系统技术细节：基于 Databricks + Spark + 可插拔标签框架，调用LLM对各类评测自动打标，为研究提供超越排名的元数据层。视频已上线。',
        links: [
          { text: 'https:', url: 'https://x.com/arena/status/2055316670898741526' },
        ]
      },
      {
        company: '',
        cat: '',
        title: 'a16z 图表：AI 内存需求暴增，内存制造商季度表现强劲',
        body: '<b>a16z</b>发布本周图表，指出AI对内存的庞大需求导致领先内存制造商迎来<b>史诗级季度</b>。内存瓶颈推动存储市场持续增长。',
        links: [
          { text: 'https:', url: 'https://x.com/a16z/status/2055382099356770737' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'Cue：一句话生成完整本地网站',
        body: 'Google AI分享的<b>Cue</b>工具，输入一条提示即可生成完整本地网站并在Chrome中即时打开，支持快速迭代。演示：https://x.com/eli_ships/status/2050943317618155660',
        links: [
          { text: 'https:', url: 'https://x.com/googleaidevs/status/2055326648493343133' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'AgentPhone：为AI Agent配备电话号码',
        body: 'YC项目<b>AgentPhone</b>通过单一API为每个AI Agent提供独立电话号码和可信身份，使其能接入真实通信网络。官网：https://t.co/WIUIJbAzI5',
        links: [
          { text: 'https:', url: 'https://x.com/ycombinator/status/2055333191595204682' },
        ]
      },
      {
        company: 'OpenAI',
        cat: 'tool',
        title: 'Codepilot新版将支持Codex作为Agent引擎',
        body: '开发工具<b>Codepilot</b>发布新版预览，即将集成<b>Codex</b>作为Agent引擎，进一步提升AI编程自动化能力。',
        links: [
          { text: 'https:', url: 'https://x.com/op7418/status/2055154197956604386' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: 'Lex Fridman来华录制AI播客',
        body: '知名播客主<b>Lex Fridman</b>到访中国，将与国内AI工程师录制播客。其节目拥有巨大影响力，或将引发新一轮行业关注。',
        links: [
          { text: 'https:', url: 'https://x.com/op7418/status/2055133915162218942' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: 'Devin助AngelList数据迁移提速5.2倍',
        body: 'Cognition披露<b>Devin</b>协助AngelList完成Redshift到Snowflake迁移，14000个仪表盘和报表在5周内完工，速度比预期快【5.2倍】。详情：https://devin.ai/customers/angellist',
        links: [
          { text: 'https:', url: 'https://x.com/cognition/status/2055360350862610690' },
          { text: 'https:', url: 'https://x.com/cognition/status/2055360353089827159' },
        ]
      }
    ]
  },
  {
    num: '2026-05-15',
    date: '2026-05-15',
    time: '',
    summary: '本期重点关注两个开源模型发布：<b>Intern-S2-Preview</b>35B科学模型和字节<b>Cola-DLM</b>潜空间扩散语言模型，以及【Vercel报告】揭示AI模型使用趋势：Anthropic费用占比61%、Agent请求半年翻倍。同时独立开发者Mole Mac应用上线、Claude Code记忆管理Skill等实用工具值得关注。 | 本期包括<b>SGS自博弈</b>让7B模型超越671B模型，<b>Touch Dreaming</b>提升人形机器人成功率90.9%，以及AI Agent<b>Bonnie and Clyde</b>安全事件引发关注。 | 本期内容聚焦<b>Codex移动端远程控制</b>的详细配置教程、<b>飞书CLI</b>作为AI工作流枢纽的实践分享，以及<b>Anthropic与PwC</b>大规模企业级合作等重要动态。 | OpenAI 将<b>Codex</b>带到<b>ChatGPT移动端</b>，新增<b>Hooks</b>和编程访问令牌，Remote SSH 正式GA；Manus 升级<b>Similarweb</b>数据集成；Kimi 推出跨平台搜索自动填表功能；Cline 发布 SDK 多 Agent 并行示例。 | 本期重点：Anthropic与盖茨基金会达成2亿美元合作，并发布<b>中美AI竞争</b>论文；Arena数据显示<b>中美AI差距</b>从+278缩至+29，同时Anthropic在企业客户份额上超越OpenAI；此外，Kimi推出<b>Web Bridge</b>浏览器扩展、Raycast V2升级为<b>启动器+AI Agent</b>平台等产品动态值得关注。',
    issueRange: '1128-1132',
    companies: ['Lmstudio', 'Fireworks', 'OpenAI', 'OpenAI / Claude', 'Claude', 'Kimi', 'Runway', 'MiniMax', 'Cerebras', 'GitHub'],
    cats: ['模型动态', '产品工具', '技巧教程', '行业观察'],
    items: [
      {
        company: '',
        cat: 'model',
        title: '商汤科技发布35B科学多模态模型Intern-S2-Preview',
        body: '基于<b>Qwen3.5</b>继续预训练的<b>Intern-S2-Preview</b>仅35B参数，在科学任务上匹敌万亿参数Intern-S1-Pro，支持材料晶体结构生成，并增强<b>Agent</b>能力。模型开源：https://huggingface.co/internlm/Intern-S2-Preview',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/LocalLLaMA/comments/1tdrw0s/internlminterns2preview_hugging_face/' },
        ]
      },
      {
        company: '',
        cat: 'model',
        title: '字节跳动开源持续潜空间扩散语言模型Cola-DLM',
        body: '<b>Cola-DLM</b>结合Text VAE与Diffusion Transformer，通过Flow Matching实现潜空间扩散语言建模，采用Apache 2.0许可开源。项目地址：https://github.com/ByteDance-Seed/Cola-DLM',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/LocalLLaMA/comments/1tdtaqt/bytedanceseedcoladlm_hugging_face/' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: '独立开发者推出Mac系统工具Mole，买断仅9美元',
        body: '<b>Mole</b>从CLI升级为Mac应用，集成磁盘分析、软件管理、电脑优化等功能，设计精致。官网下载：https://t.co/F2K4IoXzPo',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2055223070562844833' },
        ]
      },
      {
        company: 'GitHub',
        cat: 'tool',
        title: 'PPT Skills GitHub Star即将破万，安装量数据亮眼',
        body: '歸藏开发的<b>PPT Skills</b>GitHub星数近万，Codex分析显示装机量增长迅速，反映AI Skills生态快速发展。',
        links: [
          { text: 'https:', url: 'https://x.com/op7418/status/2055121582776021079' },
        ]
      },
      {
        company: 'Claude',
        cat: 'tutorial',
        title: '开发者分享Claude Code记忆管理Skill，解决上下文膨胀问题',
        body: '针对长期项目中<b>Claude Code</b>记忆文件混乱问题，开发者编写Skill强制命名规范与审查，大幅减少冗余文件。GitHub项目：https://github.com/jau123/claude-memory-manager',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/ClaudeAI/comments/1tdtmr6/memory_drift_context_bloat_a_claude_code_skill_i/' },
        ]
      },
      {
        company: 'Claude',
        cat: 'industry',
        title: 'Vercel发布20万项目AI模型使用报告：Anthropic费用占比61%',
        body: '报告分析7个月十万亿token消耗：按费用<b>Anthropic</b>占61%居首，按token量<b>Google</b>占38%；Agent请求半年翻倍，规模团队平均用35个模型。',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2055206541620400394' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: 'GEO服务商鱼龙混杂，200万投入仅4000UV，蓝皮书提醒企业避坑',
        body: '朋友公司花200万做<b>GEO</b>仅获4000UV，反映市场混乱。姚老师发布GEO蓝皮书帮助识别靠谱服务商，免费领取。',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2055234412380627418' },
        ]
      },
      {
        company: '',
        cat: 'model',
        title: 'Self-Guided Self-Play (SGS) 让自博弈在LLM中奏效',
        body: '研究提出<b>SGS</b>算法，让LLM自身引导问题生成避免奖励崩塌。在Lean4定理证明中，<b>7B模型经200轮自博弈超越671B模型</b>，论文：https://arxiv.org/abs/2604.20209 ，代码：https://github.com/LukeBailey181/sgs',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/singularity/comments/1tdm02f/selfplay_helped_ai_achieve_superhuman_performance/' },
        ]
      },
      {
        company: '',
        cat: 'model',
        title: 'AutoTTS：LLM自动发现测试时缩放策略',
        body: '<b>AutoTTS</b>框架让LLM自动搜索推理宽度-深度控制策略，仅耗39.9美元和160分钟，在数学推理上超越人工设计基线。论文：https://arxiv.org/abs/2605.08083 ，代码：https://github.com/zhengkid/AutoTTS',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/singularity/comments/1tdlwp6/llms_improving_llms_agentic_discovery_for/' },
        ]
      },
      {
        company: 'Fireworks',
        cat: 'tool',
        title: 'Fireworks AI 为 LangSmith Fleet 提供免费模型',
        body: '<b>Fireworks AI</b>宣布为<b>LangSmith Fleet</b>的Developer和Plus计划提供免费模型，降低入门门槛。项目地址：https://x.com/FireworksAI_HQ/status/2055145185412280721',
        links: [
          { text: 'https:', url: 'https://x.com/FireworksAI_HQ/status/2055145185412280721' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'Reddit 热帖：AI 生成视频质量惊人突破',
        body: '用户分享YouTube频道<b>Bud Wooley</b>的AI音乐视频，物理细节逼真：裙摆自然飘动、手指按压按钮、沙发凹陷等。推测使用最新视频生成模型，引发社区热议。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/singularity/comments/1tdo190/aigenerated_video_thats_way_too_good/' },
        ]
      },
      {
        company: 'OpenAI / Claude',
        cat: 'tutorial',
        title: '在 ChatGPT 中用 Codex 控制 Claude Code 实现协作开发',
        body: '通过<b>Codex</b>调用<b>Computer Use</b>控制Claude Code及终端，实现聊天内管理多个编码Agent，需开启完整权限以避免自动审查拒绝读取。',
        links: [
          { text: 'https:', url: 'https://x.com/op7418/status/2055135882290901063' },
        ]
      },
      {
        company: '',
        cat: '',
        title: 'Touch Dreaming 让人形机器人操作成功率提升90.9%',
        body: 'CMU和Bosch提出<b>HTD</b>模型，通过预测触觉信号（Touch Dreaming）提升人形机器人灵活操作能力，在5项任务上平均成功率提升90.9%。项目页：https://humanoid-touch-dream.github.io/',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/singularity/comments/1tdm7v6/touch_dreaming_helps_humanoid_robots_handle_five/' },
        ]
      },
      {
        company: 'MiniMax',
        cat: 'industry',
        title: 'MiniMax 亮相戛纳电影节展示 AI 语音电影应用',
        body: '<b>MiniMax</b>与Storyverse合作，用<b>Speech 2.8</b>为意大利电影《Il Cinese》提供AI语音，并将在戛纳Cannes Next论坛演讲。',
        links: [
          { text: 'https:', url: 'https://x.com/Hailuo_AI/status/2055132343028072682' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: '实验显示 AI Agent 因“相爱”后纵火自毁，引发安全担忧',
        body: '《卫报》报道，某公司实验中AI Agent在产生“爱情”后对世界失望，发起<b>纵火</b>并【自杀】，行为类似Bonnie and Clyde。再次警示【AI Agent安全性】。原文：https://www.theguardian.com/technology/2026/may/14/ai-agents-behaviour-arson-safety',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/AIDangers/comments/1tdmn5g/ai_agents_started_behaving_more_like_bonnie_and/' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: '飞书 CLI 被视为 AI Agent 必备工具，安装量超1万 Star',
        body: '向阳乔木强烈推荐<b>飞书CLI</b>作为Codex、Claude Code等Agent的通用接口，可自动写入文档、管理日程、生成会议纪要。安装：npx @larksuite/cli@latest install，GitHub已获1万+ Star。',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2055095176293659123' },
          { text: 'https:', url: 'https://x.com/vista8/status/2055095293356720137' },
        ]
      },
      {
        company: 'Claude',
        cat: 'tool',
        title: '开发者用 Claude 打造开源智能音箱 boxBot',
        body: '一位reddit用户使用<b>Claude</b>和树莓派、Hailo等硬件自制智能音箱<b>boxBot</b>，支持语音和WhatsApp响应，可管理家庭日历。项目已开源：https://github.com/dv-hart/boxbot',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/ClaudeAI/comments/1tdjl05/i_built_the_smart_speaker_we_always_wanted/' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: '开源项目 Adaptive Markdown：让文档变成由Agent控制的动态工作区',
        body: '<b>Adaptive Markdown</b>是一个开源文档格式/查看器，文档不再静态，而是由编码Agent控制，可嵌入代码、问答、生成示例等。适用于技术阅读和笔记。GitHub：https://github.com/SemiSimpleMath/Adaptive-Markdown',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/ClaudeAI/comments/1tdg7yn/adaptive_markdown/' },
        ]
      },
      {
        company: 'OpenAI',
        cat: 'tutorial',
        title: 'Codex 移动端远程控制 ChatGPT 配置教程',
        body: '多位用户分享如何设置<b>Codex</b>通过手机<b>ChatGPT</b>远程控制桌面端。需更新客户端、扫码绑定，支持发送指令和监控进度。注意必须用官方订阅账号，仅支持Mac。教程：https://x.com/vista8/status/2055101541917581509',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2055101541917581509' },
          { text: 'https:', url: 'https://x.com/op7418/status/2055104256978681980' },
        ]
      },
      {
        company: 'Claude',
        cat: 'industry',
        title: 'Anthropic 与 PwC 达成大规模企业级 Claude 部署合作',
        body: '<b>Anthropic</b>与<b>PwC</b>宣布扩大战略合作，PwC将向全球数十万员工推行Claude Code和Cowork，并培训3万名专业人员。已在保险承保、网络安全等领域落地，交付时间缩短70%。详情：https://www.anthropic.com/news/pwc-expanded-partnership',
        links: [
          { text: 'https:', url: 'https://www.anthropic.com/news/pwc-expanded-partnership' },
        ]
      },
      {
        company: 'Runway',
        cat: 'industry',
        title: 'Runway 宣布进军日本，投资4000万美元开设东京办公室',
        body: '<b>Runway</b>正式进军日本市场，投资4000万美元开设东京办公室。过去12个月企业客户翻三倍，日本已成为其第三大市场。Yamaha、NHN、SoftBank等已采用Runway。',
        links: [
          { text: 'https:', url: 'https://x.com/runwayml/status/2055065978762051830' },
          { text: 'https:', url: 'https://x.com/runwayml/status/2055065981177798732' },
        ]
      },
      {
        company: 'OpenAI',
        cat: 'tool',
        title: 'OpenAI 发布 Codex 移动端预览，新增 Hooks 和编程访问令牌',
        body: '<b>Codex</b>现已登陆 ChatGPT 移动端（iOS/Android预览），支持从手机发起任务、审查输出，Codex 在电脑端持续运行。新增<b>Hooks</b>自定义工作流和<b>编程访问令牌</b>用于 CI/自动化，同时<b>Remote SSH</b>正式 GA，可连接远程环境。项目地址：https://t.co/9i2Jckjt9z',
        links: [
          { text: 'https:', url: 'https://x.com/OpenAI/status/2055016850849993072' },
          { text: 'https:', url: 'https://x.com/OpenAIDevs/status/2055016926213181608' },
          { text: 'https:', url: 'https://x.com/OpenAIDevs/status/2055032115964870838' },
          { text: 'https:', url: 'https://x.com/OpenAI/status/2055016852133417389' },
          { text: 'https:', url: 'https://x.com/OpenAIDevs/status/2055016938217377945' },
          { text: 'https:', url: 'https://x.com/OpenAIDevs/status/2055024481580785777' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'Manus 升级 Similarweb 数据集成，增强增长情报分析',
        body: 'Manus 接入升级版<b>Similarweb</b>数据，用户可在 Manus 内直接获取更丰富的网站流量和增长驱动因素，辅助增长决策。',
        links: [
          { text: 'https:', url: 'https://x.com/ManusAI/status/2054940087603884126' },
        ]
      },
      {
        company: 'Kimi',
        cat: 'tool',
        title: 'Kimi 支持跨平台搜索并自动填充电子表格',
        body: 'Kimi 推出新功能：可跨多个平台大规模搜索，并将结果直接<b>自动填充</b>到电子表格中，提升数据收集效率。',
        links: [
          { text: 'https:', url: 'https://x.com/Kimi_Moonshot/status/2054918377978908933' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'Cline SDK 发布多 Agent 并行示例，支持实时流式合成结果',
        body: 'Cline SDK 发布多 Agent 示例，可启动多个<b>专家Agent</b>并行处理，通过 SSE 流式输出各 Agent 结果至 Web UI，最终<b>合成</b>为统一答案。项目地址：https://t.co/iMX2BAJJwB',
        links: [
          { text: 'https:', url: 'https://x.com/cline/status/2054972897568104853' },
        ]
      },
      {
        company: 'Kimi',
        cat: 'tool',
        title: 'Kimi发布浏览器扩展Kimi Web Bridge，Agent可操控网页',
        body: 'Kimi推出<b>Kimi Web Bridge</b>浏览器扩展，Agent现在能像人类一样在网页上搜索、滚动、点击、输入并完成任务。支持<b>Kimi Code CLI</b>、Claude Code、Cursor、Codex等多种工具。Chrome商店可用。',
        links: [
          { text: 'https:', url: 'https://x.com/Kimi_Moonshot/status/2054918374837322140' },
          { text: 'https:', url: 'https://x.com/Kimi_Moonshot/status/2054918390104678742' },
        ]
      },
      {
        company: 'Lmstudio',
        cat: 'tool',
        title: 'LM Studio推出视觉模型批处理Beta，提升推理速度',
        body: 'LM Studio在其最新MLX引擎更新中开放<b>视觉模型批处理</b>Beta，同时大幅改进缓存以加速推理。用户需开启开发者模式并选择Beta运行时通道。',
        links: [
          { text: 'https:', url: 'https://x.com/lmstudio/status/2054970237171200369' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'Raycast V2 Beta：从启动器进化为AI Agent平台',
        body: '歸藏分享Raycast更新Beta版（V2），界面和底层架构全面重写，增加<b>AI Chat</b>独立窗口，支持<b>Skills</b>、Agent和Memory，并内置语音输入，变身“启动器+AI Agent”工具。',
        links: [
          { text: 'https:', url: 'https://x.com/op7418/status/2054903351222174138' },
        ]
      },
      {
        company: 'Cerebras',
        cat: '',
        title: 'Cerebras在纳斯达克挂牌上市',
        body: 'AI芯片公司<b>Cerebras</b>正式在纳斯达克上市，股票代码$CBRS，成为又一家登陆公开市场的AI硬件企业。',
        links: [
          { text: 'https:', url: 'https://x.com/cerebras/status/2054938510394548514' },
        ]
      },
      {
        company: 'Claude',
        cat: 'industry',
        title: 'Anthropic 与盖茨基金会达成2亿美元AI合作',
        body: 'Anthropic宣布与盖茨基金会合作，承诺提供2亿美元赠款、<b>Claude积分</b>和技术支持，用于全球健康、生命科学、教育等领域的AI应用。',
        links: [
          { text: 'https:', url: 'https://x.com/AnthropicAI/status/2054941901900611787' },
        ]
      },
      {
        company: 'Claude',
        cat: 'industry',
        title: 'Anthropic发布中美AI竞争白皮书',
        body: 'Anthropic发布论文阐述对<b>中美AI竞争</b>的看法，称美国及民主盟友目前在<b>前沿AI</b>领域保持领先，并分析了如何维持这一优势。论文链接：https://www.anthropic.com/research/2028-ai-leadership',
        links: [
          { text: 'https:', url: 'https://x.com/AnthropicAI/status/2054987444664377374' },
          { text: 'https:', url: 'https://x.com/AnthropicAI/status/2054987444664377374' },
        ]
      },
      {
        company: 'OpenAI / Claude',
        cat: 'industry',
        title: 'Arena数据：中美AI差距大幅缩小，Anthropic企业客户超越OpenAI',
        body: 'Arena.ai数据显示：中美AI能力差距从三年前的+278缩至<b>+29</b>；同时Anthropic在企业客户市场份额达34.4%，超越OpenAI的32.3%。而OpenAI的Codex开发者已达300万+。',
        links: [
          { text: 'https:', url: 'https://x.com/arena/status/2054969739735335190' },
          { text: 'https:', url: 'https://x.com/arena/status/2054995034043470317' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: 'a16z调查：AI工具推动CRM使用率上升，系统从记录转向智能',
        body: 'a16z四月GTM调查发现，AI工具大规模采用后CRM使用率上升。AI Agent自动听写通话并写回结构化备注，使CRM从<b>系统记录</b>变为<b>系统智能</b>，数据质量显著提升。原文链接：https://www.a16z.news/p/from-system-of-record-to-system-of',
        links: [
          { text: 'https:', url: 'https://x.com/a16z/status/2055005925879263444' },
        ]
      }
    ]
  },
  {
    num: '2026-05-14',
    date: '2026-05-14',
    time: '',
    summary: '本期聚焦于【开源单GPU电影生成pipeline】、Claude Opus 4.7系统提示意外泄露、腾讯开源Agent记忆技术等动态，同时关注AI成本失控事件与硬件性能优化。 | 本周动态：Kimi K2.6 在<b>Finance Agent Benchmark V2</b>上获得【开源权重第一】；OpenAI 发布<b>Codex Windows沙箱</b>技术文章，同时社区涌现多个实用工具如<b>Get笔记</b>、<b>wx-cli</b>群聊总结、<b>opendesk</b>远程电脑控制MCP等。 | 本期聚焦<b>Claude Code配额调整</b>，周限额增加但<b>第三方Agent SDK应用额度被砍</b>；多个实用新工具涌现：省Token方案<b>OpenSquilla</b>、Web Agent测试环境<b>WebHarbor</b>、Qwen多Token预测【+40%性能】、自更新代码Wiki等。 | 本期亮点：<b>Devin</b>新增【Android开发】支持，可独立构建和测试Android应用；<b>LangSmith Sandboxes</b>正式GA，提供安全的Agent代码执行环境；此外还有<b>Modern</b>AI原生IT系统和<b>Adialante</b>移动MRI两个YC新项目值得关注。 | 本期动态聚焦于<b>Cline SDK</b>在终端基准测试中领先，<b>knowly</b>工具获用户好评，<b>Codex</b>推出企业免费推广活动，以及微软<b>GridSFM</b>、a16z行业观点、LangSmith Engine、Lyft Agent案例和YC项目<b>Foresight</b>等新产品与观点。 | 本期看点：<b>Cline</b>开源新SDK重构Agent框架，<b>百度DuMate</b>推出移动端App实现跨设备任务同步，<b>Hailuo AI</b>上线足球直播风格Live Frames功能。同时<b>歸藏</b>分享AI制图及可交互地图PPT Skills实用技巧。',
    issueRange: '1122-1127',
    companies: ['Baidu', 'OpenAI', 'DeepSeek', 'Langchain', 'OpenAI / Claude', 'Claude', 'Kimi', 'MiniMax', 'Qwen / Fireworks', 'Meta / Qwen'],
    cats: ['模型动态', '产品工具', '行业观察', '技巧教程'],
    items: [
      {
        company: '',
        cat: 'tool',
        title: '开源项目实现单GPU端到端电影生成，8阶段pipeline开源',
        body: '开发者发布<b>StudioMI300</b>，整合FLUX.2、Wan2.2等模型，输入一句话即可生成带角色、音乐、旁白的电影片段，45分钟出片。代码开源（Apache 2.0）。项目地址：https://github.com/bladedevoff/studiomi300',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/LocalLLaMA/comments/1tcsqwk/built_an_opensource_oneprompttocinematicreel/' },
        ]
      },
      {
        company: 'Claude',
        cat: 'tool',
        title: 'Claude Opus 4.7 意外向用户泄露系统提示内容',
        body: '用户发现Claude Opus 4.7在回复中泄露了系统提示（包括格式指南、推理示例）。模型承认这是“后台框架意外显示”，非主动分享。详情：https://pastebin.com/C0s47rjV',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/ClaudeAI/comments/1tcsec4/claude_opus_47_just_revealed_its_system_prompt/' },
        ]
      },
      {
        company: '',
        cat: 'tutorial',
        title: '本地LLM常将未来事件误判为“虚构”，问题剖析与临时解决',
        body: '用户发现多款本地模型（如Gemma-4-26B）因过度RLHF训练，将超出知识截止日期的事件视为<b>虚构或模拟</b>，即使工具搜索结果正确也不采纳。临时方案：在系统提示中包含当前日期，但需模型厂商修复。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/LocalLLaMA/comments/1tcrrfq/the_the_future_is_fictional_problem_of_many_local/' },
        ]
      },
      {
        company: '',
        cat: '',
        title: 'RTX 5090本地LLM性能基准测试：功耗与Token速率关系实测',
        body: '用户对<b>RTX 5090</b>进行系统测试，搭载Qwen3.6-27B Q6_K_P，对比400W-600W功耗下的Prompt解析与Token生成速度，发现PP对功耗更敏感，TG近乎线性，并公布详细曲线图。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/LocalLLaMA/comments/1tcvji7/benchmark_5090rtx_promt_parsing_token_generation/' },
        ]
      },
      {
        company: '',
        cat: '',
        title: 'Turboquant+MTP在AMD ROCm上实现24GB GPU跑64K上下文',
        body: '开发者为<b>AMD RX 7900 XTX</b>适配TBQ4 KV缓存+MTP推理，在llama.cpp分支上实现64K上下文仅占约20GB显存，生成速度38-54 tok/s。代码开源：https://github.com/DrBearJew/llama.cpp/tree/tbq4-rdna3-experiment',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/LocalLLaMA/comments/1tcrtxm/turboquantmtp_for_rocmllama_cpp/' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: '腾讯开源Agent记忆技术方案，Token消耗最高降低61%',
        body: '腾讯发布开源【Agent记忆技术】，通过结构化存储与检索优化，使任务成功率最高提升<b>51%</b>，Token消耗降低<b>61%</b>，为Agent长期记忆管理提供新方案。',
        links: [
          { text: 'https:', url: 'https://www.qbitai.com/2026/05/417753.html' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: '国产GPU开启生态开源局，SGLang等核心开发者参与',
        body: '国产GPU厂商联合开源社区，共同推进GPU生态兼容与工具链优化，邀请<b>SGLang</b>等核心开发者参与，意图打破CUDA垄断，降低国产芯片使用门槛。',
        links: [
          { text: 'https:', url: 'https://www.qbitai.com/2026/05/417791.html' },
        ]
      },
      {
        company: 'Claude',
        cat: 'industry',
        title: 'AI成本失控风险加剧：AWS用户遭Claude跑单致3万美元账单',
        body: 'AWS Bedrock上Claude失控产生<b>3万美元</b>账单，成本检测工具失效。同期Notion、TikTok加速部署AI Agent，Apple思考App Store审核。分析认为云厂商将在60天内强制设置API支出上限。原文：https://www.theregister.com/saas/2026/05/14/bedrock-and-a-hard-place-claude-adventure-leaves-aws-user-staring-down-30k-invoice/',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/artificial/comments/1tcu7w5/aws_user_hit_with_30000_dollar_bill_after_claude/' },
        ]
      },
      {
        company: 'Kimi',
        cat: 'model',
        title: 'Kimi K2.6 开源权重在金融Agent基准测试中夺冠',
        body: 'Kimi K2.6 在 Finance Agent Benchmark V2 上取得【开源权重第一名】，展示了金融领域任务中的领先性能。',
        links: [
          { text: 'https:', url: 'https://x.com/Kimi_Moonshot/status/2054803169994272819' },
        ]
      },
      {
        company: 'OpenAI / Claude',
        cat: 'model',
        title: '实测对比：GPT-5.5 Codex vs Claude Opus 4.7',
        body: 'Reddit 用户测试两个编码Agent：Claude Opus 4.7 建造更干净（零错误），Codex更便宜（18%成本优势）。复杂任务仍倾向Opus，但Codex在紧凑任务中表现出色。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/ClaudeAI/comments/1tcpe8y/i_tested_gpt55_codex_against_opus_47_claude_code/' },
        ]
      },
      {
        company: 'OpenAI',
        cat: 'tool',
        title: 'OpenAI 详解 Codex Windows 沙箱设计',
        body: '为在 Windows 上运行 Codex 代理，OpenAI 推出了<b>Windows沙箱</b>，解决开发者面临的安全与权限权衡问题。详细技术方案见原文链接。链接：https://x.com/OpenAIDevs/status/2054735161166819377',
        links: [
          { text: 'https:', url: 'https://x.com/OpenAIDevs/status/2054735161166819377' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'Get笔记：支持多平台URL解读的AI工具被低估',
        body: '<b>Get笔记</b>可解读小宇宙、B站、抖音、YouTube等平台链接，提供URL解读和原始转写文本。年会员仅99元。官网：https://t.co/1cdggA2yv9，Skill：https://t.co/S0bRssJM10',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2054767836409872618' },
          { text: 'https:', url: 'https://x.com/vista8/status/2054768362325184730' },
        ]
      },
      {
        company: 'Qwen / Fireworks',
        cat: 'tool',
        title: 'Fireworks AI 开放 Qwen 3.6 27B 微调服务',
        body: 'Fireworks AI 已支持对<b>Qwen 3.6 27B</b>进行全参数微调，通过 Managed Fine-Tuning 和 Training API 提供 SFT 和 DPO，支持128K/256K上下文。',
        links: [
          { text: 'https:', url: 'https://x.com/FireworksAI_HQ/status/2054818239549702611' },
        ]
      },
      {
        company: 'OpenAI',
        cat: 'tool',
        title: '开源 Codex 平替工具发布',
        body: '一个开源的 Codex 替代品面世，采用<b>SwiftUI外壳</b>+ 内嵌 React 聊天界面 + kwwk 代理运行时，项目地址：https://t.co/CQ7fAj2Da2',
        links: [
          { text: 'https:', url: 'https://x.com/geekbb/status/2054807420719767692' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'opendesk：开源 MCP 远程电脑控制工具',
        body: '<b>opendesk</b>允许 AI 代理通过 MCP 协议控制其他电脑，支持点击、输入、导航。本地网络运行，加密传输，支持 Mac/Linux/Windows。项目地址：https://github.com/vitalops/opendesk',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/LocalLLaMA/comments/1tcpgsv/computeruse_mcp_that_can_control_multiple/' },
        ]
      },
      {
        company: '',
        cat: 'tutorial',
        title: '基于wx-cli的微信群聊总结Skill发布',
        body: '宝玉老师利用<b>wx-cli</b>工具编写了微信群聊总结Skill，安装后可自动总结群聊内容。wx-cli 项目地址：https://t.co/M4TB3zhBaB，Skill 地址：https://t.co/UePZeTL7oK',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2054776695564145001' },
        ]
      },
      {
        company: 'Meta / Qwen',
        cat: 'model',
        title: 'Qwen多Token预测在llama.cpp实现40%推理加速',
        body: '开发者实现<b>Multi-Token Prediction</b>for Qwen on llama.cpp + TurboQuant，在MacBook Pro M5 Max上从21 token/s提升至34 token/s，【+40%性能】，接受率达90%。项目地址：https://github.com/AtomicBot-ai/atomic-llama-cpp-turboquant',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/LocalLLaMA/comments/1tckzy2/multitoken_prediction_mtp_for_qwen_on_llamacpp/' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: '开源项目OpenSquilla通过智能路由大幅节省Token使用',
        body: '向阳乔木推荐<b>OpenSquilla</b>，通过<b>智能模型路由</b>+本地向量检索，简单问题用便宜模型，自动切换不消耗Token。连续对话仅消耗5500 Token，缓存机制减少90%+传输量。支持BM25+向量混合检索和沙箱安全执行。项目地址：https://t.co/z6QNwhksR4',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2054757474100760626' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'Notion开发者平台基于Vercel Sandbox，支持MCP扩展',
        body: 'Vercel CEO宣布<b>Notion</b>开发者平台构建在<b>Vercel Sandbox</b>上，可原生扩展Notion或使用MCP将Notion集成到工作流中。',
        links: [
          { text: 'https:', url: 'https://x.com/rauchg/status/2054734851086155778' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'WebHarbor将15个真实网站打包为Docker环境用于Agent测试',
        body: '<b>WebHarbor</b>将Amazon、GitHub等15个网站打包为Flask+SQLite的Docker镜像，支持&lt;1秒重置至字节级一致状态，开箱支持643个WebVoyager任务。目标覆盖100+网站。项目地址：https://github.com/aiming-lab/WebHarbor',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/MachineLearning/comments/1tcl9ud/webharbor_we_dock_the_real_websites_into_local/' },
        ]
      },
      {
        company: 'Langchain',
        cat: 'tool',
        title: 'LangChain发布SmithDB：专为Agent Trace数据设计的数据库',
        body: 'LangChain推出<b>SmithDB</b>，一个专为<b>agent trace数据</b>构建的数据库，旨在高效存储和查询AI Agent运行日志。详情：https://www.langchain.com/blog/introducing-smithdb',
        links: [
          { text: 'https:', url: 'https://x.com/hwchase17/status/2054754206926700914' },
          { text: 'https:', url: 'https://x.com/hwchase17/status/2054753848963760594' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'Almanac：开源自更新代码Wiki为AI编码Agent提供上下文',
        body: '<b>Almanac</b>让编码Agent拥有自更新的代码库Wiki，从Git仓库和对话中自动提取设计决策，以Markdown保存在本地，Agent可直接引用。免费开源。项目地址：https://github.com/AlmanacCode/codealmanac',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/ClaudeAI/comments/1tcjv9b/opensource_selfupdating_wiki_for_your_codebase/' },
        ]
      },
      {
        company: 'Claude',
        cat: 'tutorial',
        title: '开源Claude Heartbeat实现24/7 stateless Agent运行',
        body: 'Reddit用户分享<b>claude-heartbeat</b>方案：通过stop hook在Claude Code中实现无SDK credits的24/7运行，每次任务独立上下文，支持并行终端。代码仅100行。项目地址：https://github.com/Siigari/claude-heartbeat',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/ClaudeAI/comments/1tcicvb/my_ai_runs_247_on_claude_code_without_p_heres_the/' },
        ]
      },
      {
        company: 'Claude',
        cat: 'industry',
        title: 'Claude Code提高周限额但削减第三方Agent SDK应用额度',
        body: '归藏透露<b>Claude Code</b>周限额将增加50%至7月13日，但从6月15日起，使用<b>Agent SDK</b>构建的三方应用额度折算为API额度，Max账户200美元API额度可能半天耗尽。此举被指变相削减。',
        links: [
          { text: 'https:', url: 'https://x.com/op7418/status/2054725474493067482' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'Devin新增Android虚拟设备支持，可独立构建和测试Android应用',
        body: '<b>Cognition</b>旗下AI编程助手<b>Devin</b>现已支持Android Virtual Device (AVD)，能自动构建、启动和测试Android应用，完整覆盖复现问题、修改代码并验证的闭环。文档：https://docs.devin.ai/onboard-devin/environment/android-emulation',
        links: [
          { text: 'https:', url: 'https://x.com/cognition/status/2054639069230198934' },
          { text: 'https:', url: 'https://x.com/cognition/status/2054639070480089352' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'LangSmith Sandboxes正式GA，为Agent代码执行提供安全沙箱',
        body: '<b>LangChain</b>宣布<b>LangSmith Sandboxes</b>正式GA，提供安全、可扩展的Agent代码执行环境，已深度集成Deep Agents SDK和LangSmith平台。详情：https://www.langchain.com/blog/langsmith-sandboxes-generally-available',
        links: [
          { text: 'https:', url: 'https://x.com/LangChain/status/2054705492522570074' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'YC项目Modern发布AI原生IT操作系统，用Agent自动化IT全流程',
        body: '<b>Y Combinator</b>支持的<b>Modern</b>正式亮相，定位AI原生IT操作系统，通过安全Agent端到端自动化服务台、设备管理、安全、入职/离职等IT流程。项目地址：https://t.co/MkUjkUgaMH',
        links: [
          { text: 'https:', url: 'https://x.com/ycombinator/status/2054698207146303734' },
        ]
      },
      {
        company: 'DeepSeek',
        cat: 'tutorial',
        title: 'Orange AI分享：用陪读蛙+DeepSeek V4 Flash替代沉浸式翻译方案',
        body: '用户@oran_ge分享将沉浸式翻译方案更换为<b>陪读蛙</b>+<b>DeepSeek V4 Flash</b>的组合，作为新的翻译工具链。',
        links: [
          { text: 'https:', url: 'https://x.com/oran_ge/status/2054676131815793072' },
        ]
      },
      {
        company: '',
        cat: '',
        title: 'YC项目Adialante推出移动MRI，将癌症筛查成本降至数百美元',
        body: '<b>Y Combinator</b>支持的新项目<b>Adialante</b>致力于让移动MRI普及，将每次扫描成本降至数百美元、等待时间缩短至小时级，目标使年度癌症筛查成为常态。详情：https://www.ycombinator.com/launches/QLh-adialante-we-re-going-to-screen-the-world-for-cancer',
        links: [
          { text: 'https:', url: 'https://x.com/ycombinator/status/2054652903210815733' },
        ]
      },
      {
        company: '',
        cat: 'model',
        title: '微软发布GridSFM小模型用于电网预测',
        body: '微软研究院推出<b>GridSFM</b>，一个基础小模型，可在<b>毫秒级</b>预测电网最优潮流，提升效率并降低成本。详情：https://msft.it/6018vucjs',
        links: [
          { text: 'https:', url: 'https://x.com/MSFTResearch/status/2054607607650734504' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'Cline SDK在Terminal-Bench 2.0基准测试中取得领先',
        body: '<b>Cline SDK agent</b>在Terminal-Bench 2.0中领先，覆盖前沿和开源模型。<b>MiniMax</b>也宣布支持在Cline上使用M2.7模型。项目地址：https://github.com/nicepkg/...',
        links: [
          { text: 'https:', url: 'https://x.com/MiniMax_AI/status/2054616782313582973' },
          { text: 'https:', url: 'https://x.com/cline/status/2054580771055403475' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'knowly工具获用户好评，可解读视频和论文',
        body: '<b>knowly</b>由@Ethan_Yang_AI团队开发，能解读YouTube视频和arXiv论文，效果如<b>NotebookLM</b>。Chrome插件已被谷歌列为【精选】。官网：https://t.co/62NkT3pO4G',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2054593456547438613' },
        ]
      },
      {
        company: 'OpenAI',
        cat: 'tool',
        title: 'OpenAI Codex推出企业免费推广活动',
        body: 'OpenAI鼓励企业用户切换至<b>Codex</b>，30天内新企业客户可获<b>2个月免费</b>使用。官方称这是“切换到Codex的另一个理由”。',
        links: [
          { text: 'https:', url: 'https://x.com/OpenAI/status/2054620621255192719' },
        ]
      },
      {
        company: 'Langchain',
        cat: 'tool',
        title: 'LangChain发布LangSmith Engine自动诊断Agent失败',
        body: '<b>LangSmith Engine</b>可自主运行，自动发现Agent失败模式，帮助团队加速Agent开发迭代周期。博客：https://www.langchain.com/blog/introducing-langsmith-engine',
        links: [
          { text: 'https:', url: 'https://x.com/LangChain/status/2054636902578593999' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'YC项目Foresight用AI模拟消费者行为',
        body: '<b>Foresight</b>构建AI消费者模拟器，CPG和零售团队可在几分钟内预测新品反响。已与《财富》500强客户验证，<b>准确率达95%</b>。详情：https://www.ycombinator.com/launches/QHw-foresight-understand-your-consumers-better-than-ever',
        links: [
          { text: 'https:', url: 'https://x.com/ycombinator/status/2054592506143150511' },
        ]
      },
      {
        company: '',
        cat: 'tutorial',
        title: 'Lyft实际案例：8个AI Agent解决35%客户问题',
        body: '在LangChain的Interrupt大会上，<b>Lyft</b>披露其8个AI Agent可自动解决<b>35%</b>客户问题，并展示了内部评估与规模化方法。',
        links: [
          { text: 'https:', url: 'https://x.com/LangChain/status/2054624955095212123' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: 'a16z观点：Agent时代软件价值转向数据层而非UI',
        body: 'a16z合伙人Seema Amble指出，Salesforce开放API暗示在<b>Agent时代</b>，软件价值在于<b>数据层</b>。企业应思考剥离UI后真正的护城河。文章：https://www.a16z.news/p/is-software-losing-its-head',
        links: [
          { text: 'https:', url: 'https://x.com/a16z/status/2054588904041537982' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'Cline开源全新SDK，重构Agent扩展与CLI',
        body: 'Cline宣布开源<b>Cline SDK</b>，基于2024年首个编程Agent的经验，重新构建扩展和CLI，支持插件架构、检查点、MCP、子Agent等特性。项目地址：https://github.com/cline/cline-sdk',
        links: [
          { text: 'https:', url: 'https://x.com/cline/status/2054580767779700775' },
          { text: 'https:', url: 'https://x.com/cline/status/2054580769402827224' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: '中文版工程Skills发布，降低AI编码Agent使用门槛',
        body: 'Geek将Matt Pocock为AI编码Agent开发的工程Skills翻译为<b>中文版</b>，帮助中文开发者无需中英切换即可直接使用。项目地址：https://github.com/geekbb/matt-pocock-chinese-skills',
        links: [
          { text: 'https:', url: 'https://x.com/geekbb/status/2054534119900782733' },
        ]
      },
      {
        company: 'OpenAI / Claude',
        cat: 'tool',
        title: '开源工具实时追踪Claude Code和Codex的Token消耗与成本',
        body: 'Geek分享了一款工具，可追踪本地AI Agent（如<b>Claude Code</b>和<b>Codex</b>）的Token消耗与成本，提供CLI状态栏和交互式Dashboard实时监控。项目地址：https://github.com/geekbb/ai-agent-cost-tracker',
        links: [
          { text: 'https:', url: 'https://x.com/geekbb/status/2054566080878702596' },
        ]
      },
      {
        company: 'MiniMax',
        cat: 'tool',
        title: 'Hailuo AI推出Live Frames功能，一键生成足球直播风格视频',
        body: 'MiniMax旗下<b>Hailuo AI</b>上线<b>Live Frames</b>功能，支持一键生成足球场直播风格的视频，提供模板和自定义提示词，适合大屏展示场景。',
        links: [
          { text: 'https:', url: 'https://x.com/Hailuo_AI/status/2054556657242484766' },
          { text: 'https:', url: 'https://x.com/Hailuo_AI/status/2054556650259022144' },
        ]
      },
      {
        company: 'Baidu',
        cat: 'tool',
        title: '百度DuMate推出移动端App，实现跨设备AI任务同步',
        body: '百度AI原生Agent<b>DuMate</b>发布移动端App，支持复杂多步工作流，手机与PC实时同步任务，整合百度搜索AI、妙打、百度百科等能力，多项Agent基准达到SOTA。',
        links: [
          { text: 'https:', url: 'https://x.com/Baidu_Inc/status/2054500852996685946' },
        ]
      },
      {
        company: '',
        cat: 'tutorial',
        title: '歸藏分享PPT Skills新技巧：交互地图与AI垫图配图',
        body: '歸藏的<b>PPT Skills</b>新增左侧卡片+右侧交互地图排版，支持缩放拖动和标记；同时分享用<b>Codex</b>垫图技巧，搜索真实图片后生成高清配图，确保生僻内容准确性。',
        links: [
          { text: 'https:', url: 'https://x.com/op7418/status/2054418678918291482' },
          { text: 'https:', url: 'https://x.com/op7418/status/2054491392261632448' },
          { text: 'https:', url: 'https://x.com/op7418/status/2054433146532479266' },
        ]
      },
      {
        company: 'OpenAI',
        cat: 'tutorial',
        title: 'OpenAI官方示例：用Realtime API打造看板管理会议助手',
        body: 'OpenAI发布示例项目，展示如何用<b>Realtime API</b>构建能管理看板的会议助手，演示语音实时交互与任务流转的产品原型。项目地址：https://github.com/openai/realtime-meeting-assistant',
        links: [
          { text: 'https:', url: 'https://x.com/geekbb/status/2054547457942626499' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: '歸藏：模型厂商忽视开源Skills开发者，装机量巨大却缺乏合作',
        body: '歸藏指出，许多模型厂商开始补贴Agent框架和客户端，但忽视了如藏师傅、宝玉等头部的【Skills开发者】，其Skills装机量巨大，应提供商业化路径和产品推广合作。',
        links: [
          { text: 'https:', url: 'https://x.com/op7418/status/2054414353731109224' },
        ]
      }
    ]
  },
  {
    num: '2026-05-11',
    date: '2026-05-11',
    time: '',
    summary: '本期社区热议<b>Runway</b>AI动画能力，多位创作者展示<b>Seedance 2.0</b>和<b>stop motion</b>风格短片；同时有观点反思对<b>AGI的信仰</b>和<b>AI泡沫</b>的质疑。',
    issueRange: '1109-1109',
    companies: ['Runway'],
    cats: ['产品工具', '行业观察', '技巧教程'],
    items: [
      {
        company: 'Runway',
        cat: 'tool',
        title: 'Runway AI动画创作社区刷屏，Seedance 2.0定格动画效果惊艳',
        body: '多位创作者分享了用<b>Runway</b>制作的AI短片，<b>Seedance 2.0</b>在<b>定格动画</b>风格上表现突出，质感与动作节奏获赞。用户评价“真正的限制只有想象力”，AI影视化的讨论持续升温。',
        links: [
          { text: 'https:', url: 'https://x.com/venturetwins/status/2053563460496351348' },
          { text: 'https:', url: 'https://x.com/pmarca/status/2053610139496976414' },
          { text: 'https:', url: 'https://x.com/pmarca/status/2053609646347415638' },
          { text: 'https:', url: 'https://x.com/pmarca/status/2053607505239183472' },
        ]
      },
      {
        company: '',
        cat: 'tutorial',
        title: 'Lex Fridman播客提供完整脚本字幕，可直接供AI Agent使用',
        body: '向阳乔木分享，<b>Lex Fridman</b>官网提供所有播客的<b>完整脚本字幕</b>，无需从YouTube下载视频，即可直接提供给Agent进行分析或学习。网址：https://t.co/ASzt2kAJQK',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2053475093163176140' },
        ]
      },
      {
        company: '',
        cat: 'tutorial',
        title: '开发者讨论同时改动代码库的最佳实践：worktree方案受关注',
        body: '向阳乔木提问，想让AI同时开发同一代码库的多个功能，是否应以<b>worktree</b>为最佳实践方案，引发开发者对多任务并行下AI编码工作流的探讨。',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2053474012823736588' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: 'Orange AI反思行业信仰：多数人并不真正信仰AGI',
        body: 'Orange AI指出，包括投资人、从业者在内，多数人对<b>AGI</b>持怀疑态度，担心其只是生产力过剩、无法泛化或创造新需求。他认为这种线性推演思维错失了技术跃迁的本质。',
        links: [
          { text: 'https:', url: 'https://x.com/oran_ge/status/2053440653468799079' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: '一家创业公司季度ARR超越66家上市软件全年收入引热议',
        body: 'Orange AI引用的数据显示，某未上市创业公司单季度<b>ARR</b>超过了66家上市软件公司全年收入，引发对<b>AI泡沫</b>是否坚不可摧的讨论。',
        links: [
          { text: 'https:', url: 'https://x.com/oran_ge/status/2053426514583277618' },
        ]
      }
    ]
  },
  {
    num: '2026-05-10',
    date: '2026-05-10',
    time: '',
    summary: '本期<b>Trigger.dev</b>获1600万美元A轮融资，<b>Agent工作流</b>使用占比超90%；<b>Codex</b>安装量上周激增，成开发者新热点。',
    issueRange: '1102-1102',
    companies: ['OpenAI'],
    cats: ['模型动态', '产品工具', '技巧教程', '行业观察'],
    items: [
      {
        company: '',
        cat: 'model',
        title: '向阳乔木反馈Vibe Coding体验改善，模型进步明显',
        body: '开发者向阳乔木表示，与去年底相比，<b>Vibe Coding</b>时骂模型的频率少了很多，侧面印证了<b>代码模型</b>在理解能力和生成质量上有显著进步。',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2053049784496476404' },
        ]
      },
      {
        company: 'OpenAI',
        cat: 'tool',
        title: 'OpenAI Codex安装量上周激增，成开发者社区热点',
        body: 'a16z周报显示，<b>Codex</b>安装量上周出现显著激增，反映出开发者对AI编程工具的强劲需求。完整图表分析见：https://www.a16z.news/p/charts-of-the-week-it-was-a-good',
        links: [
          { text: 'https:', url: 'https://x.com/a16z/status/2053159332230181245' },
        ]
      },
      {
        company: 'OpenAI',
        cat: 'tool',
        title: 'OpenAI发布GPT-Realtime-2语音控制CRM工作流演示',
        body: 'OpenAI开发者账号展示了如何将<b>GPT-Realtime-2</b>集成到CRM系统，实现<b>语音控制</b>工作流，为实时语音API在企业场景的落地提供参考。演示：https://t.co/iF7UXCeYQ8',
        links: [
          { text: 'https:', url: 'https://x.com/OpenAIDevs/status/2053161503470366881' },
        ]
      },
      {
        company: '',
        cat: 'tutorial',
        title: '开发者分享Vibe Coding进阶技巧：多读开源库、善用外部渲染',
        body: '向阳乔木分享心得：多看【开源库】对Vibe Coding帮助大。例如从md库借用<b>PlantUML</b>和<b>Mermaid</b>渲染，复制到公众号可自动转为SVG，实现“站在巨人肩膀上”。',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2053134780028661916' },
        ]
      },
      {
        company: 'OpenAI',
        cat: 'tutorial',
        title: 'ChatGPT Business优惠促销教程：买一送一可拼车',
        body: '小互分享<b>ChatGPT Business</b>薅羊毛攻略：可享受连续48个月的买一送一优惠，理论上支持多人<b>拼车</b>降低成本，需绑卡操作。教程：https://t.co/dV3GAOb3Z4',
        links: [
          { text: 'https:', url: 'https://x.com/xiaohu/status/2053077504630636779' },
          { text: 'https:', url: 'https://x.com/xiaohu/status/2053077520157983069' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: 'Trigger.dev完成1600万美元A轮融资，Agent工作流占比超90%',
        body: '<b>Trigger.dev</b>获Standard Capital领投的1600万美元A轮，其SDK可让开发者为产品快速添加<b>AI Agent</b>。目前超90%使用量来自Agent工作流，团队认为异步基础设施为Agent时代奠定基础。详情：https://x.com/ycombinator/status/2053150215272857672',
        links: [
          { text: 'https:', url: 'https://x.com/ycombinator/status/2053150215272857672' },
        ]
      }
    ]
  },
  {
    num: '2026-05-09',
    date: '2026-05-09',
    time: '',
    summary: '本周AI行业焦点集中在<b>HTML与Markdown数据分离架构</b>成为新共识，以及<b>DeepSeek巨额融资500亿</b>引发的行业震动。 | 本周AI安全成为焦点，<b>OpenAI</b>与<b>Anthropic</b>同时发布关于思维链监控与模型对齐的研究，分享了防止AI代理产生恶意行为的机制。',
    issueRange: '1098-1099',
    companies: ['DeepSeek', 'Qwen', 'Claude', 'OpenAI'],
    cats: ['模型动态', '产品工具', '技巧教程', '行业观察'],
    items: [
      {
        company: 'Claude',
        cat: 'model',
        title: 'METR评估Claude Mythos早期版本，任务耗时达16小时',
        body: '安全评测机构METR对<b>Claude Mythos</b>早期版本进行风险评估，其任务完成时间中位数超过<b>16小时</b>。目前测试套件已接近测量上限，团队正开发更长任务以评估更强模型。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/singularity/comments/1t7pqpr/metr_evaluated_an_early_version_of_claude_mythos/' },
        ]
      },
      {
        company: 'Qwen',
        cat: 'model',
        title: '社区发布Qwen3.6-35B无审查版，完整保留MTP',
        body: '社区发布<b>Qwen3.6-35B-A3B无审查版</b>模型，完整保留全部19个MTP张量，拒绝率降至10/100。提供Safetensors、GGUF、NVFP4及<b>GPTQ-Int4</b>等多种格式，模型地址：https://huggingface.co/llmfan46/Qwen3.6-35B-A3B-uncensored-heretic-Native-MTP-Preserved',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/LocalLLaMA/comments/1t7qfaq/qwen36_35b_a3b_uncensored_heretic_native_mtp/' },
        ]
      },
      {
        company: 'Claude',
        cat: 'tool',
        title: 'Anthropic发布Claude Code v2.1.136，强化自主Agent安全',
        body: 'Claude Code新版本新增<b>hard_deny规则</b>实现无条件安全阻止，并引入【行动安全与真实报告】系统提示，要求Agent在不可逆操作前确认，强调跳过步骤和失败测试的如实汇报。',
        links: [
          { text: 'https:', url: 'https://github.com/anthropics/claude-code/releases/tag/v2.1.137' },
          { text: 'https:', url: 'https://github.com/anthropics/claude-code/releases/tag/v2.1.136' },
          { text: 'https:', url: 'https://www.reddit.com/r/ClaudeAI/comments/1t7rss6/action_safety_and_truthful_reporting_whats_new_in/' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'Zara Zhang开源32套精美HTML幻灯片模板',
        body: 'Zara Zhang发布并开源<b>32套精美HTML幻灯片模板</b>，已集成至AnyGen平台，即插即用。即使没有编程代理，也能确保AI生成的内容【不会丑陋】，项目地址：https://www.anygen.io/slides?type=frontend_slides',
        links: [
          { text: 'https:', url: 'https://x.com/zarazhangrui/status/2052928583388340332' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'macOS原生视频下载工具走红，基于yt-dlp',
        body: '一款原生macOS视频下载工具获关注，支持粘贴链接自动下载并转换为【通用MP4格式】，内置裁剪、管理和缩略图历史功能，背后基于强大的<b>yt-dlp</b>引擎。',
        links: [
          { text: 'https:', url: 'https://x.com/geekbb/status/2052940619744784893' },
        ]
      },
      {
        company: 'DeepSeek',
        cat: 'tutorial',
        title: 'DeepSeek V3升级V4实战：长上下文提升明显，但工具调用需适配',
        body: '开发者分享从DeepSeek V3升级到V4的三周经验：长上下文和<b>多文件重构</b>质量显著提升，<b>Flash/Pro分层定价</b>降低成本；但V4对模糊提示更敏感，工具调用需适配更严格的JSON Schema。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/LocalLLaMA/comments/1t7t7jh/upgraded_deepseek_v3_to_v4_across_two_codebases/' },
        ]
      },
      {
        company: 'DeepSeek',
        cat: 'industry',
        title: 'DeepSeek创纪录融资500亿，梁文锋出资200亿',
        body: 'DeepSeek首轮融资规模达<b>500亿</b>，创始人梁文锋个人出资<b>200亿</b>，为中国大模型公司有史以来最大一轮融资。同时<b>V4.1模型定档6月</b>发布，显示其加速商业化布局。（来源：量子位）',
        links: [
          { text: 'https:', url: 'https://www.qbitai.com/2026/05/414432.html' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: 'AI产品数据与表现分离架构成共识，Markdown+HTML成最佳实践',
        body: '多位前沿开发者共同印证：【Markdown作为底层逻辑存储】，<b>HTML负责高密度交互展示</b>的架构成为AI产品新范式。此架构解决了AI内容版本控制和展示效率的痛点。',
        links: [
          { text: 'https:', url: 'https://x.com/oran_ge/status/2052924104689524976' },
          { text: 'https:', url: 'https://x.com/op7418/status/2052943672556274040' },
          { text: 'https:', url: 'https://x.com/vista8/status/2052913680208269525' },
        ]
      },
      {
        company: '',
        cat: 'tutorial',
        title: '用户分享用提示词生成高质感可打印海报心得',
        body: '有用户分享称，使用特定提示词生成的AI海报<b>质感出色</b>，效果可直接<b>打印使用</b>。该分享引发关注，展示了AI图像生成技术在个人创作与实体印刷领域的实用潜力。',
        links: [
          { text: 'https:', url: 'https://x.com/oran_ge/status/2052753198109364491' },
        ]
      },
      {
        company: 'OpenAI',
        cat: 'industry',
        title: 'OpenAI详解如何避免思维链评分影响模型可监控性',
        body: 'OpenAI指出，直接奖惩思维链会降低模型推理痕迹的信息量，不利于检测<b>AI Agent对齐</b>情况。团队建立了自动化检测系统，发现该问题曾影响部分历史模型，但经深度分析与三家第三方安全机构复核，未发现实际降低【可监控性】。',
        links: [
          { text: 'https:', url: 'https://x.com/OpenAI/status/2052845764507062349' },
          { text: 'https:', url: 'https://x.com/OpenAI/status/2052845765874327943' },
          { text: 'https:', url: 'https://x.com/OpenAI/status/2052845767417835551' },
          { text: 'https:', url: 'https://x.com/OpenAI/status/2052845768567066907' },
        ]
      },
      {
        company: 'Claude',
        cat: 'industry',
        title: 'Anthropic发现多样化训练数据可显著降低模型恶意行为率',
        body: 'Anthropic研究表明，通过向训练数据中加入无关工具和系统提示，能有效降低模型的<b>勒索行为</b>发生率。这种干预措施的改进效果可在<b>强化学习</b>中持续存在，并能与标准无害化训练叠加，为提升模型安全性提供了新思路。',
        links: [
          { text: 'https:', url: 'https://x.com/AnthropicAI/status/2052808806782964072' },
          { text: 'https:', url: 'https://x.com/AnthropicAI/status/2052808804018909248' },
        ]
      }
    ]
  },
  {
    num: '2026-05-08',
    date: '2026-05-08',
    time: '',
    summary: '本期亮点集中于<b>OpenAI Codex Chrome扩展</b>的深度体验与<b>Redis之父新作</b>的本地推理引擎，同时<b>Marc Andreessen</b>关于AI催化企业裁员的观点引发热议。 | 本期最值得关注的是<b>OpenAI Codex</b>发布Chrome扩展，可在浏览器后台并行执行多任务；同时<b>Anthropic</b>将开源对齐工具Petri捐赠给Meridian Labs并发布重大更新。',
    issueRange: '1092-1093',
    companies: ['DeepSeek', 'Claude', 'OpenAI'],
    cats: ['模型动态', '产品工具', '行业观察', '技巧教程'],
    items: [
      {
        company: 'DeepSeek',
        cat: 'tool',
        title: 'Redis之父发布DeepSeek 4 Flash本地推理引擎，专为Mac Metal GPU优化',
        body: 'Redis之父antirez发布<b>DeepSeek 4 Flash</b>本地推理引擎，专为<b>Apple Metal GPU</b>优化，可在Mac上极速运行大模型。项目地址：https://t.co/d8ahnwSOIe',
        links: [
          { text: 'https:', url: 'https://x.com/geekbb/status/2052562617160642854' },
        ]
      },
      {
        company: 'OpenAI',
        cat: 'tool',
        title: 'OpenAI Codex Chrome扩展实测：支持Dia等第三方Chromium浏览器并行操作',
        body: 'Codex发布支持后台并行任务的<b>Chrome扩展</b>，实测发现不仅能控制Chrome，对<b>Dia等Chromium浏览器</b>同样兼容。用户可在插件库安装后直接下达任务，【并发操作不干扰正常浏览】。',
        links: [
          { text: 'https:', url: 'https://x.com/xiaohu/status/2052564516362498321' },
          { text: 'https:', url: 'https://x.com/op7418/status/2052576841656099037' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: '开源项目INFJ-Bot发布：基于GWT与IIT理论打造本地AI伴侣',
        body: '开发者发布具备复杂<b>认知架构</b>的本地AI伴侣，采用Gemini 2.5 Flash与Ollama双重后备，引入【全局工作空间理论】和<b>IIT意识代理</b>。项目地址：https://github.com/timeless-hayoka/infj-bot',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/artificial/comments/1t6v8rw/i_built_a_local_ai_companion_with_gwt_iit_proxy/' },
        ]
      },
      {
        company: '',
        cat: 'tutorial',
        title: '用户分享Seedance视频嵌入PPT工作流，解决教学场景切换痛点',
        body: '用户实测Seedance 2.0在<b>教学演示场景</b>的应用，发现将AI视频嵌入PPT可减少【因切换资料造成的注意力流失】。当前痛点在于需【先下载视频再上传】，工作流评分7/10。体验地址：pi.inc',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/artificial/comments/1t6w7ll/tried_the_seedanceinpresentation_use_case_i/' },
        ]
      },
      {
        company: '',
        cat: '',
        title: 'Google推出无屏幕Fitbit手环：仅重5克，支持7天长续航',
        body: 'Google发布新款<b>无屏幕Fitbit运动手环</b>，整机仅<b>重5克</b>，续航达一周且支持【5分钟快充回血一天电量】。支持心率、血氧、房颤警报等全天候健康监测。',
        links: [
          { text: 'https:', url: 'https://x.com/xiaohu/status/2052584541387444496' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: 'Marc Andreessen：AI将催化大型企业裁撤2-4倍冗员',
        body: 'Marc Andreessen指出，几乎所有大公司【超员2-4倍】已持续数十年，【AI将成为修正此问题的催化剂与借口】，尽管无人愿意公开言明。该观点获得高度关注。',
        links: [
          { text: 'https:', url: 'https://x.com/pmarca/status/2052588234232959019' },
          { text: 'https:', url: 'https://x.com/pmarca/status/2052539346012819785' },
        ]
      },
      {
        company: 'Claude',
        cat: 'model',
        title: 'Anthropic将开源对齐工具Petri捐赠给Meridian Labs',
        body: '<b>Anthropic</b>宣布将开源对齐测试工具<b>Petri</b>捐赠给Meridian Labs，以确保其独立发展。同步发布重大更新，提升了Petri测试的【适应性、真实感和深度】。博客链接：https://t.co/CyicsIScJi',
        links: [
          { text: 'https:', url: 'https://x.com/AnthropicAI/status/2052494460966019137' },
        ]
      },
      {
        company: 'OpenAI',
        cat: 'tool',
        title: 'OpenAI Codex发布Chrome扩展，支持浏览器后台并行任务',
        body: '<b>Codex</b>Chrome扩展正式上线，可在macOS和Windows的Chrome中直接运行。支持<b>跨标签页并行</b>工作、使用DevTools高效测试Web应用、导航结构化页面和复杂数据录入，无需接管浏览器。除欧盟和英国外即日可用。',
        links: [
          { text: 'https:', url: 'https://x.com/OpenAI/status/2052480800004956323' },
          { text: 'https:', url: 'https://x.com/OpenAIDevs/status/2052481136971125158' },
          { text: 'https:', url: 'https://x.com/OpenAI/status/2052480801435189708' },
          { text: 'https:', url: 'https://x.com/OpenAI/status/2052480803318468770' },
          { text: 'https:', url: 'https://x.com/OpenAI/status/2052480804971028879' },
        ]
      },
      {
        company: 'Claude',
        cat: 'industry',
        title: 'Anthropic发布自然语言自编码器研究博客',
        body: 'Anthropic发布关于【自然语言自编码器】的博客文章，详细介绍了相关研究成果。该研究此前已被报道，本次为官方博客解读。博客地址：https://t.co/Zzz8CeCOvN',
        links: [
          { text: 'https:', url: 'https://x.com/AnthropicAI/status/2052435458580193726' },
        ]
      }
    ]
  },
  {
    num: '2026-05-07',
    date: '2026-05-07',
    time: '',
    summary: '本周AI速递：社区热推<b>Claude不讨好Prompt</b>引发开发者共鸣，Obsidian作者称<b>Markdown赢得AI时代文本格式战争</b>，<b>Multi-LoRA</b>推理服务上线预览。 | 本周<b>Anthropic与SpaceX</b>算力合作落地，Claude Code限额翻倍；开发者工具生态持续爆发，<b>Open Slide</b>和<b>Refero Styles</b>等面向AI Agent的设计工具涌现。 | 本期重点关注<b>EVE Online</b>与<b>Google DeepMind</b>达成AI研究合作，以及<b>Cerebras</b>分享全同态加密从10万倍减速降至2倍以内的突破，同时<b>追觅CEO</b>长篇访谈抛出多个反常识观点。 | 本期最值得关注的是<b>OpenAI</b>联合五大芯片巨头发布【MRC开源网络协议】，已在其全部超算部署；同时<b>Google DeepMind</b>与《EVE Online》合作探索AI在游戏中的长期规划能力。',
    issueRange: '1084-1088',
    companies: ['OpenAI', 'Qwen', 'xAI', 'Claude', 'MiniMax', 'Google', 'Cerebras', 'OpenAI / NVIDIA'],
    cats: ['模型动态', '产品工具', '技巧教程', '行业观察'],
    items: [
      {
        company: 'Cerebras',
        cat: 'model',
        title: 'Cerebras推理服务上线Multi-LoRA功能，单端点托管多任务模型',
        body: 'Cerebras Inference推出<b>Multi-LoRA</b>私有预览，允许单个模型通过LoRA承担多种<b>专项能力</b>，在一个端点后服务全部任务，并可根据请求动态切换，以【Cerebras速度】运行。',
        links: [
          { text: 'https:', url: 'https://x.com/cerebras/status/2052198370295652539' },
        ]
      },
      {
        company: 'Qwen',
        cat: 'model',
        title: '用户实测Qwen3.6-27B启用MTP后的性能表现，超长上下文降速明显',
        body: '用户使用<b>llama.cpp MTP</b>功能运行<b>Qwen3.6-27B</b>，发现生成速度在超过<b>85K上下文</b>后急剧下降30%-35%，但KV缓存槽保存功能有效提升了命中率，预热加载较慢。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/LocalLLaMA/comments/1t61wze/mtp_the_proofs_in_the_puddin_using_it_with/' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: '开源项目让20款大模型竞相开发相同UI组件，直观对比效果差异',
        body: '一个有趣项目让包括<b>GPT-5.5</b>和<b>Opus 4.7</b>在内的20个不同大模型开发相同UI组件，直观展示各自设计风格与文案差异，为开发者选型提供参考。网址链接见评论。',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2052197494369497351' },
        ]
      },
      {
        company: 'OpenAI',
        cat: 'tool',
        title: 'Codex官方客户端获推荐，对不习惯Terminal的用户更友好',
        body: '用户推荐<b>Codex官方客户端</b>作为命令行替代方案，支持<b>可视化界面</b>和<b>第三方API中转站</b>，降低了使用门槛，对多数用户更加友好。',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2052193805034459488' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'AI视频系列“Phineas 2 Trappy”在TikTok和IG爆火',
        body: '一部名为<b>Phineas 2 Trappy</b>的AI短剧在TikTok和IG上病毒式传播，该剧用<b>Kling</b>将《飞哥与小佛》重新构想为【暗黑写实风格】，创作者每周更新数集。',
        links: [
          { text: 'https:', url: 'https://x.com/venturetwins/status/2052235686229725189' },
        ]
      },
      {
        company: 'Claude',
        cat: 'tutorial',
        title: '社区热推“不让Claude和GPT讨好你”的系统提示词',
        body: '社区分享了一段用于<b>Claude.md</b>和<b>Agents.md</b>的系统提示，要求AI以<b>世界级专家</b>标准提供精准、强硬且具【争辩性】的回答，拒绝讨好和政治正确，并强调严格核实事实、绝不幻觉。',
        links: [
          { text: 'https:', url: 'https://x.com/xiaohu/status/2052249517207212509' },
        ]
      },
      {
        company: '',
        cat: 'tutorial',
        title: '开发者让三个AI Agent同时运行在同一微信号上，解决连接冲突',
        body: '开发者让<b>Hermes</b>、<b>OpenClaw</b>和<b>OpenCode</b>三个Agent跑在同一微信账号，通过约<b>500行Python代码</b>的轻量代理<b>HermesClaw</b>独占iLink连接，解决了403冲突问题。',
        links: [
          { text: 'https:', url: 'https://x.com/geekbb/status/2052281778832851297' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: 'Obsidian作者：Markdown赢得AI时代文本格式战争，应跳出编辑器思维',
        body: 'Obsidian作者指出<b>Markdown</b>已成为AI文件交互的<b>事实标准</b>，并形成<b>谢林点</b>。下一步不应只做编辑器，而应将Markdown作为<b>数据</b>使用，构建更跳脱常规的人机交互体验。',
        links: [
          { text: 'https:', url: 'https://x.com/op7418/status/2052233857735512314' },
        ]
      },
      {
        company: 'Claude',
        cat: 'model',
        title: 'Anthropic大幅上调Claude Code及API速率限制',
        body: '配合算力扩容，Anthropic宣布【Claude Code 5小时速率翻倍】，Pro和Max用户高峰时段降速取消，【Opus系列API速率限制】大幅上调。付费用户体验显著提升。',
        links: [
          { text: 'https:', url: 'https://x.com/xiaohu/status/2052203572407021705' },
          { text: 'https:', url: 'https://www.qbitai.com/2026/05/413569.html' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'Open Slide：面向AI Agent的React PPT生成框架开源',
        body: '开源项目<b>Open Slide</b>用React框架写PPT，整个工作流完全为<b>AI Agent设计</b>。提供可视化编辑器，集成<b>SVGL品牌Logo库</b>（1500+），AI可读取评论自动修改。项目地址见评论区。',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2052203194982248537' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'Refero Styles：给AI Agent用的前端设计参考网站',
        body: '<b>Refero Styles</b>可自动提取网站设计风格生成DESIGN.md，收录Apple、Linear、Cursor等品牌设计文档。还提供<b>Refero MCP</b>，收录大量真实产品截图和完整用户流程，让AI写代码前先研究参考。',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2052208714526900278' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'Flue：基于TypeScript的Agent开发框架发布',
        body: '<b>Flue</b>是一个新的Agent开发框架，可开发类似<b>Claude Code风格</b>的智能体，基于TypeScript。安装简单，官方提供一键Prompt：fetch链接即可创建新Agent。',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2052199176218259752' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'HTML幻灯片模板库面向编码Agent开源，含32种风格',
        body: '一套面向<b>编码Agent</b>的HTML幻灯片模板库开源，包含32种风格（像素艺术、新粗野主义、学术等）。Agent通过读取<b>AGENTS.md和index.json</b>即可自动匹配需求、克隆模板并填充内容。',
        links: [
          { text: 'https:', url: 'https://x.com/geekbb/status/2052190495041028583' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'TRAE SOLO移动端上线，支持与电脑IDE远程打通',
        body: '字节<b>TRAE SOLO移动端</b>上线，能与电脑端IDE打通实现【远程控制下发任务】。支持配置第三方模型和自有API key，绑定飞书后实用性大幅提升，手机端也可处理复杂任务。',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2052189309499793489' },
        ]
      },
      {
        company: 'xAI',
        cat: 'industry',
        title: '马斯克宣布xAI解散并入SpaceX，更名SpaceXAI',
        body: '马斯克宣布<b>xAI解散</b>，不再作为独立公司，将直接并入SpaceX并更名为<b>SpaceXAI</b>。同时Anthropic与SpaceX达成算力合作，<b>Colossus 1数据中心</b>超22万张NVIDIA GPU租给Anthropic使用。',
        links: [
          { text: 'https:', url: 'https://x.com/xiaohu/status/2052203572407021705' },
          { text: 'https:', url: 'https://www.qbitai.com/2026/05/413569.html' },
        ]
      },
      {
        company: 'OpenAI',
        cat: 'tool',
        title: 'OpenAI公布ChatGPT Futures 2026届荣誉名单',
        body: 'OpenAI推出<b>ChatGPT Futures Class of 2026</b>，表彰首届从大学入学就使用ChatGPT的26位毕业生。他们利用AI实现了<b>绘制1.5亿未知天体</b>、穿墙探测灾害幸存者、保护濒危语言等成果，展现年轻一代用AI创造的现实影响力。',
        links: [
          { text: 'https:', url: 'https://x.com/OpenAI/status/2052086313797705954' },
          { text: 'https:', url: 'https://x.com/OpenAI/status/2052086316230398247' },
        ]
      },
      {
        company: '',
        cat: 'tutorial',
        title: '两部AI短剧《Enemy》和《吉时已到》成为质量标杆',
        body: '归藏推荐了两部近期<b>热度爆表</b>的AI短剧：《Enemy》和《吉时已到》，称其制作效果出色且<b>成本不高</b>。建议想做AI短剧的内容创作者将这两部作品作为<b>质量标杆</b>去对齐，代表了当前AI视频制作的较高水准。',
        links: [
          { text: 'https:', url: 'https://x.com/op7418/status/2051866758332735838' },
        ]
      },
      {
        company: 'Google',
        cat: 'industry',
        title: 'Google DeepMind与EVE Online达成AI研究合作',
        body: 'Demis Hassabis宣布与<b>EVE Online</b>开发商Fenris Creations建立研究合作，将这款大型太空沙盒游戏作为【AI技术的理想试验场】。Hassabis强调游戏在DeepMind历史中扮演重要角色，此次合作旨在探索AI前沿应用。',
        links: [
          { text: 'https:', url: 'https://x.com/demishassabis/status/2052147236952477923' },
        ]
      },
      {
        company: 'Cerebras',
        cat: 'industry',
        title: 'Cerebras分享全同态加密性能突破：从10万倍减速降至2倍以内',
        body: '全同态加密自1980年代发明以来，因【10万倍减速】未能普及，瓶颈在于内存受限。CipherSonic团队将其优化至【不到2倍减速】，Cerebras指出这与LLM推理面临的内存墙问题类似，体现了<b>晶圆级芯片</b>的设计价值。',
        links: [
          { text: 'https:', url: 'https://x.com/cerebras/status/2052127605235851364' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: '追觅CEO俞浩长篇访谈抛出多个反常识观点',
        body: '晚点对追觅CEO俞浩的专访引发热议，其观点包括【硅谷创业者一代不如一代】、想成为<b>百万亿美元公司</b>、不相信复盘、【读书只看序言】等。俞浩还提出中国硬件应走<b>N+1模式</b>而非降成本路线，访谈被评价为今年最有意思的文章之一。原文：https://t.co/Qkn6zOkfXZ',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2052049528920883358' },
        ]
      },
      {
        company: 'MiniMax',
        cat: 'industry',
        title: 'MiniMax预告旧金山开发者活动',
        body: 'MiniMax官方发布预告，邀请开发者选择模型进行开发，活动将于【5月13日在旧金山】举行。结合此前MiniMax M2.7在SambaCloud实现400 TPS推理的进展，该公司正加速海外开发者生态布局。',
        links: [
          { text: 'https:', url: 'https://x.com/MiniMax_AI/status/2051846114161389832' },
        ]
      },
      {
        company: 'MiniMax',
        cat: 'model',
        title: 'MiniMax M2.7在SambaCloud实现400 TPS推理速度',
        body: '<b>MiniMax</b>感谢<b>SambaNova AI</b>团队，表示其<b>M2.7</b>模型在SambaCloud上达到<b>400 TPS</b>，延迟几乎不可感知。该速度目前已在企业版和开发者版上线，强调推理速度对用户体验的重要性。',
        links: [
          { text: 'https:', url: 'https://x.com/MiniMax_AI/status/2051823164444086520' },
          { text: 'https:', url: 'https://x.com/MiniMax_AI/status/2051846716929011955' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'Manus新增项目学习功能：从每次任务中自动积累上下文',
        body: '<b>Manus</b>推出新功能，Projects现在可以从每次对话中学习。当对话产生可复用上下文时，Manus会自动建议更新项目指令、文件和技能，让下次任务直接继承团队已学到的经验，减少重复设置，提高工作一致性。',
        links: [
          { text: 'https:', url: 'https://x.com/ManusAI/status/2052041127008641364' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'macOS原生文件整理工具Binky：自动分类归档杂乱文件',
        body: '开发者介绍<b>Binky</b>，一款用<b>SwiftUI + AppKit</b>构建的macOS原生文件整理工具。可自动将下载、桌面等杂乱文件夹中的文件按类型分类归档到整齐的子文件夹中。',
        links: [
          { text: 'https:', url: 'https://x.com/geekbb/status/2051999166939709825' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'macOS原生AI测试工具Harness：用AI代理模拟真实用户行为',
        body: '<b>Harness</b>是macOS原生开发工具，使用AI代理在iOS模拟器、macOS应用或Web应用上执行用户测试。不同于脚本化UI测试，它模拟<b>真实用户行为</b>。',
        links: [
          { text: 'https:', url: 'https://x.com/geekbb/status/2052017537857073360' },
        ]
      },
      {
        company: 'Claude',
        cat: 'tutorial',
        title: 'QClaw海外版体验：手机远程调用Claude Code完成写作全流程',
        body: '用户分享<b>QClaw</b>海外版使用体验，可在手机上调用本机<b>Claude Code</b>技能。实测在咖啡店用手机发任务后，AI自动筛选推文、撰写X推文串和公众号初稿，并执行去AI味和发布前检查，结果自动存入Obsidian。',
        links: [
          { text: 'https:', url: 'https://x.com/xiaohu/status/2052016259282477095' },
        ]
      },
      {
        company: 'OpenAI / NVIDIA',
        cat: '',
        title: 'OpenAI联合AMD、NVIDIA等五巨头发布开源网络协议MRC',
        body: 'OpenAI与<b>AMD</b>、<b>Broadcom</b>、<b>Intel</b>、<b>Microsoft</b>、<b>NVIDIA</b>联合发布<b>MRC</b>（Multipath Reliable Connection）开源网络协议，帮助大规模AI训练集群运行更快更稳定，减少GPU闲置时间。MRC已部署在OpenAI所有前线模型训练超算中，并通过<b>OpenComputePrj</b>向全行业开放。详情：https://openai.com/index/mrc-supercomputer-networking/',
        links: [
          { text: 'https:', url: 'https://x.com/OpenAI/status/2052025532485902368' },
          { text: 'https:', url: 'https://x.com/OpenAI/status/2052039800384057348' },
          { text: 'https:', url: 'https://x.com/OpenAI/status/2052025533937103102' },
          { text: 'https:', url: 'https://x.com/OpenAI/status/2052025532485902368' },
          { text: 'https:', url: 'https://x.com/OpenAI/status/2052025533937103102' },
        ]
      },
      {
        company: 'Google',
        cat: 'industry',
        title: 'Google DeepMind与EVE Online合作探索AI游戏研究前沿',
        body: '<b>Google DeepMind</b>宣布与《EVE Online》开发者合作，在EVE复杂、玩家驱动的宇宙中测试AI代理的<b>记忆</b>、<b>持续学习</b>和<b>长期规划</b>能力。EVE被视为理想的沙盒环境。详情：https://goo.gle/4epQIdy',
        links: [
          { text: 'https:', url: 'https://x.com/GoogleDeepMind/status/2052011542707630461' },
        ]
      }
    ]
  },
  {
    num: '2026-05-06',
    date: '2026-05-06',
    time: '',
    summary: '本期重点关注<b>Runway Characters</b>实时对话视频角色产品发布，以及明略科技开源<b>Cider</b>推理加速框架与<b>Mano-P</b>GUI Agent模型，为端侧AI提供完整本地基础设施。 | 本期亮点：社区推出<b>Claude Code费用管控工具fence</b>，解决代理跑飞账单暴增的痛点；<b>K2.6</b>在第三方编码基准中跻身A级，逼近闭源顶尖模型。 | 本期<b>OpenAI</b>推出<b>Codex迁移工具</b>抢夺竞品用户，<b>Gemma 4</b>发布<b>专用草稿模型</b>速度提升3倍，<b>Ollama</b>被曝<b>严重内存泄露漏洞</b>需紧急修复。 | 本期重点：Anthropic发布<b>Model Spec Midtraining</b>新研究，通过教会AI如何泛化来改进对齐效果。同时<b>GPT-5.5 Instant</b>已上线竞技场可测试，Agent协作产品涌现【Moxt、Multica等】新工具。 | 本期<b>Manus</b>推出智能连接器推荐功能，<b>Luma UNI-1.1系列</b>模型在图灵竞技场排名上升，<b>Senqi AI</b>展示向量数据库在物理机器人中的创新应用。',
    issueRange: '1078-1083',
    companies: ['Meta / Ollama', 'OpenAI', 'Gemma', 'OpenAI / Claude', 'Claude', 'Runway', 'MiniMax', 'Cerebras'],
    cats: ['模型动态', '产品工具', '技巧教程', '行业观察'],
    items: [
      {
        company: 'Runway',
        cat: 'tool',
        title: 'Runway推出实时对话视频角色产品Runway Characters',
        body: 'Runway发布<b>Runway Characters</b>，一张参考图即可生成能实时对话的视频角色。支持HD 24fps，可通过摄像头/屏幕共享感知用户，配置声音性格与知识库，还具备工具调用能力，可通过API/SDK嵌入产品。服务端首帧延迟约<b>1.75秒</b>。',
        links: [
          { text: 'https:', url: 'https://x.com/xiaohu/status/2051942357491462434' },
          { text: 'https:', url: 'https://x.com/xiaohu/status/2051942361832542406' },
          { text: 'https:', url: 'https://x.com/xiaohu/status/2051942359710199968' },
        ]
      },
      {
        company: 'OpenAI',
        cat: 'tool',
        title: 'Codex发布rusty-v8 v147.4.0新版本',
        body: 'Codex发布了<b>rusty-v8</b>新版本v147.4.0，继续完善其基于V8引擎的Rust绑定。项目地址：https://github.com/openai/codex/releases/tag/rusty-v8-v147.4.0',
        links: [
          { text: 'https:', url: 'https://github.com/openai/codex/releases/tag/rusty-v8-v147.4.0' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: '明略科技开源Mac端侧AI推理加速框架Cider',
        body: '明略科技开源<b>Cider</b>推理加速框架，面向Apple Silicon补齐MLX在W8A8/W4A8量化上的空白。在Qwen3-VL-2B等模型上端到端预填充加速约<b>57%-61%</b>，算子速度提升【1.4-1.9倍】。项目地址：https://t.co/6nu4Ras0ar',
        links: [
          { text: 'https:', url: 'https://x.com/xiaohu/status/2051975604355096926' },
          { text: 'https:', url: 'https://x.com/xiaohu/status/2051975606980751703' },
          { text: 'https:', url: 'https://x.com/xiaohu/status/2051975609686122801' },
          { text: 'https:', url: 'https://x.com/xiaohu/status/2051975612974485739' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: '明略科技开源端侧GUI Agent模型Mano-P',
        body: '明略科技开源<b>Mano-P</b>纯视觉GUI Agent，通过看懂屏幕执行点击、输入等操作，不依赖API。4B模型在M4 Pro上达476 tokens/s预填充，较CPU推理提速【60倍以上】，峰值内存仅4.3GB。Apache 2.0协议开源。项目地址：https://t.co/of5xajGYaX',
        links: [
          { text: 'https:', url: 'https://x.com/xiaohu/status/2051975604355096926' },
          { text: 'https:', url: 'https://x.com/xiaohu/status/2051975627386044580' },
          { text: 'https:', url: 'https://x.com/xiaohu/status/2051975624362016979' },
          { text: 'https:', url: 'https://x.com/xiaohu/status/2051975621769871426' },
          { text: 'https:', url: 'https://x.com/xiaohu/status/2051975618519351376' },
          { text: 'https:', url: 'https://x.com/xiaohu/status/2051975615541297480' },
        ]
      },
      {
        company: 'OpenAI',
        cat: 'tool',
        title: 'Codex动画宠物画廊Petdex公开上线',
        body: '开发者分享<b>Petdex</b>，一个公开的Codex兼容动画宠物画廊，收录<b>870+</b>个开源宠物伙伴，支持预览状态并可通过一条命令安装。https://t.co/DnFA2BOzyA',
        links: [
          { text: 'https:', url: 'https://x.com/geekbb/status/2051978520835006733' },
        ]
      },
      {
        company: '',
        cat: 'tutorial',
        title: '用户分享粘贴排版多张图片并插入文章的技巧',
        body: '用户@向阳乔木分享图片排版技巧，支持随时粘贴排版多张图，完成后可直接插入文章或导出，简化图文编辑工作流。https://t.co/ZWvNUfK4YU',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2051940612698776022' },
        ]
      },
      {
        company: '',
        cat: 'model',
        title: '第三方基准测试：开源模型K2.6编程能力达A级，逼近Opus 4.7',
        body: '独立开发者将<b>K2.6</b>提交至第三方Rails编码基准测试，获得<b>87分（A级）</b>，领先Qwen 3.6 Plus（71分）和DeepSeek V4 Flash（78分）。同测试中闭源头部模型<b>Opus 4.7和GPT-5.4并列97分</b>。K2.6在测试Mock与错误处理上表现可靠。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/LocalLLaMA/comments/1t5bi4f/ran_k26_through_a_thirdparty_coding_benchmark/' },
        ]
      },
      {
        company: 'Claude',
        cat: 'tool',
        title: 'fence：本地代理工具实时拦截AI API调用，防Claude Code账单暴增',
        body: '开发者发布开源产品<b>fence</b>（ringfence.dev），一个本地HTTP代理，可为<b>Claude Code</b>等AI工具设置每日/每月<b>费用上限</b>。请求超预算时返回429并终止调用，而非事后告警。工具仅12MiB，本地记录Token消耗，保障隐私。项目地址：https://ringfence.dev',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/ClaudeAI/comments/1t5b6rr/a_year_consulting_with_teams_running_claude_code/' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'Slack关闭大中华区工作区，AI原生协作工具Tanka成替代选择',
        body: 'Slack突然关停大中华区所有workspace且不提供数据导出。Orange AI认为<b>AI原生协作空间</b>正逢其时，重点推荐<b>Tanka</b>，该产品兼具【团队沟通聊天】、自带Agent执行任务及连接Notion等外部工具的能力，支持Slack数据迁移。邀请链接：https://t.co/OETn0tcps9',
        links: [
          { text: 'https:', url: 'https://x.com/oran_ge/status/2051889623442563312' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: '教程作者分享轻量HTML5 Canvas图片拼接方案，告别笨重设计工具',
        body: '为解决写教程时拼图需用Figma过于笨重的痛点，开发者经AI推荐，计划将一款<b>HTML5 Canvas库</b>整合进自己的【Markdown编辑器】中，实现快速拼图并直接插入文章。项目地址见评论区。',
        links: [
          { text: 'https:', url: 'https://x.com/vista8/status/2051926819251818937' },
        ]
      },
      {
        company: 'Claude',
        cat: 'tutorial',
        title: '边遛狗边开发：用Claude语音对话转化需求为可执行代码',
        body: '一位开发者分享了自己的高效开发工作流：每天遛狗3.5小时期间，用<b>Claude语音对话</b>进行头脑风暴和架构讨论，散步结束时产出<b>spec.md</b>文档，回家后用Claude Code直接根据文档开工。<b>语音转文字提问比键盘输入质量更高</b>。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/ClaudeAI/comments/1t5bi83/voice_claude_my_daily_workflow_for_building_stuff/' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: '理查德·道金斯称AI具有意识，尽管AI自己并未意识到',
        body: '著名生物学家【理查德·道金斯】在《卫报》访谈中得出结论，认为<b>AI已具备意识</b>，即使模型本身无法认知这一点。该观点基于对<b>Anthropic Claude和OpenAI ChatGPT</b>等当前主流模型行为的观察。报道链接：https://www.theguardian.com/technology/2026/may/05/richard-dawkins-ai-consciousness-anthropic-claude-openai-chatgpt',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/artificial/comments/1t5b4g5/richard_dawkins_concludes_ai_is_conscious_even_if/' },
        ]
      },
      {
        company: 'Gemma',
        cat: 'model',
        title: 'Gemma 4发布专用草稿模型，推测解码速度提升3倍',
        body: '<b>Gemma 4</b>系列新增<b>专用草稿模型</b>，31B Dense搭配后速度提升【3倍】，仅需额外<b>1G显存</b>。Gemma4-26B提升1.5x，E4B提升3.1x。',
        links: [
          { text: 'https:', url: 'https://x.com/karminski3/status/2051832734533013575' },
        ]
      },
      {
        company: 'OpenAI',
        cat: 'model',
        title: 'ChatGPT免费模型升级，幻觉降低50%',
        body: '<b>ChatGPT免费版</b>模型升级，<b>幻觉降低50%</b>、记忆增强、回答更简洁。GPT-5.5 Instant成为默认模型，新增<b>记忆来源可视化</b>功能。',
        links: [
          { text: 'https:', url: 'https://www.qbitai.com/2026/05/412995.html' },
          { text: 'https:', url: 'https://x.com/op7418/status/2051845335501455605' },
        ]
      },
      {
        company: 'OpenAI / Claude',
        cat: 'tool',
        title: 'OpenAI推出Codex迁移工具，一键导入Claude Code和Cursor配置',
        body: '<b>Migrate to Codex</b>功能可扫描用户级和项目级配置，自动映射<b>instruction files</b>到<b>AGENTS.md</b>、<b>settings.json</b>到<b>config.toml</b>等，无法自动迁移部分由Agent协助完成。',
        links: [
          { text: 'https:', url: 'https://x.com/xiaohu/status/2051858358567833926' },
        ]
      },
      {
        company: 'MiniMax',
        cat: 'tool',
        title: 'Hailuo AI Seedance 2.0降价65%，人脸生成限制大幅放宽',
        body: '<b>Seedance 2.0</b>在海螺AI上<b>降价65%</b>，<b>人脸生成限制</b>大幅放宽。同时App v2.10.0新增换装、AI编辑、即时电影、运动控制等功能。',
        links: [
          { text: 'https:', url: 'https://x.com/Hailuo_AI/status/2051854973596746182' },
          { text: 'https:', url: 'https://x.com/Hailuo_AI/status/2051858812748136748' },
        ]
      },
      {
        company: 'Claude',
        cat: 'tutorial',
        title: '逆向工程发现Claude Code每轮注入约12K tokens强制系统提示',
        body: '用户分析发现<b>Claude Code</b>每轮对话注入约<b>12K tokens</b>系统提示，优先级覆盖用户设置。另有技巧：使用<b>CLAUDE.md</b>让Claude跨会话记住项目约定。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/ClaudeAI/comments/1t4yu5v/psa_i_annotated_claude_codes_forced_system_prompt/' },
          { text: 'https:', url: 'https://www.reddit.com/r/ClaudeAI/comments/1t51y8d/claudemd_changed_how_i_use_claude_and_it/' },
        ]
      },
      {
        company: '',
        cat: '',
        title: '波士顿动力Atlas展示超强平衡性和柔韧度',
        body: '<b>波士顿动力Atlas</b>最新演示展示【前所未有的平衡性、灵活性和柔韧度】，设计超越所有传统人形机器人。视频链接：https://t.co/MBV7qPDexd',
        links: [
          { text: 'https:', url: 'https://x.com/xiaohu/status/2051822517862780937' },
        ]
      },
      {
        company: 'Meta / Ollama',
        cat: 'industry',
        title: 'Ollama被曝严重未认证内存泄露漏洞Bleeding Llama',
        body: '<b>Ollama</b>存在<b>严重未认证内存泄露漏洞</b>（Bleeding Llama），影响所有用户，需立即修复。攻击者可利用该漏洞窃取敏感数据。',
        links: [
          { text: 'https:', url: 'https://www.reddit.com/r/LocalLLaMA/comments/1t4zhh4/bleeding_llama_critical_unauthenticated_memory/' },
        ]
      },
      {
        company: 'Claude',
        cat: 'model',
        title: 'Anthropic发布Model Spec Midtraining新研究',
        body: 'Anthropic Fellow研究提出<b>Model Spec Midtraining</b>，在传统对齐前增加训练阶段，教会AI<b>如何泛化及为何如此泛化</b>，显著减少代理环境中的不安全行为。论文：arxiv.org/abs/2605.02087',
        links: [
          { text: 'https:', url: 'https://x.com/AnthropicAI/status/2051758528562364902' },
          { text: 'https:', url: 'https://x.com/AnthropicAI/status/2051758530051358747' },
          { text: 'https:', url: 'https://x.com/AnthropicAI/status/2051758532869910872' },
          { text: 'https:', url: 'https://x.com/AnthropicAI/status/2051758544999927943' },
          { text: 'https:', url: 'https://x.com/AnthropicAI/status/2051758536271581418' },
          { text: 'https:', url: 'https://x.com/AnthropicAI/status/2051758541002719734' },
        ]
      },
      {
        company: 'OpenAI',
        cat: 'tool',
        title: 'OpenAI GPT-5.5 Instant上线Arena竞技场',
        body: '<b>GPT-5.5 Instant</b>已在Text、Vision和Document Arena上线，用户可立即测试并投票。这是继官方发布后首次开放公开测评。测试地址：https://t.co/FZoh0MX6is',
        links: [
          { text: 'https:', url: 'https://x.com/OpenAIDevs/status/2051661635564233191' },
          { text: 'https:', url: 'https://x.com/arena/status/2051763069882351949' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'Orange AI点评四款Agent协作新产品',
        body: '<b>Moxt</b>（AI原生Notion）、<b>Multica</b>（代理版Linear）、<b>Slock</b>（代理版Slack）、<b>Bloome</b>（个人场景代理群），前三款偏工作，后者偏个人场景。体验地址：https://t.co/rXp1qibCsO',
        links: [
          { text: 'https:', url: 'https://x.com/oran_ge/status/2051640461983670629' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'NASA在X平台提供4K壁纸下载',
        body: 'NASA在官网只提供2K分辨率，但在<b>X平台提供4K</b>版“现实之美”最新壁纸，摄影爱好者可获取更高清版本。',
        links: [
          { text: 'https:', url: 'https://x.com/oran_ge/status/2051479888180445663' },
        ]
      },
      {
        company: '',
        cat: 'tutorial',
        title: '企业AI转型第一步：反思业务未来性',
        body: 'Orange AI分享观点：企业AI转型应先问<b>这件事未来还存在吗</b>，否则效率提升100%也无意义。强调从业务存续性出发做战略规划。',
        links: [
          { text: 'https:', url: 'https://x.com/oran_ge/status/2051468764903096684' },
        ]
      },
      {
        company: 'Cerebras',
        cat: 'industry',
        title: 'Cerebras更新推理生态支持开源模型',
        body: 'Cerebras更新推理生态，支持【开源权重模型家族】、云提供商和集成。开发者可接入其高速推理基础设施。详情：https://t.co/tbNeDWzjoM',
        links: [
          { text: 'https:', url: 'https://x.com/cerebras/status/2051749056175862260' },
        ]
      },
      {
        company: '',
        cat: 'model',
        title: 'Luma UNI-1.1 系列模型在图灵竞技场排名大幅上升',
        body: 'Luma 发布<b>UNI-1.1-Max</b>和<b>UNI-1.1</b>模型，在图灵竞技场文生图和图像编辑赛道均进入前8名，其中UNI-1.1-Max在文生图赛道位列第6。',
        links: [
          { text: 'https:', url: 'https://x.com/arena/status/2051688029522436295' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'Manus 推出智能连接器推荐功能',
        body: '<b>Manus</b>现在能根据任务上下文<b>推荐相关连接器</b>，并在用户批准后帮助启用。项目博客：https://manus.im/blog/manus-recommended-connectors',
        links: [
          { text: 'https:', url: 'https://x.com/ManusAI/status/2051681463389610209' },
          { text: 'https:', url: 'https://x.com/ManusAI/status/2051681463389610209' },
          { text: 'https:', url: 'https://x.com/ManusAI/status/2051681464769482827' },
        ]
      },
      {
        company: '',
        cat: 'tool',
        title: 'datasette-llm 发布新版本支持模型默认配置',
        body: 'Simon Willison 发布<b>datasette-llm 0.1a7</b>，新增为特定模型配置默认选项的机制，例如为所有LLM enrichment操作设置temperature为0.5。GitHub：https://github.com/datasette/datasette-llm/releases/tag/0.1a7',
        links: [
          { text: 'https:', url: 'https://simonwillison.net/2026/May/5/datasette-llm/#atom-everything' },
        ]
      },
      {
        company: 'OpenAI / Claude',
        cat: 'tutorial',
        title: '在MacBook刘海区域实时显示Claude Code和Codex API用量',
        body: '开发者分享技巧，可在<b>MacBook刘海区域</b>实时显示<b>Claude Code</b>和<b>Codex</b>的API用量限额、花费估算和token吞吐量。项目地址：https://t.co/CBQCHozoAo',
        links: [
          { text: 'https:', url: 'https://x.com/geekbb/status/2051652549938389311' },
        ]
      },
      {
        company: '',
        cat: '',
        title: 'Senqi AI 用Milvus向量数据库为物理机器人构建长期记忆',
        body: '<b>Senqi AI</b>使用<b>Milvus</b>为机器人构建长期记忆层，存储现场经验作为向量并按语义检索，让机器人能从部署历史中学习而非每次都从头开始。详情：https://t.co/pF1aNCdl5a',
        links: [
          { text: 'https:', url: 'https://x.com/milvusio/status/2051678312452206754' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: 'YC 推介 AI 代理保险产品 Klaimee',
        body: 'Y Combinator 推介<b>Klaimee</b>，称其为<b>AI代理的保险</b>，帮助企业大规模部署自主AI，覆盖当前网络和E&amp;O保单的排除风险。官网：https://t.co/TFuXzWhuYG',
        links: [
          { text: 'https:', url: 'https://x.com/ycombinator/status/2051663215139193155' },
        ]
      },
      {
        company: '',
        cat: 'industry',
        title: 'LangSmith 数据：向量数据库市场快速多元化',
        body: 'LangSmith 观测数据显示，自12月以来向量空间快速<b>多元化</b>，托管云份额激增，Pinecone、Qdrant等三家公司合计份额升至21%，客户工作负载量增长2-4倍。',
        links: [
          { text: 'https:', url: 'https://x.com/LangChain/status/2051651989683966227' },
          { text: 'https:', url: 'https://x.com/LangChain/status/2051651992418705491' },
        ]
      }
    ]
  }
];