const gridSizeX = 16;
const gridSizeY = 16;
const container = document.getElementById("draw-space");



function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(gridSizeX, gridSizeY);

const cellItem = document.getElementsByClassName('grid-item');
console.log(cellItem);

Array.from(cellItem).forEach(element => {
    element.addEventListener("mouseenter", function( event ) {
        event.target.style.backgroundColor = 'black';
    }); 
    
});

