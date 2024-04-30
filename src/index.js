function displayTimes(city) {
  let element = document.querySelector(`#${city}`);
  let dateElement = element.querySelector(".date");
  let timeElement = element.querySelector(".time");

  if (city === `london`) {
    timeZone = "Europe/London";
  } else if (city === `chicago`) {
    timeZone = "America/Chicago";
  } else if (city === `amsterdam`) {
    timeZone = "Europe/Amsterdam";
  } else if (city === `tokyo`) {
    timeZone = "Asia/Tokyo";
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
  displayTimes(`amsterdam`);
  displayTimes(`tokyo`);
}

updateTimes();

setInterval(updateTimes, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
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
        </div>
        <div><a href="/">Display all cities</a></div>`;
}

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
