//selecting html elements for DOM manipulation
const nameBtn = document.querySelector('.name-btn')
const capitalBtn = document.querySelector('.capital-btn')
const populationBtn = document.querySelector('.population-btn')
const searchBtn = document.querySelector('#search-button')
const searchBar = document.querySelector('input')
const searchResultCount = document.querySelector('#search-result')
const resultContainer = document.querySelector('.result-container')
const subtitle = document.querySelector('.subtitle')
subtitle.textContent = `We have total ${countries.length} countries`


var searchResult = []
var searchFlag = 0 // Search flag to determine if the search is 'start with' -> (1) or 'any word' -> (2) 
var searchedWord = ''
var graphData = [] // for drawing bar graph
var order = 0 // possible values : asc=0 or desc=1. Default = asc

//Variables for changing direction of arrow on clicking the button
var nameArrow = 0
var capitalArrow = 0
var populationArrow = 0
const arrowUpDownIcons = ['&#8595', '&#8593']


const searchCountries = (keyword, flag) => {
   const result = []
   for(const country of countries){
      var {name, capital, population, languages, flag} = country
      name = name == undefined ? '' : name
      capital = capital == undefined ? '' : capital
      languages = languages  == undefined ? [] : languages
      const searchingStr = `${name} ${capital} ${languages.join(", ")}`
      if(searchingStr.toUpperCase().indexOf(keyword) !== -1){
         result.push({name, capital, population, languages, flag})
      } 
   }
    return result
}



const clearScreen = () => {
   // searchBar.value = ''
   searchResultCount.innerHTML = ''
   resultContainer.replaceChildren('')
} 

const displayCountries = (search, searchResult, flag=0) => {
   searchResultCount.textContent = `${searchResult.length} countries satified the search criteria`
   switch(flag){
      case 0 : if(nameArrow === 1) searchResult.sort((a,b) => a.name && a.name.localeCompare(b.name))// sort in ascending order
               else searchResult.sort((a,b) => b.name && b.name.localeCompare(a.name)) // // sort in descending order
               break
      case 1 : if(capitalArrow === 1) searchResult.sort((a,b) => a.capital && a.capital.localeCompare(b.capital))// sort in ascending order
               else searchResult.sort((a,b) => b.capital && b.capital.localeCompare(a.capital))// sort in descending order
               break
      case 2:  if(populationArrow === 1) searchResult.sort((a,b) => a.population - b.population)// sort in ascending order
               else searchResult.sort((a,b) => b.population - a.population)// sort in descending order
                break
    }

   const resultElements = []
   for(const {name,capital, population, languages, flag} of searchResult){
      const resultItem = document.createElement('div');
      resultItem.className = 'result-item';
      
      // Child element for the image
      const imgEl = document.createElement('div');
      imgEl.classList.add('img-div')
      imgEl.style.backgroundImage = `url(${flag})`
      imgEl.style.backgroundSize = 'cover'; 
      resultItem.appendChild(imgEl);

      //Child element for country name
      const countryNameEl = document.createElement('div');
      countryNameEl.textContent = name;
      resultItem.appendChild(countryNameEl); 

      // Child element for capital
      const capitalEl = document.createElement('div');
      capitalEl.textContent = `Capital: ${capital}`;
      resultItem.appendChild(capitalEl);
      
      //child element for languages
      const languagesString = languages.join(", ")
      // console.log('lang ',languagesSting)
      const languagesEl = document.createElement('div');
      languagesEl.textContent = `Languages: ${languagesString}`;
      resultItem.appendChild(languagesEl);  

      //child element for population
      const populationEl = document.createElement('div');
      populationEl.textContent = `Population: ${population}`;
      resultItem.appendChild(populationEl);      

      resultElements.push(resultItem);
      
   }
   resultContainer.replaceChildren(...resultElements)
}

const focusBtn = (addClassBtn, removeClassBtn_1, removeClassBtn_2, currArrowDirection) => {
   //Changing Colours of buttons on focusing
   addClassBtn.classList.add('btn-focus')
   removeClassBtn_1.classList.remove('btn-focus')
   removeClassBtn_2.classList.remove('btn-focus')

   //Changing direction of arrows on clickcing 
   const btnText = addClassBtn.textContent
   var dex = btnText.indexOf(' ')
   if(dex == -1)  dex = btnText.length + 1
   addClassBtn.innerHTML =  addClassBtn.innerHTML.substring(0, dex) + ' '+ arrowUpDownIcons[currArrowDirection]
   if(removeClassBtn_1.textContent.indexOf(' ') !== -1) removeClassBtn_1.textContent = removeClassBtn_1.textContent.substring(0, removeClassBtn_1.textContent.indexOf(' '))
   if(removeClassBtn_2.textContent.indexOf(' ') !== -1) removeClassBtn_2.textContent = removeClassBtn_2.textContent.substring(0, removeClassBtn_2.textContent.indexOf(' '))

   //resetting the default values of arrows of  non-focusing buttons
   capitalArrow = 0
   nameArrow=0
   populationArrow = 0

   return 1 - currArrowDirection// Returning changed direction of arrow
}

//Event Listiners
nameBtn.addEventListener('click', () => {
   clearScreen()//Clearing earlier rendered chidren for rendering modified elements
   searchFlag = 0//setting flag = 0 for sort search by name
   nameArrow = focusBtn(nameBtn, capitalBtn, populationBtn, nameArrow) // Changing name arrow and background of button on clicking
   displayCountries(searchedWord, searchResult, searchFlag)//Render result on screen
})

capitalBtn.addEventListener('click', () => {
   clearScreen()
   searchFlag = 1 //setting flag = 1 for sort search by capital
   capitalArrow =  focusBtn(capitalBtn, nameBtn, populationBtn, capitalArrow)// Changing name arrow and background of button on clicking
   displayCountries(searchedWord, searchResult, searchFlag)//Render result on screen
})

populationBtn.addEventListener('click', () => {
   clearScreen()
   searchFlag = 2// //setting flag = 2 for sort search by population
   populationArrow = focusBtn(populationBtn, capitalBtn, nameBtn, populationArrow)// Changing name arrow and background of button on clicking
   displayCountries(searchedWord, searchResult, searchFlag)//Render result on screen
})

searchBar.addEventListener('input', (e) => {
   var search = e.target.value
   searchedWord = search.toUpperCase()
   searchResult = []
   searchResult = searchCountries(search.toUpperCase(), searchFlag)
   graphData = [...searchResult]
   drawPopulationGraph()
   displayCountries(search, searchResult, searchFlag)
})

//TESTING:
// searchResult = searchCountries("IN", searchFlag)
// displayCountries("IN", searchResult, searchFlag)



