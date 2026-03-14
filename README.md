# StoryDeck

Template-driven H5 story pages from Markdown, JSON, or rough prompts.

StoryDeck is a mobile-first story page generator for turning content into polished HTML experiences without hand-building layouts every time. It is designed for launches, explainers, tutorials, campaign pages, internal communications, and any other format where a long document needs to become a readable mobile page.

The first version is intentionally focused:

- Paste `Prompt / Notes`, `Markdown`, or `JSON`
- Start from curated starter packs for launches, explainers, profiles, campaigns, and internal updates
- Switch between `Narrative`, `Explain`, and `Launch` story skeletons
- Swap visual direction with `Editorial`, `Corporate`, and `Neon` themes
- Preview the result in a mobile frame
- Export a standalone `.html` file

## Why this project exists

General AI tools can already generate HTML. The problem is that one-off output is rarely stable, reusable, or consistent across a series.

StoryDeck is built around a different promise:

- Keep the story structure repeatable
- Keep the styling coherent
- Keep the export portable
- Keep the workflow simple enough for non-front-end users

In short, AI can help draft the content. StoryDeck helps turn that content into a repeatable publishing system.

## Screens in the MVP

- Starter pack gallery with theme and layout presets
- Left panel: source input, layout selection, theme switching
- Right panel: live mobile preview and design rationale
- Export actions: download HTML or copy generated HTML

## Starter packs

The first batch of demo content is intentionally more public-facing and shareable than the internal examples:

- `Indie Launch`
- `Creator Portfolio`
- `Feature Brief`
- `Event Drop`
- `Case Study`
- `Internal Comms`

These are meant to answer the first GitHub visitor question quickly: "What could I build with this right now?"

The recommended first screenshot lineup and repo launch copy are in [docs/github-launch-kit.md](/Users/lijun/Desktop/kimicode/docs/github-launch-kit.md).

## Getting started

```bash
npm install
npm run dev
```

Build the production version:

```bash
npm run build
```

Preview the build locally:

```bash
npm run preview
```

## Input formats

### Prompt / Notes

Best when you have rough copy, pasted ideas, or an outline. The parser turns paragraphs and bullets into a first-draft story page.

### Markdown

Best when you want a readable source format with some structure. The current MVP supports:

- Top metadata lines such as `Title:`, `Subtitle:`, `Kicker:`, `Audience:`, `CTA:`
- Section headings using `##`
- Lists for cards, checklists, timelines, and stats
- Quote blocks using `>`

### JSON

Best when you want full control. JSON maps directly to the underlying story schema and is the most reliable way to define exact sections.

## Story model

The first version uses three layers:

- `story skeleton`
  Narrative, Explain, Launch
- `content modules`
  Intro, Cards, Timeline, Quote, Checklist, Stats, Closing
- `theme tokens`
  Editorial, Corporate, Neon

This keeps the project flexible without turning it into an unbounded page builder.

## Project structure

```text
src/
  App.tsx           App shell, controls, preview
  App.css           Product UI and preview styling
  lib/packs.ts      Curated starter packs and presets
  lib/story.ts      Story schema, parsers, theme tokens, HTML export
docs/
  github-launch-kit.md  Repo pitch, screenshot order, social copy
examples/
  launch.md         Markdown sample
  notes.txt         Prompt / notes sample
  roadmap.json      JSON sample
```

## Deployment notes

`vite.config.ts` uses `base: './'`, so the built output is portable and works well for local file previews and simple static hosting. For GitHub Pages, you can deploy the `dist/` folder with a standard static-site workflow.

GitHub Pages automation is already prepared in [.github/workflows/deploy-pages.yml](/Users/lijun/Desktop/kimicode/.github/workflows/deploy-pages.yml). The repo setup steps are in [docs/github-pages.md](/Users/lijun/Desktop/kimicode/docs/github-pages.md).

## Roadmap

- Publish screenshots and deep links for each starter pack
- Add reusable content packs for launches, explainers, and internal comms
- Improve Markdown parsing and schema validation
- Add theme packaging so new visual systems can be dropped in cleanly
- Add image blocks, CTA blocks, and richer page transitions
- Publish a GitHub Pages demo

## Positioning

StoryDeck is not meant to be a general website builder.

It is a focused content-to-H5 generator for people who already have the words and need a fast way to turn them into something clear, visual, and mobile-friendly.
