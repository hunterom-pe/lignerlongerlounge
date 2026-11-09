import type { CSSProperties } from 'react'
import { events, eventsAreSamples, formatEventDate, type EventItem } from '../data/events'
import { venue } from '../data/venue'
import { SamplePoster } from './posters/SamplePosters'

/**
 * Desktop wall layout. Each slot is a column span + vertical nudge + tilt,
 * cycled through in order, so adding events to the data file just works.
 */
const slots = [
  { cls: 'md:col-span-5', tilt: -1.6, tape: -4, pop: 'var(--color-orange)' },
  { cls: 'md:col-span-4 md:mt-28', tilt: 1.3, tape: 3, pop: 'var(--color-pink)' },
  { cls: 'md:col-span-3 md:mt-6', tilt: -0.9, tape: -2, pop: 'var(--color-acid)' },
  { cls: 'md:col-span-3 md:mt-2', tilt: 1.6, tape: 5, pop: 'var(--color-purple)' },
  { cls: 'md:col-span-4 md:mt-4', tilt: -1.2, tape: -5, pop: 'var(--color-orange)' },
  { cls: 'md:col-span-5 md:-mt-14', tilt: 0.9, tape: 2, pop: 'var(--color-pink)' },
]

function PosterItem({ event, index }: { event: EventItem; index: number }) {
  const slot = slots[index % slots.length]
  const label = `Poster for ${event.title}`
  return (
    <li
      className={`poster-item w-[74vw] max-w-[340px] shrink-0 snap-start md:w-auto md:max-w-none ${slot.cls}`}
      data-reveal
      style={{ '--d': `${(index % 3) * 0.08}s` } as CSSProperties}
    >
      <article>
        <div
          className="poster relative"
          style={{ '--tilt': `${slot.tilt}deg`, '--tape-tilt': `${slot.tape}deg`, '--pop': slot.pop } as CSSProperties}
        >
          <span className="tape" aria-hidden="true" />
          {event.posterImage ? (
            <img src={event.posterImage} alt={label} loading="lazy" className="block aspect-[4/5] w-full object-cover" />
          ) : event.posterArt ? (
            <SamplePoster art={event.posterArt} label={label} />
          ) : null}
        </div>

        <div className="mt-6 border-t-2 border-cream/30 pt-3">
          <p className="label flex flex-wrap gap-x-3 text-orange">
            <time dateTime={event.date}>{formatEventDate(event.date)}</time>
            <span className="text-cream/50">/</span>
            <span>{event.time}</span>
            {event.detail && (
              <>
                <span className="text-cream/50">/</span>
                <span className="text-cream">{event.detail}</span>
              </>
            )}
          </p>
          <h3 className="mt-2 text-[2.4rem] leading-[0.9] md:text-[2.7rem]">{event.title}</h3>
          <p className="mt-2 max-w-[38ch] text-[0.98rem] text-cream/80">{event.description}</p>
          {event.link && (
            <a href={event.link.href} target="_blank" rel="noreferrer" className="label swipe mt-3 inline-block text-pink">
              {event.link.label} ↗
            </a>
          )}
        </div>
      </article>
    </li>
  )
}

export function Events() {
  return (
    <section id="events" aria-labelledby="events-title" className="relative overflow-hidden bg-soot pb-16 pt-14 md:pb-24 md:pt-24">
      <div className="mx-auto max-w-[1500px] px-4 md:px-8">
        <header className="mb-6 md:mb-14">
          <div className="mb-3 flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
            <p className="label text-orange">On the wall</p>
            {eventsAreSamples && (
              <p className="label order-last max-w-[22rem] -rotate-1 border-2 border-acid px-3 py-2 text-[0.72rem] leading-snug text-acid md:order-none md:rotate-1">
                Sample flyers. Every event shown here is made up for this design concept.
              </p>
            )}
          </div>
          <h2 id="events-title" className="h-events">
            What’s <span className="outline-text">Happening</span>
          </h2>
          <p className="label mt-5 flex items-center justify-end gap-2 text-cream/70 md:hidden" aria-hidden="true">
            Swipe the wall <span className="nudge text-base leading-none text-orange">→</span>
          </p>
        </header>
      </div>

      {/* Phones: a swipeable rail of flyers. Desktop: an uneven poster wall. */}
      <ul className="rail mx-auto flex max-w-[1500px] snap-x snap-mandatory scroll-px-4 gap-5 overflow-x-auto overscroll-x-contain px-4 pb-4 pt-4 md:grid md:grid-cols-12 md:items-start md:gap-x-10 md:gap-y-20 md:overflow-visible md:px-8">
        {events.map((e, i) => (
          <PosterItem key={e.id} event={e} index={i} />
        ))}
      </ul>

      <div className="mx-auto mt-12 max-w-[1500px] px-4 md:mt-24 md:px-8">
        <div className="grid gap-10 border-t-2 border-cream pt-8 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <h3 className="text-[3.6rem] md:text-[4.6rem]">
              The <span className="font-groovy text-[0.72em] normal-case text-pink">usual</span> suspects
            </h3>
            <p className="mt-4 max-w-[34ch] text-cream/80">
              Regular nights that keep turning up on the weekly flyer. The lineup moves around, so check before you
              show up with a pool cue on trivia night.
            </p>
          </div>

          <ul className="md:col-span-5">
            {venue.regulars.map((r) => (
              <li key={r.name} className="group flex items-baseline gap-3 border-b-2 border-cream/20 py-2.5 first:pt-0">
                <span className="font-display text-[2.2rem] uppercase leading-none transition-colors group-hover:text-orange md:text-[2.6rem]">
                  {r.name}
                </span>
                <span aria-hidden="true" className="mb-1 flex-1 border-b-2 border-dotted border-cream/30" />
                <span className="label text-right text-cream/75">{r.note}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-start gap-5 md:col-span-3 md:items-end">
            <a href={venue.social.instagram.url} target="_blank" rel="noreferrer" className="btn">
              This week’s lineup ↗
            </a>
            <a href={venue.links.liveMusic} target="_blank" rel="noreferrer" className="btn btn-ghost">
              Live music &amp; tickets ↗
            </a>
            <p className="label text-[0.7rem] text-cream/60 md:text-right">
              The real calendar lives on Instagram {venue.social.instagram.handle}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
