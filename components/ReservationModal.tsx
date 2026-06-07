'use client'

import { useEffect, useRef, useState } from 'react'

interface ReservationModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  const [name,            setName]            = useState('')
  const [email,           setEmail]           = useState('')
  const [date,            setDate]            = useState('')
  const [time,            setTime]            = useState('')
  const [partySize,       setPartySize]       = useState('')
  const [specialRequests, setSpecialRequests] = useState('')
  const [isLoading,       setIsLoading]       = useState(false)
  const [isSuccess,       setIsSuccess]       = useState(false)
  const [error,           setError]           = useState<string | null>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (isOpen) {
      dialog.showModal()
      document.body.style.overflow = 'hidden'
    } else {
      dialog.close()
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) {
      setName(''); setEmail(''); setDate(''); setTime('')
      setPartySize(''); setSpecialRequests('')
      setIsLoading(false); setIsSuccess(false); setError(null)
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/reservation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          guestName: name,
          group: Number(partySize),
          email,
          date,
          time,
          specialRequests,
        }),
      })
      const data: { success?: boolean; error?: string } = await res.json()
      if (!res.ok) throw new Error(data.error ?? 'Something went wrong. Please try again.')
      setIsSuccess(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className="
        fixed inset-0 z-[400]
        w-full max-w-lg mx-auto my-auto
        bg-cream-100 rounded-2xl
        shadow-[0_25px_50px_-12px_rgba(16,8,4,0.70)]
        p-0 border-0
        backdrop:bg-espresso-500/60 backdrop:backdrop-blur-sm
      "
      onClose={onClose}
      onClick={e => { if (e.target === dialogRef.current) onClose() }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-8 pt-8 pb-6 border-b border-cream-300">
        <div>
          <p className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-terracotta-300 mb-1">
            Brew &amp; Co. · Shoreditch
          </p>
          <h2 className="font-display font-bold text-2xl text-espresso-400 leading-snug">
            Reserve a Table
          </h2>
        </div>
        <button
          onClick={onClose}
          aria-label="Close reservation modal"
          className="
            w-9 h-9 rounded-full
            flex items-center justify-center
            text-espresso-200 hover:text-espresso-400
            bg-cream-200 hover:bg-cream-300
            transition-colors duration-[150ms]
            cursor-pointer
          "
        >
          ✕
        </button>
      </div>

      {isSuccess ? (
        /* ── Success state ─────────────────────────────────────── */
        <div
          role="status"
          className="px-8 py-12 flex flex-col items-center text-center gap-5"
        >
          <div className="
            w-16 h-16 rounded-full
            bg-terracotta-300/15
            flex items-center justify-center
            text-terracotta-300 text-3xl
          ">
            ✓
          </div>
          <div>
            <h3 className="font-display font-bold text-xl text-espresso-400 mb-2">
              You&apos;re all set!
            </h3>
            <p className="font-sans text-sm text-espresso-100 leading-relaxed max-w-xs">
              Your table has been reserved, {name}. We&apos;ve sent a confirmation
              to <span className="font-semibold text-espresso-300">{email}</span> and
              look forward to seeing you on {date} at {time}.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="
              mt-2 rounded-pill bg-terracotta-300 text-cream-50
              px-8 py-3.5 font-sans text-sm font-semibold
              shadow-[0_4px_14px_0_rgba(199,91,42,0.40)]
              transition-all duration-[250ms]
              hover:bg-terracotta-200 hover:-translate-y-0.5
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-terracotta-300 focus-visible:ring-offset-2
              cursor-pointer
            "
          >
            Close
          </button>
        </div>
      ) : (
        /* ── Form ──────────────────────────────────────────────── */
        <form
          className="px-8 py-6 flex flex-col gap-5"
          onSubmit={handleSubmit}
        >
          {/* Name + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="flex flex-col gap-1.5">
              <span className="font-sans text-xs font-semibold text-espresso-200 tracking-wide">Full Name</span>
              <input
                type="text"
                required
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Sophie Clarke"
                className="
                  h-11 rounded-xl border border-cream-300 bg-white
                  px-4 font-sans text-sm text-espresso-300
                  placeholder:text-cream-400
                  outline-none transition-all duration-[150ms]
                  focus:border-terracotta-200 focus:ring-2 focus:ring-terracotta-300/30
                "
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="font-sans text-xs font-semibold text-espresso-200 tracking-wide">Email</span>
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="hello@example.com"
                className="
                  h-11 rounded-xl border border-cream-300 bg-white
                  px-4 font-sans text-sm text-espresso-300
                  placeholder:text-cream-400
                  outline-none transition-all duration-[150ms]
                  focus:border-terracotta-200 focus:ring-2 focus:ring-terracotta-300/30
                "
              />
            </label>
          </div>

          {/* Date + Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="flex flex-col gap-1.5">
              <span className="font-sans text-xs font-semibold text-espresso-200 tracking-wide">Date</span>
              <input
                type="date"
                required
                value={date}
                onChange={e => setDate(e.target.value)}
                className="
                  h-11 rounded-xl border border-cream-300 bg-white
                  px-4 font-sans text-sm text-espresso-300
                  outline-none transition-all duration-[150ms]
                  focus:border-terracotta-200 focus:ring-2 focus:ring-terracotta-300/30
                "
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="font-sans text-xs font-semibold text-espresso-200 tracking-wide">Time</span>
              <select
                required
                value={time}
                onChange={e => setTime(e.target.value)}
                className="
                  h-11 rounded-xl border border-cream-300 bg-white
                  px-4 font-sans text-sm text-espresso-300
                  outline-none transition-all duration-[150ms]
                  focus:border-terracotta-200 focus:ring-2 focus:ring-terracotta-300/30
                  cursor-pointer
                "
              >
                <option value="">Select time</option>
                {['7:00 AM','8:00 AM','9:00 AM','10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM','8:00 PM'].map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </label>
          </div>

          {/* Party size */}
          <label className="flex flex-col gap-1.5">
            <span className="font-sans text-xs font-semibold text-espresso-200 tracking-wide">Party Size</span>
            <select
              required
              value={partySize}
              onChange={e => setPartySize(e.target.value)}
              className="
                h-11 rounded-xl border border-cream-300 bg-white
                px-4 font-sans text-sm text-espresso-300
                outline-none transition-all duration-[150ms]
                focus:border-terracotta-200 focus:ring-2 focus:ring-terracotta-300/30
                cursor-pointer
              "
            >
              <option value="">Number of guests</option>
              {[1,2,3,4,5,6,7,8].map(n => (
                <option key={n} value={n}>{n} {n === 1 ? 'guest' : 'guests'}</option>
              ))}
            </select>
          </label>

          {/* Notes */}
          <label className="flex flex-col gap-1.5">
            <span className="font-sans text-xs font-semibold text-espresso-200 tracking-wide">
              Special Requests <span className="font-normal text-cream-400">(optional)</span>
            </span>
            <textarea
              rows={3}
              value={specialRequests}
              onChange={e => setSpecialRequests(e.target.value)}
              placeholder="Any dietary requirements, celebrations, or accessibility needs…"
              className="
                rounded-xl border border-cream-300 bg-white
                px-4 py-3 font-sans text-sm text-espresso-300
                placeholder:text-cream-400
                resize-none outline-none transition-all duration-[150ms]
                focus:border-terracotta-200 focus:ring-2 focus:ring-terracotta-300/30
              "
            />
          </label>

          {/* Error banner */}
          {error && (
            <div
              role="alert"
              className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 font-sans text-sm text-red-700"
            >
              {error}
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              type="submit"
              disabled={isLoading}
              aria-busy={isLoading}
              className="
                flex-1 inline-flex items-center justify-center
                rounded-pill bg-terracotta-300 text-cream-50
                px-8 py-3.5 font-sans text-sm font-semibold
                shadow-[0_4px_14px_0_rgba(199,91,42,0.40)]
                transition-all duration-[250ms]
                hover:bg-terracotta-200 hover:-translate-y-0.5
                focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-terracotta-300 focus-visible:ring-offset-2
                disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0
                cursor-pointer
              "
            >
              {isLoading ? 'Confirming…' : 'Confirm Reservation'}
            </button>
            <button
              type="button"
              onClick={onClose}
              disabled={isLoading}
              className="
                inline-flex items-center justify-center
                rounded-pill border-[1.5px] border-espresso-200 text-espresso-200
                px-6 py-3.5 font-sans text-sm font-semibold
                transition-all duration-[250ms]
                hover:bg-espresso-400 hover:text-cream-100 hover:border-espresso-400
                focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-espresso-400 focus-visible:ring-offset-2
                disabled:opacity-50 disabled:cursor-not-allowed
                cursor-pointer
              "
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </dialog>
  )
}
