
const h2El = document.querySelector('h2')
const boxEl = document.getElementById('slots')
const playBtn = document.getElementById('spinner')
const resetBtn = document.getElementById('reset')
const item1 = document.getElementById('numberOne')
const item2 = document.getElementById('numberTwo')
const item3 = document.getElementById('numberThree')


playBtn.addEventListener('click', renderMessage)

playBtn.addEventListener('click', hideMessage)

resetBtn.addEventListener('click', reset)

function getRandomNbr() {
    
    return Math.floor(Math.random()*(4)) + 1
 
 
 }


 function renderMessage() {

    const num1 = getRandomNbr()
    const num2 = getRandomNbr()
    const num3 = getRandomNbr()
    console.log(num1, num2, num3)

    item1.innerHTML = `${num1}`
    item2.innerHTML = `${num2}`
    item3.innerHTML = `${num3}`
     
    if (num1 === num2 && num1 === num3) {
      
        h2El.innerHTML= "Jackpot!!!"
    } else {
        h2El.innerHTML= "Try Again!"
    }
    }
 function hideMessage (){
 const msg = document.getElementById("hide")
 msg.style.display = "none"

 }

function reset(){
    window.location.reload()

}
function init() {
reset()
renderMessage()
hideMessage()
}
