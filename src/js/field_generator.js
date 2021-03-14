export default class Cell {
  constructor(index) {
    this.field = document.getElementById(`field${index}`);
  }

  activateCell(index) {
    this.field = document.getElementById(`field${index}`);
    this.field.className = 'cell goblin_img';
  }

  deactivateCell(index) {
    this.field = document.getElementById(`field${index}`);
    this.field.className = 'cell';
  }
}
