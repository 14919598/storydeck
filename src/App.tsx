import type { CSSProperties } from 'react'
import { useState } from 'react'
import './App.css'
import { DEFAULT_STARTER_PACK_ID, FEATURED_PACKS, STARTER_PACKS } from './lib/packs'
import {
  EXAMPLE_INPUTS,
  buildStoryHtml,
  downloadStoryHtml,
  getThemeTokens,
  parseStoryInput,
  type InputMode,
  type LayoutId,
  type StorySection,
  type ThemeId,
} from './lib/story'

const INPUT_MODES: Array<{ id: InputMode; label: string; note: string }> = [
  { id: 'notes', label: '灵感草稿 / Prompt', note: '适合想法、brief、零散文案快速起稿' },
  { id: 'markdown', label: '结构文稿 / Markdown', note: '适合带标题、列表和章节的内容' },
  { id: 'json', label: '精确配置 / JSON', note: '适合需要精细控制区块结构的场景' },
]

const THEMES: Array<{ id: ThemeId; label: string; blurb: string }> = [
  { id: 'editorial', label: '叙事杂志 / Editorial', blurb: '更温暖、更像专题故事页' },
  { id: 'corporate', label: '专业简报 / Corporate', blurb: '更克制、更像正式展示材料' },
  { id: 'neon', label: '高能发布 / Neon', blurb: '对比更强，适合活动和产品发布' },
]

const LAYOUTS: Array<{ id: LayoutId; label: string; blurb: string }> = [
  { id: 'narrative', label: '故事推进 / Narrative', blurb: '更像分章节讲故事，适合案例和品牌页' },
  { id: 'explain', label: '讲解说明 / Explain', blurb: '节奏更紧凑，适合教程和功能介绍' },
  { id: 'launch', label: '发布展示 / Launch', blurb: '冲击力更强，适合活动页和发布页' },
]

