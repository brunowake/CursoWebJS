const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')



//ache a mulher chinesa com o menor salario
//solucao professor
const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (funcionario, funcionarioAtual) => {
    return funcionario.salario < funcionarioAtual.salario ? funcionario: funcionarioAtual
}
axios.get(url).then(Response =>{
    const funcionarios = Response.data
    const func = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario)
    console.log(func)

})


// minha solucao do exercicio
/*axios.get(url).then(Response =>{
    const todos =  Response.data
    const pais = funcionario => {if (funcionario.pais == 'China') {
        return funcionario
    }}
    const mulheres = todos.filter(pais).filter(mulheres => mulheres.genero == 'F')
    const salario = mulheres.map( funcionario=> funcionario.salario)
    const menorSalario = salario.reduce((acumulador,atual) => acumulador > atual ? atual:acumulador)


    console.log(menorSalario)

    console.log(todos.filter(funcionario => funcionario.salario == menorSalario))
})
*/