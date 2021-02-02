// classe
class Pessoa {
    constructor(nome){
        this.nome = nome
    }
    fala(){
        console.log(`meu nome e ${this.nome}`)
        
    }
}
const p1 = new Pessoa('joao')
p1.fala()

// funcao factory
const criarPessoa = nome =>{
    return{
        falar:() => console.log(`meu nome e ${nome}`)
    }
}
const p2 = criarPessoa('tereza ')
p2.falar()