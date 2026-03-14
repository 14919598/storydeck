import type { InputMode, LayoutId, ThemeId } from './story'

export interface StarterPack {
  id: string
  name: string
  category: string
  tagline: string
  useCase: string
  screenshotLabel: string
  featured?: boolean
  inputMode: InputMode
  theme: ThemeId
  layout: LayoutId
  content: string
}

export const STARTER_PACKS: StarterPack[] = [
  {
    id: 'indie-launch',
    name: '产品发布 / Indie Launch',
    category: '发布 Launch',
    tagline: '适合独立产品首发，一眼就能做出更有冲击力的移动端展示页。',
    useCase: '最适合做仓库首图、社交封面图和短视频开场画面。',
    screenshotLabel: '首图版本 / Hero Launch',
    featured: true,
    inputMode: 'markdown',
    theme: 'neon',
    layout: 'launch',
    content: `Title: Orbit Notes
Subtitle: 把分散的灵感、截图和待办，收进一个更安静的工作流。
Kicker: 产品发布 / Launch Drop
Audience: 独立开发者、内容创作者、效率工具爱好者
CTA: 预约内测

## 痛点是什么
很多人的灵感都散落在不同地方。笔记在一个 App，截图在另一个文件夹，真正下一步要做什么，往往就在切换里丢掉了。

## Orbit Notes 为什么不一样
- 一个时间流：笔记、截图、语音片段和链接都能放进同一条内容流里。
- 更容易聚焦：零散素材会被整理成更干净的卡片，手机上看也不会乱。
- 为行动设计：每一条记录都能继续变成任务、分享页或下一次发布素材。

## 发布节奏
- 今天：内测预约页上线，支持移动端快速注册。
- 本周：首批用户解锁协作空间和共享看板。
- 下一版：接入 AI 摘要和一键发布故事页能力。

## 关键证明
- 3 分钟上手：从第一次记录到整理出第一个工作区。
- 87% 用户反馈：更快找到“下一步要做什么”。
- 1 个链接分享：每个工作区都能变成一页可以传播的展示页。

## Quote
> 我们真正缺的不是又一个笔记工具，而是一个能让未完成想法更快继续往前走的起点。

## 行动建议
- 加入首批 500 人内测名单。
- 分享你现在混乱的工作流，再看看它如何被重新整理。
- 直接把产品笔记变成一页可以发出去的发布页。`,
  },
  {
    id: 'creator-portfolio',
    name: '个人介绍 / Creator Portfolio',
    category: '介绍 Profile',
    tagline: '适合设计师、顾问、工作室做更有故事感的一页式介绍。',
    useCase: '更适合展示温和、杂志感、带个人气质的版式。',
    screenshotLabel: '人物故事 / Editorial Portfolio',
    inputMode: 'notes',
    theme: 'editorial',
    layout: 'narrative',
    content: `Mira Studio
为想被记住的产品设计发布故事、界面体验和内容系统。

我更擅长的，不是单纯做视觉，而是把产品定位、页面叙事和界面语言揉在一起，让一个项目更容易被理解、被传播、也更有记忆点。

最近的工作包括产品发布页、创作者工具包、内容专题页，以及帮助早期团队把“很散的想法”整理成真正能上线的页面资产。

- 让发布页看起来不只是说明文档，而像一个完整的故事场景
- 把产品策略翻译成可感知的视觉语言和内容节奏
- 把零散草稿收拢成团队能马上发布的页面内容

大多数合作方的问题都不是“没有内容”，而是内容太多、太散、太难形成主线。我做的事情，就是找到最重要的那条线，把它做成别人愿意看完的一页。

下一步，我想把这套方法沉淀成更容易复用的模板，让更多团队即使没有完整设计支持，也能更快做出有表达力的展示页。`,
  },
  {
    id: 'feature-brief',
    name: '功能说明 / Feature Brief',
    category: '讲解 Explain',
    tagline: '适合产品更新、功能说明和 docs-lite 风格的移动端讲解页。',
    useCase: '适合产品团队对外发版本更新，也适合做轻量化功能导览。',
    screenshotLabel: '功能讲解 / Product Explainer',
    featured: true,
    inputMode: 'json',
    theme: 'corporate',
    layout: 'explain',
    content: `{
  "meta": {
    "title": "Focus Mode 2.0",
    "subtitle": "把长内容更快整理成一页可读、可分享的移动端展示。",
    "kicker": "功能说明 / Feature Brief",
    "audience": "产品团队、早期用户、内容运营",
    "cta": "查看完整演示"
  },
  "sections": [
    {
      "type": "intro",
      "title": "这次更新了什么",
      "body": "Focus Mode 2.0 把“写内容”和“整理成展示页”之间那段最容易卡住的流程，压缩得更清楚也更快了。第一次使用的人也更容易做出完整页面。"
    },
    {
      "type": "cards",
      "title": "三个最实用的升级",
      "items": [
        {
          "title": "默认模板更聪明",
          "body": "首屏预设更贴近真实场景，不需要从空白页面重新想结构。",
          "tag": "ux"
        },
        {
          "title": "导出更干净",
          "body": "独立 HTML 更适合直接分享、归档或者部署到静态站点。",
          "tag": "delivery"
        },
        {
          "title": "页面节奏更稳",
          "body": "不同区块之间的层次更清晰，讲背景、讲价值、讲行动都更顺。",
          "tag": "story"
        }
      ]
    },
    {
      "type": "timeline",
      "title": "怎么使用这次更新",
      "items": [
        {
          "label": "步骤 1",
          "title": "粘贴原始内容",
          "body": "可以从草稿、Markdown 或 JSON 开始。"
        },
        {
          "label": "步骤 2",
          "title": "选择页面方向",
          "body": "根据内容性质切换页面骨架和视觉主题。"
        },
        {
          "label": "步骤 3",
          "title": "导出并发布",
          "body": "下载独立 HTML，发给别人或者直接上线。"
        }
      ]
    },
    {
      "type": "closing",
      "title": "为什么它重要",
      "body": "很多功能更新不是没人关心，而是被埋在更新日志里没人愿意看完。一页轻量故事页，能在几分钟里把价值讲清楚。",
      "action": "打开演示，试一下新的工作流。"
    }
  ]
}`,
  },
  {
    id: 'event-drop',
    name: '活动宣传 / Event Drop',
    category: '活动 Campaign',
    tagline: '适合做活动招募页、社群海报页和更有情绪感的宣传页。',
    useCase: '很适合做高能视觉演示、小红书封面图和社群活动招募。',
    screenshotLabel: '活动首图 / Event Campaign',
    featured: true,
    inputMode: 'markdown',
    theme: 'neon',
    layout: 'launch',
    content: `Title: Midnight Build Jam
Subtitle: 一场 48 小时的线上创作冲刺，给设计师、开发者和讲故事的人一个高能共创现场。
Kicker: 活动宣传 / Event Drop
Audience: 独立开发者、创意编码者、设计技术从业者
CTA: 报名参与

## 这是什么
Midnight Build Jam 是一场节奏很快的线上活动。它想把“想做点有意思的东西”这件事，从长期拖延，变成 48 小时内真的能落地的共创体验。

## 它有什么不一样
- 不做空泛路演：你要交付的是一个真实可看的页面、原型或互动作品。
- 小团队高节奏：1 到 3 人组队，减少反复讨论带来的拖慢。
- 最终可见：作品会进入公开展示集，不会做完就被埋进文件夹。

## 活动节奏
- 周五晚上：开场、主题发布、组队交流。
- 周六全天：创作窗口、设计点评、开放答疑。
- 周日晚上：Demo 展示、公开投票、作品直播。

## 参与者会得到什么
- 一个真正完成并可被别人看到的作品
- 来自产品、设计、工程方向的反馈
- 一个更适合后续传播的项目展示页

## Quote
> 很多最有生命力的作品，恰恰来自“时间短到没法继续犹豫”的时刻。

## 发起前清单
- 确定最终主题池
- 打开报名页
- 发布预热短视频和活动主视觉`,
  },
  {
    id: 'case-study',
    name: '案例拆解 / Case Study',
    category: '案例 Story',
    tagline: '适合做前后对比、项目复盘和更具说服力的案例页。',
    useCase: '它能证明 StoryDeck 不只适合发布页，也适合长期复用的内容表达。',
    screenshotLabel: '案例叙事 / Narrative Case',
    featured: true,
    inputMode: 'markdown',
    theme: 'editorial',
    layout: 'narrative',
    content: `Title: Northstar 如何在两周内把发布混乱感降下来
Subtitle: 一个把分散更新整合成单页叙事的案例拆解。
Kicker: 案例拆解 / Case Study
Audience: 创始人、市场团队、内容运营和项目负责人
CTA: 查看完整复盘

## 原来的问题
Northstar 的产品很强，团队节奏也很快，但每次发布都像在不同地方讲不同版本的故事。内部文档、演示群、活动文案和产品截图之间，彼此都在说同一件事，却没有统一表达。

## 发生了哪些改变
- 一条主线：团队先对外统一了“这次发布到底在讲什么”。
- 模块化区块：证据、截图、更新点和行动按钮不再零散拼接，而是被整理成可以复用的内容模块。
- 更快分享：不再为每个渠道重新排版，而是先做一页移动端展示页，再把链接分发出去。

## 结果是什么
- 发布时间从几天压缩到几个小时。
- 审阅轮次明显变少，因为结构更稳定，大家更容易快速判断。
- 发布页不只是营销物料，也成了团队内部对齐的工具。

## Quote
> 一页好的故事页，减少的不只是设计工作量，还减少了团队必须重复解释同一件事的次数。

## 下一步
- 补上图片和短视频素材
- 把案例结构继续沉淀成可复用模板
- 对外公开这套页面生产方法`,
  },
  {
    id: 'internal-comms',
    name: '内部沟通 / Internal Comms',
    category: '内部 Internal',
    tagline: '适合更正式的内部更新、经营通报和组织级沟通材料。',
    useCase: '适合证明这个工具既能做外部传播，也能做严肃一点的内部内容。',
    screenshotLabel: '内部更新 / Internal Update',
    inputMode: 'json',
    theme: 'corporate',
    layout: 'explain',
    content: `{
  "meta": {
    "title": "Q2 经营更新",
    "subtitle": "把本季度最值得被看到的重点、决定和下一步，整理成一页移动端更新。",
    "kicker": "内部沟通 / Internal Comms",
    "audience": "全体团队",
    "cta": "查看行动清单"
  },
  "sections": [
    {
      "type": "stats",
      "title": "这个季度最重要的变化",
      "items": [
        {
          "label": "已完成项目",
          "value": "12 个",
          "detail": "覆盖产品发布、流程优化和关键运营动作。"
        },
        {
          "label": "交付周期",
          "value": "-18%",
          "detail": "从草稿到上线的整体速度更快。"
        },
        {
          "label": "团队机制",
          "value": "1 个共用评审",
          "detail": "统一周会评审替代了分散的更新串。"
        }
      ]
    },
    {
      "type": "cards",
      "title": "三个最值得关注的决定",
      "items": [
        {
          "title": "每次重要发布都做成单页",
          "body": "后续关键发布不再分散发通知，而是统一收敛到一个可分享的页面里。",
          "tag": "alignment"
        },
        {
          "title": "缩短审批回路",
          "body": "大家不再看多个版本的文档，而是围绕同一份移动端草稿统一评审。",
          "tag": "speed"
        },
        {
          "title": "沉淀可复用模板",
          "body": "把表现最好的发布、复盘和更新结构继续沉淀成可复用模板包。",
          "tag": "system"
        }
      ]
    },
    {
      "type": "checklist",
      "title": "各团队接下来要做什么",
      "items": [
        "在下一次重要发布前，先看一遍新的页面模板。",
        "从本团队挑一个最适合做成固定模板的更新场景。",
        "带一个真实案例来，一起试试能不能整理成可复用故事页。"
      ]
    },
    {
      "type": "closing",
      "title": "核心结论",
      "body": "目标不是制造更多内部内容，而是让真正重要的内容更容易被理解、更快发出去，也更容易长期复用。",
      "action": "把下一次更新纳入统一的页面工作流。"
    }
  ]
}`,
  },
]

export const DEFAULT_STARTER_PACK_ID = STARTER_PACKS[0]?.id ?? 'indie-launch'
export const FEATURED_PACKS = STARTER_PACKS.filter((pack) => pack.featured)
