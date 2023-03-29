const {constants, countries, rectangle, users} = require('./data');

// Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
const [pi, gravity, humanBodyTemp, waterBoilingTemp] = constants
console.log(pi, gravity, humanBodyTemp, waterBoilingTemp)

// Destructure and assign the elements of countries array to fin, est, sw, den, nor
const [fin, est, sw, den, nor] = countries
console.log(fin, est, sw, den, nor)

// Destructure the rectangle object by its properties or keys.
const {width, height, area, perimeter} = rectangle
console.log(width, height, area, perimeter)