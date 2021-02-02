// Object.preventExtensions
//  permite excluir e modificar valores existentes no objeto
const produto = Object.preventExtensions(
    {
        nome: 'qualquer', preco: 1230, tag: 'promocao'
    }
)

console.log(`extensivel:  ${Object.isExtensible(produto)}`)

produto.nome = 'borracha'
produto.descricao = 'testest'
delete produto.tag
console.log(produto)


// object.seal
//  permite modificar valores existentes no objeto, porem nao permite excluir e adicionar
const pessoa = {nome: 'juliana', idade: 35}
Object.seal(pessoa)

console.log('selado', Object.isSealed(pessoa))

pessoa.sobrenome = 'silva'
delete pessoa.nome
pessoa.idade = 29

console.log(pessoa)

// object.freeze = selado + valores constantes // writable = false