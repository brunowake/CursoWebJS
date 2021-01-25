console.log('01)','1' == 1) //= atribuicao == comparacao -> igual pois 1 e 1 independente do tipo
console.log('02)','1' === 1) // === estritamente igual -> falso pois sao tipos diferentes
console.log('03)', '3' != 3) // falso pois 3 e 3 independente do tipo  
console.log('04)','3' !== 3)  // true pois sao tipos diferentes 

// < > <= >=

const d1 = new Date(0)
const d2 = new Date(0)

console.log(
`05) ${d1 == d2}
06) ${d1 === d2}`)      // ambos sao falsos pois eles trabalham por referencia de memoria

console.log(`11) ${d1.getTime() == d1.getTime()}`)
console.log(undefined == null)
console.log(undefined === null)