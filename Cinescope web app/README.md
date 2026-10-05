# CineScope - Cinematic Movie Explorer

CineScope is a production-ready React + Vite movie exploration web app with a cinematic visual identity and live TMDB integration.

## Stack

- React.js + Vite
- React Router
- Tailwind CSS (custom theme)
- Axios
- Framer Motion
- TMDB API

## Setup

1. Create an environment file from the template:

	Copy `.env.example` to `.env`

2. Add your TMDB key:

	`VITE_TMDB_API_KEY=your_tmdb_api_key_here`

3. Install dependencies:

	`npm install`

4. Start development server:

	`npm run dev`

## Build

- Production build: `npm run build`
- Preview build: `npm run preview`
- Lint: `npm run lint`

## Notes

- This product uses the TMDB API but is not endorsed or certified by TMDB.
- Cinematic design tokens can be customized in `tailwind.config.js` and `src/index.css`.
