export type InputMode = 'notes' | 'markdown' | 'json'
export type ThemeId = 'editorial' | 'corporate' | 'neon'
export type LayoutId = 'narrative' | 'explain' | 'launch'

export type StorySection =
  | {
      type: 'intro'
      title: string
      body: string
    }
  | {
      type: 'cards'
      title: string
      items: Array<{
        title: string
        body: string
        tag?: string
      }>
    }
  | {
      type: 'timeline'
      title: string
      items: Array<{
        label: string
        title: string
        body: string
      }>
    }
  | {
      type: 'quote'
      quote: string
      caption?: string
    }
  | {
      type: 'checklist'
      title: string
      items: string[]
    }
  | {
      type: 'stats'
      title: string
      items: Array<{
        label: string
        value: string
        detail?: string
      }>
    }
  | {
      type: 'closing'
      title: string
      body: string
      action?: string
    }

export interface StoryDocument {
  meta: {
    title: string
    subtitle: string
    kicker: string
    audience?: string
    cta?: string
  }
  sections: StorySection[]
}

export interface ParseResult {
  story: StoryDocument
  warnings: string[]
}

export const EXAMPLE_INPUTS: Record<InputMode, string> = {
  notes: `StoryDeck
把 Markdown、JSON 和提示词，更快变成适合手机浏览的 H5 展示页。

StoryDeck 想解决的不是“AI 能不能生成一页 HTML”，而是“内容能不能被稳定地整理成可复用的展示页系统”。

很多团队其实并不缺内容，缺的是把内容整理成一页愿意被别人看完、也方便持续复用的方式。

- 适合产品发布、活动宣传、案例拆解和内部沟通
- 比一次性的 AI 生成结果更稳定，更容易保持统一风格
- 可以导出独立 HTML，方便直接发链接、归档或部署

第一版的重点是速度：选模板、换主题、贴内容，然后几分钟内做出一页能发的 H5 页面。

后面最值得继续做的，就是把不同场景沉淀成可重复使用的模板包。`,
  markdown: `Title: StoryDeck
Subtitle: 把 Markdown、JSON 或提示词，整理成更适合手机传播的 H5 展示页。
Kicker: 内容转 H5 / Story Generator
Audience: 产品团队、内容团队、创作者与内部沟通场景
CTA: 导出独立 HTML

## 为什么值得做
现在很多 AI 都能生成 HTML，但问题在于它经常是一页一页临时起稿，结构不稳定，也很难持续复用。真正有价值的，是把内容变成长期可用的页面工作流。

## 它解决了什么
- 结构更稳定：从模板骨架开始，而不是从空白页面开始。
- 主题可切换：同一份内容可以切成叙事、正式或高能发布风格。
- 导出更方便：一键生成独立 HTML，适合 GitHub Pages、内网或活动传播。

## 使用流程
- 起稿 | 粘贴草稿、Markdown 或 JSON。
- 成型 | 选择页面骨架和主题。
- 发布 | 导出 HTML，发链接或继续部署。

## 信号
- 预览更直观：手机框里实时看到结果。
- 展示更友好：不是文档渲染，而是更像内容展示页。
- 可复用性更强：同一套引擎能覆盖发布、讲解、案例和内部沟通。

## Quote
> AI 可以帮你起稿，StoryDeck 更像把内容变成可持续复用的展示系统。

## 首发清单
- 先把公开展示最强的三套主题做扎实。
- 把发布页、说明页、案例页做成可切换模板。
- 用 GitHub Pages 放出一个可直接体验的 demo。`,
  json: `{
  "meta": {
    "title": "StoryDeck",
    "subtitle": "一个把内容整理成移动端 H5 展示页的模板化生成器。",
    "kicker": "结构化 H5 生成器",
    "audience": "产品团队、内容团队、创作者",
    "cta": "下载 HTML"
  },
  "sections": [
    {
      "type": "intro",
      "title": "为什么它值得做",
      "body": "好内容并不少，缺的是一种更稳定的移动端表达方式。StoryDeck 想做的是让长内容看起来更有设计感，也更方便传播。"
    },
    {
      "type": "cards",
      "title": "核心优势",
      "items": [
        {
          "title": "结构可复用",
          "body": "不需要每次重新让模型生成整页 HTML，而是从可重复使用的页面骨架开始。",
          "tag": "system / 系统"
        },
        {
          "title": "换风格更快",
          "body": "同一份内容可以直接切换主题和页面节奏，不用重写原文。",
          "tag": "design / 设计"
        },
        {
          "title": "导出更方便",
          "body": "一份独立 HTML 就能覆盖演示、静态托管和内部传播场景。",
          "tag": "delivery / 交付"
        }
      ]
    },
    {
      "type": "timeline",
      "title": "MVP 路线",
      "items": [
        {
          "label": "阶段 1",
          "title": "输入与预览",
          "body": "支持草稿、Markdown 和 JSON，并提供即时移动端预览。"
        },
        {
          "label": "阶段 2",
          "title": "主题与结构",
          "body": "让同一份内容在叙事风、正式风和发布风之间切换。"
        },
        {
          "label": "阶段 3",
          "title": "导出与发布",
          "body": "生成独立 HTML，方便直接分享或部署。"
        }
      ]
    },
    {
      "type": "quote",
      "quote": "真正的价值不是临时生成一页好看的页面，而是建立一个可以持续产出的展示工作流。",
      "caption": "项目原则 / Project Principle"
    },
    {
      "type": "closing",
      "title": "下一步做什么",
      "body": "接下来可以继续增加更丰富的区块、可复用模板，以及针对不同场景的主题包。",
      "action": "先把一页内容做出来，再把它变成一套方法。"
    }
  ]
}`,
}

