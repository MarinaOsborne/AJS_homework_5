export default class CurrentCell {
  constructor(index) {
    this.field = document.getElementById(`field${index}`);
  }

  gotAim(index) {
    this.field = document.getElementById(`field${index}`);
    if (this.field.className.includes('cell goblin_img')) {
      dead.textContent = +dead.textContent + 1;
    } else {
      lost.textContent = +lost.textContent + 1;
    }
  }

  gameOver() {
    dead.textContent = 0;
    lost.textContent = 0;
    alert('Игра закончена!');
  }
}
