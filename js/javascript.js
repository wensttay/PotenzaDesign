/* 
  Projeto Final de LFWEB : REMAKE A WEBSITE;
  Feito por : WENSTTAY DE SOUSA ALENCAR;
  Ultima atualização : 16-10-2014;
*/

$(document).ready(function(){
   	/*
    "#toggle").click(function(){
      if($('nav').css("margin-left") == "-160px"){
      	$('nav').animate({"margin-left": '+=160px'});
   		}else{
 			  $('nav').animate({"margin-left": '-=160px'});
   		}
   	});
    */
   	$('#form-contato').hide();

    $(".menu a").click(function(){
      if($('nav').css("margin-left") == "-160px"){
        $('nav').animate({"margin-left": '+=160px'});
      }else{
        $('nav').animate({"margin-left": '-=160px'});
      }
    });

    $("#contato-toggle").click(function(){
      if($('section.section-contato div').css("height") == "0px"){
        $('section.section-contato div').css({"height": '+=770px'});
        $('#form-contato').slideToggle();
        $("#contato-toggle").css("background", "rgba(84, 151, 193, 1)");
        $("#contato-toggle p").css("color", "white");
      }else{
        $('section.section-contato div').animate({"height": '-=770px'});
        $('#form-contato').slideToggle();
        $("#contato-toggle").css("background", "white");
        $("#contato-toggle p").css("color", "rgba(84, 151, 193, 1)");
      }
    });
    
    $(document).ready(function(e) {
      $('.toUp').hide();
      $(window).scroll(function(){
          if ($(this).scrollTop() > 110){
              $('.toUp').fadeIn();
          }else{
              $('.toUp').fadeOut();
          }
      });
      $('.toUp').click(function(){
          $('html,body').animate({
              scrollTop: 0
          },800);
      });
    });
});


function validacao(){
        var formulario = document.form;
 
        if(formulario.nome.value == ""){
                alert("Por favor preencha o campo Nome");
                formulario.nome.focus();
                return false;

        }else if(formulario.nome.value.length < 3){
             	alert("Por favor insira seu nome completo");
                formulario.nome.focus();
                return false;
        }

 		if(formulario.email.value == ""){
                alert("Por favor insira um E-mail")
                formulario.email.focus;
                return false;

        }else if(formulario.email.value.indexOf('@') == -1 || 
       	formulario.email.value.indexOf('.') == -1 || formulario.email.value.length < 6){
        		alert("Por favor insira um E-mail Válido")
                formulario.email.focus;
                return false;
        }

        if(formulario.assunto.value == ""){
                alert("Por favor insira um assunto");
                formulario.assunto.focus();
                return false;

        }else if(formulario.assunto.value.length < 5){
                alert("Por favor insira um assunto mais explicativo");
                formulario.assunto.focus();
                return false;
        }

        if(formulario.mensagem.value == ""){
                alert("Por favor insira uma mensagem");
                formulario.mensagem.focus();
                return false;

        }else if(formulario.mensagem.value.length < 30 || 
        formulario.mensagem.value.indexOf(' ') == -1){
                alert("Por favor insira uma mensagem mais explicativo");
                formulario.mensagem.focus();
                return false;
        }
        alert("Mensagem enviada com Sucesso!");
        return true;
}
