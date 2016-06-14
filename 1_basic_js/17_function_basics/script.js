function checkAge(age) {
   return age > 18? true : confirm('Родители разрешили?');
}

function checkAge2(age) {
   return age > 18 || confirm('Родители разрешили?');
}

checkAge(prompt('age'));
checkAge2(prompt('age 2'));
