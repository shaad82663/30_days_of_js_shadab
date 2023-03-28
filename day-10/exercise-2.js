//Find a union b
let a = [1, 2, 3, 4, 5]
let  b = [3, 4, 5, 6]
let  c = [...a, ...b]

let A = new Set(a)
let  B = new Set(b)
let  C = new Set(c)

console.log(C)


//Find a intersection b

 a = [1, 2, 3, 4, 5]
 b = [3, 4, 5, 6]

 A = new Set(a)
 B = new Set(b)

 c = a.filter((num) => B.has(num))
 C = new Set(c)

console.log(C)

//Find a with b

 a = [1, 2, 3, 4, 5]
 b = [3, 4, 5, 6]

 A = new Set(a)
 B = new Set(b)

 c = a.filter((num) => !B.has(num))
 C = new Set(c)

console.log(C)