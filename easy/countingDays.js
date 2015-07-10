// Description:

// Sometimes you wonder. How many days I have left until.....Whatever date you are curious about. Maybe a holiday. Maybe a vacation. Maybe a special event like a birthday.
// So today let us do some calendar math. Given a date that is in the future how many days until that date from the current date?
// Input:

// The date you want to know about in 3 integers. I leave it to you to decide if you want to do yyyy mm dd or mm dd yyyy or whatever. For my examples I will be using yyyy mm dd. Your solution should have 1 comment saying what format you are using for people reading your code. (Note you will need to convert your inputs to your format from mine if not using yyyy mm dd)
// Output:

// The number of days until that date from today's date (the time you run the program)
(function(){ 
  
  //using format yyyy mm dd
  function _countDays(date) {

    var startDate,
        startDateString,
        endDate,
        oneDayMillis,
        numDays;
    
    startDate = new Date();
    startDateString = startDate.getFullYear() + " " + startDate.getDay() + " " + startDate.getMonth();
    endDate = new Date(date);
    oneDayMillis = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
    numDays = Math.round(Math.abs((endDate.getTime() - startDate.getTime())/(oneDayMillis)));
    
    return numDays + " days from " + startDateString + " to " + date;

  }

  console.log(_countDays("2017 07 10"));

}());