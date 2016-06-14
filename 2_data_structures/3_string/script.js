//task 1
function ucFirst(str){
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;

}
alert(ucFirst('iegor'));

//task 2
function checkSpam(str){
    str = str.toLowerCase();
    if (!!~str.indexOf('viagra')) {
        return true;
    } else if(!!~str.indexOf('xxx')){
        return true;
    }
    return false;
}

alert(checkSpam('buy ViAgRA now'));
alert(checkSpam('free xxxxx'));
alert(checkSpam("innocent rabbit"));

// task 3
function truncate(str, max){
    return str.length > max ? str.slice(0, max - 3) + '...' : str;
}
alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
alert(truncate("Всем привет!", 20));

//task 4
function extractCurrencyValue(str){
    return +str.substr(1);
}

alert(extractCurrencyValue('$120'));
