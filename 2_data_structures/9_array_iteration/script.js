// task 1
var arr = ["Есть", "жизнь", "на", "Марсе"];

var arrLength = arr.map(function(item){
    return item.length;
});

alert(arrLength);

//task 2
var arr = [ 1, 2, 3, 4, 5, 6 ];

function getSums(arr){
    return arr.reduce(function(previous, current) {
        return previous +=current;
    }, 0);
}
alert(getSums(arr));
