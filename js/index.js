$(document).ready(function(){
var searchTerm = "";
 $("#search").click(function(){
  $("#results").html("");
   
searchTerm = $("#searchTerm").val();

var api = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";
       
   $.ajax({
     type:"GET",
     url:api,
     async:false,
     dataType: "JSON",
     success: function(data){
       console.log(api);
       
       for (var i = 0; i < data[1].length; i++) {
         $("#results").append("<li><a href=" + data[3][i] + ">" + data[1][i] + "</a><p>" + data[2][i] + "</p></li>");
       };
       
     },
     error: function(error){
       alert("Error");
     }
     
     
     
   });
   
  });
});