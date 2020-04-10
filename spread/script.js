//spread operator
// memecah iterables menjadi single element

// const mhs = ["indra", "indri", "indira"];
// console.log(...mhs);
// console.log(...mhs[0]);

// Menggabungkan Array
// const mhs = ["indra", "indri", "indira"];
// const dosen = ["adi", "ida", "aduh"];
// const orang = mhs.concat(dosen);
// const orang = [...mhs, "budi", ...dosen];
// console.log(orang);

// mengcopy array
// const mhs = ["indra", "indri", "indira"];
// const mhs1 = mhs;
// const mhs1 = [...mhs];
// console.log(mhs1);

// const liMhs = document.querySelectorAll("li");
// console.log(liMhs[0].textContent);
// const mhs = [];
// for (let i = 0; i < liMhs.length; i++) {
//   mhs.push(liMhs[i].textContent);
// }
// const mhs = [...liMhs].map((m) => m.textContent);
// console.log(mhs);

const nama = document.querySelector(".nama");
const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join("");
nama.innerHTML = huruf;
console.log(huruf);
