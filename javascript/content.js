$(document).ready(function(){
  $(".genre").click(function(){
    $(this).toggleClass("underline");
  });

    $(".next1").click(function(){
      $(".step1").css("display", "none");
      $(".step2").css("display", "block");
    });
    $(".prev2").click(function(){
      $(".step2").css("display", "none");
      $(".step1").css("display", "block");
    });
    $(".next2").click(function(){
      $(".step2").css("display", "none");
      $(".step3").css("display", "block");
    });
    $(".prev2").click(function(){
      $(".step3").css("display", "none");
      $(".step2").css("display", "block");
    });
});
