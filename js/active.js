//======>  Mobile Menu Activation

    /*-----------------------
    --> Off Canvas Menu
    -------------------------*/
    /*Variables*/
    var $offCanvasNav = $('.off-canvas-nav'),
        $offCanvasNavSubMenu = $offCanvasNav.find('.sub-menu');

    /*Add Toggle Button With Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i></i></span>');

    /*Close Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.slideUp();

    /*Category Sub Menu Toggle*/
    $offCanvasNav.on('click', 'li a, li .menu-expand', function (e) {
        var $this = $(this);
        if (($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand'))) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length) {
                $this.parent('li').removeClass('active');
                $this.siblings('ul').slideUp();
            } else {
                $this.parent('li').addClass('active');
                $this.closest('li').siblings('li').find('ul:visible').slideUp();
                $this.siblings('ul').slideDown();
            }
        }
    });

    // Off Canvas Open close
    $(".off-canvas-btn").on('click', function () {
        $(".off-canvas-wrapper").addClass('open');
    });

    $(".btn-close-off-canvas").on('click', function () {
        $(".off-canvas-wrapper").removeClass('open');
    });


$('document').ready(function(){
  //======> Example Slider
  AOS.init();
  $('.example-slider').slick({
    infinite:true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots:true,
    arrows: true,
    centerMode: true,
    centerPadding:'350px',
    prevArrow:'<button type="button" class="slick-prev"><i class="icon icon-tail-left"></i></button>',
    nextArrow:'<button type="button" class="slick-next"><i class="icon icon-tail-right"></i></button>',
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 3,
          centerPadding:'200px',

        }
      },
      {
        breakpoint: 1670,
        settings: {
          slidesToShow: 3,
          centerPadding:'250px',

        }
      },
      {
        breakpoint: 1640,
        settings: {
          slidesToShow: 3,
          centerPadding:'200px',

        }
      },
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: 3,
          centerPadding:'170px',

        }
      },
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 3,
          centerPadding:'180px',

        }
      },
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 3,
          centerPadding:'100px',

        }
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 3,
          centerPadding:'50px',

        }
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 3,
          centerPadding:'0px',

        }
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 1,
          centerPadding:'300px',

        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 1,
          centerPadding:'250px',

        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          centerPadding:'200px',
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          centerPadding:'150px',
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          centerPadding:'100px',
        }
      },
      {
        breakpoint: 515,
        settings: {
          slidesToShow: 1,
          autoplay:true,
          centerPadding:'0px',
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          autoplay:true,
          centerPadding:'0px',
          arrows: false,
        }
      }

    ]
  });
})
