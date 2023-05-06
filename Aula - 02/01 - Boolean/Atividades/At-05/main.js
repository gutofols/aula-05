// 5 - Crie uma variável numérica e atribua a ela um valor entre 1 e 10. 
// Em seguida, crie uma condição que verifique se o valor da variável está entre 
// 5 e 8 (inclusive). Se estiver, exiba uma mensagem no console.

let num01 = parseInt(prompt("Digite um valor de 1 até 10: "))

if (num01 >= 5 && num01 <= 8){
    console.log("O Valor esté entre 5 e 8")
    // coloquei tb no Dom para facilitar a confirmação
    document.write("O Valor esté entre 5 e 8")
}