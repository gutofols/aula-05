// 3 - Escreva uma função chamada parOuImpar que receba um número como parâmetro e 
// retorne par se o número for par e ímpar caso contrário.

let num = parseInt(prompt("Digite um valor inteiro: "))

function parOuImpar (pa1) {

    if (pa1 %2 == 0){
        return "par"
    } else{
        return "impar"
    }
}

alert(`O valor que foi solicitado é: ${parOuImpar(num)}`)