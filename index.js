
module.exports = (gulp, configCustom = {}) => {
  const defaultsDeep = require('lodash.defaultsdeep');
  const loadTask = require('./lib/loadTask');
  const configDefault = require('./config');
  const config = defaultsDeep(configCustom, configDefault);

  gulp.task('css', ['clean:css'], loadTask('css', gulp, config));

  gulp.task('clean:css', loadTask('clean', gulp, config.css.clean));

  gulp.task('watch:css', ['css'], loadTask('watch', gulp, config.css.watch));
};
