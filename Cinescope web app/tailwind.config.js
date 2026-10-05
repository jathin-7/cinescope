/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Customize the cinematic palette globally from here.
        cinematic: {
          black: '#0A0A0A',
          gold: '#D4AF37',
          hover: '#F3D98A',
        },
        charcoal: '#1A1A1A',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      boxShadow: {
        // Adjust glow intensity for hover/focus highlights.
        goldGlow: '0 0 28px rgba(212, 175, 55, 0.28)',
        softGlow: '0 18px 40px rgba(0, 0, 0, 0.55)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '100%': { transform: 'translate3d(-50%, 0, 0)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-7px)' },
        },
      },
      animation: {
        marquee: 'marquee 24s linear infinite',
        floatSlow: 'floatSlow 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

