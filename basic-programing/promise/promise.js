console.log("Langkah 2");

const fetchData = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
            console.log("Langkah 2");
            resolve();
        }, 2000);
    });
};

fetchData()
.then(()=>{
    console.log("Langkah 3");
});

const hitungData = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("Langkah 4");
            resolve();
        }, 5000);
    });
};