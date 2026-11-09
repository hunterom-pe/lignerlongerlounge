# Linger Longer Lounge — website concept

An unofficial, private homepage redesign concept for Linger Longer Lounge (Phoenix, AZ) by Hunter Made Studio. Not commissioned by the bar, not deployed anywhere, and marked `noindex`.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # serve the production build
```

Stack: React 19, TypeScript, Vite, Tailwind CSS v4. No other runtime dependencies besides self-hosted fonts.

## Deploying (Netlify)

`netlify.toml` is already set up: build command `npm run build`, publish directory `dist`, an SPA fallback so refreshes and deep links work, and an `X-Robots-Tag: noindex, nofollow` header on every response. Connect the GitHub repo in Netlify and it will build with no extra settings.

The site stays out of search engines two ways: the header above and a `<meta name="robots">` tag in `index.html`. Remove both only once the owner approves a launch. (There is deliberately no `robots.txt` block, since that would stop crawlers from seeing the noindex.)

## Where things live

| What | File |
| --- | --- |
| Address, phone, links, hours, recurring nights | `src/data/venue.ts` |
| Events on the poster wall | `src/data/events.ts` |
| Every photo and its alt text | `src/data/photos.ts` (files in `src/assets/photos/`) |
| Colours, fonts, shared styles | `src/index.css` |
| Page sections | `src/components/` |
| The six sample flyers (SVG) | `src/components/posters/SamplePosters.tsx` |

### Updating events

Edit `src/data/events.ts`. For a real show, drop the flyer in `public/posters/` and set `posterImage: '/posters/your-flyer.jpg'` (4:5 works best). The wall layout adapts to any number of events. Set `eventsAreSamples = false` to remove the "sample flyers" notice.

## Design decisions

- **70 / 30.** Ink and cream carry almost everything. Orange is the one constant accent; pink, acid green and purple appear only as stickers, poster art and hover states. Food & Drinks flips to cream paper and Visit goes full orange, so the page has rhythm without every section shouting.
- **Type.** League Gothic (tall, condensed, flyer-headline) at very large sizes, Caprasimo (a Cooper-style 70s face) for the hand-stuck asides, Courier Prime for labels and the receipt, Libre Franklin for reading.
- **Hero.** The word LONGER physically stretches on load. The name is the joke, so the type tells it.
- **Poster wall.** Six original flyers in six different visual languages (xerox punk, psychedelic, gothic, neon, loud pink, western), taped up at slight angles. Phones get a swipeable rail.
- **Visit as a bar tab.** Practical info printed on a receipt, with large tap targets for directions and calling.
- **Texture and motion.** Film grain, halftone on the hero, hard offset shadows instead of soft ones, no rounded corners. Motion is limited to the hero stretch, a ticker, a slow-spinning badge, scroll reveals and poster hovers, all disabled under `prefers-reduced-motion`.

## What is real and what is not

Verified from lingerlongerlounge.com and @lingerlongeraz: name, address (6522 N 16th St, Phoenix, AZ 85016), phone ((602) 694-0342), Instagram / Facebook / Yelp links, "Food · Drinks · Games · Music", kitchen by Der Wurst, weekend brunch by Requinto (Sat/Sun/Mon), recurring nights (Open Mic Mondays, Trivia with Phx Trivia, Coreyoke, Bad Bitch Bingo), and the existing Food, Happy Hour and Live Music pages that buttons link to.

Not real: every event and performer on the poster wall, all photography (stock, see `CREDITS.md`), and the tagline and section copy, which are proposals rather than official branding.

## Needed for a production version

- **Hours.** Not published on the current site and third-party listings disagree, so none are shown. Add them in `venue.ts`.
- Original photography: the room, bar, pool table, stage, patio/exterior, Der Wurst and Requinto food, drinks, crowd shots.
- The real logo files and any brand fonts.
- Real flyers and the event calendar, plus ticket links.
- Current menus (Der Wurst, Requinto, drinks, happy hour) as text rather than images.
- Confirmation of age policy, cover norms, parking, accessibility, private event / booking contact.
- The owner's sign-off on tone and the tagline.

## Suggested next phase

1. Swap in real photography, logo and flyers.
2. Give events a simple editing workflow: a Google Sheet or a small headless CMS (Sanity, Decap) feeding the same `EventItem` shape, so whoever runs the calendar never touches code.
3. Add real pages for Menus, Happy Hour and a full Events calendar with past-event archive.
4. Add booking / private-event contact, Event schema markup, an Open Graph image, and remove the `noindex` tag at launch.
5. Responsive image sizes (`srcset`) once final photography is in.
