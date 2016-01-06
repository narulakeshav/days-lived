$(document).ready(function() {
    
    // INITIALIZING WOW.JS
    new WOW().init();

    /* GETTING ELEMENTS IN HTML BY ID AND STORE THEM IN VARIABLE */
    var dateByUser = document.getElementById("date");
    var button = document.getElementById("calculate");
    var message = document.getElementById("message");
    var hourMin = document.getElementById("hour-min");
    var reset = document.getElementById("reset");

    /* CONVERT THE TIME FROM MILLISECONDS TO DAYS */
    function calculateDays() {

        // CALCULATE DIFFERENCE FROM TODAY TO THE INPUT DATE IN MILLISEONDS
        var diff = new Date().getTime() - new Date(dateByUser.value).getTime();

        // ROUND DOWN THE DAY AND DIVIDE THE DIFF (IN SECONDS) BY (1000 * 60 * 60 * 24)
        var diffInDays = Math.floor(diff / (1000 * 60 * 60 * 24));
        return addCommas(diffInDays);
    }

    /* CONVERT THE TIME FROM MILLISECONDS TO HOURS */
    function calculateHours() {
        var diff = new Date().getTime() - new Date(dateByUser.value).getTime();
        var diffInHr = Math.floor(diff / (1000 * 60 * 60));
        return addCommas(diffInHr);
    }

    /* CONVERT THE TIME FROM MILLISECONDS TO MINUTES */
    function calculateMinutes () {
        var diff = new Date().getTime() - new Date(dateByUser.value).getTime();
        var diffInMin = Math.floor(diff / (1000 * 60));
        return addCommas(diffInMin);
    }

    /* ADDS COMMAS TO LARGE NUMBERS IF NECESSARY */
    function addCommas(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    /* CALCULATES THE DAYS A PERSON HAS LIVED */
    button.onclick = function() {

        // IF THE INPUT WAS EMPTY, MESSAGE = "ENTER A DATE BRO"
        if (dateByUser.value === "") { message.innerHTML = "Enter a date bro!"; }

        //ELSE IF THE YEAR DIFFERENCE IS OVER 110, MESSAGE = "YOU'RE LYING ..."
        else if(new Date().getFullYear() - new Date(dateByUser.value).getFullYear() >= 110) {
            var diff = calculateDays();
            message.innerHTML = "You're lying, but that's " + diff + " days.";
            hourMin.innerHTML = "That's " + calculateHours() + " hours or " + calculateMinutes() + " minutes.";
        }

        // IF THE USER IS FROM THE FUTURE
        else if(calculateDays() < 0) {
            message.innerHTML = "You're a FutureMan!!";
            hourMin.innerHTML = "Did you go to Hogwarts School of Witchcraft?";
        }

        // OTHERWISE, CALCULATE DAYS & MESSAGE = "YOU'VE LIVED ____ DAYS"
        else {
            var diff = calculateDays();
            if(diff == 1) message.innerHTML = "You've lived " + diff + " day.";
            else {
                message.innerHTML = "You've lived " + diff + " days.";
                hourMin.innerHTML = calculateHours() + " hours or " + calculateMinutes() + " minutes.";
            }
        }
    }

    /* RESETS THE MESSAGE AND THE INPUT FIELD ON CLICK */
    reset.onclick = function() {
        dateByUser.value = "";
        message.innerHTML = "Days Lived";
        hourMin.innerHTML = "Find out how many days you've lived.";
    }
    
}); // CLOSE DOCUMENT READY