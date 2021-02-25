const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// mencari angka >= 3
// for
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {

//     if (angka[i] >= 3) {
//         newAngka.push(angka[i]);
//     }
// }
// console.log(newAngka);

// filter
// const newAngka = angka.filter((a) => a >= 3);
// console.log(newAngka);

// map
// mengkali 2 semua element
// const newAngka = angka.map(a => a * 2);
// console.log(newAngka);

// reduce
// menambahkan semua element
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(newAngka);

// chaining method
// cari angka > 5
// kalikan 3
// tambahkan
const newAngka = angka
  .filter((a) => a > 5)
  .map((a) => a * 3)
  .reduce((accu, curr) => accu + curr);
console.log(newAngka);
