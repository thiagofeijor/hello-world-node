const text1 = 'is a string'
const text2 = "is a string"
const text3 = `is a string`
const sku = '340'

console.log(text1, text2, text3)
console.log(`${text1} \n${text2} \n${text3} \n3*5=${3*5}`)

console.log('    this is js'.trim().toUpperCase())
console.log('Write', ('b' + 'a' + + 'a' + 'a').toLowerCase())

console.log('padStart', sku.padStart(6, '0'))
