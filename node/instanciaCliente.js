const contadorA = require('./instanciaUnica')
const contadorb = require('./instanciaUnica')

const contadorc = require('./instanciaNova')() // instancia nova retorna uma funcao e preciso executar essa funcao para ter um objeto como retorno, por isso temos ()
const contadord = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor,contadorb.valor)

/* como o node faz cache do objeto exportado, os contadores A e B incrementar o mesmo valor
entao tanto faz chamar o incremento por A ou B, eles mexem no mesmo objeto
*/

contadorc.inc()
contadorc.inc()
console.log(contadorc.valor, contadord.valor)
/* com function factory, cada require e um objeto diferente, entao se incrementarmos c, nao interfere no d. e vice versa */