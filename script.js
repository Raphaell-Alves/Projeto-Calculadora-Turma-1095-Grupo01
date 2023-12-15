let arrHistorico = [];

const soma = (valor1, valor2) => alert(`O Valor da Soma é: ${valor1 + valor2}`) & arrHistorico.push(`• ${valor1} + ${valor2} = ${valor1 + valor2}`);

const subtracao = (valor1, valor2) => alert(`O Valor da Subtração é: : ${valor1 - valor2}`) & arrHistorico.push(`• ${valor1} - ${valor2} = ${valor1 - valor2}`);

const divisao = (valor1, valor2) => valor2 ? alert(`O Valor da Divisão é: ${valor1 / valor2}`) & arrHistorico.push(`• ${valor1} / ${valor2} = ${valor1 / valor2}`) : alert('Não Podemos dividir por 0') & operacoesCalculadora();

const multiplicacao = (valor1, valor2) => alert(`O Valor da Multiplicação é: : ${valor1 * valor2}`) & arrHistorico.push(`• ${valor1} * ${valor2} = ${valor1 * valor2}`);

const raizQuadrada = (valor1) => (valor1 >= 0) ? alert(`O Valor da Raiz Quadrada é: ${Math.sqrt(valor1).toFixed(2)}`) & arrHistorico.push(`• O Valor da Raiz Quadrada é: ${Math.sqrt(valor1).toFixed(2)}`) : alert("Não Podemos Calcular Números negativos");

const potenciacao = (valor1, valor2) => alert(`O valor da Potência de ${valor1} sobre ${valor2} é: ${Math.pow(valor1, valor2)}`) & arrHistorico.push(`• O valor da Potência de ${valor1} sobre ${valor2} é: ${Math.pow(valor1, valor2)}`);

const listarHistoricoCalculadora = () => alert(arrHistorico.join("\n"));

// Receber valor numérico:
function receberNumero() {
    for (let i = 0; i < 1;) {
        let numeroRecebido = parseFloat(prompt("Digite um Número"));
        if (!isNaN(numeroRecebido)) {
            return numeroRecebido;
        }
        alert("Valor invalido!!!\nTente Novamente.")
    }
}

// Menu calculadora:
function operacoesCalculadora() {
    const calculadora = prompt(`Digite uma escolha para a Calculadora: \n\n• Soma: + \n• Subtração: - \n• Divisão: / \n• Multiplicação: * \n• Raiz: sqrt \n• Potênciação: pow \n• Histórico: hist`); 

    switch (calculadora) {
        case '+':  soma(receberNumero(), receberNumero());
            break;
        case '-': subtracao(receberNumero(), receberNumero());
            break;
        case '/': divisao(receberNumero(), receberNumero());
            break;
        case '*': multiplicacao(receberNumero(), receberNumero());
            break;
        case 'sqrt': raizQuadrada(receberNumero());
            break;
        case 'pow': potenciacao(receberNumero(), receberNumero());
            break;
        case 'hist': listarHistoricoCalculadora();
            break;
        default: alert("Erro, Digite Novamente!!!") & operacoesCalculadora();
            break;
    } operacoesCalculadora();
}

operacoesCalculadora();