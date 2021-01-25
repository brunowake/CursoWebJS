let funcs = []

for (var i = 0 ; i <10; i++){
    funcs = [...funcs, function(){console.log(i)}]
}

funcs[2]()
funcs[8]()
console.log(`array ${funcs}`)
// como o var e global, todas as funcoes ira retornar 10 pois e o valor que o i tera depois de sair do loop