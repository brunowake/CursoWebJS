function Pessoa (nome){
    
    this.falar = function(){
        return console.log(`meu nome e ${nome}`)
    }

}

const p1 = new Pessoa('carlos')
p1.falar()