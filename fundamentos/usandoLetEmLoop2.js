let funcs = []

for (let i = 0 ; i <10; i++){
    funcs = [...funcs, function(){console.log(i)}]
}

funcs[2]()
funcs[8]()
console.log(`array ${funcs.length}`)

// como o let respeita esocpo, cada funcao retornara o valor atual do i quando foi inserido no array 