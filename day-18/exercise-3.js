const catsAPI = 'https://api.thecatapi.com/v1/breeds'
const countriesAPI = 'https://restcountries.com/v2/all'


// Read the cats api and find the average weight of cat in metric unit.
fetch(catsAPI)
.then(res => res.json())
.then((res) => {
   const weights = []
   for(const cat of res){
      let weight = cat.weight.metric.split(' - ')
      let catMeanWeight =  ((+weight[0]) + (+weight[1])) / 2  // MEaan weight of single cat
      weights.push(catMeanWeight)
   }
   const sum = weights.reduce((acc, el) => acc+el )
   console.log(`Average weight of cats: ${sum/weights.length}`)
})
.catch(err => console.log(`Error : ${err}`))

//Read the countries api and find out the 10 largest countries   
fetch(countriesAPI)
  .then(res => res.json())
  .then((res) => {
    const areas = []
    const allLnaguages = []
    for(let i = 0; i<res.length; i++){
        const {area, name, languages} = res[i]   
        for(const language of languages)  allLnaguages.push(language.name)     
        areas.push({name, area})
      }
      //for problem-3 solution in exercise-3
      const allUniqueLanguages = new Set(allLnaguages)

      areas.sort((a,b) => b.area-a.area)
      const tenLargestAreas = areas.slice(0,10)
      //  console.log(tenLargestAreas)
      const largestCountries = []
      for(let i=0; i<10; i++){
         const {name} = tenLargestAreas[i]
         // console.log(tenLargestAreas[i].name)
         largestCountries.push(name)
      }
      //Problem-2 solution
      console.log("10 Lagest Nations ")
        console.log(largestCountries)

        //Prolem-3 solution
        console.log(`There are total ${allUniqueLanguages.size} languages in the world.`)
   })
   .catch(err => console.log(err))
   
   
   // console.log(allLnaguages.size)
   

  //Read the countries api and count total number of languages in the world used as officials.
