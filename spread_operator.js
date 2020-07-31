//ES9 (ES2018)

//Object spread operator

const animals = {
  tiger: 23,
  lion: 5,
  monkey: 2,
};

const { tiger, ...rest } = animals;

console.log(tiger); // 23
console.log(rest); //{lion: 5, monkey: 2}

//ES6
const array = [1, 2, 3, 4, 5];

function sum(a, b, c, d, e) {
  return a + b + c + d + e;
}

//the spread operator takes the array and assigns each value of the array to the paramters of the function sum in order
sum(...array); //15
