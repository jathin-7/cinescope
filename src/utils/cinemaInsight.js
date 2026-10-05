function detectThemes(overview = '', genres = []) {
  const source = `${overview} ${genres.map((genre) => genre.name).join(' ')}`.toLowerCase()
  const themes = []

  if (source.includes('war') || source.includes('survival')) themes.push('High-stakes survival tension')
  if (source.includes('love') || source.includes('relationship')) themes.push('Emotional relationship arc')
  if (source.includes('future') || source.includes('technology')) themes.push('Future-facing social commentary')
  if (source.includes('crime') || source.includes('revenge')) themes.push('Moral ambiguity and consequence')
  if (source.includes('family')) themes.push('Family-driven character motivation')

  if (themes.length === 0) {
    themes.push('Character-led dramatic conflict')
    themes.push('Atmosphere-first storytelling')
  }

  return themes.slice(0, 3)
}

export function generateCinemaInsight(movie, director) {
  const themes = detectThemes(movie.overview, movie.genres)

  const cinematography = movie.vote_average >= 7.5
    ? 'Likely polished visual composition with deliberate camera language and scene rhythm.'
    : 'Visual style appears narrative-supportive, with moments built around mood and pacing.'

  const audienceFit = movie.runtime >= 130
    ? 'Best for viewers who enjoy immersive, long-form cinematic journeys.'
    : 'Great for audiences seeking a focused watch with steady narrative momentum.'

  return {
    themes,
    cinematography,
    audienceFit,
    verdict: `${movie.title} feels crafted for ${movie.genres?.[0]?.name || 'cinema'} fans${director ? `, with ${director} steering its tone.` : '.'}`,
  }
}
