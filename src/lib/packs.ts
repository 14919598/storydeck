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
    name: 'Indie Launch',
    category: 'Launch',
    tagline: 'A punchy product debut page for makers shipping in public.',
    useCase: 'Best for README hero screenshots and social clips.',
    screenshotLabel: 'Hero launch page',
    featured: true,
    inputMode: 'markdown',
    theme: 'neon',
    layout: 'launch',
    content: `Title: Orbit Notes
Subtitle: Turn scattered tabs into one calm workspace for thinking and shipping.
Kicker: Launch Drop
Audience: indie makers, early adopters, and creative operators
CTA: Join the beta waitlist

## The problem
Every idea starts in a different place. Notes are in one app, screenshots are in another, and the next action disappears somewhere in between.

## Why Orbit Notes feels different
- One stream: Capture notes, screenshots, voice snippets, and links in a single timeline.
- Instant focus: Collapse clutter into clean cards that are easy to scan on mobile.
- Built for momentum: Every note can become a task, a post, or a shareable update.

## Launch moment
- Today | Public waitlist opens with a fast mobile-first onboarding flow.
- This week | Early users unlock collaborative spaces and shared boards.
- Next drop | AI summaries and one-tap publish pages join the workspace.

## Social proof
- 3-minute setup: From first capture to first organized board.
- 87% clarity gain: Beta users say their next action feels obvious faster.
- 1 link to share: Every workspace can become a polished story page.

## Quote
> We did not need another notes app. We needed a calmer launchpad for unfinished ideas.

## Call to action
- Join the first 500 beta users.
- Share your workflow before and after Orbit Notes.
- Turn your launch notes into a story people actually finish reading.`,
  },
  {
    id: 'creator-portfolio',
    name: 'Creator Portfolio',
    category: 'Profile',
    tagline: 'A story-led one-page intro for creators, consultants, and studios.',
    useCase: 'Good for showing softer editorial layouts and personal branding.',
    screenshotLabel: 'Editorial portfolio',
    inputMode: 'notes',
    theme: 'editorial',
    layout: 'narrative',
    content: `Mira Studio
Designing launch stories, interfaces, and creative systems for products that want to feel memorable.

I help early-stage teams move from rough positioning to pages, visuals, and product narratives that feel alive. The best work usually sits between brand, interface, and storytelling instead of fitting into a single label.

Recent work spans launch pages, creator toolkits, editorial microsites, and interface systems for products that need a stronger point of view.

- Build launch pages that feel less like documentation and more like scenes
- Translate product strategy into visual language and story rhythm
- Turn scattered notes into assets a team can actually publish

Clients usually come in with too much material and not enough structure. My role is to find the central thread, shape the page flow, and make the message feel obvious without becoming generic.

The next chapter is packaging this approach into reusable templates so more teams can move faster without losing voice.`,
  },
  {
    id: 'feature-brief',
    name: 'Feature Brief',
    category: 'Explain',
    tagline: 'A clean product explainer for updates, walkthroughs, and docs-lite pages.',
    useCase: 'Best for product docs, changelog stories, and feature intros.',
    screenshotLabel: 'Product explainer',
    featured: true,
    inputMode: 'json',
    theme: 'corporate',
    layout: 'explain',
    content: `{
  "meta": {
    "title": "Focus Mode 2.0",
    "subtitle": "A faster way to guide people from long input to a finished page.",
    "kicker": "Feature Brief",
    "audience": "product teams and early users",
    "cta": "See the full walkthrough"
  },
  "sections": [
    {
      "type": "intro",
      "title": "What changed",
      "body": "Focus Mode 2.0 removes the friction between drafting content and shaping it into a mobile-ready page. The new flow is clearer, faster, and more forgiving for first-time users."
    },
    {
      "type": "cards",
      "title": "Three practical upgrades",
      "items": [
        {
          "title": "Smarter defaults",
          "body": "Starter presets now match the most common storytelling formats right away.",
          "tag": "ux"
        },
        {
          "title": "Cleaner export",
          "body": "Standalone HTML output is easier to share, archive, and drop into static hosting.",
          "tag": "delivery"
        },
        {
          "title": "Stronger page rhythm",
          "body": "Sections now land with clearer contrast between context, proof, and action.",
          "tag": "story"
        }
      ]
    },
    {
      "type": "timeline",
      "title": "How to use it",
      "items": [
        {
          "label": "Step 1",
          "title": "Paste the source",
          "body": "Start from notes, markdown, or a structured JSON document."
        },
        {
          "label": "Step 2",
          "title": "Shape the output",
          "body": "Choose a story skeleton and visual theme that fit the message."
        },
        {
          "label": "Step 3",
          "title": "Export and ship",
          "body": "Download one HTML file and publish it anywhere."
        }
      ]
    },
    {
      "type": "closing",
      "title": "Why it matters",
      "body": "Feature updates should not disappear inside changelogs. A lightweight story page makes the value visible in minutes.",
      "action": "Open the walkthrough and test the new flow."
    }
  ]
}`,
  },
  {
    id: 'event-drop',
    name: 'Event Drop',
    category: 'Campaign',
    tagline: 'An event announcement page with urgency, mood, and a strong CTA.',
    useCase: 'Best for loud visual demos, social teasers, and campaign examples.',
    screenshotLabel: 'Event campaign',
    featured: true,
    inputMode: 'markdown',
    theme: 'neon',
    layout: 'launch',
    content: `Title: Midnight Build Jam
Subtitle: A 48-hour online sprint for designers, builders, and storytellers shipping experimental web projects.
Kicker: Event Drop
Audience: indie hackers, creative coders, and design technologists
CTA: Apply for the jam

## What it is
Midnight Build Jam is a short, intense online event for people who want to make weird, beautiful, and unexpectedly useful things on the web.

## What makes it different
- No generic pitch decks: Ship a live page, prototype, or interactive story instead.
- Small teams, fast decisions: Build with 1 to 3 people and keep the momentum high.
- Live visibility: Final projects go into a public gallery instead of disappearing into a folder.

## The rhythm
- Friday night | Kickoff, prompt reveal, and pairing lounge.
- Saturday | Build windows, design critiques, and open office hours.
- Sunday | Demo festival, public voting, and showcase stream.

## What people get
- A finished project with a real audience
- Feedback from product, design, and engineering mentors
- A gallery-ready page that is easy to share after the event

## Quote
> The most exciting projects usually happen when the timeline is short enough to stop overthinking.

## Launch checklist
- Finalize the prompt shortlist
- Open the application page
- Publish teaser clips and the gallery theme`,
  },
  {
    id: 'case-study',
    name: 'Case Study',
    category: 'Story',
    tagline: 'A before-and-after transformation story for products or agencies.',
    useCase: 'Best for proving the tool is not only for launch pages.',
    screenshotLabel: 'Narrative case study',
    featured: true,
    inputMode: 'markdown',
    theme: 'editorial',
    layout: 'narrative',
    content: `Title: How Northstar cut launch chaos in two weeks
Subtitle: A case study in turning scattered internal updates into one mobile-ready narrative.
Kicker: Case Study
Audience: founders, marketing teams, and operators
CTA: Read the teardown

## Starting point
Northstar had a strong product and a fast-moving team, but every launch update lived in a different place. Internal docs, demo threads, campaign copy, and screenshots all told slightly different versions of the same story.

## What changed
- One source story: The team agreed on a single narrative spine for the launch.
- Modular sections: Proof, screenshots, updates, and CTAs were packaged into reusable blocks.
- Faster sharing: Instead of reformatting for every channel, the team shipped one mobile-first page and shared it everywhere.

## The result
- Time to publish dropped from days to hours.
- Review cycles got shorter because the structure was already familiar.
- The launch page became an internal alignment tool, not just a marketing asset.

## Quote
> A good story page reduced not only design work, but also the amount of explanation the team had to repeat.

## Next steps
- Add product images and short video loops
- Turn the case study format into a reusable internal template
- Publish the full framework behind the page`,
  },
  {
    id: 'internal-comms',
    name: 'Internal Comms',
    category: 'Internal',
    tagline: 'A polished internal update template that still feels fresh and readable.',
    useCase: 'Best for showing serious internal communication use cases.',
    screenshotLabel: 'Internal update',
    inputMode: 'json',
    theme: 'corporate',
    layout: 'explain',
    content: `{
  "meta": {
    "title": "Q2 Operating Update",
    "subtitle": "The highlights, decisions, and next actions every team should see in one mobile-ready page.",
    "kicker": "Internal Comms",
    "audience": "all teams",
    "cta": "Review the action list"
  },
  "sections": [
    {
      "type": "stats",
      "title": "What changed this quarter",
      "items": [
        {
          "label": "Projects shipped",
          "value": "12",
          "detail": "From product launches to workflow improvements."
        },
        {
          "label": "Cycle time",
          "value": "-18%",
          "detail": "Faster movement from draft to release."
        },
        {
          "label": "Team ritual",
          "value": "1 shared review",
          "detail": "A single weekly review replaced scattered update threads."
        }
      ]
    },
    {
      "type": "cards",
      "title": "Three decisions that matter",
      "items": [
        {
          "title": "One page per launch",
          "body": "Major product updates now get a single shareable page instead of fragmented announcements.",
          "tag": "alignment"
        },
        {
          "title": "Shorter approval loops",
          "body": "Each team now reviews the same mobile-ready draft instead of parallel documents.",
          "tag": "speed"
        },
        {
          "title": "Reusable playbooks",
          "body": "The strongest launch and update formats are being turned into internal starter packs.",
          "tag": "system"
        }
      ]
    },
    {
      "type": "checklist",
      "title": "What teams should do next",
      "items": [
        "Review the new operating page format before the next launch.",
        "Nominate one repeatable update format from your team.",
        "Bring one example of content that could become a reusable story page."
      ]
    },
    {
      "type": "closing",
      "title": "Bottom line",
      "body": "The aim is not to create more internal content. It is to make the most important content easier to understand, faster to publish, and easier to reuse.",
      "action": "Bring your next update into the shared page workflow."
    }
  ]
}`,
  },
]

export const DEFAULT_STARTER_PACK_ID = STARTER_PACKS[0]?.id ?? 'indie-launch'
export const FEATURED_PACKS = STARTER_PACKS.filter((pack) => pack.featured)
