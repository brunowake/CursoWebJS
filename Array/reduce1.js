const alunos = [
    {nome: 'joao', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.3, bolsista: true},
    {nome: 'Pedro', nota: 9.2, bolsista: false},
    {nome: 'Ana', nota: 8.3, bolsista: true}
]

console.log(alunos.map(a => a.nota))

// o return do recude fica localizado no primeiro elemento do parametro callback
const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 10)

console.log(resultado)