module.exports = {
  presets: ['@vue/app'],
  plugins: [
    'jsx-v-model',
    [
      'import',
      {
        libraryName: 'element-ui',
        libraryDirectory: 'lib',
        style: path => [
            'element-ui',
            'lib',
            'theme-chalk',
            `${path.split('/').pop()}.css`,
          ].join('/'),
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
