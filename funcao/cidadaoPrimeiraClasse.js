// funcao em js e first-class object (citizens)
// hiper-order function

// criar funcao de forma literal

function fun1() {

}

// armazenar em uma variavel
const fun2 = function(){

}

// armazenar em um array

const array = [fun2, fun1, function( a, b ) { return a + b } ]

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {return `opa`}
console.log(obj.falar())


// passar funcao como parametro

function run(fun){
    fun(`mano`)
}

run((a)=> console.log(`eae ${a}`))

// uma funcao pode conter uma funcao 

function soma (a, b){
    return function (c){
        console.log(a+b+c)
    }
}

soma(2, 3)(10)
const cincoMais = soma(2, 3)
cincoMais(5)