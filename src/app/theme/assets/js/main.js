/*
Theme Name:       JobX - Bootstrap HTML5 Job Portal Template
Author:           UIdeck
Author URI:       http://uideck.com
Text Domain:      UIdeck
Domain Path:      /languages/

JS INDEX
================================================
1. preloader js
2. scroll to top js
3. slick menu js
4. sticky menu js
5. counter js
6. Testimonial owl carousel
7. New Products owl carouse
================================================*/

(function($) {

  "use strict";

    var $main_window = $(window);
    
    /*====================================
    preloader js
    ======================================*/
    $main_window.on("load", function() {
        $("#preloader").fadeOut("slow");
    });

    /*====================================
    scroll to top js
    ======================================*/
    $main_window.on("scroll", function() {
      if ($(this).scrollTop() > 250) {
        $(".back-to-top").fadeIn(200);
      } else {
        $(".back-to-top").fadeOut(200);
      }
    });
    $(".back-to-top").on("click", function() {
      $("html, body").animate(
        {
          scrollTop: 0
        },
        "slow"
      );
      return false;
    });

    /*====================================
    slick menu js
    ======================================*/
    var logo_path=$('.mobile-menu').data('logo');
    $('#main-navbar').slicknav({
        appendTo:'.mobile-menu',
        removeClasses:false,
        label:'',
        closedSymbol:'<i class="lni-chevron-right"><i/>',
        openedSymbol:'<i class="lni-chevron-down"><i/>',
        brand:'<a href="index.html"><img src="'+logo_path+'" class="img-responsive" alt="logo"></a>'
    });
      
    /*====================================
    sticky menu js
    ======================================*/
    $main_window.on('scroll', function () {  
      var scroll = $(window).scrollTop();
      if (scroll >= 100) {
          $(".scrolling-navbar").addClass("top-nav-collapse");
      } else {
          $(".scrolling-navbar").removeClass("top-nav-collapse");
      }
    });

    /*=======================================
    counter
    ======================================= */
    if ($(".fact-count").length > 0) {
      $(".counter").counterUp({
        delay: 10,
        time: 500
      });
    }


    /*====================================
    Testimonials Carousel 
    ======================================*/
    var testiOwl = $("#testimonials");
    testiOwl.owlCarousel({
        autoplay:true,
        margin:30,
        dots:true,
        autoplayHoverPause:true,
        nav:false,
        loop:true,
        responsiveClass:true,
        responsive:{
            0: {
                items:1,
            },
            991:{
                items:1
          }
        }
    });

    /*====================================
    New Products Owl Carousel
    ======================================*/
    var newproducts = $("#new-products");
      newproducts.owlCarousel({
        autoplay: true,
        nav: true,
        autoplayHoverPause:true,
        smartSpeed: 350,
        dots: false,
        margin:30,
        loop: true,
        navText: [
          '<i class="lni-chevron-left"></i>',
          '<i class="lni-chevron-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            575: {
                items: 2,
            },
            991: {
                items: 3,
            }
          }
      });

  })(jQuery);
