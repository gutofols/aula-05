// 2 - Escreva uma função chamada maiorNumero que receba dois parâmetros e retorne o maior deles.

let num01 = parseInt(prompt("Digite o primero valor: "))
let num02 = parseInt(prompt("Digite o segundo valor: "))

function maiorNumero (n1, n2){
    if( n1 > n2){
        return n1
    } else {
        return n2
    }
}

alert(maiorNumero(num01, num02))

document.write(`o maior valor é ${maiorNumero(num01, num02)}`)