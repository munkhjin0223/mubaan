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
   1. Popup scrolling
   2. Automatic page load progress bar
	 3. Slider Background
	 4. Youtube Background
	 5. Countdown
	 6. Displaying images
	 7. Newsletter
   8. Placeholder
   9. Map
******************************************************* */

"use strict";

/**
 * 1. Popup scrolling
 * -----------------------------------------------------------------------------
 */

//set popup height and some responsive config
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
  $(".popup").css("height", height);
}

$(window).on("resize", function() {
  setHeight();
});

$(window).on("load", function() {
  setHeight();
  // Plugin for the scrolling
  $(".popup").mCustomScrollbar();
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
  var $slider = $("#slider");
  if($slider.length > 0){
    $slider.vegas({
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
  }

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
  $("#countdown").countdown("2017-04-01 00:00", function(event) {
    $(this).html(
      event.strftime('<span class="em">%Dd</span><span> %Hh</span> <span>%Mm</span> <span>%Ss</span>')
    );
  });

  /**
   * 6. Displaying images
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
   * 7. Displaying images
   * -----------------------------------------------------------------------------
   */

  // Plugin for the newsletter
  $("#subscribe-form").notifyMe();

  /**
   * 8. Place holder (for browser that doesn't support placeholder for input and textarea)
   * -----------------------------------------------------------------------------
   */

  $('input, textarea').placeholder();

});

/**
 * 9. Map
 * -----------------------------------------------------------------------------
 */

// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', initMap);
google.maps.event.addDomListener(window, 'resize', initMap);

function initMap() {

	var myLatlng = new google.maps.LatLng(47.8917439,106.831832);

		// Basic options for a simple Google Map
		// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
		var mapOptions = {
		// How zoomed in you want the map to start at (always required)
		zoom: 9,
		scrollwheel: false,
		draggable: false,

		// The latitude and longitude to center the map (always required)
		center: myLatlng,

		// How you would like to style the map.
		// This is where you would paste any style found on Snazzy Maps.

		styles: [

		{
	        "featureType": "landscape",
	        "stylers": [
	            {
	                "saturation": -100
	            },
	            {
	                "lightness": 65
	            },
	            {
	                "visibility": "on"
	            }
	        ]
	    },

	    {
	        "featureType": "poi",
	        "stylers": [
	            {
	                "saturation": -100
	            },
	            {
	                "lightness": 51
	            },
	            {
	                "visibility": "simplified"
	            }
	        ]
	    },

	    {
	        "featureType": "road.highway",
	        "stylers": [
	            {
	                "saturation": -100
	            },
	            {
	                "visibility": "simplified"
	            }
	        ]
	    },

	    {
	        "featureType": "road.arterial",
	        "stylers": [
	            {
	                "saturation": -100
	            },
	            {
	                "lightness": 30
	            },
	            {
	                "visibility": "on"
	            }
	        ]
	    },

	    {
	        "featureType": "road.local",
	        "stylers": [
	            {
	                "saturation": -100
	            },
	            {
	                "lightness": 40
	            },
	            {
	                "visibility": "on"
	            }
	        ]
	    },

	    {
	        "featureType": "transit",
	        "stylers": [
	            {
	                "saturation": -100
	            },
	            {
	                "visibility": "simplified"
	            }
	        ]
	    },

	    {
	        "featureType": "administrative.province",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },

	    {
	        "featureType": "water",
	        "elementType": "labels",
	        "stylers": [
	            {
	                "visibility": "on"
	            },
	            {
	                "lightness": -25
	            },
	            {
	                "saturation": -100
	            }
	        ]
	    },

	    {
	        "featureType": "water",
	        "elementType": "geometry",
	        "stylers": [
	            {
	                "hue": "#ffff00"
	            },
	            {
	                "lightness": -25
	            },
	            {
	                "saturation": -97
	            }
	        ]
	    },

	    ]

	};

	var map = new google.maps.Map(document.getElementById('map'), mapOptions);

	// Set the text contained in the bubble; Let this part well in one line, no newline.
	var contentString = '<div class="info-content"><h2>We are here <small>Ulaanbaatar, Mongolia</small></h2><p>Located in the center of the city, lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum euismod erat, nec porta turpis fringilla sed.</p></div>';

	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});

	var marker = new google.maps.Marker({
		position: myLatlng,
		map: map,
		title: 'More informations'
	});

	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map,marker);
	});

}

$(document).on('opening', '.remodal', function () {
  initMap();
});
