

$(document).ready(function () {
	$('div.top-to-service-section-btn').click(function() {
	$('html, body').animate({
	  scrollTop: $("div.top-to-service-section").offset().top
	}, 1000)
  
}); 
	$(".blue-background-slider").slick({
		// dots: true,
		ltr: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 900,
		nextArrow: '<i class="fa fa-arrow-circle-right"></i>',
		prevArrow: '<i class="fa fa-arrow-circle-left"></i>',
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				arrows: true,
				centerMode: true,
				centerPadding: '10px',
				autoplay: true,
				autoplaySpeed: 3000,
				speed: 900,
				slidesToShow: 2
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				arrows: true,
				centerMode: true,
				centerPadding: '10px',
				autoplay: true,
				autoplaySpeed: 3000,
				speed: 900,
				slidesToShow: 1
			  }
			},
			{
				breakpoint: 350,
				settings: {
				  arrows: true,
				  centerMode: true,
				  centerPadding: '10px',
				  autoplay: true,
				  autoplaySpeed: 3000,
				  speed: 900,
				  slidesToShow: 1
				}
			  }
		  ]
		  
	});
	
	$('.single-item-slider').slick({
		ltr: true,
		dots: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 3000,
			speed: 900,
	arrows:false
	  });


	//   $('.list-group a .menu-click-back').click(function (ev) {
	// 	$('.list-group .menu-click-back').removeClass('selected');
	// 	$(ev.currentTarget).parent('a').addClass('selected');
	// });
	
	 
	});

	
	

 

  $('.navbar-toggler').click(function(e){
    e.stopPropagation();
	 $('.navbar-collapse').addClass('show');
  });

  $(document).click(function(e) 
  {
	  var container = $(".navbar-collapse");
  
	  if (!container.is(e.target) && container.has(e.target).length === 0) 
	  {
		  container.removeClass('show');
	  }
  });



 



//   $('#menu ul li a').click(function (ev) {
// 	$('#menu ul li').removeClass('selected');
// 	$(ev.currentTarget).parent('li').addClass('selected');
// });