"use strict";

module.exports = {
    v1: (bracket) => {
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
            return item === '(' || item === ')' ? true : false;
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
    },
    v2: (bracket) => {

        if(bracket.length > 100000 || bracket.charAt(0) === ')'){
            return 'INVALID';
        }

        var a = null,
            b = null;

        for(let i = 0; i<bracket.length; i++){
            if(bracket.charAt(i) == '(') {
                a++;
            } else if (bracket.charAt(i) == ')'){
                b++;
            }
        }

        return a === b ? 'VALID' : 'INVALID';
    }
};
