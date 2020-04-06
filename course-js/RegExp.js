let simpleString = 'Olá é ç 333 script @ # {} %{variavel_name} %{variavel_two} "_=+><~'

// [0-9]
let selectOnlyNumbers = /\d/g
console.log(simpleString.match(selectOnlyNumbers)) //  '3', '3', '3' ]
console.log(selectOnlyNumbers.exec(simpleString))

// [A-Za-z0-9_]
let selectAlfaNum = /\w/g
console.log(simpleString.match(selectAlfaNum))
/*[
  'O', 'l', '3', '3',
  '3', 's', 'c', 'r',
  'i
]*/

// [^A-Za-z0-9_]
let selectAlfaUpperNum = /\W/g
console.log(simpleString.match(selectAlfaUpperNum))
/*[
  'á', ' ', 'é', ' ', 'ç',
  ' ', ' ', ' ', '@', ' ',
  '#', ' ', '{', '}', ' ',
  '"', '=', '+', '>', '<',
  '~'
]*/

// 
let selectBlack = /\s/g
console.log(simpleString.match(selectBlack))
/*[
  ' ', ' ', ' ',
  ' ', ' ', ' ',
  ' ', ' '
] */

// 
let selectNoBlank = /\S/g
console.log(simpleString.match(selectNoBlank))
/*[
  'O', 'l', 'á', 'é', 'ç', '3',
  '3', '3', 's', 'c', 'r', 'i',
  'p', 't', '@', '#', '{', '}',
  '"', '_', '=', '+', '>', '<',
  '~'
]*/

// [^0-9]
let selectNoAlfa = /\D/g
console.log(simpleString.match(selectNoAlfa))
/*[
  'O', 'l', 'á', ' ', 'é', ' ',
  'ç', ' ', ' ', 's', 'c', 'r',
  'i', 'p', 't', ' ', '@', ' ',
  '#', ' ', '{', '}', ' ', '"',
  '_', '=', '+', '>', '<', '~'
]*/

// ^
let selectNotNoAlfa = /[^\D]/g
console.log(simpleString.match(selectNotNoAlfa))

// [^0-9]
let selectAll = /./g
console.log(simpleString.match(selectAll))
/*[
  'O', 'l', 'á', ' ', 'é', ' ',
  'ç', ' ', '3', '3', '3', ' ',
  's', 'c', 'r', 'i', 'p', 't',
  ' ', '@', ' ', '#', ' ', '{',
  '}', ' ', '"', '_', '=', '+',
  '>', '<', '~'
]*/

// 
let selector = /\%\{(.+?)\}/g
console.log(simpleString.match(selector))
// [ '%{variavel_name}', '%{variavel_two}' ]

// 
let CPF = /[0-9]{3}\.[0-9]{3}\.[0-9]{3}[-][0-9]{2}/g
console.log('000.000.000-90'.match(CPF))
