/**
 * PHOTOGRAPHY — every image on the site is routed through this file.
 *
 * All current images are PLACEHOLDER STOCK from Unsplash (free license).
 * None of them show the actual bar. To swap in real venue photography,
 * replace the file in src/assets/photos (keep the name) or change the import
 * here and update the alt text.
 *
 * Sources are listed in CREDITS.md.
 */
import heroBar from '../assets/photos/hero-bar.webp'
import bandDim from '../assets/photos/band-dim.webp'
import poolPlayers from '../assets/photos/pool-players.webp'
import poolBalls from '../assets/photos/pool-balls.webp'
import neonOpen from '../assets/photos/neon-open.webp'
import discoBall from '../assets/photos/disco-ball.webp'
import chiliDog from '../assets/photos/chili-dog.webp'
import dogFries from '../assets/photos/dog-fries.webp'
import beerPour from '../assets/photos/beer-pour.webp'
import cocktail from '../assets/photos/cocktail.webp'
import punkJump from '../assets/photos/punk-jump.webp'

export const photos = {
  hero: {
    src: heroBar,
    alt: 'Silhouettes of people sitting at a dim bar in front of glowing red back-bar shelves',
  },
  band: { src: bandDim, alt: 'A band playing in the corner of a small, dark bar' },
  poolPlayers: { src: poolPlayers, alt: 'Two people shooting pool under string lights' },
  poolBalls: { src: poolBalls, alt: 'Pool balls scattered on green felt' },
  neon: { src: neonOpen, alt: 'Neon beer and open signs glowing in a bar window' },
  disco: { src: discoBall, alt: 'A mirror ball throwing dots of light across a green ceiling' },
  chiliDog: { src: chiliDog, alt: 'A loaded chili dog on a paper-lined tray' },
  dogFries: { src: dogFries, alt: 'A hot dog and fries in a paper-lined basket' },
  beer: { src: beerPour, alt: 'A beer being poured from the tap' },
  cocktail: { src: cocktail, alt: 'Two cocktails on a rubber bar mat' },
  punk: { src: punkJump, alt: '' },
} as const
