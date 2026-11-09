import { useEffect } from 'react'
import { Events } from './components/Events'
import { FoodDrinks } from './components/FoodDrinks'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Space } from './components/Space'
import { Visit } from './components/Visit'

/** Fade-and-rise on scroll for anything marked data-reveal. */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('[data-reveal]')
    if (!('IntersectionObserver' in window)) return
    document.documentElement.classList.add('reveal-on')
    const pending = new Set<Element>(els)
    const show = (el: Element) => {
      el.classList.add('is-in')
      pending.delete(el)
      io.unobserve(el)
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) show(entry.target)
        }
        // Anything jumped past (anchor links, End key) should not stay hidden.
        for (const el of pending) {
          if (el.getBoundingClientRect().bottom < 0) show(el)
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

export default function App() {
  useReveal()
  return (
    <div className="grain">
      <a href="#main" className="label sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[70] focus:bg-cream focus:px-4 focus:py-3 focus:text-ink">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Events />
        <FoodDrinks />
        <Space />
        <Visit />
      </main>
      <Footer />
    </div>
  )
}
