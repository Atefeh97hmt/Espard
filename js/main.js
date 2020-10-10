

$(document).ready(function () {
	$('div.top').click(function() {
	$('html, body').animate({
	  scrollTop: $("div.top-to-div").offset().top
	}, 1000)
  
}); 
	$(".regular").slick({
		// dots: true,
		rtl: true,
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
	$('.single-item-rtl').slick({
		rtl: true,
		dots: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 3000,
			speed: 900
	
	  });
  });



  	  

  





