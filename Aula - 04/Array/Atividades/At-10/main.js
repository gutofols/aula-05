// 10 - Escreva uma função chamada multiplicarNumeros que receba um array de números como parâmetro e retorne a 
// multiplicação desses números.

let numeros = [12, 25, 34, 2, 10]
let total = 1


// 2 - só então, eu criei a funcão, dando pra ela o unico parametro que poderia 
// ser atribuido dentro dela.
function multiplicarNumeros (teste){


    // 1 - Primeiro eu fiz a regra que multiplicaria os valores.
    for(let i = 0; i < teste.length; i++){
        total = total*numeros[i]    
    }
}

// Chamei a função para poder colocar o novo valor no "total"
multiplicarNumeros(numeros)

// e o joguei na tela como saída para o usuário.
alert(total)