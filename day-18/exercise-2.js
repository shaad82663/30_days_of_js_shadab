const catsAPI = 'https://api.thecatapi.com/v1/breeds'

fetch(catsAPI)
  .then(res => res.json())
  .then((res) => {
    const names = []
    for(let i=0; i<res.length; i++){
        const {name} = res[i]
        names.push(name)
    }
    console.log(names)
  })
  .catch(err => console.log(err))