---
name: Grace Stationery
description: A warm, paper-and-highlighter storefront for a Bangalore stationery and xerox shop.
colors:
  grace-maroon: "#7D0620"
  ink-blue: "#34506B"
  slate-muted: "#4F5F6E"
  notebook-paper: "#FBF7F0"
  paper-edge: "#E4DCCD"
  pencil-dash: "#B9A98F"
  paper-hover: "#F1E9DB"
  highlighter-yellow: "#FFD84D"
  bubblegum-pink: "#FF8FB0"
  sky-wash: "#DCEEFF"
  white: "#FFFFFF"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(42px, 8cqw, 92px)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(34px, 5.6cqw, 60px)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "26px"
    fontWeight: 700
    lineHeight: 1.1
  body:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 700
    letterSpacing: "0.16em"
  signature:
    fontFamily: "Great Vibes, cursive"
    fontSize: "42px"
    lineHeight: 0.9
  kannada:
    fontFamily: "Noto Serif Kannada, serif"
    fontWeight: 800
rounded:
  xs: "6px"
  sm: "10px"
  md: "16px"
  lg: "20px"
  xl: "24px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "14px"
  md: "28px"
  lg: "48px"
components:
  button-primary:
    backgroundColor: "{colors.grace-maroon}"
    textColor: "{colors.white}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "0 26px"
    height: "52px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink-blue}"
    rounded: "{rounded.pill}"
    padding: "0 18px"
    height: "44px"
  nav-link:
    textColor: "{colors.ink-blue}"
    rounded: "{rounded.pill}"
    padding: "0 14px"
    height: "44px"
  nav-link-hover:
    backgroundColor: "{colors.paper-hover}"
  category-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink-blue}"
    rounded: "{rounded.lg}"
    padding: "28px"
  quick-link:
    textColor: "{colors.ink-blue}"
    rounded: "{rounded.xs}"
    padding: "0 14px"
    height: "52px"
---

# Design System: Grace Stationery

## Overview

**Creative North Star: "The Counter Desk Notebook"**

The site feels like the desk behind a neighbourhood stationery counter: cream notebook paper, ink-blue handwriting, a maroon stamp, a yellow highlighter left uncapped. Things are tactile and a little handmade. Cards are taped on, headlines get highlighted, underlines are drawn by hand, and a sheet of paper travels through the xerox, lamination and binding machines as you scroll.

It is warm and playful, but it works as a shop. Prices, hours and the phone number are plain and legible, and the whimsy sits around them. Serif display type with soft italics brings personality; a clean sans carries the reading. Colour is a pale paper ground with ink-blue text, maroon for the brand and the call action, and highlighter yellow as the single loud accent.

**Key Characteristics:**
- Cream paper ground, ink-blue (not black) text.
- Maroon owns brand and the primary call action; yellow highlights.
- Pill buttons and nav, generously rounded cards (20px).
- Soft navy-tinted shadows; hover lifts, tilts and tapes cards.
- Hand-drawn, scroll-linked SVG illustration stories (paper through xerox/lamination/binding; the shelves into a school bag).
- Motion is switched off entirely under `prefers-reduced-motion`, with static fallbacks.

## Colors

A paper-and-ink palette: warm cream ground, cool ink-blue text, one deep maroon brand, and a few stationery-supply pastels.

