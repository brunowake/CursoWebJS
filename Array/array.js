// array e um objeto, nao existe tipo array nativo no JS
console.log(typeof Array, typeof new Array, typeof [])


let aprovados = new Array('Bia', 'carlos', 'jose')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Jose']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // quando acessamos um indice indefinido, o js retorna undefined
aprovados[3] = 'Paulo' // sintaxe comunmente usada para substituir valores existentes
aprovados.push('Emanuel') // adiciona um valor ao array na ultima posicao
console.log(aprovados.length, aprovados)


aprovados[9] = 'Rafael' 
/* 
quando adicionamos elementos pulando a ultima posicao do array
o JS cria esse elemento, porem o espaco entre o novo elemento e o ultimo, sera undefined
*/
console.log(aprovados.length, aprovados, aprovados[8] === undefined)

aprovados.sort() // funcao para ordenar array
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1,0, 'elemento1', 'elemento2') // exlcui, modifica e adiciona elementos em um array 
console.log(aprovados)
