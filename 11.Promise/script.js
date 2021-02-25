// promise
// object mempresentasikan keberhasilan atau kegagalan sebuah event yang asynchronus di masa yang akan datang
// janji( terpenuhi / ingkar )
// states(fulfilled / rejected / pending)
// callback(resolve / reject / finally)
// aksi(then / catch)

// contoh 1
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         resolve('Janji ditepati');
//     } else {
//         reject('Janji di ingkari');
//     }
// });

// janji1.then(response => console.log('Ok : ' + response)).catch(response => console.log('Not Ok : ' + response));

// contoh 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         setTimeout(() => {
//             resolve('Janji ditepati setelah menunggu');
//         }, 2000);
//     } else {
//         setTimeout(() => {
//             reject('Janji diingkari setelah menunggu');
//         }, 2000);
//     }
// });

// console.log('mulai');
// // console.log(janji2.then(() => console.log(janji2)));
// janji2
//     .finally(() => console.log('selesai menunggu'))
//     .then(response => console.log('Ok : ' + response))
//     .catch(response => console.log('Not Ok : ' + response));
// console.log('selesai');

// contoh 3
// promise.all

const film = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([{
            judul: 'avengers',
            director: 'unda sorang',
            actor: 'robert downey jr'
        }]);
    }, 1000);
})

const cuaca = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([{
            kota: 'banjarmasin',
            temp: 18,
            kondisi: 'rintik'
        }]);
    }, 500);
})

// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));
Promise.all([film, cuaca])
    // .then(response => console.log(response));
    .then(response => {
        const [film, cuaca] = response;
        console.log(film);
        console.log(cuaca);
    })