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
  { id: 'notes', label: 'Prompt / Notes', note: 'Rough copy, brief, or pasted ideas' },
  { id: 'markdown', label: 'Markdown', note: 'Structured headings and lists' },
  { id: 'json', label: 'JSON', note: 'Precise control over sections and metadata' },
]

const THEMES: Array<{ id: ThemeId; label: string; blurb: string }> = [
  { id: 'editorial', label: 'Editorial', blurb: 'Warm, story-led, magazine energy' },
  { id: 'corporate', label: 'Corporate', blurb: 'Calm, polished, presentation-ready' },
  { id: 'neon', label: 'Neon', blurb: 'High contrast, launch-page drama' },
]

const LAYOUTS: Array<{ id: LayoutId; label: string; blurb: string }> = [
  { id: 'narrative', label: 'Narrative', blurb: 'Chapter-like pacing for story pages' },
  { id: 'explain', label: 'Explain', blurb: 'Tighter rhythm for walkthroughs and guides' },
  { id: 'launch', label: 'Launch', blurb: 'More punch for showcase and campaign pages' },
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
            <h1>Build mobile story pages from content, not canvas work.</h1>
          </div>
          <p>
            Paste notes, Markdown, or JSON. Then shape the output with a layout,
            theme, and standalone HTML export.
          </p>
        </div>

        <section className="control-group">
          <div className="section-heading">
            <span>Starter packs</span>
            <small>
              First-wave demo content designed to feel more public, visual, and shareable on GitHub.
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
            <span>Input mode</span>
            <small>Switch to a blank example set, or keep shaping the selected starter pack.</small>
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
            <span>Visual theme</span>
            <small>Switch the same story between editorial, corporate, and launch-ready looks.</small>
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
            <span>Story skeleton</span>
            <small>Control the rhythm of the page without changing the source content.</small>
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
            <span>Source content</span>
            <small>
              The parser is intentionally lightweight in this MVP. JSON gives full control, while
              notes and Markdown turn rough content into a usable first draft.
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
              Download HTML
            </button>
            <button className="secondary-button" onClick={handleCopyHtml} type="button">
              {copied ? 'Copied HTML' : 'Copy HTML'}
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
              Reset content
            </button>
          </div>
          <div className="footnote-grid">
            <p>
              Strongest public demos right now:
              <strong> Indie Launch, Event Drop, and Case Study.</strong>
            </p>
            <p>
              First extension idea:
              <strong> turn these starter packs into importable template packs with screenshots.</strong>
            </p>
          </div>
        </section>
      </aside>

      <main className="preview-column">
        <div className="preview-header">
          <div>
            <span className="eyebrow">Live preview</span>
            <h2>{story.meta.title}</h2>
          </div>
          <p>{story.meta.subtitle}</p>
        </div>

        <section className="showcase-strip">
          <div className="showcase-heading">
            <span className="eyebrow">Showcase Lineup</span>
            <p>These are the strongest first screenshots for the repo homepage and social previews.</p>
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
              <span>Selected angle</span>
              <strong>{selectedPack?.name ?? 'Custom remix'}</strong>
              <p>{selectedPack?.tagline ?? 'You are now mixing your own content, layout, and theme outside the starter presets.'}</p>
            </div>
            <div className="preview-card">
              <span>Share angle</span>
              <strong>{selectedPack?.screenshotLabel ?? 'Custom output'}</strong>
              <p>{selectedPack?.useCase ?? 'Use this view to capture a custom screenshot or build a one-off export.'}</p>
            </div>
            <div className="preview-card">
              <span>Rendering strategy</span>
              <strong>Template skeleton + content modules + theme tokens</strong>
              <p>
                This keeps the project flexible without falling into fully freeform page building.
              </p>
            </div>
            <div className="preview-card">
              <span>Why it matters</span>
              <strong>AI can draft content. StoryDeck turns it into a reusable system.</strong>
              <p>
                The value is not just one nice page. It is repeatable production with consistent
                structure and export quality.
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
          <span className="section-label">Overview</span>
          <h4>{section.title}</h4>
          <Prose text={section.body} />
        </section>
      )
    case 'cards':
      return (
        <section className="story-section story-section-cards">
          <span className="section-label">Highlights</span>
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
          <span className="section-label">Flow</span>
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
          <span className="section-label">Checklist</span>
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
          <span className="section-label">Signals</span>
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
          <span className="section-label">Wrap-up</span>
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
