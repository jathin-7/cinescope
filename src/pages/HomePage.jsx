import { Link } from 'react-router-dom'
import { motion as Motion } from 'framer-motion'
import FilmStripBorder from '../components/FilmStripBorder.jsx'
import StarfieldCanvas from '../components/StarfieldCanvas.jsx'
import FeatureCard from '../components/FeatureCard.jsx'
import { marqueeTitles } from '../data/marqueeTitles.js'

const featureItems = [
  {
    title: 'AI-Powered Insights',
    description:
      'Every movie detail modal generates a narrative-first breakdown with themes, visual tone cues, and audience fit.',
    iconLabel: 'AI',
  },
  {
    title: 'Real-Time Movie Search',
    description:
      'Instantly find films through TMDB with live search behavior and curated genre-focused discovery controls.',
    iconLabel: 'RX',
  },
  {
    title: 'Stunning Visual Experience',
    description:
      'A cinematic interface with gold accents, animated starfields, film-strip framing, and premium motion transitions.',
    iconLabel: 'FX',
  },
]

function HomePage() {
  return (
    <div>
      <section className="relative isolate overflow-hidden px-4 pb-20 pt-24 md:px-8 md:pt-28">
        <FilmStripBorder position="top" />
        <FilmStripBorder position="bottom" />
        <StarfieldCanvas />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(212,175,55,0.18),transparent_60%)]" />

        <div className="relative mx-auto flex min-h-[68vh] max-w-6xl flex-col items-center justify-center text-center">
          <Motion.p
            className="mb-5 text-xs uppercase tracking-[0.34em] text-cinematic-hover"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            CineScope Presents
          </Motion.p>

          <Motion.h1
            className="max-w-4xl font-display text-5xl leading-tight text-cinematic-gold md:text-7xl"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            Experience Cinema Like Never Before
          </Motion.h1>

          <Motion.p
            className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-200 md:text-lg"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25 }}
          >
            Explore films through a premium, atmospheric UI crafted for movie lovers, storytellers, and visual obsessives.
          </Motion.p>

          <Motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.35 }}
          >
            <Link
              to="/discover"
              className="rounded-full border border-cinematic-gold bg-cinematic-gold px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-cinematic-black transition-all duration-300 hover:-translate-y-1 hover:bg-cinematic-hover"
            >
              Discover Movies
            </Link>
            <Link
              to="/about"
              className="rounded-full border border-cinematic-gold/40 bg-black/30 px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-cinematic-hover transition-all duration-300 hover:-translate-y-1 hover:border-cinematic-hover hover:bg-cinematic-gold/10"
            >
              About CineScope
            </Link>
          </Motion.div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-cinematic-gold/20 bg-charcoal/40 py-4">
        <div className="marquee-track whitespace-nowrap text-sm uppercase tracking-[0.22em] text-cinematic-hover">
          {[...marqueeTitles, ...marqueeTitles].map((title, index) => (
            <span key={`${title}-${index}`} className="mx-6 inline-block">
              {title}
            </span>
          ))}
        </div>
      </section>

      <section className="px-4 pb-24 pt-16 md:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-4xl text-cinematic-gold md:text-5xl">Feature Spotlight</h2>
          <p className="mt-4 max-w-2xl text-zinc-300">
            Built to feel like a movie-premiere microsite while staying modular, performant, and production-ready.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featureItems.map((item) => (
              <FeatureCard
                key={item.title}
                title={item.title}
                description={item.description}
                iconLabel={item.iconLabel}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
