import validateCard from '../luhn';

test.each([
  ['valid', '3535546462334947', true],
  ['valid', '6763390610858770', true],
  ['invalid', '222', false],
  ['invalid', '98756555', false],
  ['invalid', '67633906108587704', false],
  ['invalid', 'fhsfgskufg', false],

])(('it should be %s'), (_, value, expected) => {
  expect(validateCard(value)).toBe(expected);
});
