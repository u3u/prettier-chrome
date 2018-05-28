/* eslint-disable strict */
// https://github.com/vuejs/vue-cli/blob/dev/docs/config.md
// https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');

module.exports = {
  baseUrl: '../',
  chainWebpack: (config) => {
    // Config resolve alias
    config.resolve.alias
      .set('assets', path.resolve(__dirname, 'src/assets'))
      .set('components', path.resolve(__dirname, 'src/components'))
      .set('layouts', path.resolve(__dirname, 'src/layouts'))
      .set('utils', path.resolve(__dirname, 'src/utils'))
      .set('views', path.resolve(__dirname, 'src/views'));

    // CSP script-src error: https://github.com/vuejs/vue-cli/issues/1074
    config.plugins
      .delete('split-manifest')
      .delete('inline-manifest'); // prettier-ignore
  },
};
