var current = new Date();

function updateDateTime() {
     current = new Date();
}


function getTime() {
    updateDateTime();
    var hours = current.getHours();
    var minutes = current.getMinutes();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (hours > 12 && hours || 0 ) {
        hours = hours - 12;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("am-pm").innerHTML = "PM";
    }
    if (hours == 0){
        hours = 12;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("am-pm").innerHTML = "AM";
    }
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;

}

function getDate() {
    updateDateTime();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var month = current.getMonth();
    var day = current.getDay();
    var date = current.getDate();
    day = days[day];
    month = months[month];
    document.getElementById("day").innerHTML = day;
    document.getElementById("date").innerHTML = date + " " + month;

}

window.setInterval(getTime, 1000);
window.setInterval(getDate, 1000);
