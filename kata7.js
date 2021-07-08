const checkAir = function (samples, threshold) {

let dirtyAir = 0;

  for (let i = 0; i < samples.length; i++) {
    if (samples[i] === 'dirty') {
      dirtyAir++
    }
  } if (dirtyAir/samples.length > threshold) {
    return "Polluted"
  } else {
    return "Clean"
  }
};

// step 1: list down what I have to do
// step 2: create "look through" the array with "for loop"
// step 3: check if list outs the "indexes"
// step 4: create a layout of "if" & "esle if" statement first 
// step 5: create "dirtyAir" variable before the "for" and after the "function"
// step 6: count the 'dirty's with "if" statement and add up
// step 7: NOW, write if dirtyAir % is bigger than threshold
// step 8: decide where to return.

// polluted = number of dirty / index.length > threshold
// clean    = otherwise 

// if dirty = return "polluted"
// if clean = return "clean"

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.4286
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.4285
));