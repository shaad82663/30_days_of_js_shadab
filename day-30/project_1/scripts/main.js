const strArr = ["30 DAYS OF JAVASCRIPT", "CHALLENGE 2020", "ASABENEH YETAYEH"]
let fontStyles = ["Arial", "Verdana", "Helvetica", "Times New Roman", "Georgia", "Courier New", "Lucida Console", "Tahoma"];

const heading = document.querySelector('h1')

const appendText = function(){
    heading.textContent = ''
    for(let j=0; j<3; j++){
        const str = strArr[j]
        for(let i = 0; i<str.length; i++){
            const r = Math.ceil(Math.random() * 256)
            const g = Math.ceil(Math.random() * 256)
            const b = Math.ceil(Math.random() * 256)
            const color =   `rgb(${r},${g},${b})`
            const span = document.createElement('span')
            span.textContent = str.charAt(i)
            span.style.color = color  
            heading.appendChild(span)
        }
        const breakLine = document.createElement('br')
        heading.appendChild(breakLine)
    }
    
    const bgColor = `rgb(${Math.ceil(Math.random() * 256)}, ${Math.ceil(Math.random() * 256)}, ${Math.ceil(Math.random() * 256)})`
    const font = fontStyles[Math.ceil(Math.random()*fontStyles.length)]
    document.body.style.backgroundColor = bgColor
    document.body.style.fontFamily = font
    
}
 
setInterval(() => {
    appendText()
}, 3000);