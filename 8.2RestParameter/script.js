// rest parameter

// function myFunc() {
//     // return `a=${a}, b=${b}, myArgs=${myArgs}`;
//     // return myArgs;
//     // return Array.from(arguments);
//     return [...arguments];
// }

// console.log(myFunc(1, 2, 3, 4, 5));

// function jumlah(...angka) {
//     // let total = 0;
//     // for (const a of angka) {
//     //     total += a;
//     // }

//     // return total;

//     return angka.reduce((a, b) => a + b);
// }

// console.log(jumlah(1, 2, 3, 4, 5));

// array destructuring
// const kel1 = ['udin', 'ucup', 'utuh', 'ular', 'ururur'];
// const [ketua, wakil, ...anggota] = kel1;
// console.log(anggota);

// object destructur
// const team = {
//     pm: 'unda',
//     frontend: 'smiti',
//     backend: 'adudu',
//     devOps: 'jali'
// }

// const { pm, ...myTeam } = team;
// console.log(myTeam);

// filtering
function filterBy(type, ...values) {
    return values.filter(v => typeof v === type);
}

console.log(filterBy('boolean', 1, 2, 'Utuh', false, 10, true, 'Dodi'));