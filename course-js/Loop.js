const abcdz = {
  a: ':a',
  b: ':b',
  c: ':c',
  d: ':d',
  z: ':z',
}
const enumerate = [0,1,2,3,4,5,6,7,8,9]

for(let num in enumerate) {
  console.log(num)
}

for(let abc in abcdz) {
  console.log(abcdz[abc])
}
