const {users} = require('./data');

let personWithLessThanTwoSkills = []

//Iterate through the users array and get all the keys of the object using destructuring
for(const user of users){
    const {name, scores, skills, age} = user
    if(skills.length < 2) personWithLessThanTwoSkills.push(user.name)
    console.log(name, scores, skills, age)
}

//Find the persons who have less than two skills
console.log('Persons with less than two skills is/are as follow')
console.log(personWithLessThanTwoSkills)