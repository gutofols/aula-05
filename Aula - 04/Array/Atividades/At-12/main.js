// 12 - Crie uma função que recebe um array de números e retorna um novo array 
// com apenas os números pares.

let numeros = [12, 43, 54, 76, 23, 97, 56, 55, 33, 91, 135]


function imprimePar(num){
    for (let i = 0; i <num.length; i++) {
        if (num[i] %2 == 0){
            document.write(`os numeros pares são ${num[i]} <br>`);
        }
    }
}

imprimePar(numeros)