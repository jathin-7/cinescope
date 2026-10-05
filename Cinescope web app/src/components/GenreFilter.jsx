function GenreFilter({ genres, activeGenre, onSelect }) {
  return (
    <div className="flex flex-wrap gap-2">
      {genres.map((genre) => {
        const active = activeGenre?.id === genre.id
        return (
          <button
            key={genre.id}
            type="button"
            onClick={() => onSelect(genre)}
            className={`rounded-full border px-4 py-2 text-xs tracking-[0.08em] transition-all duration-300 ${
              active
                ? 'border-cinematic-gold bg-cinematic-gold text-cinematic-black shadow-goldGlow'
                : 'border-cinematic-gold/30 bg-cinematic-gold/5 text-cinematic-hover hover:border-cinematic-hover hover:bg-cinematic-gold/15'
            }`}
          >
            {genre.label}
          </button>
        )
      })}
    </div>
  )
}

export default GenreFilter
