setTimeout(function(){
    console.log('executando callback')
    
    
    
    setTimeout(() => {
        console.log('executando callback 2')
        setTimeout(() => {
            console.log('executando callback 3')
            
        }, 2000);
    }, 2000);
}, 2000)


function esperarPor(tempo = 2000){
    return new Promise(resolve => {
        setTimeout( () => {
            console.log('Executando promise...')
            resolve()
        },tempo)
    })
}


esperarPor(3000).then( () => esperarPor()).then( () => esperarPor())
