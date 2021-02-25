// ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'));
// pilih yang 'JAVASCRIPT LANJUTAN'
let jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))
    // ambil durasi masing-masing video
    .map(item => item.dataset.duration)
    // ubah durasi jadi int, ubah menit jadi detik
    .map(waktu => {
        // 11:30 jadi [11, 30]
        const parts = waktu.split(':').map(part => parseFloat(part))
        return (parts[0] * 60) + parts[1];
    })
    // jumlahkan semua detik
    .reduce((total, detik) => total + detik);
// ubah format menjadi jam menit detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;
// simpan di DOM
const durasi = document.querySelector('.total-durasi');
durasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik.`;
const allVids = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pJmlVids = document.querySelector('.jumlah-video');
pJmlVids.textContent = `${allVids} Video.`

console.log(detik);