// par nome / valor
const saudacao = 'eae' // contexto lexico1 = local onde sua variavel foi definida

function exec () {  
    const saudacao = 'falae' // contexto lexico 2
    return saudacao
}


// objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: 'pedro',
    idade: 32,
    peso: 105,
    endereco: {
        logradouro: 'rua da silva',
        numero: 10
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)
