function init(){
  "use strict"
  var height = $(window).height();
  height = height - height/5 - 100;
  $(".sidebar").css("height",height);
}

$(window).resize(function(){
  init();
});

$(window).on("load",function(){
  init();
  $(".sidebar").mCustomScrollbar();
});

$(function() {

  Pace.on("done", function() {
    $("#middle").css("opacity", 1);
    if ($(".bg").attr("id") == "youtube") {
      loadPlayer();
    }
  });

  $('#slider').vegas({
    slides: [{
      src: '../images/slider/img1.jpg'
    }, {
      src: '../images/slider/img2.jpg'
    }, {
      src: '../images/slider/img3.jpg'
    }, {
      src: '../images/slider/img4.jpg'
    }]
  });

  function getArtistId() {
    return 'SHwTTW_6_eU';
  }

  function loadPlayer() {
    if (typeof(YT) == 'undefined' || typeof(YT.Player) == 'undefined') {

      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      window.onYouTubePlayerAPIReady = function() {
        onYouTubePlayer();
      };

    } else {

      onYouTubePlayer();

    }
  }

  var player;

  function onYouTubePlayer() {
    var width = $(window).width();
    player = new YT.Player('player', {
      height: width/1.7,
      width: width,
      videoId: getArtistId(),
      playerVars: {
        autoplay: 0,
        controls: 0,
        showinfo: 0,
        rel: 0,
        showsearch: 0,
        iv_load_policy: 3,
        enablejsapi: 1
      },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange,
        'onError': catchError
      }
    });
  }

  var done = false;

  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
      done = true;
    } else if (event.data == YT.PlayerState.ENDED) {
      onPlayerReady(event);
    }
  }

  function onPlayerReady(event) {
    var width = $(window).width();
    var origHeight = $(window).height();
    var height = width/1.7;
    var top = 0;
    if(width > 992){
      if(height > origHeight){
        top = (height-origHeight)/2;
      }
    }else {
      width = 992;
      height = 558;
    }
    $("#player").css({"width": width+"px","height": height+"px","top": -top + "px",})
    player.playVideo();
    player.mute();
  }

  function catchError(event) {
    if (event.data == 100) console.log("De video bestaat niet meer");
  }

  function stopVideo() {
    player.stopVideo();
  }

  $("#countdown").countdown("2017-01-01 00:00", function(event) {
    $(this).html(
      event.strftime('<span class="s">%Dd</span><span> %Hh</span> <span>%Mm</span> <span>%Ss</span>')
    );
  });

  function closeLeft() {
    $("#middle").removeClass("r");
    $("#left-sidebar").removeClass("nmshow").addClass("nmhide");
  }

  function closeRight() {
    $("#middle").removeClass("l");
    $("#right-sidebar").removeClass("nmshow").addClass("nmhide");
  }

  function openLeft() {
    $("#middle").addClass("r");
    $("#left-sidebar").removeClass("nmhide").addClass("nmshow");
    // $("#left-sidebar").addClass("pos-absolute");
  }

  function openRight() {
    $("#middle").addClass("l");
    $("#right-sidebar").removeClass("nmhide").addClass("nmshow");
    // $("#left-sidebar").addClass("pos-absolute");
  }

  $("#menu-l").click(function() {
    if ($("#middle").hasClass("r")) {
      closeLeft();
    } else if ($("#middle").hasClass("l")) {
      closeRight();
      setTimeout(openLeft, 1000);
    } else {
      openLeft();
    }
  });

  $("#menu-r").click(function() {
    if ($("#middle").hasClass("l")) {
      closeRight();
    } else if ($("#middle").hasClass("r")) {
      closeLeft();
      setTimeout(openRight, 1000);
    } else {
      openRight();
    }
  });

  $("#left-sidebar .close").click(function() {
    closeLeft();
  });

  $("#right-sidebar .close").click(function() {
    closeRight();
  });

  $(".fancybox").fancybox({
    openEffect: 'elastic',
    closeEffect: 'elastic',
    helpers: {
      title: {
        type: 'over'
      }
    }
  });

/* ================================= */
/* :::::::: 10. Newsletter ::::::::: */
/* ================================= */

// Plugin for the newsletter
$("#subscribe-form").notifyMe();

});
