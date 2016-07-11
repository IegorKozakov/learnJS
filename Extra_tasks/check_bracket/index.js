"use strict";

const check_bracket = require('./check_bracket');
console.log(check_bracket('()(())(())')); // true
console.log(check_bracket('()(())(())(')); // false
console.log(check_bracket('()(())(())((')); // false
console.log(check_bracket(')(')); // false