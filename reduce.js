const message = [1,2,3,4,5,6,7,8];

// function to join each string elements
function dinesh(accumulator, currentValue) {
  return accumulator + currentValue;
}

// reduce join each element of the string
let x = message.reduce(dinesh);
console.log(x);