const countriesAPI = 'https://restcountries.com/v2/all'

fetch(countriesAPI)
  .then(res => res.json())
  .then((res) => {
    const myData = []
    for(let i = 0; i<res.length; i++){
        const {name, population, area, languages, capital} = res[i] // languages: [ [Object], [Object], [Object], [Object] ],
        const languagesName = []
        for(const language of languages){
          languagesName.push(language.name)
        }
        const data = {name, population, area, languages : languagesName, capital}
        myData.push(data)
    }
    console.log(myData)
  })
  .catch(err => console.log(err))