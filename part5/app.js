// 1.
function calcAge(birthYear) {
  const age =  2023 - birthYear;
  console.log(firstName);
  // console.log(name); // error

  // 3.
  function printAge() {
    const output = `${firstName}님, 당신은 ${age}살이고, ${birthYear}년에 태어났다.`;
    console.log(output);

    // 4.
    if (birthYear >= 1981 && birthYear <= 1996) {
      // 5.
      var millenial = true;
      // 7.
      const firstName = 'Kevin';

      const str = `${firstName}, 당신은 밀레니얼!`;
      console.log(str);

      // 6.
      function add(a, b) { // strict mode 에서는 block scope, 바깥에서 접근 불가능
        return a + b;
      }
    }
    // console.log(str); // error
    console.log(millenial); // var는 블록 스코프가 아니라서 바깥에서 접근 가능
    console.log(add(2, 3));
  }
  printAge();

  return age;
}
// 2.
const firstName = 'Owen';
calcAge(1990);
// console.log(age); // error
// printAge(); // error
