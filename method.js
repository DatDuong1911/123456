 var arr = [0, 2, 6, 8, 3, 4, 159, 6]
     //      //kiem tra so chan 
     //  var newArr = arr.filter(function(item) {
     //      return item % 2 == 0;
     //  })
     //  console.log(newArr);

 //  //kiem tra so le
 //  var newArr = arr.filter(function(item) {
 //      return item % 2 == 1;
 //  })
 //  console.log(newArr);

 //  //in ra so lon hon hoac bang 5
 var newArr = arr.filter(function(item) {
     return item >= 5;
 })
 console.log(newArr);