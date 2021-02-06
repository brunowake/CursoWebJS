const filhas = ['jessia', 'maria']
const filhos = ['wesley', 'moises']

const todos = filhas.concat(filhos, 'elemento avulso')
console.log(todos, filhos, filhas)


console.log([].concat([1,2],[3,4], 5 , [[6,7]]) )