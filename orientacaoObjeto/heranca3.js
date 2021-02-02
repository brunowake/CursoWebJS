const pai = {nome: 'pedro', corCabelo: 'preto'}
const filho1 = Object.create(pai)
filho1.nome = 'Jose'
console.log(filho1.nome, filho1.corCabelo)

const filho2 = Object.create(pai,{
    nome: {value: 'Cleyton', writable: false,enumerable: true}
})

console.log(filho2.nome)
filho2.nome = 'pedra'
console.log(`${filho2.nome} cabelo: ${filho2.corCabelo}`)

console.log(Object.keys(filho1))
console.log(Object.keys(filho2))

for (const key in filho2) {
    filho2.hasOwnProperty(key) ? console.log(key) : console.log(`por heranca: ${key}`)
}