// 3- Crie uma função que receba dois parâmetros numéricos e retorne true se ambos os parâmetros 
// forem maiores que 10 E menores que 20, caso contrário, retorne false.

function testa (n1, n2) {
    if ((n1 > 10 && n1 < 20) && (n2 > 10 && n2 < 20)) {
        return true
    }
    else{
        return false
    }
}

document.write(testa(12, 14))