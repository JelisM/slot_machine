/*----- constants -----*/ 

let player =  null;





/*----- app's state (variables) -----*/ 

let start, reset


/*----- cached element references -----*/ 
const h2El = document.querySelector('h2')
const boxdEl = document.getElementById('slots')

/*----- event listeners -----*/ 

button.addEventListener('click', getRandomNbr)


/*----- functions -----*/

function render() {
    renderMessage()
    renderBoard()
    if ((winner) || !board.includes(null)){
        renderResetBtn()

    }

}

function init() {



}

function getRandomNbr() {

    return Math.floor(Math.random()*2) + 2;
}

function getElement() {
    return document.getElementById();


}

function spin() {

    const number1  = getElement('item1');
    const number2  = getElement('item2');
    const number3  = getElement ('item3');
}

