/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50:  '#f0faf4',
          100: '#d9f2e3',
          200: '#b4e5c8',
          300: '#7fd0a5',
          400: '#47b47d',
          500: '#259760',
          600: '#187a4c',
          700: '#14623e',
          800: '#124e33',
          900: '#0f3f2a',
          950: '#082419',
        },
        cream: {
          50:  '#fdf9f0',
          100: '#faf3e0',
          200: '#f4e5c2',
          300: '#ead4a0',
        },
        earth: {
          700: '#6b4c1e',
          800: '#4a3210',
          900: '#2d1f0a',
        }
      },
      fontFamily: {
        display: ['"DM Serif Display"', 'Georgia', 'serif'],
        body: ['"Nunito"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      boxShadow: {
        'leaf': '0 4px 24px -4px rgba(18, 78, 51, 0.25)',
        'card': '0 2px 20px -2px rgba(0,0,0,0.08)',
        'card-hover': '0 8px 40px -4px rgba(18, 78, 51, 0.2)',
      }
    },
  },
  plugins: [],
}
