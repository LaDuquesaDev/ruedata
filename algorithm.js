function contarPalindromos(string) {
    if (string.length <= 2) {
    	return 0;
    }

    count = 0

    for (var i = 0; i < string.length; i++) {
      count += contarPalindromosConCentro(string, i)
      count += contarPalindromosPares(string, i)
    }

    return count
}

function contarPalindromosConCentro(string, i) {
    count = 0

    for (var j = 1; i-j>=0 && i+j < string.length; j++) {
      if (string.charAt(i-j) === string.charAt(i+j)) {
          count += 1
      }
      else {
          return count
      }
    }

    return count
}

function contarPalindromosPares(string, i) {
    count = 0
    
    for (var j = 1; i-j>=0 && i+j < string.length; j++) {
      if (string.charAt(i-j+1) === string.charAt(i+j)) {
          count += 1
      }
      else {
          return count
      }
    }

    return count
}

console.log("Palindromos: ",contarPalindromos("anulalalunapaisajemontanaguaamoraromacomidaluzazulsillagatobotellacamarayosoypalindromocasaverdebanderaventanacangrejolarutanosaportootropasonaturaliniciaracaestoseralodoodolaresdonasbarcosmarcieloaviontierrapaisbicicletaestonoespalindromojugarseverlasalrevesusandounradarenelojorejero"));
