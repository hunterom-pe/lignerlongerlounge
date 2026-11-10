/**
 * Billiards 8-ball: the bar's unofficial symbol.
 * Drawn as shapes (no font), so it stays crisp from 16px up.
 * Keep in sync with public/favicon.svg.
 */
export function EightBall({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" focusable="false">
      <circle cx="32" cy="32" r="29.5" fill="#11100f" stroke="#f77a28" strokeWidth="3" />
      <circle cx="29" cy="28" r="13.5" fill="#f2e9d8" />
      <g fill="none" stroke="#11100f" strokeWidth="3.2">
        <circle cx="29" cy="23.6" r="3.9" />
        <circle cx="29" cy="32" r="4.6" />
      </g>
    </svg>
  )
}
