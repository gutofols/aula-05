// 6 - Escreva uma função chamada calcularMediaAprovacao que receba três notas como parâmetros e retorne aprovado se a média 
// for maior ou igual a 7 e reprovado caso contrário.


let note1 = parseFloat(prompt("Nota 01: "))
let note2 = parseFloat(prompt("Nota 02: "))
let note3 = parseFloat(prompt("Nota 03: "))


function calcMed(n1, n2, n3){

    let med = (n1 + n2 + n3) / 3

    if (0 <= med > 7){
        return "Reprovado!"
    } else if( 7 <= med <= 10){
        return "Aprovado!"
    } else{
        return "Erro!"
    }
}

alert(`O Aluno está: ${calcMed(note1, note2, note3)}`)