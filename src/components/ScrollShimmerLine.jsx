import { motion as Motion, useScroll, useSpring } from 'framer-motion'

function ScrollShimmerLine() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 35,
    restDelta: 0.001,
  })

  return (
    <Motion.div
      className="fixed left-0 right-0 top-0 z-50 h-[2px] origin-left bg-gradient-to-r from-transparent via-cinematic-gold to-transparent shadow-goldGlow"
      style={{ scaleX }}
    />
  )
}

export default ScrollShimmerLine
