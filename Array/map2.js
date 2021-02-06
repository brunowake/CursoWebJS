const carrinho = [
    '{"nome": "borracha", "preco": 5}',
    '{"nome": "caneta", "preco": 7.5}',
    '{"nome": "caderno", "preco": 10}',
    '{"nome": "apontador", "preco": 12.50}'
]

// desafio da aula: retornar um array somente com o preco
// minha solucao
console.log(carrinho.map(a => {
    let obj = JSON.parse(a)
    return obj.preco
}))

// solucao professor
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)
