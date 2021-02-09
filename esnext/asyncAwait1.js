const { promises } = require("fs")

function esperarPor(tempo = 2000){
    return new Promise(resolve => {
        setTimeout( () => {
            resolve()
        },tempo)
    })
}


// esperarPor()
// .then(() => console.log(`esperar mais 2 segundos`))
// .then(esperarPor)
// .then(() => console.log(`esperar mais 2 segundos`))
// .then(esperarPor)
// .then(() => console.log(`esperar mais 2 segundos`))


// await e usado com funcoes que retornam promises

function retornarValor(){
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve(10)
        }, 5000);
    })
}

async function retornarValorRapido(){
    return 20
}


async function executar(){
    let valor = await retornarValorRapido() // nesse caso, se eu nao colocar o await, irei receber uma promisse.

    await esperarPor(1500)
    console.log(`Async/Await ${valor} `)
    await esperarPor(1500)
    console.log(`Async/Await ${valor+1} `)
    await esperarPor(1500)
    console.log(`Async/Await ${valor+2} `)


    return valor + 3
}


async function executarDeVerdade(){
    const valor = await executar()
    console.log(valor)
}
executarDeVerdade()
