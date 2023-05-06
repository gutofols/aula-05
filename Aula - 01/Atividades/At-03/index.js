// 3. Faça um algoritmo que leia dois valores inteiros A e B se os valores forem iguais devem
// ser somado os dois, caso contrário multiplique A por B ao final do cálculo ao final do
// cálculo atribuir o valor para uma variável C. 

let num01 = parseInt(prompt("Digite o primeiro valor: "))
let num02 = parseInt(prompt("Digite o segundo valor: "))
let resul = null


if( num01 == num02 ){
    resul = (num01 + num02)
} 
else{
    resul = (num01 * num02) 
}
alert(`O resultado é: ${resul}`)