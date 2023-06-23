$(document).ready(function(){
  $(".genre").click(function(){
    $(this).toggleClass("underline");
  });

    $(".next").click(function(){
      $(".step1").css("display", "none");
      $(".step2").css("display", "block");
    });
    $(".prev").click(function(){
      $(".step2").css("display", "none");
      $(".step1").css("display", "block");
    });
});
