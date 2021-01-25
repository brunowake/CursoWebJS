const nome = 'rebeca'
const nomeconcat = 'ola' + nome + '!'
const template = `
    ola
    ${nome}!
`

console.log(nomeconcat, template)

// expressoes
console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase()
console.log(`ei... ${up('cuidado')}!`)