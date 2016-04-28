document.write('Task 1 <br />');
var name = prompt('what is official js name?','');

if(name.toLowerCase() == 'ecmascript'){
    document.write('You are wright <br />');
} else {
    document.write('You are wrong. Wright answer is ECMAscript <br/>');
}

document.write('Task 2 <br />');
var number = prompt('Please write a number','');
if (number > 0){
    document.write('1 <br />')
}else if(number < 0){
    document.write('-1 <br />')
} else {
    document.write('0 <br />');
}

document.write('Task 3 <br />');
var login = prompt('Please write your login','');
if(login == 'admin'){
    var pass = prompt('Your pass','');
    if(pass == 'Чёрный Властелин'){
        document.write('Wellcome. <br />');
    } else {
        document.write('I don\'t know you. <br />');
    }
} else {
    document.write('login was canseled by user. <br />');
}

document.write('Task 4 <br />');
var a = prompt('Enter a variable',''),
    b = prompt('Enter b variable','');
var result = (a + b < 4)?'Мало':'Много';
document.write(result + '<br />');

document.write('Task 5 <br />');
var login = prompt('Please write your login name','');
var message = (login == 'Вася')?'Привет':
    (login == 'Директор')?'Здравствуйте':
    (login == '')?'Нет логина':'';
document.write(message + ' ' + login + '<br />');
