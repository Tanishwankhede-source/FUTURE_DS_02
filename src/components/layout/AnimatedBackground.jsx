import { useEffect, useRef } from 'react'

export default function AnimatedBackground() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf

    const COLORS = ['#C1121F','#E63946','#E8C547','#2EC4B6','#FFB3B3','#C9A87C']
    const pts = Array.from({ length: 52 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.3 + 0.3,
      vx: (Math.random() - 0.5) * 0.27,
      vy: (Math.random() - 0.5) * 0.27,
      o: Math.random() * 0.40 + 0.08,
      c: COLORS[Math.floor(Math.random() * COLORS.length)],
    }))

    let W = canvas.width = window.innerWidth
    let H = canvas.height = window.innerHeight

    const onResize = () => {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)

    const draw = () => {
      ctx.clearRect(0, 0, W, H)

      const blobs = [
        { x: W*0.08, y: H*0.15, r: 440, c: 'rgba(193,18,31,0.07)' },
        { x: W*0.88, y: H*0.10, r: 340, c: 'rgba(232,197,71,0.04)' },
        { x: W*0.50, y: H*0.88, r: 400, c: 'rgba(193,18,31,0.05)' },
        { x: W*0.87, y: H*0.68, r: 280, c: 'rgba(46,196,182,0.04)' },
        { x: W*0.15, y: H*0.72, r: 320, c: 'rgba(201,168,124,0.04)' },
      ]
      blobs.forEach(b => {
        const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r)
        g.addColorStop(0, b.c)
        g.addColorStop(1, 'transparent')
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2)
        ctx.fill()
      })

      pts.forEach((p, i) => {
        ctx.globalAlpha = p.o
        ctx.fillStyle = p.c
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
        ctx.globalAlpha = 1

        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j]
          const d = Math.hypot(p.x - q.x, p.y - q.y)
          if (d < 115) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = `rgba(193,18,31,${0.055 * (1 - d / 115)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }

        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > W) p.vx *= -1
        if (p.y < 0 || p.y > H) p.vy *= -1
      })

      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}
