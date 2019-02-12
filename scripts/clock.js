var current = new Date();

function updateDateTime() {
     current = new Date();
}

function getTime() {
    updateDateTime();
    var hours = current.getHours();
    var minutes = current.getMinutes();
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
}

function getDate() {
    updateDateTime();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var day = current.getDay();
    day = days[day];
    document.getElementById("day").innerHTML = day;
}

window.setInterval(getTime, 1000);
window.setInterval(getDate, 1000);
