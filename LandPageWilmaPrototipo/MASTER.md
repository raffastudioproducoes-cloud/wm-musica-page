# Design System Master — Wilma Machado

## Status and scope

This is the persistent source of truth for the current landing page. It consolidates the **Serene Grace** system already implemented in `code.html` and documented in `serene_grace/DESIGN.md`.

- **Implementation stack:** static HTML with Tailwind CSS loaded from CDN and configured inline.
- **Product:** institutional artist landing page for music, literary works, trajectory, presentations, and contact.
- **Scope:** preserve the existing visual identity while defining reusable rules for future pages and components.
- **Non-goal:** this file does not authorize a new logo, brand color, font, illustration, photography, or external asset.

## Governance

### Established baseline

The tokens below are already present in the active Tailwind configuration. Use them by semantic role; do not introduce raw colors, replacement fonts, or visual styles in individual components.

### Asset policy

- Use only assets explicitly approved for the project.
- Existing files in `public/media` and `public/brand` are available locally, but their placement, crop, and editorial use must be confirmed before a component adopts them.
- Do not generate, imply ownership of, or substitute official logos, photographs, illustrations, or icons.

### Proposal policy

The accessibility, interaction, and state rules in this document are compatible operational requirements. They do not replace the established visual identity. Any visual token not listed as established requires explicit approval before implementation.

## Brand direction

**Premium Editorial / Minimalist-Tactile.** The experience should feel like a calm cultural magazine or curated art gallery: spiritual depth, warmth, quiet strength, intentional pacing, high-quality imagery, and generous negative space.

### Pillars

1. **Serenity** — warm non-white surfaces, unhurried rhythm, restrained transitions.
2. **Elegance** — editorial serif display type, refined sans-serif UI, thin outlines, subtle depth.
3. **Spirituality** — communicated through approved content, restrained symbolism, and light-filled imagery; never through invented religious assets.

### Do

- Use tonal layering and whitespace to create hierarchy.
- Reserve gold for meaningful emphasis, primary actions, and small decorative accents.
- Use subtle borders and ambient hover elevation.
- Keep motion purposeful and optional.

### Do not

- Replace the system with dark-luxury, neon, generic SaaS, or heavy glassmorphism aesthetics.
- Use heavy shadows, dense dashboards, aggressive gradients, or decorative motion without content purpose.
- Introduce unapproved colors, fonts, logos, photos, or icon sets.

## Established color tokens

| Token | Value | Primary role |
|---|---:|---|
| `surface` | `#fff8f6` | Main ivory canvas |
| `surface-dim` | `#dfd9d7` | Recessed surface |
| `surface-bright` | `#fff8f6` | Bright surface |
| `surface-container-lowest` | `#ffffff` | Highest card surface |
| `surface-container-low` | `#f9f2f0` | Low tonal section |
| `surface-container` | `#f4ecea` | Secondary container |
| `surface-container-high` | `#eee7e5` | Elevated container |
| `surface-container-highest` | `#e8e1df` | Strongest light tonal layer |
| `surface-variant` | `#e8e1df` | Variant surface and muted text on inverse areas |
| `on-surface` | `#1e1b1a` | Primary readable text |
| `on-surface-variant` | `#4f4538` | Secondary text |
| `primary` | `#7c580a` | Gold accent, border, active emphasis |
| `primary-container` | `#b58a3c` | Primary CTA background |
| `on-primary` | `#ffffff` | Existing primary-CTA foreground; validate at implementation time |
| `on-primary-container` | `#3a2600` | Dark foreground on light gold |
| `secondary` | `#685d46` | Secondary links and subdued emphasis |
| `secondary-container` | `#eedec1` | Secondary tonal container |
| `tertiary` | `#3a6091` | Reserved tertiary semantic role |
| `inverse-surface` | `#33302f` | Dark conversion section |
| `inverse-on-surface` | `#f6efed` | Text on inverse surface |
| `inverse-primary` | `#f0bf6b` | Gold accent on inverse surface |
| `outline` | `#817566` | Strong outline |
| `outline-variant` | `#d2c4b3` | Fine border and divider |
| `error` | `#ba1a1a` | Error indicator |
| `error-container` | `#ffdad6` | Error surface |
| `on-error` | `#ffffff` | Error foreground |
| `on-error-container` | `#93000a` | Error text on error surface |

### Color usage and accessibility

