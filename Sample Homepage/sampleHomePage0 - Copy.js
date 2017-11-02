
$('#my-container').click(function(){
  $("#navMenu").hide('slow');
});
$("#navMenu").click(function(e){
  e.stopPropagation();
});

//$("#forHide").hide()