function gerarNumerosEntre(min,max, tempo){
    if (min > max) {
        [min, max] = [max, min]
    }

    return new Promise(resolve => {
        setTimeout(() => {
            const aleatorio = parseInt(Math.random() * (max - min + 1))
            resolve(aleatorio)
        }, tempo);
    })
}


function gerarVariosNumeros(){
    return Promise.all([
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 4050)

    ])
}

console.time('promise')
gerarVariosNumeros().then(numeros => console.log(numeros)).then(()=>{
    console.timeEnd('promise')
})