- Normal text must meet at least 4.5:1 contrast against its rendered background; large text must meet at least 3:1.
- Do not convey error, availability, active state, or playback using color alone; pair color with text, icon, or state label.
- `primary-container` with `on-primary` requires contrast verification before it is used for normal-size CTA labels. If it does not pass, prefer the established `on-primary-container` foreground without introducing a new color.
- The inverse section uses `inverse-surface`, `inverse-on-surface`, and `inverse-primary`; do not use an unreviewed dark theme elsewhere.

## Typography

### Families

| Role | Family | Use |
|---|---|---|
| Display and headings | `Bodoni Moda`, serif | Hero, section headings, album/works titles, pull quotes, years |
| Body and interface | `Hanken Grotesk`, sans-serif | Body copy, navigation, metadata, controls, labels |

### Type scale

| Token | Family | Size | Weight | Line height | Tracking | Use |
|---|---|---:|---:|---:|---:|---|
| `display-lg` | Bodoni Moda | 64px | 600 | 1.1 | -0.02em | Desktop hero/display |
| `display-lg-mobile` | Bodoni Moda | 40px | 600 | 1.2 | -0.01em | Mobile hero/display |
| `headline-lg` | Bodoni Moda | 48px | 500 | 1.2 | normal | Major titles and years |
| `headline-md` | Bodoni Moda | 32px | 500 | 1.3 | normal | Section and card titles |
| `body-lg` | Hanken Grotesk | 18px | 400 | 1.6 | normal | Lead and long-form introductory copy |
| `body-md` | Hanken Grotesk | 16px | 400 | 1.6 | normal | Standard body copy |
| `label-md` | Hanken Grotesk | 14px | 600 | 1.0 | 0.08em | Navigation, button labels, section eyebrows |

### Type rules

- Preserve serif/sans hierarchy; never use display type as dense body copy.
- Use italics in Bodoni Moda sparingly for editorial emphasis, never as a substitute for hierarchy.
- Uppercase labels must remain short. Do not apply wide tracking to paragraphs or legal copy.
- Keep body text at 16px or more on mobile. Avoid truncation of essential content; wrap naturally.
- Maintain sequential heading semantics (`h1` → `h2` → `h3`) even where the visual role differs.

## Layout, spacing, and shapes

### Established spatial tokens

| Token | Value | Use |
|---|---:|---|
| `unit` | 8px | Base rhythm |
| `gutter` | 24px | Grid gaps |
| `margin-mobile` | 20px | Mobile lateral margin |
| `margin-desktop` | 64px | Desktop lateral margin |
| `section-gap` | 120px | Major vertical separation |
| `container-max` | 1280px | Main content limit |

### Grid and breakpoints

- Mobile: one-column, four-column conceptual grid, 20px side margin.
- Desktop: twelve-column editorial grid, 24px gutter, max-width 1280px, 64px side margin.
- Use the current Tailwind mobile-first approach: default styles for small viewports, `md:` and `lg:` enhancements only when needed.
- Content must not create horizontal scrolling at 375px, 768px, 1024px, or 1440px.
- Fixed or sticky elements must reserve scroll offset so focused anchors remain visible.

### Shape and elevation

| Role | Established treatment |
|---|---|
| Small controls | `rounded` / 2px |
| Medium controls | `rounded-lg` / 4px |
| Image and feature containers | `rounded-xl` / 8px |
| Chips and platform actions | `rounded-full` / 12px in active implementation |
| Card borders | 1px `outline-variant` at low opacity |
| Depth | tonal surfaces first; subtle ambient gold/neutral shadow only on interaction |

Avoid heavy opaque drop shadows. Blur is limited to the existing translucent navigation or contextual panels.

## Component contracts

### Navigation

- Sticky translucent surface, thin bottom border, compact editorial label style.
- Desktop exposes section navigation and primary action.
- Mobile menu must be a real, keyboard-operable disclosure: `aria-expanded`, `aria-controls`, Escape close, and focus return to trigger.
- The active item is signaled by existing gold text/border treatment plus a non-color cue where necessary.

### Buttons

| Variant | Existing visual contract | Operational requirements |
|---|---|---|
| Primary | `primary-container`, uppercase `label-md`, subtle gold ambient shadow | semantic button/link, visible keyboard focus, minimum 44px target, disabled/loading behavior |
| Secondary | transparent, 1px `primary` outline, `primary` text | same interaction and focus behavior as primary |
| Inverse primary | `inverse-primary` background, `on-primary-container` text | use only in inverse sections |
| Platform chip | light tonal surface, icon + `label-md`, rounded-full | accessible name, real URL/action, no silent no-op |
| Icon control | current thin Material Symbols visual language | requires `aria-label`, visible focus, 44px target, and text alternative |

