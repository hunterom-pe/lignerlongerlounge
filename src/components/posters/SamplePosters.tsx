/**
 * Six original, FICTIONAL sample flyers drawn in SVG.
 *
 * They stand in for the bar's real promotional artwork. Each one borrows a
 * different flavor from the flyers on the bar's Instagram (xerox punk,
 * psychedelic, gothic, neon, loud-pink party, western) without copying any.
 * In production, real flyer images replace these (see src/data/events.ts).
 */
import type { JSX } from 'react'
import type { PosterArtId } from '../../data/events'
import { photos } from '../../data/photos'

const INK = '#11100f'
const CREAM = '#f2e9d8'
const ORANGE = '#f77a28'
const PINK = '#f65cb3'
const ACID = '#a1c76a'
const PURPLE = '#8d56db'

const DISPLAY = '"League Gothic", "Arial Narrow", sans-serif'
const MONO = '"Courier Prime", ui-monospace, monospace'

type PosterProps = { label: string }

function Frame({ label, children }: PosterProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 400 500"
      role="img"
      aria-label={label}
      className="block h-auto w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  )
}

/* ---------- 1. Xerox punk ---------- */
function Punk({ label }: PosterProps) {
  const RED = '#e8351e'
  return (
    <Frame label={label}>
      <defs>
        <filter id="pk-xerox" colorInterpolationFilters="sRGB">
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncR type="discrete" tableValues="0 0.05 1 1" />
            <feFuncG type="discrete" tableValues="0 0.05 1 1" />
            <feFuncB type="discrete" tableValues="0 0.05 1 1" />
          </feComponentTransfer>
        </filter>
        <pattern id="pk-dots" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(30)">
          <circle cx="2.5" cy="2.5" r="1" fill={INK} />
        </pattern>
      </defs>
      <rect width="400" height="500" fill={CREAM} />
      <image
        href={photos.punk.src}
        x="-30"
        y="44"
        width="460"
        height="300"
        preserveAspectRatio="xMidYMid slice"
        filter="url(#pk-xerox)"
      />
      <rect x="0" y="44" width="400" height="300" fill="url(#pk-dots)" opacity="0.35" />
      <rect width="400" height="46" fill={INK} />
      <text x="200" y="30" textAnchor="middle" fontFamily={MONO} fontWeight="700" fontSize="13" letterSpacing="3" fill={CREAM}>
        LINGER LONGER LOUNGE PRESENTS
      </text>
      {/* slashed title blocks */}
      <g transform="rotate(-5 200 300)">
        <rect x="-10" y="232" width="330" height="76" fill={INK} />
        <text x="14" y="296" fontFamily={DISPLAY} fontSize="84" fill={CREAM} textLength="290" lengthAdjust="spacingAndGlyphs">
          PARKING LOT
        </text>
        <rect x="96" y="304" width="320" height="92" fill={RED} />
        <text x="112" y="384" fontFamily={DISPLAY} fontSize="104" fill={INK} textLength="270" lengthAdjust="spacingAndGlyphs">
          SÉANCE
        </text>
      </g>
      <path d="M0 404 L400 386 L400 500 L0 500 Z" fill={CREAM} />
      <text x="22" y="432" fontFamily='"Permanent Marker", cursive' fontSize="23" fill={INK} transform="rotate(-2 22 432)">
        w/ COYOTE DENTIST
      </text>
      <text x="58" y="460" fontFamily='"Permanent Marker", cursive' fontSize="23" fill={RED} transform="rotate(-2 58 460)">
        + GRANDMA’S ASHTRAY
      </text>
      <rect x="0" y="472" width="400" height="28" fill={INK} />
      <text x="200" y="491" textAnchor="middle" fontFamily={MONO} fontWeight="700" fontSize="13" letterSpacing="2" fill={CREAM}>
        FRI NOV 20 ✶ 8PM ✶ $10 ✶ 21+
      </text>
      <circle cx="338" cy="96" r="34" fill={RED} />
      <text x="338" y="92" textAnchor="middle" fontFamily={DISPLAY} fontSize="22" fill={CREAM} transform="rotate(12 338 96)">
        <tspan x="338">LOUD</tspan>
        <tspan x="338" dy="20">AS HELL</tspan>
      </text>
    </Frame>
  )
}

