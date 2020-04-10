//  for..of
// array
// const mhs = ["indra", "indri", "indira"];

// for (let i = 0; i < mhs.length; i++) {
//   console.log(mhs[i]);
// }

// mhs.forEach((m) => console.log(m));

// for (const m of mhs) {
//   console.log(m);
// }

// string
// const nama = "indra";
// for (const m of nama) {
//   console.log(m);
// }

// const mhs = ["indra", "indri", "indira"];
// mhs.forEach((m, i) => {
//   console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// });

// for (const [i, m] of mhs.entries()) {
//   console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// }

// Nodelist
// const liNama = document.querySelectorAll(".nama");
// liNama.forEach((n) => console.log(n.textContent));
// for (n of liNama) {
//   console.log(n.innerHTML);
// }

// Arguments
// function jumlahkanAngka() {
//   let jumlah = 0;
//   for (a of arguments) {
//     jumlah += a;
//   }
//   return jumlah;
// }
// console.log(jumlahkanAngka(1, 2, 3, 4, 5));

// For...in
const mhs = {
  nama: "indra",
  umur: 22,
  email: "indra@gmail.com",
};

for (m in mhs) {
  console.log(mhs[m]);
}
