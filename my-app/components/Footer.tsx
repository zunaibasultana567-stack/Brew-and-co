import Link from 'next/link'

const OPENING_HOURS = [
  { days: 'Mon – Fri', hours: '7:00 AM – 8:00 PM' },
  { days: 'Saturday',  hours: '8:00 AM – 9:00 PM' },
  { days: 'Sunday',    hours: '8:00 AM – 7:00 PM' },
]

const NAV_LINKS = [
  { label: 'Home',  href: '/' },
  { label: 'Menu',  href: '/menu' },
  { label: 'About', href: '/about' },
]

export default function Footer() {
  return (
    <footer className="bg-espresso-400 text-cream-100">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <span className="text-2xl" aria-hidden="true">☕</span>
              <span className="font-display font-black text-xl text-cream-100 tracking-tight">
                Brew &amp; Co.
              </span>
            </div>
            <p className="font-sans text-sm leading-relaxed text-cream-300 max-w-xs">
              Specialty coffee, fresh pastries and handcrafted lunches in the
              heart of Shoreditch, London. Every cup is a craft.
            </p>
            <address className="not-italic font-sans text-sm text-cream-300 leading-relaxed">
              14 Redchurch Street<br />
              Shoreditch<br />
              London E2 7DJ
            </address>
            {/* Social links */}
            <div className="flex items-center gap-4 mt-1">
              {['Instagram', 'TikTok', 'X'].map(platform => (
                <a
                  key={platform}
                  href="#"
                  aria-label={platform}
                  className="
                    font-sans text-xs font-medium tracking-wide
                    text-cream-400 hover:text-cream-100
                    transition-colors duration-[150ms]
                    underline underline-offset-2
                  "
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation column */}
          <div>
            <h3 className="
              font-sans text-xs font-semibold tracking-[0.15em] uppercase
              text-cream-400 mb-5
            ">
              Navigate
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="
                      font-sans text-sm text-cream-300
                      hover:text-cream-100
                      transition-colors duration-[150ms]
                    "
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="mailto:hello@brewandco.co.uk"
                  className="font-sans text-sm text-cream-300 hover:text-cream-100 transition-colors duration-[150ms]"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Hours column */}
          <div>
            <h3 className="
              font-sans text-xs font-semibold tracking-[0.15em] uppercase
              text-cream-400 mb-5
            ">
              Opening Hours
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              {OPENING_HOURS.map(({ days, hours }) => (
                <li key={days} className="flex justify-between items-baseline gap-4">
                  <span className="font-sans text-sm text-cream-300">{days}</span>
                  <span className="font-sans text-sm text-cream-100 font-medium tabular-nums">{hours}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-espresso-200">
              <p className="font-sans text-xs text-cream-400 leading-relaxed">
                Friday evenings: Open Mic Night from 7 PM<br />
                Saturday mornings: Coffee Tasting at 10 AM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="
          mt-14 pt-6 border-t border-espresso-200
          flex flex-col sm:flex-row items-start sm:items-center
          justify-between gap-3
        ">
          <p className="font-sans text-xs text-cream-400">
            © {new Date().getFullYear()} Brew &amp; Co. All rights reserved.
          </p>
          <p className="font-sans text-xs text-cream-400">
            Made with love in Shoreditch ☕
          </p>
        </div>
      </div>
    </footer>
  )
}
