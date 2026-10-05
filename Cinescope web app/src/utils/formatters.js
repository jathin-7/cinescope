export function formatRuntime(runtimeInMinutes) {
  if (!runtimeInMinutes) return 'N/A'
  const hours = Math.floor(runtimeInMinutes / 60)
  const minutes = runtimeInMinutes % 60
  return `${hours}h ${minutes}m`
}

export function formatNumber(value) {
  if (!value && value !== 0) return 'N/A'
  return new Intl.NumberFormat().format(value)
}
