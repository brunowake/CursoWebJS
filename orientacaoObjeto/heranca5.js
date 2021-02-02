console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

// toda funcao tem o atributo .prototype e o objeto criado por essa funcao tem o __proto__

String.prototype.reverse = function (){
    return this.split('').reverse().join('')
}


console.log('Revertendo Array'.reverse())

Array.prototype.first = function (){
    return this[0]

}

console.log([1,2,3,4,5].first())
String.prototype.toString() = function (){
    
}