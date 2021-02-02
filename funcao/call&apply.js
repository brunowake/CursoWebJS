function getPreco (imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'notebook',
    preco: 4500,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = {preco: 40000, desc: 0.2}
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

// chamada pelo call, primeiro contexto e depois os atributos da funcao 
console.log(getPreco.call(carro, 0.17, '$')) 
// chamada apply, primeiro o contexto e depois os atributos em formato de array
console.log(getPreco.apply(global,[0.17,'£']))