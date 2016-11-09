/*
	Theme Name: Mubaan
  Description: Coming Soon Template
	Author: ThemePlusPlus
  Theme URI: http://mubaan.themeplusplus.com
  Author URI: http://themeforest.net/user/ThemePlusPlus
	Version: 1.0
*/

/* *******************************************************
	TABLE OF CONTENTS
	---------------------------
   1. Sidebar scrolling
   2. Automatic page load progress bar
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
 * 1. Sidebar scrolling
 * -----------------------------------------------------------------------------
 */

//set sidebar height and some responsive config
function setHeight() {
  var wheight = $(window).height();
  var width = $(window).width();
  var height = wheight - wheight / 5;
  if (width > 767) {
    height = height - 100;
    if ($("#middle>div").hasClass("middle-in")) {
      $("#middle>div").css("height", "auto");
      $("#middle>div").removeClass("middle-in");
      $("#social").removeClass("hide");
    }
  } else {
    $("#middle>div").css("height", wheight);
    $("#middle>div").addClass("middle-in");
    if (wheight < 450) {
      $("#social").addClass("hide");
    } else {
      $("#social").removeClass("hide");
    }
  }
  $(".sidebar").css("height", height);
}

$(window).on("resize", function() {
  setHeight();
});

$(window).on("load", function() {
  setHeight();
  // Plugin for the scrolling
  $(".sidebar").mCustomScrollbar();
});

$(document).ready(function() {

  /**
   * 2. Automatic page load progress bar
   * -----------------------------------------------------------------------------
   */

  // Plugin for the loading
  Pace.on("done", function() {
    $("#middle").css("opacity", 1);
    if ($(".bg").attr("id") == "youtube") {
      loadPlayer();
    }
  });

  /**
   * 3. Slider Background
   * -----------------------------------------------------------------------------
   */

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

  /**
   * 4. Youtube Background
   * -----------------------------------------------------------------------------
   */

  // Youtube Video Background
  if ($('body').hasClass('youtube-background')) {
    $('.player').each(function() {
      $('.player').YTPlayer();
    });
  }

  /**
   * 5. Countdown
   * -----------------------------------------------------------------------------
   */

  // Plugin for the countdown
  $("#countdown").countdown("2017-02-01 00:00", function(event) {
    $(this).html(
      event.strftime('<span class="s">%Dd</span><span> %Hh</span> <span>%Mm</span> <span>%Ss</span>')
    );
  });

  /**
   * 6. Navigate sidebar
   * -----------------------------------------------------------------------------
   */

  // Close left sidebar
  function closeLeft() {
    $("#left-sidebar").animate({
      left: "-100%"
    }, 500);
  }

  // Close right sidebar
  function closeRight() {
    $("#right-sidebar").animate({
      left: "100%"
    }, 500);
  }

  // Open left sidebar
  function openLeft() {
    $("#left-sidebar").animate({
      left: "0"
    }, 500);
  }

  // Open right sidebar
  function openRight() {
    $("#right-sidebar").animate({
      left: "0"
    }, 500);
  }

  // Open left sidebar click event
  $("#menu-l").on("click", function() {
    openLeft();
  });

  // Open right sidebar click event
  $("#menu-r").on("click", function() {
    openRight();
  });

  // Close left sidebar click event
  $("#left-sidebar .close").on("click", function() {
    closeLeft();
  });

  // Close right sidebar click event
  $("#right-sidebar .close").on("click", function() {
    closeRight();
  });

  /**
   * 7. Displaying images
   * -----------------------------------------------------------------------------
   */

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

  /**
   * 8. Displaying images
   * -----------------------------------------------------------------------------
   */

  // Plugin for the newsletter
  $("#subscribe-form").notifyMe();

  /**
   * 9. Place holder (for browser that doesn't support placeholder for input and textarea)
   * -----------------------------------------------------------------------------
   */

  $('input, textarea').placeholder();

});
