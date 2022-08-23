var contaSenhaIncorreta = 0

do {
    var senha = prompt("Informe a senha: ");

    if ( senha == "batatafrita" ) {
        alert("Acesso permitido");
        break;
    } else {
        contaSenhaIncorreta++;
        if (contaSenhaIncorreta == 3){
            alert("Senha incorreta \nExcedido o limite de tentativas.");
            break;
        }
        alert(`Senha incorreta \nRestam ${3 - contaSenhaIncorreta} tentativas`);
        var senhaIncorreta = true;
    }


} while ( senhaIncorreta );