// 4 - Escreva uma função chamada maiusculaInicial que receba uma string como parâmetro e retorne a string com a primeira 
// letra em maiúscula.

let nome = prompt("Digito e nome: ")

function maiusculaInicial(str){
    let tempo = str.charAt(0).toUpperCase()
    return (tempo + str.slice(1))
}

alert(`Corrigido: ${maiusculaInicial(nome)}`)