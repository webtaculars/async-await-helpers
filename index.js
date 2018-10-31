const util = require("util");

const callbackAwait = function(f, ...args) {
  const asyncFunction = util.promisify(f);
  return asyncFunction(...args);
};

module.exports = {
  callbackAwait: callbackAwait
};

