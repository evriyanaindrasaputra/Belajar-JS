// function expresion
// const tampilNama = function(nama){
//     return `Halo, ${nama}`;
// }
// console.log(tampilNama('indra'));

// const tampilNama = (nama, waktu) => {
//   return `Halo ${nama}, selamat ${waktu}`;
// };
// console.log(tampilNama("indra", "malam"));

// implicite retrun and one paramater
// const tampilNama = nama => `Halo, ${nama}`;
// console.log(tampilNama("indra"));

// none parameter
// const tampilNama = () => `helo world`;
// console.log(tampilNama());

// example
// let mahasiswa = ["indra", "indira", "saputra"];
// let jumlahHuruf = mahasiswa.map(function(nama) {
//   return nama.length;
// });
// console.log(jumlahHuruf());

// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf());

// return to object bungkus lagi gan
// let jumlahHuruf = mahasiswa.map(nama => ({
//   nama: nama,
//   jmlhHuruf: nama.length
// }));
// console.table(jumlahHuruf);

// Arrow function Lanjutan
// constructor function
// const Mahasiswa = function() {
//   this.nama = "indra";
//   this.umur = 33;
//   this.sayHello = function() {
//     console.log(`Hallo ${this.nama}, ${this.umur}`);
//   };
// };

// const indra = new Mahasiswa();

// Arrow function
// const Mahasiswa = function() {
//   this.nama = "indra";
//   this.umur = 33;
//   this.sayHello = () => {
//     console.log(`Hallo ${this.nama}, ${this.umur}`);
//   };
// };

// const indra = new Mahasiswa();

// object literal
// const mhs1 = {
//   nama: "indra",
//   umur: 14,
//   sayHello: function() {
//     console.log(`Hallo ${this.nama}, ${this.umur}`);
//   }
// };

// console.log(mhs1);

// const Mahasiswa = function() {
//   this.nama = "indra";
//   this.umur = 14;
//   this.sayHello = function() {
//     console.log(`Halo nama saya ${this.nama}, umur saya ${this.umur}`);
//   };

//   setInterval(() => {
//     console.log(this.umur++);
//   }, 500);
// };

// const indra = new Mahasiswa();

// kasus real life
const box = document.querySelector(".box");
box.addEventListener("click", function() {
  let satu = "size";
  let dua = "caption";
  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }
  this.classList.toggle(satu);
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});
