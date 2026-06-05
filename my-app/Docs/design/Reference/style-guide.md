# Brew & Co — Visual Style Guide

> A premium artisan coffee & beverages brand. Warm, handcrafted, intimate.  
> Stack: **Next.js 16 App Router · Tailwind CSS v4 · TypeScript · React 19**

---

## 1. Brand Personality

| Dimension     | Direction                                                           |
|---------------|---------------------------------------------------------------------|
| **Tone**      | Warm, inviting, artisan — like your favourite neighbourhood café    |
| **Feeling**   | Cosy abundance. Generous. Handmade, never corporate.               |
| **Visual POV**| Organic curves, warm earthy palette, illustrated product imagery    |
| **Motion**    | Slow, smooth reveals — like steam rising from a fresh cup           |

The brand avoids: cold blues, sharp geometric grids, clinical whitespace, neon accents.

---

## 2. Color System

All values are defined as CSS custom properties in `design-tokens.css` and available as Tailwind utility classes.

### 2.1 Cream — Primary Background Family

| Token                    | Class              | Hex       | Usage                                    |
|--------------------------|--------------------|-----------|------------------------------------------|
| `--color-cream-50`       | `bg-cream-50`      | `#FDFAF6` | Absolute white-ish fallback              |
| `--color-cream-100`      | `bg-cream-100`     | `#F5EDE0` | **Main page background**                 |
| `--color-cream-200`      | `bg-cream-200`     | `#EDE0CC` | Alternating section backgrounds          |
| `--color-cream-300`      | `bg-cream-300`     | `#E0CCAF` | Dividers, disabled field borders         |
| `--color-cream-400`      | `text-cream-400`   | `#C8AA88` | Placeholder text                         |

### 2.2 Espresso — Text & Dark Surfaces

| Token                    | Class                  | Hex       | Usage                                    |
|--------------------------|------------------------|-----------|------------------------------------------|
| `--color-espresso-50`    | `text-espresso-50`     | `#7A5A3E` | Tertiary text, captions                  |
| `--color-espresso-100`   | `text-espresso-100`    | `#5A3C24` | Secondary body text                      |
| `--color-espresso-200`   | `text-espresso-200`    | `#3D2414` | Subheadings, card labels                 |
| `--color-espresso-300`   | `text-espresso-300`    | `#2D1A0E` | **Primary body text**                    |
| `--color-espresso-400`   | `text-espresso-400`    | `#1E1008` | **Hero headline, dark buttons**          |
| `--color-espresso-500`   | `bg-espresso-500`      | `#100804` | Outer page shell, dark backdrops         |

### 2.3 Terracotta — Primary Brand Accent

> Used for: prices, CTAs, icon highlights, active states, play buttons.

| Token                      | Class                    | Hex       | Usage                       |
|----------------------------|--------------------------|-----------|-----------------------------|
| `--color-terracotta-100`   | `text-terracotta-100`    | `#F2B08A` | Light tint, hover glow      |
| `--color-terracotta-200`   | `bg-terracotta-200`      | `#E07A4A` | Hover state                 |
| `--color-terracotta-300`   | `bg-terracotta-300`      | `#C75B2A` | **Base accent color**       |
| `--color-terracotta-400`   | `bg-terracotta-400`      | `#A84820` | Pressed / active            |
| `--color-terracotta-500`   | `bg-terracotta-500`      | `#8A3818` | Deep emphasis               |

### 2.4 Gold — Secondary Accent

> Used for: featured product circles, premium badges, star ratings.

| Token                  | Hex       | Usage                              |
|------------------------|-----------|------------------------------------|
| `--color-gold-100`     | `#F2CA6A` | Tint background                    |
| `--color-gold-200`     | `#E0A830` | Hover                              |
| `--color-gold-300`     | `#C89028` | **Base gold**                      |
| `--color-gold-400`     | `#A87820` | Deep/dark gold                     |

### 2.5 Category Palette

Each category has a dedicated circle icon color:

| Category  | Token                 | Hex       | Class              |
|-----------|-----------------------|-----------|--------------------|
| Coffee    | `--color-olive-400`   | `#7A8A28` | `bg-olive-400`     |
| Drinks    | `--color-teal-400`    | `#1A7A60` | `bg-teal-400`      |
| Tea       | `--color-rose-400`    | `#C04E68` | `bg-rose-400`      |
| Bakery    | `--color-berry-400`   | `#9A3050` | `bg-berry-400`     |

### 2.6 Semantic Color Assignments

```
Page background:      bg-cream-100
Card background:      bg-white / bg-cream-50
Primary text:         text-espresso-300
Heading text:         text-espresso-400
Secondary text:       text-espresso-100
Muted text:           text-espresso-50
Link / accent:        text-terracotta-300
Price:                text-terracotta-300  (font-bold)
Primary button bg:    bg-espresso-400
Primary button text:  text-cream-100
CTA accent bg:        bg-terracotta-300
Border:               border-cream-300
Focus ring:           ring-terracotta-300
```

### 2.7 Color Contrast Ratios

