// 2.
console.log(me);
// console.log(job); // error
// console.log(year); // error

// 1.
var me = 'Owen';
let job = 'engineer';
const year = 1993;

// 4.
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3)); // error
// console.log(addArrow(2, 3)); // error

// 3.
function addDecl(a, b) {
  return a + b;
}

// const addExpr = function (a, b) { // error, var로 바꿔도 에러
//  return a + b;
//}

// const addArrow = (a, b) => a + b; // error, var로 바꿔도 에러

// 5.
if(!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('모든 상품 삭제'); // 왜 실행?? numProducts 가 undefined, var를 쓰지 말아라
}
