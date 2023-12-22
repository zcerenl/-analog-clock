// VARIABLES
const secondHand = document.querySelector(".second"),
  minuteHand = document.querySelector(".minute"),
  hourHand = document.querySelector(".hour"),
  themeButton = document.querySelector(".switch-button");

setInterval(() => {
  let currentDate = new Date();
  console.log(currentDate)
  let second = Math.round((currentDate.getSeconds() / 60) * 360);
  let minute = Math.round((currentDate.getMinutes() / 60) * 360);
  let hour = Math.round((currentDate.getHours() / 12) * 360);
  minuteHand.style.transform = `rotate(${minute}deg)`;
  secondHand.style.transform = `rotate(${second}deg)`;
  hourHand.style.transform = `rotate(${hour}deg)`;
}, 1000);
