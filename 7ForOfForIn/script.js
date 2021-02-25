// for of
// array

// const mhs = ['awwe', 'asw', 'ajg'];

// for (let i = 0; i < mhs.length; i++) {
//     console.log(mhs[i]);
// }

// mhs.forEach(m => console.log(m));

// for (const m of mhs) {
//     console.log(m);
// }

// String
// const nama = "digidawe";
// for (const n of nama) {
//     console.log(n);
// }

// const mhs = ['awwe', 'asw', 'ajg'];
// mhs.forEach((m, i) => {
//     console.log(`${m} adalah mhs ke-${i}`);
// });

// for (const [i, m] of mhs.entries()) {
//     console.log(`${m} adalah mhs ke-${i}`);
// }

// nodelist
// const namaLi = document.querySelectorAll('.nama');
// namaLi.forEach(n => console.log(n.innerHTML));
// for (const n of namaLi) {
//     console.log(n.innerHTML);
// }

// arguments
// function jumlahAngka() {
//     // argument tidak bisa menggunakan function reduce dan foreach
//     let jumlah = 0;
//     for (const i of arguments) {
//         jumlah += i ;
//     }
//     return jumlah;
// }
// console.log(jumlahAngka(1, 2, 3, 4, 5));

// for in
// untuk looping pada object
const mhs = {
    nama: "awe",
    umur: 10,
    email: "dawe@gmail.com"
}

for (const m in mhs) {
    console.log(mhs[m]);
    // m = key / mhs[m] = value
}