/**
 * Open/closed logic, kept free of React so it can be tested on its own.
 * Uses the venue's time zone (America/Phoenix) no matter where the visitor is.
 */
export type DailyHours = {
  timeZone: string
  opens: { hour: number; minute: number }
  closes: { hour: number; minute: number }
}

/** Minutes since local midnight in the given time zone. */
export function minutesInZone(date: Date, timeZone: string): number {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone,
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(date)
  const get = (t: string) => Number(parts.find((p) => p.type === t)?.value ?? 0)
  return get('hour') * 60 + get('minute')
}

/** True when the venue is open at `date`. Handles hours that run past midnight. */
export function isOpenAt(date: Date, hours: DailyHours): boolean {
  const now = minutesInZone(date, hours.timeZone)
  const open = hours.opens.hour * 60 + hours.opens.minute
  const close = hours.closes.hour * 60 + hours.closes.minute
  if (open === close) return true // open around the clock
  return open < close ? now >= open && now < close : now >= open || now < close
}
