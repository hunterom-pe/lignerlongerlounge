import { useEffect, useState } from 'react'
import { venue } from '../data/venue'
import { isOpenAt } from '../lib/openStatus'

const check = () => isOpenAt(new Date(), venue.hours)

/**
 * Live OPEN NOW / CLOSED label for the hero.
 * The site renders only in the browser, so the first render already uses the
 * visitor's current time (no flash of a wrong status). Rechecks every 30s and
 * whenever the tab becomes visible again.
 */
export function OpenStatus() {
  const [open, setOpen] = useState(check)

  useEffect(() => {
    const update = () => setOpen(check())
    const id = window.setInterval(update, 30_000)
    const onVisible = () => document.visibilityState === 'visible' && update()
    document.addEventListener('visibilitychange', onVisible)
    window.addEventListener('focus', update)
    return () => {
      window.clearInterval(id)
      document.removeEventListener('visibilitychange', onVisible)
      window.removeEventListener('focus', update)
    }
  }, [])

  return (
    <span className="flex items-center gap-x-3" role="status" aria-live="polite">
      <span
        aria-hidden="true"
        className={
          open
            ? 'flicker inline-block h-2.5 w-2.5 rounded-full bg-acid shadow-[0_0_10px_1px] shadow-acid/60'
            : 'inline-block h-2.5 w-2.5 rounded-full bg-[#f16c64]'
        }
      />
      <span className={open ? 'text-acid' : 'text-[#f16c64]'}>{open ? 'Open now' : 'Closed'}</span>
    </span>
  )
}
