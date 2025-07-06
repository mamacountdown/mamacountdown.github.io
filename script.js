let interval;
const eventDay = new Date(Date.parse('2025-07-16T22:30:00');

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const countDownFn = () => {
  everySecond = setInterval(countDownFn, second)
  everyMinute = setInterval(countDownFn, minute)
  everyHour = setInterval(countDownFn, hour)
  let now = new Date();
  let timeSpan = eventDay - now;
}

