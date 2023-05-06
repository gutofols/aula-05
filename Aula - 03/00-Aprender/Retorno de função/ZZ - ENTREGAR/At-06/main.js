// 6 - Escreva uma função chamada calcularMediaAprovacao que receba três notas como parâmetros e: 
// retorne aprovado se a média for maior ou igual a 7 e 
// reprovado caso contrário.

let not1 = parseFloat(prompt("Digite a Primeira nota: "))
let not2 = parseFloat(prompt("Digite a Segunda nota: "))
let not3 = parseFloat(prompt("Digite a Terceira nota: "))
let med = (not1 + not2 + not3) / 3

function calcularMediaAprovacao (n1, n2, n3){
    
    if (med >= 7){
        return "aprovado"
    } else if (med <7 && med >= 0){
        return "Reprovado!"
    } else if (med > 10 || med < 0){
        return "Alguma nota foi digitada errada"
    }   
}

alert(`O aluno está: ${calcularMediaAprovacao(not1, not2, not3)} com nota ${med}`)

// Sei que não foi pedido, Mas como fiz o curso de Lógica de programação a 
// pouco tempo, acredito que reforçar o que aprendi seria bom. Por isso dei 
// uma "apimentada" no que era pedido.

//Bom curso pra todos nós!