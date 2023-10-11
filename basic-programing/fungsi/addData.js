let data = [
    {
        id : 1,
        name : "Defri"
    },
    {
        id : 2,
        name : "Alex"
    },
    {
        id : 3,
        name : "Kevin"
    }
]

function addData(id, name, arr) {
    let obj = {
        id: id,
        name: name
    }
    arr.push(obj)
}

function deleteData(id, arr) {
    for (let index = 0; index < arr.length; index++) {
        if (arr[index].id == id) {
            arr.splice(index,1)
        }
    }
}

// addData(2, "Rangga", data)
deleteData(2, data)

console.log(data)