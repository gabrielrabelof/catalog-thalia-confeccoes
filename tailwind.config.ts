import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        salmon: '#E68E80',
        'salmon-hover': '#FF9E8E',
        'ml-logo': '#FFD100',
      },

      maxWidth: {
        '100': '72.5rem',
      },

      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
      },

      borderWidth: {
        '0.5': '0.5px',
      },

      height: {
        'contact-photo': '475px',
      },

      width: {
        'contact-photo': '530px',
      },
    },
  },
  plugins: [],
}
export default config
