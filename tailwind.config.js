module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false,
  theme: {
    colors: {
      transparent: 'transparent',
      primary: '#FCD34D',
      primaryLight: '#FDE68A',
      primaryDark: '#FBBF24',
      primaryLighter: '#FEF3C7',
      secondary: '#8B5CF6',
      secondaryDark: '#6D28D9',
      secondaryLight: '#C4B5FD',
      textOnP: '#374151',
      textOnS: '#E5E7EB',
      background: '#FFF',
      backgroundDark: '#333',
      warning: '#F59E0B',
      error: '#F87171',
      errorDark: '#B91C1C',
      errorLight: '#FECACA',
      success: '#10B981',
      lightGray: '#E5E7EB',
      mediumGray: '#9CA3AF',
      darkGray: '#4B5563'
    },
    extend: {
      zIndex: {
        '-10': '-10'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
