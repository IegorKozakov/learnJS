// task 1

function sum(a){
    return function(b){
        return a+b;
    }
}

alert(sum(1)(2));
alert(sum(5)(-1));

// task 2
function makeBuffer(){
    var buffered = '';

    return function(a){
        if(arguments.length) {
            buffered += a.toString();
        }
        return buffered;
    }
}

var buffer = makeBuffer();

buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');
alert( buffer() );

var buffer2 = makeBuffer();
buffer2(0);
buffer2(1);
buffer2(0);

alert( buffer2() );

// task 3
function makeBuffer(){
    var buffered = '',
        buffer = function(a){
        if(arguments.length) {
            buffered += a.toString();
        }
        return buffered;
    };

    buffer.clear = function () {
        buffered = '';
    };
    return buffer
}
var buffer = makeBuffer();

buffer("Тест");
buffer(" тебя не съест ");
alert( buffer() );
buffer.clear();
alert( buffer() );

//task 4
var users = [{
    name: "Вася",
    surname: 'Иванов',
    age: 20
}, {
    name: "Петя",
    surname: 'Чапаев',
    age: 25
}, {
    name: "Маша",
    surname: 'Медведева',
    age: 18
}];

function byField(field){
    return function(a, b){
        return a[field] > b[field] ? 1 : -1;
    }
}

users.sort(byField('name'));
users.forEach(function(user) {
    alert( user.name );
});

users.sort(byField('age'));
users.forEach(function(user) {
    alert( user.name );
});

//task 5
function filter(arr, callback){
    return arr.filter(callback);
}

function inBetween(a, b){
    return function(item){
        if (item >= a && item <= b) {
            return true;
        }
        return false;

    };
}

function inArray(arg){
    return function(item){
        return arg.indexOf(item) !== -1 ? true : false;
    }
}

var arr = [1, 2, 3, 4, 5, 6, 7];

alert(filter(arr, function(a) {
    return a % 2 == 0
}));

alert( filter(arr, inBetween(3, 6)));

alert( filter(arr, inArray([1, 2, 10])) );

//task 6

function makeArmy() {

    var shooters = [];

    for (let i = 0; i < 10; i++) {
        var shooter = function() {
            alert( i );
        };
        shooters.push(shooter);
    }

    return shooters;
}

var army = makeArmy();
army[0]();
army[5]();

function makeArmy() {

    var shooters = [];

    for (var i = 0; i < 10; i++) {
        var shooter = function say() {
            alert( say.num );
        };
        shooter.num = i;
        shooters.push(shooter);
    }

    return shooters;
}

var army = makeArmy();
army[0]();
army[5]();