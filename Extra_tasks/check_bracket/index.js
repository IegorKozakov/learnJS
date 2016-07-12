"use strict";

const check_bracket = require('./check_bracket');

// console.log('version 1');
// console.log(check_bracket.v1('()(())(())')); // VALID
// console.log(check_bracket.v1('()(())(())(')); // INVALID
// console.log(check_bracket.v1('()(())(())((')); // INVALID
// console.log(check_bracket.v1(')(')); // INVALID
// console.log('version 2');
// console.log(check_bracket.v2('()(())(())')); // VALID
// console.log(check_bracket.v2('()(())(())(')); // INVALID
// console.log(check_bracket.v2('()(())(())((')); // INVALID
// console.log(check_bracket.v2(')(')); // INVALID

function test1(data){
    var start = Date.now()
    for(let i = 0; i<100000; i++){
        check_bracket.v1(data);
    }
    return Date.now() - start;
}

function test2(data){
    var start = Date.now()
    for(let i = 0; i<100000; i++){
        check_bracket.v2(data);
    }
    return Date.now() - start;
}

function startTesting(test){
    console.log(`v2 working faster by ${(test1(test) / test2(test)).toFixed(3)} times`);
}

startTesting('()(())(())');
startTesting('()(())(())()');
startTesting('()(())(())((');
startTesting(')(');
