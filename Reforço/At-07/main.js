// 7 - Crie uma função que receba dois parâmetros booleanos e retorne true se pelo menos 
// um dos parâmetros for verdadeiro e false caso contrário. Use o operador OR lógico para isso.

let idade = parseInt(prompt("Qual a Idade:"))
let sexo = prompt("Sexo: M ou F ou NB")

let aprova1 = null
let aprova2 = null

if (idade >= 18){
    aprova1 = true
}else {
    aprova1 = false
}

if (sexo = "M"){
    aprova2 = false
} else if(sexo = "F"){
    aprova2 = true
} else if(sexo = "NB"){
    aprova2 = false
}

alert( aprova1)
alert( aprova2)

function aprova(par1, par2){
    if (aprova1 || aprova2){
        return "Aprovado!"
    } else {
        return "Não Aprovado!"
    }
}

alert (aprova(aprova1, aprova2))