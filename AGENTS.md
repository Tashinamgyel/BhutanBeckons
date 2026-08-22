# AGENTS.md

Instructions for AI coding agents working in this repository — the **Journeys** website (Bhutan travel agency).

---

## 1. Setup — install these skills first

Run these before starting any work in this repo:

```bash
npx skills add https://github.com/vercel-labs/skills --skill find-skills
npx skills add https://github.com/anthropics/skills --skill frontend-design
npx skills add https://github.com/vercel-labs/agent-skills --skill web-design-guidelines
```

How to use them:
- **find-skills** — run this whenever a task might be better served by a skill you don't already have loaded (a new file format, a framework-specific pattern, a workflow you're unsure about). Check before assuming a skill doesn't exist for the job.
- **frontend-design** — use for any UI/visual work. Where it conflicts with this repo's own design spec (Section 3 below), the repo's spec wins — this project's palette, type, and "no gradients / no glow" rule override generic defaults.
- **web-design-guidelines** — use for accessibility, semantics, performance, and general web best practice. Applies to every page, not just new features.

---

## 2. Required reading before writing code

1. `journeys-brand-and-website-spec.md` — brand philosophy, information architecture, the Journey data model, and the section-by-section UX spec for every page type.
2. `journeys-visual-design-system.md` — color palette, typography, layout rules, and hard design constraints.

Treat both as binding specs, not inspiration. Don't substitute your own defaults for what they define — if something seems missing or unclear, flag it rather than improvising a new direction.

---

## 3. Design discipline (non-negotiable)

- **No gradients. No glow, blur, or neon effects. No decorative box-shadows. No pill-shaped corners.** Flat surfaces only — full list in `journeys-visual-design-system.md`.
- **Kemar Red (`#6E2A2F`) is the only accent color.** Don't introduce new colors without checking them against the existing palette first.
- Typography stays within its three defined roles (Fraunces / Work Sans / IBM Plex Mono) — don't add new typefaces.
- Never use the word **"Package"** in customer-facing copy or UI. Use "Journey" or "Experience."
- Numbered markers (01, 02, 03…) are only for genuine sequences (e.g. itinerary days), not decoration.

---

## 4. Coding practices

- Write clean, readable, well-named code. Prefer clarity over cleverness.
- Keep components small and single-purpose. Extract shared UI (buttons, cards, the route-thread element, section dividers) into reusable components instead of duplicating markup per page.
- Model Journeys as structured content per the data model in the brand spec — never hardcode a Journey's content into a page template. Adding a new Journey should mean adding data, not writing new UI code.
- Use semantic HTML. Every interactive element needs a visible keyboard focus state.
- Match the existing code style, formatting, and file organization already in the repo rather than introducing a new convention mid-project.
- Don't add a new dependency unless it's genuinely needed — check what's already available first.
- Comment only where intent isn't obvious from the code itself; don't narrate every line.
- Write commit messages that explain *why* a change was made, not just what changed.

### 4.1 Performance and responsive layout

- Keep the site fast: prefer server-rendered/static content, ship client-side JavaScript only for genuine interaction, optimize media, and avoid unnecessary dependencies.
- Every page must work cleanly on mobile phones, normal laptop screens, and large desktop monitors.
- Use fluid layouts with deliberate breakpoints, readable line lengths, responsive type and spacing, and appropriately sized media rather than designing for a single viewport.
- Prevent layout shifts and horizontal overflow, and preserve navigation, content hierarchy, and usable touch targets at every supported size.

---

## 5. Before marking work done

- [ ] Code follows the conventions in Section 4
- [ ] UI matches `journeys-visual-design-system.md` — palette, type, and no banned effects
- [ ] Responsive down to mobile
- [ ] Verified on mobile phones, normal laptop screens, and large desktop monitors
- [ ] Performance-conscious: minimal client JavaScript, optimized media, and no avoidable layout shifts
- [ ] Keyboard-navigable, with visible focus states
- [ ] No console errors or warnings
- [ ] New Journeys/content can be added without touching template code

---

## 6. When something is ambiguous

If the brand spec or design system doesn't cover a case, make the smallest reasonable decision consistent with both documents' stated philosophy — quiet, restrained luxury; experience over itinerary; flat, photography-led design — rather than inventing a new direction. Note the decision so it can be reviewed later.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
