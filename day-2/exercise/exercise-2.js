let str1 = "The quote \'There is no exercise better for the heart than reaching down and lifting people up.\'by John Holmes teaches us to help one another."
// console.log(str1)

let str2 = "\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\""
// console.log(str2)

// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let a = '10'
let b = 10
if(a === b){
    console.log(`${a} is equal to ${b}`)
}else{
    console.log(`${a} is NOT equal to ${b}`)
    a = +a
    console.log('Now made it equal.')
} 

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

a = parseFloat("9.8")
if(a === 10){
    console.log(`${a} is equal to %d`, 10)
}else{
    console.log(`${a} is NOT equal to %d`, 10)
    a = parseInt(a) + 1
    console.log('Now made it equal. a = %d', a)
} 

// Check if 'on' is found in both python and jargon
const python = 'python';
const jargon = 'jargon';

if (python.includes('on') && jargon.includes('on')) {
  console.log('The substring "on" was found in both python and jargon.');
} else {
  console.log('The substring "on" was not found in both python and jargon.');
}

// Check if jargon is in the sentence.
const sentence = 'I hope this course is not full of jargon.';
if (sentence.includes('jargon')) {
  console.log('The word "jargon" was found in the sentence.');
} else {
  console.log('The word "jargon" was not found in the sentence.');
}

// Generate a random number between 0 and 100 inclusively.
const random1 = Math.floor(Math.random() * 101);
console.log('Random number between 0 and 100 inclusively: ', random1);

// Generate a random number between 50 and 100 inclusively.
const random2 = Math.floor(Math.random() * 51) + 50;
console.log('Random number between 50 and 100 inclusively: ', random2);

// Generate a random number between 0 and 255 inclusively.
const random3 = Math.floor(Math.random() * 256);
console.log('Random number between 0 and 255 inclusively: ', random3);

// Access the 'JavaScript' string characters using a random number.
const js = 'JavaScript';
const randomIndex = Math.floor(Math.random() * js.length);
console.log(`Random index: ${randomIndex}, character: ${js[randomIndex]}`);

// Use console.log() and escape characters to print the following pattern.
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125');

// Use substr to slice out the phrase because because because from the following sentence:
const sentence2 = 'You cannot end a sentence with because because because is a conjunction';
const phrase = sentence2.substr(31, 23);
console.log(phrase)