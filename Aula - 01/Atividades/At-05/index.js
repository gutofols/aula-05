// 5. Faça um algoritmo que leia o nome e as três notas de uma disciplina de um aluno 
// e ao final escreva o nome do aluno, sua média e se ele foi aprovado, 
// sabendo-se que a média para aprovação é igual ou superior a 8. 

// let nome = prompt("Digite o nome do Alumo:")
// let not01 = parseFloat(prompt("Digite a Primeira nota do Aluno"))
// let not02 = parseFloat(prompt("Digite a Segunda nota do Aluno"))
// let not03 = parseFloat(prompt("Digite a Terceira nota do Aluno"))

// let med = (not01 + not02 + not03)/3

// if(med >= 8 && med <= 10){
//     alert(`O Aluno foi aprovado! sua média é ${med}`)
// }
// else if(med < 8 && med >= 0){
//     alert(`O Aluno foi reprovado! sua média é ${med}`)
// }
// else if(med < 0 || med > 10){
//     alert("Alguma nota foi digitada de forma errada!")
// }


function calcmed(num1, num2, num3) {
    let media = ((num1 + num2 + num3)/3)
    alert(media)
}

calcmed(23, 34, 55)