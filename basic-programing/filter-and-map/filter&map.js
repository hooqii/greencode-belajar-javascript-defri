// console.time("Filter And Map")

// const number = [1,2,3,4,5,6,7,8,9]
// const squareOddNumbers = number.filter(num=> num%2!=0)
// number.map(num*num)

// console.log(squareOddNumbers)
// console.timeEnd("Filter And Map")

function piramid(rows) {
    for (let index = 0; index <= rows; index++) {
        let spaces = 5
        let stars = 2
        console.log(spaces-stars)
    }
}

piramid(5)

for (let index = 0; index <= 5; index++) {
    console.log("*".repeat(index))
}