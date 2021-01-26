// Parameteres
var session_seconds = "00";
var session_minutes = 30;

// Starting template for the timer
function SetTimer() {
  // Change the minutes and seconds to starting time
  session_minutes = document.getElementById("duration").value -1;
  session_seconds = 59;
}

// Audio files
var click_sound = new Audio("click.mp3");
var bell = new Audio("bell.mp3");

let start =()=>{
  SetTimer();
  click_sound.play();
  document.getElementById("done").innerHTML ="";


  // Add the seconds and minutes to the page
  document.getElementById("minutes").innerHTML = session_minutes;
  document.getElementById("seconds").innerHTML = session_seconds;

  // Start the countdown
  var minutes_interval = setInterval(minutesTimer, 60000);
  var seconds_interval = setInterval(secondsTimer, 1000);

  function minutesTimer() {
    session_minutes = session_minutes - 1;
    document.getElementById("minutes").innerHTML = session_minutes;
  }

  // Function for second counter
  function secondsTimer() {
    session_seconds = session_seconds - 1;
    document.getElementById("seconds").innerHTML = session_seconds;

    //check if second timer reached 0
    if(session_seconds <= 0){
      if (session_minutes <= 0) {
        clearInterval(minutes_interval);
        clearInterval(seconds_interval);

        // Add the message to the html
        document.getElementById("done").innerHTML =
          "Session Completed!! Take a Break";


        // PLay the bell sound to tell the end of session
        bell.play();
      }
      // Reset the session seconds to 60
      session_seconds = 60;
    }
  }
}
