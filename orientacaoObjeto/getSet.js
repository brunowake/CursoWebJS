const sequencia = {
    _valor: 1, // convencao entre programadores de que chaves com '_' sera acessada somente dentro do objeto. 
               //O js em si nao aplica nenhuma regra e nem impede de modificar a variavel
    get valor(){
        return this._valor++
    },
    set valor(valor){
        if (valor > this._valor) {
            return this._valor = valor
        }
    }
}


console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)