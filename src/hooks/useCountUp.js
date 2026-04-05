import { useState, useEffect, useRef } from 'react'

export function useCountUp(target, duration = 1800, decimals = 0) {
  const [value, setValue] = useState(0)
  const rafRef = useRef(null)
  const startRef = useRef(null)

  useEffect(() => {
    const delay = setTimeout(() => {
      const animate = (ts) => {
        if (!startRef.current) startRef.current = ts
        const progress = Math.min((ts - startRef.current) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setValue(parseFloat((eased * target).toFixed(decimals)))
        if (progress < 1) rafRef.current = requestAnimationFrame(animate)
      }
      rafRef.current = requestAnimationFrame(animate)
    }, 400)

    return () => {
      clearTimeout(delay)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      startRef.current = null
    }
  }, [target, duration, decimals])

  return value
}
