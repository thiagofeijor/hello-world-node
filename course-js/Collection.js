const car = {
  brand: 'chevrolet',
  model: 'camaro',
  doors: 2
}

const fabrication = {
  hasSunroof: true,
  year: 2016,
  serie: 's6',
  lot: '0047SW'
}

const builtCar = Object.assign(car, fabrication)

console.log('Build car:', builtCar)

console.log('Keys:', Object.keys(builtCar))

let nu = [0,1,2,3,4,5,6,7]

console.log(
  'Array slice',
  nu.slice(3),
  nu.slice(3, 4),
  nu.slice(3, -2),
)

console.log('Reverse', nu.reverse())