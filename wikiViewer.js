$( document ).ready(function() {

  //random wiki entry api
  $('#random').on('click', function() {
    $.ajaxSetup({cache: false});
    $.getJSON("https://en.wikipedia.org/wiki/Special:Random")
});
  //wiki search api
  $('#searchBtn').click(function() {
     var searchText = $('#searchText').val();
     var wikiUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchText + "&format=json&callback=?";
    
     $.ajax({
       type: "GET",
       url: wikiUrl,
       async: false,
       dataType: "json",
       success: function(data){
         
         $('#result').html('');
         for(var i=0;i<data[1].length;i++) {
           
         $('#result').prepend("<li><a href= " + data[3][i] + ">" + data[1][i] + "</a><p>" + data[2][i] + "</p></li>");
       }
       },
        error: function(errorMessage) {
         alert("Error. Try Again.");
   //hit enter to search       
    $(document).keypress(function (e) {
      if (e.which == 13) {
      if($('#searchTerm').is(':focus')){
      $('#search').click();
      }      
    }
});
       
       }       
});
});
});