const FALLBACK_STORY: StoryDocument = {
  meta: {
    title: 'StoryDeck',
    subtitle: '把内容更快整理成适合手机浏览的展示页。',
    kicker: '内容转 H5 / Story Generator',
    audience: '产品团队与内容团队',
    cta: '导出 HTML',
  },
  sections: [
    {
      type: 'intro',
      title: '先从结构开始',
      body:
        '把草稿、Markdown 或 JSON 粘进来，再用页面骨架和主题把它整理成更适合手机阅读的展示页。',
    },
    {
      type: 'cards',
      title: '这个 MVP 现在已经能做什么',
      items: [
        {
          title: '输入更灵活',
          body: '同一个界面里就支持草稿、Markdown 和 JSON 三种内容来源。',
          tag: 'input / 输入',
        },
        {
          title: '主题可切换',
          body: '不改原文，也能切换不同视觉方向和展示风格。',
          tag: 'theme / 主题',
        },
        {
          title: '导出更轻量',
          body: '直接生成一份 HTML，就可以在不同场景里流转。',
          tag: 'output / 导出',
        },
      ],
    },
  ],
}

const THEME_TOKENS: Record<
  ThemeId,
  {
    pageBackground: string
    panelBackground: string
    panelMuted: string
    textPrimary: string
    textSecondary: string
    accent: string
    accentSoft: string
    border: string
    frame: string
    heroBackground: string
    storyBackground: string
    shadow: string
  }
