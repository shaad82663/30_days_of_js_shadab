const countries = require('./countries');

// Sort the array and find the min and max age
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort((a, b) => a - b);
const minAge = ages[0];
const maxAge = ages[ages.length - 1];
console.log("Sorted ages:", ages);
console.log("Minimum age:", minAge);
console.log("Maximum age:", maxAge);

// Find the median age (one middle item or two middle items divided by two)
let middleIndex = Math.floor(ages.length / 2);
const medianAge =
  ages.length % 2 === 0
    ? (ages[middleIndex] + ages[middleIndex - 1]) / 2
    : ages[middleIndex];
console.log("Median age:", medianAge);

// Find the average age (all items divided by the number of items)
const sumAges = ages.reduce((acc, age) => acc + age, 0);
const averageAge = sumAges / ages.length;
console.log("Average age:", averageAge);

//Range
const ageRange = maxAge - minAge;
console.log("Age range:", ageRange);

// Compare the value of (min - average) and (max - average), use abs() method
const diffMinAvg = Math.abs(minAge - averageAge);
const diffMaxAvg = Math.abs(maxAge - averageAge);
console.log("Absolute difference between min and average age:", diffMinAvg);
console.log("Absolute difference between max and average age:", diffMaxAvg);

// Slice the first ten countries from the countries array
const firstTenCountries = countries.slice(0, 10);
console.log("First ten countries:", firstTenCountries);

// Find the middle country(ies) in the countries array
middleIndex = Math.floor(countries.length / 2);
const middleCountries =
  countries.length % 2 === 0
    ? [countries[middleIndex - 1], countries[middleIndex]]
    : [countries[middleIndex]];
console.log("Middle country(ies):", middleCountries);

// Divide the countries array into two equal arrays if it is even.
//  If countries array is not even , one more country for the first half.
const half = Math.ceil(countries.length / 2)
const firstHalf = countries.slice(0, half)
const secondHalf = countries.slice(half)

console.log(firstHalf)
console.log(secondHalf)