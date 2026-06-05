import Link from 'next/link'
import BrandMark from './BrandMark'

const NAV_LINKS = [
  { label: 'Home',  href: '/'      },
  { label: 'Menu',  href: '/menu'  },
  { label: 'About', href: '/about' },
]

export default function Footer() {
  return (
    <footer className="w-full bg-espresso-400 text-cream-200">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 font-display font-black text-xl text-cream-100 hover:text-cream-50 transition-colors duration-[150ms]"
            >
              <BrandMark size={36} />
              Brew &amp; Co.
            </Link>
            <p className="font-sans text-sm leading-relaxed text-cream-300 max-w-xs">
              Specialty coffee, fresh pastries and handcrafted lunches in the heart of Shoreditch, London.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h3 className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-cream-400">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-cream-300 hover:text-cream-100 transition-colors duration-[150ms]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit */}
          <div className="flex flex-col gap-4">
            <h3 className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-cream-400">
              Visit Us
            </h3>
            <address className="not-italic flex flex-col gap-2">
              <p className="font-sans text-sm text-cream-300 leading-relaxed">
                14 Redchurch Street<br />
                Shoreditch, London E2 7DJ
              </p>
              <p className="font-sans text-sm text-cream-300 leading-relaxed">
                Mon–Fri · 7:00 AM – 8:00 PM<br />
                Sat–Sun · 8:00 AM – 9:00 PM
              </p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-espresso-300 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-cream-400">
            © {new Date().getFullYear()} Brew &amp; Co. All rights reserved.
          </p>
          <p className="font-sans text-xs text-cream-400">
            Crafted with love in Shoreditch, London.
          </p>
        </div>
      </div>
    </footer>
  )
}
