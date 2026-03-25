'use client'
import { useEffect } from 'react'

export default function AnimObserver() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.07 }
    )

    // Observe all animatable elements
    document.querySelectorAll('.anim, .anim-l, .anim-r, .anim-scale').forEach((el, i) => {
      // Stagger delay based on siblings
      const siblings = el.parentElement?.querySelectorAll('.anim, .anim-l, .anim-r')
      const idx = siblings ? Array.from(siblings).indexOf(el) : 0
      if (!el.style.transitionDelay) {
        el.style.transitionDelay = `${(idx % 5) * 0.07}s`
      }
      io.observe(el)
    })

    return () => io.disconnect()
  }, [])

  return null
}
