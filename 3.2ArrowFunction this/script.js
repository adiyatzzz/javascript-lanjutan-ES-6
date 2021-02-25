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
// let mhs = ["utuh", "soni wakwaw", "mang oleh"];

// dengan anonymous function
// let jumlahHuruf = mhs.map(function (nama) {  
//     return nama.length;
// });
// console.log(jumlahHuruf);

// dengan arrow function
// let jumlahHuruf = mhs.map(nama => nama.length);
// console.log(jumlahHuruf);

// let jumlahHuruf = mhs.map(nama => ({nama: nama, jumlahHuruf: nama.length}));
// console.log(jumlahHuruf);

// construct function
// const Mahasiswa = function () {  
//     this.nama = "Awe";
//     this.umur = 19;
//     this.sayHello = function() { 
//         console.log(`Halo saya ${this.nama}, Saya ${this.umur} tahun`);
//     }
// }

// let awe = new Mahasiswa();

// object literal
// let nama = "awe";
// let umur = 15;
// const mhs1 = {
//     nama: "digi",
//     umur: 12,
//     sayHello: () => {
//         // this.nama = "awe";
//         // this.umur = 10;
//         (() => {
//             console.log(`Halo saya ${this.nama}, Saya ${this.umur} tahun`);
//         })();
//     }
// }

// const Mahasiswa = function () {  
//     this.nama = "Awe";
//     this.umur = 19;
//     this.sayHello = function() {  
//         console.log(`Halo saya ${this.nama}, Saya ${this.umur} tahun`);
//     }

//     setInterval(function() {
//         console.log(this.umur); 
//     }, 500)
// }

// let awe = new Mahasiswa();


const box = document.querySelector('.box');
box.addEventListener('click', function () {  
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)) {
        [satu, dua] = [dua, satu];
    }
    this.classList.toggle(satu);

    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600);
});
