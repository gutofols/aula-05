function isMaioridade(idade){
    if(idade >= 18){
        return true
    }else{
        return false
    }
}

if(isMaioridade(20)){
    alert("Maior de idade")
}else{
    alert("menor de Idade")
}