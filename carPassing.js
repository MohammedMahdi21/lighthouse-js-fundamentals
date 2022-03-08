const carPassing = function (cars, speed) {
  let newCars = cars;
  let arrayObject = {};
  arrayObject.time = Date.now();
  arrayObject.speed = speed;
  newCars.push(arrayObject);
  return newCars;
};
const cars = [
  {
    time: 1568329654807,
    speed: 40
  },
  {
    time: 1568329821632,
    speed: 42
  },
  {
    time: 1568331115463,
    speed: 35
  }
];

const speed = 38;

console.log(carPassing(cars, speed));
