//Destructure the countries object print name, capital, population and languages of all countries

// A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores,
//  JavaScript score to jsScore and React score to reactScore variable in one line.
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]

const [name, skills, scores] = student
const [,,jsScore, reactScore] = scores   

console.log(name, skills, jsScore, reactScore)

// Write a function called convertArrayToObject which can convert the array to a structure object.
const convertArrayToObject = function(students){
    const myObjArr = []  
      for(const student of students){
        const [name, skills, scores] = student 
        myObjArr.push({name, skills, scores})
      }  
      return myObjArr
}

const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ]


console.log(convertArrayToObject(students))

