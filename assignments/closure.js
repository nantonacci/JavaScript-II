// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function helloWorld(name) {
  let greeting = 'Hello';

  let speak = function() {
    console.log(`${greeting}, ${name}!`);
  };
  return speak();
}

helloWorld('Nico');

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return () => {
    return ++count;
  };
};

const newCounter = counter();
console.log(newCounter());

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  let obj = {
    increment() {
      return ++count;
    },
    decrement() {
      return --count;
    }
  };
  return obj;
};

console.log(counterFactory());
