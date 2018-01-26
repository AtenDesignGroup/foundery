/**
 * @file
 * Configuration for Sass compilation.
 */

const cssNext = require('postcss-cssnext');

const config = {};
const workingDir = process.cwd();

config.source = `${workingDir}/patterns/**/*.{sass,scss}`;
config.build = './css';

config.watch = {
  patterns: [`${workingDir}/patterns/**/*.{sass,scss}`],
  tasks: ['css']
};

config.clean = {
  patterns: [`${workingDir}/build/${config.build}`]
};

// Sass build options.
config.options = {
  includePaths: [
    `${workingDir}/node_modules/breakpoint-sass/stylesheets`,
    `${workingDir}/patterns/_partials`
  ]
};

// Configure sourcemaps.
config.sourcemaps = {
  options: {},
  path: './maps'
};

// Load PostCSS Plugins.
config.postCssPlugins = [];

// Import CSSNext.
config.postCssPlugins.push([{
  name: 'postcss-cssnext',
  plugin: cssNext({
    browsers: [
      'last 2 versions',
      'ie >= 8',
      'ios >= 7'
    ]
  })
}]);

module.exports = config;
