# Brew & Co — Design System

A warm, artisan design system for a premium coffee & beverages brand.  
Built for **Next.js 16 · Tailwind CSS v4 · TypeScript · React 19**.

---

## What's In This Folder

```
Docs/design/
├── README.md              ← you are here
├── design-tokens.css      ← all CSS custom properties (@theme)
├── style-guide.md         ← visual language, color, type, motion, a11y
├── component-spec.md      ← component specs with Tailwind class recipes
└── Reference/
    └── *.webp             ← original UI reference image
```

---

## Quick Start

### 1. Import the design tokens

In `app/globals.css`, add the import at the top:

```css
@import "tailwindcss";
@import "../Docs/design/design-tokens.css";
```

### 2. Add the display font (Fraunces)

In `app/layout.tsx`, add Fraunces alongside the existing Geist fonts:

```tsx
import { Fraunces, Geist, Geist_Mono } from 'next/font/google'

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  axes: ['opsz', 'WONK'],
})

// Add fraunces.variable to the <html> className
<html className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} ...`}>
```

### 3. Use tokens as Tailwind classes

```tsx
// Page background
<div className="bg-cream-100">

// Hero headline
<h1 className="font-display font-black text-espresso-400">

// Price
<span className="text-terracotta-300 font-bold">$30.00</span>

// Primary CTA button
<button className="bg-espresso-400 text-cream-100 rounded-pill px-8 py-4">

// Category circle
<div className="bg-olive-400 w-14 h-14 rounded-full">
```

---

## Brand at a Glance

| Element         | Value                                  |
|-----------------|----------------------------------------|
| Page background | `#F5EDE0` — warm cream                 |
| Primary text    | `#1E1008` — deep espresso              |
| Brand accent    | `#C75B2A` — terracotta (CTAs, prices)  |
| Secondary       | `#C89028` — gold (featured items)      |
| Display font    | Fraunces (bold, warm serif)            |
| Body font       | Geist Sans                             |
| Button shape    | Pill (`rounded-pill`)                  |
| Icon shape      | Circle (`rounded-full`)                |
| Shadow style    | Warm espresso-tinted (`shadow-warm-*`) |

---

## Document Guide

| File                  | Read it when…                                                    |
|-----------------------|------------------------------------------------------------------|
| `style-guide.md`      | You need to understand the brand palette, type scale, spacing rules, motion guidelines, or accessibility requirements |
| `design-tokens.css`   | You want to see every CSS variable and what Tailwind class it maps to |
| `component-spec.md`   | You're building a Button, Navbar, ProductCard, Hero, or any other UI component — grab the class recipe directly |

---

## Core Token Cheat Sheet

```
── Colors ──────────────────────────────────────────────
bg-cream-100          Main page background
bg-cream-200          Alternating section background
text-espresso-400     Hero headlines, dark buttons
text-espresso-300     Primary body text
text-espresso-100     Secondary / muted text
text-terracotta-300   Prices, links, active states
bg-terracotta-300     Accent CTA buttons
bg-gold-300           Featured product highlights
bg-olive-400          Coffee category circle
bg-teal-400           Drinks category circle
bg-rose-400           Tea category circle
bg-berry-400          Bakery category circle

── Typography ──────────────────────────────────────────
font-display          Fraunces — all headings
font-sans             Geist Sans — body & UI
font-black / font-bold / font-semibold / font-medium

── Radius ──────────────────────────────────────────────
rounded-pill          Buttons, search bar, tags
rounded-full          Category icons, avatars
rounded-xl            Cards, modals
rounded-2xl           Page shell inner card

── Shadows (warm-tinted) ───────────────────────────────
shadow-warm-xs        Subtle card lift
shadow-warm-sm        Nav, inputs
shadow-warm-md        Cards, dropdowns
shadow-warm-lg        Hero panels, sticky nav
shadow-warm-xl        Modals, drawers
shadow-terracotta     Terracotta button glow
shadow-espresso       Dark button glow

── Motion ──────────────────────────────────────────────
ease-[var(--ease-bounce)]    Category icon hover
ease-[var(--ease-smooth)]    State changes
ease-[var(--ease-out-expo)]  Section reveals
duration-[150ms]     Colour/focus transitions
duration-[250ms]     Button / state changes
duration-[400ms]     Card hover lifts
duration-[600ms]     Modal / drawer open
```

---

## Component Index

All components are specified in `component-spec.md` with copy-paste Tailwind recipes:

- **Button** — Primary (dark pill), Accent (terracotta), Outline
- **Navbar** — Sticky, scroll-aware blur, underline hover links
- **SearchBar** — Pill input with icon, focus ring
- **CategoryIcon** — Coloured circle + label, bounce hover
- **ProductCard** — Horizontal (featured row) + Vertical (grid)
- **HeroSection** — Headline / product image / category column grid
- **SectionTitle** — Eyebrow + display heading + subtitle
- **PriceTag** — Terracotta bold with optional strikethrough
- **Badge** — Pill label (new / hot / sale / featured / category)
- **ProductGrid** — Responsive 1→2→3→4 column layout
- **Page Shell** — Dark outer frame + cream inner card
- **Divider** — Cream-tinted 1px rule

---

## Implementation Checklist

Before shipping any page, verify:

- [ ] Background is `bg-cream-100` not pure white
- [ ] Headlines use `font-display` (Fraunces), not `font-sans`
- [ ] Shadows are `shadow-warm-*`, not default Tailwind grey shadows
- [ ] Buttons are `rounded-pill`, not `rounded-md`
- [ ] Prices are `text-terracotta-300 font-bold`
- [ ] Focus rings use `focus-visible:ring-terracotta-300`
- [ ] Hover states include `transition-all duration-[250ms]`
- [ ] `@media (prefers-reduced-motion)` strips animations
