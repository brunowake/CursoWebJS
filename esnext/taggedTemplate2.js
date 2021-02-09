function real(partes, ...valores){
    const resutlado = []
    valores.forEach((valor, indice) =>{
        valor = isNaN(valor) ? valor:`R$${valor.toFixed(2)}`
        resutlado.push(partes[indice],valor)
    })
    return resutlado.join('')
}

const preco = 29.9
const preccoParcela  = 11
console.log(real `1x de ${preco} ou 3x de ${preccoParcela}`)