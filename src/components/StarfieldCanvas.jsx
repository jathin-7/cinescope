import { useEffect, useRef } from 'react'

function StarfieldCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    const stars = []
    const starCount = 180

    let width = 0
    let height = 0
    let animationFrame = null

    const resize = () => {
      width = canvas.offsetWidth
      height = canvas.offsetHeight
      canvas.width = width
      canvas.height = height

      stars.length = 0
      for (let i = 0; i < starCount; i += 1) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.4 + 0.3,
          alpha: Math.random() * 0.8 + 0.2,
          velocity: Math.random() * 0.25 + 0.05,
        })
      }
    }

    const draw = () => {
      context.clearRect(0, 0, width, height)

      stars.forEach((star) => {
        context.beginPath()
        context.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        context.fillStyle = `rgba(243, 217, 138, ${star.alpha})`
        context.fill()

        star.y += star.velocity
        if (star.y > height + 2) {
          star.y = -2
          star.x = Math.random() * width
        }
      })

      animationFrame = requestAnimationFrame(draw)
    }

    resize()
    draw()

    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />
}

export default StarfieldCanvas
