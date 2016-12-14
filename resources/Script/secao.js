
// ----------------Fechar ao clicar no Close

$('.close').click(function(event) {
	$('.body_secao').fadeOut(400);
	$('body').css('overflow', 'scroll');
});

//----------------Abrir ao clicar no BT Criar Conta
$('.BTReg').click(function(event) {
	$('.body_secao').fadeIn(400);
	$('body').css('overflow', 'hidden');
	haveAcont();
			
});

//----------------Abrir ao clicar no BT Login
$('.BTLogin').click(function(event) {
	$('.body_secao').addClass('show animated zoomIn');
	NoAcont();		
});

//-------------------Esconder text ao clicar no "Já tenho conta"
// $('.cont').click(function(event) {

// 	if ($(this).hasClass('noAcount')) {
// 		NoAcont();
// 	}

// 	else{
// 		haveAcont();
// 	}
// });

function haveAcont() {
	// $('.cont').toggleClass('haveCont noAcount');
	$('.artConfirPass').toggleClass('hide');
	$('.cont').text('Já tenho conta.');
	$('.titleSecao').text('Criar Conta');
	$('.btSave').val('Criar Conta')
	$('.content').css('height', '22rem');
	$('.face').text('Registrar Pelo facebook.');
	$('.google').text('Registrar pelo Google +');
}

function NoAcont() {
	// $('.cont').toggleClass('haveCont noAcount');
	$('.artConfirPass').toggleClass('hide');
	$('.cont').text('Não tenho conta.');
	$('.titleSecao').text('Entrar');
	$('.btSave').val('Entrar');
	$('.content').css('height', '20rem');
	$('.face').text('Logar Pelo facebook.');
	$('.google').text('Logar pelo Google +');
}


// ---------------- Focus na Text---------------
$('input').focus(function() {
	$(this).parent().css('border-bottom', '1px solid #29B6F6');
});
$('input').blur(function() {
	$(this).parent().css('border-bottom', '1px solid #ddd');
});

trocar();

function trocar() {
	$('.tools label').eq(0).click(function(event) {
		$('.tilte').text('Candidato');
		$('.TextContent').text('O JobSTP é uma plataforma muito simples de usar. Você apenas precisa preencher o seu perfil com os seus dados, que será enviada para o seu email todas as oportunidades de emprego adequadas ao seu perfil.')
		$(this).html('<i class="ion-briefcase"></i> És Empregador?')
			   
	});
}