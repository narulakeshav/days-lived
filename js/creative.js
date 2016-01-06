$(document).ready(function() {
    
    /* GETTING ELEMENTS IN HTML BY ID AND STORE THEM IN VARIABLE */
    var dateByUser = document.getElementById("date");
    var button = document.getElementById("calculate");
    var message = document.getElementById("message");
    var reset = document.getElementById("reset");

    /* CONVERT THE TIME FROM MILLISECONDS TO DAYS */
    function calculateDays() {

        // CALCULATE DIFFERENCE FROM TODAY TO THE INPUT DATE IN MILLISEONDS
        var diff = new Date().getTime() - new Date(dateByUser.value).getTime();

        // ROUND DOWN THE DAY AND DIVIDE THE DIFF (IN SECONDS) BY (1000 * 60 * 60 * 24)
        var diffInDays = Math.floor(diff / (1000 * 60 * 60 * 24));
        return addCommas(diffInDays);
    }

    /* ADDS COMMAS TO LARGE NUMBERS */
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
        }

        // OTHERWISE, CALCULATE DAYS & MESSAGE = "YOU'VE LIVED ____ DAYS"
        else {
            var diff = calculateDays();
            if(diff > 1) message.innerHTML = "You've lived " + diff + " days.";
            else message.innerHTML = "You've lived " + diff + " day.";
        }
    }
  
    /* RESETS THE MESSAGE AND THE INPUT FIELD ON CLICK */
    reset.onclick = function() {
        dateByUser.value = "";
        message.innerHTML = "Days Lived";
    }

}); // CLOSE DOCUMENT READY