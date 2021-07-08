const conditionalSum = function(values, condition) {

let addArray = 0;

for (let i = 0; i < values.length; i++) {
  if (condition === "even" && values[i] % 2 === 0) {
    addArray += values[i];
  } else if (condition === "odd" && values[i] % 2 !== 0) {
    addArray += values[i];
  } else {
    0;
  }
}
return addArray;
};


console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));

