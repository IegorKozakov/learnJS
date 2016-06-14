// task 1
var Feb20_2012 = new Date(2012, 1, 20, 3, 12);
//alert( Feb20_2012 );

// task 2
function getWeekDay (day){
    var weekdays = ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'];
    return weekdays[day.getDay()];
}
//alert(getWeekDay(new Date(2012,0,3)));

// task 3
function getLocalDay(date){
    var day = date.getDay();
    if(day === 0){
        day =7;
    }
    return day;
}
//alert( getLocalDay(new Date(2012, 0, 1)));

// task 4
var date = new Date(2015, 0, 2);
function getDateAgo(date, days){
    var d = new Date(date);
    d.setDate(date.getDate()-days);
    return d.getDate();
}

// alert( getDateAgo(date, 1) ); // 1, (1 января 2015)
// alert( getDateAgo(date, 2) ); // 31, (31 декабря 2014)
// alert( getDateAgo(date, 365) ); // 2, (2 января 2014)

// task 5

function getLastDayOfMonth(y, m){
    var d = 31,
        currentMounth = new Date(y, m).getMonth();

    while(true){
        if(currentMounth === new Date(y, m, d).getMonth()){
            break;
        }
        d--;
    }
    return d;
}

//alert(getLastDayOfMonth(2012, 1));

// task 6
function getSecondsToday(date){
    var now = new Date(date);
    var today = new Date().setHours(0,0,0,0);
    return Math.floor((now - today)/1000);
}
//alert(getSecondsToday(new Date()));

// task 7
function getSecondsToTomorrow(date){
    var now = new Date(date),
        tomorrow = new Date(date).setHours(24,0,0,0);
    return Math.floor((tomorrow - now)/1000);
}
//alert(getSecondsToTomorrow(new Date()));

// task 8
var d = new Date(2014, 1, 30);
function formatDate(date){
    var d = new Date(date);
    var paresed = '';

    if (d.getDate() < 10) {
        paresed += '0';
    }
    paresed += d.getDate() + '.';
    if(d.getMonth()+1<10){
        paresed += '0';
    }
    paresed += d.getMonth()+1 + '.';
    if(d.getFullYear()<10){
        paresed += '0';
    }
    paresed += d.getFullYear();
    return paresed;
}
//alert( formatDate(d) );

// task 9
function formatDateLong(date){
    var now = new Date(),
        d = new Date(date),
        diff = now - d;

    if (diff < 1000){
        return 'только что';
    }
    if(diff < 1000*60){
        return Math.floor(diff/1000) + ' секунд назад';
    }

    if(diff< 1000*3600){
        return Math.floor(diff/1000/60) + ' минут назад';
    }

    var format = formatDate(d) + ' ' + d.getHours()+ ':' + d.getMinutes();

    return format ;
}
alert( formatDateLong(new Date(new Date - 1)));

alert( formatDateLong(new Date(new Date - 30 * 1000)));

alert( formatDateLong(new Date(new Date - 5 * 60 * 1000)));

alert( formatDateLong(new Date(new Date - 86400 * 1000)) );
