// 10 - Crie uma função que receba um parâmetro string e verifique se o primeiro 
// caractere dessa string é uma letra maiúscula. 
// Se for, retorne verdadeiro;   caso contrário, retorne falso.

function verifica (str){
    let primaLetra = str.charAt(0)

    if (primaLetra == primaLetra.toUpperCase()){
        document.write("Começou com UpperCase!")
    } else {
        document.write("Começou com LowerCase!")
    }
}
verifica(prompt("Digite um nome ou uma palavra!"))

// Essa tb foi BEM com base no que o Prof fez. Acho que apagou um trinco da chama.
// Mas, não ta morto quem peleia, ja diria o velho poeta!
