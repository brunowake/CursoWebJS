// nao aceita repeticao/nao indexada


const times = new Set()

times.add('vasco')
times.add('sao paulo').add('palmeiras').add('corinthians')
times.add('flamengo')
times.add('vasco')

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
console.log(times.has('vasco'))
times.delete('flamengo')
console.log(times.has('flamengo'))

const nomes = ['raquel', 'lucas', 'Julia', 'lucas']

const nomeSEt = new Set(nomes)
console.log(nomeSEt)