var posicao;

$(window).scroll(function(event) {

	posicao = $(document).scrollTop();
		var areaFotoText = $('.areaFotoText').offset().top-150;
		var areaSetings = $('.areaSetings').offset().top-80;
		var areaClientes = $('.areaClientsSay').offset().top-600;
		var estatistics = $('.areaEstatistics').offset().top-80;

		if (posicao > areaFotoText) {
			$('.third img').addClass('isShow');
		}
		if (posicao > areaSetings) {
			$('.Second img').addClass('isShow');
		}
		
		if (posicao > areaClientes) {
			$('.areaClientsSay .Sections > section').each(function(i) {
				setTimeout( function(){
				  $('.areaClientsSay .Sections > section').eq(i).addClass('isShow'); 
				}, 600 *(i+1));
			});		
		}

		if (posicao > estatistics) {
			cont_curricul(50);
			cont_Enterprase(7000);
			cont_Vags(7000);
			cont_contratacao(7000);
		}
		


});

var curriculo = new Number();
var curriculo = 1018;
var empresa = new Number();
var empresa = 183;
var vaga = new Number();
var vaga = 97;
var contratacao = new Number();
var contratacao = 71;
var i = 0;
var j = 0;
var x = 0;
var z = 0;



function cont_curricul(time) {
	
	if (i < curriculo) {
		i= i+1;
		$('.curicul').text(i);	
		setTimeout('cont_curricul();', time);
	}
}
function cont_Enterprase(time) {
	if (j < empresa) {
		j= j+1;
		$('.enterpase').text(j);	
		setTimeout('cont_Enterprase();', time);
	}
}
function cont_Vags(time) {
	if (x < vaga) {
		x= x+1;
		$('.vags').text(x);	
		setTimeout('cont_Vags();', time);
	}
}
function cont_contratacao(time) {
	if (z < contratacao) {
		z= z+1;
		$('.contratac').text(z);	
		setTimeout('cont_contratacao();', time);
	}	
}