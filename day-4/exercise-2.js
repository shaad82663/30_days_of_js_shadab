// Solution to question 1: Grades based on score
let score = prompt("Enter your score:");

if (score >= 80 && score <= 100) {
  console.log("Your grade is A");
} else if (score >= 70 && score <= 89) {
  console.log("Your grade is B");
} else if (score >= 60 && score <= 69) {
  console.log("Your grade is C");
} else if (score >= 50 && score <= 59) {
  console.log("Your grade is D");
} else if (score >= 0 && score <= 49) {
  console.log("Your grade is F");
} else {
  console.log("Invalid score entered");
}

// Solution to question 2: Season based on month
let month = prompt("Enter the month:");
month = month.toLowerCase()

if (month === "september" || month === "october" || month === "november") {
  console.log("The season is Autumn");
} else if (month === "december" || month === "january" || month === "february") {
  console.log("The season is Winter");
} else if (month === "march" || month === "april" || month === "may") {
  console.log("The season is Spring");
} else if (month === "june" || month === "july" || month === "august") {
  console.log("The season is Summer");
} else {
  console.log("Invalid month entered");
}

// Solution to question 3: Weekend or working day
let day = prompt("What is the day today?");

// Convert the input to lowercase
day = day.toLowerCase();

if (day === "saturday" || day === "sunday") {
  console.log(`${day} is a weekend.`);
} else {
  console.log(`${day} is a working day.`);
}
