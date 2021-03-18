export default function getCardType(num) {
  const arr = num.toString().split('');
  if (arr[0] == 2) {
    return 'mir';
  } if (arr[0] == 5 && (arr[1] == 1 || arr[1] == 2 || arr[1] == 3 || arr[1] == 4 || arr[1] == 5)) {
    return 'mastercard';
  } if (arr[0] == 3 && (arr[1] == 4 || arr[1] == 7)) {
    return 'ae';
  } if (arr[0] == 4) {
    return 'visa';
  } if (arr[0] == 6 && arr[1] == 0) {
    return 'discover';
  } if (arr[0] == 0 || (arr[0] == 5 && (arr[1] == 0 || arr[1] == 6 || arr[1] == 7 || arr[1] == 8)) || (arr[0] == 6 && (arr[1] == 3 || arr[1] == 7))) {
    return 'maestro';
  } if ((arr[0] == 3 && (arr[1] == 0 || arr[1] == 6)) || (arr[0] == 5 && arr[1] == 4) || (arr[0] == 5 && arr[1] == 5 && arr[2] == 8)) {
    return 'diners-club';
  } if (arr[0] == 3 && (arr[1] == 5)) {
    return 'jsb';
  }
}
