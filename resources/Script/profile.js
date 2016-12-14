

var menuSelected;
var posicao;
var N_Menu =6;
var texto;
var N_Cheq;
var message;



// ------------------ Click nos menus------------------


posicao = $('.Menu li.active').attr('id');

$('.Menu li').click(function() {
	$('.Menu li').removeClass('active').find('i.icon-pencil').remove();
	$(this).addClass('active').append('<i class="icon-pencil"></i>');
	
	posicao = $(this).attr('id');
	trocarForm();

});


// -----------Manter a label com classe 'in' se a text estiver preenchida--------

var s = $('input , textarea');
s.each(function(){
    var t = $(this);
    if(t.val()){
        t.prev().addClass('in');
    }
});

var vazios = s.prev().not('in'); //aqui você tem os inputs vazios


// ---------------------Efeito Focus Text-------------------

$('.contentRight .AreaForm .form article label'	).mouseup(function () {
	$(this).addClass('in');
	$('.in + input, .in textarea').focus();
});

$('.contentRight .AreaForm .form article input, .form article textarea').focus(function () {
	
	$(this).prev().addClass('in');
});


$('.in + input, .in + textarea').focusout(function() {
	if ($(this).text()==""){
		$(this).addClass('class_name')
	}
});

$('select').click(function(event) {
	var texto= $(this).find('option').eq(0).val();
	
});


// -----------------------Adicionar Secção-------------------

var index = N_Menu +1;

$('.NewSection').click(function() {
	$('.Menu li').eq(N_Menu)
	.after($('<li class="liAdd"> <i class="icon-pushpin"></i> </li>')
		.attr({
		id: N_Menu+1,
		})
		.append($('<input type="text" placeholder="Nome da secção..." class="txtAdicionado">').focus())
		.append($('<span> + </span>').attr('class', 'btsmallSection')
			.on('click', function(event) {
				var TextoLi = $('.txtAdicionado').val();
				$('.Menu li').eq(N_Menu)
				.after($('<li> <i class="icon-folder-plus"></i>' +   TextoLi + ' </li>')
				);
				 N_Menu = N_Menu +1;
				 $('.txtAdicionado').val('');
				 // trocarForm();
				 // Adicionar ID ao li criado e Criar Div append div com último ID
			}))
	);	
});



// ------------------Função Trocar Formulário com o click nos controles-------

function trocarForm() {
	$('.form > div').removeClass('active animated bounceInDown');
	$('.form > div').eq(posicao).addClass('active animated bounceInDown');
}

// -----------------------Adicionar Nova Formação/ Experiência / Curso ------------------------

$('.btNewExper').click(function() {
	$('.areaInformation').addClass('animated rollOut outside');
	$('.bodyFormAcad').removeClass('outside zoomOut').addClass('animated zoomIn');
	$('.addNew').addClass('outside');
});

$('.btSave').click(function(event) {
	$('.bodyFormAcad').addClass('outside zoomOut');
	$('.Experience').addClass('animated slideInUp top').removeClass('outside');
	$('.addNew').removeClass('outside').addClass('animated slideInDown');
});

//-------------------Selecionar Gostos---------

$('.areaLazer article').click(function() {
	$(this).toggleClass('select');

});

// -------------------Paginação---------

$('.paginator label').click(function() {
	$('.paginator label').removeClass('active');
	$(this).addClass('active');

});

$('.seeTable').click(function (){
        $('.areaTableConta').fadeToggle();
});


// ---------------------Select---------------------

$('.selectBoxes :text').focus(function(event) {
	$('.selectBoxes > div').addClass('show');
});
$('.selectBoxes :text').blur(function(event) {
	$('.selectBoxes > div').removeClass('show');
});

$('.selectBoxes article label').click(function(event) {
	texto=$(this).text();
	$('.selectBoxes :text').val(texto);
});

N_Cheq=0;
$('.selectBoxes > div > article').click(function() {
	$(this).toggleClass('check');
	$('.n-Select').addClass('n-SelectIn');
	N_Cheq = N_Cheq +1;
	// alert(N_Cheq);
	$('.cont').val(N_Cheq);
	// $(this).find(':checkbox').select();
});


// --------------Notification and SMS-------

$('.notific').click(function() {
	$('#notific').addClass('onNotfic animated fadeInUp');
	$('#sms').removeClass('onNotfic animated fadeInUp');
});

$('.sms').click(function() {
	$('#sms').addClass('onNotfic animated fadeInUp');
	$('#notific').removeClass('onNotfic animated fadeInUp');
});

$('.content').click(function(event) {
	$('.Notification').removeClass('onNotfic animated fadeInUp');
	$('#sms').removeClass('onNotfic animated fadeInUp');
});


// ------------------Help----------------------

$('.btHelp').click(function(event) {
	$('.helpArea').addClass('showHelp');
});

$('.closeHelp, .closeChat').click(function(event) {
	$('.helpArea').removeClass('showHelp');
});


// ------------------Chat------------------------

$('.inputMessage').keyup(function(event) {
	message = $(this).val(); 
	
});
$('.sendSMS').click(function(event) {
	if (message !=null) {
		$('.areaChat').append($('<span id="me"></span>').text(message));
		setTimeout( function(){
		  $('.areaChat').append('<span id="him">onNotfic animated fadeInUp</span>'); 
		}, 800);
		$('.inputMessage').val('');

		var altur = $('.areaChat').height();

		$('.areaChat').animate({
			scrollTop: altur
		}, 900);
		
		altur += $('.areaChat').height();
		alert(altur);
	}
	
});

$('.btContact').click(function(event) {
	$('.chatHelp').addClass('animated fadeInUp').removeClass('no');
	$('.contentHelp').addClass('no');

});

$('.minim').click(function(event) {
	$('.chatHelp').toggleClass('minimize');
	$(this).toggleClass('icon-enlarge2');

	if ($('.minim').hasClass('icon-enlarge2')) {
		$(this).text('');
	}
	else{
		$(this).text('_');
	}
});



// --------------------Search---------------------


// $('.search i').click(function(event) {
// 	$('.search :input').toggleClass('SearcIn').focusin();
// });
// $('.search :input').blur(function(event) {
// 	$(this).removeClass('SearcIn');
// });