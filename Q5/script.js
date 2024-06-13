$("#Icons,#Google,#Profile").hide();


$(".logo>span").on("click",function(){
    $("#Dashboard,#Icons,#Google,#Profile").hide();
    $($(this).attr("for")).show();
})


$(".fa-list").on("click",function(){
  $("#sidebar").toggle();
})


$("#closeBtn").on("click",function(){
  if(visualViewport.width <= 600){
     $("#sidebar").hide();
  
  }
})