(function($) {
	'use strict';
	
	jQuery(document).on('ready', function(){
	
		/*PRELOADER JS*/
		$(window).on('load', function() { 
			$('.status').fadeOut();
			$('.preloader').delay(350).fadeOut('slow'); 
		}); 
		/*END PRELOADER JS*/		
		
		/*START MENU JS*/		
		$('#main-menu').slicknav({
			label: '',
			duration: 1000,
			easingOpen: "easeOutBounce", //available with jQuery UI
			prependTo:'#mobile_menu',
			closeOnClick: true,
			easingClose:"swing", 
			easingOpen:"swing", 
			openedSymbol: "+",
			closedSymbol: "-" 	
		});			

			if ($(window).scrollTop() > 200) {
			  $('.fixed-top').addClass('menu-bg');
		  } else {
			  $('.fixed-top').removeClass('menu-bg');
		  }
			$(window).on('scroll', function(){
				if ( $(window).scrollTop() > 70 ) {
					$('.site-navigation, .header-white, .header').addClass('navbar-fixed');
				} else {
					$('.site-navigation, .header-white, .header').removeClass('navbar-fixed');
				}
			});		  	
		/*END MENU JS*/								

		/*START HOME WATER JS*/
		  if (typeof $.fn.ripples == 'function') {
				try {
					$('.ripple').ripples({
						resolution: 500,
						perturbance: 0.01
					});
				} catch (e) {
					$('.error').show().text(e);
				}
			}
		/*END HOME WATER JS*/		
		
		/* START PORTFOLIO JS */
		jQuery('.grid').mixitup({
		targetSelector: '.mix',
		});
		
			$('.image-popup').magnificPopup({
				type: 'image',
				closeOnContentClick: true,
				mainClass: 'mfp-img-mobile',
				image: {
					verticalFit: true
				},
			});
		/* END PORTFOLIO JS */

		/* MAGNIFIC POPUP JS*/ 
        var magnifPopup = function () {
            $('.work-popup').magnificPopup({
                type: 'image',
                removalDelay: 300,
                mainClass: 'mfp-with-zoom',
                gallery: {
                    enabled: true
                },
                zoom: {
                    enabled: true, // By default it's false, so don't forget to enable it

                    duration: 300, // duration of the effect, in milliseconds
                    easing: 'ease-in-out', // CSS transition easing function

                    // The "opener" function should return the element from which popup will be zoomed in
                    // and to which popup will be scaled down
                    // By defailt it looks for an image tag:
                    opener: function (openerElement) {
                        // openerElement is the element on which popup was initialized, in this case its <a> tag
                        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                        return openerElement.is('img') ? openerElement : openerElement.find('img');
                    }
                }
            });
        };
        // Call the functions 
        magnifPopup();	
	
	/* START COLLECTIONS JS */
		$("#collection-slider").owlCarousel({
			items:3,
			itemsDesktop:[1000,2],
			itemsDesktopSmall:[979,2],
			itemsTablet:[768,2],
			pagination:true,
			navigation:false,
			slideSpeed:1000,
			autoPlay:false
		});
		/* END COLLECTIONS JS */

		/*START VIDEO JS*/
		$('.video-play').magnificPopup({
            type: 'iframe'
        });
		/*END VIDEO JS*/		
				
		/*START TESTIMONIAL*/
		 $("#testimonial-slider").owlCarousel({
			items:3,
			itemsDesktop:[1000,3],
			itemsDesktopSmall:[979,2],
			itemsTablet:[768,2],
			itemsMobile:[650,1],
			pagination:true,
			autoPlay:false
		});
		/*END TESTIMONIAL*/	
		
	}); 	
	
	/* START PARALLAX JS */
	(function () {

		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		 
		} else {
			$(window).stellar({
				horizontalScrolling: false,
				responsive: true
			});
		}

	}());
	/* END PARALLAX JS  */	
	
	/*START ANIMATION JS*/
	  AOS.init();
	/*END ANIMATION JS*/	
	
	
				
})(jQuery);


  

