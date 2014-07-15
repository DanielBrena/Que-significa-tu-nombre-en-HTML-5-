function diccionario(letra,genero){
	var resultado = "";
	var aleatorio = Math.ceil(Math.random() *2);
	switch(letra.toUpperCase()){
		case "A":
			if(aleatorio == 1){
				resultado = genero == "hombre" ? 'moroso' :'morosa';
			}else{
				resultado = 'legre';
			}
			
		break;

		case "B":
			if(aleatorio == 1){
				resultado = genero == "hombre"? 'ueno' :'uena';
			}else{
				resultado = genero == "hombre"? 'ondadoso' :'ondadosa';
			}
		break

		case "C":
			if(aleatorio == 1){
				resultado = 'ursi';
			}else{
				resultado = genero == "hombre"? 'arismatico' :'arismatica';
			}
		break

		case "D":
			resultado = 'ulce';
		break

		case "E":
			resultado = 'special';
		break

		case "F":
			resultado = 'acinante';
		break

		case "G":
			resultado = genero == "hombre"? 'eneroso' :'enerosa';
		break

		case "H":
			if(aleatorio == 1){
				resultado = 'umilde';
			}else{
				resultado = 'onordable';
			}
		break

		case "I":
			resultado = genero == "hombre"? 'ngenioso' :'ngeniosa';
			
		break

		case "J":
			resultado = genero == "hombre"? 'usto' :'usta';
		break

		case "L":
			resultado = 'eal';
		break

		case "M":
			resultado = genero == "hombre"? 'odesto' :'odesta';
		break;

		case "N":
			if(aleatorio == 1){
				resultado = 'atural';
			}else{
				resultado = 'ormal';
			}
		break;

		case "O":
			if(aleatorio == 1){
				resultado = 'bediente';
			}else{
				resultado = genero == "hombre"? 'rdenado' :'rdenada';
			}
		break

		case "P":
			if(aleatorio == 1){
				resultado = 'aciente';
			}else{
				resultado = 'erceverante';
			}
		break;

		case "R":
			if(aleatorio == 1){
				resultado = genero == "hombre"? 'isueño' :'isueña';
			}else{
				resultado = genero == "hombre"? 'espetuoso' :'espetuosa';
			}
		break

		case "S":
			if(aleatorio == 1){
				resultado = genero == "hombre"? 'incero' :'incera';
			}else{
				resultado = 'ensible';
			}
			
		break

		case "T":
			if(aleatorio == 1){
				resultado = 'enaz';
			}else{
				resultado = 'olerante';
			}
		break

		case "U":
			resultado = genero == "hombre"? 'nido' :'nida';
		break

		case "V":
			if(aleatorio == 1){
				resultado = 'ivaz';
			}else{
				resultado = 'eraz';
			}
			
		break

		case "Y":
			resultado =  ' mas genial';
		break

		case "Z":
			resultado = genero == "hombre"? 'zzZZ dormilon' :'zzZZ dormilona';
		break

		default:
		resultado = letra;

	}
	return resultado;
}