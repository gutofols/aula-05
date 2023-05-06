// 2 - Escreva uma função chamada maiorNumero que receba dois parâmetros e 
// retorne o maior deles.

function maiorNumero(p1, p2){
    if (p1 > p2){
        return p1
    } else if (p2 > p1){
        return p2
    }

}

let num01 = parseInt(prompt("Digite o primeiro valor: "))
let num02 = parseInt(prompt("Digitee o Segundo valor: "))

alert(`O Maior valor escrito foi: ${maiorNumero(num01, num02)}`)