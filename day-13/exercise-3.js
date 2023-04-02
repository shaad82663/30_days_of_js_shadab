// Check the speed difference among the following loops: while, for, for of, forEach
const range = 1000000
console.time('regular for loop')
for(let i =0; i<range; i++){}
console.timeEnd('regular for loop')

let j = range
console.time('while loop')
while(j--){}
console.timeEnd('while loop')

const items = []
for(let i=0; i<range; i++) items.push(1)

console.time('for of loop')
for(const item of items){}
console.timeEnd('for of loop')

console.time('for each loop')
items.forEach(element => {})
console.timeEnd('for each loop')