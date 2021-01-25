let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1  
console.log(!!isAtivo)  // usando !! forcamos a conversao de qualquer variavel para boolean

//valores nao booleanos que sao verdadeiros
console.log(!!3) 
console.log(!!-1)
//com excecao do 0, todos os numero sao verdadeiros 
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true)) // o js nao verifica se a atribuicao deu certo, ele verifica o valor da operacao

// valores nao booleanos que sao falsos
console.log('\nvalores falsos')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

//usando o ||
console.log('\nusando ||')
console.log(!!('' || null || 0 || 'teste'))
console.log(('' || null || 0 || 'teste'))

let nome = ''
console.log(nome || 'valor nao atribuido ao nome')