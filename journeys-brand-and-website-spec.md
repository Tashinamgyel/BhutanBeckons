# Journeys — Brand & Website Specification

**Purpose of this document:** This is a build spec for an AI coding/design agent. It defines the brand philosophy, information architecture, content model, and page-level UX rules for a premium Bhutan travel agency website. Follow this as the source of truth for structure and tone. Where visual/creative judgment is needed, default to a premium, editorial, slow-travel aesthetic — think travel magazine, not booking engine.

---

## 1. Brand Philosophy

The agency does not sell tours. It sells **experiences with a story**, delivered through curated **Journeys**.

Core principle: **the experience is the product; the itinerary is simply how it's delivered.**

Practical implications:

- Never use the word **"Package"** anywhere on the customer-facing site. Use **"Journey"** or **"Experience"** instead.
- Internally (database, admin, CMS), the entity can still be called `package` — this is a backend/data-model detail only.
- Every Journey should feel like it belongs to the same branded collection, not like a random poetic name slapped on a generic tour.
- Marketing language sells a feeling and a title first, an itinerary second.
  - Not: "7 Days Bhutan Tour — $X"
  - Instead: **"Whispers of the Kingdom — Seven days inside a world that time forgot."**
- This naming approach also helps B2B: international travel agents can sell "our Whispers of the Kingdom experience" to their clients, rather than "Package BHT-07."

### 1.1 Naming System

