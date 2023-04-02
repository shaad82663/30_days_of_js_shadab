const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]

console.group('Countries Array')
console.table(countries)
console.groupEnd()


const countryObject = Object.fromEntries(countries)
console.group('Countries Object')
console.table(countryObject)   

console.groupEnd()
  