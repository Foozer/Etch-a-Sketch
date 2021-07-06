const gridSizeX = 15;
const gridSizeY = 15;
const container = document.getElementById("draw-space");
const cellItem = document.getElementsByClassName('grid-item');
const clearButton = document.getElementById("clear");
let color = 'black';



function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
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


