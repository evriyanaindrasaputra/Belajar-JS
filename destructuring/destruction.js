// Destructuring

// function penjumlahPerkalian(a, b) {
//   return [a + b, a - b, a * b, a / b];
// }
// function kalkulasi(a, b) {
//   return [a + b, a - b, a * b, a / b];
// }

// const jumlah = penjumlahPerkalian(2, 3)[0];
// const kali = penjumlahPerkalian(2, 3)[1];

// const [jumlah, kali] = penjumlahPerkalian(2, 3);
// console.log(jumlah);
// console.log(kali);
// const [jumlah, kurang, kali, bagi = "tidak ada"] = kalkulasi(2, 3);
// console.log(bagi);

// function kalkulasi(a, b) {
//   return {
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     bagi: a / b,
//   };
// }

// const { tambah, kali, kurang, bagi } = kalkulasi(2, 3);
// console.log(kali);

// Destructuring function arguments
const mhs1 = {
  nama: "indra saputra",
  umur: 22,
  email: "indra@gmail.com",
  nilai: {
    tugas: 80,
    uts: 85,
    uas: 75,
  },
};

function cetakMhs({ nama, umur, nilai: { tugas, uts, uas } }) {
  return `halo, nama saya ${nama}, dan umur saya ${umur}, mempunyai nilai uas ${uas}`;
}
console.log(cetakMhs(mhs1));
