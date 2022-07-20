// for (let i = 0; i < 10; i++){
//     console.log(i);
// }
// for (let i = 2; i < 10; i++){
//     console.log(i);
// }
// for (let p = 4; p <= 8; p++){
//     console.log(p);
// }
// //
// for (let i = 12; i <= 19; i++){
//     console.log(i);
// }
// for (let i = 1; i <= 10; i++){
//     console.log(`Number is ${ i }`);
// }

// While loop
let i = 0;
while (i < 20) {
    console.log(`Number is ${ i }`)
    i++
}

//if statement
const x = 5;
if (x == 20) {
    console.log('x is 20')
} else if (x == 10) {
    console.log('x is 10')
}
else {
    console.log('x is not 20 or 10')
}

// //class work
// const score = 90;
// if (score == 90) {
//     console.log('Excellent')
// } else if (score == 80) {
//     console.log('Very good')
// } else if (score == 50) {
//     console.log('Average')
// }else if (score == 30) {
//     console.log('Failed')
// }
// else {
//     console.log('You did not write the test')
// }

//
const result = 6;
if (result > 70 && result <= 100) {
    console.log('Distinction')
} else if (result > 60 && result <= 69) {
    console.log('Very good')
} else if (result > 50 && result <= 59) {
    console.log('Credit')
}else if (result > 40 && result <= 49) {
    console.log('Pass')
} else if (result > 0 && result <= 39) {
    console.log('Failed')
}
else {
    console.log('You did not write the test')
}

