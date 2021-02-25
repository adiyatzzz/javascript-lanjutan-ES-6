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
// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.name = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function(porsi){
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat Makan!!`);
//     }

//     mahasiswa.main = function (jam) { 
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Selamat Main!!`);
//     }

//     return mahasiswa;
// }

// let awe = Mahasiswa("awe", 10);

// constructor function
function Mahasiswa(nama, energi) {
    this.name = nama;
    this.energi = energi;

    this.makan = function(porsi){
        this.energi += porsi;
        console.log(`Halo ${this.nama}, Selamat Makan!!`);
    }

    this.main = function (jam) { 
        this.energi -= jam;
        console.log(`Halo ${this.nama}, Selamat Main!!`);
    }

}

let awe = new Mahasiswa("Awe", 10);