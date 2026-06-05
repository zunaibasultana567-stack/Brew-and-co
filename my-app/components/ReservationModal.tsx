'use client'

import { useState, useEffect, useRef } from 'react'

interface ReservationModalProps {
  isOpen: boolean
  onClose: () => void
}

const TIME_SLOTS: string[] = []
for (let h = 7; h <= 21; h++) {
  const ampm = h < 12 ? 'AM' : 'PM'
  const hour12 = h > 12 ? h - 12 : h
  TIME_SLOTS.push(`${hour12}:00 ${ampm}`)
  if (h < 21) TIME_SLOTS.push(`${hour12}:30 ${ampm}`)
}

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [name, setName]       = useState('')
  const [party, setParty]     = useState('2')
  const [date, setDate]       = useState('')
  const [time, setTime]       = useState(TIME_SLOTS[4]) // default 9:00 AM
  const [submitted, setSubmitted] = useState(false)
  const overlayRef = useRef<HTMLDivElement>(null)

  const today = new Date().toISOString().split('T')[0]

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setSubmitted(false)
      setName('')
      setParty('2')
      setDate('')
      setTime(TIME_SLOTS[4])
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    if (isOpen) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  function handleOverlayClick(e: React.MouseEvent) {
    if (e.target === overlayRef.current) onClose()
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (!isOpen) return null

  const inputClass = `
    w-full rounded-sm border border-cream-300 bg-cream-50
    px-4 py-3 font-sans text-sm text-espresso-300
    placeholder:text-cream-400
    outline-none transition-all duration-[150ms]
    focus:border-terracotta-200 focus:ring-2 focus:ring-terracotta-300/30
    hover:border-cream-400
  `

  const labelClass = 'block font-sans text-xs font-semibold tracking-[0.08em] uppercase text-espresso-200 mb-1.5'

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[400] flex items-center justify-center p-4"
      style={{ background: 'rgba(16, 8, 4, 0.65)', backdropFilter: 'blur(4px)' }}
      aria-modal="true"
      role="dialog"
      aria-labelledby="reservation-title"
    >
      <div className="
        relative w-full max-w-md
        bg-cream-50 rounded-2xl
        p-8
        shadow-[0_25px_50px_-12px_rgba(30,16,8,0.50)]
        animate-[brew-fade-up_350ms_cubic-bezier(0.19,1,0.22,1)_both]
      ">
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close reservation form"
          className="
            absolute top-4 right-4
            w-8 h-8 rounded-full
            flex items-center justify-center
            text-espresso-50 hover:text-espresso-400
            hover:bg-cream-200
            transition-colors duration-[150ms]
            cursor-pointer
          "
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Header */}
        <div className="mb-7">
          <p className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-terracotta-300 mb-1">
            Book a Table
          </p>
          <h2 id="reservation-title" className="font-display font-bold text-2xl text-espresso-400 leading-snug">
            Reserve Your Spot
          </h2>
          <p className="font-sans text-sm text-espresso-100 mt-1">
            14 Redchurch Street, Shoreditch, London E2 7DJ
          </p>
        </div>

        {submitted ? (
          <div className="py-6 text-center">
            <div className="text-4xl mb-4">☕</div>
            <h3 className="font-display font-bold text-xl text-espresso-400 mb-2">
              We&apos;ll see you then!
            </h3>
            <p className="font-sans text-sm text-espresso-100">
              Your table for <strong className="text-espresso-400">{party}</strong> is reserved on{' '}
              <strong className="text-espresso-400">{date}</strong> at{' '}
              <strong className="text-espresso-400">{time}</strong>.
              <br />We&apos;ll send a confirmation to keep — see you soon, {name.split(' ')[0]}!
            </p>
            <button
              onClick={onClose}
              className="
                mt-6 inline-flex items-center justify-center
                rounded-pill bg-espresso-400 text-cream-100
                px-8 py-3 font-sans text-sm font-semibold
                hover:bg-espresso-300
                transition-colors duration-[150ms]
                cursor-pointer
              "
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label htmlFor="res-name" className={labelClass}>Your Name</label>
              <input
                id="res-name"
                type="text"
                required
                placeholder="e.g. Alex Johnson"
                value={name}
                onChange={e => setName(e.target.value)}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="res-party" className={labelClass}>Party Size</label>
              <select
                id="res-party"
                value={party}
                onChange={e => setParty(e.target.value)}
                className={inputClass}
              >
                {[1,2,3,4,5,6,7,8,9,10].map(n => (
                  <option key={n} value={n}>{n} {n === 1 ? 'guest' : 'guests'}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="res-date" className={labelClass}>Date</label>
                <input
                  id="res-date"
                  type="date"
                  required
                  min={today}
                  value={date}
                  onChange={e => setDate(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="res-time" className={labelClass}>Time</label>
                <select
                  id="res-time"
                  value={time}
                  onChange={e => setTime(e.target.value)}
                  className={inputClass}
                >
                  {TIME_SLOTS.map(slot => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="
                mt-1 w-full
                inline-flex items-center justify-center gap-2
                rounded-pill bg-espresso-400 text-cream-100
                px-8 py-4
                font-sans text-base font-semibold
                shadow-[0_8px_24px_0_rgba(30,16,8,0.35)]
                transition-all duration-[250ms]
                hover:bg-espresso-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_0_rgba(30,16,8,0.40)]
                active:translate-y-0
                focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-terracotta-300 focus-visible:ring-offset-2
                cursor-pointer
              "
            >
              Confirm Reservation
              <span className="
                w-6 h-6 rounded-full bg-terracotta-300
                flex items-center justify-center text-xs
              ">→</span>
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
