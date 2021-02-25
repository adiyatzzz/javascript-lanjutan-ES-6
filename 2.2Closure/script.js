// function init() {
//     let nama = "awe";
//     return function (nama) {
//         console.log(nama);
//     }
// }

// let panggilNama = init();
// panggilNama("AWE");

// function salam(waktu) {
//   return function (nama) {
//     console.log(`Selamat ${waktu} ${nama}`);
//   };
// }

// let selamatPagi = salam("Pagi");
// let selamatSiang = salam("Siang");
// let selamatMalam = salam("Malam");

// selamatPagi("awe");
// selamatSiang("adudu");
// selamatMalam("A pak pak");

let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();

let counter = 100;

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
