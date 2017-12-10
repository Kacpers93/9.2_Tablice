var womansNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var mansNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = womansNames.concat(mansNames);

var newName = 'Marian';

if (allNames.indexOf(newName) === -1) allNames.push(newName);

console.log(allNames);