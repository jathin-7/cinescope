import { motion as Motion } from 'framer-motion'
import { getPosterUrl } from '../services/tmdb.js'

function MovieCard({ movie, onClick }) {
  const releaseYear = movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'

  return (
    <Motion.button
      type="button"
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 260, damping: 24 }}
      className="group relative overflow-hidden rounded-2xl border border-cinematic-gold/25 bg-charcoal/70 text-left shadow-softGlow"
      onClick={() => onClick(movie.id)}
    >
      <img
        src={getPosterUrl(movie.poster_path)}
        alt={movie.title}
        className="h-[360px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-95" />
      <div className="absolute inset-0 bg-black/75 p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <p className="line-clamp-5 text-sm leading-relaxed text-zinc-200">
          {movie.overview || 'Overview currently unavailable.'}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="font-display text-xl text-cinematic-gold line-clamp-1">{movie.title}</h3>
        <p className="text-xs uppercase tracking-[0.18em] text-zinc-300">{releaseYear}</p>
      </div>
    </Motion.button>
  )
}

export default MovieCard