function App() {
  const initialPack = STARTER_PACKS.find((pack) => pack.id === DEFAULT_STARTER_PACK_ID) ?? STARTER_PACKS[0]
  const [selectedPackId, setSelectedPackId] = useState<string | null>(initialPack?.id ?? null)
  const [inputMode, setInputMode] = useState<InputMode>(initialPack?.inputMode ?? 'notes')
  const [theme, setTheme] = useState<ThemeId>(initialPack?.theme ?? 'editorial')
  const [layout, setLayout] = useState<LayoutId>(initialPack?.layout ?? 'narrative')
  const [inputValue, setInputValue] = useState(initialPack?.content ?? EXAMPLE_INPUTS.notes)
  const [copied, setCopied] = useState(false)

  const parseResult = parseStoryInput(inputMode, inputValue)
  const story = parseResult.story
  const themeTokens = getThemeTokens(theme)
  const selectedPack = STARTER_PACKS.find((pack) => pack.id === selectedPackId) ?? null

  const storyStyle = {
    '--page-background': themeTokens.pageBackground,
    '--panel-background': themeTokens.panelBackground,
    '--panel-muted': themeTokens.panelMuted,
    '--text-primary': themeTokens.textPrimary,
    '--text-secondary': themeTokens.textSecondary,
    '--accent': themeTokens.accent,
    '--accent-soft': themeTokens.accentSoft,
    '--border': themeTokens.border,
    '--frame': themeTokens.frame,
    '--hero-background': themeTokens.heroBackground,
    '--story-background': themeTokens.storyBackground,
    '--shadow': themeTokens.shadow,
  } as CSSProperties

  const handleModeChange = (mode: InputMode) => {
    setSelectedPackId(null)
    setInputMode(mode)
    setInputValue(EXAMPLE_INPUTS[mode])
    setCopied(false)
  }

  const applyStarterPack = (packId: string) => {
    const pack = STARTER_PACKS.find((item) => item.id === packId)
    if (!pack) {
      return
    }

    setSelectedPackId(pack.id)
    setInputMode(pack.inputMode)
    setTheme(pack.theme)
    setLayout(pack.layout)
    setInputValue(pack.content)
    setCopied(false)
  }

  const handleDownload = () => {
    downloadStoryHtml(story, theme, layout)
  }

  const handleCopyHtml = async () => {
    const html = buildStoryHtml(story, theme, layout)
    await navigator.clipboard.writeText(html)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <div className="app-shell">
      <aside className="control-panel">
        <div className="panel-header">
          <div>
            <span className="eyebrow">StoryDeck</span>
            <h1>让内容直接长成 H5 展示页，而不是从画布重新开始。</h1>
          </div>
          <p>
            用中文内容也能直接做演示。粘贴草稿、Markdown 或 JSON，再配合结构、主题和独立
            HTML 导出，把内容更快变成适合手机查看的页面。
          </p>
        </div>

        <section className="control-group">
          <div className="section-heading">
            <span>模板库 Starter Packs</span>
            <small>
              这批首发模板更偏“能传播、能截图、能拿去发小红书或 GitHub”的公开展示场景。
            </small>
          </div>
          <div className="pack-grid">
            {STARTER_PACKS.map((pack) => (
              <button
                key={pack.id}
                className={pack.id === selectedPackId ? 'pack-card is-active' : 'pack-card'}
                onClick={() => applyStarterPack(pack.id)}
                type="button"
              >
                <div className="pack-meta">
                  <span>{pack.category}</span>
                  <span>{pack.inputMode}</span>
                </div>
                <strong>{pack.name}</strong>
                <p>{pack.tagline}</p>
                <small className="pack-usecase">{pack.useCase}</small>
                <div className="pack-footer">
                  <small>{pack.layout}</small>
                  <small>{pack.theme}</small>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="control-group">
          <div className="section-heading">
            <span>输入方式 Input Mode</span>
            <small>你可以切回默认示例，也可以继续在已选模板的基础上微调内容。</small>
          </div>
          <div className="chip-grid">
            {INPUT_MODES.map((mode) => (
              <button
                key={mode.id}
                className={mode.id === inputMode ? 'chip is-active' : 'chip'}
                onClick={() => handleModeChange(mode.id)}
                type="button"
              >
                <strong>{mode.label}</strong>
                <span>{mode.note}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="control-group">
          <div className="section-heading">
            <span>视觉主题 Visual Theme</span>
            <small>同一份内容可以切换不同气质，适配正式汇报、品牌故事或活动宣传。</small>
          </div>
          <div className="chip-grid">
            {THEMES.map((item) => (
              <button
                key={item.id}
                className={item.id === theme ? 'chip is-active' : 'chip'}
                onClick={() => {
                  setTheme(item.id)
                  setSelectedPackId(null)
                }}
                type="button"
              >
                <strong>{item.label}</strong>
                <span>{item.blurb}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="control-group">
          <div className="section-heading">
            <span>页面骨架 Story Skeleton</span>
            <small>不改原始内容，也能切换讲述节奏，让同一份文案更像案例页、讲解页或发布页。</small>
          </div>
          <div className="chip-grid">
            {LAYOUTS.map((item) => (
              <button
                key={item.id}
                className={item.id === layout ? 'chip is-active' : 'chip'}
                onClick={() => {
                  setLayout(item.id)
                  setSelectedPackId(null)
                }}
                type="button"
              >
                <strong>{item.label}</strong>
                <span>{item.blurb}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="control-group">
          <div className="section-heading">
            <span>原始内容 Source Content</span>
            <small>
              这个 MVP 故意保持轻量。JSON 适合精细控制，草稿和 Markdown 更适合快速生成第一版。
            </small>
          </div>
          <label className="input-shell" htmlFor="story-input">
            <textarea
              id="story-input"
              value={inputValue}
              onChange={(event) => {
                setSelectedPackId(null)
                setInputValue(event.target.value)
                setCopied(false)
              }}
              spellCheck={false}
            />
          </label>
          {parseResult.warnings.length > 0 ? (
            <div className="notice">
              {parseResult.warnings.map((warning) => (
                <p key={warning}>{warning}</p>
              ))}
            </div>
          ) : null}
        </section>

        <section className="control-group">
          <div className="action-row">
            <button className="primary-button" onClick={handleDownload} type="button">
              下载 HTML
            </button>
            <button className="secondary-button" onClick={handleCopyHtml} type="button">
              {copied ? '已复制 HTML' : '复制 HTML'}
            </button>
            <button
              className="secondary-button"
              onClick={() => {
                const selectedPack = STARTER_PACKS.find((pack) => pack.id === selectedPackId)
                setInputValue(selectedPack?.content ?? EXAMPLE_INPUTS[inputMode])
                setCopied(false)
              }}
              type="button"
            >
              重置内容
            </button>
          </div>
          <div className="footnote-grid">
            <p>
              当前最适合公开传播的展示页：
              <strong> 产品发布、活动海报、案例拆解。</strong>
            </p>
            <p>
              下一步最值得做的增强：
              <strong> 把这些模板做成可导入的素材包，并补上截图与封面图。</strong>
            </p>
          </div>
        </section>
      </aside>

      <main className="preview-column">
        <div className="preview-header">
          <div>
            <span className="eyebrow">实时预览 Live Preview</span>
            <h2>{story.meta.title}</h2>
          </div>
          <p>{story.meta.subtitle}</p>
        </div>

        <section className="showcase-strip">
          <div className="showcase-heading">
            <span className="eyebrow">展示推荐 Showcase</span>
            <p>这几组是目前最适合放在仓库首页、社交封面和小红书首图里的版本。</p>
          </div>
          <div className="showcase-grid">
            {FEATURED_PACKS.map((pack) => (
              <button
                key={pack.id}
                className={pack.id === selectedPackId ? 'showcase-card is-active' : 'showcase-card'}
                onClick={() => applyStarterPack(pack.id)}
                type="button"
              >
                <span>{pack.screenshotLabel}</span>
                <strong>{pack.name}</strong>
                <p>{pack.useCase}</p>
              </button>
            ))}
          </div>
        </section>

        <div className="preview-canvas" style={storyStyle}>
          <div className="preview-surface">
            <div className="phone-frame">
              <div className="phone-notch" />
              <article className={`story-page layout-${layout}`}>
                <header className="hero-panel">
                  <span className="kicker">{story.meta.kicker}</span>
                  <h3>{story.meta.title}</h3>
                  <p>{story.meta.subtitle}</p>
                  <div className="meta-row">
                    {story.meta.audience ? <span className="meta-pill">{story.meta.audience}</span> : null}
                    {story.meta.cta ? <span className="meta-pill">{story.meta.cta}</span> : null}
                  </div>
                </header>
                <div className="story-body">
                  {story.sections.map((section, index) => (
                    <StorySectionView key={`${section.type}-${index}`} section={section} />
                  ))}
                </div>
              </article>
            </div>
          </div>

          <div className="preview-notes">
            <div className="preview-card">
              <span>当前方向 Selected Angle</span>
              <strong>{selectedPack?.name ?? '自定义版本 / Custom Remix'}</strong>
              <p>{selectedPack?.tagline ?? '你现在正在模板库之外，自由组合自己的内容、结构和主题。'}</p>
            </div>
            <div className="preview-card">
              <span>传播角度 Share Angle</span>
              <strong>{selectedPack?.screenshotLabel ?? '自定义输出 / Custom Output'}</strong>
              <p>{selectedPack?.useCase ?? '这个视图适合截成封面图，或者直接导出成一次性的独立展示页。'}</p>
            </div>
            <div className="preview-card">
              <span>生成策略 Rendering Strategy</span>
              <strong>模板骨架 + 内容模块 + 主题 Token</strong>
              <p>
                这样既能保证变化，又不会掉进完全自由排版导致的混乱和低复用。
              </p>
            </div>
            <div className="preview-card">
              <span>为什么值得做 Why It Matters</span>
              <strong>AI 可以帮你起稿，StoryDeck 更像把它变成可持续复用的展示系统。</strong>
              <p>
                价值不只是“临时生成一页”，而是让团队长期产出时也能保持结构稳定、风格统一和导出质量。
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function StorySectionView({ section }: { section: StorySection }) {
  switch (section.type) {
    case 'intro':
      return (
        <section className="story-section story-section-intro">
          <span className="section-label">导览 Overview</span>
          <h4>{section.title}</h4>
          <Prose text={section.body} />
        </section>
      )
    case 'cards':
      return (
        <section className="story-section story-section-cards">
          <span className="section-label">亮点 Highlights</span>
          <h4>{section.title}</h4>
          <div className="card-grid">
            {section.items.map((item) => (
              <article className="story-card" key={`${item.title}-${item.body}`}>
                {item.tag ? <span className="mini-tag">{item.tag}</span> : <span className="mini-tag is-hidden">.</span>}
                <h5>{item.title}</h5>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>
      )
    case 'timeline':
      return (
        <section className="story-section story-section-timeline">
          <span className="section-label">流程 Flow</span>
          <h4>{section.title}</h4>
          <div className="timeline-list">
            {section.items.map((item) => (
              <article className="timeline-item" key={`${item.label}-${item.title}`}>
                <div className="timeline-dot" />
                <div className="timeline-copy">
                  <span className="timeline-label">{item.label}</span>
                  <h5>{item.title}</h5>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      )
    case 'quote':
      return (
        <section className="story-section story-section-quote">
          <blockquote>{section.quote}</blockquote>
          {section.caption ? <p className="quote-caption">{section.caption}</p> : null}
        </section>
      )
    case 'checklist':
      return (
        <section className="story-section story-section-checklist">
          <span className="section-label">清单 Checklist</span>
          <h4>{section.title}</h4>
          <ul className="checklist">
            {section.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      )
    case 'stats':
      return (
        <section className="story-section story-section-stats">
          <span className="section-label">信号 Signals</span>
          <h4>{section.title}</h4>
          <div className="stat-grid">
            {section.items.map((item) => (
              <article className="stat-card" key={`${item.label}-${item.value}`}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
                {item.detail ? <p>{item.detail}</p> : null}
              </article>
            ))}
          </div>
        </section>
      )
    case 'closing':
      return (
        <section className="story-section story-section-closing">
          <span className="section-label">收束 Wrap-up</span>
          <h4>{section.title}</h4>
          <Prose text={section.body} />
          {section.action ? <div className="closing-action">{section.action}</div> : null}
        </section>
      )
  }
}

function Prose({ text }: { text: string }) {
  return (
    <div className="prose-block">
      {text
        .split(/\n\s*\n/)
        .map((paragraph) => paragraph.trim())
        .filter(Boolean)
        .map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
    </div>
  )
}

export default App
