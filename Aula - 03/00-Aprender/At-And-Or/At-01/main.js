// 1 - Crie uma função que receba dois parâmetros booleanos e retorne true se pelo menos 
// um dos parâmetros for verdadeiro e false caso contrário. Use o operador OR lógico para isso.

function teste (v1, v2){

    if(v1 || v2)
        return true
    else{
        return false
    }
}

document.write(teste (false, false))