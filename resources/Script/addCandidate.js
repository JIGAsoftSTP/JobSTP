

var menuSelected;
var posicao;
var N_Menu ='6';


// ------------------ Click nos menus------------------
posicao = $('.Menu li.active').attr('id');

$('.Menu li').click(function() {
	$('.Menu li').removeClass('active');
	$(this).addClass('active');
	getTitle();
	posicao = $(this).attr('id');
	controles();
	trocarForm();

	posicao(posicao);
});

 // ---------------- Click nos controles ----------------------

$('.ProgressBar li').click(function() {

	$(this).addClass('active');		
	$('.Menu li').removeClass('active');


	posicao = $(this).attr('id');
	$('.Menu li').eq(posicao).addClass('active');

	getTitle();	
	trocarForm();

});

// ------------------ Anterior e Seguinte ---------------


$('.anterior').click(function() {
	
	$('.Menu li').removeClass('active');
	$('.Menu li').eq(posicao).prev().addClass('active');
	posicao = $('.Menu li.active').attr('id');

	controles();
	getTitle();
	trocarForm();
});

$('.seguinte').click(function() {

	$('.Menu li').removeClass('active');
	$('.Menu li').eq(posicao).next().addClass('active');
	posicao = $('.Menu li.active').attr('id');

	controles();
	getTitle();
	trocarForm();
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


//-------------------Função esconder botões anterior/Seguinte

function btNextPrev() {
	
}

function posicao(pos) {
	if (pos==='6') {
		alert('Chegouuuuuuuuuuuuuu');
	} else {
		alert('Não Chegouuuuuuuuuuuuuu');
	}
}


// ------------------Função Trocar Formulário com o click nos controles-------
function trocarForm() {
	$('.form div').removeClass('active');
	$('.form div').eq(posicao).addClass('active');
}

function getTitle() {
	menuSelected = $('.Menu li.active').text();
	$('.tilte').text(menuSelected);
}

function controles() {
	$('.ProgressBar li').eq(posicao).addClass('active');
}


// -----------------Mensagens SweetAlert---------------

$('.help').click(function() {
	swal("Precisa de ajuda?", "Por favor contacte o administrador da pagina. Obrigado!", "warning")
	
});

$('.save').click(function() {
	swal({
	  title: "Salvar",
	  text: "Tens a certeza que desejas Salvar e Continuar?",
	  type: "warning",
	  showCancelButton: true,
	  // confirmButtonColor: "#DD6B55",
	  confirmButtonText: "Sim",
	  cancelButtonText: "Não",
	  closeOnConfirm: false,
	  closeOnCancel: false
	},
function(isConfirm){
  if (isConfirm) {
    swal("Os seus dados foram salvos com sucesso!", "Será reencaminhado para a fase seguinte", "success");
  } else {
	    swal("Cancelado", "Salvamento abortado :)", "error");
  }
});
	
});

