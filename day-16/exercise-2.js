const student = {
    firstName:'Asabeneh',
    lastName:'Yetayehe',
    age:250,
    isMarried:true,
    skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python']
  };
  
  const studentJSON = JSON.stringify(student, ['firstName', 'lastName', 'skills']);
  console.log(studentJSON);
  