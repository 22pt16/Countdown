var setButton = document.getElementById("setButton");
var countdownInterval;

function setCountdown(date, message) {
    clearInterval(countdownInterval); // Clear any existing interval

    var countDownDate = new Date(date).getTime();

    if (isNaN(countDownDate)) {
        alert("Invalid date. Please check your input.");
        return;
    }

    document.getElementById("message").innerText = message;

    countdownInterval = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = days + "d";
        document.getElementById("hours").innerHTML = hours + "h";
        document.getElementById("minutes").innerHTML = minutes + "m";
        document.getElementById("seconds").innerHTML = seconds + "s";

        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById("timer").innerHTML = "EXPIRED";
            document.getElementById("days").innerHTML = "";
            document.getElementById("hours").innerHTML = "";
            document.getElementById("minutes").innerHTML = "";
            document.getElementById("seconds").innerHTML = "";
        } else {
            // Update timer elements if the countdown is ongoing
            document.getElementById("timer").innerHTML = "";
        }

        // Update time left message
        document.getElementById("timeLeft").innerHTML = "Remains until " +
            new Date(countDownDate).toLocaleString();
    }, 1000);
}

function updateCurrentDateTime() {
    var now = new Date();
    var formattedDate = now.toLocaleDateString();
    var formattedTime = now.toLocaleTimeString();
    document.getElementById("current-datetime").innerHTML = formattedDate + " " + formattedTime;
}

setButton.onclick = function() {
    var title = document.getElementById("title").value;
    var date = document.getElementById("date").value;
    var month = document.getElementById("month").value - 1; // JavaScript months are 0-indexed
    var year = document.getElementById("year").value;

    var userDate = new Date(year, month, date);

    setCountdown(userDate, title);
}

// Set default countdown for New Year 2025
window.onload = function() {
    var defaultDate = new Date(2025, 0, 1); // January 1, 2025
    setCountdown(defaultDate, "Happy New Year");
    updateCurrentDateTime();
    setInterval(updateCurrentDateTime, 1000);
}
