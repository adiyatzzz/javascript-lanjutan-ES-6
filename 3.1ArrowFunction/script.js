// function expression
// let tampilNama = function (nama) {  
//     return `Halo ${nama}`;
// }
// console.log(tampilNama("awe"));

// arrow function
// let tampilNama = (nama) => {
//     return `Halo ${nama}`;
// }
// console.log(tampilNama("awe"));

// jika parameter lebih dari 1 pada tanda kurung
// let tampilNama = (nama, waktu) => {
//     return `Halo ${nama}, Selamat ${waktu}`;
// }
// console.log(tampilNama("awe", "Siang"));

//jika parameter hanya satu boleh tidak menggunakan tanda kurung dan isinya hanya return
// implisit return
// let tampilNama = nama => `Halo ${nama}`;
// console.log(tampilNama("awe"));

// jika tidak ada parameter
// let tampilNama = ()) => `Halo world`;
// console.log(tampilNama());

// studi kasus
let mhs = ["utuh", "soni wakwaw", "mang oleh"];

// dengan anonymous function
// let jumlahHuruf = mhs.map(function (nama) {  
//     return nama.length;
// });
// console.log(jumlahHuruf);

// dengan arrow function
// let jumlahHuruf = mhs.map(nama => nama.length);
// console.log(jumlahHuruf);

let jumlahHuruf = mhs.map(nama => ({nama: nama, jumlahHuruf: nama.length}));
console.log(jumlahHuruf);