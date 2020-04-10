const angka = [10, 3, 2, 1, -3, 5, 8, 11, 29, -15];
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     newAngka.push(angka[i]);
//   }
// }
// console.log(newAngka);

// filter
// const angka = [10, 3, 2, 1, -3, 5, 8, 11, 29, -15];
// const newAngka = angka.filter(function (a) {
//   return a >= 3;
// });
// const newAngka = angka.filter((a) => a >= 3);
// console.log(newAngka);

// Map
// const newAngka = angka.map((a) => a * 2);
// console.log(newAngka);

// reduce
// jumlahkan seluruh elemen pada array
// const newAngka = angka.reduce(
//   (accumulator, currenValue) => accumulator + currenValue,
//   0
// );
// console.log(newAngka);

// chaining
// cari angka > 5
// kalikan 3
// jumlahkan
const newAngka = angka
  .filter((a) => a > 3)
  .map((a) => a * 3)
  .reduce((acc, cur) => acc + cur, 0);
console.log(newAngka);
