// ambil semua elemen video
const videos = Array.from(document.querySelectorAll("[data-duration]"));
// console.log(video);
// pilih hanya yang 'Javascript lanjutan'
let vidJavascript = videos
  .filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN"))
  // console.log(vidJavascript);
  // ambil durasi masing masing video
  .map((item) => item.dataset.duration)
  // ubah durasi menjadi float, ubah menit menjadi detik
  .map((waktu) => {
    //10:30 -> [10, 30] split
    const parts = waktu.split(":").map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })
  // jumlahkan semua detik
  .reduce((total, detik) => total + detik);
// ubah formatnya jadi jam menit detik
const jam = Math.floor(vidJavascript / 3600);
vidJavascript = vidJavascript - jam * 3600;
const menit = Math.floor(vidJavascript / 60);
const detik = vidJavascript - menit * 60;
// dimpan di DOM
const jumlahVideo = videos.filter((video) =>
  video.textContent.includes("JAVASCRIPT LANJUTAN")
).length;
const tVideo = document.querySelector(".jumlah-video");
tVideo.textContent = `${jumlahVideo} video`;
const tDurasi = document.querySelector(".jumlah-durasi");
tDurasi.textContent = `${jam} jam,${menit} menit, ${detik} detik.`;
console.log(jam, menit, detik);
