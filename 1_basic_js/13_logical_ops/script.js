var age = prompt('<br />How old are you?', '');

document.write('Task 6 <br />');
if(age >= 14  && 90  >= age){
    document.write('Ok<br />');
} else {
    document.write('Nope<br />');
}

document.write('<br /> Task 7 <br />');
if(age < 14  && 90  > age){
    document.write('Nope<br />');
} else {
    document.write('Ok<br />');
}

if (!(age >= 14  || 90  <= age)){
    document.write('Nope<br />');
} else {
    document.write('Ok<br />');
}
