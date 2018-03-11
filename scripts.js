var gridSize = 16;

const grid = document.querySelector('#grid');
const reset = document.querySelector('#reset');

reset.addEventListener('click', () => {
  console.log('reset opacity');
});

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
