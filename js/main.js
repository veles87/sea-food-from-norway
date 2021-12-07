$(function () {
    
    $(".header-slider").slick({

        dots: true,
        prevArrow: '<button type="button" class="slick-prev"> <img src="./images/svg/up.svg" alt=""> </button>',
        nextArrow: '<button type="button" class="slick-next"> <img src="./images/svg/down.png" alt=""> </button>',
        fade: true,
        responsive: [{
            breakpoint: 361,
            settings:{
                dots: false,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 2000
            }
        }
        ]
        
    });

    $('.product__name ').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            focusOnSelect: true,
            vertical: true,
            
//   arrows: false,
//   fade: true,
        asNavFor: '.prodact__content ',
        prevArrow:   '<button type="button" class="up-crab"> <img src="./images/crab/up-crab.png" alt=""> </button>',
        nextArrow: '<button type="button" class="down-crab"> <img src="./images/crab/down-crab.png" alt=""> </button>',
        centerMode: true,
        responsive: [{
            breakpoint: 891,
            settings:{
                vertical: false,
                slidesToShow: 1,
                arrows: false,
                centerMode: true,
                dots: true,
            }
        }
        ]
        
});
    $('.prodact__content ').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.product__name',
            fade: true,
            arrows: false
//   dots: true,
            

    });
    $('.menu__btn').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active');
    });

});