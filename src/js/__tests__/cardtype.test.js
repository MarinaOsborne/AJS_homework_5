import getCardType from '../cardtype.js';

test('visa test', () => {
  const resive = getCardType(4539872621690449);
  expect(resive).toEqual('visa');
});

test('mastercard test', () => {
  const resive = getCardType(5350404327479662);
  expect(resive).toEqual('mastercard');
});

test('ae test', () => {
  const resive = getCardType(371779145984936);
  expect(resive).toEqual('ae');
});

test('discover test', () => {
  const resive = getCardType(6011444956734143);
  expect(resive).toEqual('discover');
});

test('maestro test', () => {
  const resive = getCardType(6759142340887082);
  expect(resive).toEqual('maestro');
});

test('diners-club test', () => {
  const resive = getCardType(30378706823733);
  expect(resive).toEqual('diners-club');
});

test('jsb', () => {
  const resive = getCardType(3533107626042850);
  expect(resive).toEqual('jsb');
});