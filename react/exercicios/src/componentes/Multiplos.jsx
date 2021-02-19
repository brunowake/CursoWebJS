import Reacto from 'react'

export const BoaTarde = props => <h1>boa tarde {props.nome}</h1> // default retorna funcao anonima 

export const BoaNoite = props => <h1>boa noite {props.nome}</h1>

export default {BoaTarde, BoaNoite}