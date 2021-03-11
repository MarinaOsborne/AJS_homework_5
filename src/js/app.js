// TODO: write code here
let random = Math.floor(Math.random() * 16);
const imgcell = document.getElementsByClassName('cell')[random];
const img = document.createElement('img');
img.src = 'img/goblin.png';
imgcell.appendChild(img);

setInterval(() => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const filteredArr = arr.filter((item) => item !== random);
  const rand = filteredArr[Math.floor(Math.random() * 15)];
  const imgcellNew = document.getElementsByClassName('cell')[rand];
  imgcellNew.appendChild(img);
  random = rand;
}, 1000);