/* ---------- 2. Psychedelic ---------- */
function Psych({ label }: PosterProps) {
  const rings = [PURPLE, CREAM, PINK, INK, ACID, ORANGE, CREAM, PINK, PURPLE, INK, ORANGE, CREAM]
  return (
    <Frame label={label}>
      <defs>
        <filter id="ps-melt" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.011" numOctaves="2" seed="11" />
          <feDisplacementMap in="SourceGraphic" scale="70" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <clipPath id="ps-clip">
          <rect width="400" height="500" />
        </clipPath>
      </defs>
      <rect width="400" height="500" fill={ORANGE} />
      <g clipPath="url(#ps-clip)">
        <g filter="url(#ps-melt)">
          {rings.map((c, i) => (
            <circle key={i} cx="215" cy="230" r={330 - i * 27} fill={c} />
          ))}
        </g>
      </g>
      <g transform="rotate(-6 200 230)" fontFamily='"Shrikhand", Georgia, serif' textAnchor="middle">
        <text x="200" y="212" fontSize="76" fill={CREAM} stroke={INK} strokeWidth="10" strokeLinejoin="round" paintOrder="stroke" textLength="340" lengthAdjust="spacingAndGlyphs">
          Sunburnt
        </text>
        <text x="200" y="292" fontSize="86" fill={PINK} stroke={INK} strokeWidth="10" strokeLinejoin="round" paintOrder="stroke" textLength="300" lengthAdjust="spacingAndGlyphs">
          Boogie
        </text>
      </g>
      <rect x="0" y="408" width="400" height="92" fill={INK} />
      <text x="200" y="444" textAnchor="middle" fontFamily={DISPLAY} fontSize="34" fill={ORANGE} textLength="360" lengthAdjust="spacingAndGlyphs">
        ALL-VINYL PSYCH, SOUL &amp; DESERT DISCO
      </text>
      <text x="200" y="476" textAnchor="middle" fontFamily={MONO} fontWeight="700" fontSize="13" fill={CREAM} textLength="360" lengthAdjust="spacing">
        SAT NOV 21 · 9PM · FREE · LINGER LONGER LOUNGE
      </text>
      <rect x="0" y="0" width="400" height="40" fill={INK} />
      <text x="200" y="26" textAnchor="middle" fontFamily={MONO} fontWeight="700" fontSize="13" letterSpacing="4" fill={CREAM}>
        ✶ A LATE NITE DANCE PARTY ✶
      </text>
    </Frame>
  )
}

