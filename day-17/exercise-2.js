const student = {
    fName : 'Mohd',
    lName : 'Shadab',
    age : 20,
    skills : ['html','CSS','JS'],
    country : 'IND',
    encrolled_id : 190737334
}

JSON.stringify(student)

localStorage.setItem('Student', student)