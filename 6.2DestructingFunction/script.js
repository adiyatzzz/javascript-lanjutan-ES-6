// destructuring function

// function kalkulasi(a, b) {
//     return [a + b, a - b, a * b, a / b];
// }

// urutan nilai array nya harus berurutan
// const [jumlah, kurang, kali, bagi = 'Tidak ada'] = kalkulasi(2, 3);
// console.log(kurang);

// urutan array yg tidak berurutan
// function kalkulasi(a, b) {
//     return {
//         tambah: a + b,
//         kali: a * b,
//         bagi: a / b,
//         kurang: a - b
//     };
// }

// const { kurang, bagi, tambah, kali } = kalkulasi(2, 3);
// console.log(kali);

const mhs1 = {
    nama: 'awe',
    umur: 11,
    email: 'awe@gmail.com',
    nilai: {
        tugas: 80,
        uts: 85,
        uas: 90
    }
};

// function cetakMhs(mhs) {
//     return `Halo, Saya ${mhs.nama}, Saya ${mhs.umur} Tahun`;
// }

// console.log(cetakMhs(mhs1));

function cetakMhs({ nama, umur, nilai: { tugas, uts, uas } }) {
    return `Halo, Saya ${nama}, Saya ${umur} Tahun, Nilai uas saya adalah ${uas}`;
}

console.log(cetakMhs(mhs1));