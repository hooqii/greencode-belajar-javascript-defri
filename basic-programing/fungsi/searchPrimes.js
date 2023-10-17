function isPrima(angka) {
    let primes = true
    if (angka % 2 ==0 || angka % 3 == 0){
        primes = false
    }
    for (let index = 3; index < angka; index+=2) {
        if (angka % index == 0) {
            primes = false
        }
        
    }
    return primes
}

console.log(isPrima(5))