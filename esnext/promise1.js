let a = 1 
console.log(a)





function primeiroElemento(array){
    return array[0]
}

function primeiroElemento(string){
    return string[0]
}


const letraMaiuscula = letra => letra.toUpperCase()

let p = new Promise(function (resolve,reject){
resolve(['ana','cia','carlos', 'miguel']) //promisse tem apenas um valor
}).then( primeiroElemento )
.then(  primeiroElemento )
.then(letraMaiuscula)
.then(console.log)
// e possivel fazer chamadas de then na sequencia