Every Journey needs:
- A **evocative name** (2–4 words, Kingdom/heritage-flavored: *Whispers of the Kingdom*, *The Tiger's Path*, *Land of Thunder*, *Between Dzongs & Mountains*, *A Taste of Bhutan*, *The Quiet Kingdom*, *Kingdom for Two*, *Into the Wild Kingdom*).
- A **category tag line**: theme(s) + duration (e.g. `Culture · Heritage · Slow Travel · 7 Days`).
- A **one-line poetic hook** (the "ad" version): e.g. *"Some places are visited. Others are experienced."*

Build a **naming/style guide** (tone, vocabulary, do's and don'ts) so future Journeys stay consistent with this voice. Suggested initial catalogue:

| Journey Name | Theme | Duration |
|---|---|---|
| Whispers of the Kingdom | Culture · Heritage · Slow Travel | 7 Days |
| The Tiger's Path | Trekking · Adventure | 8 Days |
| Land of Thunder | Adventure · Nature | 9 Days |
| Between Dzongs & Mountains | Culture · Heritage | 7 Days |
| A Taste of Bhutan | Food · Culture · Local Life | 6 Days |
| The Quiet Kingdom | Wellness · Nature | 7 Days |
| Kingdom for Two | Romance · Luxury | 7 Days |
| Into the Wild Kingdom | Nature · Wildlife | 10 Days |

---

## 2. Information Architecture

```
HOME
├── DESTINATIONS
├── EXPERIENCES
├── JOURNEYS
│     ├── Whispers of the Kingdom      → /journeys/whispers-of-the-kingdom
│     ├── The Tiger's Path             → /journeys/the-tigers-path
│     ├── Kingdom for Two              → /journeys/kingdom-for-two
│     ├── The Quiet Kingdom            → /journeys/the-quiet-kingdom
│     └── A Taste of Bhutan            → /journeys/a-taste-of-bhutan
├── BHUTAN JOURNAL
├── ABOUT US
├── PARTNER WITH US
└── CONTACT
```

Rules:
- Each Journey gets its **own dedicated URL, SEO metadata, hero imagery, story copy, itinerary, experience highlights, accommodations, gallery, and FAQ/practical info** — not just an expandable card.
- The **Journeys page** (`/journeys`) is the discovery/catalogue view — a grid of Journey cards, each showing: name, theme tags, duration, hero image, one-line hook.

---

## 3. Journey Data Model

Each Journey record should support at least:

```yaml
slug: string                # url path, e.g. whispers-of-the-kingdom
name: string                # display name, e.g. "Whispers of the Kingdom"
tagline: string              # poetic one-liner
themes: [string]              # e.g. ["Culture", "Heritage", "Slow Travel"]
duration_days: number
hero_media: image | video
story: rich_text              # emotional narrative, 1-3 paragraphs
highlights: [                # "Experience highlights" cards
  { title: string, description: string, image: image }
]
itinerary: [
  { day_number, title, location, description, image? }
]
route_map: [string]           # ordered list of locations for the visual map (e.g. Paro → Thimphu → Punakha → Phobjikha → Paro)
included: [string]
not_included: [string]
accommodations: [
  { property_name: string, location: string, description: string, image: image }
]
gallery: [image]
practical_info: {
  best_time_to_travel: string
  difficulty: string
  recommended_for: string
  group_size: string
  starting_point: string
  duration: string
}
customizable: boolean         # true = show "This journey can be customized"
duration_options: [number]?   # optional, phase 2: e.g. [7, 9, 12]
travel_style_options: [string]? # optional, phase 2: e.g. ["Classic", "Luxury", "Adventure"]
```

---

## 4. Dedicated Journey Page — Section-by-Section UX

Build each `/journeys/[slug]` page as a scrollable, magazine-style single page with these sections **in this order**:

### 4.1 Cinematic Hero
- Full-bleed image or video background.
- Journey name in large type (e.g. "WHISPERS OF THE KINGDOM").
- Subtitle: one-line story hook (e.g. "A journey through Bhutan's living heritage.")
- Meta line: `7 Days · Culture · Heritage · Slow Travel`
- Primary CTA button: **"Plan This Journey"**

### 4.2 The Story
- Do **not** open with the itinerary.
- Lead with emotional framing — 1–3 short paragraphs establishing *why* this trip matters, not what happens on which day.
- Example tone: *"Some places are visited. Others are experienced."*

### 4.3 Experience Highlights
- Grid of large visual cards (not a bullet list), 3–5 items.
- Each: short title + 1-sentence description + image.
- Example: "Ancient Kingdoms — Explore Bhutan's historic dzongs and monasteries."

### 4.4 The Journey (Itinerary)
- Present as a visually rich sequence, not a plain accordion.
- Each day: `01 — [Title]`, location pin (📍), short narrative paragraph.
- Include a simple visual route map alongside/beneath the itinerary showing the location sequence (e.g. Paro → Thimphu → Punakha → Phobjikha → Paro).

### 4.5 What's Included / Not Included
- Two-column clean layout.
- Included: checkmarks (✓) — accommodation, private transportation, English-speaking guide, meals per itinerary, experiences/activities, Bhutan travel arrangements, local assistance.
- Not included: (✕) — international flights, travel insurance, personal expenses, etc.

### 4.6 Where You'll Stay
- Showcase actual named properties with imagery, not generic hotel-star ratings.
- Card format: property name, location, short evocative description.

### 4.7 Gallery
- Immersive, full gallery experience — not a 3-photo strip.
- Cover: landscapes, people, architecture, food, activities, accommodations.
- Section heading suggestion: **"The Kingdom Through Your Eyes"**

### 4.8 Good to Know (Practical Info)
- Expandable/collapsible section.
- Fields: best time to travel, difficulty, recommended for, group size, starting point, duration.

### 4.9 Customization Prompt
- Phase 1 (MVP): a simple static line — **"This journey can be customized."**
- Phase 2 (future): interactive controls —
  - Duration stepper (e.g. `− 7 Days +`, selectable from `duration_options`)
  - Travel style selector (e.g. Classic / Luxury / Adventure, from `travel_style_options`)
  - Selecting these can dynamically adjust the displayed itinerary/suggestions.
- Do not build the dynamic version in v1 — just leave the copy and layout ready for it.

### 4.10 Closing CTA
- Section heading: **"Make This Journey Yours"**
- Supporting line: *"No two journeys need to be the same. Tell us what you're looking for and our travel specialists will tailor this experience around you."*
- Primary CTA: **"Plan My Journey"**
- Contact channel icons/links: WhatsApp · WeChat · Email · Call

---

## 5. Journeys Catalogue Page (`/journeys`)

- Page heading: **"Journeys"**
- Subheading: **"Curated experiences across the Kingdom."**
- Grid of Journey cards, each showing: hero image, name, theme tags, duration.
- Clicking a card routes to its dedicated `/journeys/[slug]` page.

---

## 6. Global UX/Content Rules

1. **Never say "Package" or "Tour" in customer-facing copy.** Use "Journey" or "Experience."
2. Every Journey page follows the exact section order in Section 4 — don't reorder or skip sections without reason.
3. Prioritize narrative/emotional copy before logistical/itinerary detail on every page.
4. Photography-led design: hero sections, highlights, and gallery should assume large, high-quality imagery is the primary content, not filler.
5. Keep each Journey's naming, tone, and visual identity consistent with the brand's slow-travel, editorial positioning — avoid generic "tour operator" UI patterns (e.g. dense tables, star ratings, deal badges).
6. SEO: each Journey page needs unique metadata (title, description, OG image) derived from its name/tagline/hero image.

---

## 7. Implementation Notes for the Agent

- Model Journeys as structured content (CMS collection or structured data files) using the schema in Section 3 — do not hardcode Journey content into page templates.
- Build the Journey page as a single reusable template driven by the data model, rendered per-slug.
- Treat "included/not included," "practical info," and "accommodations" as repeatable structured fields so new Journeys can be added without new UI work.
- Leave clear extension points (data fields already included above) for the future interactive customization feature (Section 4.9) — implement the static version now, wire up interactivity later.
- Confirm final IA (Section 2) and page routing before scaffolding, since Journeys, Destinations, and Experiences may share components (e.g. cards, hero blocks).
