// 4 - Escreva uma função chamada maiusculaInicial que receba uma string como parâmetro e: 
// retorne a string com a primeira letra em maiúscula.

let nome = prompt("Qual o nome:")

function maiulculaInicial(str){
    let temp = str.charAt(0).toUpperCase();

    return (temp + str.slice(1))
}

alert(`O Nome correto fica: ${maiulculaInicial(nome)}`)