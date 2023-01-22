const currentDate = moment().format('dddd, MMMM Do');
const currentTime = moment();
const timeBlocks = $('.time-block');

// Display current day
$('#currentDay').text(currentDate);

// Function that color-codes time-block based on past, present and future when the timeblock is viewed
timeBlocks.each(function() {
    const timeBlockTime = moment($(this).data('time'), 'HH:mm');
    if (currentTime.isBefore(timeBlockTime)) {
      $(this).addClass('future');
    } else if (currentTime.isAfter(timeBlockTime)) {
      $(this).addClass('past');
    } else {
      $(this).addClass('present');
    }
});

// Event listener for saveBtn click
$('.saveBtn').on('click', function () {
    let textContent = $(this).siblings('.description').val();
    let hour = $(this).parent().attr('id');
    localStorage.setItem(hour, textContent);
});

// Get items from local storage
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#time11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));