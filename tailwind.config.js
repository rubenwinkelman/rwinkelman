/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0A0C10',
          surface: '#121620',
          card: '#161B26',
          elevated: '#1D2331',
          accent: '#F06543',
          accentHover: '#FF7754',
          accentLight: 'rgba(240, 101, 67, 0.12)',
          accentBorder: 'rgba(240, 101, 67, 0.3)',
          sand: '#F4ECE1',
          sandMuted: '#C7BFAF',
          sandDim: '#8A8377',
          mint: '#2DD4BF',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'subtle-drift': 'drift 8s ease-in-out infinite alternate',
      },
      keyframes: {
        drift: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '100%': { transform: 'translate(20px, -15px) scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}
