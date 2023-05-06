// 4 - Escreva um programa que solicite ao usuário dois números e 
// verifique se pelo menos um dos números é positivo E menor que 100. 
// Se essa condição for verdadeira, exiba uma mensagem 
// dizendo que pelo menos um dos números é válido, caso contrário, exiba uma mensagem dizendo que 
// nenhum dos números é válido.

let num01 = parseInt(prompt("Digite um Valor qualquer: "))
let num02 = parseInt(prompt("Digite um outro valorr:"))

if((num01 >= 0 && num01 < 100) || (num02 >= 0 && num02 < 100)  ){
    alert("true")
} else{
    alert("false")
}