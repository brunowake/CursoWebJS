const pessoa = {
    saudacao: 'bom dia ',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() 
//  conflito entre paradigmas: funcional e OO

// pelo bind passamos pessoa como valor padrao para o this 
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()