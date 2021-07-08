const sumLargestNumbers = function(data) {
  let largestA = Math.max(...data);

  data.splice(data.indexOf(largestA), 1);
  let largestB = Math.max(...data);

  return largestA + largestB;
};

console.log(sumLargestNumbers([-1, -10]));
console.log(sumLargestNumbers([-1, -2, -3]));
console.log(sumLargestNumbers([-10, -4, -34, -6, -92, -2]));