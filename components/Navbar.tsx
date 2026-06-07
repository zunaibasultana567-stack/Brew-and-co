'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import BrandMark from './BrandMark'
cimport ReservationModal from './ReservationModal'

const NAV_LINKS = [
  { label: 'Home',  href: '/'      },
  { label: 'Menu',  href: '/menu'  },
  { label: 'About', href: '/about' },
] as const

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const pathname = usePathname()

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
          ? 'bg-cream-50/90 backdrop-blur-md shadow-[0_4px_6px_-1px_rgba(30,16,8,0.10)] border-cream-200'
          : 'bg-cream-100'
        }
      `}
      aria-label="Main navigation"
    >
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-20 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-display font-black text-xl text-espresso-400 tracking-tight hover:text-espresso-300 transition-colors duration-[150ms]"
        >
          <BrandMark size={36} />
          Brew &amp; Co.
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`
                  font-sans text-sm font-medium
                  relative
                  after:absolute after:bottom-[-2px] after:left-0
                  after:h-[1.5px] after:bg-terracotta-300
                  after:transition-[width] after:duration-[250ms]
                  transition-colors duration-[150ms]
                  ${pathname === link.href
                    ? 'text-espresso-400 after:w-full'
                    : 'text-espresso-200 after:w-0 hover:text-espresso-400 hover:after:w-full'
                  }
                `}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button
            onClick={() => setModalOpen(true)}
            className="
              inline-flex items-center justify-center
              rounded-pill bg-terracotta-300 text-cream-50
              px-5 py-2.5 font-sans text-sm font-semibold
              shadow-[0_4px_14px_0_rgba(199,91,42,0.35)]
              transition-all duration-[250ms]
              hover:bg-terracotta-200 hover:-translate-y-0.5
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-terracotta-300 focus-visible:ring-offset-2
              cursor-pointer
            "
          >
            Reserve a Table
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(v => !v)}
        >
          <span className={`block w-6 h-0.5 bg-espresso-400 transition-transform duration-[250ms] ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block w-6 h-0.5 bg-espresso-400 transition-opacity duration-[250ms] ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-espresso-400 transition-transform duration-[250ms] ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      <ReservationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-cream-100 border-b border-cream-300 shadow-[0_4px_6px_-1px_rgba(30,16,8,0.10)] md:hidden">
          <ul className="flex flex-col py-4 px-6 gap-4" role="list">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-sans text-base font-medium text-espresso-300 hover:text-terracotta-300 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <button
                className="
                  inline-flex items-center justify-center w-full
                  rounded-pill bg-terracotta-300 text-cream-50
                  px-5 py-3 font-sans text-sm font-semibold
                  transition-all duration-[250ms]
                  hover:bg-terracotta-200
                  cursor-pointer
                "
                onClick={() => { setMenuOpen(false); setModalOpen(true) }}
              >
                Reserve a Table
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
