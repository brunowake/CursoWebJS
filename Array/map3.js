Array.prototype.map2 = function(callback) {
    let resultados = []
    for (let index = 0; index < this.length; index++) {
        // resultados[index] = callback(this[index],index,this)
        resultados.push(callback(this[index],index,this))
    }
    return resultados
}



const carrinho = [
    '{"nome": "borracha", "preco": 5}',
    '{"nome": "caneta", "preco": 7.5}',
    '{"nome": "caderno", "preco": 10}',
    '{"nome": "apontador", "preco": 12.50}'
]

carrinho.map

// desafio da aula: retornar um array somente com o preco
// minha solucao
/*console.log(carrinho.map2(a => {
    let obj = JSON.parse(a)
    return obj.preco
}))
*/
// solucao professor
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)
