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
AI-ready mobile story pages for launches, explainers, and internal storytelling.

StoryDeck turns rough notes, markdown, or structured JSON into polished H5 story pages that are ready to preview on mobile and export as a single HTML file.

Teams often already have the content. What slows them down is layout work, styling, and turning long-form text into something people actually want to read on a phone.

- Works for launch pages, tutorials, campaign stories, and internal communications
- Gives every story a consistent structure instead of relying on one-off AI HTML output
- Exports a standalone file that can be shared, archived, or deployed anywhere

In the first version, the focus is speed: choose a layout, tune a theme, paste your content, and publish a story page in minutes.

The most useful next step is adding reusable section templates so one team can produce a whole series with the same voice.`,
  markdown: `Title: StoryDeck
Subtitle: Turn Markdown, JSON, or rough prompts into polished H5 story pages.
Kicker: Mobile Story Generator
Audience: builders, creators, and internal content teams
CTA: Export standalone HTML

## Why now
Most teams already have the content they need. The bottleneck is transforming that content into a mobile-first page that feels polished, readable, and easy to share.

## What makes it useful
- Structured generation: Start from a repeatable story arc instead of a blank canvas.
- Themeable output: Switch between editorial, corporate, and neon looks without rewriting content.
- Portable delivery: Export a single HTML file for GitHub Pages, demos, and internal sharing.

## Build flow
- Draft | Paste notes, Markdown, or JSON into the editor.
- Shape | Choose the layout, theme, and section rhythm.
- Publish | Export an HTML page and share it anywhere.

## Signals
- Preview speed: Instant updates in a mobile frame.
- Output quality: Designed for storytelling instead of plain document rendering.
- Reuse value: The same engine can support launches, explainers, tutorials, and internal comms.

## Quote
> AI can help write the content. StoryDeck makes the output reusable.

