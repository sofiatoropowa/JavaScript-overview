function getDayInfo(date) {
  var 
    days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    months=['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']
    dateObj = date.replace(/^(\d{2}).(\d{2}).(\d{4})/,'$2.$1.$3');
    now = new Date(dateObj);
    
    year = now.getFullYear();
    month = months[now.getMonth()];

    day = days[now.getDay()];
    dat = now.getDate();

    week = (0 | now.getDate() / 7) + 1;

    message = '';

    message += day + ', ' + week + ' неделя ' + month + ' ' + year + ' года'; 

    return message
}

alert(getDayInfo('01.01.2022')) // => Суббота, 1 неделя Января 2022 года
alert(getDayInfo('15.12.2021')) // => Среда, 3 неделя Декабря 2021 года
