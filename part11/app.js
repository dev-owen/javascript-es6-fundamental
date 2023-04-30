// Object Literal
// 1.
const objectName = {
  a: 1,
  b: 'bb'
};

const outsideObject = {
  objectName: objectName
}

console.log(outsideObject.objectName);

const es6OutsideObject = {
  objectName
}

console.log(es6OutsideObject.objectName);

// 2.
const objectMethods = {
  method1: function () {
    console.log('this is method');
  }
}

objectMethods.method1();

const es6ObjectMethods = {
  method1() {
    console.log('this is method es6');
  }
}

es6ObjectMethods.method1();

// 3.
const arr = ['a', 'b', 'c'];
const objectWithOperation = {
  [arr[0]]: 'this is a',
  [`${1+3+'ha'}`]: 'this is 4ha'
}

console.log(objectWithOperation);

// optional chaining

const weekdays = {
  mon: {
    open: 10,
    close: 22
  },
  tue: {
    open: 11,
    close: 20
  }
}

console.log(weekdays.mon)
console.log(weekdays.mon.open)
console.log(weekdays.wed)

// console.log(weekdays.wed.open)
if(weekdays.wed) console.log(weekdays.wed.open);
console.log(weekdays.wed?.open)

const thisIsNull = null;
// console.log(thisIsNull.a);
console.log(thisIsNull?.a);

objectMethods.method1();
objectMethods.method2?.() ?? console.log('no method');
