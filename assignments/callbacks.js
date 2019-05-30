// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

//problem 1

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

getLength(items, function(lengthOfArray) {
  console.log(lengthOfArray);
});

//problem 2

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  let lastItem = arr.length - 1;
  return cb(arr[lastItem]);
}

last(items, function(lastInArray) {
  console.log(lastInArray);
});

//problem 3

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  let sum = x + y;
  return cb(sum);
}

sumNums(3, 6, function(sumResult) {
  console.log(sumResult);
});

//problem 4

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  let product = x * y;
  return cb(product);
}

multiplyNums(2, 9, function(productResult) {
  console.log(productResult);
});

//problem 5

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  if (list.includes(item)) {
    return cb(true);
  } else {
    return cb(false);
  }
}

contains('knife', items, function(containsItem) {
  console.log(containsItem);
});

/* STRETCH PROBLEM */

const duplicateArray = [
  'Pencil',
  'Notebook',
  'yo-yo',
  'Gum',
  'Pencil',
  'Notebook',
  'yo-yo',
  'another!'
];

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let newArr = array.filter(function(item, index) {
    return array.indexOf(item) >= index;
  });
  return cb(newArr);
}

removeDuplicates(duplicateArray, function(theNewArr) {
  console.log(theNewArr);
});
