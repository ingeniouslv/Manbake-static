/* ========================================================================
	Mobile Test
  ========================================================================= */
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

var testMobile = isMobile.any();  
$(function() {
	var wHeight = $(window).height();
	$('#intro, #beefcakes-intro, #butters-intro, #manbake-contact').css({ 'height': wHeight });
	$('#intro .item').css({ 'height': wHeight+300 });
	$('#beefcakes').css({ 'min-height': wHeight+100 });
	$.stellar();
});

$(document).ready(function() {
	$('.carousel.fade').carousel({
		pause: false
	});
	$('#beefcake-carousel').carousel({
		interval: false,
		pause: 'hover'
	});
	$('#beefcake-carousel .item a, #beefcake-carousel button').on('click', function(event) {
	    event.preventDefault();
	    $('html, body').animate({
	        scrollTop: $('#beefcake-carousel').offset().top-140
	    }, 800);
	});
});

$(window).resize(function() {
	var wHeight = $(window).height();
	$('#intro, #beefcakes-intro, #butters-intro, #manbake-contact').css({ 'height': wHeight });
	$('#intro .item').css({ 'height': wHeight+300 });
	$('#beefcakes').css({ 'min-height': wHeight+100 });
});

$(window).scroll(function() {
		vScroll = $(window).scrollTop()/3;
		$('#intro .carousel-inner').css("-webkit-transform", "translateY(-" + vScroll + "px)");
		$('#intro .carousel-inner').css("-moz-transform", "translateY(-" + vScroll + "px)");
		console.log(vScroll);
});