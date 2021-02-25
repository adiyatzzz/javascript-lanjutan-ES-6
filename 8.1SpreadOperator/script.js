// spread operator
// memecah iterables menjadi single element

// const mhs = ["awe", "udin", "digidaweawe"];
// console.log(...mhs[2]);

// menggabung 2 array
// const mhs = ["awe", "udin", "digidaweawe"];
// const dosen = ["utuh", "anang", "jali"];
// const orang = [...mhs, "aji", ...dosen];
// // const orang = mhs.concat(dosen);

// console.log(orang);

// mengcopy array
// const mhs = ["awe", "udin", "digidaweawe"];
// // const mhs1 = mhs; salah
// const mhs1 = [...mhs];
// mhs1[0] = "utuh";
// console.log(mhs1);

// const liMhs = document.querySelectorAll('li');
// const mhs = [];
// for (let i = 0; i < liMhs.length; i++) {
//     mhs.push(liMhs[i].innerHTML);
// }

// const mhs = [...liMhs].map(m => m.textContent);

// console.log(mhs);

const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(n => `<span>${n}</span>`).join('');
console.log(huruf);
nama.innerHTML = huruf;