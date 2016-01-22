//таймер обратного отсчета
..Документация: http://keith-wood.name/countdown.html
//<div class="countdown" date-time="2015-01-07"></div>
var austDay = new Date($(".countdown").attr("date-time"));
$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

//попал менеджер FancyBox
//Документация: http://fancybox.net/howto