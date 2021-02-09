const escola = [
    {
        nome: 'turma M1',
        alunos: [{
            nome: 'gustavo',
            nota: 8.1
        }, {
            nome: 'ana',
            nota: 9.3

        }
        ]
    },

    {
        nome: 'turma M2',
        alunos: [
            {
            nome: 'rebeca',
            nota: 8.9
            }, {
                nome: 'roberto',
                nota: 7.3

            }
        ]
    }
]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
// console.log(notas1)

 console.log([].concat(notas1[0], notas1[1]) )

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
    /* nesse exemplo, usamos o apply para passar o array vazio [] para ser o this no call */
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)