// no js as funcoes explicitas sofrem o efeito de hoisting, nesse caso o codigo funciona pois soma e uma funcao explicita
console.log(soma(3, 4)) 


// function declaration

function soma(a,b){
    return a+b
}

// function expression
const subtrai = function(a,b){
    return a-b
}

console.log(subtrai(3, 4)) 


// named function expression
const mult = function mult(a,b){
    return a*b
}