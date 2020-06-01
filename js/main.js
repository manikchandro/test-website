$(function () {

    //    var $dis = $(.full-nav).offset().top;

    $(window).on('scroll', function () {
        var $scrolling = $(this).scrollTop();

        if ($scrolling >= 150) {
            $('.full-nav').addClass('sticky');
        } else {
            $('.full-nav').removeClass('sticky');
        }

        if ($scrolling >= 100) {
            $('.top i').fadeIn();
        } else {
            $('.top i').fadeOut();
        }

    });


    // scrolltop //

    $('.top').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1500)
    });

    // scrolltop //

    // start smoothscroll //
    $('a[href*="#"]:not([href="#').on('click', function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 75
                }, 1000);
                return false;
            }
        }
    });
    // end smoothscroll //



    // start mixitup //
    var mixer = mixitup('.filter-item');
    // end mixitup //


    var typed = new Typed('.type', {
        strings: ['Manik',
                  'Web Desinger',
                  'Web devloper',
                  'wordpress devloper',
                  'a photografher'
           ],
        typeSpeed: 60,
        backSpeed: 60,
        loop: true
    });


    // start about typed //
    var typed = new Typed('.about-type', {
        strings: ['Manik',
                  'Web Desinger',
                  'Web devloper',
                  'wordpress devloper',
                  'a photografher'
           ],
        typeSpeed: 60,
        backSpeed: 60,
        loop: true

    });
    // end about typed  //

    // start slider //
    $('.clent-slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 100,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });
    // end slider //

    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });





})
