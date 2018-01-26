/**
 * Task that cleans the build directory prior to compilations.
 */

const del = require('del');

module.exports = (config) => {
  return function () {
    return del(config.clean.patterns);
  };
};