## Launch checklist
- Define the first three public-facing themes.
- Add two story skeletons tuned for launches and explainers.
- Ship a starter demo on GitHub Pages.`,
  json: `{
  "meta": {
    "title": "StoryDeck",
    "subtitle": "A template-driven generator for mobile-first HTML story pages.",
    "kicker": "Structured H5 Builder",
    "audience": "product builders, creators, internal teams",
    "cta": "Download HTML"
  },
  "sections": [
    {
      "type": "intro",
      "title": "Why it matters",
      "body": "Good content is everywhere. Good mobile presentation is not. StoryDeck makes long-form content feel intentional, readable, and ready to share."
    },
    {
      "type": "cards",
      "title": "Core strengths",
      "items": [
        {
          "title": "Repeatable structure",
          "body": "Use story skeletons instead of re-prompting a model for every new page.",
          "tag": "system"
        },
        {
          "title": "Fast customization",
          "body": "Swap themes and layout styles without touching the source content.",
          "tag": "design"
        },
        {
          "title": "Portable output",
          "body": "Export a single HTML file that works across demos, static hosting, and internal delivery.",
          "tag": "delivery"
        }
      ]
    },
    {
      "type": "timeline",
      "title": "MVP roadmap",
      "items": [
        {
          "label": "Phase 1",
          "title": "Input and preview",
          "body": "Support notes, markdown, and JSON with an instant mobile preview."
        },
        {
          "label": "Phase 2",
          "title": "Themes and layouts",
          "body": "Create visual systems that make the same content feel editorial, corporate, or launch-ready."
        },
        {
          "label": "Phase 3",
          "title": "Export and publish",
          "body": "Generate a standalone HTML file that is easy to share or deploy."
        }
      ]
    },
    {
      "type": "quote",
      "quote": "The real value is not generating one nice page. It is building a workflow that can keep producing them.",
      "caption": "Project principle"
    },
    {
      "type": "closing",
      "title": "What comes next",
      "body": "The next iteration can add richer blocks, reusable templates, and shareable theme packs for specific use cases.",
      "action": "Start with one story. Turn it into a repeatable system."
    }
  ]
}`,
}

const FALLBACK_STORY: StoryDocument = {
  meta: {
    title: 'StoryDeck',
    subtitle: 'Turn content into polished mobile story pages.',
    kicker: 'Mobile Story Generator',
    audience: 'builders and content teams',
    cta: 'Export HTML',
  },
  sections: [
    {
      type: 'intro',
      title: 'Start with structure',
      body:
        'Paste rough notes, structured Markdown, or JSON, then shape the result with a layout and theme built for mobile reading.',
    },
    {
      type: 'cards',
      title: 'What the MVP already does',
      items: [
        {
          title: 'Flexible input',
          body: 'Support notes, Markdown, and JSON from the same editor surface.',
          tag: 'input',
        },
        {
          title: 'Theme switching',
          body: 'Change visual direction without rebuilding the content.',
          tag: 'theme',
        },
        {
          title: 'Standalone export',
          body: 'Generate one HTML file that can travel anywhere.',
          tag: 'output',
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
    const message = error instanceof Error ? error.message : 'Unknown parsing error'
    return {
      story: FALLBACK_STORY,
      warnings: [`Using fallback content because parsing failed: ${message}`],
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
      'A mobile-first story page generated from structured Markdown.',
    kicker: readMeta(metaLines, 'kicker') ?? 'Structured Markdown',
    audience: readMeta(metaLines, 'audience') ?? '',
    cta: readMeta(metaLines, 'cta') ?? 'Export HTML',
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
        caption: title.toLowerCase().includes('quote') ? 'Quote block' : title,
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
            label: left || `Step ${itemIndex + 1}`,
            title: middle || left || `Step ${itemIndex + 1}`,
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
            label: label || 'Signal',
            value: value || label || 'Key point',
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
            title: itemTitle || 'Key point',
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
    warnings.push('No section headings found. A simple intro block was generated instead.')
    sections.push({
      type: 'intro',
      title: 'Overview',
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
    warnings.push('The notes field was empty. Example content is being used.')
    return { story: FALLBACK_STORY, warnings }
  }

  const firstParagraphLines = paragraphs[0].split('\n').map((line) => line.trim()).filter(Boolean)
  const explicitTitleLine = firstParagraphLines.find((line) => !line.startsWith('-') && line.length <= 72)
  const title = explicitTitleLine?.replace(/^#\s*/, '') ?? 'Untitled Story'
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
      : 'Start with one clear overview paragraph.'
  const introBody = proseParagraphs[1] ?? proseParagraphs[0] ?? fallbackIntroBody
  const midParagraphs = proseParagraphs.slice(2, 5)
  const closingBody =
    proseParagraphs[proseParagraphs.length - 1] ?? 'Add a closing note to guide the next reader action.'
  const quoteSource = findQuoteCandidate(proseParagraphs) ?? 'Shape one strong idea and let the page carry it.'

  const sections: StorySection[] = [
    {
      type: 'intro',
      title: 'Story overview',
      body: introBody,
    },
  ]

  if (midParagraphs.length > 0) {
    sections.push({
      type: 'cards',
      title: 'Why this story works',
      items: midParagraphs.map((paragraph, index) => ({
        title: sentenceToTitle(paragraph, index),
        body: paragraph,
        tag: index === 0 ? 'focus' : undefined,
      })),
    })
  }

  if (bulletItems.length > 0) {
    sections.push({
      type: bulletItems.every((item) => item.includes(':')) ? 'stats' : 'checklist',
      title: bulletItems.every((item) => item.includes(':')) ? 'Signals' : 'Build checklist',
      items: bulletItems.every((item) => item.includes(':'))
        ? bulletItems.map((item) => {
            const [label, value, detail] = splitItemParts(item)
            return {
              label: label || 'Signal',
              value: value || 'Value',
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
      kicker: 'Prompt / Notes',
      audience: 'teams shipping content quickly',
      cta: 'Export HTML',
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
  return `Story point ${index + 1}`
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
      return `<section class="story-section intro"><div class="section-label">Overview</div><h2>${escapeHtml(section.title)}</h2><div class="prose">${paragraphsToHtml(section.body)}</div></section>`
    case 'cards':
      return `<section class="story-section cards"><div class="section-label">Highlights</div><h2>${escapeHtml(section.title)}</h2><div class="card-grid">${section.items
        .map(
          (item) =>
            `<article class="story-card"><div class="card-top">${item.tag ? `<span class="mini-tag">${escapeHtml(item.tag)}</span>` : ''}</div><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.body)}</p></article>`,
        )
        .join('')}</div></section>`
    case 'timeline':
      return `<section class="story-section timeline"><div class="section-label">Flow</div><h2>${escapeHtml(section.title)}</h2><div class="timeline-list">${section.items
        .map(
          (item) =>
            `<article class="timeline-item"><div class="timeline-dot"></div><div class="timeline-copy"><span class="timeline-label">${escapeHtml(item.label)}</span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.body)}</p></div></article>`,
        )
        .join('')}</div></section>`
    case 'quote':
      return `<section class="story-section quote"><blockquote>${escapeHtml(section.quote)}</blockquote>${section.caption ? `<p class="quote-caption">${escapeHtml(section.caption)}</p>` : ''}</section>`
    case 'checklist':
      return `<section class="story-section checklist"><div class="section-label">Checklist</div><h2>${escapeHtml(section.title)}</h2><ul class="checklist">${section.items
        .map((item) => `<li>${escapeHtml(item)}</li>`)
        .join('')}</ul></section>`
    case 'stats':
      return `<section class="story-section stats"><div class="section-label">Signals</div><h2>${escapeHtml(section.title)}</h2><div class="stat-grid">${section.items
        .map(
          (item) =>
            `<article class="stat-card"><span>${escapeHtml(item.label)}</span><strong>${escapeHtml(item.value)}</strong>${item.detail ? `<p>${escapeHtml(item.detail)}</p>` : ''}</article>`,
        )
        .join('')}</div></section>`
    case 'closing':
      return `<section class="story-section closing"><div class="section-label">Wrap-up</div><h2>${escapeHtml(section.title)}</h2><div class="prose">${paragraphsToHtml(section.body)}</div>${section.action ? `<div class="closing-action">${escapeHtml(section.action)}</div>` : ''}</section>`
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
<html lang="en">
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
