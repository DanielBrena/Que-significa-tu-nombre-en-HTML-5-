$(document).ready(function(){

	$("#btn-crear").click(function(){

		$("#nombre").html("");
		$("#palabras").html("");

		var nombre = $("#caja-texto").val();

		if(nombre.length > 8){
			alert("Tu nombre es demasiado Grande!");
		}else{

			var sexo = $('input:radio[name=sexo]:checked').val();
			var letras = new Array();

			for(var i = 0; i < nombre.length; i++){
				letras[i] = nombre.charAt(i);
			}

			for(var i = 0; i < letras.length; i++){
				$("#nombre").append("<div class='letra'>" + letras[i].toUpperCase() + "<div>");
			}

			for(var i = 0; i < letras.length; i++){
				$("#palabras").append("<div class='p'>" + diccionario(letras[i].toUpperCase(),sexo) + "<div>");
			}
		}		
	})
});