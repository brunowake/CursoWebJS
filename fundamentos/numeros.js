// valores que comtem ponto flutuante terminados em 0 sao considerados interios, ex: 1.0,2.0

const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total/ (peso1 +peso2)
// funcao to fixed serve para limitar a quantidade de casas decimais mostrada no console.log
console.log(media.toFixed(2))
// to string serve para converter a variavel para o tipo string e, passando 2 como parametro, convertemos o conteudo para binario
console.log(media.toString())