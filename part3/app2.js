// Function Declaration

calcAge1(1990); // 가능

function calcAge1(birthYear) {
	return 2023 - birthYear;
}

console.log(calcAge1(1990));

// Function Expression

calcAge2(1992); // 불가능

const calcAge2 = function (birthYear) {
	return 2023 - birthYear;
};

console.log(calcAge2(1992));

// Arrow Function

const calcAge3 = (birthYear) => 2023 - birthYear;

console.log(calcAge3(1994));
