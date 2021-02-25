// 1. HTML Fragment
// const mhs = {
//     nama: "awe",
//     umur: 22,
//     nrp: "01923341"
// }

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nrp">${mhs.nrp}</span>
// </div>`;

// 2. Looping
// const mhs = [
//     {
//         nama: "awe",
//         email: "awe@gmail.com"
//     },
//     {
//         nama: "digi",
//         email: "digi@gmail.com"
//     },
//     {
//         nama: "udin",
//         email: "udin@gmail.com"
//     }
// ];

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//     </ul>`).join(" ")}
// </div>`;

// 3. pengkondisian
// const lagu = {
//     judul: "Tiga Titik Hitam",
//     band: "Burgerkill",
//     feat: "Padi"
// }

// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.band}</li>
//         <li>${lagu.judul} ${lagu.feat ? `Feat. ${lagu.feat}` : ''}</li>
//     </ul>
// </div>`;

// 4.nested
// HTML fragments bersarang
const mhs = {
  nama: "udin",
  semester: 3,
  mataKuliah: [
    "Pemrgoraman Web",
    "Pemgrograman berorientasi objek",
    "Pemrograman dasar",
    "Basis data",
  ],
};

function cetakMatkul(matkul) {
  return `
        <ul>
            ${matkul.map((mk) => ` <li>${mk}</li>`).join("")}
        </ul>
    `;
}

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">Semester : ${mhs.semester}</span>
    <h4>Mata Kuliah</h4>
    ${cetakMatkul(mhs.mataKuliah)}
</div>`;

document.body.innerHTML = el;
