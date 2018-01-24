/**
 * @file
 * Compile Sass to CSS.
 */

const sass = require('gulp-sass');
const postCSS = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const cssNext = require('postcss-cssnext');

module.exports = (gulp, config) => {
  const plugins = [
    cssNext(config.css.plugins.cssNext)
  ];

  return function () {
    return gulp.src(config.css.source)
      .pipe(sourcemaps.init())
      .pipe(sass(config.css.options).on('error', sass.logError))
      .pipe(postCSS(plugins))
      .pipe(sourcemaps.write('./maps'))
      .pipe(gulp.dest(`${config.system.build}/${config.css.build}`));
  };
};
