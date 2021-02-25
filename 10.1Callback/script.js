// Callback
// Synchronous Callback
// function halo(nama) {
//   alert(`Halo, ${nama}`);
// }

// function tampilkanPesan(cb) {
//   const nama = prompt("Masukkan Nama : ");
//   cb(nama);
// }

// tampilkanPesan((nama) => alert(`Halo, ${nama}`));

// const mhs = [
//   {
//     nama: "awe",
//     email: "awe@gmail.com",
//   },
//   {
//     nama: "digi",
//     email: "digi@gmail.com",
//   },
//   {
//     nama: "utuh",
//     email: "utuh@gmail.com",
//   },
// ];

// console.log("mulai");
// mhs.forEach((m) => {
//   for (let i = 0; i < 1000000; i++) {
//     let date = new Date();
//   }

//   console.log(m.nama);
// });
// console.log("selesai");

// Asynchronous Callback
function getDataMahasiswa(url, success, error) {
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        success(xhr.response);
      } else if (xhr.status === 404) {
        error(xhr.statusText);
      }
    }
  };

  xhr.open("get", url);
  xhr.send();
}

console.log("mulai");
// getDataMahasiswa(
//   "mahasiswa.json",
//   (result) => {
//     const mhs = JSON.parse(result);
//     mhs.forEach((m) => {
//       console.log(m.nama);
//     });
//   },
//   (err) => {
//     console.log(err);
//   }
// );
$.ajax({
  type: "GET",
  url: "mahasiswa.json",
  success: function (response) {
    response.forEach((m) => {
      console.log(m.nama);
    });
  },
  error: function (err) {
    console.error(err.responseText);
  },
});
console.log("selesai");
