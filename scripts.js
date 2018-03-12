const root = document.documentElement;
const showGridSize = document.querySelector('#grid-size');
const reset = document.querySelector('#reset');
const container = document.querySelector('#grid');
const themeSelectors = document.querySelectorAll('.theme > div');

reset.addEventListener('click', resetGrid);

showGridSize.addEventListener('click', () => {
  let size = prompt('How many squares per side do you want?');
  showGridSize.textContent = 'grid-size: '+ size;
  deleteGrid();
  draw(size);
});

themeSelectors.forEach((selector) => {
  selector.addEventListener('click', themeChanger);
});

function resetGrid() {
  let cells = document.querySelectorAll('#grid > div');
  cells.forEach((cell) => {
    cell.style.opacity = 0.0;
  });
}

function deleteGrid() {
  Element.prototype.removeAll = function () {
    while (this.firstChild) {
      this.removeChild(this.firstChild);
    }
    return this;
  }
  container.removeAll();
}

function themeChanger(e) {
  switch (e.target.id) {
    case 'pink':
      root.style.setProperty('--color', '#ff77a2');
      break;
    case 'blue':
      root.style.setProperty('--color', '#77c4ff');
      break;
  }
}

function opacityChanger(e) {
  if (e.target.style.opacity < 1.0) {
    e.target.style.opacity = parseFloat(e.target.style.opacity) + 0.1;
  }
}

function draw(grid) {
  for (let y = 0; y < grid; y++) {
    for (let x = 0; x < grid; x++) {
      let cellSize = 512 / grid;
      let cell = document.createElement('div');

      cell.style.opacity = 0.0;
      cell.style.width = cellSize + 'px';
      cell.style.height = cellSize + 'px';
      container.appendChild(cell);

      cell.addEventListener('mouseover', opacityChanger);
    }
  };
}
draw(12);
