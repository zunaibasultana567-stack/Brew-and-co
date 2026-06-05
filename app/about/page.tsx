import type { Metadata } from 'next'
import Image from 'next/image'
import { HERO_ABOUT, PORTRAIT_SOPHIE, PORTRAIT_JAMES, GALLERY } from '@/lib/pexels-images'

export const metadata: Metadata = {
  title: 'Our Story · Brew & Co',
  description:
    'Meet Sophie and James — the two friends who turned a shared obsession with specialty coffee into Shoreditch\'s most beloved neighbourhood café.',
}

const VALUES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"
          fill="currentColor"/>
      </svg>
    ),
    accent: 'bg-terracotta-300 text-cream-50',
    title: 'Quality Without Compromise',
    body: 'We source single-origin beans from micro-farms across Ethiopia, Colombia and Guatemala, and work only with roasters who share our obsession. Every espresso is dialled in fresh.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    accent: 'bg-olive-400 text-cream-50',
    title: 'Rooted in Community',
    body: 'From Open Mic nights to Saturday coffee tastings, Brew & Co is a gathering place first and a café second. Our regulars are our family, and our door is always open.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    accent: 'bg-teal-400 text-cream-50',
    title: 'Sustainably Sourced',
    body: 'Direct trade with our farm partners. Fully compostable packaging. Carbon-offset delivery. We believe great coffee shouldn\'t cost the planet.',
  },
]

