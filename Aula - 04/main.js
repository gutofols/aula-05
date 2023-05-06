let nome = "Gabriel"
let idade = 18
let isVermelho = true

//Array

let alunos = ["Augusto", "Gabriel", "Pedro"]

// Usamos esse cédigo para adicionar um termo no nosso conjunto
alunos.push("Mariano")

// é desta forma que modificamos um termo dentro do nosso conjunto.
alunos[3] = "Gustavo"

// Apagamos os termos a partir do 0, e vamos apagar um numero igual a "1"
alunos.splice(0, 1)

// Remove a Ultima posição do Array
alunos.pop()
alert(alunos)

alert(nome.split('r'))