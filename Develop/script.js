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
    // element.style.backgroundColor = "red";
    var rowSlotTime = $(element).siblings(".hour").attr('id');

//If less than, equal to, or more than it will change color (if, else if, else)

}

//saveBtn at end of each row


//Delete Tasks

//local storage for Timeblock events

 $('.saveBtn').on('click', function() {
    var value = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');

     console.log(value,time);
 })

var timeblockTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
}

currentDay()