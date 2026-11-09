import { photos } from '../data/photos'
import { venue } from '../data/venue'

export function FoodDrinks() {
  return (
    <section id="food" aria-labelledby="food-title" className="relative bg-cream pb-16 pt-14 text-ink md:pb-24 md:pt-20">
      <div className="mx-auto max-w-[1500px] px-4 md:px-8">
        <header>
          <h2 id="food-title" className="h-food" data-reveal>
            Food <span className="font-groovy text-[0.6em] normal-case text-orange">&amp;</span>
            <br className="md:hidden" /> Drinks
          </h2>
          <div className="mt-6 flex flex-wrap items-end justify-between gap-x-10 gap-y-5 border-t-2 border-ink pt-5" data-reveal>
            <p className="max-w-[46ch] text-xl font-medium leading-snug md:text-2xl">
              Nobody’s plating anything with tweezers. Hot dogs from the kitchen, brunch on the weekend, cold beer
              and stiff drinks the whole time.
            </p>
            <p className="label text-ink/70">Hot dogs / Brunch / Beer / Cocktails</p>
          </div>
        </header>

        {/* Row 1 — the kitchen */}
        <div className="mt-9 grid gap-5 md:mt-12 md:grid-cols-12 md:gap-8">
          <figure className="photo aspect-[4/3] border-2 border-ink md:col-span-7 md:self-start" data-reveal>
            <img src={photos.dogFries.src} alt={photos.dogFries.alt} loading="lazy" decoding="async" />
            <figcaption className="label absolute left-0 top-0 bg-ink px-3 py-2 text-cream">Kitchen</figcaption>
          </figure>

          <div className="flex flex-col md:col-span-5">
            <div className="border-2 border-ink p-5 md:p-7" data-reveal>
              <p className="label text-ink/70">Kitchen by</p>
              <h3 className="mt-1 text-[4.5rem] md:text-[6rem]">{venue.kitchen.name}</h3>
              <p className="mt-3 max-w-[36ch]">
                Hot dogs done properly, fries on the side, napkins strongly advised. Der Wurst runs the kitchen and
                the menu changes when they feel like it.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
                <a href={venue.links.food} target="_blank" rel="noreferrer" className="btn btn-line">
                  See the menu ↗
                </a>
                <a href={venue.kitchen.url} target="_blank" rel="noreferrer" className="label swipe" style={{ '--swipe': 'var(--color-orange)' } as React.CSSProperties}>
                  {venue.kitchen.handle} ↗
                </a>
              </div>
            </div>
            <figure className="photo mt-6 aspect-[5/4] border-2 border-ink md:mt-8 md:ml-12 md:aspect-auto md:min-h-[220px] md:flex-1 md:rotate-1" data-reveal>
              <img src={photos.chiliDog.src} alt={photos.chiliDog.alt} loading="lazy" decoding="async" className="absolute inset-0" />
            </figure>
          </div>
        </div>

        {/* Row 2 — brunch + drinks */}
        <div className="mt-5 grid gap-5 md:mt-8 md:grid-cols-12 md:gap-8">
          <div className="relative flex flex-col justify-between overflow-hidden border-2 border-ink bg-pink p-5 md:col-span-5 md:-rotate-1 md:p-7" data-reveal>
            <svg viewBox="0 0 200 200" aria-hidden="true" className="spin-slow absolute -right-14 -top-14 h-52 w-52 text-orange">
              <path fill="currentColor" d="M100 0l14 52 38-38-14 52 52-14-38 38 52 14-52 14 38 38-52-14 14 52-38-38-14 52-14-52-38 38 14-52-52 14 38-38-52-14 52-14-38-38 52 14-14-52 38 38z" />
              <circle cx="100" cy="100" r="34" fill="#f2e9d8" />
            </svg>
            <p className="label relative">Weekend brunch by</p>
            <h3 className="relative mt-12 font-groovy text-[clamp(3.2rem,17vw,4rem)] normal-case leading-[0.9] md:mt-28 md:text-[5.4rem]">
              {venue.brunch.name}
            </h3>
            <p className="relative mt-3 font-display text-[2rem] uppercase leading-none md:text-[2.4rem]">{venue.brunch.days}</p>
            <p className="relative mt-3 max-w-[34ch] font-medium">
              Yes, Monday counts as the weekend here. Come nurse it.
            </p>
            <a href={venue.brunch.url} target="_blank" rel="noreferrer" className="label swipe relative mt-5 self-start" style={{ '--swipe': 'var(--color-cream)' } as React.CSSProperties}>
              {venue.brunch.handle} ↗
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 md:col-span-7 md:gap-8">
            <figure className="photo aspect-[3/4] border-2 border-ink" data-reveal>
              <img src={photos.beer.src} alt={photos.beer.alt} loading="lazy" decoding="async" className="object-[70%_center]" />
              <figcaption className="label absolute bottom-0 left-0 bg-ink px-3 py-2 text-cream">Cold ones</figcaption>
            </figure>
            <figure className="photo aspect-[3/4] border-2 border-ink md:mt-14" data-reveal>
              <img src={photos.cocktail.src} alt={photos.cocktail.alt} loading="lazy" decoding="async" />
              <figcaption className="label absolute bottom-0 left-0 bg-ink px-3 py-2 text-cream">Stiff ones</figcaption>
            </figure>
            <div className="col-span-2 flex flex-wrap items-center justify-between gap-4 border-t-2 border-ink pt-4" data-reveal>
              <p className="font-display text-[2.4rem] uppercase leading-none md:text-[3.2rem]">
                Happy hour is a <span className="font-groovy text-[0.8em] normal-case text-purple">real</span> thing here
              </p>
              <a href={venue.links.happyHour} target="_blank" rel="noreferrer" className="btn btn-ink" style={{ '--btn-shadow': 'var(--color-orange)' } as React.CSSProperties}>
                Happy hour ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
