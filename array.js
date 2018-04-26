// let myArray = [
//     1, // 0
//     3, // 1
//     4, // 2
//     null, // 3
//     7, // 4
//     undefined, // 5
//     10 // 6
// ];
let myArray = [
    10, // 0
    3, // 1
    4, // 2
    6, // 3
    7, // 4
    9, // 5
    10 // 6
];


// forEach,filter,some, every,map

// myArray.forEach(function(el) {
//     console.log(el * 2);
// });

// let newArray = myArray.map(function(el) {
//     return el * 2;
// });

// let newArray = myArray.filter(function(el) {
//     return el > 6;
// });

// let result = myArray.some(function(el) {
//     return el > 70;
// });

let result = myArray.every(function(el) {
    return el > 2;
});
console.log(myArray);
console.log(result);
