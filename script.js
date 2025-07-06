let dayField = document.getElementById('day');
let hourField = document.getElementById('hour');
let minuteField = document.getElementById('minute');
let secondField = document.getElementById('second');

let interval;
const eventDay = new Date(Date.parse("2025-07-16T22:30:00"));
  
// Convert to millisecond
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
  
const countDownFn = () => {
    const today = moment();
    const timeSpan = eventDay.diff(today);
  
    if (timeSpan <= -today) {
        console.log("Unfortunately we have past the event day");
        clearInterval(interval);
        return;
    } else if (timeSpan <= 0) {
        console.log("Today is the event day");
        clearInterval(interval);
        return;
    } else {
        const days = Math.floor(timeSpan / day);
        const hours = Math.floor((timeSpan % day) / hour);
        const minutes = Math.floor((timeSpan % hour) / minute);
        const seconds = Math.floor((timeSpan % minute) / second);
  
        // Set results
        dayField.innerHTML = days;
        hourField.innerHTML = hours;
        minuteField.innerHTML = minutes;
        secondField.innerHTML = seconds;
    }
};
  
interval = setInterval(countDownFn, second);

