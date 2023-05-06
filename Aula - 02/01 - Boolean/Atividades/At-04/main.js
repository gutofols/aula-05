// 4 - Crie uma função que receba um parâmetro string e 
// verifique se o comprimento da string é maior que 5 caracteres. 
// Se for, retorne verdadeiro; 
// caso contrário, retorne falso.

let isValidar = null
let frase = prompt("Diga uma frase:")

function testString(string){
    if(string.length > 5){
        isValidar = true
    } else {
        isValidar = false
    }
}

testString(frase)

document.write(isValidar)
document.write(`<br>A palavra tem ${frase.length} letras: `)