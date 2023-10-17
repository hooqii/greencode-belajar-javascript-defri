console.log("Tahap1");

const fetchData = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      console.log("Langkah 2");
      resolve();
    }, 2000);
  });

  console.log("Langkah3");
};

fetchData();
