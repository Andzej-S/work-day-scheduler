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

  
 

// * Save the event in local storage when the save button is clicked in that timeblock.

// * Persist events between refreshes of a page