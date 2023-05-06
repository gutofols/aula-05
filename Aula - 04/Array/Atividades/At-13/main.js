// 13 - Crie uma função que recebe um array de nomes e retorna um novo array com apenas 
// os nomes que começam com a letra "A".

let nomes = ["Augusto", "Andrei", "Cleber", "Marcelo", "Antônio", "Aderbal", "Raul", "Jonas", "Paulo"]


function nomesA(par){
    for (let i = 0; i < par.length; i++) {
        if(par[i].charAt(0) == "A" )
        document.write(`Os nomes que começam com A são: ${par[i]} <br>`)

    }
}

nomesA(nomes)