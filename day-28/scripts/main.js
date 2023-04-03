const form = document.querySelector('#playerForm');
const leaderboardData =  localStorage.getItem('leaderboard')
const leaderboard =  leaderboardData ? JSON.parse(leaderboardData) : []


//Util function  -> to create elements with different calsses and vlaues
const createPlayerEntry = (elementName, className, value) => {
  const div = document.createElement(elementName)
  div.className = className
  div.textContent = value
  return div
}

//Util function  -> to append child element to parent element
const appendChildToParent = (parentElement, childrenElements) => {
  for(const childElement of childrenElements)  parentElement.appendChild(childElement)
}

const appendAllPlayers = (leaderboard) => {
  let newLoop = true //  flag variable
  for(let i =0; i <leaderboard.length; i++){
    let player = leaderboard[i]
    const players = document.querySelectorAll('.player')
    if(players && newLoop) {// clear the oldly rendered elements 
      for(const player of players)  document.body.removeChild(player)
      newLoop = false
    }
    
    // div for storing each player's row
    const playerDiv = document.createElement('div')
    playerDiv.className = 'player'

    //creating html elements for name, score and country
    const nameDiv = createPlayerEntry('div', 'name', player.firstName + " " + player.lastName)
    const countryDiv = createPlayerEntry('div','country', player.country)
    const scoreDiv = createPlayerEntry('div', 'score', player.score)
    //Appending name (firstName + lastName) country and score 
    const childrenDivs = [nameDiv, countryDiv, scoreDiv]
    appendChildToParent(playerDiv, childrenDivs)  
    //Appedning btns 
    const btnDiv = document.createElement('div')
    btnDiv.className = 'buttons'
    const btn_1 = createPlayerEntry('button', 'add-btn', '+5')
    const btn_2 = createPlayerEntry('button', 'sub-btn', '-5')
    const btn_3 = createPlayerEntry('button', 'del-btn', 'delete')

    //Disabling the +/-(5) buttons based on the score of the player
    if(Number(scoreDiv.textContent) > 95){
      btn_1.style.pointerEvents = 'none'
      btn_1.style.opacity = 0.5
    }else if(Number(scoreDiv.textContent) < 5){
      btn_2.style.pointerEvents = 'none'
      btn_2.style.opacity = 0.5
    }

    const buttons = [btn_1, btn_2, btn_3]
    appendChildToParent(btnDiv, buttons)
    playerDiv.appendChild(btnDiv) 

    btn_1.addEventListener('click', () => {
      const score = Number(scoreDiv.textContent) + 5
      leaderboard[i].score = score
      if(score+5 > 95){
        btn_1.style.pointerEvents = 'none'
        btn_1.style.opacity = 0.5        
      }
      appendAllPlayers(leaderboard)
    })

    btn_2.addEventListener('click', () => {
      const score = Number(scoreDiv.textContent) - 5
      leaderboard[i].score = score
      if(score-5 < 5){
        btn_1.style.pointerEvents = 'none'
        btn_1.style.opacity = 0.5        
      }
      appendAllPlayers(leaderboard)
    })

    btn_3.addEventListener('click', () => {
      leaderboard.splice(i, 1)
      // localStorage.setItem('leaderboard', JSON.stringify(leaderboard))
      appendAllPlayers(leaderboard)
    })

    
    //Apend everything on body
    document.body.appendChild(playerDiv)
  }
  localStorage.setItem('leaderboard', JSON.stringify(leaderboard))
}

//If there is already some players in leaderboard inside localstorage then render it on screem
if(leaderboardData) {
  appendAllPlayers(leaderboard)
}

form.addEventListener('submit', function(event) {
  event.preventDefault();
  //Check if any previous warning is rendered or not. If YES then clear it before rendering new entry
  const warning = document.querySelector('h4')
  if(warning.textContent)  warning.textContent=''

  //Check if any empty input is there
  const inputs = document.querySelectorAll('input')
  for(const input of inputs){
     if(input.value == '') {
      warning.textContent = 'All Fields Are Required'
      return;
     }
  }
  //push the score in leaderboard array
  const score = {
    firstName : inputs[0].value,
    lastName : inputs[1].value,
    country : inputs[2].value.toUpperCase(),
    score : inputs[3].value
  }
  leaderboard.push(score)
  leaderboard.sort((a,b) => b.score-a.score)//We can also use binary search based insertion
  appendAllPlayers(leaderboard)
});