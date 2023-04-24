//Queried the DOM to select elements

var saveButton = $('.btn');
var timeBlockText = $('textarea');

//Displays the current date and time at the top of the scheduler

var today = dayjs().format('dddd[,] MMMM D YYYY[.] [Time:] HH[:]mm[:]ss[.]');
$('#currentDay').text(today);

//Event listener function on the save button.

  saveButton.click( function() {

   var timeBlockId = $(this).closest('.time-block').attr('id');
   console.log(timeBlockId);
  var toDoListItem = $(this).closest('.time-block').find('textarea').val();
  localStorage.setItem(timeBlockId, toDoListItem);

  });

  // Code that applies the "past", "present" and "future" classes to the time-block depending 
  // on the time of the day.

  $(".time-block").each(function(){
    var currentTime = dayjs().format('H');
  
    var hourTime = parseInt($(this).attr("id").split("-")[1]);

    var toDoListItem = localStorage.getItem($(this).attr('id')); 
    $(this).find('textarea').val(toDoListItem)  

  
  if (hourTime < currentTime) {
    $(this).addClass("past");

  } else if (hourTime === currentTime) {
    $(this).addClass("present");
    $(this).removeClass("past");
  } else {
    $(this).removeClass("present");
    $(this).removeClass("past");
    $(this).addClass("future");
  }
  })


  