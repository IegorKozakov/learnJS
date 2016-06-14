var user = {};

user.name = 'Vasia';
user.surname = 'Petrov';

console.log(user);

user.name = 'Sergey';
delete user.surname;

console.log(user);
