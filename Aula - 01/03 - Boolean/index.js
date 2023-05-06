const nome = "Augusto"
const idade = prompt("Qual a idade do Aluno?: ")

let isMior = idade > 18

// >
// >= 
// <
// <=
// ==
// !=

alert(isMior)

if(isMior){
    alert("é Maior de idade")
}
else
    alert("é menor de idade")


    //Para pegar a negativa de um Booleano, usamos o "!"
if(!isMior){
    alert("Você é menor de idade")
}