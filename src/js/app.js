import validateCard from './luhn.js';
import getCardType from './cardtype.js';
import showCard from './showcard.js';

const button = document.querySelector('.val_button');
const input = document.getElementById('input');
const arr = Array.from(document.querySelectorAll('.card'));
const validation = document.querySelector('.validation');
const err = document.createElement('div');

function clearInput() {
  input.addEventListener('focus', (event) => {
    event.preventDefault();
    arr.forEach((e) => {
      e.classList.remove('blanc');
    });
    input.value = '';
    err.innerText = '';
  });
}

button.addEventListener('click', (event) => {
  event.preventDefault();
  getCardType(input.value);
  if (validateCard(input.value) === true) {
    getCardType(input.value);
    showCard(input.value);
  } else {
    err.innerText = 'Ошибка: введите корректный номер карты';
    validation.appendChild(err);
  }
  clearInput();
});
