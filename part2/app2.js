// Operator

// 할당 연산자 (Assignment Operators)
const myAppleCount = 5;
const yourAppleCount = 10;
const totalAppleCount = myAppleCount + yourAppleCount; // 15

let appleCount = 4;
appleCount += 10;
console.log(appleCount); // 14

appleCount -= 5;
console.log(appleCount); // 9

appleCount *= 2;
console.log(appleCount); // 18

appleCount /= 3;
console.log(appleCount); // 6

// 타입 변환과 타입 강제
const birthYear = "1990";
console.log(Number(birthYear) + 10); // 2000
console.log(Number("Hello")); // NaN
console.log(String(30), 30);

console.log("나는 " + 30 + "살입니다.");
console.log("20" - 5.5);

// 비교 연산자 (Comparison Operators)

const myName = "John";
let yourName = "Paul";
console.log(myName == yourName);

yourName = "John";
console.log(myName == yourName);

const stringThree = "3";
const numberThree = 3;
console.log(stringThree == numberThree); // true, 값이 같은 경우
console.log(stringThree === numberThree); // false, 값과 타입이 같은 경우

const stringIsTrue = "true";
const booleanIsTrue = true;
const numberIsTrue = 1;
console.log(stringIsTrue === booleanIsTrue); // false
console.log(booleanIsTrue == stringIsTrue); // false, "true" is converted to NaN, while true is converted to 1
console.log(numberIsTrue == booleanIsTrue); // true

// 산술 연산자 (Arithmetic Operators)

let num = 3;
num++;
console.log(num); // 4
num--;
console.log(num); // 3

// 논리 연산자 (Logical Operators)

const a1 = true && true; // t && t는 true 반환
const a2 = true && false; // t && f는 false 반환
const a3 = false && true; // f && t는 false 반환
const a4 = false && 3 == 4; // f && f는 false 반환
const a5 = "Cat" && "Dog"; // t && t는 Dog 반환
const a6 = false && "Cat"; // f && t는 false 반환
const a7 = "Cat" && false; // t && f는 false 반환

const o1 = true || true; // t || t는 true 반환
const o2 = false || true; // f || t는 true 반환
const o3 = true || false; // t || f는 true 반환
const o4 = false || 3 == 4; // f || f는 false 반환
const o5 = "Cat" || "Dog"; // t || t는 Cat 반환
const o6 = false || "Cat"; // f || t는 Cat 반환
const o7 = "Cat" || false; // t || f는 Cat 반환

// 삼항 연산자 (Conditional Operators)

const age = 17;
const AdultCheck = age > 18 ? "성년" : "미성년";
