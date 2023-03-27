// Total price of products using array iterators
const products = [
    { name: "Shirt", price: 1000 },
    { name: "Trousers", price: 2000 },
    { name: "Sneakers", price: 3000 },
    { name: "Socks", price: 500 },
    { name: "Hat", price: 800 },
    ];
    
    const totalPrice = products
    .map((product) => product.price)
    .filter((price) => price > 1000)
    .reduce((total, price) => total + price, 0);
    
    console.log(totalPrice);
    
    // Sum of price of products using reduce
    const sumOfPrice = products.reduce((total, product) => total + product.price, 0);
    
    console.log(sumOfPrice);
    
    // Categorize countries
    const countries = require('../day-5/countries.js');
    
    function categorizeCountries() {
    const patterns = ['land', 'ia', 'island', 'stan'];
    const matchedCountries = countries.filter((country) => {
    return patterns.some((pattern) => country.toLowerCase().includes(pattern));
    });
    return matchedCountries;
    }
    
    console.log(categorizeCountries());
    
    // Return an array of objects showing the letter and the number of times the letter is used to start with a country name
    function getLetterCount() {
    const letterCount = {};
    countries.forEach((country) => {
    const firstLetter = country.charAt(0).toUpperCase();
    if (letterCount[firstLetter]) {
    letterCount[firstLetter]++;
    } else {
    letterCount[firstLetter] = 1;
    }
    });
    const letterCountArray = Object.entries(letterCount).map(([letter, count]) => ({ letter, count }));
    return letterCountArray;
    }
    
    console.log(getLetterCount());
    
    // Get first ten countries
    function getFirstTenCountries() {
    return countries.slice(0, 10);
    }
    
    console.log(getFirstTenCountries());
    
    // Get last ten countries
    function getLastTenCountries() {
    return countries.slice(-10);
    }
    
    console.log(getLastTenCountries());
    
    // Find out which letter is used many times as initial for a country name
    function getMostFrequentLetter() {
    const letterCount = {};
    countries.forEach((country) => {
    const firstLetter = country.charAt(0).toUpperCase();
    if (letterCount[firstLetter]) {
    letterCount[firstLetter]++;
    } else {
    letterCount[firstLetter] = 1;
    }
    });
    const mostFrequentLetter = Object.entries(letterCount).reduce((max, [letter, count]) => {
    return count > max[1] ? [letter, count] : max;
    }, ['', 0])[0];
    return mostFrequentLetter;
    }
    
    console.log(getMostFrequentLetter());