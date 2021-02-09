// tagged template - processar o template dentro de uma funcao

function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'outra string'

}

const aluno = 'gui'
const situacao = 'reprovador'
console.log(tag `${aluno} esta ${situacao}`)
