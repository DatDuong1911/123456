var arr = [1, 5, 7, 8, 9, 15, 8]

// for (var a = 0; a < arr.length; a++) {

//     if (arr[a] % 2 == 0) {
//         console.log(arr[a]);
//     }
// }

// for (b = 0; b < arr.length; b++) {
//     if (arr[b] % 2 !== 0) {
//         console.log(arr[b]);
//     }
// }

for (c = 0; c < arr.length; c++) {
    if (arr[c] >= 5) {
        console.log(arr[c]);
    }
}
// console.log(" ");

// var sum = 0;
// for (d = 0; d < arr.length; d++) {
//     sum = sum + arr[d];
// }
// console.log(sum);

// var tich = 1;
// for (i = 0; i < arr.length - 4; i++) {
//     tich = tich * arr[i];
//     console.log(tich);
// }

// var sum = 0;
// for (i = arr.length - 1; i > arr.length - 4; i--) {
//     sum = sum + arr[i];

// }
// console.log(sum);

function dientich(r) {
    return dientich = Math.PI * r * r;

}
console.log(dientich(10) + " cm2");