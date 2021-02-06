const moduloA = require('../../moduloA') // o nome do arquivo para ser importado no windows e no mac nao sao case sensitive. 
console.log(moduloA.ola)

const saudacao = require('saudacao')
console.log(saudacao.ola)
/*por padrao, quando nao passamos caminhos relativos/absolutos, o node procura os modulos que tentamos importar 
na pasta node_modules. ao achar a pasta/modulo, ele busca o arquivo index.js
*/

const c = require('./pastaC')

console.log(c.ola2)

const http = require('http')
http.createServer((req,res) =>{
    res.write(' Bom dia ')
    res.end()
}).listen(8080)