const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python'];
let age = 250;
let isMarried = true;
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python']
};

const skillsJSON = JSON.stringify(skills);
const ageJSON = JSON.stringify(age);
const isMarriedJSON = JSON.stringify(isMarried);
const studentJSON = JSON.stringify(student);

console.log(skillsJSON);
console.log(ageJSON);
console.log(isMarriedJSON);
console.log(studentJSON);
