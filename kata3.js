const numberOfVowels = function(data) {

  let vowels = 0;

  for (let i = 0; i < data.length; i++) {
    if (data.charAt(i) == 'a' || data.charAt(i) == 'e' || data.charAt(i) == 'i' || data.charAt(i) == 'o' || data.charAt(i) == 'u') {
      vowels++;
    }
  }
  return vowels;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
console.log(numberOfVowels("aaaa bbbb cccc eeee"));