$(document).ready(function() {
    
    // GETTING ELEMENTS IN HTML BY ID AND STORE THEM IN VARIABLE
    var dateByUser = document.getElementById("date");
    var button = document.getElementById("calculate");
    var message = document.getElementById("message");
    var reset = document.getElementById("reset");

    // CALCULATES THE DAYS A PERSON HAS LIVED
    button.onclick = function() {
        if (dateByUser.value === "") { message.innerHTML = "Enter a date bro!"; }
        else if(new Date().getFullYear() - new Date(dateByUser.value).getFullYear() >= 110) {
            var difference = new Date().getTime() - new Date(dateByUser.value).getTime();
            var mainDiff = Math.floor(difference / (1000 * 60 * 60 * 24));
            message.innerHTML = "You're lying, but that's " + addCommas(mainDiff) + " days.";
        }
        else {
            var difference = new Date().getTime() - new Date(dateByUser.value).getTime();
            var mainDiff = Math.floor(difference / (1000 * 60 * 60 * 24));
            if (mainDiff < 0) { message.innerHTML = "You ain't from the future lol"; }
            else { message.innerHTML = "You've lived " + addCommas(mainDiff) + " days."; }
        }
    }
  
    // RESETS THE MESSAGE AND THE INPUT FIELD ON CLICK
    reset.onclick = function() {
        dateByUser.value = "";
        message.innerHTML = "Days Lived";
    }

    function addCommas(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
});