// Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 Days Of JavaScript';

// Print the string on the browser console using console.log()
console.log(challenge);

// Print the length of the string on the browser console using console.log()
console.log(challenge.length);

// Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase());

// Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase());

// Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substr(3)); // Output: Days Of JavaScript
console.log(challenge.substring(3)); // Output: Days Of JavaScript

// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.slice(3)); // Output: Days Of JavaScript

// Check if the string contains a word Script using includes() method
console.log(challenge.includes('Script')); // Output: true

// Split the string into an array using split() method
console.log(challenge.split()); // Output: ['30 Days Of JavaScript']

// Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(' ')); // Output: ['30', 'Days', 'Of', 'JavaScript']

// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(',')); // Output: ['Facebook', ' Google', ' Microsoft', ' Apple', ' IBM', ' Oracle', ' Amazon']

// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace('JavaScript', 'Python')); // Output: 30 Days Of Python

// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15)); // Output: J

// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt(11)); // Output: 83

// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf('a')); // Output: 4

// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf('a')); // Output: 16

// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because')); // Output: 31

// Use lastIndexOf to find the position of the last occurrence of the word 'because' in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.lastIndexOf('because')); // Output: 47

// Use search to find the position of the first occurrence of the word 'because' in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.search('because')); // Output: 31

// Using trim() to remove trailing whitespace
const str1 = ' 30 Days Of JavaScript     ';
console.log(str1.trim()); // Output: '30 Days Of JavaScript'

// Using startsWith() method
console.log(str1.startsWith('30')); // Output: true

// Using endsWith() method
console.log(str1.endsWith('Script')); // Output: true

// Using match() method to find all the a's
console.log(str1.match(/a/g)); // Output: ['a', 'a']

// Using concat() method to merge two strings
const str2 = 'JavaScript';
console.log('30 Days of '.concat(str2)); // Output: '30 Days of JavaScript'

// Using repeat() method to print string multiple times
console.log(str1.repeat(2)); // Output: ' 30 Days Of JavaScript 30 Days Of JavaScript '