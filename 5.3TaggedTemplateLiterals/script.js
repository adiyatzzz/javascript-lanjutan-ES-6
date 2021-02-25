// tagged templates
const nama = "awe";
const umur = 12;

function coba(strings, ...values) {
  // let result = '';
  // strings.forEach((str, i) => {
  //     result += `${str} ${values[i] || ''}`;
  // });
  // return result;

  // result = total or accumulator
  // every time reduce execute, store the return value of reduce to string
  return strings.reduce(
    (result, str, i) => `${result}${str}${values[i] || ""}`,
    ""
  );
}

const str = coba`Halo, Nama saya ${nama}, Saya ${umur} tahun`;
console.log(str);

// const nama = "awe";
// const umur = 12;

// function coba(strings, ...values) {

//     return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '');
// }

// const str = coba`Halo, Nama saya ${nama}, Saya ${umur} tahun`;
// document.body.innerHTML = str;
