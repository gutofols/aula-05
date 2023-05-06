// 5 - Crie um array com 10 números aleatórios e exiba na tela apenas os números 
// maiores que 5.


// Mostrar no valores maior do que X
let numeros = [23,6,1,7,3,56,23,9,2,4]
let maiorQue5 = []

for (let i = 0; i < numeros.length; i++) {
    if(numeros[i] > 5){
        //alert(numeros[i])
    }
}

()=>{}

numeros.forEach((numero)=>{
    if(numero > 5){
    maiorQue5.push(numero)        
    }
})

alert(maiorQue5)