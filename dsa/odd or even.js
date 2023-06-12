// /*
// Let us find out what your Vowel Constant is!
// */

// /*===== 1. Update your name in this variable, between the quotes =====*/
// export const name = 'shobitha';

// /*===== 1. Get vowel values =====*/

// function getVowelValue(char) {
// 		let vowelValue = -1
// 		switch(char) {
// /*===== Finish this switch block with necessary "Case" blocks =====*/
// case "a":
//       return 1; 
//     case "e":
//       return 2; 
//     case "i":
//       return 3; 
//     case "o":
//       return 4; 
//     case "u":
//       return 5; 
//     default:
//             return vowelValue;
// 		}
			
// }

// /*===== 2. Calculate Vowel Constant =====
//  - Do not use individual variables for vowel indexes.
//  - Use getVowelIndex('a'), getVowelIndex('e') 
// 	 for respective vowel index in the calculation
// */
// export function myVowelConstant() {
//    let vowelConstant = false;
//   const vowels = ["a", "e", "i", "o", "u"];
//    /* Your code begins, use as many lines needed */
//         for (let i = 0; i < fullName.length; i++) {
//     const character = fullName[i].toLowerCase();
//     if (vowels.includes(character)) {
//       // Calculate the position of the vowel by adding 1 to the index
//       const vowelPosition = i + 1;
//       // Get the value of the vowel using the getVowelValue function
//       const vowelValue = getVowelValue(character);
//       // Add the product of vowel position and vowel value to the vowelConstant
//       vowelConstant += vowelPosition * vowelValue;
//     }
//   }


//    /* Your code ends */
//    console.log('The vowel constant of the name %s is %s', name, vowelConstant)
//    return vowelConstant;
// }

// /*===== 3. Decide if vowel constant is odd or even =====
// 				And change the variable oddOrEven accordingly 
// 				(1 if your vowel constant is an odd number
// 				and 0 if your vowel constant is an even number.)
// */
// export function oddOrEven(number) {
//   if (number % 2 === 0) {
//     return 0; // Even number
//   } else {
//     return 1; // Odd number
//   }
// }
// /**
//  Complete this function to check whether a number is odd or even.
//  Return 1 if the number is odd or else return 0. 
//  */


// export function amIOdd() {
//    let oddOrEven = 'ERROR';
//    const vowelConstant = myVowelConstant();
//   if (vowelConstant % 2 === 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
// }



// const isConstantOddOrEven = amIOdd();

//    /* 
//    Your code begins, use as many lines needed 
//    HINT: 
//    1. First assign a variable with the value of your vowel constant 
//       by calling the function you defined above
//    2. Then check if it is odd or even using the function you completed above
//    */
  

  

//    /* Your code ends */
//    console.log('My vowel constant %s', oddOrEven ? 'ODD' : 'EVEN')
//    return oddOrEven;
// }


function checking(time)  {
  if (time <= 12) {
    return "Good Morning";
  } else if (time <= 16) {
    return "Good Afternoon";
  } else if (time <= 20) {
    return "Good Evening!";
  } else {
    return "Good Night!";
  }
}
console.log(checking(13));