### Primary
- **Grace Maroon** (#7D0620): the brand colour (the `brand` prop, with alternates #34506B and #B3123A). Logo script, eyebrows, the "Call now" button, footer fill, the closed-shop sign.

### Secondary
- **Ink Blue** (#34506B): all body and heading text, outlined buttons, focus ring, shadow tint. Never replaced by black.
- **Highlighter Yellow** (#FFD84D): the underline-marker behind key words, tape strips on cards, the "open" sign, row hover (at 28% alpha). The one loud accent.

### Tertiary
- **Bubblegum Pink** (#FF8FB0): illustration and category tints only.
- **Sky Wash** (#DCEEFF): hero tint (the `heroTint` prop, with alternates #FFE1EA, #FFF1C2, #E8E0FA) and category card backgrounds.

### Neutral
- **Notebook Paper** (#FBF7F0): page, header and sticky-bar background.
- **Paper Edge** (#E4DCCD): hairline card and panel borders.
- **Pencil Dash** (#B9A98F): dashed rules under header and quick links.
- **Paper Hover** (#F1E9DB): nav and menu hover wash.
- **Slate Muted** (#4F5F6E): secondary copy.
- **White** (#FFFFFF): cards, menu panel, text on maroon.

### Named Rules
**The Ink-Not-Black Rule.** Text is ink blue on paper. Pure black and pure white-on-grey are not part of the system; white appears only as card fill and text on maroon.

**The One Highlighter Rule.** Yellow marks the thing to read or tap next. It does not become a second brand colour.

## Typography

**Display Font:** Fraunces (with Georgia, serif)
**Body Font:** DM Sans (with system-ui, sans-serif)
**Signature Font:** Great Vibes (cursive), logo wordmark only.
**Kannada Font:** Noto Serif Kannada (800), used only for the Kannada wordmark in About (`lang="kn"`).

**Character:** A soft, warm old-style serif with italic flourishes sits over a neutral humanist sans. The serif speaks; the sans informs.

### Hierarchy
- **Display** (Fraunces 700, clamp(42px, 8cqw, 92px), 1.02): hero H1, with one italic maroon word.
- **Headline** (Fraunces 700, clamp(34px, 5.6cqw, 60px), 1.05): section titles, often with an italic highlighted phrase.
- **Title** (Fraunces 700, 26px, 1.1): category card names.
- **Body** (DM Sans 400–500, 15–16px, 1.5): descriptions and prices. Keep lines to about 65ch.
- **Label** (DM Sans 700, 13px, 0.16em tracking, uppercase): eyebrows above headings, in maroon.
- **Signature** (Great Vibes, 42px header / 52px footer): the "Grace" wordmark.

### Named Rules
**The One Italic Rule.** One italic word or phrase per heading carries the colour or highlight. Do not italicise whole headings.

## Layout

Everything is laid out against a named container (`site`), using `cqw`-based fluid sizing, not viewport media queries. Page gutters are `clamp(20px, 5cqw, 48px)`; content tops out at about 1240px. Categories sit on a 6-column grid with spans of 6, 3 and 2 that collapse to three columns at 900px and one at 600px.

Breakpoints are container-based: at 900px the nav links collapse into a pill "Menu" disclosure; at 768px the scroll stories shorten; at 600px category cards stack, decorative art is hidden, and a sticky bottom bar with the call action appears. Touch targets are at least 44px (52px for buttons and quick links). Two long scroll-driven stories (xerox/lamination/binding; the shelves) pin a stage and tie progress to scroll; they fall back to a static list under reduced motion.

## Elevation & Depth

Layered and soft. Surfaces rest on a faint two-part shadow tinted with ink blue, never black. Depth appears and deepens on interaction: cards lift, tilt, and gain a tape strip.

### Shadow Vocabulary
- **Card rest** (`0 1px 1px rgba(52,80,107,.08), 0 10px 28px rgba(52,80,107,.08)`): category cards.
- **Card lifted** (`0 2px 2px rgba(52,80,107,.08), 0 22px 40px rgba(52,80,107,.16)`): card hover.
- **Button hover** (`0 10px 22px rgba(52,80,107,.2)`): pill buttons on hover.
- **Menu panel** (`0 18px 40px rgba(52,80,107,.2)`): mobile menu popover.
- **Sticky bar** (`0 -8px 24px rgba(52,80,107,.12)`): bottom call bar.

### Named Rules
**The Blue Shadow Rule.** Every shadow is built from ink blue (52,80,107). No grey or black shadows.

## Shapes

Round and friendly. Buttons, nav links and the menu trigger are full pills (999px); cards are 20–24px; popovers 16px with 10px inner items; quick links 6px. Hairline 1px paper-edge borders on cards, and dashed pencil-coloured rules for dividers. Tape strips (64×22px, yellow at 85% alpha, tilted about 5°) are the recurring signature shape.

## Components

### Buttons
- **Shape:** full pill (999px), 52px tall, 26px side padding, 700 weight 15px.
- **Primary:** Grace Maroon fill, white text, with a phone glyph for "Call now".
- **Hover / Focus:** lifts 2px and tilts −0.6° with a blue shadow, on a springy cubic-bezier(.3,1.4,.5,1). Focus is a 3px ink-blue outline with 3px offset.
- **Outline:** 1.5px ink-blue border, ink-blue text, 44px tall (Menu trigger).

### Cards / Containers
- **Corner Style:** 20px.
- **Background:** white by default, with a per-card pastel via `--cbg` (sky wash and its siblings).
- **Shadow Strategy:** Card rest, then Card lifted on hover.
- **Border:** 1px Paper Edge.
- **Internal Padding:** 28px, with 28px gap between title block and footer line.
- **Hover:** lifts 6px, tilts −1.2°, and a yellow tape strip fades in at the top right.

### Navigation
- Text links in 14px DM Sans 500, pill-shaped hit areas at least 44px tall; hover fills with Paper Hover. The "Call now" pill sits last. Under 900px the links collapse into a "Menu" disclosure with a 240px white panel (16px radius). Under 600px a sticky bottom bar repeats the call action.

### Quick Links
- Full-width rows, 52px tall, 500 weight, a dashed pencil-coloured underline, a 6px radius, and a yellow wash at 30% alpha on hover. Used for contact and category shortcuts.

### Highlighter Mark (signature)
- A yellow band behind the lower third of a phrase (`linear-gradient` from 64% to 90%), used on one phrase per section heading.

### Scroll Stories (signature)
- Pinned SVG stages where scroll progress drives paper, rollers, stamps and bag contents, with a progress rail and a pencil marker. Labels and descriptions crossfade per stop. These are decorative explanations: all information also appears as text, and reduced-motion users get a static stacked version.

## Do's and Don'ts

### Do:
- **Do** use ink blue (#34506B) for all text and shadows, on Notebook Paper (#FBF7F0).
- **Do** reserve Grace Maroon for brand and the call action, and yellow for one highlight per section.
- **Do** keep prices, hours and phone in plain DM Sans, never inside animation or illustration.
- **Do** keep every interactive target at 44px or taller, and keep the visible ink-blue focus ring.
- **Do** give every motion a reduced-motion fallback.

### Don't:
- **Don't** use black, grey shadows, or a second brand colour.
- **Don't** add stock photography or fabricated testimonials; the voice is hand-drawn and plainspoken.
- **Don't** put information only in scroll-driven animation.
- **Don't** italicise whole headings or stack more than one highlight per heading.
- **Don't** replace the pill and 20px-card rounding with sharp corners.

## Scroll Story Sizing (implemented)

The pinned `#story` stage sizes its drawing from the space left over, with no hand-tuned heights.

- **Fill the remaining height.** `.machine` is `flex: 1 1 0` (max 560px) with `grid-template-rows: minmax(0, 1fr)` (without it the grid row grows to the drawing and overlaps the description) and each SVG is `height: 100%`, so the art takes whatever the heading, description (`--dh`) and CTA leave. Nothing can overflow the stage; a longer description shrinks the art instead.
- **Crop.** Both SVGs share `viewBox="76 30 688 342"`, trimming empty margins measured from the animation's real extents. Items only cross the crop when entering or leaving. Keep the two viewBoxes identical or the crossfade will jump.
- **Description slot.** `--dh` is 132px by default and 76px at container width 1100px and up, where the text fits on two lines.
- **Taller stage.** `--sh` is `min(100vh, 1000px)` (was 860px), so large screens use more of the viewport.
- **Art stays in its column.** `.machine` clips on the left only (`clip-path: inset(-80px -160px -80px 0)`) so the outgoing art never slides over the rail labels, while the "1 / 25 copies" pill can still stick out on the right.
- **Mobile.** Up to 768px the rail column is 132px with 12px labels; up to 600px it is a 30px dots-only rail and the labels are visually hidden (still in the DOM for screen readers), so the art gets about 310px instead of 240px. The active stop is named by the description.
- **Writing quill.** A feather quill (ink-blue vane, paper-coloured shaft and barb notches, yellow ferrule, nib at the lower left) signs "Grace" stroke by stroke. One pen path, traced from the Great Vibes glyph outlines, does both jobs: it is a stroked mask that reveals the ink (`stroke-dashoffset: 1 - --w`), and it is the quill's `offset-path` (`offset-distance: --w * 100%`), so the nib is always on the freshly drawn line. The pen travels between letters over blank paper. If the signature text, font size or position changes, the path must be re-traced. The quill fades out once the signature is done.

Measured result at 1920x1080 and 1366x768: zero content overflow at every scroll point, drawing about 1.6x its original on-screen size. At 390px mobile it is about 1.4x. Verified in headless Chrome with reduced-motion fallback untouched.
