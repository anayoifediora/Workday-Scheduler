// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var saveButton = $('.btn');

var today = dayjs().format('dddd[,] MMMM D YYYY[.] [Time:] HH[:]mm[:]ss[.]');
$('#currentDay').text(today);

//$function () ({
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  //});
  
  function renderToDoItem(){
    var toDoListItem = localStorage.getItem("hour-9");   
    toDoListItem = document.querySelector('textarea').value;
 

  };

  saveButton.on('click', function(){
   var toDoListItem = document.querySelector('textarea').value
  localStorage.setItem("hour-9", toDoListItem)

  });
    var timeBlock = document.getElementById('9');
    var state = timeBlock.getAttribute('id');
    var currentTime = dayjs().format('H');
  
  if (parseInt(state) == currentTime) {
    console.log("present");
    timeBlock.setAttribute('class', "row time-block present");

  } else if (parseInt(state) > currentTime) {
    console.log("future");
    timeBlock.setAttribute('class', "row time-block future");

  } else {
    console.log("past");
    timeBlock.setAttribute('class', "row time-block past");
  }

  function init() {
    renderToDoItem();
  }
  init();

  