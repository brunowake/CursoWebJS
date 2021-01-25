// let respeita o escopo, caso tente acessar um variavel que nao existe no escopo atual, o js ira buscar a variavel em um escopo mais abrangente
// o let nao permite buscar em escopos mais especificos, sempre buscara em escopos antecessores (mais abrangentes)

let  numero = 1
{
    let numero = 2
    console.log(`dentro ${numero}`)
}
console.log(`fora ${numero}`)
