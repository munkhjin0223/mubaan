$(function(){
  function setHeight(){
    var height = $(window).height();
    $("#welcome").css("height",height);
  }
  // setHeight();
});

$(window).resize(function(){
  // setHeight();
});
