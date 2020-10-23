// Global Variables
var cityHistory = [];
// 1- Entry point. Primero define la funcion main. Has console log, como prueba.
function main() {
  console.log('testing entry point');
  // 3-Enlaza el boton de search al javaScript, usando jQuery, agrega la funcion de click. Haz console log, prueba y borralo.
  $('#searchImput').click(function () {
    //4- crea una variable que va a almacenar el value del imput en imput text.Luego igualala al valor retornado en la funcion val.
    var searchTerm;
    searchTerm = $('#searchBt').val();
    getWeatherFromApi(searchTerm);
    console.log(searchTerm);
    addCityToHistory(searchTerm);
  });
}
// 5 - creando una funcion, que tome el parametro del imput box y lo busque en el api.
function getWeatherFromApi(searchParam) {
  var url =
    'https://api.openweathermap.org/data/2.5/weather?q=' +
    searchParam +
    '&appid=a879f1cd22ea10255604cb04a8d1dc6e';

  console.log(url);
  $.ajax({
    url: url,
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function (result) {
      console.log(result);
      getNextFiveDays(result);
    },
  });
}
function getNextFiveDays(result) {
  var lat = result.coord.lat;
  var lon = result.coord.lon;
  var url =
    'https://api.openweathermap.org/data/2.5/onecall?lat=' +
    lat +
    '&' +
    'lon=' +
    lon +
    '&appid=a879f1cd22ea10255604cb04a8d1dc6e&exclude=minutely,hourly,alerts&units=imperial';
  console.log(url);
  $.ajax({
    url: url,
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function (daily) {
      displayWeather(daily);
      console.log(daily);
    },
  });
}
// add last city to array

function addCityToHistory(city) {
  cityHistory.unshift(city);
  if (cityHistory.length > 5) {
    cityHistory.pop();
  }
  console.log(cityHistory);
}
function displayHistory() {
  for (var i = 0; i < 5; i = i + 1) {
    // console.log(i);
    var lI = "<li class='list-group-item'></li>";
    $('#cityList').append(lI);
  }
}
// displayHistory();

function displayWeather(data) {
  $('#actualTemp').text(data.current.temp);
  $('#actualHum').text(data.current.humidity);
  $('#actualWindSpeed').text(data.current.wind_speed);
  $('#actualUvi').text(data.current.uvi);
}
// document.on("click","#searchBt" ,function(){})
// 2- aqui invocamos jQuery en el documento $(), retorna un objeto, este objeto tiene un metodo que se llama.
//.ready y dentro de ready creamos una funcion anonima dentro de la cual invocamos main();
$(document).ready(function () {
  main();
});
// getWeatherFromApi('miami');
