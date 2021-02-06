const alunos = [{nome: 'joao', nota: 7.9},{nome: 'Maria', nota: 9.2}]


//Imperativo - geralmente uma forma para demonstrar passo a passo do codigo executado

let total1 = 0 
for (let index = 0; index < alunos.length; index++) {
    total1 += alunos[index].nota
}


console.log(total1 /alunos.length)

// Declarativa - uma forma que optimiza a reutilizacao de codigo

const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)