> = {
  editorial: {
    pageBackground: 'linear-gradient(180deg, #f4ecdf 0%, #efe4d4 48%, #d6c0a9 100%)',
    panelBackground: 'rgba(255, 252, 245, 0.82)',
    panelMuted: '#f5ede2',
    textPrimary: '#221910',
    textSecondary: '#65584a',
    accent: '#8a3b12',
    accentSoft: '#eed4bc',
    border: 'rgba(80, 53, 34, 0.16)',
    frame: '#2d2118',
    heroBackground: 'linear-gradient(135deg, #3d2b1f 0%, #8a3b12 100%)',
    storyBackground: 'linear-gradient(180deg, #fff8ef 0%, #f3ebdc 100%)',
    shadow: '0 28px 80px rgba(53, 34, 20, 0.18)',
  },
  corporate: {
    pageBackground: 'linear-gradient(180deg, #ebf1fb 0%, #dbe7ff 100%)',
    panelBackground: 'rgba(255, 255, 255, 0.88)',
    panelMuted: '#f3f7ff',
    textPrimary: '#15233b',
    textSecondary: '#52637e',
    accent: '#165dff',
    accentSoft: '#dce8ff',
    border: 'rgba(22, 93, 255, 0.14)',
    frame: '#112038',
    heroBackground: 'linear-gradient(135deg, #0f3f97 0%, #165dff 100%)',
    storyBackground: 'linear-gradient(180deg, #ffffff 0%, #f4f7fc 100%)',
    shadow: '0 28px 80px rgba(17, 32, 56, 0.16)',
  },
  neon: {
    pageBackground: 'linear-gradient(180deg, #090b1f 0%, #16123a 50%, #220d4d 100%)',
    panelBackground: 'rgba(14, 16, 38, 0.82)',
    panelMuted: '#171a3e',
    textPrimary: '#f3f5ff',
    textSecondary: '#b1b6e4',
    accent: '#4dffb8',
    accentSoft: '#13392f',
    border: 'rgba(77, 255, 184, 0.18)',
    frame: '#050612',
    heroBackground: 'linear-gradient(135deg, #7427ff 0%, #0f7bff 52%, #0de2c7 100%)',
    storyBackground: 'linear-gradient(180deg, rgba(16, 19, 46, 0.95) 0%, rgba(9, 11, 31, 0.98) 100%)',
    shadow: '0 28px 80px rgba(0, 0, 0, 0.45)',
  },
}

export function getThemeTokens(theme: ThemeId) {
  return THEME_TOKENS[theme]
}

