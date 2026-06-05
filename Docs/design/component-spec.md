# Brew & Co — Component Specification

> All components are built with **Next.js 16 App Router**, **Tailwind CSS v4**, and **TypeScript**.  
> Design tokens live in `design-tokens.css`. Fraunces + Geist fonts.

---

## Table of Contents

1. [Button](#1-button)
2. [Navigation Bar](#2-navigation-bar)
3. [Search Bar](#3-search-bar)
4. [Category Icon](#4-category-icon)
5. [Product Card](#5-product-card)
6. [Hero Section](#6-hero-section)
7. [Section Title](#7-section-title)
8. [Price Tag](#8-price-tag)
9. [Badge / Tag](#9-badge--tag)
10. [Product Grid](#10-product-grid)
11. [Page Shell](#11-page-shell)
12. [Divider](#12-divider)

---

## 1. Button

### Variants

| Variant       | Purpose                     | Background         | Text            |
|---------------|-----------------------------|--------------------|-----------------|
| `primary`     | Main page action (Get Promo)| `bg-espresso-400`  | `text-cream-100`|
| `accent`      | Secondary CTA               | `bg-terracotta-300`| `text-cream-50` |
| `outline`     | Ghost / secondary action    | Transparent        | `text-espresso-400`, `border-espresso-400` |
| `ghost`       | Tertiary, nav-level action  | Transparent        | `text-espresso-200` |

### Sizes

| Size  | Classes                                | Usage             |
|-------|----------------------------------------|-------------------|
| `sm`  | `px-4 py-2 text-sm h-9`               | Tag actions       |
| `md`  | `px-6 py-3 text-base h-11`            | Standard UI       |
| `lg`  | `px-8 py-4 text-lg h-14`             | Hero CTA          |

### Base Tailwind Classes (Primary)
```tsx
// Primary button — espresso pill with optional play icon
<button
  className="
    inline-flex items-center gap-3
    rounded-pill
    bg-espresso-400 text-cream-100
    px-8 py-4
    text-base font-semibold
    shadow-espresso
    transition-all duration-[250ms] ease-[var(--ease-smooth)]
    hover:bg-espresso-300 hover:shadow-warm-xl hover:-translate-y-0.5
    active:translate-y-0 active:shadow-warm-md
    focus-visible:outline-none focus-visible:ring-2
    focus-visible:ring-terracotta-300 focus-visible:ring-offset-2
    focus-visible:ring-offset-cream-100
    cursor-pointer select-none
  "
>
  Get Promo
  {/* Play icon circle */}
  <span className="
    flex items-center justify-center
    w-7 h-7 rounded-full bg-terracotta-300
    text-cream-50
  ">
    ▶
  </span>
</button>
```

### Accent Button
```tsx
<button className="
  inline-flex items-center justify-center gap-2
  rounded-pill
  bg-terracotta-300 text-cream-50
  px-6 py-3
  text-base font-semibold
  shadow-terracotta
  transition-all duration-[250ms]
  hover:bg-terracotta-200 hover:-translate-y-0.5 hover:shadow-warm-lg
  active:bg-terracotta-400 active:translate-y-0
  focus-visible:outline-none focus-visible:ring-2
  focus-visible:ring-terracotta-300 focus-visible:ring-offset-2
">
  Order Now
</button>
```

### Outline Button
```tsx
<button className="
  inline-flex items-center justify-center
  rounded-pill
  border-[1.5px] border-espresso-300
  bg-transparent text-espresso-300
  px-6 py-3
  text-base font-medium
  transition-all duration-[250ms]
  hover:bg-espresso-400 hover:text-cream-100 hover:border-espresso-400
  focus-visible:outline-none focus-visible:ring-2
  focus-visible:ring-espresso-400 focus-visible:ring-offset-2
">
  View All
</button>
```

---

## 2. Navigation Bar

### Anatomy
```
┌──────────────────────────────────────────────────────────────────────┐
│  [☕ Brew & Co.]        Home  Shop  Vendor  Pages  Blog    [Search ]  │
└──────────────────────────────────────────────────────────────────────┘
```

### Spec
- Height: `h-[4.5rem]` (72px)
- Background: `bg-cream-100` with `backdrop-blur` when scrolled
- Sticky: `sticky top-0 z-[200]`
- Bottom border: `border-b border-cream-300`
- Transition to: `shadow-warm-md bg-cream-50/90 backdrop-blur-md` on scroll

### Component Code
```tsx
// components/Navbar.tsx
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const NAV_LINKS = ['Home', 'Shop', 'Vendor', 'Pages', 'Blog'] as const

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`
        sticky top-0 z-[200] w-full h-[4.5rem]
        flex items-center
        border-b border-cream-300
        transition-all duration-[400ms]
        ${scrolled
          ? 'bg-cream-50/90 backdrop-blur-md shadow-warm-md border-cream-200'
          : 'bg-cream-100'
        }
      `}
      aria-label="Main navigation"
    >
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-20 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-display font-black
                     text-xl text-espresso-400 tracking-tight
                     hover:text-espresso-300 transition-colors duration-[150ms]"
        >
          <span className="text-2xl">☕</span>
          Brew & Co.
        </Link>

        {/* Nav links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {NAV_LINKS.map(link => (
            <li key={link}>
              <Link
                href={`/${link.toLowerCase()}`}
                className="
                  font-sans text-sm font-medium text-espresso-200
                  relative after:absolute after:bottom-0 after:left-0
                  after:h-[1.5px] after:w-0 after:bg-terracotta-300
                  after:transition-[width] after:duration-[250ms]
                  hover:text-espresso-400 hover:after:w-full
                "
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Search */}
        <div className="hidden sm:block">
          <SearchBar />
        </div>
      </div>
    </nav>
  )
}
```

---

## 3. Search Bar

### Spec
- Shape: `rounded-pill` (full pill)
- Size: `h-10 w-56 lg:w-72`
- Background: `bg-white`
- Border: `border border-cream-300`
- Icon: magnifying glass, `text-espresso-50` left-aligned
- Focus: `ring-2 ring-terracotta-300` + border becomes `border-terracotta-200`

```tsx
// components/SearchBar.tsx
import { Search } from 'lucide-react' // npm install lucide-react

export function SearchBar() {
  return (
    <label className="relative flex items-center">
      <Search
        className="absolute left-3.5 text-espresso-50 pointer-events-none"
        size={16}
        strokeWidth={1.75}
        aria-hidden="true"
      />
      <input
        type="search"
        placeholder="Search"
        className="
          h-10 w-56 lg:w-72
          rounded-pill
          border border-cream-300 bg-white
          pl-9 pr-4
          font-sans text-sm text-espresso-300
          placeholder:text-cream-400
          outline-none
          transition-all duration-[150ms]
          focus:border-terracotta-200 focus:ring-2 focus:ring-terracotta-300/30
          hover:border-cream-400
          shadow-warm-xs
        "
      />
    </label>
  )
}
```

---

## 4. Category Icon

### Anatomy
```
  ┌──────────┐
  │  ╔════╗  │   ← coloured circle (56px)
  │  ║ 🍵 ║  │   ← illustrated/emoji icon
  │  ╚════╝  │
  │  COFFEE   │   ← label (12px, 0.15em tracking)
  └──────────┘
```

### Spec
- Circle size: `w-14 h-14` (56px) on desktop, `w-12 h-12` mobile
- Shape: `rounded-full`
- Icon inside: 28px illustration / SVG
- Label: `text-xs font-semibold tracking-[0.15em] uppercase text-espresso-200`
- Layout: `flex flex-col items-center gap-2`
- Hover: `scale(1.08) translateY(-3px)` with `ease-bounce`

### Color Mapping

| Category | Circle Class       |
|----------|--------------------|
| Coffee   | `bg-olive-400`     |
| Drinks   | `bg-teal-400`      |
| Tea      | `bg-rose-400`      |
| Bakery   | `bg-berry-400`     |

```tsx
// components/CategoryIcon.tsx
interface CategoryIconProps {
  label: string
  color: string        // Tailwind bg class e.g. 'bg-olive-400'
  icon: React.ReactNode
  href?: string
}

export function CategoryIcon({ label, color, icon, href = '#' }: CategoryIconProps) {
  return (
    <a
      href={href}
      className="group flex flex-col items-center gap-2 cursor-pointer"
      aria-label={`Browse ${label}`}
    >
      <div
        className={`
          ${color}
          w-14 h-14 rounded-full
          flex items-center justify-center
          shadow-warm-sm
          transition-transform duration-[250ms] ease-[var(--ease-bounce)]
          group-hover:scale-[1.08] group-hover:-translate-y-1
          group-hover:shadow-warm-md
        `}
      >
        <span className="text-2xl" aria-hidden="true">{icon}</span>
      </div>
      <span className="
        font-sans text-xs font-semibold
        tracking-[0.12em] uppercase
        text-espresso-200
        transition-colors duration-[150ms]
        group-hover:text-terracotta-300
      ">
        {label}
      </span>
    </a>
  )
}
```

---

## 5. Product Card

### Anatomy
```
┌──────────────────────────────────────────┐
│   ╭──────╮                               │
│   │ IMG  │   Product Name                │
│   ╰──────╯   $30.00                      │
└──────────────────────────────────────────┘
```

### Variants

| Variant      | Layout                    | Use Case                  |
|--------------|---------------------------|---------------------------|
| `horizontal` | Image left, text right    | Featured row (as in ref.) |
| `vertical`   | Image top, text below     | Grid layout               |
| `mini`       | Small circle, name, price | Compact list              |

### Horizontal Card (matches reference)

```tsx
// components/ProductCard.tsx
interface ProductCardProps {
  name: string
  price: string
  imageSrc: string
  imageAlt: string
  circleBg?: string  // Tailwind bg class
}

export function ProductCard({
  name,
  price,
  imageSrc,
  imageAlt,
  circleBg = 'bg-gold-300',
}: ProductCardProps) {
  return (
    <article className="
      group
      flex items-center gap-4
      bg-cream-50 rounded-xl
      p-4
      shadow-warm-xs
      transition-all duration-[400ms]
      hover:shadow-warm-md hover:-translate-y-1
      cursor-pointer
    ">
      {/* Product image in circle */}
      <div className={`
        relative shrink-0
        w-20 h-20 rounded-full overflow-hidden
        ${circleBg}
        shadow-warm-sm
        transition-transform duration-[250ms] ease-[var(--ease-bounce)]
        group-hover:scale-105
      `}>
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-0.5">
        <h3 className="
          font-display font-bold text-base leading-snug
          text-espresso-400
          group-hover:text-espresso-300
          transition-colors duration-[150ms]
        ">
          {name}
        </h3>
        <PriceTag price={price} />
      </div>
    </article>
  )
}
```

### Vertical Card (grid layout)
```tsx
export function ProductCardVertical({ name, price, imageSrc, imageAlt, circleBg = 'bg-terracotta-300' }: ProductCardProps) {
  return (
    <article className="
      group
      flex flex-col items-center gap-4
      bg-white rounded-2xl
      p-6 pt-8
      shadow-warm-sm
      border border-cream-200
      transition-all duration-[400ms]
      hover:shadow-warm-lg hover:-translate-y-2
      cursor-pointer
    ">
      <div className={`
        relative w-32 h-32 rounded-full overflow-hidden
        ${circleBg}
        shadow-warm-md
        transition-transform duration-[300ms] ease-[var(--ease-bounce)]
        group-hover:scale-[1.06]
      `}>
        <img src={imageSrc} alt={imageAlt} className="w-full h-full object-cover" />
      </div>

      <div className="flex flex-col items-center gap-1 text-center">
        <h3 className="font-display font-bold text-lg text-espresso-400 leading-snug">{name}</h3>
        <PriceTag price={price} />
      </div>
    </article>
  )
}
```

---

## 6. Hero Section

### Layout
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   [Headline large]          ┌──────────────┐   ○ COFFEE   │
│   bold display font         │  Product img │   ○ DRINKS   │
│                             │  on circle   │   ○ TEA      │
│   [Body copy paragraph]     └──────────────┘   ○ BAKERY   │
│                                                             │
│   [Get Promo ▶]                                             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Classes
```tsx
// sections/Hero.tsx
export function HeroSection() {
  return (
    <section className="
      relative w-full bg-cream-100 overflow-hidden
      py-16 md:py-24 lg:py-28
    ">
      {/* Decorative circle backdrop */}
      <div className="
        absolute right-[30%] top-1/2 -translate-y-1/2
        w-72 h-72 md:w-96 md:h-96
        rounded-full bg-terracotta-300/20
        pointer-events-none
      " aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_auto] gap-12 items-center">

          {/* Left: copy */}
          <div className="flex flex-col gap-6 max-w-lg">
            <h1 className="
              font-display font-black
              text-[clamp(2.5rem,5vw,4rem)]
              leading-[1.05] tracking-[-0.02em]
              text-espresso-400
              hero-title  {/* animation class from style-guide §7.4 */}
            ">
              When Life Gives You Lemons, Trade Them For Coffee!!
            </h1>

            <p className="
              font-sans text-base md:text-lg leading-relaxed
              text-espresso-100
              hero-body
            ">
              Shake up your taste buds with a chocolate delight.
              Chill out with our chocolicious shakes.
            </p>

            <div className="hero-cta">
              {/* Primary CTA Button (see Button spec §1) */}
            </div>
          </div>

          {/* Centre: hero product image */}
          <div className="
            relative flex items-center justify-center
            hero-image
          ">
            {/* coloured circle backdrop */}
            <div className="
              absolute w-72 h-72 rounded-full
              bg-terracotta-300/30
            " aria-hidden="true" />
            <img
              src="/images/hero-drink.png"
              alt="Chocolate shake with whipped cream"
              className="relative z-10 w-64 h-auto drop-shadow-2xl"
            />
          </div>

          {/* Right: category icons column */}
          <div className="hidden lg:flex flex-col gap-6">
            {CATEGORIES.map(cat => (
              <CategoryIcon key={cat.label} {...cat} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
```

---

## 7. Section Title

```tsx
// components/SectionTitle.tsx
interface SectionTitleProps {
  eyebrow?: string   // small ALL-CAPS label above
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export function SectionTitle({ eyebrow, title, subtitle, align = 'left' }: SectionTitleProps) {
  const base = align === 'center' ? 'items-center text-center' : 'items-start'

  return (
    <div className={`flex flex-col gap-2 ${base}`}>
      {eyebrow && (
        <span className="
          font-sans text-xs font-semibold
          tracking-[0.15em] uppercase
          text-terracotta-300
        ">
          {eyebrow}
        </span>
      )}
      <h2 className="
        font-display font-bold
        text-[clamp(2rem,4vw,3rem)]
        leading-[1.1] tracking-[-0.02em]
        text-espresso-400
      ">
        {title}
      </h2>
      {subtitle && (
        <p className="
          font-sans text-base md:text-lg leading-relaxed
          text-espresso-100 max-w-xl
        ">
          {subtitle}
        </p>
      )}
    </div>
  )
}
```

---

## 8. Price Tag

```tsx
// components/PriceTag.tsx
interface PriceTagProps {
  price: string
  originalPrice?: string  // if on sale
  size?: 'sm' | 'md' | 'lg'
}

const sizeMap = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-xl',
}

export function PriceTag({ price, originalPrice, size = 'md' }: PriceTagProps) {
  return (
    <div className="flex items-baseline gap-2">
      <span className={`
        font-sans font-bold text-terracotta-300
        ${sizeMap[size]}
      `}>
        {price}
      </span>
      {originalPrice && (
        <span className="font-sans text-sm text-espresso-50 line-through">
          {originalPrice}
        </span>
      )}
    </div>
  )
}
```

---

## 9. Badge / Tag

```tsx
// components/Badge.tsx
type BadgeVariant = 'new' | 'hot' | 'sale' | 'featured' | 'category'

const variantMap: Record<BadgeVariant, string> = {
  new:      'bg-teal-400 text-cream-50',
  hot:      'bg-terracotta-300 text-cream-50',
  sale:     'bg-rose-400 text-cream-50',
  featured: 'bg-gold-300 text-espresso-400',
  category: 'bg-cream-200 text-espresso-200',
}

export function Badge({ label, variant = 'category' }: { label: string; variant?: BadgeVariant }) {
  return (
    <span className={`
      inline-flex items-center justify-center
      rounded-pill
      px-3 py-0.5
      font-sans text-xs font-semibold
      tracking-[0.05em] uppercase
      ${variantMap[variant]}
    `}>
      {label}
    </span>
  )
}
```

---

## 10. Product Grid

```tsx
// sections/ProductGrid.tsx
export function ProductGrid({ products }: { products: ProductCardProps[] }) {
  return (
    <section className="w-full bg-cream-200/50">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20 py-16 md:py-24">
        <SectionTitle
          eyebrow="Our Menu"
          title="Popular Picks"
          subtitle="Handcrafted for every mood and moment."
        />

        <div className="
          mt-10
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
          gap-6 md:gap-8
        ">
          {products.map(product => (
            <ProductCardVertical key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

## 11. Page Shell

The outer wrapper that matches the reference's dark-framed browser appearance.

```tsx
// app/layout.tsx  ← extend root layout
<html>
  <body className="
    min-h-screen
    bg-espresso-500           {/* outer dark shell */}
    flex items-center justify-center
    p-4 md:p-8
  ">
    <div className="
      w-full max-w-[1440px]
      bg-cream-100
      rounded-2xl overflow-hidden
      shadow-warm-2xl
    ">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  </body>
</html>
```

---

## 12. Divider

```tsx
// components/Divider.tsx
export function Divider({ className = '' }: { className?: string }) {
  return (
    <hr className={`
      w-full border-0 border-b border-cream-300
      ${className}
    `} />
  )
}
```

---

## Implementation Checklist

When building a new page or component, verify:

- [ ] Background uses `bg-cream-100` (not white) for warm tone
- [ ] Headings use `font-display` (Fraunces), not `font-sans`
- [ ] Shadows are `shadow-warm-*` (espresso-tinted), not default grey Tailwind shadows
- [ ] Buttons are `rounded-pill`, not `rounded-md` or `rounded-lg`
- [ ] Prices use `text-terracotta-300 font-bold`
- [ ] Focus rings use `ring-terracotta-300`
- [ ] Category circles use the designated color tokens (`bg-olive-400`, etc.)
- [ ] Images in circle containers use `rounded-full overflow-hidden`
- [ ] Hover states include `transition-all duration-[250ms]`
- [ ] Page shell has `bg-espresso-500` outer dark background + `rounded-2xl` inner card
- [ ] `@media (prefers-reduced-motion)` strips translate/animation

---

## Token Quick Reference Card

```
BACKGROUNDS     bg-cream-100 · bg-cream-200 · bg-white · bg-espresso-400
TEXT            text-espresso-400 · text-espresso-300 · text-espresso-100
ACCENT          text-terracotta-300 · bg-terracotta-300
PRICE           text-terracotta-300 font-bold
GOLD            bg-gold-300 · text-gold-300
SHADOWS         shadow-warm-sm / md / lg / xl · shadow-terracotta
RADIUS          rounded-pill (buttons) · rounded-full (circles) · rounded-xl (cards)
FONT DISPLAY    font-display font-black / font-bold
FONT BODY       font-sans font-medium / font-normal
TRANSITION      transition-all duration-[250ms] ease-[var(--ease-smooth)]
HOVER LIFT      hover:-translate-y-1 hover:shadow-warm-lg
FOCUS           focus-visible:ring-2 focus-visible:ring-terracotta-300 focus-visible:ring-offset-2
```
