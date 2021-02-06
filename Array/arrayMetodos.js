const pilotos =  ['Vettel', 'Alonson', 'Raikkone', 'Massa']

pilotos.pop() // remove o ultimo elemento do array

console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') // coloca um novo elemento no inicio do array
console.log(pilotos)


// splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2,0, 'Massa', 'Botas')
console.log(pilotos)

//remover
pilotos.splice(3,1) //botas vai sair
console.log(pilotos)

//slice - pega um pedaco do array
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos2)
