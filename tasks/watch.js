/**
 * @file
 * Watch files and execute tasks.
 */

const sequence = require('run-sequence');

module.exports = (gulp, config) => {
  return function () {
    gulp.watch(config.patterns, () => {
      return sequence(...config.tasks);
    });
  };
};
