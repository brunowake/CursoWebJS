// Arrow function#
// funcao arrow e sempre uma funcao anonima, nao podemos dar nome a funcao mas podemos atribuir a funcao em uma variavel 

const soma = (a,b) => a + b
console.log(soma(5,10))

// Arrow Function (this)

const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()


// parametro default

function  log(texto = 'node') {
    console.log(texto)
    
}
log()


//  operador rest 
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total+=n)
    return total
}

console.log(total(1,2,3,4,5,6))
