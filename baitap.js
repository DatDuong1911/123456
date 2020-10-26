// var array = [1, 5, 0, 8, 4, 15, 8]
// var tich = 1;
// for (i = 0; i < array.length; i++) {
//     tich = array[i] * tich;


// }
// if (tich > 15) {
//     console.log(tich);
// } else {
//     console.log(tich + " khong lon hon 15");
// }
var soMot = 55
var soHai = 3
var sum;
var tru;





function tru(soMot, soHai) {
    tru = soMot - soHai
    return tru;
}

function nhan(soMot, soHai) {
    nhan = soMot * soHai
    return nhan;
}

function chia(soMot, soHai) {
    chia = soMot / soHai
    return chia;
}

function tong(tru, nhan, chia) {
    tong = tru + nhan + chia
    return tong;
}

console.log(tong(tru(soMot, 5), nhan(soMot, 5), chia(soMot, 5)));