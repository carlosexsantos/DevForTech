do {
   
    var info = "";
    info += "Informe uma das opções abaixo: \n";
    info += "F - Converte Celsius para Fahrenheit \n";
    info += "C - Converte Fahrenheit para Celsius";

    do {
        var converterPara = prompt(info);
        converterPara = converterPara.toUpperCase();

        if (converterPara === null) {
            break;
        }

    } while ( (converterPara != "C") && (converterPara != "F") );

    do {
        var temp = ( converterPara == "C" ) ? "F" : "C";
        var temperatura = prompt(`Informe a temperatura ${temp}°`);
    } while ( isNaN(temperatura) );

    if ( converterPara == "C" ){
        var temperaturaConvertida = (temperatura - 32) / 1.8;
    } else {
        var temperaturaConvertida = temperatura * 1.8 + 32;
    }

    temperaturaConvertida = temperaturaConvertida.toFixed(1);

    alert(`Temperatura informada: ${temperatura}° ${temp}\nTemperatura convertida: ${temperaturaConvertida}° ${converterPara}`)

    var retornaInicio = confirm("Deseja verificar novamente?");

} while (retornaInicio);