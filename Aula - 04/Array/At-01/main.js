let num = [30, 200, 500, 435, 654, 234, 65, 654, 122, 345]

let total = 0

for (let i = 0; i < num.length; i++) {
    // Soma todos os valores
    total += num[i]

    // Procura um valor dentro dos termos do Array (e coloca em "i")
    if(num[i] == 200){
        num.splice(i, 1)
    }

}

alert(num)