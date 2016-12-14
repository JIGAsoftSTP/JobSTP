
var activo; // imagem selecionada
var i = 0; // índice
var n = 3; // Nº de comentários
var topo;

setInterval (coment, 10000);// Executar a função comentário em cada de 10 segundos

function coment(){
	
	if (i < n) { //enquanto o indice for menor qo que o numero de comentarios, mostrar o comentario

		$('.divsTestemunhos').find('div').eq(i).removeClass('active');

		i= i+1;
		$('.divsTestemunhos').find('div').eq(i).addClass('active');

		$('.Controls section').removeClass('select');
		$('.Controls section').eq(i).addClass('select');
	}

	else{ //Senão, começar do primeiro

		$('.divsTestemunhos').find('div').eq(n).removeClass('active');
	
		i = 0;
		$('.divsTestemunhos').find('div').eq(i).addClass('active');
		$('.Controls section').removeClass('select');
		$('.Controls section').eq(i).addClass('select');

	}

}

	// Ao clicar nos controles, ir para o comentário correspondente

	$('.Controls section').click(function(){
		activo = $(this).attr('n');

		$('.Controls section').removeClass('select');
		$('.Controls section').eq(activo).addClass('select');

		$('.divsTestemunhos').find('div').removeClass('active');
		$('.divsTestemunhos').find('div').eq(activo).addClass('active');

		i = activo + 1;

		// alert(i);

	});

	// ---------------------------Scroll------------------------

	
	$('.one').click(function() {
		  $("html, body").animate({
                   scrollTop: $('.titleOne').offset().top-100
              }, 800);
	});
	$('.SeparatorTwo').click(function() {
		  $("html, body").animate({
                   scrollTop: $('.areaFrase').offset().top-330
              }, 800);
	});
	$('.top').click(function() {
		  $("html, body").animate({
                 
              }, 800);
	});
	

	$(window).scroll(function () {

		posicao = $(document).scrollTop();
		var areaTablet = $('.areaImgTablet').offset().top-200;
		var areaBlog = $('.contentBlog').offset().top-600;

		if (posicao > areaTablet) {
			$('.areaImgTablet img').addClass('isShow');
		}
		if (posicao > areaBlog) {
			$('.contentBlog > article > section').each(function(i) {
				setTimeout( function(){
				  $('.contentBlog > article > section').eq(i).addClass('isShow'); 
				}, 600 *(i+1));
			});		
		}

		// ----------------Video----------------------
		if(posicao >= 1180){
			$('.areaVideo video').attr('autoplay', 'true');
		}
		


		// -----------------Area Slaid IMG Fixed----------
		var barra = posicao * 0.30;

		$('.areaSlaid').css({
			'background-position': '0-'+barra+'px'
		});


	});


	// -------------------Vagas--------------------


	$('.Content_one > article').mouseover(function() {	
		$(this).find('.section-two').addClass('visible');
	});

	$('.Content_one > article').mouseout(function() {	
		$(this).find('.section-two').removeClass('visible');
	});

// ----------------------Menu Vagas----------------
