'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { menuItems, CATEGORIES, CATEGORY_META, getItemsByCategory, type Category } from '@/lib/menu-data'
import { HERO_MENU, getItemImage } from '@/lib/pexels-images'

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<Category>(CATEGORIES[0])
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})

  function scrollToCategory(cat: Category) {
    setActiveCategory(cat)
    const slug = CATEGORY_META[cat].slug
    const el = document.getElementById(slug)
    if (el) {
      const navOffset = 4.5 * 16 + 52 // navbar height + sticky cat nav height
      const top = el.getBoundingClientRect().top + window.scrollY - navOffset - 20
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* ── Menu Hero ────────────────────────────────────────────────────── */}
      <section className="relative w-full min-h-[340px] md:min-h-[420px] overflow-hidden">
        <Image
          src={HERO_MENU}
          alt="Brew & Co full menu — specialty coffee, pastries and handcrafted food"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: 'center 40%' }}
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(16,8,4,0.70) 0%, rgba(16,8,4,0.30) 60%, #F5EDE0 100%)' }}
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-20 h-full min-h-[340px] md:min-h-[420px] flex flex-col justify-center py-20">
          <p className="font-sans text-xs font-semibold tracking-[0.20em] uppercase text-terracotta-300 mb-3">
            Brew &amp; Co · Shoreditch
          </p>
          <h1
            className="font-display font-black text-cream-50 leading-[1.05] tracking-[-0.02em] mb-4"
            style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)' }}
          >
            Our Menu
          </h1>
          <p className="font-sans text-base md:text-lg text-cream-200 max-w-md leading-relaxed">
            Everything made fresh, every day. Sourced with care, served with love.
          </p>
          <p className="font-sans text-sm text-cream-300 mt-2">
            {menuItems.length} items across {CATEGORIES.length} categories
          </p>
        </div>
      </section>

      {/* ── Sticky category nav ───────────────────────────────────────────── */}
      <div
        className="sticky z-[100] bg-cream-100/95 backdrop-blur-sm border-b border-cream-300"
        style={{ top: '4.5rem' }}
        role="navigation"
        aria-label="Menu categories"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20">
          <div className="flex gap-2 overflow-x-auto py-3 scrollbar-none"
            style={{ scrollbarWidth: 'none' }}
          >
            {CATEGORIES.map(cat => {
              const meta = CATEGORY_META[cat]
              const isActive = activeCategory === cat
              return (
                <button
                  key={cat}
                  onClick={() => scrollToCategory(cat)}
                  className={`
                    shrink-0
                    inline-flex items-center gap-2
                    rounded-pill px-4 py-2
                    font-sans text-sm font-semibold
                    transition-all duration-[200ms]
                    cursor-pointer
                    ${isActive
                      ? 'bg-espresso-400 text-cream-100 shadow-[0_2px_8px_rgba(30,16,8,0.25)]'
                      : 'bg-cream-200 text-espresso-200 hover:bg-cream-300 hover:text-espresso-400'
                    }
                  `}
                >
                  <span aria-hidden="true">{meta.icon}</span>
                  {cat}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* ── Menu sections ────────────────────────────────────────────────── */}
      <div className="bg-cream-100">
        {CATEGORIES.map((category, catIdx) => {
          const meta = CATEGORY_META[category]
          const items = getItemsByCategory(category)
          const isEven = catIdx % 2 === 0

          return (
            <section
              key={category}
              id={meta.slug}
              ref={el => { sectionRefs.current[meta.slug] = el }}
              className={`w-full py-16 md:py-20 ${isEven ? 'bg-cream-100' : 'bg-cream-200/40'}`}
            >
              <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20">
                {/* Category header */}
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-4">
                    <div className={`
                      w-12 h-12 rounded-full ${meta.color}
                      flex items-center justify-center text-xl
                      shadow-[0_2px_8px_rgba(30,16,8,0.18)]
                    `}>
                      {meta.icon}
                    </div>
                    <div>
                      <h2 className="font-display font-bold text-2xl md:text-3xl text-espresso-400 leading-tight">
                        {category}
                      </h2>
                      <p className="font-sans text-xs text-espresso-50 mt-0.5">
                        {items.length} items
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block w-px h-10 bg-cream-300" aria-hidden="true" />
                </div>

                {/* Items grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
                  {items.map((item, itemIdx) => (
                    <article
                      key={item.id}
                      className="
                        group
                        flex flex-col
                        bg-white rounded-xl overflow-hidden
                        shadow-[0_1px_3px_0_rgba(30,16,8,0.08)]
                        transition-all duration-[350ms]
                        hover:-translate-y-1.5 hover:shadow-[0_10px_20px_-4px_rgba(30,16,8,0.16)]
                        cursor-pointer
                      "
                    >
                      {/* Item image */}
                      <div className="relative w-full aspect-square overflow-hidden">
                        <Image
                          src={getItemImage(category, itemIdx, item.id)}
                          alt={item.name}
                          fill
                          className="object-cover transition-transform duration-[500ms] group-hover:scale-105"
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          loading="lazy"
                        />
                        {/* Badge */}
                        {item.badge && (
                          <span className={`
                            absolute top-2.5 right-2.5
                            rounded-pill px-2.5 py-1
                            font-sans text-[10px] font-bold tracking-[0.05em] uppercase
                            shadow-[0_1px_4px_rgba(30,16,8,0.25)]
                            ${item.badge === 'Popular'
                              ? 'bg-terracotta-300 text-cream-50'
                              : 'bg-gold-300 text-espresso-400'
                            }
                          `}>
                            {item.badge === 'Popular' ? '★ Popular' : '♥ Favourite'}
                          </span>
                        )}
                      </div>

                      {/* Text */}
                      <div className="flex flex-col gap-1.5 p-3.5 pb-4 flex-1">
                        <h3 className="font-display font-bold text-sm md:text-base text-espresso-400 leading-snug">
                          {item.name}
                        </h3>
                        <p className="font-sans text-xs leading-relaxed text-espresso-100 line-clamp-2 flex-1">
                          {item.description}
                        </p>
                        <div className="flex items-center justify-between mt-2 pt-2 border-t border-cream-200">
                          <span className="font-sans font-bold text-base text-terracotta-300">
                            {item.price}
                          </span>
                          <button
                            className="
                              w-7 h-7 rounded-full bg-espresso-400 text-cream-100
                              flex items-center justify-center text-xs
                              transition-all duration-[200ms]
                              hover:bg-terracotta-300 hover:scale-110
                              focus-visible:outline-none focus-visible:ring-2
                              focus-visible:ring-terracotta-300
                              cursor-pointer
                            "
                            aria-label={`Add ${item.name} to order`}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          )
        })}
      </div>

      {/* ── Bottom CTA ────────────────────────────────────────────────────── */}
      <section className="w-full bg-espresso-400 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20 text-center">
          <h2 className="font-display font-bold text-cream-100 mb-3"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}
          >
            Ready to visit?
          </h2>
          <p className="font-sans text-cream-300 text-base mb-8 max-w-md mx-auto leading-relaxed">
            Come in and let us make you something special.
            14 Redchurch Street, Shoreditch.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://maps.google.com/?q=14+Redchurch+Street+Shoreditch+London"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                rounded-pill border-2 border-cream-300/50 text-cream-100
                px-7 py-3.5 font-sans text-sm font-semibold
                transition-all duration-[200ms]
                hover:bg-cream-100 hover:text-espresso-400 hover:border-cream-100
                focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-cream-100
              "
            >
              📍 Get Directions
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
