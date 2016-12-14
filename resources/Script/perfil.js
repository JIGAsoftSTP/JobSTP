
// ---Icone confoguração Mudar de cor com click / areaPrincipal aparecer e/ou Esconder ------------------

$('.masterConfig section').click(function() {
	$($(this).find('i').toggleClass('configActive'));
	$('.areaPrincipal').toggleClass('ConfigVisible');
});

// --------- Ao clicar nos icones de controlo mudar de cor e Trocar de divs  ---------

$('.areaTool label').click(function() {
	$('.areaTool label').removeClass('ConfigSelected');
	$($(this).addClass('ConfigSelected'));

});

$('.areaTool label').eq(0).click(function() {
	$('.areas div').addClass('partsConfigHide').fadeIn('slow/400/fast');
	$('.areas div').eq(0).removeClass('partsConfigHide');
});

$('.areaTool label').eq(1).click(function() {
	$('.areas div').addClass('partsConfigHide').fadeIn('slow/400/fast');
	$('.areas div').eq(1).removeClass('partsConfigHide');
});

$('.areaTool label').eq(2).click(function() {
	$('.areas div').addClass('partsConfigHide').fadeIn('slow/400/fast');
	$('.areas div').eq(2).removeClass('partsConfigHide');
});
