// object Literal
// let mahasiswa1 = {
//   nama: "indra",
//   energi: 10,
//   makan: function(porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Halo ${this.nama}, selamat makan`);
//   }
// };

// let mahasiswa2 = {
//   nama: "indri",
//   energi: 20,
//   makan: function(porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Halo ${this.nama}, selamat makan`);
//   }
// };

// Function declaration
// function Mahasiswa(nama, energi) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;
//   mahasiswa.makan = function(porsi) {
//     this.energi += porsi;
//     console.log(`Hallo ${this.nama}, Selamat makan`);
//   };
//   mahasiswa.main = function(jam) {
//     this.energi -= jam;
//     console.log(`Hallo ${this.nama}, Selamat bermain`);
//   };
//   return mahasiswa;
// }

// let indra = Mahasiswa("indra", 10);
// let indri = Mahasiswa("indri", 15);

// construtor
function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;
  this.makan = function(porsi) {
    this.energi += porsi;
    console.log(`Hallo ${this.nama}, Selamat makan`);
  };
  this.main = function(jam) {
    this.energi -= jam;
    console.log(`Hallo ${this.nama}, Selamat bermain`);
  };
}

let indra = new Mahasiswa("indra", 10);
let indri = new Mahasiswa("indri", 20);
