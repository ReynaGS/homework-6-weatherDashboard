// 1- Entry point. Primero define la funcion main. Has console log, como prueba.
function main() {
  console.log('testing entry point');
  // 3-Enlaza el boton de search al javaScript, usando jQuery, agrega la funcion de click. Haz console log, prueba y borralo.
  $('#searchImput').click(function () {
    //4- crea una variable que va a almacenar el value del imput en imput text.Luego igualala al valor retornado en la funcion val.
    var searchTerm;
    searchTerm = $('#searchBt').val();
    console.log(searchTerm);
  });
}
// 5 - creando una funcion, que tome el parametro del imput box y lo busque en el api.
function getWeatherFromApi(searchParam) {
  var url =
    'https://api.openweathermap.org/data/2.5/weather?appid=487ec79abf2987194c1a213dff07edb5&units=imperial&q=' +
    searchParam;

  console.log(url);
}
// document.on("click","#searchBt" ,function(){})
// 2- aqui invocamos jQuery en el documento $(), retorna un objeto, este objeto tiene un metodo que se llama.
//.ready y dentro de ready creamos una funcion anonima dentro de la cual invocamos main();
$(document).ready(function () {
  main();
});
getWeatherFromApi('Miami');
