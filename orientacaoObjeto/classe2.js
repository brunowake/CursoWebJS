class Avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome
    } 
}

class Pai extends Avo{
    constructor(sobrenome, profissao = 'professor'){
        super(sobrenome) // o super esta chamando a funcao construtora da classe avo
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor(){
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)
