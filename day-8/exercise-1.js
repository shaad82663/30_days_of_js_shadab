// Create an empty object called "dog"
const dog = {};

// Add name, legs, color, age and bark properties to the dog object
dog.name = 'Fido';
dog.legs = 4;
dog.color = 'brown';
dog.age = 2;
dog.bark = function() {
  return 'woof woof';
}

// Get name, legs, color, age and bark value from the dog object
console.log(dog.name);   // 'Fido'
console.log(dog.legs);   // 4
console.log(dog.color);  // 'brown'
console.log(dog.age);    // 2
console.log(dog.bark()); // 'woof woof'

// Set new properties for the dog object: breed and getDogInfo method
dog.breed = 'Labrador';
dog.getDogInfo = function() {
  return `${this.name} is a ${this.breed} with ${this.legs} legs and ${this.color} fur. ${this.name} is ${this.age} years old and likes to ${this.bark()}.`;
}

// Call the getDogInfo method to get information about the dog
console.log(dog.getDogInfo());
