

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
				slidesToShow: 2
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				arrows: true,
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
			speed: 900,
	arrows:false
	  });
	



// $("#menu-close").click(function(e) {
//    e.stopPropagation();
//    $("#sidebar-wrapper").toggleClass("active");
// });
// $("#menu-toggle").click(function(e) {
//    e.stopPropagation();
//    $("#sidebar-wrapper").toggleClass("active");
// });
// $(document).click(function(){
//    if($("#sidebar-wrapper").hasClass('active')){
//       $("#sidebar-wrapper").removeClass("active");
//    }
// });
	
	
	



  });



  





//   document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.sidenav');
//     var instances = M.Sidenav.init(elems, options);
//   });

//   var modal = document.getElementById('navbarSupportedContent');
//   // When the user clicks anywhere outside of the modal, close it
//   window.onclick = function(event) {
// 	if (event.target == modal) {
// 	  modal.style.display = "none";
// 	}
//   }


