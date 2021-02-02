const notas = [8, 6.2, 6.5, 8.5, 9]

// sem callback

let notasBaixas = []
for (let i in notas) {
    if (notas[i]<7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

// com callback
const notasMenor7 = notas => notas <  7 
notasBaixas - notas.filter(notasMenor7)
console.log(notasBaixas)
