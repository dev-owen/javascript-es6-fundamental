// 1.
// console.log(this);

// 2.
const calcAge = function (birthYear) {
  console.log(2033 - birthYear);
  // console.log(this); // function's global object
}
calcAge(1994);

// 3.
const calcAgeArrow = (birthYear) => {
  console.log(2033 - birthYear);
  // console.log(this); // parent's global scope
}
calcAgeArrow(1994);

// 4.

const owen = {
  firstName: 'Alex',
  year: 1993,
  calcAge: function () {
    console.log(this);
    console.log(2033 - this.year);

    // 9.
    const isMillenial = () => {
      console.log(this); // parent Object -> owen
      console.log(this.year);
    };
    isMillenial();
  },
  // 7.
  greet: () => console.log(`안녕 ${this.firstName}`), // undefiend, parent scope는 global scope, global scope에서 this 키워드 사용.
  // 8.
  greet2: function() {console.log(`안녕22 ${this.firstName}`);}
}
owen.greet();
owen.greet2();

owen.calcAge(); // owen Object

// 5.
const sarah = {
  year: 2023,
}

sarah.calcAge = owen.calcAge;
sarah.calcAge();

// 6.
const foo = owen.calcAge;
foo(); // error, 일반 함수 호출, 어떠한 Object에도 속해있지 않음, 2번이랑 비슷함
