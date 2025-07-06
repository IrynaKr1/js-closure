const iteration = Number(prompt('Enter start value: '));
const step = Number(prompt('Enter step value: '));

function customCounter(iteration, step) {
  let i = iteration;
  return function () {
    return (i += step);
  };
}

const counter1 = customCounter(iteration, step);

console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
