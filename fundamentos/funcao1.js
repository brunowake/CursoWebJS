//funcao sem retorno 
function imprimirSoma(a, b){
    console.log(a+(b || 0))
}

imprimirSoma(2, 3)
imprimirSoma(2) // o js te permiti passar somente 1 parametro mesmo que a funcao tenha 2
imprimirSoma(2, 3, 4, 5, 6) // o js tambem permiti passar mais parametros do que a funcao exige 
imprimirSoma()

// funcao com retorno

function soma(a, b = 0) {
    return a+b
}

console.log(soma(3+6))  