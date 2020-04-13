// const coba = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("selesai");
//   }, 2000);
// });

// console.log(coba);
// coba.then((coba) => console.log(coba));

// function cobaPromise() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("selesai");
//     }, 2000);
//   });
// }

// const coba = cobaPromise();
// coba.then((coba) => console.log(coba));

// function cobaPromise() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("selesai");
//     }, 2000);
//   });
// }

// async function cobaAsync() {
//   const coba = await cobaPromise();
//   console.log(coba);
// }

// cobaAsync();

// function cobaPromise() {
//   return new Promise((resolve, reject) => {
//     const waktu = 6000;
//     if (waktu < 5000) {
//       setTimeout(() => {
//         resolve("selesai");
//       }, waktu);
//     } else {
//       reject("kelamaan");
//     }
//   });
// }

// const coba = cobaPromise();
// coba.then((coba) => console.log(coba)).catch((coba) => console.log(coba));

function cobaPromise() {
  return new Promise((resolve, reject) => {
    const waktu = 6000;
    if (waktu < 5000) {
      setTimeout(() => {
        resolve("selesai");
      }, waktu);
    } else {
      reject("kelamaan");
    }
  });
}

async function cobaAsync() {
  try {
    const coba = await cobaPromise();
    console.log(coba);
  } catch (err) {
    console.log(err);
  }
}

cobaAsync();
