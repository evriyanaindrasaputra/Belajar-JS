// function myFunc() {
//   return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
// return myArgs;
//   return Array.from(arguments);
//   return [...arguments];
// }
// console.log(myFunc(1, 2, 3, 4, 5));

function jumlahkan(...angka) {
  let total = 0;
  for (const a of angka) {
    total += a;
  }
  return total;
}
console.log(jumlahkan(1, 2, 3, 4, 5));
