// 14 - Crie uma função que recebe um array de números e um valor limite e retorna um 
// novo array com apenas os valores menores que o valor limite.

let numeros = [3, 5, 7, 9, 2, 4, 12, 15, 16, 19, 20, 21, 23, 25, 27, 28, 30,33, 35,37,]
let limite = parseInt(prompt(("Digite o valor limite entre 2 e 30 da lista:")))

function cortaValor(value, value2){
    for (let i = 0; i < value.length; i++) {
        if (value[i] > value2) {
            document.write(`Os valores são: ${value[i]} <br>`)
        }
    }
}

cortaValor(numeros, limite);