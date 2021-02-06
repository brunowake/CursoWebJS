// map serve para mapear e, se quiser, modificar os valores desse array. 
// o retorno da funcao map sera um array do mesmo valor 

const nums =[1,2,3,4,5]


// toda funcao passada para o map tem que ter um retorno
let resultado = nums.map(function(numero) {
    return numero * 2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)



console.log(resultado)