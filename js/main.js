$(function() {
	$('.works-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots:false,
    navText: ['<img src="img/Arrow left.svg">', '<img src="img/Arrow right.svg">'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1.15
       	},
       	1100:{
       		items:1.35
       	},
       	1800:{
       		items:1.53
       	}
     }
	});

	$('.contributor-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots:false,
    navText: ['<img src="img/Arrow left.svg">', '<img src="img/Arrow right.svg">'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
       },
       1800:{
       		items:1
       }
     }
	});

	$('.clients-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    dots:false,
    navText: ['<img src="img/Arrow left.svg">', '<img src="img/Arrow right.svg">'],
    responsive:{
        0:{
            items:4.35
        }
     }
	});


  $('ul.tabs__caption').on('click', 'li:not(.pressed)', function(e) {
    e.preventDefault()
    $(this)
      .addClass('pressed').siblings().removeClass('pressed')
      .closest('div.tabs').find('div.tabs__content').removeClass('pressed').eq($(this).index()).addClass('pressed');
  });


});

