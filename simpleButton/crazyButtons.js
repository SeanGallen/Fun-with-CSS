counter = 0;
$(document).ready(function(){

  $(".invisibleButton").click(function(){
    $(".disappearingButtons").toggle();
  });

  $(".coloredButton").click(function(){
    if (counter % 2 === 0){
      $("html, body").css("background-color", "brown");
    }
    else {
      $("html, body").css("background-color", "red")
    }
    counter++;
  });

});
