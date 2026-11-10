import { useEffect, useRef, useState } from 'react'
import { venue } from '../data/venue'
import { EightBall } from './EightBall'

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

  // The menu only exists below 768px: never leave the page locked if the window grows.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const onChange = () => mq.matches && setOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    // Keep keyboard focus inside the header while the menu covers the page.
    for (const el of document.querySelectorAll('main, footer')) el.toggleAttribute('inert', open)
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      for (const el of document.querySelectorAll('main, footer')) el.removeAttribute('inert')
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b-2 transition-colors duration-200 ${
        scrolled || open ? 'border-cream/25 bg-ink' : 'border-transparent bg-transparent'
      }`}
    >
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-[1500px] items-center justify-between px-4 md:px-8">
        <a href="#top" className="group flex shrink-0 items-center gap-2.5 whitespace-nowrap font-display text-[1.7rem] uppercase leading-none tracking-wide" onClick={() => setOpen(false)}>
          {/* Subtle "nudge" on hover: a slight roll and lift, off for reduced motion */}
          <EightBall className="h-6 w-6 shrink-0 transition-transform duration-300 ease-out motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:-rotate-[25deg]" />
          <span>
            Linger Longer <span className="hidden sm:max-md:inline lg:inline">Lounge</span>
          </span>
        </a>

        <ul className="hidden items-center gap-5 md:flex lg:gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="label swipe whitespace-nowrap py-1 text-[0.8rem] tracking-[0.1em] lg:text-[0.9rem] lg:tracking-[0.12em]">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href={venue.directionsUrl} target="_blank" rel="noreferrer" className="label whitespace-nowrap border-2 border-cream px-3 py-2 text-[0.8rem] tracking-[0.1em] transition-colors lg:tracking-[0.12em] hover:border-orange hover:bg-orange hover:text-ink lg:text-[0.9rem]">
              Directions ↗
            </a>
          </li>
        </ul>

        <button
          ref={toggleRef}
          type="button"
          className="label -mr-2 flex h-12 items-center gap-2.5 px-2 text-[0.85rem] md:hidden"
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
              <a href={l.href} onClick={() => setOpen(false)} className="flex items-baseline justify-between gap-3 py-3 font-display text-[clamp(3rem,17vw,4.2rem)] uppercase leading-[0.9] active:text-orange">
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
          <a href={venue.phone.href} className="label py-3 text-center">
            Call {venue.phone.display}
          </a>
        </div>
      </div>
    </header>
  )
}
