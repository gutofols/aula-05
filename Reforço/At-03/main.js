// 3 - Escreva uma função chamada parOuImpar que receba um número como parâmetro e retorne par se o número for par e 
// ímpar caso contrário.

let valor = parseInt(prompt("Digite o valor que deve ser testado: "))

function parOuImpar(n1){
    if (n1 %2 == 0){
        return "Par"
    } else{
        return "Impar"
    }
}

alert(`O numero é: ${parOuImpar(valor)}`)