| Foreground          | Background       | Ratio   | WCAG Level |
|---------------------|------------------|---------|------------|
| `espresso-400`      | `cream-100`      | 15.4:1  | AAA ✓      |
| `espresso-300`      | `cream-100`      | 11.2:1  | AAA ✓      |
| `cream-100`         | `espresso-400`   | 15.4:1  | AAA ✓      |
| `cream-50`          | `terracotta-300` | 3.6:1   | AA ✓       |
| `white`             | `terracotta-300` | 3.8:1   | AA ✓       |

---

## 3. Typography

### 3.1 Font Stack

| Role        | Font          | Tailwind Class     | Notes                                      |
|-------------|---------------|--------------------|--------------------------------------------|
| **Display** | Fraunces      | `font-display`     | Warm optical-size variable serif. Bold headlines, hero text. Add via `next/font/google` |
| **UI / Body** | Geist Sans  | `font-sans`        | Already loaded in `layout.tsx`. Clean, modern. |
| **Mono**    | Geist Mono    | `font-mono`        | Code snippets, numeric data.              |

**Adding Fraunces to layout.tsx:**
```tsx
import { Fraunces, Geist, Geist_Mono } from 'next/font/google'

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  axes: ['opsz', 'WONK'],  // optical size + playful axis
})
```

### 3.2 Type Scale

| Name      | Size          | Weight | Line Height | Letter Spacing | Usage                       |
|-----------|---------------|--------|-------------|----------------|-----------------------------|
| Hero      | clamp(40–64px)| 900    | 1.05        | -0.02em        | Landing hero headline       |
| Display   | clamp(32–48px)| 800    | 1.1         | -0.02em        | Section titles              |
| Heading 1 | 32px          | 700    | 1.2         | -0.01em        | Page titles                 |
| Heading 2 | 24px          | 700    | 1.25        | -0.01em        | Card / modal headings       |
| Heading 3 | 20px          | 600    | 1.3         | 0              | Sub-sections                |
| Subhead   | 18px          | 500    | 1.4         | 0              | Pull-quotes, lead text      |
| Body      | 16px          | 400    | 1.6         | 0              | Main body copy              |
| Small     | 14px          | 400    | 1.5         | 0.01em         | Captions, helper text       |
| Micro     | 12px          | 500    | 1.4         | 0.05em         | Badges, tags, labels        |

### 3.3 Tailwind Utility Recipes

```html
<!-- Hero headline -->
<h1 class="font-display font-black text-[clamp(2.5rem,5vw,4rem)]
           leading-[1.05] tracking-tight text-espresso-400">
  When Life Gives You Lemons
</h1>

<!-- Section title -->
<h2 class="font-display font-bold text-[clamp(2rem,4vw,3rem)]
           leading-snug tracking-tight text-espresso-400">
  Our Menu
</h2>

<!-- Body copy -->
<p class="font-sans text-base leading-relaxed text-espresso-100">
  Shake up your taste buds...
</p>

<!-- Price -->
<span class="font-sans font-bold text-lg text-terracotta-300">
  $30.00
</span>

<!-- Category label -->
<span class="font-sans font-semibold text-xs tracking-widest uppercase text-espresso-200">
  COFFEE
</span>
```

---

## 4. Spacing & Layout

### 4.1 Spacing Scale
Tailwind's default 4px-base scale is used, extended with semantic tokens:

| Token           | Value   | Usage                              |
|-----------------|---------|------------------------------------|
| `spacing-18`    | 4.5rem  | Generous section separators        |
| `spacing-22`    | 5.5rem  | Hero vertical padding              |
| `spacing-26`    | 6.5rem  | Large section padding              |

### 4.2 Layout Grid

```
Max content width:  1280px (max-w-7xl)
Page horizontal padding: px-6 sm:px-10 lg:px-20
Section vertical padding: py-16 md:py-24
Card gap:           gap-6 md:gap-8
```

### 4.3 Container Pattern

```tsx
<section className="w-full bg-cream-100">
  <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20 py-16 md:py-24">
    {/* content */}
  </div>
</section>
```

---

## 5. Borders & Radius

| Role                   | Token / Class        | Value      |
|------------------------|----------------------|------------|
| Input fields           | `rounded-sm`         | 4px        |
| Small cards, tooltips  | `rounded-md`         | 12px        |
| Standard cards         | `rounded-lg`         | 16px        |
| Large panels / modals  | `rounded-xl`         | 24px        |
| Page wrapper frame     | `rounded-2xl`        | 32px        |
| Buttons, search bar    | `rounded-pill`       | 9999px      |
| Category icons         | `rounded-full`       | 50% / circle|

**Dividers:** Use `border-b border-cream-300` at 1px. Never use hard grey lines.

---

## 6. Shadows

All shadows are warm-tinted (espresso-brown undertone), never grey:

