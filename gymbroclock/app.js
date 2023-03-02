//make a
//make a showTime function that will display the current time
function showTime() {
  // make a new date object
  let date = new Date();
  // get the hours, minutes and seconds from the date object
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  // set the AM or PM
  let session = "AM";
  // check if hours is greater than 12
  if (hours > 12) {
    hours = hours - 12;
    session = "PM";
  }
  // check if hours, minutes and seconds are less than 10
  // add a 0 to the value
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  // display time
  let time = hours + ":" + minutes + ":" + seconds + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;
  setTimeout(showTime, 1000);
}
showTime();

function changeImageByTime() {
  const now = new Date();
  const hour = now.getHours();
  let imageName;
  let quoteName;

  if (hour >= 7 && hour < 10) {
    imageName = "image1.jpeg";
    quoteName = "Your Gym Bro is eating breakfast";
  } else if (hour >= 10 && hour < 12) {
    imageName = "image2.jpeg";
    quoteName = "Your Gym Bro is in lecture";
  } else if (hour >= 12 && hour < 15) {
    imageName = "image3.png";
    quoteName = "Your Gym Bro is eating lunch";
  } else if (hour >= 15 && hour < 18) {
    imageName = "image4.webp";
    quoteName = "Your Gym Bro is working out";
  } else if (hour >= 18 && hour < 21) {
    imageName = "image5.webp";
    quoteName = "Your Gym Bro is eating dinner";
  } else if (hour >= 21 || hour < 0) {
    imageName = "image6.webp";
    quoteName = "Your Gym Bro is home training";
  } else if (hour >= 0 && hour < 7) {
    imageName = "image7.webp";
    quoteName = "Your Gym Bro is sleeping";
  }

  document.getElementById("myImage").src = imageName;
  document.getElementById("myQuote").innerHTML = quoteName;
}

let darkMode = localStorage.getItem("darkMode");

function DarkMode() {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkMode", "enabled");
}

function LightMode() {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkMode", null);
}

if (darkMode === "enabled") {
  DarkMode();
}

// Listeners
const darkModeToggle = document.querySelector(".slider");
darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  darkMode !== "enabled" ? DarkMode() : LightMode();
});