function criarObj (nome, preco, disconto = 10){
    return {
        nome,
        preco,
        disconto
    }
}

console.log(criarObj('carro', 35.000))