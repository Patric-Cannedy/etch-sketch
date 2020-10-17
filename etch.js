const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");


defaultGrid();
//Creates a default grid sized 16x16 
function defaultGrid() {
    makeRows(16);
    makeColumns(16);
}

//Takes (rows, columns) input and makes a grid
function makeRows(rowNum) {

    //Creates rows
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
};

//Creates columns
function makeColumns(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        };

    };
};

//Hover over cells plus button changes
function changeToBlack(){
    let cell = document.getElementsByClassName('cell');
    Array.from(cells).forEach(cell =>{
    cell.addEventListener("mouseover", (e) => {
        cell.style.backgroundColor = 'black'
        });
    });
}

function changeToGold(){
    let cell = document.getElementsByClassName('cell');
    Array.from(cells).forEach(cell =>{
    cell.addEventListener("mouseover", (e) => {
        cell.style.backgroundColor = 'rgb(189, 142, 12)'
        });
    });
}

function changeToRandom(){
    let cell = document.getElementsByClassName('cell');
    Array.from(cells).forEach(cell =>{
    cell.addEventListener("mouseover", (e) => {
        cell.style.backgroundColor = 'rgb('+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+')'
        });
    });
}

function refreshPage(){
    window.location.reload();
} 
createGrid();

