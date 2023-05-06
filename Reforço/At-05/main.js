// 5 - Escreva uma função chamada celsiusParaFahrenheit que receba uma temperatura em graus Celsius como parâmetro e retorne a 
// temperatura equivalente em graus Fahrenheit.

// (5 °C × 9/5) + 32 = 41 °F

let tempo = parseFloat(prompt("Qual é a temperatura para converter?"))

function celsiusParaFahrenheit(temp){
    return (9/5 * temp + 32)
}

alert(`A temperatura em F é: ${celsiusParaFahrenheit(5)}`)