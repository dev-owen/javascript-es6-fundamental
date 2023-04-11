// Function

function logger() {
	console.log("logging...");
}

logger();
logger();
logger();

function buySomeFruits(bananaCount, lemonCount) {
	const fruits = `바나나 ${bananaCount}개, 레몬 ${lemonCount}개를 샀다.`;
	return fruits;
}

const bananasAndLemons = buySomeFruits(4, 5);
console.log(bananasAndLemons);