export function parseStoryInput(mode: InputMode, input: string): ParseResult {
  try {
    switch (mode) {
      case 'json':
        return parseJsonInput(input)
      case 'markdown':
        return parseMarkdownInput(input)
      case 'notes':
      default:
        return parseNotesInput(input)
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : '未知解析错误'
    return {
      story: FALLBACK_STORY,
      warnings: [`解析失败，已自动切回默认示例内容：${message}`],
    }
  }
}

function parseJsonInput(input: string): ParseResult {
  const raw = JSON.parse(input) as Partial<StoryDocument>
  const story = normalizeStory(raw)
  return { story, warnings: [] }
}

function parseMarkdownInput(input: string): ParseResult {
  const warnings: string[] = []
  const lines = input.replace(/\r/g, '').split('\n')
  const metaLines: string[] = []
  let firstHeadingIndex = lines.findIndex((line) => line.trim().startsWith('## '))

  if (firstHeadingIndex === -1) {
    firstHeadingIndex = lines.length
  }

  for (let index = 0; index < firstHeadingIndex; index += 1) {
    if (lines[index].includes(':')) {
      metaLines.push(lines[index])
    }
  }

  const meta = {
    title: readMeta(metaLines, 'title') ?? firstNonEmptyLine(lines) ?? FALLBACK_STORY.meta.title,
    subtitle:
      readMeta(metaLines, 'subtitle') ??
      '一页根据 Markdown 自动整理出来的移动端展示页。',
    kicker: readMeta(metaLines, 'kicker') ?? '结构文稿 / Markdown',
    audience: readMeta(metaLines, 'audience') ?? '',
    cta: readMeta(metaLines, 'cta') ?? '导出 HTML',
  }

  const content = lines.slice(firstHeadingIndex).join('\n').trim()
  const blocks = splitMarkdownBlocks(content)
  const sections: StorySection[] = []

  blocks.forEach((block, index) => {
    const title = block.title.trim()
    const body = block.body.trim()
    const listItems = parseMarkdownList(body)
    const quoteLines = body
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.startsWith('>'))
      .map((line) => line.replace(/^>\s?/, '').trim())

    if (quoteLines.length > 0 || title.toLowerCase().includes('quote')) {
      sections.push({
        type: 'quote',
        quote: quoteLines.join(' ') || stripMarkdown(body),
        caption: title.toLowerCase().includes('quote') ? '引用 / Quote' : title,
      })
      return
    }

    if (looksLikeTimeline(title, listItems)) {
      sections.push({
        type: 'timeline',
        title,
        items: listItems.map((item, itemIndex) => {
          const [left, middle, right] = splitItemParts(item)
          return {
            label: left || `步骤 ${itemIndex + 1}`,
            title: middle || left || `步骤 ${itemIndex + 1}`,
            body: right || middle || left || item,
          }
        }),
      })
      return
    }

    if (looksLikeStats(title, listItems)) {
      sections.push({
        type: 'stats',
        title,
        items: listItems.map((item) => {
          const [label, value, detail] = splitItemParts(item)
          return {
            label: label || '信号',
            value: value || label || '重点',
            detail: detail || '',
          }
        }),
      })
      return
    }

    if (looksLikeChecklist(title, listItems)) {
      sections.push({
        type: 'checklist',
        title,
        items: listItems.length > 0 ? listItems : body.split('\n').filter(Boolean),
      })
      return
    }

    if (listItems.length > 0) {
      sections.push({
        type: 'cards',
        title,
        items: listItems.map((item) => {
          const [itemTitle, itemBody, tag] = splitItemParts(item)
          return {
            title: itemTitle || '重点',
            body: itemBody || itemTitle || item,
            tag,
          }
        }),
      })
      return
    }

    const cleanBody = stripMarkdown(body)
    sections.push({
      type: index === blocks.length - 1 ? 'closing' : 'intro',
      title,
      body: cleanBody,
      action: index === blocks.length - 1 ? meta.cta : undefined,
    })
  })

  if (sections.length === 0) {
    warnings.push('没有识别到章节标题，已自动生成一个简版导览区块。')
    sections.push({
      type: 'intro',
      title: '导览',
      body: stripMarkdown(content),
    })
  }

  return { story: normalizeStory({ meta, sections }), warnings }
}

