const html = document.getElementsByTagName("html")[0];
const changingBackground = document.getElementsByClassName(
  "changingBackground"
)[0];

window.addEventListener("scroll", () => {
  if (this.pageYOffset > 700) {
    changingBackground.style.opacity = "1";
  } else if (this.pageYOffset < 700) {
    changingBackground.style.opacity = "0";
  }
});

var d = new Date();
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

date =
  days[d.getDay()] +
  ", " +
  d.getDate() +
  " " +
  months[d.getMonth()] +
  " " +
  d.getFullYear();

document.getElementById("demo").innerHTML = date;
