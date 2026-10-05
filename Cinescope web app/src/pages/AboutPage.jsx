const techStack = [
  'React.js',
  'Vite',
  'React Router',
  'Tailwind CSS',
  'Axios',
  'Framer Motion',
  'TMDB API',
]

function AboutPage() {
  return (
    <div className="px-4 pb-24 pt-14 md:px-8 md:pt-16">
      <section className="mx-auto max-w-5xl space-y-10 rounded-3xl border border-cinematic-gold/25 bg-charcoal/55 p-7 shadow-softGlow backdrop-blur-xl md:p-10">
        <header>
          <h1 className="font-display text-4xl text-cinematic-gold md:text-5xl">About CineScope</h1>
          <p className="mt-4 leading-relaxed text-zinc-200">
            CineScope is a cinematic movie explorer designed as a premium showcase experience for discovering and analyzing films in real time.
          </p>
        </header>

        <section>
          <h2 className="font-display text-3xl text-cinematic-gold">TMDB API Integration</h2>
          <p className="mt-3 leading-relaxed text-zinc-300">
            Live movie content is powered by The Movie Database API, including titles, posters, ratings, credits, and detailed metadata.
          </p>
          <p className="mt-3 text-sm text-zinc-400">
            This product uses the TMDB API but is not endorsed or certified by TMDB.
          </p>
        </section>

        <section>
          <h2 className="font-display text-3xl text-cinematic-gold">Tech Stack</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {techStack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-cinematic-gold/35 bg-cinematic-gold/10 px-4 py-2 text-sm text-cinematic-hover"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-3xl text-cinematic-gold">Design Philosophy</h2>
          <p className="mt-3 leading-relaxed text-zinc-300">
            The UI follows a cinematic visual language: rich blacks, gold highlights, layered textures, controlled glow, and motion that emphasizes narrative flow over gimmicks.
          </p>
        </section>

        <section>
          <h2 className="font-display text-3xl text-cinematic-gold">Credits</h2>
          <p className="mt-3 leading-relaxed text-zinc-300">
            Crafted for movie lovers using modern frontend engineering and UI direction inspired by theater marquees, film reels, and editorial movie posters.
          </p>
        </section>
      </section>
    </div>
  )
}

export default AboutPage
