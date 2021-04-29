$(document).ready(function() {
    $('.slide').owlCarousel({
        loop:true,
        margin:10,
        items: 1,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        },
        // autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true
    });

    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[1000])
    });
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    });
    var owl = $(".slide-card");
    owl.owlCarousel({
        loop:true,
        
        items: 3,
        nav:true,
        navText:['<i class="lni lni-chevron-left"></i>','<i class="lni lni-chevron-right"></i>'],
        dots:false,
        responsive:{
            0:{
                items:1
            },
            700:{
                items:2
            },
            1000:{
                items:3,
                margin:-40
            },
            1300:{
                items:3,
                margin:-120,
            }
        },
    });
    var owlRating = $(".slide-third__wrap");
    owlRating.owlCarousel({
        center: true,
        items:2,
        margin:50,
        loop:true,
        nav:true,
        navText:['<i class="lni lni-chevron-left"></i>','<i class="lni lni-chevron-right"></i>'],
        dots:false,
        margin:20,
        responsive:{
            300:{
                items:1
            },
            500:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            },
            1400:{
                items:1
            }
        },
        // autoplay:true,
        // autoplayTimeout:2000,
        autoplayHoverPause:true
    });
});