var searchFlag = 0 // Search flag to determine if the search is 'start with' -> (1) or 'any word' -> (2) 

const searchByStartingWord = (search) => {
   const result = countries.filter( country => country.toUpperCase().startsWith(search))
   return result
}

const searchByContaingWords = (search) => {
    const result = countries.filter( country => country.toUpperCase().includes(search))
    return result
 }

//  console.log(searchByStartingWord('A'))

//selecting html elements for DOM manipulation
const startWordBtn = document.querySelector('.start-btn')
const containBtn = document.querySelector('.contain-btn')
const searchBtn = document.querySelector('#search-button')
const searchBar = document.querySelector('input')
const searchResultCount = document.querySelector('#search-result')
const resultContainer = document.querySelector('.result-container')

//Event Listiners
startWordBtn.addEventListener('click', () => {
   startWordBtn.style.backgroundColor = '#15234b'
   containBtn.style.backgroundColor = '#6c81bb'
   searchBar.value = ''
   searchResultCount.innerHTML = ''
   resultContainer.replaceChildren('')
    searchFlag = 1 //setting flag = 1 for search by starting word
})
containBtn.addEventListener('click', () => {
   startWordBtn.style.backgroundColor = '#6c81bb'
   containBtn.style.backgroundColor = '#15234b'
   searchBar.value = ''
   searchResultCount.innerHTML = ''
   resultContainer.replaceChildren('')
   searchFlag = 2//setting flag = 1 for search by containing word
})

searchBar.addEventListener('input', (e) => {
   var searchResult = []
   var search = e.target.value
   if(searchFlag == 1){// checing flag
       searchResult = searchByStartingWord(search.toUpperCase())
      searchResultCount.textContent = `Countries starts with ${search} are ${searchResult.length}`
      }else if(searchFlag == 2){
         searchResult = searchByContaingWords(search.toUpperCase())
       searchResultCount.textContent = `Countries contains ${search} are ${searchResult.length}`
      }else{
         resultContainer.replaceChildren('')
         const warning = document.createElement('h1')
         warning.textContent = 'Click on any one search type. Search with starting word or Search with any word!! '
         warning.style.color='red'
         warning.style.fontSize='30px'
         warning.style.letterSpacing = '0'
         warning.style.wordSpacing = '0'
         warning.style.textAlign = 'center'
         resultContainer.appendChild(warning)
       }
      const resultElements = []
      for(const country of searchResult){
          const resultItem = document.createElement('div')
          resultItem.className = 'result-item'
          resultItem.textContent = country
          resultElements.push(resultItem)
      }
      if(searchFlag != 0) resultContainer.replaceChildren(...resultElements)
})
