// 1.
const koreanAir = {
  airline: 'KoreanAir',
  iataCode: 'KAL',
  bookings: [],
  book(flightNum, name) {
    console.log(`${name}이 ${this.airline} 항공의 ${this.iataCode}${flightNum}를 예약`);
    this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
  }
}

koreanAir.book(123, 'Owen');
koreanAir.book(456, 'Kim');

// 2.
const asiana = {
  airline: 'Asiana',
  iataCode: 'ASA',
  bookings: [],
  // 여기에 book 메서드를 어떻게 중복 코드 없이 추가?
};

const book = koreanAir.book;
// book(23, 'Sara'); // NOT Work

book.call(asiana, 23, 'Sara');
console.log(asiana);
book.call(koreanAir, 455, 'John');
console.log(koreanAir);

// 3.
const flightData = [222, 'George'];
book.apply(asiana, flightData);
console.log(asiana);

book.call(asiana, ...flightData); // 정확히 동일

// 4.
const bookASA = book.bind(asiana);
bookASA(66, 'Rebecca');

const bookASA55 = book.bind(asiana, 55);
bookASA55('Micheal');
