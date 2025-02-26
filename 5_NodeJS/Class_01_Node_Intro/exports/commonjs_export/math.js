function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

//! common.js way of export when we do not have a frontend, option 1, object with named properties
module.exports = { add, subtract };

//! Option 2: Attach to export individually

exports.add = add;
exports.subtract = subtract;
