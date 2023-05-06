// 3 - Crie uma função que receba um parâmetro numérico e: 
// Retorne verdadeiro  se esse número for par e 
// falso se for ímpar. Em seguida, chame a função com diferentes valores e 
// verifique se o resultado está correto.



// Fiz com grande ajuda do nosso amigo Chat-GPT. Entendo o que foi feito Mas não 
// fui capaz de desenrolar tudo sozinho! infelizmente.
function testaPar(num){
    if(num %2 == 0){
        return true
    } else{
        return false
    }
}

// Mas essa parte eu fiz sozinho! (JURO! hehehe)
document.write(testaPar(parseFloat(prompt("Digite um número!"))))