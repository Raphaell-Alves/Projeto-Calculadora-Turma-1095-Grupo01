function somar(){
    const primeiroNumero = parseFloat(prompt("Digite um Número"));
    const segundoNumero = parseFloat(prompt("Digite outro Número"));
    const resultadoSomar = primeiroNumero + segundoNumero;
    alert("O Valor da Soma é: "+ resultadoSomar)
}

function subtrair(){
    const primeiroNumero = parseFloat(prompt("Digite um Número"));
    const segundoNumero = parseFloat(prompt("Digite outro Número"));
    const resultadoSubtrair = primeiroNumero - segundoNumero;
    alert("O Valor da Subtração é: "+ resultadoSubtrair);
}

function divisao(){
    const primeiroNumero = parseFloat(prompt("Digite um Número"));
    const segundoNumero = parseFloat(prompt("Digite outro Número"));

    if(segundoNumero !== 0){
        const resultadoDivisao = primeiroNumero / segundoNumero;
        alert("O Valor da Divisão é: " + resultadoDivisao)
    }else{
        alert("Não Podemos dividir por 0")
    }
}

function multiplicar(){
    const primeiroNumero = parseFloat(prompt("Digite um Número"));
    const segundoNumero = parseFloat(prompt("Digite outro Número"));
    const resultadoMultiplicar = primeiroNumero * segundoNumero;
    alert("O Valor da Multiplicação é: "+ resultadoMultiplicar)
}

function raizQuadrada(){
    const numeroDaRaiz = parseFloat(prompt("Digite um Número"));

    if(numeroDaRaiz >=0){
        const resultadoRaiz = Math.sqrt(numeroDaRaiz);
        alert("O Valor da Raiz Quadrada é: " + resultadoRaiz);
    }else {
        alert("Não Podemos Calcular Números negativos")
    }
}

function operacoesCalculadora(){
    const calculadora = prompt("Digite uma escolha para a Calculadora: +, -, /, *, sqrt (raiz)");

    switch (calculadora){
        case '+':  somar();
            break;
        case '-': subtrair();
            break;
        case '/': divisao();
            break;
        case '*': multiplicar();
            break;
        case 'sqrt': raizQuadrada();
            break;
        default: alert("Erro, Digite Novamente!!!")

    }
}

operacoesCalculadora();