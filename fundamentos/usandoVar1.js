//o var sera visivel globalmente independente do bloco que for declarada, com excecao de funcao
// em uma aplicacao web, todas a variaveis fora do escopo de funcao esta na variavel Windows
{ 
    { 
        { 
            var sera = 'sera ?' 
        } 
    }
}
console.log(sera)

function teste() {
    var local = 123
}

teste()

console.log(local)