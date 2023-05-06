// 6 - Crie uma função que receba três parâmetros numéricos e: 
// Retorne verdadeiro se a soma dos dois primeiros for igual ao terceiro e 
// falso caso contrário. 
// Em seguida, chame a função com diferentes valores e verifique se o resultado 
// está correto.

function guto (a,b,c){
    if(a+b == c){
        return true
    } else {
        return false
    }
}

document.write(guto(4,4,9))