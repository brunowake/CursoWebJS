function area (largura, altura){
    const area = largura * altura
    if (area >20) {
        console.log(`valro acima do permitido: ${area}m2`)
    }
    else{
        return area
    }
}
console.log(area(10, 2))
console.log(area(10, 3))
console.log(area( 3))
console.log(area())
console.log(area(10, 3, 3, 4))