// function init() {
//   //   let nama = "indra";
//   return function(nama) {
//     console.log(nama);
//   };
//   //   tampilNama();
// }

// let panggilNama = init();
// panggilNama("indra");
// panggilNama("indri");

// function ucapkanSalam(waktu) {
//   return function(nama) {
//     console.log(`Halo ${nama}, selamat ${waktu}`);
//   };
// }

// let selamatPagi = ucapkanSalam("Pagi");
// let selamatSiang = ucapkanSalam("Siang");
// let selamatMalam = ucapkanSalam("Malam");

// selamatPagi("indra");

let add = (function() {
  let counter = 0;
  return function() {
    return ++counter;
  };
})();

console.log(add());
console.log(add());
console.log(add());
