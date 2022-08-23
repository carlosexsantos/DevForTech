do {

    do {

        var palavra = prompt("Informe uma palavra");

        if ( palavra == null ) {
            break;
        }
        
    } while ( (!isNaN(palavra)) || palavra == "" );

    var primeiraLetra = palavra.substring(0,1);
    var primeiraLetraMaiuscula = primeiraLetra.toUpperCase();

    if ( primeiraLetra == primeiraLetraMaiuscula ) {
        alert("A primeira letra é maiúscula");
    } else {
        alert("A primeira letra NÃO é maiúscula");
    }

    var retornaInicio = confirm("Deseja verificar novamente?");

} while ( retornaInicio );