const TIMELINE = [
  { year: '2018', event: 'Sophie and James meet at a World Barista Championship event in Copenhagen.' },
  { year: '2019', event: 'After months of planning over weekly cuppings, they sign a lease on Redchurch Street.' },
  { year: 'Feb 2020', event: 'Brew & Co opens its doors — two weeks before the first UK lockdown.' },
  { year: '2020', event: 'Pivot to takeaway and weekly coffee drop-offs builds a fiercely loyal community.' },
  { year: '2021', event: 'Dine-in returns. Saturday Coffee Tastings launch to a sold-out debut.' },
  { year: '2023', event: 'Open Mic Nights become a Shoreditch institution, drawing artists every Friday.' },
  { year: 'Today', event: 'Brewing, baking and building community — one cup at a time.' },
]

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative w-full min-h-[480px] md:min-h-[560px] overflow-hidden">
        <Image
          src={HERO_ABOUT}
          alt="Barista crafting a latte at Brew & Co"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: 'center 50%' }}
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(16,8,4,0.80) 0%, rgba(16,8,4,0.40) 100%)' }}
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-20 h-full min-h-[480px] md:min-h-[560px] flex flex-col justify-center py-24">
          <p className="font-sans text-xs font-semibold tracking-[0.20em] uppercase text-terracotta-300 mb-4">
            Est. February 2020
          </p>
          <h1
            className="font-display font-black text-cream-50 leading-[1.05] tracking-[-0.02em] mb-5"
            style={{ fontSize: 'clamp(2.6rem, 5vw, 4rem)' }}
          >
            Our Story
          </h1>
          <p className="font-sans text-lg md:text-xl text-cream-200 max-w-lg leading-relaxed">
            Two friends, one dream, a thousand cups later.
          </p>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
          style={{ background: 'linear-gradient(to top, #F5EDE0 0%, transparent 100%)' }}
          aria-hidden="true"
        />
      </section>

      {/* ── Opening story ─────────────────────────────────────────────────── */}
      <section className="w-full bg-cream-100 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <p className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-terracotta-300 mb-3">
              How It All Began
            </p>
            <p className="font-sans text-lg md:text-xl leading-relaxed text-espresso-100">
              Brew &amp; Co was born out of two distinct obsessions — a love of extraordinary coffee
              and a belief that a great café can anchor a neighbourhood. Sophie Clarke and James Okafor
              first crossed paths in Copenhagen and spent the next year planning a café that felt like
              neither of them had ever found in London: warm, expert, and genuinely community-led.
            </p>
          </div>

          {/* Founders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {/* Sophie */}
            <div className="flex flex-col gap-6">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_10px_30px_-5px_rgba(30,16,8,0.20)]">
                <Image
                  src={PORTRAIT_SOPHIE}
                  alt="Sophie Clarke, co-founder of Brew & Co"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(30,16,8,0.50) 0%, transparent 60%)' }}
                  aria-hidden="true"
                />
                <div className="absolute bottom-5 left-5">
                  <p className="font-display font-bold text-xl text-cream-50">Sophie Clarke</p>
                  <p className="font-sans text-xs text-cream-200 tracking-wide">Co-founder &amp; Head Barista</p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-sans text-base leading-relaxed text-espresso-100">
                  Sophie grew up in Bethnal Green — a five-minute walk from where Brew &amp; Co now stands.
                  After studying art history at Edinburgh, she found herself working in cafés to make ends meet
                  and discovered something she hadn&apos;t expected: a deep, absorbing love for the craft of espresso.
                </p>
                <p className="font-sans text-base leading-relaxed text-espresso-100">
                  She trained under some of Melbourne&apos;s finest specialty roasters and returned to London in 2017
                  determined to bring that city&apos;s coffee culture home to East London. She oversees every aspect of
                  the in-store experience — from cup quality to playlist.
                </p>
                <p className="font-sans text-sm italic text-espresso-50 border-l-2 border-terracotta-300 pl-4 mt-1">
                  &ldquo;I want every customer to feel like they&apos;re sitting in my living room. Warm, known, and very
                  well caffeinated.&rdquo;
                </p>
              </div>
            </div>

            {/* James */}
            <div className="flex flex-col gap-6">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_10px_30px_-5px_rgba(30,16,8,0.20)]">
                <Image
                  src={PORTRAIT_JAMES}
                  alt="James Okafor, co-founder of Brew & Co"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(30,16,8,0.50) 0%, transparent 60%)' }}
                  aria-hidden="true"
                />
                <div className="absolute bottom-5 left-5">
                  <p className="font-display font-bold text-xl text-cream-50">James Okafor</p>
                  <p className="font-sans text-xs text-cream-200 tracking-wide">Co-founder &amp; Head of Operations</p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-sans text-base leading-relaxed text-espresso-100">
                  James is Nigerian-British and grew up between Lagos and Hackney. He studied food science at
                  UCL with no particular plan, then stumbled into the specialty coffee world during a work
                  placement at a London roastery — and never looked back.
                </p>
                <p className="font-sans text-base leading-relaxed text-espresso-100">
                  It was at a World Barista Championship event in Copenhagen that he met Sophie. They bonded
                  over a flight of natural Ethiopians and began sketching ideas on napkins. James runs operations
                  and supplier relationships, and hosts the beloved Saturday Coffee Tasting sessions.
                </p>
                <p className="font-sans text-sm italic text-espresso-50 border-l-2 border-olive-400 pl-4 mt-1">
                  &ldquo;Coffee is one of the most democratic and universal pleasures on the planet.
                  Our job is just to get out of its way.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Timeline ──────────────────────────────────────────────────────── */}
      <section className="w-full bg-cream-200/50 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20">
          <div className="mb-12 text-center">
            <p className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-terracotta-300 mb-2">
              The Journey
            </p>
            <h2
              className="font-display font-bold text-espresso-400 leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)' }}
            >
              A Brief History
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[2px] before:bg-cream-300">
              {TIMELINE.map((item, i) => (
                <div key={i} className="relative mb-8 last:mb-0">
                  <div className="
                    absolute -left-[1.65rem] top-0
                    w-5 h-5 rounded-full
                    bg-terracotta-300
                    border-2 border-cream-200
                    shadow-[0_2px_6px_rgba(199,91,42,0.35)]
                  " />
                  <div className="flex flex-col gap-1">
                    <span className="font-sans text-xs font-bold tracking-[0.10em] uppercase text-terracotta-300">
                      {item.year}
                    </span>
                    <p className="font-sans text-base text-espresso-200 leading-relaxed">
                      {item.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ────────────────────────────────────────────────────────── */}
      <section className="w-full bg-cream-100 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20">
          <div className="mb-12 text-center">
            <p className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-terracotta-300 mb-2">
              What We Stand For
            </p>
            <h2
              className="font-display font-bold text-espresso-400 leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)' }}
            >
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {VALUES.map(value => (
              <div
                key={value.title}
                className="
                  flex flex-col gap-5 p-7
                  bg-white rounded-2xl
                  shadow-[0_1px_3px_0_rgba(30,16,8,0.10)]
                  hover:shadow-[0_8px_20px_-4px_rgba(30,16,8,0.14)]
                  transition-shadow duration-[400ms]
                "
              >
                <div className={`
                  w-12 h-12 rounded-full ${value.accent}
                  flex items-center justify-center
                  shadow-[0_2px_8px_rgba(30,16,8,0.15)]
                `}>
                  {value.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-espresso-400 mb-3 leading-snug">
                    {value.title}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed text-espresso-100">
                    {value.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery strip ─────────────────────────────────────────────────── */}
      <section className="w-full bg-cream-100 pb-20 md:pb-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20">
          <p className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-terracotta-300 mb-6">
            Life at Brew &amp; Co
          </p>
        </div>
        <div className="pl-6 sm:pl-10 lg:pl-20 flex gap-4 overflow-x-auto pb-4 scrollbar-none"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {GALLERY.map((src, i) => (
            <div
              key={i}
              className="
                relative shrink-0 w-72 h-48 rounded-xl overflow-hidden
                shadow-[0_4px_12px_-2px_rgba(30,16,8,0.18)]
              "
              style={{ scrollSnapAlign: 'start' }}
            >
              <Image
                src={src}
                alt={`Brew & Co gallery image ${i + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-[600ms]"
                sizes="288px"
              />
            </div>
          ))}
          {/* Right padding spacer */}
          <div className="shrink-0 w-6 lg:w-20" aria-hidden="true" />
        </div>
      </section>
    </>
  )
}
