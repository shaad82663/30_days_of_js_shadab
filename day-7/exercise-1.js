// Declare a function fullName and it print out your full name.
function fullName() {
    console.log("Your full name");
  }
  
  // Declare a function fullName and now it takes firstName, lastName as a
//    parameter and it returns your full-name.
  function fullName(firstName, lastName) {
    return firstName + " " + lastName;
  }
  
  // Declare a function addNumbers and it takes two two parameters and it returns sum.
  function addNumbers(num1, num2) {
    return num1 + num2;
  }
  
  // An area of a rectangle is calculated as follows: area = length x width. 
//   Write a function which calculates areaOfRectangle.
  function areaOfRectangle(length, width) {
    return length * width;
  }
  
  // A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width).
//    Write a function which calculates perimeterOfRectangle.
  function perimeterOfRectangle(length, width) {
    return 2 * (length + width);
  }
  
  // A volume of a rectangular prism is calculated as follows: volume = length x width x height.
//    Write a function which calculates volumeOfRectPrism.
  function volumeOfRectPrism(length, width, height) {
    return length * width * height;
  }
  
  // Area of a circle is calculated as follows: area = π x r x r. Write a function which 
//   calculates areaOfCircle
  function areaOfCircle(radius) {
    return Math.PI * radius * radius;
  }
  
  // Circumference of a circle is calculated as follows: circumference = 2πr. Write a function
//    which calculates circumOfCircle
  function circumOfCircle(radius) {
    return 2 * Math.PI * radius;
  }
  
  // Density of a substance is calculated as follows: density= mass/volume. Write a function 
//   which calculates density.
  function density(mass, volume) {
    return mass / volume;
  }
  
  // Speed is calculated by dividing the total distance covered by a moving object divided by 
//   the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
  function speed(distance, time) {
    return distance / time;
  }
  
  // Weight of a substance is calculated as follows: weight = mass x gravity. Write a 
//   function which calculates weight.
  function weight(mass, gravity) {
    return mass * gravity;
  }
  
  // Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. 
//   Write a function which convert oC to oF convertCelsiusToFahrenheit.
  function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }

