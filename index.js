
module.exports = (gulp, configCustom = {}) => {
  const defaultsDeep = require('lodash.defaultsdeep');
  const loadTask = require('./lib/loadTask');
  const configDefault = require('./config');
  const config = defaultsDeep(configCustom, configDefault);

  gulp.task('css', loadTask('css', gulp, config));
};
