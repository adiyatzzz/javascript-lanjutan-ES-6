// const coba = new Promise(resolve => {
//     setTimeout(() => {
//         resolve('ditepati');
//     }, 2000);
// });

// coba.then(() => console.log(coba));

function cobaPromise() {
    return new Promise((resolve, reject) => {
        const time = 5000;
        if (time < 5000) {
            setTimeout(() => {
                resolve('ditepati');
            }, time);
        } else {
            reject('kelamaan');
        }

    })
}

// const coba = cobaPromise();
// coba
//     .then(() => console.log(coba))
//     .catch(() => console.log(coba));

async function cobaAsync() {
    try {
        const coba = await cobaPromise();
        console.log(coba);
    } catch (error) {
        console.error(error);
    }

}

cobaAsync();