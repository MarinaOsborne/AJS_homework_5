import Cell from './field_generator.js';
import CurrentCell from './logic.js';

let random = Math.floor(Math.random() * 16);
const cell = new Cell(random);
cell.activateCell(random);
setInterval(() => {
  cell.deactivateCell(random);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  const filteredArr = arr.filter((item) => item !== random);
  const activeCell = filteredArr[Math.floor(Math.random() * 15)];
  cell.activateCell(activeCell);
  random = activeCell;
}, 1000);

function getCell(index) {
  const currentCell = new CurrentCell(index);
  currentCell.field.addEventListener('click', () => {
    currentCell.gotAim(index);
    if (lost.textContent == 5) {
      currentCell.gameOver();
    }
  });
}
for (let index = 1; index < 16; index++) {
  getCell(index);
}
