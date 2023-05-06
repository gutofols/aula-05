// 2 - Escreva um programa que solicite ao usuário a idade e a altura de uma pessoa. 
// Se a pessoa tiver mais de 18 anos E a altura for maior ou igual a 1,70m, exiba uma mensagem 
// dizendo que ela pode entrar no clube, caso contrário, exiba uma mensagem dizendo que ela não 
// pode entrar.

let idade = parseInt(prompt("Digite sua idade: "))
let halt = parseFloat(prompt("Digite sua altura: "))

if (idade >= 18 && idade >= 1.7){
    alert(`Vovê pode entrar no Grupo!`)
} else {
    alert("Você não pode entrar no clube.")
}