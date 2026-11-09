import { photos } from '../data/photos'
import { venue } from '../data/venue'

const tickerWords = [...venue.pillars, venue.neighborhood, 'Come for one', 'Stay for another']

function Ticker() {
  const run = (
    <span className="flex shrink-0 items-center">
      {tickerWords.map((w) => (
        <span key={w} className="flex items-center">
          <span className="px-5">{w}</span>
          <span className="text-[0.7em]">✶</span>
        </span>
      ))}
    </span>
  )
  return (
    <div aria-hidden="true" className="relative z-10 overflow-hidden border-y-2 border-ink bg-orange py-2 font-display text-[1.9rem] uppercase leading-none tracking-wide text-ink md:text-[2.3rem]">
      <div className="ticker flex w-max">
        {run}
        {run}
        {run}
        {run}
      </div>
    </div>
  )
}

function Badge() {
  return (
    <div aria-hidden="true" className="relative h-28 w-28 md:h-40 md:w-40">
      <svg viewBox="0 0 200 200" className="spin-slow h-full w-full">
        <defs>
          <path id="badge-circle" d="M100 100 m-78 0 a78 78 0 1 1 156 0 a78 78 0 1 1 -156 0" />
        </defs>
        <circle cx="100" cy="100" r="98" fill="#f65cb3" />
        <text fontFamily="'League Gothic', sans-serif" fontSize="27" letterSpacing="3.2" fill="#11100f">
          <textPath href="#badge-circle" textLength="486">
            FOOD ✶ DRINKS ✶ GAMES ✶ MUSIC ✶ FOOD ✶ DRINKS ✶ GAMES ✶ MUSIC ✶
          </textPath>
        </text>
        <circle cx="100" cy="100" r="50" fill="none" stroke="#11100f" strokeWidth="2" />
      </svg>
      <span className="absolute inset-0 grid place-items-center font-groovy text-[1.05rem] leading-none text-ink md:text-2xl">
        PHX
      </span>
    </div>
  )
}

export function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink">
      {/* Photo panel: bleeds off the top and right edge */}
      <div className="absolute inset-y-0 right-0 -z-10 w-full md:w-[68%]">
        <img
          src={photos.hero.src}
          alt={photos.hero.alt}
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover object-[60%_center] saturate-[0.9] contrast-[1.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/55 to-transparent md:via-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-ink/60 md:via-transparent" />
        <div className="halftone absolute inset-0 text-ink opacity-30" />
      </div>

      <p className="label absolute right-1.5 top-24 hidden origin-top-right -rotate-90 -translate-x-3 text-[0.62rem] text-cream/60 md:block">
        Placeholder photo · not the actual bar
      </p>

      <div className="mx-auto flex w-full max-w-[1500px] flex-1 flex-col justify-end px-4 pb-8 pt-24 md:px-8 md:pb-12">
        <div className="relative">
          <p className="label mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-cream md:mb-5">
            <span className="flicker inline-block h-2.5 w-2.5 rounded-full bg-acid shadow-[0_0_12px_2px] shadow-acid/70" />
            <span>{venue.neighborhood}</span>
            <span className="text-orange">/</span>
            <span>{venue.address.street}</span>
          </p>

          <h1 aria-label={venue.name} className="text-cream">
            <span aria-hidden="true" className="hero-word">
              Linger
            </span>
            <span aria-hidden="true" className="hero-word text-orange">
              <span className="hero-stretch">Longer</span>
            </span>
            <span aria-hidden="true" className="hero-word">
              Lounge
            </span>
          </h1>

          <div className="absolute -top-32 right-0 rotate-12 md:right-[6%] md:top-[18%]">
            <Badge />
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-6 md:mt-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-[16ch] -rotate-2 font-groovy text-[2rem] leading-[1.02] text-pink md:text-[2.9rem]">
            Come for one. Stay for another.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-4">
            <a href="#events" className="btn">
              What’s happening <span aria-hidden="true">↓</span>
            </a>
            <a href="#visit" className="btn btn-ghost">
              Find us
            </a>
          </div>
        </div>
      </div>

      <Ticker />
    </section>
  )
}
