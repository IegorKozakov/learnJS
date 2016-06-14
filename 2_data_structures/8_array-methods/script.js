// task 1
var obj = {
  className: 'open menu'
};
function addClass(obj, str){
    var names = obj.className.split(' ');
    if(names.indexOf(str) == -1){
        names.push(str);
    }
    obj.className = names.join(' ');
}
addClass(obj, 'new');
addClass(obj, 'open');
addClass(obj, 'me');
alert( obj.className );

// task 2
function camelize(str){
    var strArr = str.split('-');
    var name = [];
    strArr.map(function(item, i) {
        if(i === 0){
            name.push(item);
        } else {
            name.push(item.charAt(0).toUpperCase() + item.slice(1));
        }
    });
    return name.join('');
}
console.log(camelize('background-color'));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));
// task 3
var obj = {
  className: 'open menu'
};
function removeClass(obj, name){
    var clsNames = obj.className.split(' ');
    for (i=0;i<obj.className.length;i++){
        var pos = clsNames.indexOf(name);
        if (pos == -1) {
            break;
        }
        clsNames.splice(pos, 1);
    }
    return clsNames.join(' ');
}
console.log(removeClass(obj, 'menu'));
// task 4
function filterRangeInPlace(arr, a, b){
    arr.forEach(function(item, i){
        if(item < a || item > b) arr.splice(i,1);
    });
}
var arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);
alert(arr);

// task 5

var arr = [5, 2, 1, -10, 8];

arr.sort(function(a,b){
    return (a - b) * -1;
});
alert(arr);
// task 6
var arr = ["HTML", "JavaScript", "CSS"];
var arrSorted = arr.slice().sort();

alert( arrSorted );
alert( arr );
// task 7
var arr = [1, 2, 3, 4, 5];

arr.sort(function(){
    return Math.floor(-1 + Math.random() * 3);
});

alert( arr );
// task 8
var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];
people.sort(function(a,b){
    return a.age - b.age;
});
alert(people[0].age);

// task 9
var list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {
    var tmp = list;
    while(tmp){
        alert(tmp.value);
        tmp = tmp.next;
    }
}
printList(list);

function printListRec(list){
    alert(list.value);
    if(list.next){
        printListRec(list.next);
    }
    return;
}
printListRec(list);

function printReverseList(list){
    if(list.next){
        printReverseList(list.next);
    }
    alert(list.value);
}
printReverseList(list);

function printReverseListLoop(list){
    var obj = list;
    var tmp = [];

    while(obj){
        tmp.push(obj.value);
        obj = obj.next;
    }

    for(i=tmp.length;i>0;i--){
        alert(tmp[i-1]);
    }
}
printReverseListLoop(list);

// task 10
var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

function aclean(arr){
    var obj = {};

    arr.forEach(function(item,i){
        var amm = item.toLowerCase().split('').sort().join('');
        if(obj[amm] === undefined){
            obj[amm] = item;
        }
    });

    var words = [];
    Object.keys(obj).forEach(function(key){
        words.push(obj[key]);
    });
    return words;
}
console.log(aclean(arr));

// task 11
function unique(arr) {
    var tmp = [];
    for (var i = 0; i < arr.length; i++) {
        if(tmp.indexOf(arr[i]) == -1){
            tmp.push(arr[i]);
        }
    }
    return tmp;
}

var strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", "8-()"
];

alert( unique(strings) );
