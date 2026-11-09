import { venue } from '../data/venue'

function Row({ k, children }: { k: string; children: React.ReactNode }) {
  return (
    <div className="flex items-baseline justify-between gap-4 py-1.5">
      <dt className="shrink-0 font-bold uppercase tracking-widest">{k}</dt>
      <dd className="text-right">{children}</dd>
    </div>
  )
}

export function Visit() {
  const { address, phone, social } = venue
  return (
    <section id="visit" aria-labelledby="visit-title" className="relative overflow-hidden bg-orange pb-16 pt-14 text-ink md:pb-24 md:pt-20">
      <div className="mx-auto grid max-w-[1500px] gap-10 px-4 md:grid-cols-12 md:gap-8 md:px-8">
        <div className="md:col-span-7">
          <p className="label mb-3">Visit</p>
          <h2 id="visit-title" className="h-visit" data-reveal>
            Find us
          </h2>

          <address className="mt-6 not-italic" data-reveal>
            <p className="h-address font-display uppercase leading-[0.88]">
              {address.street}
              <br />
              <span className="outline-text [--stroke:var(--color-ink)]">
                {address.city}, {address.state} {address.zip}
              </span>
            </p>
          </address>

          <div className="mt-9 flex flex-wrap gap-x-5 gap-y-4" data-reveal>
            <a href={venue.directionsUrl} target="_blank" rel="noreferrer" className="btn btn-ink">
              Get directions ↗
            </a>
            <a href={phone.href} className="btn btn-line">
              Call {phone.display}
            </a>
          </div>
        </div>

        {/* The bar tab */}
        <div className="px-3 md:col-span-5 md:px-0 md:pt-10" data-reveal>
          <div className="mx-auto max-w-[26rem] rotate-1 drop-shadow-[8px_10px_0_rgba(17,16,15,0.9)] md:rotate-2">
            <div className="receipt px-6 pb-10 pt-7 text-[0.95rem] leading-snug">
              <p className="text-center font-display text-[2.6rem] uppercase leading-none">{venue.name}</p>
              <p className="mt-1 text-center text-[0.8rem] uppercase tracking-[0.2em]">
                {venue.pillars.join(' · ')}
              </p>
              <div className="dashes my-4" />
              <dl>
                <Row k="Where">
                  {address.street}
                  <br />
                  {address.city}, {address.state} {address.zip}
                </Row>
                <Row k="Phone">
                  <a href={phone.href} className="underline decoration-2 underline-offset-2 hover:bg-ink hover:text-cream">
                    {phone.display}
                  </a>
                </Row>
                <Row k="Insta">
                  <a href={social.instagram.url} target="_blank" rel="noreferrer" className="underline decoration-2 underline-offset-2 hover:bg-ink hover:text-cream">
                    {social.instagram.handle}
                  </a>
                </Row>
                <Row k="Brunch">{venue.brunch.days.replaceAll(' · ', ' / ')}</Row>
              </dl>
              <div className="dashes my-4" />
              <p className="font-bold uppercase tracking-widest">Hours</p>
              {venue.hours.length > 0 ? (
                <dl className="mt-1">
                  {venue.hours.map((h) => (
                    <Row key={h.days} k={h.days}>
                      {h.hours}
                    </Row>
                  ))}
                </dl>
              ) : (
                <p className="mt-1">
                  Check{' '}
                  <a href={social.instagram.url} target="_blank" rel="noreferrer" className="underline decoration-2 underline-offset-2 hover:bg-ink hover:text-cream">
                    Instagram
                  </a>{' '}
                  or call for current hours.
                </p>
              )}
              <div className="dashes my-4" />
              <div className="flex items-baseline justify-between font-bold uppercase tracking-widest">
                <span>Total</span>
                <span>One more round</span>
              </div>
              <p className="mt-5 text-center text-[0.8rem] uppercase tracking-[0.18em]">
                ✶ Thank you. Stay longer. ✶
              </p>
              <div aria-hidden="true" className="mx-auto mt-4 h-10 w-4/5 bg-[repeating-linear-gradient(90deg,#11100f_0_2px,transparent_2px_5px,#11100f_5px_9px,transparent_9px_11px,#11100f_11px_12px,transparent_12px_16px)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
