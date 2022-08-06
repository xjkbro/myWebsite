module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
    //   'primary': '#fb8500',
    //   'secondary': '#ffb703',
    //   'dark': '#212529',
    //   'dark-lite': '#343a40',
      'primary-1': "#EA591F",
      'primary-2': "#ED6C31",
      'primary-3': "#F07C42",
      'primary-4': "#F4A77B",
      'dark-1': "#403D3A",
      'dark-2': "#2B2926",
      'dark-3': "#252422",
      'light-1': "#FFFCF2",
      'light-2': "#CCC5B9"
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
