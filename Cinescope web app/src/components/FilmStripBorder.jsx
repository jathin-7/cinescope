function FilmStripBorder({ position = 'top' }) {
  const borderPosition = position === 'top' ? 'top-0' : 'bottom-0'

  return (
    <div className={`pointer-events-none absolute ${borderPosition} left-0 right-0 z-20 h-9 cinematic-film-strip`}>
      <div className="mx-auto flex h-full max-w-7xl items-center justify-around px-4">
        {Array.from({ length: 18 }).map((_, index) => (
          <span
            key={`${position}-${index}`}
            className="h-4 w-5 rounded-sm bg-cinematic-black/90 ring-1 ring-cinematic-gold/30"
          />
        ))}
      </div>
    </div>
  )
}

export default FilmStripBorder
