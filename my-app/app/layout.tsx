import type { Metadata } from 'next'
import { Fraunces, Geist, Geist_Mono } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Brew & Co · Specialty Coffee, London',
  description:
    'Specialty coffee, fresh pastries and handcrafted lunches in the heart of Shoreditch, London. Open 7 days a week.',
  keywords: ['specialty coffee', 'Shoreditch', 'London café', 'pastries', 'coffee shop'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        ${fraunces.variable}
        h-full antialiased
      `}
    >
      <body className="min-h-full bg-espresso-500 flex flex-col items-center justify-start p-3 md:p-5 lg:p-8">
        <div className="
          w-full max-w-[1440px]
          bg-cream-100
          rounded-2xl overflow-hidden
          shadow-[0_25px_50px_-12px_rgba(16,8,4,0.70)]
          flex flex-col min-h-[calc(100vh-4rem)]
        ">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
