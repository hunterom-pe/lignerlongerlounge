import { fullAddress, venue } from '../data/venue'

const nav = [
  { href: '#events', label: 'Events' },
  { href: '#food', label: 'Food & Drinks' },
  { href: '#about', label: 'About' },
  { href: '#visit', label: 'Visit' },
]

export function Footer() {
  const { social } = venue
  return (
    <footer className="border-t-2 border-ink bg-ink pb-8 pt-10">
      <div className="mx-auto max-w-[1500px] px-4 md:px-8">
        <p aria-hidden="true" className="h-footer select-none whitespace-nowrap font-display uppercase leading-[0.8] text-cream">
          Linger <span className="text-orange">Longer</span> Lounge
        </p>

        <div className="mt-8 grid gap-8 border-t-2 border-cream/25 pt-6 md:grid-cols-12">
          <nav aria-label="Footer" className="md:col-span-4">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {nav.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="label swipe inline-block py-2">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 md:col-span-4">
            <li>
              <a href={social.instagram.url} target="_blank" rel="noreferrer" className="label swipe inline-block py-2">
                Instagram ↗
              </a>
            </li>
            <li>
              <a href={social.facebook.url} target="_blank" rel="noreferrer" className="label swipe inline-block py-2">
                Facebook ↗
              </a>
            </li>
            <li>
              <a href={social.yelp.url} target="_blank" rel="noreferrer" className="label swipe inline-block py-2">
                Yelp ↗
              </a>
            </li>
          </ul>

          <address className="label not-italic leading-relaxed text-cream/80 md:col-span-4 md:text-right">
            {fullAddress}
            <br />
            <a href={venue.phone.href} className="swipe">
              {venue.phone.display}
            </a>
          </address>
        </div>

        <p className="label mt-8 text-[0.7rem] leading-relaxed text-cream/55">
          Unofficial design concept by Hunter Made Studio. Not commissioned by or affiliated with Linger Longer
          Lounge. Photography is placeholder stock and sample events are fictional.
        </p>
      </div>
    </footer>
  )
}
