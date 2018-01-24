/**
 * @file
 * Utility funciton for requiring tasks and passing in the needed args.
 */

module.exports = (task, ...args) => {
  // eslint-disable-next-line import/no-dynamic-require
  return require(`${ process.cwd() }/tasks/${ task }`)(...args);
};
