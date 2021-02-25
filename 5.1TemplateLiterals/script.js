// template literal / Template String
// const nama = 'awe';
// const umur = 10;
// console.log(`Halo nama saya ${nama}, Saya ${umur} Tahun`);

// embedded expression
// console.log(`${2 + 2}`);
// console.log(`${alert('Halo')}`);
// const x = 10;
// console.log(`${(x % 2 == 0) ? 'Genap' : 'Ganjil'}`);

// HTML Fragment
const mhs = {
    nama: "awe",
    umur: 22,
    nrp: "01923341"
}

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nrp">${mhs.nrp}</span>
</div>`;

document.body.innerHTML = el;