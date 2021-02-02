const pessoa = {
    nome: 'rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor])=> { // usando destructing para retirar elementos do array
    console.log(` ${chave}: ${valor}`)
});

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: false,
    writable: false,
    value: '10/10/1996'
}) // esse comando serve para criar um chave valor com as caracteristica personalizadas (ficar visivel ou nao, ser alterada ou nao)

pessoa.dataNascimento = '1/10/1992'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign ES6
const dest = {a: 1}
const o1 = {b:2}
const o2 = {c: 3, a:4}
const obj = Object.assign(dest, o1, o2)
console.log(obj)

Object.freeze(obj)
obj.c = 1234
console.log(obj)