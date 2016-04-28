document.write('Task 4<br/>');
for(i=1;i<=10;i++){
    if(i % 2 !== 0) continue;
    document.write(i + '<br/>');
}

document.write('Task 5<br/>');
var i = 0;
while( i < 3) {
  alert( "номер " + i + "!" );
  i++;
}
document.write('Task 6<br/>');
while(true){
    if(prompt('Enter number > 100') < 100){
        continue;
    } else {
        break;
    }
}

document.write('Task 7<br/>');
var maxNumber = 10;
var minNumber = 2;

tag: for(var i = minNumber; i <= maxNumber; i++){
    for(var j = 2; j < i; j++){
        if(i % j == 0) continue tag;
    }
    document.write(i + '<br />');
}
