import { useEffect, useState } from 'react'

/**
 * Tracks which section is currently in view to highlight the active navbar link.
 */
export function useScrollSpy(sectionIds: string[], offset = 160) {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? '')

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY + offset

      let current = sectionIds[0] ?? ''
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollPosition) {
          current = id
        }
      }
      setActiveId(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds, offset])

  return activeId
}
