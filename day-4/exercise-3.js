let month = prompt("Enter a month:");
let year = prompt("Enter a year:");

// Convert month to lowercase
month = month.toLowerCase();

// Define the number of days in each month
let daysInMonth;
switch (month) {
  case "january":
  case "march":
  case "may":
  case "july":
  case "august":
  case "october":
  case "december":
    daysInMonth = 31;
    break;
  case "april":
  case "june":
  case "september":
  case "november":
    daysInMonth = 30;
    break;
  case "february":
    // Check if it's a leap year
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      daysInMonth = 29;
    } else {
      daysInMonth = 28;
    }
    break;
  default:
    console.log("Invalid month entered");
    break;
}

// Output the result
if (daysInMonth) {
  console.log(`${month.charAt(0).toUpperCase() + month.slice(1)} has ${daysInMonth} days.`);
}