function parseNotesInput(input: string): ParseResult {
  const warnings: string[] = []
  const paragraphs = input
    .replace(/\r/g, '')
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean)

  if (paragraphs.length === 0) {
    warnings.push('草稿输入为空，已自动载入默认示例内容。')
    return { story: FALLBACK_STORY, warnings }
  }

  const firstParagraphLines = paragraphs[0].split('\n').map((line) => line.trim()).filter(Boolean)
  const explicitTitleLine = firstParagraphLines.find((line) => !line.startsWith('-') && line.length <= 72)
  const title = explicitTitleLine?.replace(/^#\s*/, '') ?? '未命名故事页'
  const subtitleSource =
    paragraphs.find((paragraph, index) => index > 0 && !paragraph.includes('- ')) ?? paragraphs[0]

  const bulletItems = input
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => /^[-*]\s+/.test(line))
    .map((line) => line.replace(/^[-*]\s+/, '').trim())

  const proseParagraphs = paragraphs
    .map((paragraph) =>
      paragraph
        .split('\n')
        .filter((line) => !/^[-*]\s+/.test(line.trim()))
        .join(' ')
        .trim(),
    )
    .filter(Boolean)

  const fallbackIntroBody =
    FALLBACK_STORY.sections[0].type === 'intro'
      ? FALLBACK_STORY.sections[0].body
      : '先写一段足够清楚的开场导语。'
  const introBody = proseParagraphs[1] ?? proseParagraphs[0] ?? fallbackIntroBody
  const midParagraphs = proseParagraphs.slice(2, 5)
  const closingBody =
    proseParagraphs[proseParagraphs.length - 1] ?? '补一段结尾提醒，告诉读者下一步要做什么。'
  const quoteSource = findQuoteCandidate(proseParagraphs) ?? '先抓住一个最强的观点，再让页面去放大它。'

  const sections: StorySection[] = [
    {
      type: 'intro',
      title: '内容导览',
      body: introBody,
    },
  ]

  if (midParagraphs.length > 0) {
    sections.push({
      type: 'cards',
      title: '这页内容为什么成立',
      items: midParagraphs.map((paragraph, index) => ({
        title: sentenceToTitle(paragraph, index),
        body: paragraph,
        tag: index === 0 ? 'focus / 重点' : undefined,
      })),
    })
  }

  if (bulletItems.length > 0) {
    sections.push({
      type: bulletItems.every((item) => item.includes(':')) ? 'stats' : 'checklist',
      title: bulletItems.every((item) => item.includes(':')) ? '关键信号' : '制作清单',
      items: bulletItems.every((item) => item.includes(':'))
        ? bulletItems.map((item) => {
            const [label, value, detail] = splitItemParts(item)
            return {
              label: label || '信号',
              value: value || '数值',
              detail,
            }
          })
        : bulletItems,
    } as StorySection)
  }

  sections.push({
    type: 'quote',
    quote: quoteSource,
    caption: 'Extracted from notes',
  })

  sections.push({
    type: 'closing',
    title: 'Next step',
    body: closingBody,
    action: 'Turn this draft into a shareable story page.',
  })

  const story = normalizeStory({
    meta: {
      title,
      subtitle: subtitleSource.replace(/^#\s*/, ''),
      kicker: '草稿输入 / Prompt',
      audience: '需要快速出页的团队',
      cta: '导出 HTML',
    },
    sections,
  })

  return { story, warnings }
}

function normalizeStory(raw: Partial<StoryDocument>): StoryDocument {
  const meta = raw.meta ?? FALLBACK_STORY.meta
  const sections =
    raw.sections?.filter((section): section is StorySection => Boolean(section)) ??
    FALLBACK_STORY.sections

  return {
    meta: {
      title: meta.title?.trim() || FALLBACK_STORY.meta.title,
      subtitle: meta.subtitle?.trim() || FALLBACK_STORY.meta.subtitle,
      kicker: meta.kicker?.trim() || FALLBACK_STORY.meta.kicker,
      audience: meta.audience?.trim() || FALLBACK_STORY.meta.audience,
      cta: meta.cta?.trim() || FALLBACK_STORY.meta.cta,
    },
    sections: sections.length > 0 ? sections : FALLBACK_STORY.sections,
  }
}

function readMeta(lines: string[], key: string) {
  const found = lines.find((line) => line.toLowerCase().startsWith(`${key.toLowerCase()}:`))
  return found?.split(':').slice(1).join(':').trim()
}

function firstNonEmptyLine(lines: string[]) {
  return lines.map((line) => line.trim()).find(Boolean)
}

function splitMarkdownBlocks(content: string) {
  if (!content) {
    return []
  }

  return content
    .split(/^##\s+/m)
    .map((chunk) => chunk.trim())
    .filter(Boolean)
    .map((chunk) => {
      const [titleLine, ...rest] = chunk.split('\n')
      return {
        title: titleLine.trim(),
        body: rest.join('\n').trim(),
      }
    })
}

function parseMarkdownList(body: string) {
  return body
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => /^[-*]\s+/.test(line))
    .map((line) => line.replace(/^[-*]\s+/, '').trim())
}

function looksLikeTimeline(title: string, items: string[]) {
  const lowered = title.toLowerCase()
  return lowered.includes('timeline') || lowered.includes('roadmap') || lowered.includes('flow') || items.every((item) => item.includes('|'))
}

function looksLikeChecklist(title: string, items: string[]) {
  const lowered = title.toLowerCase()
  return (
    lowered.includes('checklist') ||
    lowered.includes('steps') ||
    lowered.includes('takeaways') ||
    lowered.includes('action') ||
    (items.length > 0 && !items.some((item) => item.includes('|') || item.includes(':')))
  )
}

