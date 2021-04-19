const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['shared']);
const withCustomBabelConfig = require('next-plugin-custom-babel-config');
const path = require('path');

const plugins = [
  [
    withCustomBabelConfig,
    { babelConfigFile: path.resolve('./babel.config.js') },
  ],
  [withTM],
];

module.exports = withPlugins(plugins);
