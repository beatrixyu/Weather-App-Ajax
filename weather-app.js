//1,  fetch data from openweather
//2. apply Ajax method to connect API and retrieve data  dataType: "json",
//3  pass data on the webpage
// this.http.get(this.weather Api, {
//   headers: new HttpHeaders().set("X - Requested - With", "XMLHttprequest")
// });

$(document).ready(function() {
  //ready() to active the document
  $("#submitCity").click(function() {
    return getWeather();
  });
});

function getWeather() {
  let city = $("#city").val(); //The val() method returns or sets the value attribute of the selected elements.

  //applying Ajax with jQuery
  $.ajax({
    url:
      "http://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=metric" +
      "&APPID=82e90f12abedca83747d28b3fd52250f", //my API key is 82e90f12abedca83747d28b3fd52250f

    type: "GET", //type represents the type of the request (GET or POST) you are making to the server. The default is GET.

    dataType: "json", //a lightweight data-interchange format

    //json page https://samples.openweathermap.org/data/2.5/weather?q=London&appid=b6907d289e10d714a6e88b30761fae22

    success: function(data) {
      let showWeather = showResults(data);
      $("#showWeather").html(showWeather); //The html() method sets or returns the content (innerHTML) of the selected elements.
    }
  });
}

function showResults(data) {
  return (
    '<h2 style="font-weight:bold; font-size:30px; padding-top:20px;" class="text-center">Current Weather for ' +
    data.name +
    ", " +
    data.sys.country +
    "</h2>" +
    "<h3 style='padding-left:40px;'><strong>Weather</strong>: " +
    data.weather[0].main +
    "</h3>" +
    "<h3 style='padding-left:40px;'><strong>Description</strong>:<img src='http://openweathermap.org/img/w/" +
    data.weather[0].icon +
    ".png'> " +
    data.weather[0].description +
    "</h3>" +
    "<h3 style='padding-left:40px;'><strong>Temperature</strong>: " +
    data.main.temp +
    " &deg;C</h3>" +
    "<h3 style='padding-left:40px;'><strong>Pressure</strong>: " +
    data.main.pressure +
    " hpa</h3>" +
    "<h3 style='padding-left:40px;'><strong>Humidity</strong>: " +
    data.main.humidity +
    "%</h3>" +
    "<h3 style='padding-left:40px;'><strong>Min Temperature</strong>: " +
    data.main.temp_min +
    "&deg;C</h3>" +
    "<h3 style='padding-left:40px;'><strong>Max Temperature</strong>: " +
    data.main.temp_max +
    "&deg;C</h3>" +
    "<h3 style='padding-left:40px;'><strong>Wind Speed</strong>: " +
    data.wind.speed +
    "m/s</h3>" +
    "<h3 style='padding-left:40px; padding-bottom:30px;'><strong>Wind Direction</strong>: " +
    data.wind.deg +
    "&deg;</h3>"
  );
}