function looksLikeStats(title: string, items: string[]) {
  const lowered = title.toLowerCase()
  return (
    lowered.includes('signals') ||
    lowered.includes('stats') ||
    lowered.includes('metrics') ||
    (items.length > 0 && items.every((item) => item.includes(':')))
  )
}

function splitItemParts(item: string) {
  const separator = item.includes('|') ? '|' : item.includes(':') ? ':' : ''
  if (!separator) {
    return [item.trim(), '', '']
  }

  const parts = item
    .split(separator)
    .map((part) => part.trim())
    .filter(Boolean)
  return [parts[0] ?? '', parts[1] ?? '', parts[2] ?? '']
}

function stripMarkdown(input: string) {
  return input
    .replace(/^>\s?/gm, '')
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/`(.*?)`/g, '$1')
    .trim()
}

function sentenceToTitle(paragraph: string, index: number) {
  const firstSentence = paragraph.split(/[.!?]/)[0]?.trim() ?? ''
  if (firstSentence.length > 0 && firstSentence.length <= 42) {
    return firstSentence
  }
  return `要点 ${index + 1}`
}

function findQuoteCandidate(paragraphs: string[]) {
  return paragraphs.find((paragraph) => paragraph.length >= 56 && paragraph.length <= 150)
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

function paragraphsToHtml(text: string) {
  return text
    .split(/\n\s*\n/)
    .map((paragraph) => `<p>${escapeHtml(paragraph.trim())}</p>`)
    .join('')
}

function renderSectionHtml(section: StorySection) {
  switch (section.type) {
    case 'intro':
      return `<section class="story-section intro"><div class="section-label">导览 Overview</div><h2>${escapeHtml(section.title)}</h2><div class="prose">${paragraphsToHtml(section.body)}</div></section>`
    case 'cards':
      return `<section class="story-section cards"><div class="section-label">亮点 Highlights</div><h2>${escapeHtml(section.title)}</h2><div class="card-grid">${section.items
        .map(
          (item) =>
            `<article class="story-card"><div class="card-top">${item.tag ? `<span class="mini-tag">${escapeHtml(item.tag)}</span>` : ''}</div><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.body)}</p></article>`,
        )
        .join('')}</div></section>`
    case 'timeline':
      return `<section class="story-section timeline"><div class="section-label">流程 Flow</div><h2>${escapeHtml(section.title)}</h2><div class="timeline-list">${section.items
        .map(
          (item) =>
            `<article class="timeline-item"><div class="timeline-dot"></div><div class="timeline-copy"><span class="timeline-label">${escapeHtml(item.label)}</span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.body)}</p></div></article>`,
        )
        .join('')}</div></section>`
    case 'quote':
      return `<section class="story-section quote"><blockquote>${escapeHtml(section.quote)}</blockquote>${section.caption ? `<p class="quote-caption">${escapeHtml(section.caption)}</p>` : ''}</section>`
    case 'checklist':
      return `<section class="story-section checklist"><div class="section-label">清单 Checklist</div><h2>${escapeHtml(section.title)}</h2><ul class="checklist">${section.items
        .map((item) => `<li>${escapeHtml(item)}</li>`)
        .join('')}</ul></section>`
    case 'stats':
      return `<section class="story-section stats"><div class="section-label">信号 Signals</div><h2>${escapeHtml(section.title)}</h2><div class="stat-grid">${section.items
        .map(
          (item) =>
            `<article class="stat-card"><span>${escapeHtml(item.label)}</span><strong>${escapeHtml(item.value)}</strong>${item.detail ? `<p>${escapeHtml(item.detail)}</p>` : ''}</article>`,
        )
        .join('')}</div></section>`
    case 'closing':
      return `<section class="story-section closing"><div class="section-label">收束 Wrap-up</div><h2>${escapeHtml(section.title)}</h2><div class="prose">${paragraphsToHtml(section.body)}</div>${section.action ? `<div class="closing-action">${escapeHtml(section.action)}</div>` : ''}</section>`
  }
}

