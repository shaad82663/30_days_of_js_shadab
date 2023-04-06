// console.log(countries)



const parentDiv = document.querySelector('.grid-container')
const totalCountries = document.querySelector('h4')
totalCountries.textContent = `Total Countries: ${countries.length}`
let div
for (let i = 0; i < countries.length; i++) {
    div = document.createElement('div')
    div.className = 'grid-item'
    div.textContent = countries[i]
    parentDiv.appendChild(div)
}