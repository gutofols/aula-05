// 5 - Escreva uma função chamada celsiusParaFahrenheit que receba uma temperatura em graus Celsius 
// como parâmetro e retorne a temperatura equivalente em graus Fahrenheit.

let temperatura = parseFloat(prompt("Digite a temperatura em C: "))

function celsiusParaFahrenheit(gc){
    return (gc*(9/5))+32
}

alert(celsiusParaFahrenheit(temperatura))