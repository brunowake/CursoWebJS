const prod1 = {}
prod1.nome = 'celular'
prod1.preco = 4826.00
prod1['desconto'] = .60

console.log(prod1)

const prod2 = {
    nome: 'camisa polo',
    preco: 60,
    obj: {
        lalalaal: 1,
        obj: prod1
    }
} 

console.log(prod2)