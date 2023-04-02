// Create a closure which has one inner function

const getStudent = function(){  
 
    const getName = function(){
      return 'Shaad'
    }
    const getRollNumber = function(){
        return '1907370130034'
      }
      const getBranch = function(){
        return 'IT'
      }
     return {name : getName(), rollNumber :getRollNumber(), branch : getBranch() }
 }
 
 console.log(getStudent())