/**
 * @file
 * Compile Sass to CSS.
 */

const sass = require('gulp-sass');
const postCSS = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');

module.exports = (gulp, config) => {
  return function () {
    return gulp.src(config.css.source)
      .pipe(sourcemaps.init())
      .pipe(sass(config.css.options).on('error', sass.logError))
      .pipe(postCSS(config.css.postCssPlugins))
      .pipe(sourcemaps.write('./maps'))
      .pipe(gulp.dest(`${config.system.build}/${config.css.build}`));
  };
};
