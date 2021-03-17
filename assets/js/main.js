$(document).ready(function() {
//   Creare una Todo-list in cui si possano aggiungere nuovi todo e rimuoverli.
// Rendiamo il tutto gradevole alla vista.

// Seleziono il pulsante add

// Seleziono il pulsante add
$('.titlelist #add').click(function() {
  // seleziono input add
  var inputAdd = $('#addlist').val();
  // imposto il valore a 0
  $('#addlist').val('');
  // clono template
  var template = $('.template li').clone();
  // gli salvo il valore dell'input
  template.text(inputAdd);

  // gli aggiungo il valore di input add
// Seleziono la mia lista
var lista = $('.todolista ul');
// appendo template nella lista
lista.append(template)

});
}); // fine ready
// imposto data e ora

// setInterval(function () {
//   var data = new Date().toLocaleString();
//   $('span#currentDate').text(data);
//   //imposto un intervallo
// },1000)
