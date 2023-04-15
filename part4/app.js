// Array
const fruit1 = 'apple';
const fruit2 = 'banana';
const fruit3 = 'kiwi';
const fruits = [fruit1, fruit2, fruit3];
console.log(fruits);
const differentTypeArray = ['hello', 23, true, null];
console.log(differentTypeArray);
console.log(fruits[2]);
console.log(fruits.length);
fruits[2] = 'mango';
console.log(fruits); // 설명 1. 왜 변해??

const birthYearArray = [1990, 1993, 1998];
const calculateAge = (birthYear) => 2023 - birthYear;
// 설명 2. 어떻게 나이를 얻을 수 있을까?
const agesArray = birthYearArray.map(birthYearValue => calculateAge(birthYearValue));
console.log(agesArray);

const cars = ['hyundai', 'bmw', 'audi'];
// methods

// add element
cars.push('toyota'); // last
console.log(cars);
cars.unshift('kia'); // first
console.log(cars);

// remove element
cars.pop(); // last
console.log(cars);
cars.unshift(); // pop

// get Index
console.log(cars.indexOf('bmw'));

// is contain
console.log(cars.includes('audi'));
console.log(cars.includes('volvo'));

// 여러 개의 배열 연결
const array1 = [1,2,3];
const array2 = [4,5,6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray);

// 검색 javascript array method: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array

// Objects, key-value pair

const profile = {
  firstName: 'Kevin',
  lastName: 'Kim',
  age: 30,
  job: 'engineer',
  isMarried: false
}

console.log(profile);
console.log(profile.firstName);
console.log(profile['lastName']);

profile.age = 31;
console.log(profile);

// 여러개의 오브젝트 연결
const obj1 = {
  name: 'Owen',
  age: 35
};

const obj2 = {
  address : 'Seoul',
  job: 'engineer'
};

const combinedObject = {
  ...obj1,
  ...obj2
}

console.log(combinedObject);

// 검색 : Javascript Object Method

console.log(Object.keys(combinedObject));
console.log(Object.keys(combinedObject).map(key => combinedObject[key]));
