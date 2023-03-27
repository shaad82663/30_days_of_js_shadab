const countries = require('./countries');
const webTechs = require('./web_techs.js');

console.log(countries); 
console.log(webTechs); 


// Remove all punctuations, convert to array and count number of words
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let words = text.replace(/[^\w\s]/g, '').split(' ');
console.log(words); // Output: ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
console.log(words.length); // Output: 13

// Manipulate the shopping cart array
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
if (!shoppingCart.includes('Meat')) {
  shoppingCart.unshift('Meat');
}
if (!shoppingCart.includes('Sugar')) {
  shoppingCart.push('Sugar');
}
if (shoppingCart.includes('Honey')) {
  const index = shoppingCart.indexOf('Honey');
  shoppingCart.splice(index, 1);
}
const teaIndex = shoppingCart.indexOf('Tea');
if (teaIndex !== -1) {
  shoppingCart[teaIndex] = 'Green Tea';
}
console.log(shoppingCart); // Output: ["Meat", "Milk", "Coffee", "Green Tea", "Sugar"]

// Check if Ethiopia exists in the countries array
const ethiopiaIndex = countries.indexOf('Ethiopia');
if (ethiopiaIndex !== -1) {
  console.log('ETHIOPIA');
} else {
  countries.push('Ethiopia');
}

// Check if Sass exists in the webTechs array
if (webTechs.includes('Sass')) {
  console.log('Sass is a CSS preprocess');
} else {
  webTechs.push('Sass');
  console.log(webTechs);
}


