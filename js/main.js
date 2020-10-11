

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
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '10px',
				slidesToShow: 2
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '10px',
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
			speed: 900
	
	  });



  });







  





