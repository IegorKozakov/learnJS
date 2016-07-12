"use strict";

const check_bracket = require('./check_bracket');
console.log('version 1');
console.log(check_bracket.v1('()(())(())')); // VALID
console.log(check_bracket.v1('()(())(())(')); // INVALID
console.log(check_bracket.v1('()(())(())((')); // INVALID
console.log(check_bracket.v1(')(')); // INVALID
console.log('version 2');
console.log(check_bracket.v2('()(())(())')); // VALID
console.log(check_bracket.v2('()(())(())(')); // INVALID
console.log(check_bracket.v2('()(())(())((')); // INVALID
console.log(check_bracket.v2(')(')); // INVALID
