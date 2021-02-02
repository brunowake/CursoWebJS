//  pessoa aponta para o endereco de memoria -> 123 -> {...}

const pessoa = {
    nome: 'joao'
}
pessoa.nome = 'pedro'

console.log(pessoa)


// pessoa -> 456 -> {...}
//pessoa = {nome: 'ana'}
// nesse caso estou tentando mudar o endereco de memoria do objeto, sendo assim, um erro ocorrera pois estou mudando pessoa e nao o atributo nome

Object.freeze(pessoa)
//uma vez que usamos o frezze no objeto, nao conseguimos mudar nenhum atributo.
// nao dara erro no codigo, porem o seu comando sera ignorado 
pessoa.nome = 'maria'
console.log(pessoa.nome)

const pessoaConstante = Object.freeze({
    nome: 'joao'
})
pessoaConstante.nome = 'maria'
console.log(pessoaConstante)
