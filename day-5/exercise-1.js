const countries = [  'Albania',  'Bolivia',  'Canada',  'Denmark',  'Ethiopia',  'Finland',  'Germany',  'Hungary',  'Ireland',  'Japan',  'Kenya'];

const webTechs = [  'HTML',  'CSS',  'JavaScript',  'React',  'Redux',  'Node',  'MongoDB'];

// Declare an empty array
const emptyArr = [];

// Declare an array with more than 5 number of elements
const arrWithMoreThan5Elements = ['apple', 'banana', 'cherry', 'dates', 'eggplant', 'fig', 'grape'];

// Find the length of your array
console.log(arrWithMoreThan5Elements.length);

// Get the first item, the middle item and the last item of the array
const firstItem = arrWithMoreThan5Elements[0];
const middleItem = arrWithMoreThan5Elements[Math.floor(arrWithMoreThan5Elements.length / 2)];
const lastItem = arrWithMoreThan5Elements[arrWithMoreThan5Elements.length - 1];
console.log(firstItem, middleItem, lastItem);

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = ['Hello', 42, true, null, {name: 'John'}, ['a', 'b', 'c']];
console.log(mixedDataTypes.length);

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// Print the array using console.log()
console.log(itCompanies);

// Print the number of companies in the array
console.log(itCompanies.length);

// Print the first company, middle and last company
const firstCompany = itCompanies[0];
const middleCompany = itCompanies[Math.floor(itCompanies.length / 2)];
const lastCompany = itCompanies[itCompanies.length - 1];
console.log(firstCompany, middleCompany, lastCompany);

// Print out each company
itCompanies.forEach(company => console.log(company));

// Change each company name to uppercase one by one and print them out
itCompanies.forEach(company => console.log(company.toUpperCase()));

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.
console.log(itCompanies.join(', ') + ' are big IT companies.');

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
const companyToFind = 'Google';
if (itCompanies.includes(companyToFind)) {
  console.log(companyToFind);
} else {
  console.log('Company not found');
}

// Filter out companies which have more than one 'o' without the filter method
const filteredCompanies = [];
for (let i = 0; i < itCompanies.length; i++) {
  if ((itCompanies[i].match(/o/g) || []).length === 1) {
    filteredCompanies.push(itCompanies[i]);
  }
}
console.log(filteredCompanies);

// Sort the array using sort() method
console.log(itCompanies.sort());

// Reverse the array using reverse() method
console.log(itCompanies.reverse());

// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3));

// Slice out the last 3 companies from the array
itCompanies.slice(-3);

// Slice out the middle IT company or companies from the array
const middleIndex = Math.floor(itCompanies.length / 2);
const numToRemove = itCompanies.length % 2 === 0 ? 2 : 1;
console.log(itCompanies.splice(middleIndex, numToRemove));

// Remove the first IT company from the array
itCompanies.shift();
console.log(itCompanies);

// Remove the middle IT company or companies from the array
const middleIndex2 = Math.floor(itCompanies.length / 2);
const numToRemove2 = itCompanies.length % 2 === 0 ? 2 : 1;
itCompanies.splice(middleIndex2, numToRemove2);
console.log(itCompanies);

// Remove the last IT company from the array
itCompanies.pop();
console.log(itCompanies);

// Remove all IT companies
itCompanies.length = 0;
console.log(itCompanies);