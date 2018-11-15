// https://egoist.moe/bili/#/api

module.exports = {
  input: [
    'src/scripts/background.ts',
    'src/scripts/content.ts',
    'src/scripts/prettier.ts',
  ],
  outDir: 'dist/scripts',
  format: ['iife', 'iife-min'],
  filename: '[name].js',
  babel: {
    babelrc: false,
  },
  typescript2: {
    tsconfig: 'src/scripts/tsconfig.json',
  },
};