/* ---------- 3. Gothic folk ---------- */
function Goth({ label }: PosterProps) {
  const BG = '#0f1f18'
  const stars: [number, number, number][] = [
    [120, 170, 9], [282, 150, 7], [300, 250, 10], [104, 262, 6], [150, 330, 8], [262, 322, 6], [200, 128, 6],
  ]
  return (
    <Frame label={label}>
      <defs>
        <pattern id="gt-stitch" width="12" height="12" patternUnits="userSpaceOnUse">
          <path d="M2 2 L10 10 M10 2 L2 10" stroke={CREAM} strokeWidth="1.3" />
        </pattern>
      </defs>
      <rect width="400" height="500" fill={BG} />
      <rect x="12" y="12" width="376" height="24" fill="url(#gt-stitch)" />
      <rect x="12" y="464" width="376" height="24" fill="url(#gt-stitch)" />
      <rect x="12" y="36" width="24" height="428" fill="url(#gt-stitch)" />
      <rect x="364" y="36" width="24" height="428" fill="url(#gt-stitch)" />
      <text x="200" y="100" textAnchor="middle" fontFamily='"UnifrakturCook", serif' fontWeight="700" fontSize="62" fill={CREAM} textLength="300" lengthAdjust="spacingAndGlyphs">
        Moth Hymnal
      </text>
      <ellipse cx="200" cy="242" rx="118" ry="128" fill="#1c3a2b" stroke={CREAM} strokeWidth="2" />
      <ellipse cx="200" cy="242" rx="110" ry="120" fill="none" stroke={CREAM} strokeWidth="1" strokeDasharray="2 5" />
      {/* crescent */}
      <circle cx="200" cy="178" r="26" fill={CREAM} />
      <circle cx="212" cy="172" r="23" fill="#1c3a2b" />
      {/* moth */}
      <g fill={CREAM} stroke={BG} strokeWidth="1.5">
        <path d="M200 240 C170 200 122 206 112 232 C108 258 150 276 200 262 Z" />
        <path d="M200 240 C230 200 278 206 288 232 C292 258 250 276 200 262 Z" />
        <path d="M200 262 C176 266 150 284 158 312 C176 326 196 300 200 280 Z" />
        <path d="M200 262 C224 266 250 284 242 312 C224 326 204 300 200 280 Z" />
        <ellipse cx="200" cy="268" rx="7" ry="34" />
      </g>
      <g fill={BG}>
        <circle cx="150" cy="238" r="9" />
        <circle cx="250" cy="238" r="9" />
        <circle cx="176" cy="298" r="5" />
        <circle cx="224" cy="298" r="5" />
      </g>
      <path d="M197 236 C190 220 184 214 176 212 M203 236 C210 220 216 214 224 212" stroke={CREAM} strokeWidth="1.5" fill="none" />
      {stars.map(([x, y, s], i) => (
        <path key={i} fill={CREAM} d={`M${x} ${y - s} L${x + s * 0.25} ${y - s * 0.25} L${x + s} ${y} L${x + s * 0.25} ${y + s * 0.25} L${x} ${y + s} L${x - s * 0.25} ${y + s * 0.25} L${x - s} ${y} L${x - s * 0.25} ${y - s * 0.25} Z`} />
      ))}
      <text x="200" y="408" textAnchor="middle" fontFamily={DISPLAY} fontSize="30" letterSpacing="3" fill={CREAM}>
        DOOM FOLK &amp; MURDER BALLADS
      </text>
      <text x="200" y="430" textAnchor="middle" fontFamily={MONO} fontSize="12.5" letterSpacing="1.5" fill={CREAM}>
        WITH WIDOW’S ALMANAC · THE LOW PEWS
      </text>
      <text x="200" y="452" textAnchor="middle" fontFamily={MONO} fontWeight="700" fontSize="12.5" letterSpacing="1.5" fill={ACID}>
        WEDNESDAY NOVEMBER 25 · 8PM · $8
      </text>
    </Frame>
  )
}

/* ---------- 4. Neon disco ---------- */
function Neon({ label }: PosterProps) {
  return (
    <Frame label={label}>
      <defs>
        <filter id="nn-glow" x="-20%" y="-40%" width="140%" height="180%">
          <feGaussianBlur stdDeviation="5" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="nn-hue">
          <feColorMatrix type="hueRotate" values="150" />
        </filter>
        <clipPath id="nn-circle">
          <circle cx="200" cy="176" r="128" />
        </clipPath>
        <linearGradient id="nn-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0.45" stopColor="#0b0714" stopOpacity="0" />
          <stop offset="1" stopColor="#0b0714" />
        </linearGradient>
      </defs>
      <rect width="400" height="500" fill="#0b0714" />
      <g clipPath="url(#nn-circle)">
        <image href={photos.disco.src} x="40" y="-30" width="320" height="400" preserveAspectRatio="xMidYMid slice" filter="url(#nn-hue)" />
        <rect x="60" y="40" width="280" height="270" fill="url(#nn-fade)" />
      </g>
      <circle cx="200" cy="176" r="128" fill="none" stroke={PINK} strokeWidth="2.5" filter="url(#nn-glow)" />
      <circle cx="200" cy="176" r="140" fill="none" stroke={PURPLE} strokeWidth="1.5" />
      <g fontFamily='"Monoton", cursive' textAnchor="middle" filter="url(#nn-glow)">
        <text x="200" y="322" fontSize="68" fill={PINK} textLength="330" lengthAdjust="spacingAndGlyphs">
          SLOW
        </text>
        <text x="200" y="392" fontSize="68" fill="#ffd9ef" textLength="350" lengthAdjust="spacingAndGlyphs">
          DANCE
        </text>
      </g>
      <text x="200" y="434" textAnchor="middle" fontFamily={DISPLAY} fontSize="40" letterSpacing="16" fill={ACID}>
        FOREVER
      </text>
      <path d="M24 452 H376" stroke={PURPLE} strokeWidth="1.5" />
      <text x="200" y="474" textAnchor="middle" fontFamily={MONO} fontWeight="700" fontSize="12.5" fill={CREAM} textLength="352" lengthAdjust="spacing">
        DISCO · ITALO · HEARTBREAK — FRI DEC 4 · 9PM
      </text>
      <text x="200" y="30" textAnchor="middle" fontFamily={MONO} fontSize="12" fill={CREAM} textLength="340" lengthAdjust="spacing">
        NO COVER ✶ LINGER LONGER LOUNGE
      </text>
    </Frame>
  )
}

