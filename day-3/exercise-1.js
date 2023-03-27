// Declare variables and assign values to them
var firstName = 'John';
var lastName = 'Doe';
var country = 'United States';
var city = 'New York';
var age = 30;
var isMarried = false;
var year = 2023;

// Use typeof operator to check different data types
console.log(typeof firstName); // string
console.log(typeof age); // number
console.log(typeof isMarried); // boolean

// Check if type of '10' is equal to 10
console.log(typeof '10' === typeof 10); // false 

// Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') === 10 );   //false

// Truthy values
console.log(Boolean('hello')); // true
console.log(Boolean(42)); // true
console.log(Boolean({})); // true 

// Falsy values
console.log(Boolean('')); // false
console.log(Boolean(0)); // false
console.log(Boolean(null)); // false


// create a new Date object with the current date and time
var now = new Date();

// get the year today (e.g. 2023)
 year = now.getFullYear();

// get the month today as a number (0-11, where 0 is January)
var month = now.getMonth();

// get the date today (1-31)
var date = now.getDate();

// get the day today as a number (0-6, where 0 is Sunday)
var day = now.getDay();

// get the hours now (0-23)
var hours = now.getHours();

// get the minutes now (0-59)
var minutes = now.getMinutes();

// get the number of seconds elapsed from Jan 1, 1970 to now
var secondsSinceEpoch = Math.floor(now.getTime() / 1000);

// log the results to the console
console.log(`Year: ${year}`);
console.log(`Month: ${month}`);
console.log(`Date: ${date}`);
console.log(`Day: ${day}`);
console.log(`Hours: ${hours}`);
console.log(`Minutes: ${minutes}`);
console.log(`Seconds since epoch: ${secondsSinceEpoch}`);


