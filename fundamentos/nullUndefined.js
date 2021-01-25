const a = {nome: 'teste'}
const b = a // atribuicao por referencia, ambos apontam para o mesmo objeto ( objetos e funcoes)
console.log(b)
b.nome = 'opa'
console.log(a)
let c = 3  // quando trabalhamos com tipos primitivos em js, a copia e por valor e nao por referencia
let d = c
d++
console.log(c,d)

let valor //nao inicializada
console.log(valor)

valor = null // null = ausencia de valor porem inicializada
console.log(valor)
//console.log(valor.toString()) erro ao acessar null

const produto = {}
console.log(produto.preco)
console.log(produto)
produto.preco = 3.5
console.log(produto.preco)

produto.preco = undefined // somente para teste, nao usar em desenvolvimento real
console.log(!!produto.preco)

produto.preco = null //para zerar o preco
console.log(!!produto.preco) // vai dar falso pois null e um resultado falso
