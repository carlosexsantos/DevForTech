function verificaDDI(ddi){

    switch (ddi){
        case 1:
            return "Estados Unidos";
        case 49:
            return "Alemanha";
        case 54: 
            return "Argentina";
        case 55:
            return "Brasil";
        case 35:
            return "Portugal";
        default:
            return "DDI não cadastrado"
    }
    
}

do {

    do {
        var ddi = prompt("Informe o DDI para consulta");
    } while ( (isNaN(ddi)) || ddi === "");

    if (ddi === null) {
        break;
    }

    ddi = Number.parseInt(ddi);

    var paisDDI = verificaDDI(ddi);

    alert(`DDI: +${ddi} \nPaís: ${paisDDI}`);

    var retornaInicio = confirm("Deseja verificar novamente?");

} while (retornaInicio);
