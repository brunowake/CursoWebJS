// filter serve para filtrar um array. criar um outro array baseado em uma determinada condicao 
const produtos = [
    {nome: 'notebook', preco: 5000, fragil: true},
    {nome: 'ipad pro', preco: 2000, fragil: true},
    {nome: 'copo vidro', preco: 12.40, fragil: true},
    {nome: 'copo plastico', preco: 5, fragil: false}
]

// no filter o return e um array do mesmo tamanho ou menor
console.log(produtos.filter(function(p) {
    return p.preco > 500 && p.fragil == true
}))

const fragil = a => a.fragil == true
const maior = b => b.preco > 500

console.log(produtos.filter(fragil).filter(maior))
