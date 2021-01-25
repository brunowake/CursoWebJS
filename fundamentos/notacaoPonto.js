console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'bola'
//obj1['nome'] = 'bola'

console.log(obj1.nome)

function Obj(nome){ 
    this.nome = nome // this serve para tornar um atributo/ funcao publico 
    this.exec = function(){
        console.log('exec...')
    }
}

const obj2 = new Obj('moises')
const obj3 = new Obj('zico')
console.log(`obj2 ${obj2.nome} obj3 ${obj3.nome}`)
obj3.exec()