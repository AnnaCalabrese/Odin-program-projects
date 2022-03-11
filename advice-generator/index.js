
const adviceNumber = document.getElementById('span')
const adviceText = document.getElementById('advice')
const BTN = document.getElementById('btn')

// API Call
 function getAdvice(){
    const URL = 'https://api.adviceslip.com/advice'
 fetch(URL,  {cache: "no-cache"})
    .then(res => res.json())
    .then(data => {
        console.log(data)
        span.innerHTML = '#' + data.slip.id
       advice.innerHTML = data.slip.advice
    })
}    

BTN.addEventListener('click', getAdvice)
