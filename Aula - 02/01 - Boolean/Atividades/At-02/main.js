// 2- Crie uma função que receba dois parâmetros numéricos e: 
// Retorne verdadeiro se o primeiro número for maior que o segundo. 
// E falso caso contrário. 
// Em seguida, chame a função com diferentes valores e verifique se o resultado 
// está correto.

let isValidar = null

function testNum(a, b){
    if(a > b){
        isValidar = true
    } 
    else if(b > a){
        isValidar = false
    }
}
testNum(parseInt(prompt("Digite o valor de A")), parseInt(prompt("Digite o valor de b")))
document.write(isValidar)

if (isValidar){
    document.write("<br>  O Valor de A é maior do que B")
} else if(isValidar == null){
    document.write("<br> Não foi preenchido o valor de A e B!")
} else{
    document.write("<br>  O Valor de B é maior do que A")
}