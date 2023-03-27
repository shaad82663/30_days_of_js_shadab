// Copy countries array
const countries = require('../day-5/countries');
// Create a copy of the countries array without modifying the original
const copiedCountries = [...countries];

// Sort the copied array
const sortedCountries = copiedCountries.sort();

// Sort the webTechs array
const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'];
const sortedWebTechs = webTechs.sort();

// Sort the mernStack array
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
const sortedMernStack = mernStack.sort();

// Extract all the countries containing the word 'land'
const landCountries = sortedCountries.filter(country => country.includes('land'))
console.log(landCountries)

// Find the country containing the highest number of characters
const longestCountry = countries.reduce((a, b) => (b.length > a.length ? b : a));
console.log(longestCountry)

// Extract all the countries containing only four characters
const countriesWithFourChars = countries.filter(country => country.length === 4);
console.log(countriesWithFourChars)

// Extract all the countries containing two or more words
const countriesWithMultipleWords = countries.filter(country => country.includes(' '));
console.log(countriesWithMultipleWords)

// Reverse the countries array and capitalize each country
const reversedAndCapitalizedCountries = countries.map(country => country.toUpperCase()).reverse();
console.log(reversedAndCapitalizedCountries)