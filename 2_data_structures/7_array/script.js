//task 1
var goods = ['pen', 'book', 'shirt'];
/*

Array.prototype.last = function(){
    return this[this.length - 1];
};

function getLastElem(arr){
    return arr[arr.length - 1];
}
alert(goods.last());
alert(getLastElem(goods));


//task 2
goods.push('computer');
alert(goods);

//task 3
var styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-Ролл');
styles[styles.length - 2] = 'Классика';
alert(styles.shift());
styles.unshift('Рэп','Регги');

//task 4
var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
function random (min, max){
    return min + Math.floor(Math.random() * (max + 1 - min));
}
alert(arr[random(0, arr.length -1)]);

//task5
var calc = [];

while (true) {
    var val = prompt('Enter the number please','');

    if (val === null || val.length === 0 || isNaN(val)) {
        break;
    } else {
        calc.push(+val);
    }
}
var total = 0;
for(i=0;i<calc.length;i++){
    total +=calc[i];
}

alert(total);

// task 7
arr = ["test", 2, 1.5, false];

function find(array, val){
    for(i=0;i<array.length;i++){
        if(val === array[i]){
            return i;
        }
    }
    return -1;
}

alert(find(arr, "test")); // 0
alert(find(arr, 2)); // 1
alert(find(arr, 1.5)); // 2
alert(find(arr, 0)); // -1

// task 8
var arr = [5, 4, 3, 8, 0];

function filterRange(arr, a, b){
    var filtered = [];
    for(i=0;i<arr.length;i++){
        if(arr[i]>=a && arr[i]<=b) filtered.push(arr[i]);
    }
    return filtered;
}

var filtered = filterRange(arr, 3, 5);
alert(filtered);
*/

// task 9

function setNumArray(max){
    var num = new Array(max);

    // num.forEach(function(elem, i, array){
    //     elem = true;
    // });
    return num;
}


function getNumbers (arr){
    var asd = [];
    if(Math.pow(x, exp))
    Math.pow(x, exp);
}

console.log(setNumArray(120));
