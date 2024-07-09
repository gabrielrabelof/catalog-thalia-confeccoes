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
        'custom-screen-lg': '60rem',
        'custom-screen-sm': '21rem',
      },

      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
      },

      borderWidth: {
        '0.5': '0.5px',
      },

      height: {
        'model-photo': '385px',
        icon: '18px',
        'contact-photo': '425px',
        'product-photo': '325px',
      },

      width: {
        'model-photo': '515px',
        'contact-photo': '475px',
      },

      fontSize: {
        '7.5xl': ['5.3rem', '5.3rem'],
      },
    },
  },
  plugins: [],
}
export default config
