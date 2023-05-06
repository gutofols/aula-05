// 4. A partir do preço à vista de um determinado produto, calcule o preço 
// total a pagar e o valor da prestação mensal, referentes ao pagamento parcelado. 
// Se o pagamento for parcelado em 3 vezes deve ser dado um acréscimo de 10% no 
// total a ser pago. 
// Se o parcelamento for em 5 vezes, o acréscimo será de 20%. 

let valBruto = parseFloat(prompt("Digite o valor do produto: "))
let parcela = parseInt(prompt("Deseja fazer em 3 ou 5 parcelas?"))
let pcdez = valBruto * 0.1
let pcvin = valBruto * 0.2


if(parcela == 3){
    alert(`O Valor do juros é: ${pcdez}`)
    alert(`O Valor total é: ${pcdez + valBruto}`)
    alert(`Sua parcela será de ${parcela} x de: R$: ${(pcdez + valBruto) /2}`)    
}
if(parcela == 5){
    alert(`O Valor do juros é: ${pcvin}`)
    alert(`O Valor total é: ${pcvin + valBruto}`)
    alert(`Sua parcela será de ${parcela} x de: R$: ${(pcvin + valBruto) /2}`)    
}
if(parcela !=5 && parcela !=3){
    alert("Numero de parcelas não permitido!")
}

// ** Correção ** //

// let valorProduto = 100
// //let parcela = 3
// let total = null
// let valorParcela = null

// if(parcela == 3) {
// total = valorProduto * 1.1
// }

// if(percela == 5) {
// total = valorProduto * 1.2
// }

// valorParcela = total/valorProduto

// alert(`
// Numero de parcelas: ${parcela}
// Total: ${total}
// Valor Parcela: ${valorParcela.toFixed(2)}
`)