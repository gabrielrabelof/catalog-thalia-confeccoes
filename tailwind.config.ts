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
        'custom-screen': '61rem',
      },

      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
      },

      borderWidth: {
        '0.5': '0.5px',
      },

      height: {
        'contact-photo': '425px',
      },

      width: {
        'contact-photo': '475px',
      },

      fontSize: {
        '7.5xl': ['5.4rem', '5.4rem'],
      },
    },
  },
  plugins: [],
}
export default config