| Token                  | Class                  | Usage                           |
|------------------------|------------------------|---------------------------------|
| `--shadow-warm-xs`     | `shadow-warm-xs`       | Subtle card lift                |
| `--shadow-warm-sm`     | `shadow-warm-sm`       | Navigation, inputs              |
| `--shadow-warm-md`     | `shadow-warm-md`       | Cards, dropdowns                |
| `--shadow-warm-lg`     | `shadow-warm-lg`       | Hero panels, sticky nav         |
| `--shadow-warm-xl`     | `shadow-warm-xl`       | Modals, drawers                 |
| `--shadow-terracotta`  | `shadow-terracotta`    | Primary CTA button glow         |
| `--shadow-espresso`    | `shadow-espresso`      | Dark button glow                |

---

## 7. Motion & Animation

### 7.1 Principles

- **Ease into warmth.** Prefer `ease-out-expo` for reveals; items settle gently.
- **Stagger reveals.** Hero elements animate in sequence (title → subtitle → button → image).
- **No jarring motion.** Avoid fast snaps; min duration 150ms for micro, 400ms for reveals.
- **Category icons** get a subtle bounce (`ease-bounce`) on hover.
- **Product cards** lift with `translateY(-4px)` + shadow increase on hover.

### 7.2 Easing Tokens

| Token             | Value                              | When to Use               |
|-------------------|------------------------------------|---------------------------|
| `ease-bounce`     | `cubic-bezier(0.34,1.56,0.64,1)`  | Category icon hover, CTA  |
| `ease-smooth`     | `cubic-bezier(0.4,0,0.2,1)`       | Page transitions, fades   |
| `ease-out-expo`   | `cubic-bezier(0.19,1,0.22,1)`     | Section reveals, slide-ins|
| `ease-spring`     | `cubic-bezier(0.68,-0.55,0.265,1.55)` | Cart add animation   |

### 7.3 Duration Scale

| Token              | Value  | Use Case                      |
|--------------------|--------|-------------------------------|
| `duration-fast`    | 150ms  | Hover color, focus ring       |
| `duration-base`    | 250ms  | Button press, state change    |
| `duration-slow`    | 400ms  | Card hover lift, nav open     |
| `duration-slower`  | 600ms  | Modal open, drawer            |
| `duration-reveal`  | 800ms  | Hero headline reveal          |

### 7.4 CSS Animation Recipes

```css
/* Staggered hero reveal */
@keyframes brew-fade-up {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

.hero-title   { animation: brew-fade-up 800ms cubic-bezier(0.19,1,0.22,1) both; }
.hero-body    { animation: brew-fade-up 800ms cubic-bezier(0.19,1,0.22,1) 100ms both; }
.hero-cta     { animation: brew-fade-up 800ms cubic-bezier(0.19,1,0.22,1) 200ms both; }
.hero-image   { animation: brew-fade-up 800ms cubic-bezier(0.19,1,0.22,1) 150ms both; }

/* Category icon bounce */
.category-icon:hover .icon-circle {
  transform: scale(1.08) translateY(-3px);
  transition: transform 250ms cubic-bezier(0.34,1.56,0.64,1);
}
```

---

## 8. Iconography

- **Style:** Line icons, 1.5–2px stroke weight, rounded line-caps. Warm espresso tint.
- **Recommended library:** `lucide-react` (clean, consistent, tree-shakeable)
- **Sizing:** 16px (inline), 20px (standard UI), 24px (navigation), 32px (feature)
- **Category icons:** Illustrated / stylised — circular crop on coloured background circles

---

## 9. Imagery

- **Product photos:** Illustrated or high-quality lifestyle. Soft shadows. Never stock-photo flat-lays.
- **Backgrounds:** Cream/beige solid or subtle grain texture overlay (`opacity: 0.03`)
- **Circle crops:** Products displayed in circular `aspect-square` containers with brand-colour backgrounds
- **Hero image:** Large centred product on a warm-coloured circular backdrop (terracotta/gold)

---

## 10. Accessibility

| Rule                        | Implementation                                  |
|-----------------------------|-------------------------------------------------|
| Focus visible               | `focus-visible:ring-2 focus-visible:ring-terracotta-300 focus-visible:ring-offset-2` |
| Minimum touch target        | 44×44px (`min-h-11 min-w-11`)                   |
| Text contrast               | All body text meets AA; headings meet AAA       |
| Reduced motion              | `@media (prefers-reduced-motion)` disables all translate/fade animations |
| Semantic HTML               | `<nav>`, `<main>`, `<section>`, `<article>`, `<button>` over `<div>` |
| Alt text                    | All product images require descriptive alt text |

---

## 11. Do / Don't

| ✅ Do                                                 | ❌ Don't                                      |
|------------------------------------------------------|-----------------------------------------------|
| Use cream backgrounds for warmth                     | Use pure `#FFFFFF` as the page background     |
| Tint shadows with espresso brown                     | Use grey or black box shadows                 |
| Pair display font (Fraunces) with Geist for headings | Use Geist for hero headlines — too clinical   |
| Round buttons and inputs into pills                  | Use square or lightly-rounded buttons         |
| Price in terracotta bold                             | Use green for prices — too generic e-commerce |
| Stagger animation reveals                            | Animate everything simultaneously             |
| Use the category colour palette for accents          | Introduce new colours outside the token set   |
