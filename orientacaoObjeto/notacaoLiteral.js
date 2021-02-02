const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c} // codigo de criacao e objeto antes do es6
const obj2 = {a, b, c}  // codigo de criacao de objeto com o es6 (para agilizar codigo, o de cima e valido para criacao de nomes de chaves personalizados)
console.log(obj1,obj2)

const obj3 = {}

const nomeAttr = 'teste', valorAttr = 8.7

obj3[nomeAttr] = valorAttr // codigo de criacao e objeto antes do es6
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
    funcao1: function(){

    },
    funcao2 (){
        // reducao de sintaxe para definir funcao dentro de objeto 
    }
}