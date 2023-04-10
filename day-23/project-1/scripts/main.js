const isPrime = function(number) {
    if (number < 2) {
      return false;
     }
   for (let i = 2; i <= Math.sqrt(number); i++) {
// If the number is divisible by any factor, it's not prime
    if (number % i === 0) {
       return false;
     }
    }
  // If the number is not divisible by any factor, it's prime
   return true;
}

const submitBtn = document.querySelector('button')
const instruction = document.querySelector('p') 
const parentDiv = document.querySelector('.grid-container')

submitBtn.addEventListener('click', (e) => {
  e.preventDefault()
  const rangeInput = document.querySelector('input')
  const range = Number(rangeInput.value)
  if(isNaN(range))  instruction.textContent = 'Value should be a number.'
  else {
    parentDiv.innerHTML = ''
    instruction.textContent=''
    const colors = ["red","green", "yellow"]
    var dex = 0
    let div
    for (let i = 0; i < range; i++) {
        div = document.createElement('div')
        div.className = 'grid-item'
        div.textContent = i
        if(isPrime(i)) dex = 0
        else {
           if(i % 2 == 0) dex = 1
           else dex = 2
        }
        div.style.fontSize = '24px'
        div.style.backgroundColor = colors[dex] 
        parentDiv.appendChild(div)
    }
  }
})
