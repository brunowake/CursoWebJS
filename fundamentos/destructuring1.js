//novo recurso ES6
const pessoa = {
    nome: 'ana',
    idade: 5,
    endereco: {
        logradouro: 'ra abc',
        numero: 1000
    }
}

const {nome, idade} = pessoa
console.log(`nome ${nome} idade: ${idade}`)

const {nome: n, idade: i} = pessoa
console.log(`nome: ${n} idade: ${i}`)

const {sobrenome, bemHumorada = true} = pessoa
console.log(`sobrenome ${sobrenome} bemHumorada ${bemHumorada}`)

const {endereco: {logradouro, numero, cep = 'sem cep'}} = pessoa
console.log(`logradouro ${logradouro} numero ${numero} cep ${cep}`)