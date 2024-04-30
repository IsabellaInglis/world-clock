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
  ("");
}

function updateTimes() {
  displayTimes(`london`);
  displayTimes(`chicago`);
}

updateTimes();

setInterval(updateTimes, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector(".cities");
  citiesElement.innerHTML = `<div class="city-details">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss [<small>]A[</small>]"
          )}</div>
        </div>`;
}

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
