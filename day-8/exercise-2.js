const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
  

// person who has many skills in the users object

let maxSkills = 0;
let personWithMaxSkills = '';

for (const person in users) {
  if (users[person].skills.length > maxSkills) {
    maxSkills = users[person].skills.length;
    personWithMaxSkills = person;
  }
}

console.log(`${personWithMaxSkills} has the most skills with ${maxSkills} skills.`);

// To count logged in users and users having greater than or equal to 50 points
let loggedInUsers = 0;
let usersWith50PointsOrMore = 0;

for (const person in users) {
  if (users[person].isLoggedIn) {
    loggedInUsers++;
  }

  if (users[person].points >= 50) {
    usersWith50PointsOrMore++;
  }
}

console.log(`There are ${loggedInUsers} logged in users.`);
console.log(`There are ${usersWith50PointsOrMore} users with 50 points or more.`);


// To find people who are MERN stack developers, we can again loop through the object 
// and check if a person has all four skills - MongoDB, Express, React, and Node.
for (const person in users) {
    const skills = users[person].skills;
    if (
      skills.includes('MongoDB') &&
      skills.includes('Express') &&
      skills.includes('React') &&
      skills.includes('Node')
    ) {
      console.log(`${person} is a MERN stack developer.`);
    }
  }

//   To set your name in the users object without modifying the original users object
const updatedUsers = { ...users, YourName: { email: 'yourname@yourname.com', skills: ['HTML', 'CSS', 'JavaScript'], age: 25, isLoggedIn: false, points: 0 } };
console.log(updatedUsers);

// To get all keys or properties of the users object
const keys = Object.keys(users);
console.log(keys);

// To get all values of the users object
const values = Object.values(users);
console.log(values);

// To print a country name, capital, population, and languages using the countries object
const countries = {
    Afghanistan: {
      capital: 'Kabul',
      population: 27657145,
      languages: ['Pashto', 'Uzbek', 'Turkmen']
    },
    Armenia: {
      capital: 'Yerevan',
      population: 2994400,
      languages: ['Armenian', 'Russian']
    },
    Australia: {
      capital: 'Canberra',
      population: 24117360,
      languages: ['English']
    }
  };
  
  for (const country in countries) {
    console.log(`Country: ${country}`);
    console.log(`Capital: ${countries[country].capital}`);
    console.log(`Population: ${countries[country].population}`);
    console.log(`Languages: ${countries[country].languages.join(', ')}`);
    console.log('------------------------');
  }