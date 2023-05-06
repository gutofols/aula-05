// 5 - Crie uma função que receba três parâmetros booleanos e retorne: 
// true se pelo menos dois dos parâmetros forem verdadeiros, 
// caso contrário, retorne false. 
// Use os operadores AND e OR lógicos para isso. 


function testa(par1, par2, par3){
    if((par1 || par2) && (par1 || par3) && (par2 || par3)){
        return true
    } else {
        return false
    }
}

alert(testa(true, true, false))