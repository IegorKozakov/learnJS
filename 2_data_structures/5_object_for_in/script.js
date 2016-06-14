"use strict";

// task 1
function isEmpty(obj){
    for(var key in obj){
        return false;
    }
    return true;
}

alert(isEmpty({}));
alert(isEmpty({'test': 'trust'}));

// task 2
var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};
var total = 0;
for(var key in salaries){
    total += salaries[key];
}
alert(total);

// task 3
var name = 0;
var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

for(var key in salaries){
    if(salaries[name] === undefined){
        name = key;
    } else if(salaries[key] > salaries[name]){
        name = key;
    }
}
if (+name === 0){
    name = 'Нет сотрудников';
}
alert(name);

//task 4
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function multiplyNumeric(obj){
    for (var key in obj){
        if (isNumeric(obj[key])){
            obj[key] *= 2;
        }
    }
    return obj;
}

var menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

console.log(multiplyNumeric(menu));
