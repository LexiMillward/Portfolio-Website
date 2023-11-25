// Timer Script to show how many days i have been studying full stack web-development.
let startDate = new Date("Aug 16, 2023").getTime();

let count = setInterval(function() {
    let now = new Date().getTime();
    let difference = now - startDate;

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = days + "d " + hours + "h "+ minutes + "m " + seconds + "s.";
}, 1000);