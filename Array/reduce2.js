const alunos = [
    {nome: 'joao', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.3, bolsista: true},
    {nome: 'Pedro', nota: 9.2, bolsista: false},
    {nome: 'Ana', nota: 8.3, bolsista: true}
]

// DEsafio 1: todos os aulnos sao bolsistas ?
const valorBolsista = alunos.map(aluno => aluno.bolsista)
console.log(valorBolsista)

console.log(valorBolsista.reduce(((acumulador, atual) =>{
    if (atual && acumulador) {
        return true
    }
    else{
        return false
    }
})))

// codigo prof: const todosBolsistas = (resultado, bolsista) => resultado && bolsista
//Desafio algum aluno e bolsista ?
console.log(valorBolsista.reduce(((acumulador, atual) =>{
    if (atual || acumulador) {
        return true
    }
    else{
        return false
    }
})))
// codigo prof: const todosBolsistas = (resultado, bolsista) => resultado || bolsista