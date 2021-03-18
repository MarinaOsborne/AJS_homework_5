import getCardType from './cardtype.js';

const arr = Array.from(document.querySelectorAll('.card'));

export default function showCard(num) {
  arr.forEach((e) => {
    if (e.id !== getCardType(num)) {
      e.classList.add('blanc');
    }
  });
}
