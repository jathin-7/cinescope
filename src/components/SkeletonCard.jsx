function SkeletonCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-cinematic-gold/20 bg-charcoal/70 p-3">
      <div className="h-[320px] animate-pulse rounded-xl bg-zinc-700/50" />
      <div className="mt-4 h-5 w-3/4 animate-pulse rounded bg-zinc-700/50" />
      <div className="mt-2 h-3 w-1/2 animate-pulse rounded bg-zinc-700/50" />
    </div>
  )
}

export default SkeletonCard
