(function ($) {
    'use strict';

    jQuery(document).ready(function () {

		
        $(window).on('load', function() {
          $('body').addClass('loaded');
        });
		
        $('a.smoth-scroll').on("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 100) {
                $('.header-top-area').addClass('navigation-background');
            } else {
                $('.header-top-area').removeClass('navigation-background');
            }
        });
        $(document).on('click', '.navbar-collapse.in', function (e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        
		 });
        $(window).scroll(function(){
        if ($(this).scrollTop() >= 500) {
            $('.scroll-to-top').fadeIn();
         } else {
            $('.scroll-to-top').fadeOut();
         }
	   });
	
	
	    $('.scroll-to-top').click(function(){
		  $('html, body').animate({scrollTop : 0},800);
		  return false;
	    });

        $(window).load(function(){
			

        $(".typing").typed({
            strings: ["<b>Hassan Nadeem</b>", "<b>Usman Nadeem</b>", "<b>AbdulRahman Nadeem</b>","<b>Hassan Nadeem</b>", "<b>Usman Nadeem</b>", "<b>AbdulRahman Nadeem</b>","<b>Hassan Nadeem</b>", "<b>Usman Nadeem</b>", "<b>AbdulRahman Nadeem</b>","<b>Hassan Nadeem</b>", "<b>Usman Nadeem</b>", "<b>AbdulRahman Nadeem</b>","<b>Hassan Nadeem</b>", "<b>Usman Nadeem</b>", "<b>AbdulRahman Nadeem</b>","<b>Hassan Nadeem</b>", "<b>Usman Nadeem</b>", "<b>AbdulRahman Nadeem</b>","<b>Hassan Nadeem</b>", "<b>Usman Nadeem</b>", "<b>AbdulRahman Nadeem</b>","<b>Hassan Nadeem</b>", "<b>Usman Nadeem</b>", "<b>AbdulRahman Nadeem</b>","<b>Hassan Nadeem</b>", "<b>Usman Nadeem</b>", "<b>AbdulRahman Nadeem</b>","<b>Hassan Nadeem</b>", "<b>Usman Nadeem</b>", "<b>AbdulRahman Nadeem</b>","<b>Hassan Nadeem</b>", "<b>Usman Nadeem</b>", "<b>AbdulRahman Nadeem</b>","<b>Hassan Nadeem</b>", "<b>Usman Nadeem</b>", "<b>AbdulRahman Nadeem</b>","<b>Hassan Nadeem</b>", "<b>Usman Nadeem</b>", "<b>AbdulRahman Nadeem</b>","<b>Hassan Nadeem</b>", "<b>Usman Nadeem</b>", "<b>AbdulRahman Nadeem</b>",], 
	                                                                                            
            typeSpeed: 75
          });
			
         });

        $(window).stellar({
            responsive: true,
            horizontalScrolling: false,
            hideDistantElements: false,
            horizontalOffset: 0,
            verticalOffset: 0,
        });
        $('.portfolio-inner').mixItUp();
        $('.portfolio-popup').magnificPopup({
            type: 'image',
			
            gallery: { enabled: true },
			zoom: { enabled: true,
			        duration: 500},
		  
         image:{
               markup: '<div class="mfp-figure portfolio-pop-up">'+
               '<div class="mfp-close"></div>'+
               '<div class="mfp-img"></div>'+
               '<div class="mfp-bottom-bar portfolio_title">'+
               '<div class="mfp-title"></div>'+
               '<div class="mfp-counter"></div>'+
               '</div>'+
               '</div>',

               titleSrc:function(item){
                return item.el.attr('title');
              }
            }	  
          });
        $(".testimonial-carousel-list").owlCarousel({
            items: 1,
            autoPlay: true,
            stopOnHover: false,
            navigation: true,
            navigationText: ["<i class='fa fa-long-arrow-left fa-2x owl-navi'></i>", "<i class='fa fa-long-arrow-right fa-2x owl-navi'></i>"],
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [980, 1],
            itemsTablet: [768, 1],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            autoHeight: true,
            pagination: false,
            transitionStyle : "backSlide"
        });
        $('.statistics').appear(function() {
           var counter = $(this).find('.statistics-count');
           var toCount = counter.data('count');
      
           $(counter).countTo({
           from: 0,
           to: toCount,
           speed: 5000,
           refreshInterval: 50
           })
           });
            });

   })(jQuery);