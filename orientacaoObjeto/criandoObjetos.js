// usando a notacao literal

const obj1 = {

}

console.log(obj1)

// Object em js

console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)


// funcao construtora

function Produto(nome, preco, desc){
    this.nome = nome // estou tornando essa variavel publica, nao esta encapsulada dentro do objeto
    this.getPrecoComDesconto = () => {
        return preco  * (1 - desc)
    }
} 

const p1 = new Produto('caneta', 10, 0.2)
const p2 = new Produto('notebook', 3999, .1)
console.log(p1.getPrecoComDesconto(),p2.getPrecoComDesconto())

// funcao FActory - e um padrao que projeto que cria/fabrica alguma coisa


function crianFuncionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return ((salarioBase/30) * (30-faltas))
        }

    }
}

const f1 = crianFuncionario('maria', 1500, 2)
const f2 = crianFuncionario('jose', 1500, 4)

console.log(f1.getSalario(),f2.getSalario())

//  Object.create
const filha = Object.create(null)
filha.nome = 'ana' 
console.log(filha)


//  uma funcao famosa que retorna objeto
const fromJSON = JSON.parse('{"info": "sou um json!"}')
console.log(fromJSON.info)