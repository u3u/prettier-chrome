module.exports = {
  presets: ['@vue/app'],
  plugins: [
    'jsx-v-model',
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk',
      },
    ],
  ],
  env: {
    production: {
      plugins: [['emotion', { hoist: true }]],
    },
    development: {
      plugins: [['emotion', { sourceMap: true, autoLabel: true }]],
    },
  },
};
