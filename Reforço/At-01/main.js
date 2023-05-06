// 1 - Escreva uma função chamada soma que receba dois parâmetros e retorne a soma deles

let num01 = parseFloat(prompt("Digite o primeiro valor: "))
let num02 = parseFloat(prompt("Digite o segundo valor: "))

function soma(p1, p2) {
    return p1 + p2;
}

alert(soma(num01, num02))
document.write(`O Valor da Soma é: ${soma(num01, num02)}`)