// Callback
// Syncrhonus Callback
// function halo(nama) {
//   alert(`Halo, ${nama}`);
// }

// function tampilkanPesan(callback) {
//   const nama = prompt("Masukan Nama : ");
//   callback(nama);
// }

// tampilkanPesan(halo);
// tampilkanPesan((nama) => alert(`Halo, ${nama}`));

// Asynchronus callback
// data array of object
// const mhs = [
//   {
//     nama: "indra",
//     nrp: "16.11.0014",
//     jurusan: "teknik informatika",
//   },
//   {
//     nama: "indri",
//     nrp: "16.11.0024",
//     jurusan: "teknik informatika",
//   },
//   {
//     nama: "indira",
//     nrp: "16.11.0034",
//     jurusan: "teknik informatika",
//   },
// ];
// console.log("mulai");
// mhs.forEach((m) => console.log(m.nama));
// console.log("selesai");

// function getDataMahasiswa(url, success, error) {
//   let xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         success(xhr.response);
//       } else if (xhr.status === 404) {
//         error();
//       }
//     }
//   };

//   xhr.open("get", url);
//   xhr.send();
// }
// console.log("mulai");
// getDataMahasiswa(
//   "data.json",
//   (result) => {
//     const mhs = JSON.parse(result);
//     mhs.forEach((m) => console.log(m.nama));
//   },
//   (error) => {
//     console.log(error);
//   }
// );
// console.log("selesai");

// Jquery
// console.log("mulai");
// $.ajax({
//   url: "data.json",
//   success: (result) => {
//     result.forEach((m) => console.log(m.nama));
//   },
//   error: (eror) => {
//     console.log(eror.responseText);
//   },
// });
// console.log("selesai");
