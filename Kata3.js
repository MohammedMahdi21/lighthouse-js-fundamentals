const vowels = ["a","e","i","o","u"]

let numberOfVowels = function(data) {
  let counter = 0; // initialize counter

  //loop through data to see if each character is a vowels
  for (let letter of data){
    if (vowels.includes(letter)){
      counter++
    }
  }
// Return number of vowels
return counter

};
// Log formatted response to console
console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));