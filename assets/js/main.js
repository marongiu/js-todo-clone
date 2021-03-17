$(document).ready(function() {
  //   Creare una Todo-list in cui si possano aggiungere nuovi todo e rimuoverli.
  // Rendiamo il tutto gradevole alla vista.

  // Seleziono il pulsante add
  $('.titlelist #add').click(function() {
    // seleziono input add
    var inputAdd = $('#addlist').val();
    // imposto il valore a 0
    $('#addlist').val('');
    // clono template
    var template = $('.template li').clone();
    // gli salvo il valore dell'input
    template.prepend(inputAdd);
    // gli aggiungo il valore di input add
    // Seleziono la mia lista
    var list = $('.todolista ul');
    // appendo template nella lista
    // se la lunghezza della parola è minore di 1 allora non lo appendo
    if (inputAdd.length < 1) {
      $('span#wrong').show();
    } else {
      list.append(template);
      $('span#wrong').hide();
    }
    // Ora seleziono il bottone rimuovi
    var remove = $('.remove');
    // gli seleziono il click
    remove.click(function(event) {
      // al click rimuovo il genitore (li)
      $(this).parent().remove();
    });
  });
}); // fine ready

// imposto data e ora

setInterval(function () {
  var data = new Date().toLocaleString();
  $('.currentDate').text(data);
  //imposto un intervallo
},1000)
