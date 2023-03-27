const countries = require('../day-5/countries');
const webTechs = require('../day-5/web_techs.js');


//Develop a small script which generate any number of characters random id

function generateID(length){
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWEXZabcdefghijklmnopqrstuvwxyz123456789'
    let res = '';
    for( let i=0; i<length; i++){
        res += str.charAt(Math.floor(Math.random()*str.length))
    }
    return res
}

console.log(generateID(5))
console.log(generateID(16))

function generateRandomHex() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

const hexCode =  generateRandomHex()
console.log(hexCode)

// Generate random RGB color function
function generateRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  }
  
  // New array of countries with uppercase names
  const countriesUppercase = countries.map(country => country.toUpperCase());
  
  // New array of country name lengths
  const countriesLengths = countries.map(country => country.length);
  
  // New array of arrays with country name, abbreviation, and length
  const countriesArray = countries.map(country => {
    const abbreviation = country.slice(0, 3).toUpperCase();
    return [country, abbreviation, country.length];
  });
  
  // New array of countries containing the word 'land'
  const landCountries = countries.filter(country => country.includes('land'));
  
  // New array of countries ending with 'ia'
  const iaCountries = countries.filter(country => country.endsWith('ia'));
  
  // Country with the biggest number of characters
  const biggestCountry = countries.reduce((a, b) => (a.length > b.length ? a : b));
  
  // Array of countries containing only 5 characters
  const fiveLetterCountries = countries.filter(country => country.length === 5);
  
  // Array of arrays for webTechs array with word and length
  const webTechsArray = webTechs.map(tech => [tech, tech.length]);
  
  // MERN stack acronym
  const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
  const mernAcronym = mernStack.reduce((a, b) => a + b[0], '');
  
  // Reverse fruit array using loop
  const fruit = ['banana', 'orange', 'mango', 'lemon'];
  for (let i = fruit.length - 1; i >= 0; i--) {
    console.log(fruit[i]);
  }
  
  // Full stack array of arrays
  const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ];
  
  // Print full stack array items
  for (let i = 0; i < fullStack.length; i++) {
    for (let j = 0; j < fullStack[i].length; j++) {
      console.log(fullStack[i][j].toUpperCase());
    }
  }
