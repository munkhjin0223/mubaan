/* *******************************************************

	#Mubaan        // Coming Soon Template
	@Author		     ThemePlusPlus
	@Type          Javascript
	@Version       1.0

	TABLE OF CONTENTS
	---------------------------
	 1. Automatic page load progress bar
	 2. Sidebar scrolling
	 3. Slider Background
	 4. Youtube Background
	 5. Countdown
	 6. Navigate sidebar
	 7. Displaying images
	 8. Newsletter
   9. Placeholder

******************************************************* */

"use strict";

/**
 * 1. Automatic page load progress bar
 * -----------------------------------------------------------------------------
 */

$(function() {
  // Plugin for the loading
  Pace.on("done", function() {
    $("#middle").css("opacity", 1);
    if ($(".bg").attr("id") == "youtube") {
      loadPlayer();
    }
  });
});

/**
 * 2. Sidebar scrolling
 * -----------------------------------------------------------------------------
 */

//set sidebar height
function setHeight(){
  var wheight = $(window).height();
  var height = wheight - wheight/5;
  if(wheight>450){
    height = height - 100;
    if($("#middle>div").hasClass("middle-in")){
      $("#middle>div").css("height","auto");
      $("#middle>div").removeClass("middle-in");
      $("#social").removeClass("hide");
    }
  }else{
    $("#middle>div").css("height",wheight);
    $("#middle>div").addClass("middle-in");
    $("#social").addClass("hide");
  }
  $(".sidebar").css("height",height);
}

$(window).resize(function(){
  setHeight();
});

$(window).load(function(){
  setHeight();
  // Plugin for the scrolling
  $(".sidebar").mCustomScrollbar();
});

/**
 * 3. Slider Background
 * -----------------------------------------------------------------------------
 */

$(function() {
  // Plugin for the slider background
  $('#slider').vegas({
    slides: [{
      src: '../images/1920x1280.png'
    }, {
      src: '../images/1920x1280.png'
    }, {
      src: '../images/1920x1280.png'
    }, {
      src: '../images/1920x1280.png'
    }]
  });
});

/**
 * 4. Youtube Background
 * -----------------------------------------------------------------------------
 */

function loadPlayer() {
  if (typeof(YT) == 'undefined' || typeof(YT.Player) == 'undefined') {

    // first time, build script tag
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

// set your youtube video id. https://www.youtube.com/watch?v=SHwTTW_6_eU
function getVideoId() {
  return 'xxxxxxxxx';
}

// youtube player plugin
function onYouTubePlayer() {
  var width = $(window).width();
  player = new YT.Player('player', {
    height: width/1.7,
    width: width,
    videoId: getVideoId(),
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

// if player state changed
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    done = true;
  } else if (event.data == YT.PlayerState.ENDED) {
    onPlayerReady(event);
  }
}

// if player is ready
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
  $("#player").parent().css({"margin-top": -top + "px"});
  player.playVideo();
  player.mute();
}

//if error occured
function catchError(event) {
  if (event.data == 100) console.log("The video does not exist anymore");
}

//stop video
function stopVideo() {
  player.stopVideo();
}

/**
 * 5. Countdown
 * -----------------------------------------------------------------------------
 */

$(function() {
  // Plugin for the countdown
  $("#countdown").countdown("2017-01-01 00:00", function(event) {
    $(this).html(
      event.strftime('<span class="s">%Dd</span><span> %Hh</span> <span>%Mm</span> <span>%Ss</span>')
    );
  });
});

/**
 * 6. Navigate sidebar
 * -----------------------------------------------------------------------------
 */

// Close left sidebar
function closeLeft() {
  $("#middle").removeClass("r");
  $("#left-sidebar").removeClass("nmshow").addClass("nmhide");
}

// Close right sidebar
function closeRight() {
  $("#middle").removeClass("l");
  $("#right-sidebar").removeClass("nmshow").addClass("nmhide");
}

// Open left sidebar
function openLeft() {
  $("#middle").addClass("r");
  $("#left-sidebar").removeClass("nmhide").addClass("nmshow");
  // $("#left-sidebar").addClass("pos-absolute");
}

// Open right sidebar
function openRight() {
  $("#middle").addClass("l");
  $("#right-sidebar").removeClass("nmhide").addClass("nmshow");
  // $("#left-sidebar").addClass("pos-absolute");
}

// Open left sidebar click event
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

// Open right sidebar click event
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

// Close left sidebar click event
$("#left-sidebar .close").click(function() {
  closeLeft();
});

// Close right sidebar click event
$("#right-sidebar .close").click(function() {
  closeRight();
});

/**
 * 7. Displaying images
 * -----------------------------------------------------------------------------
 */

$(function(){
  // Tool for displaying images
  $(".fancybox").fancybox({
    openEffect: 'elastic',
    closeEffect: 'elastic',
    helpers: {
      title: {
        type: 'over'
      }
    }
  });
});

/**
 * 8. Displaying images
 * -----------------------------------------------------------------------------
 */

$(function(){
  // Plugin for the newsletter
  $("#subscribe-form").notifyMe();
});

/**
 * 9. Place holder (for browser that doesn't support placeholder for input and textarea)
 * -----------------------------------------------------------------------------
 */

$('input, textarea').placeholder();
