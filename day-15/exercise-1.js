class Animal {
    constructor(name, age, color, legs) {
      this.name = name;
      this.age = age;
      this.color = color;
      this.legs = legs;
    }
  
    getInfo() {
      console.log('It is an animal')
      console.log(`Name: ${this.name}, Age: ${this.age}, Color: ${this.color}, Legs: ${this.legs}`);
    }
  }

  class Dog extends Animal {
    constructor(name, age, color, legs, breed) {
      super(name, age, color, legs);
      this.breed = breed;
    }

    bark() {
      console.log('Woof!');
    }
  }
  
  class Cat extends Animal {
    constructor(name, age, color, legs, breed) {
      super(name, age, color, legs);
      this.breed = breed;
    }

    meow() {
      console.log('Meow!');
    }
  }
  const lion = new Cat('Simba', 4, 'Golden', 4);
  lion.getInfo(); // Name: Simba, Age: 4, Color: Golden, Legs: 4

  const dog = new Dog('Max', 2, 'Brown', 4, 'Labrador');
  dog.getInfo(); // Name: Max, Age: 2, Color: Brown, Legs: 4
  dog.bark(); // Woof!

