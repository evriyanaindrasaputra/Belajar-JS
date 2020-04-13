// function myFunc() {
//   return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
// return myArgs;
//   return Array.from(arguments);
//   return [...arguments];
// }
// console.log(myFunc(1, 2, 3, 4, 5));

// function jumlahkan(...angka) {
//   let total = 0;
//   for (const a of angka) {
//     total += a;
//   }
//   return total;
// return angka.reduce((acc, curr) => acc + curr);
// }
// console.log(jumlahkan(1, 2, 3, 4, 5));

// array desctructuring
// const kelompok1 = ["indra", "indri", "indira", "ind"];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(anggota);

// onject destructuring
// const team = {
//   pm: "indra",
//   frontend: "indri",
//   backend: "indira",
//   ux: "hendra",
//   devOps: "indr",
// };

// const { pm, ...myTeam } = team;
// console.log(pm);

// filtering
function filterBy(type, ...values) {
  return values.filter((v) => typeof v === type);
}

console.log(filterBy("number", 1, 2, 3, "indra", "indri", true, 9));
