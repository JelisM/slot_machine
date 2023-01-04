/*----- constants -----*/ 

let player =  null;





/*----- app's state (variables) -----*/ 

let start, reset


/*----- cached element references -----*/ 
const h2El = document.querySelector('h2')
const boxdEl = document.getElementById('box')
const resetBtnEl = document.createElement('button')
const playBtnEl  =  document.createElement('button')



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

    const item1  = getElement('item1');
    const item2  = getElement('item2');
    const item3  = getElement ('item3');
}

