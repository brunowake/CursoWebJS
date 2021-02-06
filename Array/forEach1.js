const aprovados = ['Lucas', 'pedro', 'marcelo']

aprovados.forEach(function(nome, indice, array,x){ // no for each o primeiro elemento de retorno e o conteudo e o segundo elemento e o indice atual do for
    console.log(`${indice+1}) ${nome}`)
    console.log(array) // o 3 paramentro do for each retorna o array inteiro que ele esta percorrendo
    console.log(x) // nao existe um quarto parametro no callback da funcao for each
})

aprovados.forEach((nome) =>{
    console.log(nome)
})

const exibirAprovador = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovador)