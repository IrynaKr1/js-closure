const iteration = Number(prompt('Enter start value: '));
const step = Number(prompt('Enter step value: '));
console.log(iteration);
console.log(step);

function customCounter() {
  let i = iteration;
  return function () {
    return (i += step);
  };
}

const counter1 = customCounter();

console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
