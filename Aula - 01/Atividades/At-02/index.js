// 2. Faça um programa que entre com o nome e o salário de um funcionário e mostre seu
// novo salário, sabendo que o mesmo teve um aumento de 10%. 

let nome = prompt("Digite o nome do colaborador: ")
let salario = parseFloat(prompt("Qual é o salário do colaborador?"))

let reajuste = salario * 0.1

let novoSalario = reajuste + salario

alert(`O Salário do ${nome} é R$: ${salario}.`)
alert(`O reajuste do ${nome} é: R$: ${reajuste}`)
alert(`O novo salário é: R$: ${novoSalario}`)