### Cards

- Use `surface-container-lowest` or the established tonal surface for the card.
- Keep fine border, image region, 32px internal padding where the current card pattern applies, and restrained hover lift.
- Card image hover zoom is decorative only; keyboard users receive an equivalent visible focus state on the actual link/control.
- A card may not use `href="#"` or a `div` with `cursor-pointer` as a placeholder for functionality.

### Sections and dividers

- Section eyebrow: short gold line plus uppercase `label-md` heading.
- Major title: established headline token, ample whitespace, no visual crowding.
- Dark CTA section: `inverse-surface`, restrained outline, `inverse-primary` accent, one clear primary action per card.

### Discography and playback

- Album art is square and uses approved artwork only.
- A track is a semantic button or link, not a clickable `div`.
- Track state must be explicit: idle, loading, playing, paused, unavailable, and error.
- Playback state cannot rely solely on hover, color, or a visual play icon.

### Forms and feedback (when a form is introduced)

- Every input has a persistent visible label and suitable input type/autocomplete.
- Validate after blur or submit, not on every keystroke.
- Put specific inline error text near its field and connect it with `aria-describedby`.
- For multiple errors, provide a focusable error summary and move focus appropriately.
- Use `aria-live` or `role="alert"` for asynchronous error feedback without stealing focus.

## States and accessibility baseline

Every interactive component must define: default, hover, focus-visible, pressed where applicable, disabled, loading, success where applicable, error, and unavailable/empty where content can be absent.

### Minimum requirements

- Visible `focus-visible` indicator on every link, button, card link, player control, and menu item.
- Keyboard order follows the visual order; no hover-only essential action.
- Icon-only controls have accessible names; decorative icons are hidden from assistive technology.
- Meaningful images have concise `alt`; decorative imagery uses `alt=""`.
- Respect `prefers-reduced-motion`; reveal and hover motion must not block content or interaction.
- Touch targets are at least 44px where practical, with at least 8px separation from adjacent targets.
- Loading and error states explain what happened and provide a recovery action when retry is possible.
- Empty states explain the absence and present a meaningful next action; never leave a silent blank area or a `#` destination.

## Motion

- Motion tier: **subtle**.
- Existing reveal sequence and image fade may be retained when `prefers-reduced-motion: no-preference` is active.
- Use transform and opacity, not layout-affecting properties, for interaction feedback.
- Prefer 150–300ms for component feedback; retain the existing slower editorial image treatment only when it does not delay content.
- Motion must communicate state or hierarchy. Do not add parallax, scroll-scrubbing, or decorative animation as a replacement for content.

## Asset and content fallback rules

| Situation | Required behavior |
|---|---|
| Image loading | Reserve image dimensions/aspect ratio; show approved fallback treatment if loading fails |
| Audio unavailable | Say that playback is unavailable and offer a real platform/contact alternative |
| Work/page not published | Use an explicit “Em breve” state and remove or disable the destination accessibly |
| External platform link unavailable | Do not render a silent CTA; explain or omit it until a real destination exists |
| Missing video content | Do not expose a navigation item pointing to a non-existent section |

## Verification checklist

Before implementing or publishing a UI change, verify:

- [ ] Existing Serene Grace tokens are used; no unapproved color, font, logo, or asset was introduced.
- [ ] Primary CTA foreground/background contrast was tested at its actual rendered text size.
- [ ] All interactive elements work with keyboard and have visible focus.
- [ ] Mobile menu and all CTAs have real destinations or intentional, accessible unavailable states.
- [ ] Meaningful images use approved assets and proper `alt` text.
- [ ] The page has no horizontal scrolling at 375px, 768px, 1024px, or 1440px.
- [ ] Reduced-motion mode leaves all content available and readable.
- [ ] Empty, loading, and error states include useful recovery paths.
- [ ] No runtime/browser/device claim is made until it has been tested in that environment.

## Source references

- Active implementation: `code.html` (Tailwind configuration and current components).
- Pre-existing design source: `serene_grace/DESIGN.md`.
- UI UX Pro Max informed the accessibility, responsive layout, interaction-state, and low-motion operational guidance. Its automatic font/color/style suggestions were not adopted because they would replace the existing identity.
