'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ReservationModal from '@/components/ReservationModal'
import { getFeaturedItems } from '@/lib/menu-data'
import { HERO_HOME, getItemImage, EVENT_OPEN_MIC, EVENT_TASTING, EVENT_LATTE_ART } from '@/lib/pexels-images'

const FEATURED = getFeaturedItems()

const FEATURED_BG: Record<string, string> = {
  'flat-white':           'bg-olive-400',
  'caramel-frappuccino':  'bg-gold-300',
  'almond-croissant':     'bg-berry-400',
  'nutella-mudslide':     'bg-espresso-200',
  'chicken-pesto-panini': 'bg-teal-400',
  'lemon-tart':           'bg-terracotta-300',
}

const EVENTS = [
  {
    icon: '🎤',
    title: 'Open Mic Night',
    schedule: 'Every Friday · 7:00 PM',
    description:
      'Live music, spoken word and stand-up. Pull up a chair, grab a brew, and enjoy the talent right here on Redchurch Street.',
    detail: 'Free entry · Limited seating — reserve your table',
    accent: 'bg-terracotta-300',
    img: EVENT_OPEN_MIC,
  },
  {
    icon: '☕',
    title: 'Saturday Coffee Tasting',
    schedule: 'Every Saturday · 10:00 AM',
    description:
      'A guided journey through three single-origin coffees. Learn about sourcing, roasting profiles and brewing methods with James.',
    detail: '£15 per person · Includes tasting notes & takeaway bag',
    accent: 'bg-olive-400',
    img: EVENT_TASTING,
  },
  {
    icon: '🎨',
    title: 'Latte Art Workshop',
    schedule: 'First Sunday of the month · 11:00 AM',
    description:
      'Get behind the bar and learn the basics of milk-steaming and latte art from our head barista Sophie.',
    detail: '£25 per person · All experience levels welcome',
    accent: 'bg-teal-400',
    img: EVENT_LATTE_ART,
  },
]

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative w-full min-h-[600px] lg:min-h-[700px] overflow-hidden">
        {/* Background image */}
        <Image
          src={HERO_HOME}
          alt="Brew & Co café interior — warm lighting, specialty espresso bar"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(16,8,4,0.88) 0%, rgba(16,8,4,0.65) 50%, rgba(16,8,4,0.20) 100%)',
          }}
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-20 h-full min-h-[600px] lg:min-h-[700px] flex items-center">
          <div className="max-w-xl py-24">
            <p className="hero-animate-title font-sans text-xs font-semibold tracking-[0.20em] uppercase text-terracotta-300 mb-4">
              Shoreditch, London
            </p>
            <h1 className="hero-animate-body font-display font-black text-cream-50 leading-[1.05] tracking-[-0.02em] mb-6"
              style={{ fontSize: 'clamp(2.6rem, 5vw, 4.2rem)' }}
            >
              Crafted with<br />Love in London
            </h1>
            <p className="hero-animate-cta font-sans text-lg leading-relaxed text-cream-200 mb-10 max-w-md">
              Specialty coffee, fresh pastries and handcrafted lunches in the
              heart of Shoreditch. Every cup is a small act of devotion.
            </p>
            <div className="hero-animate-secondary flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/menu"
                className="
                  inline-flex items-center justify-center
                  rounded-pill border-2 border-cream-100/70 text-cream-100
                  px-8 py-4 font-sans text-base font-semibold
                  transition-all duration-[250ms]
                  hover:bg-cream-100 hover:text-espresso-400
                  focus-visible:outline-none focus-visible:ring-2
                  focus-visible:ring-cream-100 focus-visible:ring-offset-2
                  focus-visible:ring-offset-transparent
                "
              >
                Browse Our Menu
              </Link>
              <button
                onClick={() => setModalOpen(true)}
                className="
                  inline-flex items-center gap-3
                  rounded-pill bg-terracotta-300 text-cream-50
                  px-8 py-4 font-sans text-base font-semibold
                  shadow-[0_4px_14px_0_rgba(199,91,42,0.50)]
                  transition-all duration-[250ms]
                  hover:bg-terracotta-200 hover:-translate-y-0.5
                  hover:shadow-[0_8px_24px_0_rgba(199,91,42,0.55)]
                  active:translate-y-0
                  focus-visible:outline-none focus-visible:ring-2
                  focus-visible:ring-terracotta-300 focus-visible:ring-offset-2
                  cursor-pointer
                "
              >
                Reserve a Table
                <span className="w-6 h-6 rounded-full bg-cream-50/20 flex items-center justify-center text-sm">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom fade into cream */}
        <div
          className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
          style={{ background: 'linear-gradient(to top, #F5EDE0 0%, transparent 100%)' }}
          aria-hidden="true"
        />
      </section>

      {/* ── Fan Favourites ────────────────────────────────────────────────── */}
      <section className="w-full bg-cream-100 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20">
          {/* Section title */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <p className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-terracotta-300 mb-2">
                From Our Menu
              </p>
              <h2 className="font-display font-bold text-espresso-400 leading-[1.1] tracking-[-0.02em]"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                Fan Favourites
              </h2>
            </div>
            <Link
              href="/menu"
              className="
                inline-flex items-center gap-2
                font-sans text-sm font-semibold text-terracotta-300
                hover:text-terracotta-200
                transition-colors duration-[150ms]
                group
              "
            >
              See full menu
              <span className="
                transition-transform duration-[200ms]
                group-hover:translate-x-1
              ">→</span>
            </Link>
          </div>

          {/* Items grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-7">
            {FEATURED.map(item => (
              <article
                key={item.id}
                className="
                  group
                  flex flex-col
                  bg-white rounded-2xl overflow-hidden
                  shadow-[0_1px_3px_0_rgba(30,16,8,0.10)]
                  transition-all duration-[400ms]
                  hover:-translate-y-2 hover:shadow-[0_12px_24px_-4px_rgba(30,16,8,0.18)]
                  cursor-pointer
                "
              >
                {/* Image */}
                <div className={`relative w-full aspect-[4/3] overflow-hidden ${FEATURED_BG[item.id] ?? 'bg-cream-200'}`}>
                  <Image
                    src={getItemImage(item.category, 0, item.id)}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-[600ms] group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  {item.badge && (
                    <span className={`
                      absolute top-3 left-3
                      rounded-pill px-3 py-1
                      font-sans text-xs font-semibold tracking-[0.05em] uppercase
                      ${item.badge === 'Popular'
                        ? 'bg-terracotta-300 text-cream-50'
                        : 'bg-gold-300 text-espresso-400'
                      }
                    `}>
                      {item.badge}
                    </span>
                  )}
                </div>
                {/* Text */}
                <div className="flex flex-col gap-1.5 p-4 pb-5">
                  <p className="font-sans text-xs font-semibold tracking-[0.08em] uppercase text-espresso-50">
                    {item.category}
                  </p>
                  <h3 className="font-display font-bold text-base md:text-lg text-espresso-400 leading-snug">
                    {item.name}
                  </h3>
                  <p className="font-sans text-xs text-espresso-100 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                  <p className="mt-1 font-sans font-bold text-base text-terracotta-300">
                    {item.price}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Events ────────────────────────────────────────────────────────── */}
      <section className="w-full bg-cream-200/60 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20">
          <div className="mb-12">
            <p className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-terracotta-300 mb-2">
              What&apos;s On
            </p>
            <h2 className="font-display font-bold text-espresso-400 leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Upcoming Events
            </h2>
            <p className="font-sans text-base md:text-lg leading-relaxed text-espresso-100 mt-3 max-w-lg">
              More than a café — a community space. Join us for evenings and
              mornings worth getting out of bed for.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EVENTS.map(event => (
              <article
                key={event.title}
                className="
                  group
                  bg-white rounded-2xl overflow-hidden
                  shadow-[0_1px_3px_0_rgba(30,16,8,0.10)]
                  transition-all duration-[400ms]
                  hover:-translate-y-1 hover:shadow-[0_10px_20px_-4px_rgba(30,16,8,0.16)]
                "
              >
                {/* Event image */}
                <div className="relative w-full h-44 overflow-hidden">
                  <Image
                    src={event.img}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-[600ms] group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-espresso-400/40" aria-hidden="true" />
                  <div className={`
                    absolute top-4 left-4
                    w-10 h-10 rounded-full ${event.accent}
                    flex items-center justify-center text-lg
                    shadow-[0_2px_8px_rgba(30,16,8,0.30)]
                  `}>
                    {event.icon}
                  </div>
                </div>

                {/* Event text */}
                <div className="p-6 flex flex-col gap-3">
                  <p className="font-sans text-xs font-semibold tracking-[0.10em] uppercase text-terracotta-300">
                    {event.schedule}
                  </p>
                  <h3 className="font-display font-bold text-xl text-espresso-400 leading-snug">
                    {event.title}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed text-espresso-100">
                    {event.description}
                  </p>
                  <p className="font-sans text-xs text-espresso-50 italic">
                    {event.detail}
                  </p>
                  <button
                    onClick={() => setModalOpen(true)}
                    className="
                      mt-2 w-full
                      rounded-pill border-[1.5px] border-espresso-300 text-espresso-300
                      py-3 font-sans text-sm font-semibold
                      transition-all duration-[200ms]
                      hover:bg-espresso-400 hover:text-cream-100 hover:border-espresso-400
                      focus-visible:outline-none focus-visible:ring-2
                      focus-visible:ring-espresso-400 focus-visible:ring-offset-2
                      cursor-pointer
                    "
                  >
                    Reserve a Spot
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Visit us strip ────────────────────────────────────────────────── */}
      <section className="w-full bg-espresso-400 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display font-bold text-cream-100 text-2xl md:text-3xl mb-2">
              Come find us
            </h2>
            <p className="font-sans text-cream-300 text-sm leading-relaxed">
              14 Redchurch Street, Shoreditch, London E2 7DJ<br />
              Mon–Fri 7 AM–8 PM · Sat–Sun 8 AM–9 PM
            </p>
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="
              shrink-0
              inline-flex items-center gap-3
              rounded-pill bg-terracotta-300 text-cream-50
              px-8 py-4 font-sans text-base font-semibold
              shadow-[0_4px_14px_0_rgba(199,91,42,0.40)]
              transition-all duration-[250ms]
              hover:bg-terracotta-200 hover:-translate-y-0.5
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-terracotta-300 focus-visible:ring-offset-2
              focus-visible:ring-offset-espresso-400
              cursor-pointer
            "
          >
            Reserve a Table
            <span className="w-7 h-7 rounded-full bg-cream-50/20 flex items-center justify-center text-sm">→</span>
          </button>
        </div>
      </section>

      <ReservationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
