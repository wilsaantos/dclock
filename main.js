let date;

function onInit() {
  setInterval(() => {
    getTime();
  }, 1000);
}

function getTime() {
  date = new Date();

  let hours = date.getHours();
  let formattedHours = hours.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  document.getElementById("hourFirstDigit").innerHTML = formattedHours
    .toString()
    .split("")[0];
  document.getElementById("hourSecondDigit").innerHTML = date
    .getHours()
    .toString()
    .split("")[1];

  let minutes = date.getMinutes();
  let formattedMinutes = minutes.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  document.getElementById("minuteFirstDigit").innerHTML = formattedMinutes
    .toString()
    .split("")[0];

  document.getElementById("minuteSecondDigit").innerHTML = formattedMinutes
    .toString()
    .split("")[1];

  let seconds = date.getSeconds();
  let formattedSeconds = seconds.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  document.getElementById("secondFirstDigit").innerHTML = formattedSeconds
    .toString()
    .split("")[0];
  document.getElementById("secondSecondDigit").innerHTML = formattedSeconds
    .toString()
    .split("")[1];
}
