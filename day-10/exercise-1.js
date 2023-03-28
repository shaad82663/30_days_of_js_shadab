// Create an empty set
const mySet = new Set();

// Create a set containing 0 to 10 using loop
for (let i = 0; i <= 10; i++) {
  mySet.add(i);
}

// Remove an element from a set
mySet.delete(5);

// Clear a set
mySet.clear();

// Create a set of 5 string elements from array
const myArray = ['apple', 'banana', 'orange', 'grape', 'peach'];
const myStringSet = new Set(myArray.slice(0, 5));

// Create a map of countries and number of characters of a country
const countries = ['USA', 'Canada', 'Mexico', 'France'];
const countryMap = new Map();
for (let i = 0; i < countries.length; i++) {
  countryMap.set(countries[i], countries[i].length);
}
