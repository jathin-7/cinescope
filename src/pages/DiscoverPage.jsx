import { useEffect, useMemo, useState } from 'react'
import GenreFilter from '../components/GenreFilter.jsx'
import MovieCard from '../components/MovieCard.jsx'
import MovieModal from '../components/MovieModal.jsx'
import SearchBar from '../components/SearchBar.jsx'
import SkeletonCard from '../components/SkeletonCard.jsx'
import { GENRES } from '../constants/genres.js'
import { discoverMovies, searchMovies } from '../services/tmdb.js'

function DiscoverPage() {
  const [query, setQuery] = useState('')
  const [activeGenre, setActiveGenre] = useState(GENRES[0])
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [selectedMovieId, setSelectedMovieId] = useState(null)

  useEffect(() => {
    let active = true

    const timer = setTimeout(async () => {
      setLoading(true)
      setError('')

      try {
        const responseMovies = query.trim()
          ? await searchMovies(query)
          : await discoverMovies(activeGenre?.id)

        if (!active) return

        setMovies(responseMovies)
      } catch (requestError) {
        if (!active) return

        setError(requestError.message || 'Could not fetch movies right now.')
        setMovies([])
      } finally {
        if (active) {
          setLoading(false)
        }
      }
    }, 350)

    return () => {
      active = false
      clearTimeout(timer)
    }
  }, [query, activeGenre])

  const skeletonItems = useMemo(() => Array.from({ length: 12 }), [])

  return (
    <div className="px-4 pb-20 pt-12 md:px-8 md:pt-16">
      <section className="mx-auto max-w-7xl">
        <div className="rounded-3xl border border-cinematic-gold/25 bg-charcoal/50 p-6 shadow-softGlow backdrop-blur-xl md:p-8">
          <h1 className="font-display text-4xl text-cinematic-gold md:text-5xl">Discover Cinematic Worlds</h1>
          <p className="mt-3 max-w-2xl text-zinc-300">
            Search instantly or browse genres to uncover blockbusters, cult classics, and hidden gems from TMDB.
          </p>

          <div className="mt-8 space-y-4">
            <SearchBar value={query} onChange={setQuery} />
            <GenreFilter
              genres={GENRES}
              activeGenre={activeGenre}
              onSelect={(genre) => {
                setQuery('')
                setActiveGenre(genre)
              }}
            />
          </div>
        </div>

        {error && (
          <div className="mt-8 rounded-xl border border-red-400/40 bg-red-400/10 px-4 py-3 text-sm text-red-200">
            {error}
          </div>
        )}

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {loading && skeletonItems.map((_, index) => <SkeletonCard key={`skeleton-${index}`} />)}

          {!loading && !error && movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onClick={setSelectedMovieId} />
          ))}
        </div>

        {!loading && !error && movies.length === 0 && (
          <p className="mt-10 text-center text-zinc-400">No movies found for this query.</p>
        )}
      </section>

      <MovieModal movieId={selectedMovieId} onClose={() => setSelectedMovieId(null)} />
    </div>
  )
}

export default DiscoverPage
