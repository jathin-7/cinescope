import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion as Motion } from 'framer-motion'
import {
  findDirector,
  getBackdropUrl,
  getMovieCredits,
  getMovieDetails,
  getPosterUrl,
} from '../services/tmdb.js'
import { generateCinemaInsight } from '../utils/cinemaInsight.js'
import { formatNumber, formatRuntime } from '../utils/formatters.js'

function MovieModal({ movieId, onClose }) {
  const [movie, setMovie] = useState(null)
  const [director, setDirector] = useState('Unknown')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!movieId) return undefined

    let active = true

    const fetchModalData = async () => {
      setLoading(true)
      setError('')

      try {
        const [movieData, creditsData] = await Promise.all([
          getMovieDetails(movieId),
          getMovieCredits(movieId),
        ])

        if (!active) return

        setMovie(movieData)
        setDirector(findDirector(creditsData))
      } catch (requestError) {
        if (!active) return
        setError(requestError.message || 'Unable to load movie details.')
      } finally {
        if (active) {
          setLoading(false)
        }
      }
    }

    fetchModalData()

    const onEscape = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onEscape)

    return () => {
      active = false
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', onEscape)
    }
  }, [movieId, onClose])

  const insight = useMemo(() => {
    if (!movie) return null
    return generateCinemaInsight(movie, director)
  }, [movie, director])

  return (
    <AnimatePresence>
      {movieId && (
        <Motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 px-4 py-8 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <Motion.article
            initial={{ opacity: 0, scale: 0.96, y: 26 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="glass-card relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-3xl border border-cinematic-gold/25"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="sticky right-4 top-4 z-20 ml-auto mr-4 mt-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-cinematic-gold/35 bg-black/60 text-cinematic-gold transition-transform duration-300 hover:scale-105"
              aria-label="Close modal"
            >
              X
            </button>

            {loading && (
              <div className="px-8 pb-12 pt-4 text-zinc-300">Loading cinematic details...</div>
            )}

            {error && !loading && (
              <div className="px-8 pb-12 pt-4 text-red-300">{error}</div>
            )}

            {movie && !loading && !error && (
              <>
                <div className="relative h-72 w-full overflow-hidden md:h-96">
                  <img
                    src={getBackdropUrl(movie.backdrop_path)}
                    alt={movie.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cinematic-black via-black/25 to-transparent" />
                </div>

                <div className="relative grid gap-8 px-6 pb-10 pt-8 md:grid-cols-[260px_minmax(0,1fr)] md:px-10">
                  <img
                    src={getPosterUrl(movie.poster_path)}
                    alt={movie.title}
                    className="mx-auto w-full max-w-[260px] rounded-2xl border border-cinematic-gold/30 shadow-softGlow"
                  />

                  <div>
                    <h2 className="font-display text-4xl text-cinematic-gold md:text-5xl">
                      {movie.title}
                    </h2>
                    <p className="mt-2 text-sm uppercase tracking-[0.2em] text-zinc-300">
                      {movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'}
                    </p>

                    <div className="mt-6 grid gap-3 text-sm text-zinc-200 md:grid-cols-2">
                      <p>Rating: {movie.vote_average?.toFixed(1)} / 10</p>
                      <p>Votes: {formatNumber(movie.vote_count)}</p>
                      <p>Runtime: {formatRuntime(movie.runtime)}</p>
                      <p>Director: {director}</p>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {movie.genres?.map((genre) => (
                        <span
                          key={genre.id}
                          className="rounded-full border border-cinematic-gold/35 bg-cinematic-gold/10 px-3 py-1 text-xs text-cinematic-hover"
                        >
                          {genre.name}
                        </span>
                      ))}
                    </div>

                    <p className="mt-6 leading-relaxed text-zinc-100">{movie.overview}</p>

                    {insight && (
                      <section className="mt-8 rounded-2xl border border-cinematic-gold/30 bg-cinematic-black/55 p-5">
                        <h3 className="font-display text-2xl text-cinematic-gold">AI Cinema Insight</h3>
                        <p className="mt-3 text-sm text-zinc-200">{insight.verdict}</p>
                        <p className="mt-3 text-sm text-zinc-300">
                          Themes: {insight.themes.join(' | ')}
                        </p>
                        <p className="mt-2 text-sm text-zinc-300">
                          Cinematography Notes: {insight.cinematography}
                        </p>
                        <p className="mt-2 text-sm text-zinc-300">Audience Fit: {insight.audienceFit}</p>
                      </section>
                    )}
                  </div>
                </div>
              </>
            )}
          </Motion.article>
        </Motion.div>
      )}
    </AnimatePresence>
  )
}

export default MovieModal
