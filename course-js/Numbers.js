console.log('Check Type', (typeof 13), (typeof 1.8), (typeof -5))

console.log('Math for babies', (1 + 1), (4 - 2), (2 * 2), (9 / 3), (3%2))

const coercionNumber = value => {
  if ([NaN, Infinity, -Infinity, null, undefined].includes(value)) {
    return 0
  }

  return Number(value) || 0
}

console.log(
  'Return only numbers',
  coercionNumber(22.2), 
  coercionNumber(NaN), 
  coercionNumber(2 / undefined), 
  coercionNumber('12.4'),
  coercionNumber('one'),
)

console.log(
  'Math',
  Math.max(6,12,28,55,7),
  Math.min(6,12,28,55,7),
  Math.round(5.29),
  Math.trunc(5.29),
  Math.ceil(5.29),
)