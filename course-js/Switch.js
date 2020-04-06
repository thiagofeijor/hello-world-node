let name = 'Feijó'

switch(name) {
  case "Feijó":
    console.log('Yes, sir!');
    break;
  dafault:
    console.log('dead code');
    break;
}

switch (true) {
  case name[1] === 'p':
    console.log('dead code');
    break
  case (typeof name === 'string'):
    console.log('is string');
    break
  case (name.length === 5):
    console.log('has 5 letters');
    break
}