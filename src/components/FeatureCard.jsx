import { motion as Motion } from 'framer-motion'

function FeatureCard({ title, description, iconLabel }) {
  return (
    <Motion.article
      whileHover={{ y: -8, rotateX: -4, rotateY: 3 }}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
      className="feature-card group relative rounded-2xl border border-cinematic-gold/25 bg-charcoal/70 p-6 shadow-softGlow backdrop-blur-md"
    >
      <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-cinematic-gold/40 bg-cinematic-gold/10 font-display text-lg text-cinematic-gold">
        {iconLabel}
      </div>
      <h3 className="font-display text-2xl text-cinematic-gold">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-zinc-300">{description}</p>
      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 cinematic-sweep" />
    </Motion.article>
  )
}

export default FeatureCard
