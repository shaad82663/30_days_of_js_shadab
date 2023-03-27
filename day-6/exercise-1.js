const countries = require('../day-5/countries');
const webTechs = require('../day-5/web_techs.js');

const mernStack = ['MongoDB', 'Express', 'React', 'Node']


// Iterate 0 to 10 using for loop
for (let i = 0; i <= 10; i++) {
console.log(i);
}

// Iterate 0 to 10 using while loop
let i = 0;
while (i <= 10) {
console.log(i);
i++;
}

// Iterate 0 to 10 using do while loop
i = 0;
do {
console.log(i);
i++;
} while (i <= 10);

// Iterate 10 to 0 using for loop
for (let i = 10; i >= 0; i--) {
console.log(i);
}

// Iterate 10 to 0 using while loop
i = 10;
while (i >= 0) {
console.log(i);
i--;
}

// Iterate 10 to 0 using do while loop
i = 10;
do {
console.log(i);
i--;
} while (i >= 0);

// Iterate 0 to n using for loop
const n = 5;
for (let i = 0; i <= n; i++) {
console.log(i);
}

// Print a pattern
let pattern = '';
for (let i = 0; i <= 6; i++) {
pattern += '#';
console.log(pattern);
}

// Print squares
for (let i = 0; i <= 10; i++) {
console.log(`${i} x ${i} = ${i * i}`);
}

// Print i, i^2, i^3
console.log('i\ti^2\ti^3');
for (let i = 0; i <= 10; i++) {
console.log(`${i}\t${i * i}\t${i * i * i}`);
}

// Print even numbers
for (let i = 0; i <= 100; i++) {
if (i % 2 === 0) {
console.log(i);
}
}

// Print odd numbers
for (let i = 0; i <= 100; i++) {
if (i % 2 !== 0) {
console.log(i);
}
}

// Print prime numbers
for (let i = 2; i <= 100; i++) {
let isPrime = true;
for (let j = 2; j <= Math.sqrt(i); j++) {
if (i % j === 0) {
isPrime = false;
break;
}
}
if (isPrime) {
console.log(i);
}
}

// Print sum of all numbers
let sum = 0;
for (let i = 0; i <= 100; i++) {
sum += i;
}
console.log(sum);

// Print sum of all evens and sum of all odds
let sumEvens = 0;
let sumOdds = 0;
for (let i = 0; i <= 100; i++) {
if (i % 2 === 0) {
sumEvens += i;
} else {
sumOdds += i;
}
}
console.log(sumEvens, sumOdds);


// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
let evensSum = 0;
let oddsSum = 0;
for(let i=0; i<=100; i++){
if(i%2 === 0){
evensSum += i;
} else {
oddsSum += i;
}
}
console.log([evensSum, oddsSum]); // Output: [2550, 2500]

//Develop a small script which generate array of 5 random numbers
let randomNumbers = [];
for(let i=0; i<5; i++){
let randomNumber = Math.floor(Math.random() * 100) + 1;
randomNumbers.push(randomNumber);
}
console.log(randomNumbers); // Output: [23, 56, 34, 91, 12]

//Develop a small script which generate array of 5 random numbers and the numbers must be unique
let uniqueNumbers = [];
while(uniqueNumbers.length < 5){
let randomNumber = Math.floor(Math.random() * 100) + 1;
if(!uniqueNumbers.includes(randomNumber)){
uniqueNumbers.push(randomNumber);
}
}
console.log(uniqueNumbers); // Output: [67, 23, 54, 12, 89]

//Develop a small script which generate a six characters random id:
let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let randomId = '';
for(let i=0; i<6; i++){
let randomIndex = Math.floor(Math.random() * characters.length);
randomId += characters[randomIndex];
}
console.log(randomId); // Output: "5j2khz"