function buildExportCss(theme: ThemeId) {
  const tokens = getThemeTokens(theme)

  return `
    :root {
      color-scheme: light;
      --page-background: ${tokens.pageBackground};
      --panel-background: ${tokens.panelBackground};
      --panel-muted: ${tokens.panelMuted};
      --text-primary: ${tokens.textPrimary};
      --text-secondary: ${tokens.textSecondary};
      --accent: ${tokens.accent};
      --accent-soft: ${tokens.accentSoft};
      --border: ${tokens.border};
      --frame: ${tokens.frame};
      --hero-background: ${tokens.heroBackground};
      --story-background: ${tokens.storyBackground};
      --shadow: ${tokens.shadow};
    }
    * {
      box-sizing: border-box;
    }
    body {
      margin: 0;
      min-height: 100vh;
      padding: 24px 16px 48px;
      background: var(--page-background);
      color: var(--text-primary);
      font-family: "Avenir Next", "PingFang SC", "Microsoft YaHei", sans-serif;
    }
    .story-shell {
      max-width: 420px;
      margin: 0 auto;
      background: var(--story-background);
      border: 1px solid var(--border);
      border-radius: 34px;
      overflow: hidden;
      box-shadow: var(--shadow);
    }
    .hero {
      background: var(--hero-background);
      color: white;
      padding: 32px 24px 28px;
      position: relative;
      overflow: hidden;
    }
    .hero::after {
      content: "";
      position: absolute;
      inset: auto -42px -58px auto;
      width: 180px;
      height: 180px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.12);
      filter: blur(8px);
    }
    .kicker {
      display: inline-flex;
      padding: 6px 12px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.14);
      border: 1px solid rgba(255, 255, 255, 0.18);
      font-size: 12px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    h1 {
      margin: 18px 0 12px;
      font-size: 34px;
      line-height: 1.05;
    }
    .subtitle {
      margin: 0;
      font-size: 15px;
      line-height: 1.7;
      color: rgba(255, 255, 255, 0.88);
    }
    .meta-row {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      margin-top: 18px;
    }
    .meta-pill {
      display: inline-flex;
      padding: 8px 12px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.12);
      font-size: 12px;
      color: rgba(255, 255, 255, 0.88);
    }
    main {
      padding: 18px 18px 24px;
      display: grid;
      gap: 16px;
    }
    .story-section {
      padding: 18px;
      border-radius: 24px;
      background: var(--panel-background);
      border: 1px solid var(--border);
      backdrop-filter: blur(12px);
    }
    .section-label {
      display: inline-flex;
      padding: 5px 10px;
      border-radius: 999px;
      background: var(--accent-soft);
      color: var(--accent);
      font-size: 11px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    h2 {
      margin: 14px 0 12px;
      font-size: 21px;
      line-height: 1.2;
    }
    h3 {
      margin: 0 0 8px;
      font-size: 16px;
    }
    p {
      margin: 0;
      color: var(--text-secondary);
      line-height: 1.72;
      font-size: 14px;
    }
    .prose {
      display: grid;
      gap: 12px;
    }
    .card-grid,
    .stat-grid {
      display: grid;
      gap: 12px;
    }
    .story-card,
    .stat-card {
      border-radius: 18px;
      padding: 14px;
      background: var(--panel-muted);
      border: 1px solid var(--border);
    }
    .card-top {
      min-height: 18px;
      margin-bottom: 8px;
    }
    .mini-tag {
      display: inline-flex;
      padding: 4px 8px;
      border-radius: 999px;
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      background: var(--accent-soft);
      color: var(--accent);
    }
    .timeline-list {
      position: relative;
      display: grid;
      gap: 16px;
      margin-top: 6px;
    }
    .timeline-list::before {
      content: "";
      position: absolute;
      top: 6px;
      bottom: 6px;
      left: 8px;
      width: 1px;
      background: var(--border);
    }
    .timeline-item {
      position: relative;
      display: grid;
      grid-template-columns: 18px 1fr;
      gap: 12px;
    }
    .timeline-dot {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      margin-top: 4px;
      background: var(--accent);
      border: 3px solid color-mix(in srgb, var(--accent) 22%, white);
    }
    .timeline-label {
      display: inline-flex;
      margin-bottom: 8px;
      font-size: 11px;
      color: var(--accent);
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }
    blockquote {
      margin: 0;
      font-size: 25px;
      line-height: 1.22;
      letter-spacing: -0.03em;
    }
    .quote {
      background: color-mix(in srgb, var(--accent) 9%, var(--panel-background));
    }
    .quote-caption {
      margin-top: 12px;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--accent);
    }
    .checklist {
      margin: 0;
      padding: 0;
      list-style: none;
      display: grid;
      gap: 12px;
    }
    .checklist li {
      display: grid;
      grid-template-columns: 22px 1fr;
      gap: 12px;
      align-items: start;
      color: var(--text-secondary);
      font-size: 14px;
      line-height: 1.65;
    }
    .checklist li::before {
      content: "✓";
      display: inline-grid;
      place-items: center;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background: var(--accent-soft);
      color: var(--accent);
      font-weight: 700;
    }
    .stat-card span {
      display: block;
      color: var(--text-secondary);
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 8px;
    }
    .stat-card strong {
      display: block;
      font-size: 22px;
      line-height: 1.15;
      margin-bottom: 8px;
    }
    .closing-action {
      margin-top: 16px;
      padding: 13px 14px;
      border-radius: 16px;
      background: var(--accent);
      color: white;
      text-align: center;
      font-weight: 600;
      font-size: 14px;
    }
    .story-shell[data-layout="explain"] .story-section {
      border-radius: 18px;
    }
    .story-shell[data-layout="launch"] .hero {
      padding-top: 40px;
    }
    .story-shell[data-layout="launch"] .story-card,
    .story-shell[data-layout="launch"] .stat-card {
      background: color-mix(in srgb, var(--accent) 10%, var(--panel-muted));
    }
  `
}

