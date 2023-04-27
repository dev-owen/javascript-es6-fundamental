// 1.
let myAddress = 'Seoul';
let oldMyAddress = myAddress;
myAddress = 'Busan';
console.log(myAddress, oldMyAddress);

const profile = {
  address: 'Seoul'
};
const afterProfile = profile;
afterProfile.address = 'Busan';
console.log(profile);
console.log(afterProfile);

// 2. 객체 복사하기
const profile2 = {
  address: 'Seoul',
  family: ['Tony', 'Chris']
};

const profile2Copy = Object.assign({}, profile2); // 얕은 복사. 프로퍼티가 원시 타입이면 복사 O, 객체 타입이면 X
profile2Copy.address = 'Daegu';

profile2Copy.family.push('Levin');
profile2Copy.family.push('Roy');

console.log(profile2);
console.log(profile2Copy);

// deep clone은 lodash 사용 권장

