function displayTimes(city) {
  let element = document.querySelector(`#${city}`);
  let dateElement = element.querySelector(".date");
  let timeElement = element.querySelector(".time");

  if (city === `london`) {
    timeZone = "Europe/London";
  } else if (city === `chicago`) {
    timeZone = "America/Chicago";
  }

  dateElement.innerHTML = moment().tz(timeZone).format("MMMM Do YYYY");
  timeElement.innerHTML = moment()
    .tz(timeZone)
    .format("h:mm:ss [<small>]A[</small>]");
}

function updateTimes() {
  displayTimes(`london`);
  displayTimes(`chicago`);
}

updateTimes();

setInterval(updateTimes, 1000);
