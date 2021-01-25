const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[2])
console.log('indice inexistente ' + valores[4])

valores[5] = 10 // quando um indice inexistente e colocado, o js completa o espaco vazio com empty items
console.log(valores)
console.log(valores.length)

// push - adicionar elementos ao array
valores.push({id: 3}, null, false ,'teste')

// pop - retira o ultimo elemento do array
console.log(valores.pop(), valores)
delete valores[0]

console.log(typeof valores)