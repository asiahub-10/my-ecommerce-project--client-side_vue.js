$('.example1').wmuSlider();

$(window).load(function() {
  $("#flexiselDemo1").flexisel({
    visibleItems: 4,
    animationSpeed: 1000,
    autoPlay: true,
    autoPlaySpeed: 3000,
    pauseOnHover: true,
    enableResponsiveBreakpoints: true,
    responsiveBreakpoints: {
      portrait: {
        changePoint:480,
        visibleItems: 1
      },
      landscape: {
        changePoint:640,
        visibleItems:2
      },
      tablet: {
        changePoint:768,
        visibleItems: 3
      }
    }
  });

});



$(document).ready(function() {
  $('.popup-with-zoom-anim').magnificPopup({
    type: 'inline',
    fixedContentPos: false,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in'
  });

});

$('#myModal88').modal('show');

$(document).ready(function () {
  $('#horizontalTab').easyResponsiveTabs({
    type: 'default', //Types: default, vertical, accordion
    width: 'auto', //auto or any width like 600px
    fit: true   // 100% fit in a container
  });
});

jQuery(document).ready(function($) {
  $(".scroll").click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
  });
});



$(document).ready(function(){


	/* ---- Countdown timer ---- */

	$('#counter').countdown({
		timestamp : (new Date()).getTime() + 11*24*60*60*1000
	});


	/* ---- Animations ---- */

	$('#links a').hover(
		function(){ $(this).animate({ left: 3 }, 'fast'); },
		function(){ $(this).animate({ left: 0 }, 'fast'); }
	);

	$('footer a').hover(
		function(){ $(this).animate({ top: 3 }, 'fast'); },
		function(){ $(this).animate({ top: 0 }, 'fast'); }
	);


	/* ---- Using Modernizr to check if the "required" and "placeholder" attributes are supported ---- */

	if (!Modernizr.input.placeholder) {
		$('.email').val('Input your e-mail address here...');
		$('.email').focus(function() {
			if($(this).val() == 'Input your e-mail address here...') {
				$(this).val('');
			}
		});
	}

	// for detecting if the browser is Safari
	var browser = navigator.userAgent.toLowerCase();

	if(!Modernizr.input.required || (browser.indexOf("safari") != -1 && browser.indexOf("chrome") == -1)) {
		$('form').submit(function() {
			$('.popup').remove();
			if(!$('.email').val() || $('.email').val() == 'Input your e-mail address here...') {
				$('form').append('<p class="popup">Please fill out this field.</p>');
				$('.email').focus();
				return false;
			}
		});
		$('.email').keydown(function() {
			$('.popup').remove();
		});
		$('.email').blur(function() {
			$('.popup').remove();
		});
	}


});

