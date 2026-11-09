import { photos } from '../data/photos'
import { venue } from '../data/venue'

const features = [
  { n: '01', title: 'Pool', body: 'Rack ’em. Winner stays, loser buys.' },
  { n: '02', title: 'Games', body: 'Trivia, bingo, and whatever’s on the calendar this week.' },
  { n: '03', title: 'Music', body: 'Local bands, touring acts, DJs, open mics. Small room, close up.' },
  { n: '04', title: 'The neighborhood', body: `${venue.neighborhood}, on 16th Street. Your new regular spot.` },
]

export function Space() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative overflow-hidden bg-ink pb-16 pt-14 md:pb-24 md:pt-24">
      <div className="mx-auto max-w-[1500px] px-4 md:px-8">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          {/* Copy */}
          <div className="md:col-span-5">
            <div className="md:sticky md:top-24">
              <p className="label mb-3 text-acid">The space</p>
              <h2 id="about-title" className="h-space" data-reveal>
                Stay a
                <br />
                <span className="text-acid">while.</span>
              </h2>
              <p className="mt-6 max-w-[40ch] text-lg text-cream/85" data-reveal>
                It’s right there in the name. Linger Longer is a neighborhood bar you settle into: shoot some
                pool, lose at trivia, catch a band you’ve never heard of, and realize “just one” was never the plan.
              </p>

              <ol className="mt-8 border-t-2 border-cream/25">
                {features.map((f) => (
                  <li key={f.n} className="group grid grid-cols-[3.2rem_1fr] items-baseline gap-x-2 border-b-2 border-cream/25 py-4" data-reveal>
                    <span className="label text-orange">{f.n}</span>
                    <div>
                      <h3 className="text-[2.6rem] transition-transform duration-200 group-hover:translate-x-2 md:text-[3.2rem]">
                        {f.title}
                      </h3>
                      <p className="mt-1 text-cream/75">{f.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Photo stack */}
          <div className="relative md:col-span-7">
            <div className="grid grid-cols-6 gap-3 md:gap-5">
              <figure className="photo col-span-4 aspect-[4/5] border-2 border-cream/80 [--lift:1.3]" data-reveal>
                <img src={photos.poolPlayers.src} alt={photos.poolPlayers.alt} loading="lazy" decoding="async" />
              </figure>
              <figure className="photo col-span-2 mt-16 aspect-[2/3] self-start border-2 border-cream/80 md:mt-28" data-reveal>
                <img src={photos.disco.src} alt={photos.disco.alt} loading="lazy" decoding="async" />
              </figure>
              <figure className="photo col-span-6 -mt-10 aspect-[16/10] border-2 border-cream/80 [--lift:1.2] md:col-span-5 md:col-start-2 md:-mt-20" data-reveal>
                <img src={photos.band.src} alt={photos.band.alt} loading="lazy" decoding="async" />
              </figure>
              <figure className="photo col-span-3 aspect-[4/3] border-2 border-cream/80 md:-mt-10" data-reveal>
                <img src={photos.neon.src} alt={photos.neon.alt} loading="lazy" decoding="async" />
              </figure>
              <figure className="photo col-span-3 mt-8 aspect-[4/3] border-2 border-cream/80" data-reveal>
                <img src={photos.poolBalls.src} alt={photos.poolBalls.alt} loading="lazy" decoding="async" />
              </figure>
            </div>

            <p aria-hidden="true" className="pointer-events-none absolute -left-3 top-[38%] -rotate-6 bg-pink px-4 pb-1 pt-2 font-groovy text-[1.7rem] leading-none text-ink shadow-[5px_5px_0] shadow-ink md:-left-10 md:text-[2.6rem]">
              one more round?
            </p>
            <p className="label mt-3 text-right text-[0.62rem] tracking-[0.12em] text-cream/40">
              Placeholder photography
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
