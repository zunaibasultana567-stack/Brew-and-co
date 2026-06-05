'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ReservationModal from './ReservationModal'

const NAV_LINKS = [
  { label: 'Home',  href: '/' },
  { label: 'Menu',  href: '/menu' },
  { label: 'About', href: '/about' },
]

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [menuOpen, setMenuOpen]     = useState(false)
  const [modalOpen, setModalOpen]   = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <>
      <nav
        className={`
          sticky top-0 z-[200] w-full
          transition-all duration-[400ms]
          ${scrolled
            ? 'bg-cream-50/92 backdrop-blur-md border-b border-cream-300 shadow-[0_4px_6px_-1px_rgba(30,16,8,0.10)]'
            : 'bg-cream-100 border-b border-cream-300'
          }
        `}
        aria-label="Main navigation"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20 h-[4.5rem] flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="
              flex items-center gap-2
              font-display font-black text-xl text-espresso-400
              tracking-tight
              hover:text-espresso-300
              transition-colors duration-[150ms]
            "
          >
            <span className="text-2xl leading-none" aria-hidden="true">☕</span>
            Brew &amp; Co.
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = pathname === href
              return (
                <li key={label}>
                  <Link
                    href={href}
                    className={`
                      relative font-sans text-sm font-medium
                      transition-colors duration-[150ms]
                      after:absolute after:bottom-[-2px] after:left-0
                      after:h-[1.5px] after:bg-terracotta-300
                      after:transition-[width] after:duration-[250ms]
                      ${isActive
                        ? 'text-espresso-400 after:w-full'
                        : 'text-espresso-200 hover:text-espresso-400 after:w-0 hover:after:w-full'
                      }
                    `}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setModalOpen(true)}
              className="
                inline-flex items-center gap-2
                rounded-pill bg-terracotta-300 text-cream-50
                px-5 py-2.5
                font-sans text-sm font-semibold
                shadow-[0_4px_14px_0_rgba(199,91,42,0.35)]
                transition-all duration-[250ms]
                hover:bg-terracotta-200 hover:-translate-y-0.5
                hover:shadow-[0_6px_18px_0_rgba(199,91,42,0.45)]
                active:translate-y-0
                focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-terracotta-300 focus-visible:ring-offset-2
                cursor-pointer
              "
            >
              Reserve a Table
            </button>
          </div>

          {/* Mobile: hamburger */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="
              md:hidden
              w-10 h-10 rounded-full
              flex flex-col items-center justify-center gap-1.5
              hover:bg-cream-200
              transition-colors duration-[150ms]
              cursor-pointer
            "
          >
            <span className={`
              block h-0.5 bg-espresso-400 rounded-full
              transition-all duration-[250ms]
              ${menuOpen ? 'w-5 rotate-45 translate-y-2' : 'w-5'}
            `} />
            <span className={`
              block h-0.5 bg-espresso-400 rounded-full
              transition-all duration-[250ms]
              ${menuOpen ? 'w-0 opacity-0' : 'w-5'}
            `} />
            <span className={`
              block h-0.5 bg-espresso-400 rounded-full
              transition-all duration-[250ms]
              ${menuOpen ? 'w-5 -rotate-45 -translate-y-2' : 'w-5'}
            `} />
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`
          md:hidden overflow-hidden
          transition-all duration-[300ms]
          ${menuOpen ? 'max-h-64 border-t border-cream-300' : 'max-h-0'}
        `}>
          <div className="bg-cream-50 px-6 py-4 flex flex-col gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className={`
                  py-3 font-sans text-base font-medium
                  border-b border-cream-200 last:border-0
                  transition-colors duration-[150ms]
                  ${pathname === href ? 'text-terracotta-300' : 'text-espresso-200 hover:text-espresso-400'}
                `}
              >
                {label}
              </Link>
            ))}
            <button
              onClick={() => { setMenuOpen(false); setModalOpen(true) }}
              className="
                mt-3 w-full
                rounded-pill bg-terracotta-300 text-cream-50
                py-3 font-sans text-sm font-semibold
                transition-colors duration-[150ms]
                hover:bg-terracotta-200
                cursor-pointer
              "
            >
              Reserve a Table
            </button>
          </div>
        </div>
      </nav>

      <ReservationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
