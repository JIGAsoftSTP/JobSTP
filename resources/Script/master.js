var posicao;

$(window).scroll(function() {
	
	//-----------------Menu-------------
	posicao = $(document).scrollTop();
	if(posicao >= 100){
		$('.menu').addClass('menuAfterScroll');
	}
	if(posicao < 100){
		$('.menu').removeClass('menuAfterScroll');
	}

// -----------------Area Slaid IMG Fixed----------
		var barra = posicao * 0.30;

		$('.areaSlaid').css({
			'background-position': '0-'+barra+'px'
		});
		
});



		