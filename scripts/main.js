const gridSizeX = 50;
const gridSizeY = 50;
const drawGridSize = 500;
const container = document.getElementById("draw-space");
const cellItem = document.getElementsByClassName('grid-item');
const clearButton = document.getElementById("clear");
let color = 'black';
let squareSize = drawGridSize/gridSizeY;



function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  container.style.setProperty('grid-template-rows', `repeat(var(--grid-rows), ${squareSize}px)`);
  container.style.setProperty('grid-template-columns', `repeat(var(--grid-cols), ${squareSize}px)`);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(gridSizeX, gridSizeY);




Array.from(cellItem).forEach(element => {
    element.addEventListener("mouseenter", function( event ) {
        event.target.style.backgroundColor = color;
    });   
});

function clearGrid() {
    Array.from(cellItem).forEach(element => {
            element.style.backgroundColor = '';   
    });
}


clearButton.addEventListener('click', function() {
    clearGrid();
});


