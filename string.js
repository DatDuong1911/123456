// cho array
// //dem xem bao nhieu ky tu
// console.log(str.trim());

/*
cho 1 array = [{
    name: "dat",
    age: 20
},{
    name: "nodemy",
    age: 25
},{
    name: "hihi",
    age: 30
}]


hay in ra toan bo name co trong mmang


bai 2: cho 1 array [2, 5, 20, 4, 1]
định nghĩa 1 function tính tổng với đối số đầu tiên là số vị trị tổng cần 
tính của mảng
đối số thứ 2 là 1 số. bên trong function:
- hãy chạy vòng for thực hiện tính tổng các giá trị trong mảng với giới hạn
 số lượng phần tử là tham số thứ 2
truyền vòng -> ví dụ nếu tham số 1 truyền vào là 4 thì chỉ tính 4 số đầu 
tiền của mảng, 
nếu tham số 1 là 2 thì chỉ cần tính tổng 2 số đầu tiên của mảng.
- khi tính được tổng của vòng lặp ở trên hãy cộng kết quả đó với tham số thứ 2
-> kết quả thu được chúng ta sẽ gán lại vào function

*/


// // bai1
// var arr = [{
//     name: "dat",
//     age: 20
// }, {
//     name: "nodemy",
//     age: 25
// }, {
//     name: "hihi",
//     age: 30
// }]
// for (i = 0; i < arr.length; i++) {
//     console.log(arr[i].name);
// }

//bai2
// var array = [2, 5, 20, 4, 1]


// var b = 5;
// var tong = function(a, b) {
//     var sum = 0;
//     for (var i = 0; i < a; i++) {
//         sum = sum + array[i]
//     }
//     sum = sum + b;
//     return sum;
// }
// console.log(tong(2, b));





















//zxczxc/
var arr = [2, 50, 20, 4, 1, 56, 6555, 226, 1]
var a = 10;
var tong = function(a, b) {
    var sum = 0;
    for (var i = 0; i < arr[i]; i++) {
        sum = sum + arr[i]
    }
    sum = sum + a;
    return sum;

}
console.log(tong(5, a));