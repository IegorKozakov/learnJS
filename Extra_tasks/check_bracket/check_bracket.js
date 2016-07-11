"use strict";

module.exports = (bracket) => {
    // Если в bracket больше 100000 символов возвращаем INVALID.
    if(bracket.length > 100000){
        return 'INVALID';
    }
    // Среобразуем с массив
    var bracket = bracket.split('');

    // Если первый элемент массива - ) возвращаем INVALID.
    if (bracket[0] === ')') {
        return 'INVALID';
    }

    // Убираем все лишние значения, оставляя только скобки.
    bracket.filter((item)=>{
        return item === '('? true : item === ')' ? true : false;
    })

    // Если длинна массива не четная, то вернется INVALID.
    if (bracket.length%2 !== 0) {
        return 'INVALID';
    }

    // сортируем массив все открывающиеся скобки сначала массива.
    bracket.sort();

    // так как массив отсортирован, проверяем положение первой закрывающейся скобки.
    // если она не равна половине массива. возвращаем INVALID.
    if(bracket.length / bracket.indexOf(')') !== 2 ){
        return 'INVALID';
    }
    return 'VALID';
};