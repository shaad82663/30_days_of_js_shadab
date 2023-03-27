// 1. Get user input using prompt(“Enter your age:”). If user is 18 or older, give feedback: 
// 'You are old enough to drive'. But if not 18, give another feedback stating to wait for the
//  number of years they need to turn 18.

let age = prompt("Enter your age:");

if (age >= 18) {
  console.log("You are old enough to drive.");
} else {
  console.log(`You are left with ${18 - age} years to drive.`);
}

// 2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log 
// the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get 
// the age as input.

let myAge = 25;
let yourAge = prompt("Enter your age:");

if (myAge > yourAge) {
  console.log("I am older than you.");
} else if (myAge < yourAge) {
  console.log("You are older than me.");
} else {
  console.log("We are the same age.");
}

// 3. If a is greater than b return 'a is greater than b', else 'a is less than b'. Try to 
// implement it in two ways: using if else and ternary operator.

let a = 4;
let b = 3;

// Using if else
if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is less than b");
}

// Using ternary operator
console.log(a > b ? "a is greater than b" : "a is less than b");

// 4. Even numbers are divisible by 2 and the remainder is zero. How do you check if a
//  number is even or not using JavaScript?

let num = prompt("Enter a number:");

if (num % 2 === 0) {
  console.log(`${num} is an even number`);
} else {
  console.log(`${num} is an odd number`);
}
