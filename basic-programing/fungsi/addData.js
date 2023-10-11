let data = [
    {
        id : 1,
        name : "Defri"
    }
]

function addData(id, name, arr) {
    let obj = {
        id: id,
        name: name
    }
    arr.push(obj)
}

addData(2, "Rangga", data)

console.log(data)