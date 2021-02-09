// let e const

// apos a insercao de const e let, o java script passa a ter scopo de variavel, funcao e bloco

{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)


// Template String
const produto = 'Ipad'
console.log(`${produto} e caro`)

//  Destructuring
const [l, e, ...tras] = 'testando'
console.log(`${l}  ${l}   ${tras}`)

const [x, ,y] = [1,2,3]
console.log(x, y)


const {idade: i, nome} = {nome: 'Bruno', idade: 25}
console.log(i, nome)