/* ---------- 5. Loud pink bingo ---------- */
function burst(cx: number, cy: number, outer: number, inner: number, points: number) {
  const pts: string[] = []
  for (let i = 0; i < points * 2; i++) {
    const r = i % 2 === 0 ? outer : inner
    const a = (Math.PI * i) / points - Math.PI / 2
    pts.push(`${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`)
  }
  return pts.join(' ')
}

function Bingo({ label }: PosterProps) {
  const balls: [number, number, string, string, string][] = [
    [62, 396, CREAM, INK, 'B7'],
    [132, 372, ACID, INK, 'I22'],
    [202, 398, INK, CREAM, 'N41'],
    [272, 372, ORANGE, INK, 'G58'],
    [340, 396, PURPLE, CREAM, 'O66'],
  ]
  return (
    <Frame label={label}>
      <rect width="400" height="500" fill={PINK} />
      <polygon points={burst(200, 190, 215, 150, 18)} fill={CREAM} />
      <polygon points={burst(200, 190, 215, 150, 18)} fill="none" stroke={INK} strokeWidth="3" />
      <text x="200" y="62" textAnchor="middle" fontFamily={DISPLAY} fontSize="30" letterSpacing="5" fill={INK}>
        ✶ FREE TO PLAY ✶
      </text>
      <text x="206" y="226" textAnchor="middle" fontFamily='"Caprasimo", Georgia, serif' fontSize="118" fill={INK} textLength="330" lengthAdjust="spacingAndGlyphs">
        BINGO
      </text>
      <text x="200" y="220" textAnchor="middle" fontFamily='"Caprasimo", Georgia, serif' fontSize="118" fill={PINK} stroke={INK} strokeWidth="4" paintOrder="stroke" textLength="330" lengthAdjust="spacingAndGlyphs">
        BINGO
      </text>
      <g transform="rotate(-7 200 280)">
        <text x="200" y="292" textAnchor="middle" fontFamily='"Shrikhand", Georgia, serif' fontSize="54" fill={PURPLE} stroke={INK} strokeWidth="8" strokeLinejoin="round" paintOrder="stroke">
          for Sinners
        </text>
      </g>
      {balls.map(([x, y, bg, fg, t]) => (
        <g key={t}>
          <circle cx={x + 4} cy={y + 4} r="34" fill={INK} />
          <circle cx={x} cy={y} r="34" fill={bg} stroke={INK} strokeWidth="3" />
          <circle cx={x} cy={y} r="21" fill="none" stroke={fg} strokeWidth="1.5" />
          <text x={x} y={y + 8} textAnchor="middle" fontFamily={DISPLAY} fontSize="24" fill={fg}>
            {t}
          </text>
        </g>
      ))}
      <rect x="0" y="446" width="400" height="54" fill={INK} />
      <text x="200" y="468" textAnchor="middle" fontFamily={MONO} fontWeight="700" fontSize="12.5" letterSpacing="1.5" fill={PINK}>
        PRIZES OF QUESTIONABLE VALUE
      </text>
      <text x="200" y="488" textAnchor="middle" fontFamily={MONO} fontWeight="700" fontSize="12.5" letterSpacing="1.5" fill={CREAM}>
        SAT DEC 12 · 8PM · LINGER LONGER LOUNGE
      </text>
    </Frame>
  )
}

