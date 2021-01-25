//essa funcao recebe um objeto como parametro e extrai as variaveis min e max
function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
const valores = {
    min:10,
    max: 1000
}
console.log(rand(valores))
console.log(rand({min: 10}))
console.log(rand({}))
console.log(rand()) // essa linha da erro pois a funcao exige um objeto