const container = document.getElementById("container");
const gridItem = document.getElementsByClassName("grid-item");
const reset = document.getElementById("reset");

makeRows(16,16);



function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

container.addEventListener('mouseover', function classClicked(event){
    event.target.classList.add('addedColor');
    gridPixel.style.backgroundColor = "none";

});


function amountGrids() {
    let gridAmount = prompt("How many grids would you like?");
    while (container.firstChild){
        container.removeChild(container.lastChild);
    }
    makeRows(gridAmount, gridAmount);
};