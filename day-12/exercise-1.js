// Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month,
//  10000 euro annual bonus, 5500 euro online courses per month.’

const txt = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month'

const pattern = /\d{4,5}/g
const incomes = txt.match(pattern)
const totalIncome = incomes.reduce((acc, el) => (+acc) + (+el))

console.log(`Total income : ${totalIncome}`)

// The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8
//  in the positive direction. Extract these numbers and find the distance between the two furthest particles.
const points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
points.sort( (a,b) => a-b)
const maxDist = (+points[points.length-1]) + (+points[0].match(/\d/g)[0])
console.log(`Distance between the two furthest particles: ${maxDist}`)


function is_valid_variable(str) {
    // Check if the string starts with a letter, underscore, or dollar sign
    if (!str.match(/^[a-zA-Z_$]/)) {
      return false;
    }
  
    // Check if the string contains only letters, digits, underscores, or dollar signs
    if (!str.match(/^[\w$_]*$/)) {
      return false;
    }
  
    // Check if the string is a reserved word in JavaScript
    if (["break", "case", "catch", "class", "const", "continue", "debugger", "default", "delete", "do", "else", "enum", "export", "extends", "false", "finally", "for", "function", "if", "implements", "import", "in", "instanceof", "interface", "let", "new", "null", "package", "private", "protected", "public", "return", "super", "switch", "static", "this", "throw", "try", "true", "typeof", "var", "void", "while", "with", "yield"].includes(str)) {
      return false;
    }
  
    // The string is a valid variable name
    return true;
  }
  
  console.log(is_valid_variable('first_name'));    // true
  console.log(is_valid_variable('first-name'));    // false
  console.log(is_valid_variable('1first_name'));   // false
  console.log(is_valid_variable('firstname'));     // true
  console.log(is_valid_variable('class'));     // true
  