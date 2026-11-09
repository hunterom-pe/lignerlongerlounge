/**
 * VENUE INFO — the single place to edit business details.
 *
 * Everything here was verified against lingerlongerlounge.com or the bar's
 * Instagram (@lingerlongeraz) in November 2026, except where marked TODO.
 */

export const venue = {
  name: 'Linger Longer Lounge',
  neighborhood: 'Uptown Phoenix',
  // Verified: the four words on the current homepage.
  pillars: ['Food', 'Drinks', 'Games', 'Music'],

  address: {
    street: '6522 N 16th St',
    city: 'Phoenix',
    state: 'AZ',
    zip: '85016',
  },
  phone: { display: '(602) 694-0342', href: 'tel:+16026940342' },

  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=Linger+Longer+Lounge%2C+6522+N+16th+St%2C+Phoenix%2C+AZ+85016',

  /**
   * TODO(owner): Hours are NOT published on the current website and third-party
   * listings disagree, so none are shown. Fill this in to display them, e.g.
   *   [{ days: 'Mon–Fri', hours: '4pm – 2am' }, { days: 'Sat–Sun', hours: '11am – 2am' }]
   */
  hours: [] as { days: string; hours: string }[],

  social: {
    instagram: { handle: '@lingerlongeraz', url: 'https://www.instagram.com/lingerlongeraz' },
    facebook: { url: 'https://www.facebook.com/lingerlongerloungeaz/' },
    yelp: { url: 'https://www.yelp.com/biz/linger-longer-lounge-phoenix' },
  },

  // Pages on the current live site that we link out to.
  links: {
    food: 'https://www.lingerlongerlounge.com/food',
    happyHour: 'https://www.lingerlongerlounge.com/happyhour',
    liveMusic: 'https://www.lingerlongerlounge.com/live-music',
  },

  // Verified from the Instagram bio.
  kitchen: {
    name: 'Der Wurst',
    handle: '@der_wurst_hot_dogs',
    url: 'https://www.instagram.com/der_wurst_hot_dogs/',
  },
  brunch: {
    name: 'Requinto',
    handle: '@requinto_phx',
    url: 'https://www.instagram.com/requinto_phx/',
    // Verified from the monthly calendar flyers.
    days: 'Saturday · Sunday · Monday',
  },

  /**
   * Recurring nights that show up again and again on the bar's weekly flyers.
   * Days move around from week to week, so only the consistent ones list a day.
   */
  regulars: [
    { name: 'Open Mic', note: 'Mondays' },
    { name: 'Trivia', note: 'with Phx Trivia' },
    { name: 'Coreyoke', note: 'karaoke, more or less' },
    { name: 'Bad Bitch Bingo', note: 'prizes & surprises' },
    { name: 'Requinto Brunch', note: 'Sat · Sun · Mon' },
  ],
}

export const fullAddress = `${venue.address.street}, ${venue.address.city}, ${venue.address.state} ${venue.address.zip}`
