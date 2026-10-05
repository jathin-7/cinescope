function SearchBar({ value, onChange }) {
  return (
    <div className="relative w-full">
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search movies, directors, universes..."
        className="w-full rounded-full border border-cinematic-gold/30 bg-charcoal/70 px-5 py-3 text-sm text-zinc-100 outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-cinematic-hover focus:shadow-goldGlow"
        aria-label="Movie search"
      />
      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-cinematic-gold/70">
        Search
      </span>
    </div>
  )
}

export default SearchBar
