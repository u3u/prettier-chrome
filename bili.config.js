// https://egoist.moe/bili/#/api

module.exports = {
  input: ['src/scripts/background.ts', 'src/scripts/content.ts'],
  outDir: 'dist/scripts',
  format: ['iife', 'iife-min'],
  filename: '[name].js',
  babel: {
    babelrc: false,
  },
};
