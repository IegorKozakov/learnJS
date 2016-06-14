// task 1
var num1 = prompt('first number','');
var num2 = prompt('second number','');

alert(parseFloat(num1) + parseFloat(num2));

//task 3
alert(+(0.1 + 0.2).toFixed(10) + '$' );

//task 4
var i = 0;
while (i != 10) {
  i = +(i + 0.2).toFixed(2);
  console.log(i);
}

//task 5
function getDecimal(num){
    if(num<0){
        num *= -1;
    }

    var integer = Math.floor(num),
        fractional = num - integer;

    return +fractional.toFixed(10);
}

alert( getDecimal(12.345) ); // 0.345
alert( getDecimal(1.2) ); // 0.2
alert( getDecimal(-1.2) ); // 0.2

//task 6
function fib(n) {
  var a = 1,
    b = 0,
    x;
  for (i = 0; i < n; i++) {
    x = a + b;
    a = b;
    b = x;
  }
  return b;
}

function fibBinet(n){
    var fi = (1 + Math.sqrt(5)) / 2;
    var trs = Math.round(Math.pow(fi, n) / Math.sqrt(5));
    return trs;
}

alert(fib(77));
alert(fibBinet(77));

//task 7
function rundomToMax(max){
    return (Math.random() * max);
}
alert(rundomToMax(10));

//task 8
function randomFromMinToMax(min, max){
    return min + Math.random() * (max - min);
}
alert(randomFromMinToMax(5, 10));

//task 9
function randomInteger(min, max){
    return Math.floor(min + Math.random() * (max - min + 1));
}
alert(randomInteger(4, 15));
