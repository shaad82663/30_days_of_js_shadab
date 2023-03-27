// Area and perimeter of a rectangle
let length = prompt('Enter length:')
let width = prompt('Enter width:')
let area = length * width
let perimeter = 2 * (Number(length) + Number(width))
console.log(`The area of the rectangle is ${area}`)
console.log(`The perimeter of the rectangle is ${perimeter}`)

// Area and circumference of a circle
let radius = prompt('Enter radius:')
let pi = 3.14
let circleArea = pi * radius ** 2
let circumference = 2 * pi * radius
console.log(`The area of the circle is ${circleArea}`)
console.log(`The circumference of the circle is ${circumference}`)

// Slope, x-intercept and y-intercept
let x1 = 2
let y1 = 2
let x2 = 6
let y2 = 10
let slope = (y2 - y1) / (x2 - x1)
let yIntercept = y1 - slope * x1
let xIntercept = -yIntercept / slope
console.log(`Slope: ${slope}, x-intercept: ${xIntercept}, y-intercept: ${yIntercept}`)

// Comparing slopes
if (slope > length / width) {
  console.log('The slope is larger than the length/width ratio')
} else {
  console.log('The slope is smaller than the length/width ratio')
}

// Finding x value where y is 0
let a = 1
let b = 6
let c = 9
let x = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a)
console.log(`The value of x where y is 0: ${x}`)

// Calculating pay
 hours = prompt('Enter hours:')
let rate = prompt('Enter rate per hour:')
let earnings = hours * rate
console.log(`Your weekly earning is ${earnings}`)

// Comparing name lengths
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
if (firstName.length > lastName.length) {
  console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`)
} else {
  console.log(`Your last name, ${lastName} is longer than your first name, ${firstName}`)
}

// Age difference
let myAge = 250
let yourAge = 25
let ageDiff = myAge - yourAge
console.log(`I am ${ageDiff} years older than you`)

// Check driving age
let birthYear = prompt('Enter birth year:')
let age = new Date().getFullYear() - birthYear
if (age >= 18) {
  console.log(`You are ${age}. You are old enough to drive`)
} else {
  let diff = 18 - age
  console.log(`You are ${age}. You will be allowed to drive after ${diff} years.`)
}

// Seconds lived
let yearsLived = prompt('Enter number of years you live:')
let secondsLived = yearsLived * 365 * 24 * 60 * 60
console.log(`You lived ${secondsLived} seconds.`)

// Date time object
let now = new Date()
let year = now.getFullYear()
let month = now.getMonth() + 1
let day = now.getDate()
hours = now.getHours()
let minutes = now.getMinutes()
console.log(`${year}-${month}-${day} ${hours}:${minutes}`)
console.log(`${day}-${month}-${year} ${hours}:${minutes}`)