/* ---------- 6. Western karaoke ---------- */
function Western({ label }: PosterProps) {
  const PAPER = '#ecdcba'
  const BROWN = '#3a2114'
  const RUST = '#c9501c'
  return (
    <Frame label={label}>
      <rect width="400" height="500" fill={PAPER} />
      <rect x="14" y="14" width="372" height="472" fill="none" stroke={BROWN} strokeWidth="5" />
      <rect x="24" y="24" width="352" height="452" fill="none" stroke={BROWN} strokeWidth="1.5" />
      <text x="200" y="58" textAnchor="middle" fontFamily={MONO} fontWeight="700" fontSize="13" letterSpacing="4" fill={BROWN}>
        TONIGHT’S SPECIAL: FEELINGS
      </text>
      <path d="M48 72 H176 M224 72 H352" stroke={BROWN} strokeWidth="2" />
      <path d="M200 62 L210 72 L200 82 L190 72 Z" fill={RUST} />
      <g fontFamily='"Rye", Georgia, serif' textAnchor="middle" fill={BROWN}>
        <text x="200" y="134" fontSize="56" textLength="250" lengthAdjust="spacingAndGlyphs">
          CRY IN
        </text>
        <text x="200" y="192" fontSize="50" textLength="318" lengthAdjust="spacingAndGlyphs">
          YOUR BEER
        </text>
      </g>
      {/* mug */}
      <g transform="translate(150 210)">
        <path d="M70 34 h22 a16 16 0 0 1 16 16 v28 a16 16 0 0 1 -16 16 h-22" fill="none" stroke={BROWN} strokeWidth="9" />
        <rect x="0" y="22" width="74" height="100" rx="4" fill={RUST} stroke={BROWN} strokeWidth="5" />
        <path d="M18 42 v64 M37 42 v64 M56 42 v64" stroke={PAPER} strokeWidth="5" opacity="0.55" />
        <g fill={PAPER} stroke={BROWN} strokeWidth="5">
          <circle cx="8" cy="20" r="14" />
          <circle cx="30" cy="12" r="17" />
          <circle cx="54" cy="14" r="15" />
          <circle cx="70" cy="22" r="11" />
        </g>
      </g>
      <path d="M118 236 c-12 18 -16 26 -16 34 a16 16 0 0 0 32 0 c0 -8 -4 -16 -16 -34 Z" fill="#7fb4c9" stroke={BROWN} strokeWidth="4" />
      <path d="M296 282 c-8 12 -10 17 -10 22 a10 10 0 0 0 20 0 c0 -5 -2 -10 -10 -22 Z" fill="#7fb4c9" stroke={BROWN} strokeWidth="3.5" />
      <text x="200" y="418" textAnchor="middle" fontFamily={DISPLAY} fontSize="92" fill={RUST} textLength="320" lengthAdjust="spacingAndGlyphs">
        KARAOKE
      </text>
      <text x="200" y="444" textAnchor="middle" fontFamily={MONO} fontWeight="700" fontSize="11.5" letterSpacing="1" fill={BROWN}>
        SAD SONGS ENCOURAGED · HAPPY ONES TOLERATED
      </text>
      <text x="200" y="464" textAnchor="middle" fontFamily={MONO} fontWeight="700" fontSize="11.5" letterSpacing="1" fill={BROWN}>
        THU DEC 17 · 8PM · LINGER LONGER LOUNGE
      </text>
    </Frame>
  )
}

const registry: Record<PosterArtId, (p: PosterProps) => JSX.Element> = {
  punk: Punk,
  psych: Psych,
  goth: Goth,
  neon: Neon,
  bingo: Bingo,
  western: Western,
}

export function SamplePoster({ art, label }: { art: PosterArtId; label: string }) {
  const Art = registry[art]
  return <Art label={label} />
}
