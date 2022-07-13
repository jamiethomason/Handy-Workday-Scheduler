var currentDate = document.querySelector('#currentDay');
var tasks = {};
var saveBtn = document.querySelector('.saveBtn');
var textAreas = $('.time-block');
var currentHour = moment().hour(); // Number

//Show Date in Heading
var currentDay = function() {
currentDate.textContent = moment().format("MMM Do YY");
}

//Show if Task is .past/.present/.future

for (var index = 0; index < textAreas.length; index++) {
    var element = textAreas[index];
    // console.log(element);
    // element.style.backgroundColor = "red";
    // console.log($(element).siblings());
    var rowSlotTime = $(element).siblings(".hour").attr('id').split('');
    var timeBlock = parseInt(rowSlotTime[0] + rowSlotTime[1])

    //If less than, equal to, or more than currentHour, it will change color (if, else if, else)
    if (timeBlock < currentHour) {
        $(element).addClass('past')
    } else if (timeBlock === currentHour) {
        $(element).addClass('present')
    } else {
        $(element).addClass('future')
    }
}

//local storage for Timeblock events

 $('.saveBtn').on('click', function() {
    var value = $(this).siblings('.time-block').val();

    var rowSlotTime = $(this).siblings(".hour").attr('id').split('');
    var time = parseInt(rowSlotTime[0] + rowSlotTime[1])

     console.log(value, time);

    localStorage.setItem(time, value);

 })

$('#09AM').siblings('.time-block').val(localStorage.getItem('09'));
$('#10AM').siblings('.time-block').val(localStorage.getItem('10'));
$('#11AM').siblings('.time-block').val(localStorage.getItem('11'));
$('#12PM').siblings('.time-block').val(localStorage.getItem('12'));
$('#13PM').siblings('.time-block').val(localStorage.getItem('13'));
$('#14PM').siblings('.time-block').val(localStorage.getItem('14'));
$('#15PM').siblings('.time-block').val(localStorage.getItem('15'));
$('#16PM').siblings('.time-block').val(localStorage.getItem('16'));
$('#17PM').siblings('.time-block').val(localStorage.getItem('17'));


currentDay()