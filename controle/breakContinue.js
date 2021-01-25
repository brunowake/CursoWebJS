let nums = [1,2,3,4,5,6,7,8,9,10]

externo: for (i in nums) {
    for (b in nums){
        if (i == 2 && b == 3) {
            break externo
        }
        console.log(`${i} ${b}`)
    }   
}