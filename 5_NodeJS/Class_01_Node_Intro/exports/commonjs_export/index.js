//! Option 1 way of import
// const math = require("./math.js");
// console.log(math.add(2, 2));

//! Option 2 way of import
const { add, subtract } = require("./math.js");
console.log(add(2, 2));

//! We cannot mix ways of export import we stick to the chosen option, 1 or 2 but not both

//! if we use common.js way of export we must use common.js way of import, otherwise it wont work
