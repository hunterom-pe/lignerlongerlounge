/**
 * EVENTS — edit this file to change what shows on the poster wall.
 *
 * Each event needs a title, date, time and short description, plus a poster:
 *   - posterImage: path to a real flyer (drop the file in /public/posters and
 *     use e.g. '/posters/my-show.jpg'), OR
 *   - posterArt: one of the built-in sample posters drawn in code.
 *
 * !! Every event below is FICTIONAL. They exist only to show what the wall
 * !! could look like with the bar's real flyers. No real bookings are implied.
 */

export type PosterArtId = 'punk' | 'psych' | 'goth' | 'neon' | 'bingo' | 'western'

export type EventItem = {
  id: string
  title: string
  /** ISO date, YYYY-MM-DD */
  date: string
  time: string
  description: string
  posterArt?: PosterArtId
  posterImage?: string
  /** Optional ticket / info link */
  link?: { label: string; href: string }
  /** Small detail line: cover, age, etc. */
  detail?: string
}

export const eventsAreSamples = true

export const events: EventItem[] = [
  {
    id: 'parking-lot-seance',
    title: 'Parking Lot Séance',
    date: '2026-11-20',
    time: '8pm',
    detail: '$10 · 21+',
    description:
      'Three loud bands, one small room. With Coyote Dentist and Grandma’s Ashtray. Earplugs behind the bar.',
    posterArt: 'punk',
  },
  {
    id: 'sunburnt-boogie',
    title: 'Sunburnt Boogie',
    date: '2026-11-21',
    time: '9pm',
    detail: 'Free',
    description:
      'All-vinyl psych, soul and desert disco. The dance floor is wherever you happen to be standing.',
    posterArt: 'psych',
  },
  {
    id: 'moth-hymnal',
    title: 'Moth Hymnal',
    date: '2026-11-25',
    time: '8pm',
    detail: '$8 · 21+',
    description:
      'An evening of doom folk and murder ballads with Widow’s Almanac and The Low Pews. Candles provided.',
    posterArt: 'goth',
  },
  {
    id: 'slow-dance-forever',
    title: 'Slow Dance Forever',
    date: '2026-12-04',
    time: '9pm – close',
    detail: 'No cover',
    description:
      'Disco, italo and heartbreak under the mirror ball. Bring someone or find someone.',
    posterArt: 'neon',
  },
  {
    id: 'bingo-for-sinners',
    title: 'Bingo for Sinners',
    date: '2026-12-12',
    time: '8pm',
    detail: 'Free to play',
    description:
      'Five in a row wins a prize of questionable value. Cheaters will be heckled.',
    posterArt: 'bingo',
  },
  {
    id: 'cry-in-your-beer-karaoke',
    title: 'Cry in Your Beer Karaoke',
    date: '2026-12-17',
    time: '8pm',
    detail: 'Sign-ups at the bar',
    description:
      'Honky-tonk karaoke night. Sad songs encouraged, happy ones tolerated.',
    posterArt: 'western',
  },
]

const fmt = new Intl.DateTimeFormat('en-US', {
  weekday: 'short',
  month: 'short',
  day: 'numeric',
  timeZone: 'UTC',
})

/** "Fri, Nov 20" */
export function formatEventDate(iso: string) {
  return fmt.format(new Date(`${iso}T12:00:00Z`))
}
