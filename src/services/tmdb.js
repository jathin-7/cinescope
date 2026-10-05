import axios from 'axios'

// Set this in .env to enable live data.
const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p'

const tmdbClient = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
  params: {
    api_key: API_KEY,
  },
})

function ensureApiKey() {
  if (!API_KEY) {
    throw new Error('TMDB API key missing. Add VITE_TMDB_API_KEY in your .env file.')
  }
}

export async function searchMovies(query) {
  ensureApiKey()

  if (!query.trim()) return []

  const response = await tmdbClient.get('/search/movie', {
    params: {
      query,
      include_adult: false,
      language: 'en-US',
      page: 1,
    },
  })

  return response.data.results || []
}

export async function discoverMovies(genreId) {
  ensureApiKey()

  // Change sort_by or language to tune discovery behavior.
  const response = await tmdbClient.get('/discover/movie', {
    params: {
      include_adult: false,
      include_video: false,
      language: 'en-US',
      sort_by: 'popularity.desc',
      page: 1,
      with_genres: genreId || undefined,
    },
  })

  return response.data.results || []
}

export async function getMovieDetails(movieId) {
  ensureApiKey()
  const response = await tmdbClient.get(`/movie/${movieId}`, {
    params: {
      language: 'en-US',
    },
  })
  return response.data
}

export async function getMovieCredits(movieId) {
  ensureApiKey()
  const response = await tmdbClient.get(`/movie/${movieId}/credits`, {
    params: {
      language: 'en-US',
    },
  })
  return response.data
}

export function findDirector(credits) {
  const director = credits?.crew?.find((member) => member.job === 'Director')
  return director?.name || 'Unknown'
}

export function getPosterUrl(path, size = 'w500') {
  if (!path) return 'https://placehold.co/500x750/1A1A1A/F3D98A?text=No+Poster'
  return `${IMAGE_BASE_URL}/${size}${path}`
}

export function getBackdropUrl(path, size = 'w1280') {
  if (!path) return 'https://placehold.co/1280x720/0A0A0A/D4AF37?text=CineScope'
  return `${IMAGE_BASE_URL}/${size}${path}`
}
