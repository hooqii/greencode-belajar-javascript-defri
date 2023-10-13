let myArray = [2, 5, 92, 29, 74,]
myArray.sort((angkaKecil, angkaBesar)=> angkaKecil - angkaBesar)
console.log(myArray)
myArray.sort((angkaKecil, angkaBesar)=> angkaBesar - angkaKecil)
console.log(myArray)


let stringArray = ["Alex", "David", "Brodi", "Clara alex"]
stringArray.sort((a, b)=>{
    return a.length - b.length
})

console.log(stringArray)