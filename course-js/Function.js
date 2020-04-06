function printNumbers(...args) {// rest parameter
  const newArgs = [...args];// Destructuring assignment with Operador spread
  for (arg in newArgs) {
    console.log(newArgs[arg])
  }
}

printNumbers(1,2,3,4,5)
printNumbers(1,2,3,4)