function falarDepoisDe(segundos, frase){
    return new Promise ( (resolve, reject)=> {
        setTimeout(() =>{
            resolve(frase) // o resolve passa para o .then o objeto em parametro. o Resolve so aceita um parametro 
        },segundos*1000)
    })
}

falarDepoisDe(3, 'que legal')
.then(frase => frase.concat('!?!?!')
)
.then(outraFrase => console.log(outraFrase))
.catch(e => console.log(e))