// no js a variavel var, independente de onde ela for declarada, sera icada para o comeco do codigo, sendo assim declarada porem sem valor
//dessa forma seu codigo nao quebrara e sera executado
// hoisting so funciona com var

console.log(a)
var a = 2
console.log(a)

function teste(){
    console.log(a)
    var a = 2
    console.log(a)
}

teste()

console.log(b)
let b = 3
console.log(b)