// 2.1 execution context, hoisting, scope

// console.log(nama);
// var nama = "awe";

// creation phase pada global context
// nama var = undefined
// nama func = fn()
// window = object global
// this = window

// execution phase


// console.log(hello())

// var nama = "awe";
// var umur = 10;

// function hello() {
//     return `Halo saya ${nama}, umur ${umur} tahun`;
// }

// function membuat local execution context
// yang di dalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting

// var nama = "awe";
// var username = "@awe";

// function insta() {
//     // console.log(arguments)
//     var instaUrl = "https://instagram.com/";
//     return instaUrl + username;
// }

// console.log(insta("@dodo", "@udin"));

//function
// function a() {
//     console.log("ini a");

//     function b() {
//         console.log("ini b");
        
//         function c() {
//             console.log("ini c");
//         }
        
//         c();
//     }

//     b();
// }

// a();

function satu() {
    var nama = "awe";
    console.log(nama);
}

function dua() {
    console.log(nama);
}

console.log(nama);
var nama = "digi";
satu();
dua("digi");
console.log(nama);