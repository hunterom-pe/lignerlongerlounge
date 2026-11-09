import { useEffect, useRef, useState } from 'react'
import { venue } from '../data/venue'

const links = [
  { href: '#events', label: 'Events' },
  { href: '#food', label: 'Food & Drinks' },
  { href: '#about', label: 'About' },
  { href: '#visit', label: 'Visit' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b-2 transition-colors duration-200 ${
        scrolled || open ? 'border-cream/25 bg-ink' : 'border-transparent bg-transparent'
      }`}
    >
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-[1500px] items-center justify-between px-4 md:px-8">
        <a href="#top" className="group flex items-center gap-2.5 font-display text-[1.7rem] uppercase leading-none tracking-wide" onClick={() => setOpen(false)}>
          <svg viewBox="0 0 64 64" className="h-6 w-6 text-orange transition-transform duration-500 group-hover:rotate-180" aria-hidden="true">
            <path fill="currentColor" d="M32 2l6 21 21-6-15 15 15 15-21-6-6 21-6-21-21 6 15-15L5 17l21 6z" />
          </svg>
          <span>
            Linger Longer <span className="hidden sm:inline">Lounge</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="label swipe py-1">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href={venue.directionsUrl} target="_blank" rel="noreferrer" className="label border-2 border-cream px-3 py-2 transition-colors hover:border-orange hover:bg-orange hover:text-ink">
              Directions ↗
            </a>
          </li>
        </ul>

        <button
          ref={toggleRef}
          type="button"
          className="label -mr-2 flex h-11 items-center gap-2 px-2 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span>{open ? 'Close' : 'Menu'}</span>
          <span aria-hidden="true" className="relative block h-3 w-6">
            <span className={`absolute inset-x-0 top-0 h-0.5 bg-cream transition-transform ${open ? 'translate-y-[5px] rotate-45' : ''}`} />
            <span className={`absolute inset-x-0 bottom-0 h-0.5 bg-cream transition-transform ${open ? '-translate-y-[5px] -rotate-45' : ''}`} />
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-16 overflow-y-auto border-t-2 border-cream/25 bg-ink px-4 pb-10 pt-6 md:hidden"
      >
        <ul>
          {links.map((l, i) => (
            <li key={l.href} className="border-b-2 border-cream/20">
              <a href={l.href} onClick={() => setOpen(false)} className="flex items-baseline justify-between py-3 font-display text-[4.2rem] uppercase leading-[0.9] active:text-orange">
                <span>{l.label}</span>
                <span className="label text-orange">0{i + 1}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-col gap-4">
          <a href={venue.directionsUrl} target="_blank" rel="noreferrer" className="btn justify-center">
            Get directions ↗
          </a>
          <a href={venue.phone.href} className="label py-2 text-center">
            Call {venue.phone.display}
          </a>
        </div>
      </div>
    </header>
  )
}
