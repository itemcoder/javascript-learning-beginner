// for()
let resultfinal = '';
for (let j = 100; j <= 1000000; j = j * 10) {
    // console.log(j);
    let i = 1;
    let result = 0;
    for (i; i <= j; i++) {
        result = result + i;
    }
    resultfinal += result + " ";
}
console.log(resultfinal);
// serise: 5050 500500 50005000