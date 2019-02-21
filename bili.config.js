// https://bili.egoist.sh/api/interfaces/config

module.exports = {
  input: [
    'src/scripts/background.ts',
    'src/scripts/content.ts',
    'src/scripts/prettier.ts',
  ],
  output: {
    dir: 'dist/scripts',
    format: ['iife', 'iife-min'],
    fileName: '[name][min].js',
  },
  babel: {
    babelrc: false,
    configFile: false,
  },
  typescript2: {
    tsconfig: 'src/scripts/tsconfig.json',
  },
};
