// Closure
// 1.

const passengerBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log('passengerCount', passengerCount);
  }
}

const booker = passengerBooking();

// 2.
booker();
booker();
booker();
