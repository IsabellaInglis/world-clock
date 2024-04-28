// London
let londonElement = document.querySelector("#london");
let londonDateElement = londonElement.querySelector(".date");
let londontimeElement = londonElement.querySelector(".time");

londonDateElement.innerHTML = moment()
  .tz("Europe/London")
  .format("MMMM Do YYYY");
londontimeElement.innerHTML = moment()
  .tz("Europe/London")
  .format("h:mm:ss [<small>]A[</small>]");

// Chicago
let chicagoElement = document.querySelector("#chicago");
let chicagoDateElement = chicagoElement.querySelector(".date");
let chicagotimeElement = chicagoElement.querySelector(".time");

chicagoDateElement.innerHTML = moment()
  .tz("America/chicago")
  .format("MMMM Do YYYY");
chicagotimeElement.innerHTML = moment()
  .tz("America/chicago")
  .format("h:mm:ss [<small>]A[</small>]");
