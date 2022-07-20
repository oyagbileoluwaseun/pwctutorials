// //function
function addNum(a, b) {
    return a + b
}
console.log(addNum(3, 2));

// //substract
function subNum(a, b) {
    return a - b
}
console.log(subNum(3, 2));

// //division
function divNum(a, b) {
    return a / b
}
console.log(divNum(3, 2));

// //multiply
function mulNum(a, b) {
    return a * b
}
console.log(mulNum(3, 2));

//arrow function
const addNum = (a, b) => {
    return a + b;
}
console.log(addNum(2, 2));

const sqrNum = (n) => {
    return n*n
}
console.log(sqrNum(4));

//Modulo
const numMod = (m) => {
    return m%2
}
console.log(numMod(11));

//jump by numbers
const printTwo = (n) => {
    for (let i = 1; i < n; i+=3) {
        console.log(i);
    }
}
console.log(printTwo(20))

//
let someWord = "Adamu";
console.log(someWord.split());

// Algorithm
let someArray = ["a", "b", "c", "d", "e", "f"];
console.log(someArray.reverse());

//a function to convert a given string to an array
function stringToArray(str) {
    return str.split('').reverse().join('');
} 
console.log(stringToArray('oluwaseun'));

//if a function is a Palindrione
function isPalindrione(str) {
    let newString = str.split('').reverse().join('');
    if (str === newString) {
        return true
    } else {
        return false
    }
}
console.log(isPalindrione('level'));

//int palindrione
function intPalindrione(num) {
    let numToString = num.toString();
    return numToString === numToString.split('').reverse().join('') ? true : false;
   
}
console.log(intPalindrione(11));