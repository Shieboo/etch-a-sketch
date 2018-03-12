const root = document.documentElement;
const showGridSize = document.querySelector('#grid-size');
const reset = document.querySelector('#reset');
const grid = document.querySelector('#grid');
const themeSelectors = document.querySelectorAll('.theme > div');

var gridSize = 8;

themeSelectors.forEach((selector) => {
  selector.addEventListener('click', themeChanger);
});

reset.addEventListener('click', () => {
  let cells = document.querySelectorAll('#grid > div');
  cells.forEach((cell) => {
    cell.style.opacity = 0.0;
  });
});

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

for (let y = 0; y < gridSize; y++) {
  for (let x = 0; x < gridSize; x++) {
    let cellSize = 512 / gridSize;
    let cell = document.createElement('div');

    cell.style.opacity = 0.0;
    cell.style.width = cellSize + 'px';
    cell.style.height = cellSize + 'px';
    grid.appendChild(cell);

    cell.addEventListener('mouseover', opacityChanger);
  }
};
