// Destructuring array
// const perkenalan = ['Halo', 'Nama', 'Saya', 'awe'];
// buat variabel ke dalam array dan lakukan assignment
// const [salam, satu, dua, nama] = perkenalan;

// skipping items
// const [salam, , , nama] = perkenalan;
// console.log(nama);

// swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// return value pada function
// function coba() {
//     return [1, 2];
// }

// let [a, b] = coba();
// console.log(a);

// // Rest parameter
// const [a, ...args] = [1, 2, 3, 4, 5, 6];
// console.log(a);
// console.log(args);

// destruturing object
// const mhs = {
//     nama: "awe",
//     umur: 11
// }

// const { nama, umur } = mhs;
// console.log(nama);

// assignment tanpa deklarasi objek
// ({ nama, umur } = {
//     nama: "awe",
//     umur: 11
// });
// console.log(nama);

// assign ke variabel baru
// const mhs = {
//     nama: "awe",
//     umur: 11
// }

// const { nama: n, umur: u } = mhs;
// console.log(u);

// memberikan default value
// const mhs = {
//     nama: "awe",
//     umur: 11,
//     email: "cikidawe@gmail.com"
// }

// const { nama, umur, email = "awe@gmail.com" } = mhs;
// console.log(email);

// memberikan default value + assign ke variabel baru
// const mhs = {
//     nama: "awe",
//     umur: 11,
//     email: "cikidawe@gmail.com"
// }

// const { nama: n, umur: u, email: e = "awe@gmail.com" } = mhs;
// console.log(e);

// menangkap objek dengan rest parameter
// const mhs = {
//     nama: "awe",
//     umur: 11,
//     email: "cikidawe@gmail.com"
// }

// const { nama, ...value } = mhs;
// console.log(value);

// mengambil field pada objek, setelah dikirim sebagai parameter untuk function
// const mhs = {
//   id: 112,
//   nama: "awe",
//   umur: 11,
//   email: "cikidawe@gmail.com",
// };

// // mengambil id dengan destrucuturing dari objek yg dikirm
// function getId({ id }) {
//   return id;
// }

// console.log(getId(mhs));
