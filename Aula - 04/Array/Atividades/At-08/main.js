// 8 - Crie um array com os valores "azul", "vermelho", "amarelo" e "verde". 
// Remova o elemento "vermelho" do array.

// let cores = ["Azul", "Vermelho", "vermelho", "Amarelo", "Verde"]

// //----------------------------------------------------------------
// for (let i = 0; i < cores.length; i++) {

//     if (cores[i] == "Vermelho") {
//         cores.splice(i, 1)
//         i = i-1
//     }
// }
// document.write(cores)

// alert(cores.join(" - ")) // Junta os itens de uma Array, separando por " - "
// //----------------------------------------------------------------

let cores = ["Azul", "Vermelho", "vermelho", "Amarelo", "Verde"]

let corfiltrada = cores.filter((cor)=>{
    
    if (cor == "Vermelho"){
        return false
    } else {
        return true
    }
})

alert(corfiltrada) // Junta os itens de uma Array
