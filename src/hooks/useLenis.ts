import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

/**
 * Initializes Lenis smooth-scrolling for the whole page.
 * Mount once at the top of the app (MainLayout).
 */
export function useLenis() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const hardwareConcurrency = navigator.hardwareConcurrency ?? 8
    const isLowPowerDesktop =
      window.matchMedia('(any-hover: hover) and (any-pointer: fine)').matches &&
      hardwareConcurrency <= 4

    const shouldSmoothWheel = !prefersReducedMotion && !isLowPowerDesktop

    const lenis = new Lenis({
      // Keep wheel response snappy on desktop while preserving smoothness.
      lerp: 0.18,
      smoothWheel: shouldSmoothWheel,
      wheelMultiplier: 1,
      touchMultiplier: 1,
    })

    let frameId: number

    function raf(time: number) {
      lenis.raf(time)
      frameId = requestAnimationFrame(raf)
    }

    frameId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frameId)
      lenis.destroy()
    }
  }, [])
}
