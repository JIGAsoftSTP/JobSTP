/* global slow */
$(function ()
{
     $('#slaid img:eq(0)').addClass("ativo").show();
     // var texto = $(".ativo").attr("alt");
     // $('#slaid').prepend("<p>"+texto+"</p>");
     setInterval(slideshow,10000);
     
     function slideshow(){
         
         if($('.ativo').next().size())
         {   
             ($('.ativo')
			 .fadeOut('slow')
			 .removeClass('ativo')
			 .next().fadeIn(600)
			 .addClass('ativo'));   
         }
         else{
             $('.ativo')
			 .fadeOut(800)
			 .removeClass('.ativo');
             $('#slaid img:eq(0)')
			 .fadeIn(500)
			 .addClass('ativo'); 
             
         }
         var texto = $('.ativo').attr("alt");
			 $('#slaid p')
			 .fadeOut(700)
			 .html(texto)
			 .delay(500)
			 .fadeIn(1000);
     }
});
