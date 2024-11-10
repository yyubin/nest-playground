const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

// const carsByMake = [
//   ['f150'],
//   ['corolla'],
//   ['camaro']
// ];

const carsByMake: string[][] = [];

// Help with inference when extracting values
const firstCar = carMakers[0];
const myCar = carMakers.pop();

// Prvent incompatible values
// carMakers.push(100);

// Help with map
carMakers.map((car: string): string => {
  return car.toUpperCase();
})

// Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2020-02-20');
importantDates.push(new Date());

