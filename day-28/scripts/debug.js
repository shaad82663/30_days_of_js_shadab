// if(Number(scoreDiv.textContent) > 95){
//     btn_1.style.pointerEvents = 'none'
//     btn_1.style.opacity = 0.5
//   }else if(Number(scoreDiv.textContent) < 5){
//     btn_2.style.pointerEvents = 'none'
//     btn_2.style.opacity = 0.5
//   }

//   btn_1.addEventListener('click', () => {
//     const score = Number(scoreDiv.textContent) + 5
//     scoreDiv.textContent = score 
//     leaderboard[i].score = score
//     if(score+5 > 95){
//       btn_1.style.pointerEvents = 'none'
//       btn_1.style.opacity = 0.5        
//     }
//   })

//   btn_2.addEventListener('click', () => {
//     const score = Number(nameDiv.textContent) - 5
//     nameDiv.textContent = score 
//     leaderboard[i].score = score
//     if(score-5 < 5){
//       btn_1.style.pointerEvents = 'none'
//       btn_1.style.opacity = 0.5        
//     }
//   })