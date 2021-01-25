// pesquisar sobre regex

const escola = "wakezao"

console.log(escola.charAt(4)) // pega um caracter de determinado numero na string
console.log(escola.charCodeAt(3)) // retorna o valor equivalente da tabela ask/unicode do caracter escolhido 
console.log(escola.indexOf('z')) //procura e, se existente, retorna a posicao do valor passado como parametro
console.log(escola.substring(2)) // imprime do indice passado ate o final da string
console.log(escola.substring(0,4)) // imprime um intervalo da string, primeiro parametro passa o comeco e o segundo a qtd de numeros

console.log('escola '.concat(escola).concat('!')) //concatenar, tambem da pra usar o +
console.log(escola.replace('o','0'))

console.log('bruno,maria,jose'.split(','))