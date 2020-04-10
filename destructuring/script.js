//Destructuring Array
// const perkenalan = ["Halo", "nama", "saya", "indra"];
// const [halo, nama, saya, indra] = perkenalan;
// mengambil sedikit data dari array
// const [halo, , , indra] = perkenalan;

// console.log();

// swap items
// let a = 1;
// let b = 2;
// console.log(a);
// [a, b] = [b, a];
// console.log(a);

// return value pada function
// function coba() {
//   return [1, 2];
// }

// const [a, b] = coba();
// console.log(a);

// Rest Parameter
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values);

// Destructuring Object
// const mhs = {
//   nama: "indra",
//   umur: 22,
// };

// const { nama, umur } = mhs;
// console.log(nama);

// Assignment tanpa deklarasi object
// ({ nama, umur } = {
//   nama: "indra",
//   umur: 22,
// });
// console.log(nama);

// Assign ke variable baru
// const mhs = {
//   nama: "indra",
//   umur: 22,
// };

// const { nama: n, umur: u } = mhs;
// console.log(n, u);

// Memberikan default value
// const mhs = {
//   nama: "indra",
//   umur: 22,
//   email: "indra@gmail.com",
// };

// const { nama, umur, email = "email@defalt.com" } = mhs;
// console.log(email);

// membri nilai default + assign ke var baru
// const mhs = {
//   nama: "indra",
//   umur: 22,
//   email: "indra@gmail.com",
// };

// const { nama: n, umur: u, email: e = "email@defalt.com" } = mhs;
// console.log(n, u, e);

// Rest Parameter
// const mhs = {
//   nama: "indra",
//   umur: 22,
//   email: "indra@gmail.com",
// };

// const { nama, ...values } = mhs;
// console.log(values);

// Mengambil field pada object, setelah dikirim sebagai parameter untuk function
const mhs = {
  nama: "indra",
  umur: 22,
  email: "indra@gmail.com",
};

function getIdMhs({ nama }) {
  return nama;
}

console.log(getIdMhs(mhs));
