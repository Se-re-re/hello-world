$(document).click(function(){
 $("#hello").hide('slow'); 
});

$("#hello").click(function(e){
  e.stopPropagation(); 
});
