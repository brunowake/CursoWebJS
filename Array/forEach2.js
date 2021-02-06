Array.prototype.forEach2 = function(callback) {
    for (let index = 0; index < this.length; index++) {
        callback(this[index],index,this)
    }
}

const aprovados = ['Lucas', 'pedro', 'marcelo']



function forEach2(array){
    return 
}

aprovados.forEach2(function(nome, indice, array,x){ // no for each o primeiro elemento de retorno e o conteudo e o segundo elemento e o indice atual do for
    console.log(`${indice+1}) ${nome}`)
    console.log(array) // o 3 paramentro do for each retorna o array inteiro que ele esta percorrendo
    console.log(x) // nao existe um quarto parametro no callback da funcao for each
})