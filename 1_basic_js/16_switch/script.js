document.write('Task 1<br/>');
var browser = 'Chrome';
if (browser === 'IE'){
    alert( 'О, да у вас IE!' );
} else if(browser === 'Chrome'
    || browser === 'Firefox'
    || browser === 'Safari'
    || browser === 'Opera') {
    alert( 'Да, и эти браузеры мы поддерживаем' );
} else {
    alert( 'Мы надеемся, что и в вашем браузере все ок!' );
}

document.write('Task 2<br/>');
switch (+prompt('a?', '')) {
    case (0):
        alert( 0 );
        break;
    case (1):
        alert( 1 );
        break;
    case (2):
    case (3):
        alert( '2,3' );
        break;
    default:

}
