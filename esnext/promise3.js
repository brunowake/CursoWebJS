function gerarNumerosEntre(min,max){
    if (min > max) {
        [min, max] = [max, min]
    }

    return new Promise(resolve => {
        const aleatorio = parseInt(Math.random() * (max - min + 1))
        resolve(aleatorio)
    })
}


gerarNumerosEntre(10, 30).then(num => num* 10)
.then(numX10 => `o numero final e ${numX10}`)
.then(console.log)