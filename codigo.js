const display = document.querySelector('#disp')
var primeiroValorOperacao
var operador

function adicionarNumero(idvalor){
    switch (idvalor){
        case 'B0':
            display.value += 0
            break;
        case 'B1':
            display.value += 1
            break;
        case 'B2':
            display.value += 2
            break;
        case 'B3':
            display.value += 3
            break;
        case 'B4':
            display.value += 4
            break;
        case 'B5':
            display.value += 5
            break;
        case 'B6':
            display.value += 6
            break;
        case 'B7':
            display.value += 7
            break;
        case 'B8':
            display.value += 8
            break;
        case 'B9':
            display.value += 9
            break;
    }
    document.querySelector('#disp').innerHTML = display.value 
}

function operacao(idOperacao){
    primeiroValorOperacao = display.value
    switch(idOperacao){
        case 'multiplicacao':
            operador = 'multiplicacao'
            break;
        case 'divisao':
            operador = 'divisao'
            break;
        case 'adicao':
            operador = 'adicao'
            break;
        case 'subtracao':
            operador = 'subtracao'
            break;
    }
    display.value = ''
}

function resultado(){
    let valor1 = Number(primeiroValorOperacao)
    let valor2 = Number(display.value)
    switch(operador){
        case 'multiplicacao':
            display.value = valor1 * valor2
            break
        case 'divisao':
            display.value = valor1 / valor2
            break
        case 'adicao':
            display.value = valor1 + valor2
            break
        case 'subtracao':
            display.value = valor1 - valor2
            break
    }
}

function limpar(){
    display.value = ''
    primeiroValorOperacao = ''
}
