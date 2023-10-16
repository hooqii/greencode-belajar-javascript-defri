// let text = "";
// let i = 0;

// do {
//   text += "The number is " + i+ " ";
//   i++;
// } while (i < 10);

// console.log(text)

// function piramid(rows = Number) {
//   for (let index = 0; index <= rows; index++) {
//     let spaces = " ".repeat(rows - index);
//     let stars = "*".repeat(2 * index + 1);
//     console.log(spaces+stars)
//   }
// }

// piramid(5)

for (let index = 0; index < 5; index++) {
  console.log("*".repeat(2*index+1))
}