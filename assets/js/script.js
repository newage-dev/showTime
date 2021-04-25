let UI_hour = document.getElementById('hour');
let UI_minute = document.getElementById('minute');
let UI_second = document.getElementById('second');
let specifier = document.querySelector('.specifier');


// GET DATE AND TIME 
function getTime() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    return (
        // SUBSTITUTE HOUR/MINUTE/SECOND TO UI
        UI_hour.textContent = getNigeriaHour(hour),
        UI_minute.textContent = processMinSec(minute),
        UI_second.textContent = processMinSec(second),
        specifier.textContent = hour > 11 ? 'PM' : 'AM'
    )
}

// REDLOADS THE UI EVERY SECOND
setInterval(() => getTime(), 1000);


// CORRECTS THE ONE HOUR TIME DIFFERENCE AND OTHER HOUR SPECS;
function getNigeriaHour(hour) {
    return hour === 0 ? 12 :
        (hour > 0 && hour <= 9) ? '0' + hour :
        hour >= 10 && hour <= 12 ? hour :
        hour >= 13 && hour < 22 ? '0' + (hour - 12) :
        hour - 12;
}

// CORRECTS MINUTE/SECOND ONE-DIGIT FORMAT
function processMinSec(n) {
    return n < 10 ? '0' + n : n;
}