function pengurutan(awal, akhir) {
    for (let index = awal; index <= akhir; index++) {
        console.log(index)
    }
}

pengurutan(10,20)
console.log(pengurutan)

function semuaAngka(awal, akhir) {
    for (let index = awal; index <= akhir; index++) {
        console.log(index)
    }
}

semuaAngka(1,25)

function semuaAngka2(awal, akhir) {
    let arr = []
    for (let index = awal; index <= akhir; index++) {
        if (index%2 ==0) {
            arr.push(index)
        }
    }
    return arr
}

console.log(semuaAngka2(10,50))