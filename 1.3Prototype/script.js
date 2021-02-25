// Membuat objek
// literal
// tidak efektif untuk program yang banyak
// let mahasiswa1 = {
//     nama: "awe",
//     energi: 10,
//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat Makan!!`);
//     }
// }

// let mahasiswa2 = {
//     nama: "digi",
//     energi: 20,
//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat Makan!!`);
//     }
// }

// function declaration
// const methodMahasiswa = {
//     makan: function(porsi){
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat Makan!!`);
//     },

//     main: function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Selamat Main!!`);
//     },

//     tidur: function (jam) {
//         this.energi += jam * 2;
//         console.log(`Halo ${this.nama}, Selamat Tidur!!`);
//     }
// }

// function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.name = nama;
//     mahasiswa.energi = energi;

//     return mahasiswa;
// }

// let awe = Mahasiswa("awe", 10);

// prototype
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//   this.energi += porsi;
//   return `Halo ${this.nama}, Selamat Makan!!`;
// };

// Mahasiswa.prototype.main = function (jam) {
//   this.energi -= jam;
//   return `Halo ${this.nama}, Selamat Bermain!!`;
// };

// Mahasiswa.prototype.tidur = function (jam) {
//   this.energi += jam * 2;
//   return `Halo ${this.nama}, Selamat Makan!!`;
// };
// let awe = new Mahasiswa("awe", 20);

// versi class
// class Mahasiswa {
//     constructor(nama, energi){
//         this.nama = nama;
//         this.energi = energi;
//     }

//     makan(porsi) {
//         this.energi += porsi;
//         return `Halo ${this.nama}, Selamat Makan!!`;
//     }

//     main(jam) {
//         this.energi -= jam;
//         return `Halo ${this.nama}, Selamat Bermain!!`;
//     }

//     tidur(jam) {
//         this.energi += jam * 2;
//         return `Halo ${this.nama}, Selamat tidur!!`;
//     }
// }

// let awe = new Mahasiswa('awe', 10);

// constructor function
// function Mahasiswa(nama, energi) {
//     this.name = nama;
//     this.energi = energi;

//     this.makan = function(porsi){
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat Makan!!`);
//     }

//     this.main = function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Selamat Main!!`);
//     }

// }

// let awe = new Mahasiswa("Awe", 10);
