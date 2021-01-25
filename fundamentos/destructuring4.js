function rand([min = 0, max = 1000]){ // recebe 2 atributos desestruturados de um objeto/array
    if (min > max) [min,max] = [max,min] // transforma os atributos do parametro em um array e inverte a ordem de min e max desestruturando eles
        const valor = Math.random() * (max - min) + min
    
        return Math.floor(valor)
}
console.log(rand([50,40]))
console.log(rand([993]))
console.log(rand([,10]))
console.log(rand([]))
console.log(rand([]))