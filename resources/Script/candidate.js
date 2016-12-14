
$(window).scroll(function(){

	 	var wScroll = $(this).scrollTop();

	 	 $(window).width();

		// alert($(window).width());
	

		if (wScroll > 120) {
			$('.areaLitle').addClass('fixed');
		}

		else {
			$('.areaLitle').removeClass('fixed');
		}
		
		
});

