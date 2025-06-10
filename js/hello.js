function main(numberofbox, numberofperbox) {
  return numberofbox * numberofperbox;
}
console.log(main(20, 2));
let p1 = {
  name: "prasun",
  address: {
    bhaskar: "bhaskar",
  },
};
// let p2 = {
//   ...p1,
// };
let string = JSON.stringify(p1);
let p2 = {};
p2 = JSON.parse(string);
console.log(p2);
p2.address.bhaskar = "pragya";
console.log(p1);
console.log(p2);
let array = [1, 2, 4, 8, 2];
array.pop();
array.slice(0, 1);
console.log(array);
