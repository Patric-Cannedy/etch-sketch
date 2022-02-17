const grid = document.querySelector(".grid")
let colorNow = 'black'
let defaultSize = 16;

//Creates the default grid

    function createGrid(defaultSize) {
        grid.style.gridTemplateColumns = `repeat(${defaultSize}, 1fr)`
        grid.style.gridTemplateRows = `repeat(${defaultSize}, 1fr)`
        for (let i = 0; i < (defaultSize * defaultSize); i++) {
            const cell = document.createElement('div');
            cell.setAttribute("class", "cell");
            cell.setAttribute("id", `${i}`);
            cell.addEventListener('mouseover', drawColor);
            grid.appendChild(cell)
        }
    }
createGrid(defaultSize);


//Refresh Page and resize prompt

function refreshPage(){
    defaultSize = Number(prompt('How many rows? Cannot exceed 100.'))
    if (defaultSize <= 100) {
        let cells = document.querySelectorAll(".cell")
        cells.forEach(cell => cell.remove());
        createGrid(defaultSize)
    } else {
        alert('Grid Size cannot exceed 100!')
    }
}

//Changes currently toggled color when pressed
function changeToBlack(e) {
    e.target.style.background = 'black'
}

function changeToGold(e) {
    e.target.style.background = 'rgb(189, 142, 12)';
}

function changeToRandom(e){
    e.target.style.background = randomColor();
}
//Creates a random color
function randomColor() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';

}

//Stores the currently selected color group
function setColor(color){
    colorNow = color;
}

function drawColor(e){

    if (colorNow === 'black'){
        changeToBlack(e)
    }
    else if (colorNow === 'rgb(189, 142, 12)'){
        changeToGold(e)
    }
    else if (colorNow === 'random'){
        changeToRandom(e);
    }
}

