//Data Types
let name = "Oluwaseun. "; //string
let age = 28; //number
let z = null; //null
let y = undefined; //undefined
let isMarried = false; //boolean
let favColor = ["blue", "white", "black", "yellow", "green", "pink", "red"];
let s = "Hello world";
//Concatenation
let m = "I am ";
let n = "I go to PwC Bootcamp";
let p = "I love to learn JavaScript";
let fruits = ["apple", "banana", "oranges"];
fruits.push("grape");
fruits.push("strawberry");
fruits.pop();
fruits.shift();
fruits.unshift('kiwi');
fruits[4] = "mango";

console.log(m + name + n + " and " + p);
console.log(`${m}${name}${n} and ${p} `);

console.log(name);
console.log(typeof y);
console.log(typeof isMarried);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.length);
console.error('This is a error');
console.warn('This is a warning');
console.log(fruits);

//Object literals
const person = {
    name: 'Oluwaseun',
    hobbies: ['music', 'movies', 'sports'],
    age: 20,
    height: 6.0,
    weight: 180,
    isMarried: false,
    greeting: function () {
        console.log('hello!')
    }
}
console.log(person.isMarried);

