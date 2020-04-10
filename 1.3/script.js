// object Literal
// problem : tidak efektif untuk object yang banyak
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
// buat object baru
// const methodMahasiswa = {
//   makan: function(porsi) {
//     this.energi += porsi;
//     console.log(`Hallo ${this.nama}, Selamat makan`);
//   },
//   main: function(jam) {
//     this.energi -= jam;
//     console.log(`Hallo ${this.nama}, Selamat bermain`);
//   },
//   tidur: function(jam) {
//     this.energi += jam * 2;
//     console.log(`Hallo ${this.nama}, Selamat tidur`);
//   }
// };
// function Mahasiswa(nama, energi) {
//   let mahasiswa = Object.create(methodMahasiswa);
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;
//   mahasiswa.makan = methodMahasiswa.makan;
//   mahasiswa.main = methodMahasiswa.main;
//   mahasiswa.tidur = methodMahasiswa.tidur;
//   return mahasiswa;
// }

// let indra = Mahasiswa("indra", 10);
// let indri = Mahasiswa("indri", 15);

// Protorype
// 1.Buat Constructor
// 2.Prototype sudah ada saat kita membuat object cmiiw
function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;
}
// buat prototype
Mahasiswa.prototype.makan = function(porsi) {
  this.energi += porsi;
};

Mahasiswa.prototype.main = function(jam) {
  this.energi -= jam;
};
Mahasiswa.prototype.tidur = function(jam) {
  this.energi += jam * 2;
};
// Buat let untuk panggil constructor
let indra = new Mahasiswa("indra", 10);
let indri = new Mahasiswa("indri", 20);

// versi class
// class Mahasiswa {
//   constructor(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
//   }
//   makan(porsi) {
//     this.energi += porsi;
//   }

//   makan(jam) {
//     this.energi -= jam;
//   }
//   makan(jam) {
//     this.energi += jam * 2;
//   }
// }

// construtor
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
//   this.makan = function(porsi) {
//     this.energi += porsi;
//     console.log(`Hallo ${this.nama}, Selamat makan`);
//   };
//   this.main = function(jam) {
//     this.energi -= jam;
//     console.log(`Hallo ${this.nama}, Selamat bermain`);
//   };
// }

// let indra = new Mahasiswa("indra", 10);
// let indri = new Mahasiswa("indri", 20);
