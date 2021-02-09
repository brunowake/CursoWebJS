function funcionarOunao (valor, chanceErro){
    return new Promise((resolve, reject) => {

        try{
            con.log('temp') // linha com erro para testar catch
            if (Math.random() < chanceErro) {
                reject('ocorreu um erro')
            }else{
                resolve(valor)
            }
        }
        catch(e) {
            reject(e)
        }

    } )
}


funcionarOunao('testando', 0)
.then(v => `valor: ${v}`)
.then(
    v => consol.log(v),
     err => console.log('then: '+err)
)
.catch(err => console.log(`erro catch: ${err}`))
.then(() => console.log('fim')) // um .then depois do .catch nao tem dados