const subtitle = document.querySelector('.subtitle')
subtitle.textContent = `Currently we have ${countries_data.length} countries.`
const allLanguages = []
const allNationsPopulation = []
for(const country of countries_data){
   const {name ,languages, population} = country
   allLanguages.push(languages)
   allNationsPopulation.push({name : name, value : population})
}

allNationsPopulation.sort( (a,b) => b.value - a.value)
const tenLargestCountries = allNationsPopulation.slice(0,10)
var total = 0
for(const country of allNationsPopulation){
     total += Number(country.value)
}
tenLargestCountries.unshift({
    name : 'World',
    value : total
})
// console.log(tenLargestCountries)

const countriesMap = new Map()
for(const languages of allLanguages){
    for(const language of languages){
   if(!countriesMap.has(language))  countriesMap.set(language, 1)
   else {
      const freq = Number(countriesMap.get(language))
      countriesMap.set(language, freq + 1)
   }
    }
}
// Define custom comparison function for sorting Map by value
const mapSortByValue = (a, b) => b[1]-a[1]
// Convert Map object to array and sort by value
const tenMostSpokenLanguages = new Map([...countriesMap.entries()].sort(mapSortByValue).slice(0,10));
const arr = Array.from(tenMostSpokenLanguages)  //converted to array
const topTenLang = []
for(const el of arr) {  // adding entries as object name -> lang name, value -> lang count
    topTenLang.push({
        name : el[0],
        value : el[1]
    })
}
//function for drawing chart
const drawChart = (data, title) => {
    const heading = document.querySelector('h4')
    heading.textContent = title
    const baseValue = data[0].value //base value of the graph will be first value i.e. largest one

    //removing already rendered data (if any)
    const wrappers = document.querySelectorAll('.graph-wrapper')
    if(wrappers.length){
        for(const wrapper of wrappers)  document.body.removeChild(wrapper)
    }  

    for(let i=0; i<data.length; i++){
        const wrapper = document.createElement('div')
        wrapper.className = 'graph-wrapper'
        wrapper.id = 'stat'
        const dataName = document.createElement('div')
        dataName.textContent = data[i].name
        const dataValue = document.createElement('div')
        dataValue.textContent = data[i].value
        const graphDiv = document.createElement('div')
        // graphDiv.style.backgroundColor =  'red'
        const widthPercentage = ((data[i].value * 100)/baseValue) 
        graphDiv.style.width = `${widthPercentage}%`
        graphDiv.style.height = '30px'
        wrapper.appendChild(dataName)
        wrapper.appendChild(graphDiv)
        wrapper.appendChild(dataValue)
        document.body.appendChild(wrapper)
    }
}  
const buttons = document.querySelectorAll('button')

buttons[0].addEventListener('click' , () => {
    drawChart(topTenLang, '10 Most Spoken Language In The World')
})

buttons[1].addEventListener('click' , () => {
    drawChart(tenLargestCountries, '10 Most Populated Countries In The World')
})
