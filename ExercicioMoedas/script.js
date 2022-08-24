var qtdMoeda1real = 2;
var qtdMoeda50cents = 2;
var qtdMoeda25cents = 2;
var qtdMoeda10cents = 2;
var qtdMoeda5cents = 2;
var qtdMoeda1cents = 2;

var valorTotal = 0;
valorTotal += (1 * qtdMoeda1real);
valorTotal += (0.5 * qtdMoeda50cents);
valorTotal += (0.25 * qtdMoeda25cents);
valorTotal += (0.1 * qtdMoeda10cents);
valorTotal += (0.05 * qtdMoeda5cents);
valorTotal += (0.01 * qtdMoeda1cents);

valorTotal = Number.parseFloat(valorTotal);
valorTotal = valorTotal.toFixed(2);

do {
    
    var informacoes = "";
    informacoes += `Quantidade de moedas: \n`;
    informacoes += `1 real: ${qtdMoeda1real}\n`;
    informacoes += `50 centavos: ${qtdMoeda50cents}\n`;
    informacoes += `25 centavos: ${qtdMoeda25cents}\n`;
    informacoes += `10 centavos: ${qtdMoeda10cents}\n`;
    informacoes += `5 centavos: ${qtdMoeda5cents}\n`;
    informacoes += `1 centavo: ${qtdMoeda1cents}\n\n`;
    informacoes += `Valor total: R$ ${valorTotal}\n\n`;
    informacoes += "Informa o valor do produto";

    do {

        var valorProduto = prompt(informacoes);
            
        if(valorProduto === null){
            break;
        }
        
    } while ( (isNaN(valorProduto)) || (valorProduto <= 0) );
    
    if(valorProduto === null){
        break;
    }

    if( valorProduto > valorTotal){
        alert("Saldo insuficiente");
    } else {
        alert("Pode comprar");
    }

    var retornaInicio = confirm("Deseja verificar novamente?");

} while (retornaInicio);