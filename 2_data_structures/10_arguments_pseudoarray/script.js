function f(x) {
    return arguments.length?1:0
}

console.log(f(undefined)); // 1
console.log(f()); // 0

function sum(){
    var summa = 0;
    for(i=0;i<arguments.length;i++){
        summa += arguments[i];
    }
    alert(summa);
    return summa;
}

sum();// = 0
sum(1);// = 1
sum(1, 2);// = 3
sum(1, 2, 3);// = 6
sum(1, 2, 3, 4);// = 10