const boxContainer = document.querySelector(".boxContainer")
let colorNow = 'black'
let numberOfRows = 16;

//Grid

  function createGrid(numberOfRows) {
    boxContainer.style.setProperty('--grid-rows', numberOfRows);
    boxContainer.style.setProperty('--grid-cols', numberOfRows);
    for (let i = 0; i < (numberOfRows ** 2); i++) {
        let cell = document.createElement('div');
        cell.setAttribute("class", "cell");
        cell.setAttribute("id", `${i}`);
        cell.addEventListener('mouseover', drawColor);
        boxContainer.appendChild(cell);
    }
}
createGrid(numberOfRows)


//Hover over cells plus button changes

function refreshPage(){
    numberOfRows = Number(prompt('How many rows?'))
    if (numberOfRows <= 100) {
        let cells = document.querySelectorAll(".cell")
        cells.forEach(cell => cell.remove());
        createGrid(numberOfRows)
    } else {
        alert('Grid Size cannot exceed 100!')
    }
}

function changeToBlack(e) {
    e.target.style.background = 'black'
}

function changeToGold(e) {
    e.target.style.background = 'rgb(189, 142, 12)';
}

function changeToRandom(e) {
    e.target.style.background = "random"
}



function setColor(color){
    colorNow = color;
    let cells = document.querySelectorall(".cell")
    createGrid(numberOfRows);
    cells.forEach(cell => cell.remove());
}

function drawColor(e){

    if (colorNow === 'black'){
        changeToBlack(e)
    }
    else if (colorNow === 'rgb(189, 142, 12)'){
        changeToGold(e)
    }
    else if (colorNow === 'random'){
        changeToRandom(e)
    }
}