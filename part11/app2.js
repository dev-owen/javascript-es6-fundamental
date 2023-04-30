// Map
const thisIsMap = new Map();
thisIsMap.set(1, 'this is 1');
thisIsMap.set(true, 'this is true');
thisIsMap.set('aa', 'this is aa');
console.log(thisIsMap);
console.log(thisIsMap.get(1));
console.log(thisIsMap.get(true));
console.log(thisIsMap.get(2));

for (const element of thisIsMap) {
  console.log(element);
}

thisIsMap.delete(1);

// Set
const thisIsSet = new Set();
thisIsSet.add('pizza');
thisIsSet.add('pasta');
thisIsSet.add(1);
thisIsSet.add(true);
console.log(thisIsSet);
thisIsSet.add('pasta');
console.log(thisIsSet.has('pizza'));
console.log(thisIsSet.has('risotto'));

for (const element of thisIsSet) {
  console.log(element);
}