export function buildStoryHtml(story: StoryDocument, theme: ThemeId, layout: LayoutId) {
  const body = story.sections.map((section) => renderSectionHtml(section)).join('')
  const audience = story.meta.audience ? `<span class="meta-pill">${escapeHtml(story.meta.audience)}</span>` : ''
  const cta = story.meta.cta ? `<span class="meta-pill">${escapeHtml(story.meta.cta)}</span>` : ''

  return `<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(story.meta.title)}</title>
    <style>${buildExportCss(theme)}</style>
  </head>
  <body>
    <div class="story-shell" data-layout="${layout}">
      <header class="hero">
        <span class="kicker">${escapeHtml(story.meta.kicker)}</span>
        <h1>${escapeHtml(story.meta.title)}</h1>
        <p class="subtitle">${escapeHtml(story.meta.subtitle)}</p>
        <div class="meta-row">
          ${audience}
          ${cta}
        </div>
      </header>
      <main>${body}</main>
    </div>
  </body>
</html>`
}

export function downloadStoryHtml(
  story: StoryDocument,
  theme: ThemeId,
  layout: LayoutId,
  filename?: string,
) {
  const html = buildStoryHtml(story, theme, layout)
  const blob = new Blob([html], { type: 'text/html;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  const safeName =
    filename?.trim().replace(/[^\w-]+/g, '-').toLowerCase() ||
    story.meta.title.replace(/[^\w-]+/g, '-').toLowerCase() ||
    'storydeck-export'

  link.href = url
  link.download = `${safeName}.html`
  document.body.append(link)
  link.click()
  link.remove()
  URL.revokeObjectURL(url)
}
