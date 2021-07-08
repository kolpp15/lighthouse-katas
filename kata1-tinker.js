const sumLargestNumbers = function(data) {
  let largestA = 1;
  let largestB = 2;

  for (let i = 0; i < data.length; i++) {
    if (data[i]>largestA) {
      largestB = largestA;
      largestA = data[i];
    } else if (data[i] > largestB) {
       largestB = data[i];
    }
  }
  return largestA + largestB;
};

const sumLargestNumbers = function(data) {
  let largestA = Math.max(...data);

  data.splice(data.indexOf(largestA), 1);
  let largestB = Math.max(...data);

  return largestA + largestB;
};


console.log(sumLargestNumbers([-1, -10]));
console.log(sumLargestNumbers([-1, -2, -3]));
console.log(sumLargestNumbers([-10, -4, -34, -6, -92, -2]));
