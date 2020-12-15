module.exports = {
  purge: {
    content: ['./pages/**/*.js', './components/**/*.js'],
    options: {
      safelist: ['h-16'],
    },
  },
  theme: {
    extend: {
      colors: {
        charcoal: '#434f5d',
        'red-crayola': '#F52749',
        'tiryan-purple': '#550f3f',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [],
};
