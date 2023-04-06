// Note: The result might be wrong as I did not do much effort in weight calculating 
//  but the functionality is similar as per the instruction in the project problem statement.
function calculateWeightOnPlanet(massOnEarth, planetName) {
    const massOnEarthInKg = massOnEarth;
    let g;
    let massOnPlanet;
  
    switch (planetName.toLowerCase()) {
      case 'mercury':
        g = 3.7;
        break;
      case 'venus':
        g = 8.87;
        break;
      case 'moon':
        g = 1.62;
        break;
      case 'mars':
        g = 3.71;
        break;
      case 'jupiter':
        g = 24.79;
        break;
      case 'saturn':
        g = 10.44;
        break;
      case 'uranus':
        g = 8.69;
        break;
      case 'neptune':
        g = 11.15;
        break;
      case 'pluto':
        g = 0.62;
        break;
      default:
        return 'Invalid planet name. Please select a planet from the dropdown.';
    }
  
    massOnPlanet = (massOnEarthInKg * g) / 9.81;
    const weightOnPlanetInN = massOnPlanet * g;
  
    return weightOnPlanetInN;
  }

const clearDesciption = (description, weight) => {
     description.textContent = ''
     weight.textContent = ''
}  

const planetName = document.querySelector('select')
const resultWeight = document.querySelector('.description')
const massOnEarth = document.querySelector('#mass')
const btn = document.querySelector('button')

resultWeight.style.display = 'none'

const description = document.querySelector('h3')
const weight = document.querySelector('p')
const backgroundImg = document.querySelector('img')
// console.log(backgroundImg)
const img = document.querySelector('.image')
console.log(img)
btn.addEventListener('click', (e) => {
  e.preventDefault()
  resultWeight.style.display = 'inline'
  
  clearDesciption(description, weight)
  if(!planetName.value || !massOnEarth.value || planetName.value === 'none')  {
    clearDesciption(description, weight)
    resultWeight.style.width = '50%'
    img.style.width = '0'
    description.textContent = 'Enter both mass on Earth and name of planet'
  }else{
    resultWeight.style.width = '300px'
    img.style.width = '300px'
        description.textContent = `The weight of the object on ${planetName.value}`
        description.style.color = 'red'
        backgroundImg.setAttribute('src', `./images/${planetName.value}.png`)
        const res = Number(calculateWeightOnPlanet(Number(massOnEarth.value),planetName.value)).toFixed(2)
        weight.textContent = `${res}N`
    }
})



