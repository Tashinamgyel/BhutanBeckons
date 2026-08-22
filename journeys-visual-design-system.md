# Journeys — Visual Design System

**Purpose of this document:** This is the visual identity spec for the Journeys website, meant to be handed to an AI coding/design agent alongside `journeys-brand-and-website-spec.md`. That document defines structure and content; this one defines how it should look. Follow the palette, type, and layout rules below exactly — do not substitute defaults.

---

## 1. Design Philosophy

The brand is **quiet, restrained luxury** — drawn from Bhutan's own materials and color: dzong whitewash, the maroon-red *kemar* band on temple walls, aged timber, antique gilding, juniper forest. Not a generic "premium travel" template.

**One accent does almost all the work.** The palette stays quiet everywhere except the calls to action and the signature route line, which carry a single deliberate color.

---

## 2. Hard Constraints — No AI Slop

These rules are non-negotiable and apply to every page, section, and component:

- **No gradients.** Ever. All backgrounds, cards, and photo placeholders use a single flat color.
- **No glow, drop shadow, blur, or neon effects** of any kind.
- **No box-shadows** except a functional focus ring on interactive elements (accessibility only).
- **Minimal border-radius.** Corners are sharp or barely rounded (2px) — nothing pill-shaped, nothing that reads as a soft "app" UI.
- **Flat surfaces only.** If a section needs visual richness, that richness comes from photography, typography, or layout — never from decorative CSS effects.

If in doubt, remove the effect rather than keep it.

---

## 3. Color Palette

| Name | Hex | Usage |
|---|---|---|
| **Limewash Stone** | `#E7E4DA` | Primary background — cooler and chalkier than a typical cream |
| **Timber Ink** | `#201C18` | Body text — warm near-black |
| **Kemar Red** | `#6E2A2F` | The one accent — CTAs, links, the signature route line. Nothing else uses this color. |
| **Temple Gilt** | `#A9814A` | Secondary accent, used very sparingly — a single divider, a small detail. Never a large fill. |
| **Juniper Slate** | `#38463C` | Deep accent, reserved for dark sections only (e.g. footer) |
| **Mist Taupe** | `#C3BCA8` | Hairlines, borders, muted/secondary text |

Rules:
- Kemar Red is the *only* accent used for buttons and interactive highlights. Do not introduce other accent colors for variety.
- Gilt and Juniper are texture, not decoration — use them once or twice per page at most, never as a repeating pattern.
- No color outside this table. If a new color is needed for a specific case (e.g. category tagging), propose it against this palette before using it — don't default to a random hue.

### Photography placeholders
Until real photography is in place, use flat, single-tone placeholder blocks (no gradient) in muted colors drawn from the palette family — e.g. `#3A1F21` (oxblood-dark), `#242B23` (juniper-dark), `#332A19` (gilt-dark). Label each placeholder in small caps, e.g. `[ full-bleed photography ]`, so it reads clearly as a placeholder and not a final design choice.

---

## 4. Typography

Three roles, each with a specific job. Do not use a role outside its intended purpose.

| Role | Typeface | Usage |
|---|---|---|
| **Display** | Fraunces | Journey names, hero titles, section headings. Large sizes only — never body copy. |
| **Body** | Work Sans | All reading text — story copy, descriptions, paragraphs. |
| **Utility** | IBM Plex Mono | Labels, tags, day numbers, practical info (e.g. `PARO · 7 DAYS · CULTURE`). Always uppercase, wide letter-spacing (~0.1–0.14em). |

Notes:
- Fraunces should be used with restraint — it's the "voice" of the brand, not a workhorse font. Reserve it for moments that matter (a Journey name, a hero line), not UI chrome.
- Work Sans carries the actual reading experience — prioritize legibility and comfortable line-height (~1.6–1.7) over style.
- IBM Plex Mono gives the site its one small textural, "stamped ticket" moment. Keep it small (11–13px) and never use it for anything the visitor needs to read at length.

---

## 5. Layout Principles

- **Photography-led.** Sections should assume large, high-quality imagery is the primary content, not filler around text.
- **Generous negative space.** Don't crowd sections; let content breathe.
- **Asymmetric over symmetric.** Avoid uniform 3-up card grids as a default — vary card sizes so one item leads and others follow (see Journeys catalogue grid). This avoids the generic "equal cards in a row" catalogue look.
- **Hero text sits off-center**, typically bottom-left, quiet against the photograph rather than fighting for attention with a large centered headline treatment.
- **Numbered sequence markers (01, 02, 03...)** are only used where content is a genuine sequence — e.g. itinerary days. Don't add numbering as generic decoration elsewhere.

---

## 6. Signature Element — The Route Thread

A single hand-drawn ink line connecting a Journey's locations in order — closer to ink on a scroll painting than an airline flight-path (no dashed lines, no airplane-style waypoint icons).

- Rendered in **Kemar Red**, thin stroke (~1.5–2px).
- Appears small in the hero/overview, and fuller in the itinerary section of each Journey page.
- Location labels use the utility typeface (IBM Plex Mono, uppercase, small).
- This is the one recurring visual motif that should feel unique to the brand — don't dilute it by reusing the same treatment for unrelated decorative lines.
- A subtle "draw-on" animation (the line drawing itself in on load/scroll) is acceptable as the site's one deliberate motion moment — but must respect `prefers-reduced-motion` (render fully drawn, no animation, for users who request reduced motion).

---

## 7. Component Notes

- **Buttons:** text-only or outline style, uppercase utility typeface, no fill, no rounded pill shape. Example: `Plan this journey →`
- **Cards (Journeys catalogue):** flat photo block + Display typeface name + utility typeface tag line. No shadow, no border-radius beyond 2px.
- **Dividers:** thin 1px hairlines in Mist Taupe. Not thick, not colored, not decorative.
- **Swatches/data blocks (if shown in an internal style guide page):** flat color fill + name + hex in utility typeface underneath.

---

## 8. Implementation Notes for the Agent

- Treat Sections 3–6 as literal constraints, not inspiration — implement the exact hex values, font roles, and the "no gradients/no glow" rule as written.
- Build shared components (buttons, cards, dividers, the route-thread SVG) once and reuse them across all Journey pages rather than re-styling per page.
- Any new UI pattern not covered here (e.g. a form, a modal, pagination) should derive its look from Section 2 (hard constraints) and Section 3 (palette) before improvising new colors or effects.
- Cross-reference `journeys-brand-and-website-spec.md` for where each styled component is used (hero, itinerary, accommodations, etc.).
