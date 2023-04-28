// 1.
const restaurant = {
  name: 'Super Pizza',
  location: 'Rome, Italy',
  startMenus: ['Focaccia', 'Bruschetta', 'Garlic Bread'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // 2.
  order: function (starterIndex, mainIndex) {
    return [this.startMenus[starterIndex], this.mainMenu[mainIndex]]
  },

  // 5. object
  opening: {
    mon: {
      open: 11,
      close: 22
    },
    tue: {
      open: 10,
      close: 23
    },
    sat: {
      open: 12,
      close: 20
    }
  },

  // 8.
  orderDelivery: function({starterIndex, mainIndex, time, address}) {
    console.log(`주문 접수 ${this.startMenus[starterIndex]} 와 ${this.mainMenu[mainIndex]}. ${time}시간에 맞춰서 ${address}로 도착 예정`)
  }
}

const arr = [1, 2, 3];
const [x, y, z] = arr;
console.log(x, y, z);

const [first, ,third] = restaurant.startMenus;
console.log(first, third);

// 3.
console.log(restaurant.order(1, 2));
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// 4.
const nested = [2, 4, [5, 6]];
const [i, ,j] = nested;
const [o, , [p, q]] = nested;

// 6.
const { name, opening } = restaurant;
const { name: restaurantName, opening: hours } = restaurant;
console.log(name);
console.log(opening);
console.log(restaurantName);
console.log(hours);

// 7.
const { mon: {open, close} } = hours
console.log(open, close);

// 9.
restaurant.orderDelivery({
  starterIndex: 1,
  mainIndex: 2,
  time: '14:00',
  address: 'Seoul, South Korea'
});

// 10.
const newArray = [5, 6, ...arr];
const str = 'Owen';
console.log([...str]);
console.log(...str);

// 11.
const [a, b, ...others] = [1,2,3,4,5];
console.log(a, b, others);

const [pizza, ,Risotto, ...otherFoods] = [...restaurant.mainMenu, ...restaurant.startMenus]
console.log(otherFoods);

const {sat, ...weekdays} = restaurant.opening;
console.log(weekdays);

// 12. function
const add = function (...numbers) {
  // console.log(numbers);
  let sum = 0;
  for(let i = 0; i < numbers.length; i++) sum += numbers[i];
  return sum;
};

add(2, 3);
add(2, 3, 4, 5);
add(9, 9, 9, 9, 9, 4, 6);
