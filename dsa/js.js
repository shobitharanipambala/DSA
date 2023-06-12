Let us find out what your Vowel Constant is!
*/
/*===== 1. Update your name in this variable =====*/
export const name = '';
/*===== 2. Declare required variables =====*/
/* Your code begins, use as many lines needed */
const vowelValues = { a: 1, e: 2, i: 3, o: 4, u: 5 };
const consonantIndex = 5;
/* Your code ends */
/*
===== 3. Calculate Vowel Constant and assign the value to the variable vowelConstant =====
But wait, vowelConstant is already defined as boolean (false). Can you reassign a number?
Why don't you try?!
*/
export function myVowelConstant() {
   let vowelConstant = 0;
   /* Your code begins, use as many lines needed */
   for (let i = 0; i < name.length; i++) {
     let letter = name[i].toLowerCase();
     if (vowelValues.hasOwnProperty(letter)) {
       vowelConstant += vowelValues[letter] * (i + 1);
     }
   }
   /* Your code ends */
   console.log('The vowel constant of the name %s is %s', name, vowelConstant)
   return vowelConstant;
}
/*
===== Oops! Now the consonants feel left out. Why don't you assign a fixed value,
say 5 as the index value and calculate the Consonant Constant of your name.
*/
/*===== 4. Declare a variable for consonant index with value 5 =====*/
/* Your code begins */
/* Your code ends */
/*
===== 5. Calculate Consonant Constant of your name and assign the value to the variable conConstant =====
NOTE :
For consonant constant, of course you have to consider each consonant and its position in your name.
Remember, all consonants have the same value : 5 as you'd declare above in step 4
*/
export function myConConstant() {
   let conConstant = 0;
   /* Your code begins, use as many lines needed */
   for (let i = 0; i < name.length; i++) {
     let letter = name[i].toLowerCase();
     if (!vowelValues.hasOwnProperty(letter) && letter !== ' ') {
       conConstant += consonantIndex * (i + 1);
     }
   }
   /* Your code ends */
   console.log('The consonant constant of the name %s is %s', name, conConstant)
   return conConstant;
}
// =================================================


// Step 1: Define your full name as a string
const fullName = "Your Full Name";

// Step 2: Define a function to get the value of each vowel
function getVowelValue(vowel) {
  // Implement the logic to assign the appropriate value for each vowel
  switch (vowel) {
    case "a":
      return 1; // Assign the value for vowel 'a'
    case "e":
      return 2; // Assign the value for vowel 'e'
    case "i":
      return 3; // Assign the value for vowel 'i'
    case "o":
      return 4; // Assign the value for vowel 'o'
    case "u":
      return 5; // Assign the value for vowel 'u'
    default:
      return 0; // Return 0 if the character is not a vowel
  }
}

// Step 3: Define a function to calculate the Vowel Constant
function myVowelConstant() {
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelConstant = 0;

  // Iterate over each character of the full name
  for (let i = 0; i < fullName.length; i++) {
    const character = fullName[i].toLowerCase();
    if (vowels.includes(character)) {
      // Calculate the position of the vowel by adding 1 to the index
      const vowelPosition = i + 1;
      // Get the value of the vowel using the getVowelValue function
      const vowelValue = getVowelValue(character);
      // Add the product of vowel position and vowel value to the vowelConstant
      vowelConstant += vowelPosition * vowelValue;
    }
  }

  return vowelConstant;
}

// Step 4: Define a function to check if the Vowel Constant is odd or even
function amIOdd() {
  const vowelConstant = myVowelConstant();
  if (vowelConstant % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

// Step 5: Get your Vowel Constant by calling myVowelConstant function
const constant = myVowelConstant();

// Step 6: Determine if the Vowel Constant is odd or even by calling amIOdd function
const isConstantOddOrEven = amIOdd();

console.log("My Vowel Constant is:", constant);
console.log("The Vowel Constant is", isConstantOddOrEven);



