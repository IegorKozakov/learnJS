function sumTo(arg){
    return arg == 1?1:arg + sumTo(arg - 1);
}

function sumToByLoop(num){
    var number = num;
    for (;num>0;){
        number += --num;
    }
    return number;
}

function math(num) {
    return num * (num + 1) / 2;
}

console.log(sumTo(100));
console.log(sumToByLoop(100));
console.log(math(100));

function fuctorial(n){
    return n == 1 ? 1 : n * fuctorial(n-1);
}

console.log(fuctorial(5));

function fib(n){
    var f=0, s=1;
    for(var i = 1;i<=n;i++){
        var t = f;
        f = t + s;
        s = t;
    }
    return f;
}

/*
 * function fib(n){
 *     return n <= 1?n:fib(n-1)+fib(n-2);
 * }
 */

console.log(fib(77));
