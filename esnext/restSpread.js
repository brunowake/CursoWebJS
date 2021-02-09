//  operador ... rest(juntar)/spread(espalhar)

const funcionario = {nome: 'maria ', salario: 25099}
const clone = {ativo: true, ...funcionario}

console.log(clone)


//  usar spread com array
 const grupoA = ['joao', 'predo', 'gloria']
 const grupoFinal = ['kleber', ...grupoA, 'moises']
 console.log(grupoFinal)