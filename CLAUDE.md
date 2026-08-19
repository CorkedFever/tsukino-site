# Tsukino Software Solutions — Company Website

## Overview

Marketing/company website for Tsukino Software Solutions, LLC, a single-founder Ohio LLC (founded 2026) run by Jasmine. The site advertises two things: custom .NET/Azure development services, and an independent product (a job search management app, currently in development under a separate project).

This is a standalone marketing site, not the job search app itself.

## Current state

Restructured 2026-08-19 (Jasmine's call): CSS and JS live in their own
folders, not inline.

```
index.html        — markup only
css/styles.css    — all styles
js/main.js        — hero canvas (starfield + moon) and interactions
```

## Tech / stack

- Plain HTML + CSS + vanilla JS, no framework, no build step, no dependencies except Google Fonts (loaded via `<link>`, not self-hosted).
- No backend, no forms wired to anything real yet (contact is a `mailto:` link).
- No CMS, no database. Content is hardcoded in the HTML.

## Design system

**Concept:** "Tsukino" means "of the moon" in Japanese. The whole visual identity is built around that: a night-sky/moon motif used structurally, not just decoratively. Each page section is marked with a moon phase icon (new → crescent → half → gibbous → full) instead of generic numbered markers, since the phases double as a sequence indicator. The hero has a canvas animation of a starfield with a moon that slowly waxes and wanes.

**Colors:**
- `--ink: #0F1420` — background, deep navy-black (not pure black)
- `--panel: #161D2E` — card/panel background
- `--panel-2: #1D2740` — secondary panel background
- `--moonlight: #E8DFC8` — primary accent, warm pale moonlight color, used for the moon body and primary buttons
- `--steel: #6B7A9C` / `--steel-dim: #4A5673` — secondary text, borders, dividers
- `--signal: #7DD3E0` — interactive accent (links, hover states, eyebrow text), soft cyan not neon
- `--text: #F2F0EA` / `--text-dim: #A6AFC4` — body text, primary and dimmed

**Type:**
- Display/headings: Space Grotesk
- Body: Inter
- Labels/mono/eyebrows: JetBrains Mono

**Signature element:** the animated moon phase in the hero canvas, and the moon-phase markers used as section dividers throughout.

## Page structure (current, reworked 2026-08-19)

1. Nav — fixed, blurred background, links to each section
2. Hero — headline, one-line pitch ("studio + growing line of products"), two CTAs
3. About — company background, the "Tsukino" name explanation, quick-facts card (founded, focus, tracks)
4. Services — client work only: Custom Software Development, DevOps & Cloud Delivery
5. Products — its own section, card grid designed to GROW: Job Search Platform + a "More in the Workshop" teaser. Add a card per product as they become public.
6. Contact — mailto CTA
7. Footer — copyright line

Removed on purpose (Jasmine, 2026-08-19): the Founder bio section and the
"single-founder / no middle management" details. The public page should not
over-share company structure, and the site must read as a studio with a
product line, never as "the company behind one app."

## Content notes / things to fix before shipping

- **Email is a placeholder**: `hello@tsukinosoftware.com` — replace with the real business email once set up.
- **No real domain/hosting yet** — needs to be pointed somewhere once purchased.
- **Founder bio is minimal** — currently just role + background stack (.NET/C#, Azure, DevOps, CI/CD). Could be expanded with more personality, specific projects, or a headshot if wanted.
- **Job Search App service card is intentionally vague** ("In development") since that product isn't public yet — update copy once it's ready to link to or demo.
- **No analytics, no SEO meta tags (og:image, description, etc.) yet.**
- **No favicon.**

## Open questions for tomorrow

- Keep as a single static HTML file (simplest, fine for a marketing page) or restructure into separate CSS/JS files for maintainability?
- Where is this getting hosted? (Affects whether a build step / static site generator is worth adding.)
- Should the contact form actually submit somewhere (e.g. a simple form service) instead of just `mailto:`?
- Any pages beyond the single-page scroll site (e.g. a dedicated page for the job app once it's live)?

## Constraints / preferences to keep in mind

- Keep copy plain and direct, no filler, no em dashes.
- Don't invent specific personal or business details (address, phone, project history) that haven't been confirmed — flag placeholders clearly instead of guessing.
