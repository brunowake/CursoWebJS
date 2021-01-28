function soma(){
    let soma = 0
    for (i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(`soma ${soma(1)}`)
console.log(`soma ${soma(1,2,3,4)}`)
console.log(`soma ${soma(1,"10",'teste')}`)
console.log(`soma ${soma("10",'teste')}`)