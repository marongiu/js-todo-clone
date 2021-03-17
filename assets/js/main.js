$(document).ready(function() {
  // imposto data e ora
  setInterval(function () {
    var data = new Date().toLocaleString();
    $('span#currentDate').text(data);
    //imposto un intervallo
  },1000)

//   Creare una Todo-list in cui si possano aggiungere nuovi todo e rimuoverli.
// Rendiamo il tutto gradevole alla vista.

}); // fine ready
