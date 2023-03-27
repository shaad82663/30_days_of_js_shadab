const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

// forEach
countries.forEach((country) => {
  console.log(country);
});

names.forEach((name) => {
  console.log(name);
});

numbers.forEach((number) => {
  console.log(number);
});

// map
const countriesUpperCase = countries.map((country) =>
  country.toUpperCase()
);
console.log(countriesUpperCase);

const countriesLength = countries.map((country) => country.length);
console.log(countriesLength);

const numbersSquare = numbers.map((number) => number ** 2);
console.log(numbersSquare);

const namesUpperCase = names.map((name) => name.toUpperCase());
console.log(namesUpperCase);

const productPrices = products.map((product) => product.price);
console.log(productPrices);

// filter
const countriesWithoutLand = countries.filter(
  (country) => !country.includes('land')
);
console.log(countriesWithoutLand);

const countriesWithSixChar = countries.filter(
  (country) => country.length === 6
);
console.log(countriesWithSixChar);

const countriesWithSixCharOrMore = countries.filter(
  (country) => country.length >= 6
);
console.log(countriesWithSixCharOrMore);

const countriesWithoutE = countries.filter(
  (country) => !country.startsWith('E')
);
console.log(countriesWithoutE);

const productsWithPrice = products.filter(
  (product) => typeof product.price === 'number'
);
console.log(productsWithPrice);

// getStringLists function
const getStringLists = (arr) => arr.filter((item) => typeof item === 'string');
console.log(getStringLists([1, 'hello', true, 'world']));

// reduce
const sumOfNumbers = numbers.reduce((acc, cur) => acc + cur);
console.log(sumOfNumbers);

const allCountries = countries.reduce((acc, cur, index, arr) => {
  if (index === arr.length - 1) {
    return `${acc}and ${cur} are north European countries`;
  }
  return `${acc}${cur}, `;
}, '');
console.log(allCountries);

// some and every
const isNameLongerThanSeven = names.some((name) => name.length > 7);
console.log(isNameLongerThanSeven);

const isAllCountriesContainLand = countries.every((country) =>
  country.includes('land')
);
console.log(isAllCountriesContainLand);

// find and findIndex
const firstSixLetterCountry = countries.find((country) => country.length === 6);
console.log(firstSixLetterCountry);

const positionOfFirstSixLetterCountry = countries.findIndex(
  (country) => country.length === 6
);
console.log(positionOfFirstSixLetterCountry);

const positionOfNorway = countries.findIndex((country) => country === 'Norway');
console.log(positionOfNorway);

const positionOfRussia = countries.findIndex((country) => country === 'Russia');
console.log(positionOfRussia);
