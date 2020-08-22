module.exports = {
  plugins: {
    'postcss-nested': {},
    'postcss-preset-env': {},
    'postcss-custom-media': {
      importFrom: [
        {
          customMedia: { '--t': '(min-width: 768px)' },
        },
        {
          customMedia: { '--d': '(min-width: 1270px)' },
        },
      ],
    },
  },
};
