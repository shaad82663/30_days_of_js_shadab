const populationButton = document.querySelector('.graph-population-btn')
const languageButton = document.querySelector('.graph-languages-btn')
const worldPopulation = 7758589152  //As given in countries_data.js

const getPopulationData = (inputData) => {
    const result = []
   for(const {name, population} of inputData){
      const data = {name, value : population}
      result.push(data)
   }
   if(inputData.length) result.unshift({name : 'World', value: worldPopulation})
   result.sort( (a,b)  => b.value - a.value)
   return result
}

const getLanguageData = (inputData) => {
    const result = []
    //Most spoken languages
    const countriesMap = new Map()
    for (const {languages} of inputData) {
        for (const language of languages) {
            if (!countriesMap.has(language)) countriesMap.set(language, 1)
            else {
                const freq = Number(countriesMap.get(language))
                countriesMap.set(language, freq + 1)
            }
        }
    }
    // Define custom comparison function for sorting Map by value
    const mapSortByValue = (a, b) => b[1] - a[1]
    // Convert Map object to array and sort by value
    const tenMostSpokenLanguages = new Map([...countriesMap.entries()].sort(mapSortByValue).slice(0, 10));
    const arr = Array.from(tenMostSpokenLanguages)  //converted to array
    
    for (const el of arr) {  // adding entries as object name -> lang name, value -> lang count
        result.push({
            name: el[0],
            value: el[1]
        })
    }
    return result
}

const drawPopulationGraph = () => {// Callback for population button
    const populationData = getPopulationData(graphData)
    drawChart(populationData, 'Population data for searched countries')
}

const drawLanguagesGraph = () => {// Callback for languages button
    const languagesData = getLanguageData(graphData)
    drawChart(languagesData, 'Languages data for searched countries')
}

populationButton.addEventListener('click', drawPopulationGraph)

languageButton.addEventListener('click', drawLanguagesGraph)

//function for drawing chart
const drawChart = (data, title) => {
    const heading = document.querySelector('.graph-heading')
    heading.textContent = data.length ? title : 'Type any keyword first in seaarch bar'
    const graphSectionEl = document.querySelector('.graph-section')

    //removing already rendered data (if any)
    const wrappers = document.querySelectorAll('.graph-wrapper')
    if (wrappers.length) {
        for (const wrapper of wrappers) graphSectionEl.removeChild(wrapper)
    }

    const baseValue = data[0].value
    data.forEach(item => {
       const graphWrapper = document.createElement('div')
       graphWrapper.className = "graph-section-container graph-wrapper"
       const nameEl = document.createElement('div')
       nameEl.textContent = item.name
       const barEl = document.createElement('div')
       barEl.style.width = `${(item.value * 100)/baseValue}%`
       const valueEl = document.createElement('div')
       valueEl.textContent = item.value
       graphWrapper.appendChild(nameEl)
       graphWrapper.appendChild(barEl)
       graphWrapper.appendChild(valueEl)
       graphSectionEl.appendChild(graphWrapper)
    })
  }