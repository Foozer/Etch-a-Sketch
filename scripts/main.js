let gridSizeX = 32;
let gridSizeY = 32;
const drawGridSize = 700;
const container = document.getElementById("draw-space");
let cellItem = document.getElementsByClassName('grid-item');
const clearButton = document.getElementById("clear");
const sizeSelect = document.getElementById("grid-size");
let color = 'black';
let squareSize = drawGridSize/gridSizeX;
let drawGridSizeY = squareSize*gridSizeY;

container.style.setProperty('width', `${drawGridSize}px`);
container.style.setProperty('height', `${drawGridSizeY}px`);

function makeRows(cols, rows) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  container.style.setProperty('grid-template-rows', `repeat(var(--grid-rows), ${squareSize}px)`);
  container.style.setProperty('grid-template-columns', `repeat(var(--grid-cols), ${squareSize}px)`);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
  paint();
};

makeRows(gridSizeX, gridSizeY);

function clearDrawnGrid() {
    while (container.firstChild) {
        container.firstChild.remove();
    }
}

sizeSelect.addEventListener('change', (event)=> {
    let num = Number(event.target.value);
    clearDrawnGrid();
    squareSize = drawGridSize/num;
    drawGridSizeY = squareSize*num;
    makeRows(num, num);
    
})

function paint() {
    Array.from(cellItem).forEach(element => {
        element.addEventListener("mouseenter", function( event ) {
            event.target.style.backgroundColor = color;
        });   
    });
}

function clearGrid() {
    Array.from(cellItem).forEach(element => {
            element.style.backgroundColor = '';   
    });
}


clearButton.addEventListener('click', function() {
    clearGrid();
});

